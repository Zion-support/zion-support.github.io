#!/usr/bin/env python3
"""
Biweekly Cron: Content calendar refresh for Zion Tech Group.

This script:
1. Checks the existing blog content plan and current blog post count
2. Identifies gaps in the content calendar (missing clusters/topics)
3. Generates a refreshed 14-day content calendar with new topics
4. Saves the refreshed plan to reports/content-calendar-biweekly-latest.json
5. Only refreshes if new posts have been published since the last refresh
   (or if the calendar is stale — older than 14 days)

Schedule: every other Sunday at 10:00
Cron: 0 10 */14 * *
"""

import json
import os
from datetime import datetime, timezone, timedelta
from pathlib import Path
import re

WORKSPACE = Path("/Users/miami2/zion.app/automation")
REPORTS_DIR = WORKSPACE / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

BLOG_DIR = Path("/Users/miami2/zion.app/blog")
CONTENT_PLAN_PATH = REPORTS_DIR / "blog-content-plan-2026-09-07.json"
OUTPUT_PATH = REPORTS_DIR / "content-calendar-biweekly-latest.json"

# Content clusters and topic ideas — the engine behind the calendar
CONTENT_CLUSTERS = {
    "AI Automation & Agents": [
        "Building AI Agent Workflows for Small Business",
        "RAG for Customer Support: A Practical Guide",
        "AI-Powered Data Pipelines: Architecture Patterns",
        "No-Code AI Automation for Non-Technical Teams",
        "AI Agent Evaluation: Metrics That Matter",
    ],
    "Cybersecurity & Privacy": [
        "Zero Trust for SMBs: Implementation Checklist",
        "AI in Cybersecurity: Threat Detection at Scale",
        "HIPAA Compliance for HealthTech Startups",
        "GDPR and Brazilian Data Protection: A Guide for LATAM",
        "SOC 2 for AI-Powered Services",
    ],
    "Cloud Migration & FinOps": [
        "Cloud Cost Optimization for Growing Startups",
        "Migration Playbook: Legacy to Cloud-Native",
        "AWS vs Azure vs GCP for AI Workloads in 2026",
        "Multi-Cloud Strategy for Resilient Infrastructure",
        "Serverless Cost Control: Beyond the Free Tier",
    ],
    "Healthcare & Biotech": [
        "AI in Patient Triage: Clinical Validation",
        "HIPAA-Compliant AI: What's Allowed",
        "HealthTech Data Pipelines: From EHR to Insights",
        "AI for Medical Imaging: Use Cases and Regulations",
        "Telemedicine Platform Architecture",
    ],
    "Brazilian Market (PT-BR)": [
        "Adoção de IA nas PMEs brasileiras: Guia 2026",
        "LGPD e IA: Compliance para empresas brasileiras",
        "Cloud para concorrentes de TI no Brasil: AWS, Azure, GCP",
        "Automação de vendas com IA para empresas brasileiras",
        "Transformação digital para indústrias brasileiras",
    ],
    "SaaS & Startups": [
        "Pricing Strategy for AI SaaS Products",
        "GTM for AI-First Startups: A Playbook",
        "Building Multi-Tenant Architecture for Scale",
        "AI Feature Adoption: Driving User Engagement",
        "From MVP to Scale: Engineering for Growth",
    ],
    "DevOps & Engineering": [
        "CI/CD for ML Models: MLOps Best Practices",
        "Kubernetes for AI Workloads: Cost vs Complexity",
        "Infrastructure as Code for AI Teams",
        "Monitoring AI Systems in Production",
        "Testing Strategies for AI-Powered Applications",
    ],
    "Digital Transformation": [
        "Measuring AI ROI: Frameworks for Enterprises",
        "Change Management for AI Adoption",
        "AI Readiness Assessment: Is Your Company Ready?",
        "Upskilling Teams for the AI Era",
        "Building a Data-Driven Culture",
    ],
}

# Default 14-day calendar: 7 posts, every other day
DEFAULT_CALENDAR = [
    ("AI Automation & Agents", "Building AI Agent Workflows for Small Business"),
    ("Cybersecurity & Privacy", "Zero Trust for SMBs: Implementation Checklist"),
    ("Cloud Migration & FinOps", "Cloud Cost Optimization for Growing Startups"),
    ("SaaS & Startups", "Pricing Strategy for AI SaaS Products"),
    ("Digital Transformation", "Measuring AI ROI: Frameworks for Enterprises"),
    ("Brazilian Market (PT-BR)", "Adoção de IA nas PMEs brasileiras: Guia 2026"),
    ("DevOps & Engineering", "CI/CD for ML Models: MLOps Best Practices"),
]


HTML_TITLE_RE = re.compile(r"<(title|h1)[^>]*>(.*?)</\1>", re.DOTALL | re.IGNORECASE)


def _strip_site_suffix(title):
    """Remove the '| Zion Tech Group' suffix that wraps HTML <title> tags."""
    return re.sub(r"\s*\|\s*Zion Tech Group.*$", "", title, flags=re.IGNORECASE).strip()


def _extract_title_from_html(html_text):
    """Pull the most meaningful title from an HTML blog post (prefer <h1>, fall back to <title>)."""
    titles = HTML_TITLE_RE.findall(html_text)
    for tag, raw in titles:
        cleaned = re.sub(r"<[^>]+>", "", raw).strip()
        if cleaned:
            return _strip_site_suffix(cleaned)
    return None


def count_blog_posts(blog_dir):
    """Count actual blog posts.

    The Zion blog renders each post as a directory containing an ``index.html``
    (the markdown source is not on disk), plus a handful of standalone ``.md``
    posts. We count both so the number reflects real published content.
    """
    if not blog_dir.exists():
        return 0
    count = 0
    # One index.html per post directory
    for f in blog_dir.rglob("index.html"):
        count += 1
    # Standalone markdown posts at the blog root
    for f in blog_dir.glob("*.md"):
        if f.name in ("index.md", "README.md", "_index.md"):
            continue
        count += 1
    return count


def get_blog_topics(blog_dir):
    """Extract existing blog post titles.

    Reads titles from HTML posts (``index.html`` -> ``<h1>``/``<title>``) and
    from standalone markdown posts (``title`` frontmatter). Returns a set of
    normalized (lowercase, stripped) titles used for cluster-gap detection.
    """
    topics = set()
    if not blog_dir.exists():
        return topics
    # HTML posts
    for html_file in blog_dir.rglob("index.html"):
        try:
            content = html_file.read_text(encoding="utf-8", errors="ignore")
            title = _extract_title_from_html(content)
            if title:
                topics.add(title.lower())
        except Exception:
            pass
    # Standalone markdown posts
    for f in blog_dir.glob("*.md"):
        if f.name.startswith("_") or f.name in ("index.md", "README.md"):
            continue
        try:
            content = f.read_text(encoding="utf-8", errors="ignore")
            title_match = re.search(r'^title:\s*"?([^"\n]+)"?', content, re.MULTILINE)
            if title_match:
                topics.add(title_match.group(1).strip().lower())
        except Exception:
            pass
    return topics


def load_existing_plan():
    """Load the existing blog content plan."""
    if not CONTENT_PLAN_PATH.exists():
        # Check for any previous biweekly plan
        existing = OUTPUT_PATH
        if existing.exists():
            try:
                with open(existing) as f:
                    return json.load(f)
            except Exception:
                pass
        return None
    try:
        with open(CONTENT_PLAN_PATH) as f:
            return json.load(f)
    except Exception:
        return None


def main():
    ts = datetime.now(timezone.utc)
    plan = load_existing_plan()

    # Gather current state
    blog_post_count = count_blog_posts(BLOG_DIR)
    existing_topics = get_blog_topics(BLOG_DIR)

    # Determine if refresh is needed
    last_plan_ts = None
    if plan and isinstance(plan, dict):
        last_plan_ts = plan.get("generated_at") or plan.get("created_at")

    needs_refresh = True
    if plan and last_plan_ts:
        try:
            last_dt = datetime.fromisoformat(last_plan_ts.replace("Z", "+00:00"))
            age_days = (ts - last_dt).days
            if age_days < 14:
                needs_refresh = False
        except Exception:
            pass

    # Determine if any new posts were published since last calendar refresh
    # Compare blog post count with last known count
    last_known_count = plan.get("blog_post_count", 0) if plan else 0
    new_posts_published = blog_post_count > last_known_count

    # Build the calendar
    calendar_posts = []

    if needs_refresh or new_posts_published:
        # Generate a fresh 14-day calendar
        for i, (cluster_name, topic_title) in enumerate(DEFAULT_CALENDAR):
            post_date = (ts + timedelta(days=i * 2)).strftime("%Y-%m-%d")
            slug = re.sub(r"[^a-z0-9]+", "-", topic_title.lower()).strip("-")
            lang = "pt-BR" if cluster_name == "Brazilian Market (PT-BR)" else "en"
            calendar_posts.append({
                "date": post_date,
                "cluster": cluster_name,
                "title": topic_title,
                "target_url": f"/blog/{slug}/",
                "lang": lang,
                "status": "planned" if topic_title.lower() not in existing_topics else "already_exists",
            })

        # Pick 3 additional topics that don't already exist
        extra_pool = []
        for cluster, topics in CONTENT_CLUSTERS.items():
            for t in topics:
                if t.lower() not in existing_topics and t.lower() not in {p["title"].lower() for p in calendar_posts}:
                    extra_pool.append((cluster, t))

        for i, (cluster_name, topic_title) in enumerate(extra_pool[:3]):
            post_date = (ts + timedelta(days=14 + i * 2)).strftime("%Y-%m-%d")
            slug = re.sub(r"[^a-z0-9]+", "-", topic_title.lower()).strip("-")
            lang = "pt-BR" if cluster_name == "Brazilian Market (PT-BR)" else "en"
            calendar_posts.append({
                "date": post_date,
                "cluster": cluster_name,
                "title": topic_title,
                "target_url": f"/blog/{slug}/",
                "lang": lang,
                "status": "planned",
            })
    else:
        # Load existing calendar from plan
        if plan and isinstance(plan, dict) and "new_titles" in plan:
            for t in plan["new_titles"]:
                calendar_posts.append({
                    "date": t.get("target_url", ""),
                    "cluster": t.get("cluster", ""),
                    "title": t.get("title", ""),
                    "target_url": t.get("target_url", ""),
                    "lang": t.get("lang", "en"),
                    "status": "already_exists" if t.get("title", "").lower() in existing_topics else "planned",
                })
        else:
            # Fallback: rebuild from default
            for i, (cluster_name, topic_title) in enumerate(DEFAULT_CALENDAR):
                post_date = (ts + timedelta(days=i * 2)).strftime("%Y-%m-%d")
                slug = re.sub(r"[^a-z0-9]+", "-", topic_title.lower()).strip("-")
                lang = "pt-BR" if cluster_name == "Brazilian Market (PT-BR)" else "en"
                calendar_posts.append({
                    "date": post_date,
                    "cluster": cluster_name,
                    "title": topic_title,
                    "target_url": f"/blog/{slug}/",
                    "lang": lang,
                    "status": "planned" if topic_title.lower() not in existing_topics else "already_exists",
                })

    # Determine missing clusters
    existing_clusters_in_plan = {p["cluster"] for p in calendar_posts}
    missing_clusters = [c for c in CONTENT_CLUSTERS.keys() if c not in existing_clusters_in_plan]

    existing_clusters_with_posts = set()
    for t in existing_topics:
        # Check if any topic from a cluster exists
        for cluster, topics in CONTENT_CLUSTERS.items():
            for topic in topics:
                if topic.lower() in t:
                    existing_clusters_with_posts.add(cluster)

    missing_clusters = [c for c in CONTENT_CLUSTERS.keys()
                        if c not in existing_clusters_with_posts]

    report = {
        "run_at": ts.isoformat(),
        "run_type": "biweekly_content_calendar_refresh",
        "needs_refresh": needs_refresh,
        "new_posts_published": new_posts_published,
        "blog_post_count": blog_post_count,
        "last_known_count": last_known_count,
        "existing_plan_ts": last_plan_ts,
        "existing_topics_count": len(existing_topics),
        "calendar": calendar_posts,
        "missing_clusters": missing_clusters,
        "total_planned": len(calendar_posts),
        "content_clusters_available": list(CONTENT_CLUSTERS.keys()),
    }

    # Build Telegram-ready summary
    planned = sum(1 for p in calendar_posts if p["status"] == "planned")
    already_exists = sum(1 for p in calendar_posts if p["status"] == "already_exists")

    summary = (
        f"📅 CONTENT CALENDAR REFRESH — Zion Tech Group (Biweekly)\n"
        f"Atualizado: {ts.strftime('%Y-%m-%d %H:%M UTC')}\n\n"
        f"🎯 Posts no blog: {blog_post_count}\n"
        f"Novos posts desde última atualização: {'sim' if new_posts_published else 'não'}\n"
        f"Calendário atualizado: {'sim' if (needs_refresh or new_posts_published) else 'não (calendário ainda fresco)'}\n\n"
        f"📝 Próximos 14 dias ({len(calendar_posts)} posts planejados):\n"
    )
    for p in calendar_posts[:7]:
        summary += f"  • [{p['date']}] {p['title']} ({p['lang']}) — {p['status']}\n"

    summary += f"\n⚠️ Clusters sem posts: {len(missing_clusters)}\n"
    if missing_clusters:
        summary += f"  {', '.join(missing_clusters[:3])}\n"
    summary += f"\nPosts planned: {planned} | Already exists: {already_exists}"

    report["telegram_summary"] = summary

    OUTPUT_PATH.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(report, indent=2, ensure_ascii=False))
    print(f"\nReport saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
