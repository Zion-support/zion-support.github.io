#!/usr/bin/env python3
"""Generate static HTML fixes for broken Zion Tech Group routes (404s)."""
import os
import re

PUBLIC = "/Users/miami2/zion-support/zion-support.github.io/public"

# (route_path, title, description, link_html) - link_html is "Services · <a href=...>Book Free Discovery</a>"
FIXES = [
    # Legacy routes (restored but missing static files)
    ("/agents/", "Agents — Zion Tech Group",
     "Enterprise AI agent operations. Agents monitoring & orchestration.",
     '<a href="/agents-monitoring/">Agents Monitoring</a>'),
    ("/explore/", "Try Zion Tech Group",
     "Explore our AI/IT delivery studio.",
     '<a href="/services-explorer/">Services Explorer</a>'),
    ("/roteiros/", "Roteiros — Zion Tech Group",
     "Portuguese: explore our service routes and delivery paths.",
     '<a href="/blog/">Blog</a>'),
    ("/prompt-library/", "Prompt Library — Zion Tech Group",
     "Ten enterprise IT-ops prompts, copy-ready.",
     '<a href="/tools/">Tools</a>'),
    # New AI feature pages (not yet built)
    ("/ai-meeting-notes-copilot/", "AI Meeting Notes Copilot — Zion Tech Group",
     "AI meeting notes assistant. Transcribes, summarizes, and extracts action items.",
     '<a href="/services/">Services</a>'),
    ("/ai-smart-hands-scheduler/", "AI Smart Hands Scheduler — Zion Tech Group",
     "Intelligent scheduling for IT support queues with AI routing.",
     '<a href="/services/">Services</a>'),
    ("/ai-ticket-triage/", "AI Ticket Triage — Zion Tech Group",
     "Automated IT ticket triage and priority classification.",
     '<a href="/services/">Services</a>'),
    ("/maintenance-ticket-triage/", "Maintenance Ticket Triage — Zion Tech Group",
     "Maintenance ticket triage with AI-assisted categorization.",
     '<a href="/services/">Services</a>'),
    ("/ai-ticket-sentinel/", "AI Ticket Sentinel — Zion Tech Group",
     "Anomaly detection for IT service desk tickets.",
     '<a href="/services/">Services</a>'),
    ("/site-uptime-watchdog/", "Site Uptime Watchdog — Zion Tech Group",
     "Proactive uptime monitoring and incident alerting for web services.",
     '<a href="/services/">Services</a>'),
    ("/ai-data-warehouse/", "AI Data Warehouse — Zion Tech Group",
     "AI-powered data warehousing and analytics pipeline.",
     '<a href="/services/">Services</a>'),
    ("/llm-cost-calculator/", "LLM Cost Calculator — Zion Tech Group",
     "Calculate LLM inference costs for your workload.",
     '<a href="/services/">Services</a>'),
    ("/token-cost/", "Token Cost — Zion Tech Group",
     "AI token usage and cost estimation.",
     '<a href="/services/">Services</a>'),
    ("/kubernetes-linter/", "Kubernetes Linter — Zion Tech Group",
     "Lint and validate Kubernetes manifests.",
     '<a href="/services/">Services</a>'),
    ("/network/", "Zion Apps Network — Zion Tech Group",
     "Explore the Zion Apps Network with 50+ enterprise AI services.",
     '<a href="/apps/">Apps Network</a>'),
    ("/partner-referral-tracker/", "Partner Referral Tracker — Zion Tech Group",
     "Track partner referrals and commission payouts.",
     '<a href="/partners/">Partners</a>'),
    ("/finops-scenario-estimator/", "FinOps Scenario Estimator — Zion Tech Group",
     "Estimate cloud cost optimization scenarios.",
     '<a href="/discovery/">Discovery</a>'),
    # Blog post (not yet published)
    ("/blog/ai-consulting-roi-board/", "AI Consulting ROI Board — Zion Tech Group",
     "Post not yet published. Check back soon.",
     '<a href="/blog/">Blog</a>'),
    # Apps network pages (build output files)
    ("/apps/discovery-written-pilot-brief.html", "Discovery Written Pilot Brief — Zion Tech Group",
     "Static page from the Zion Apps Network build.",
     '<a href="/apps/">Apps Network</a>'),
    ("/apps/discovery-to-apps-guide.html", "Discovery to Apps Guide — Zion Tech Group",
     "Static page from the Zion Apps Network build.",
     '<a href="/apps/">Apps Network</a>'),
    ("/apps/network.html", "Network — Zion Tech Group",
     "Static page from the Zion Apps Network build.",
     '<a href="/apps/">Apps Network</a>'),
    # Ops internal file (not a public route)
    ("/ops/comms/STATUS.md", "Ops Comms STATUS — Zion Tech Group",
     "Internal operations communication file.",
     '<a href="/ops/">Ops</a>'),
    # AI red team redirect
    ("/ai-red-team", "AI Red Team — Zion Tech Group",
     "Red-team AI systems.",
     '<a href="/services/ai-red-team-automation/">AI Red Team Automation</a>'),
]

CSS = """
body{font-family:system-ui,-apple-system,sans-serif;background:#0b1220;color:#e6f0ff;max-width:720px;margin:0 auto;padding:48px 24px;line-height:1.65}
h1{font-size:2rem;margin-bottom:1rem;color:#fff}
p{margin-bottom:1rem}
a{color:#a78bfa;text-decoration:none}
a:hover{text-decoration:underline}
.meta{color:#94a3b8;font-size:0.9rem}
"""

def build_html(route, title, description, link_html):
    slug = re.sub(r"[^a-z0-9]", "-", route.lower().replace("/", "-")).strip("-")
    return f"""<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="https://ziontechgroup.com{route}">
<meta name="robots" content="noindex, follow">
<style>{CSS}</style></head>
<body>
<h1>{slug.replace("-", " ")}</h1>
<p><b>Not published yet — under construction.</b></p>
<p>{description}</p>
<p>{link_html}</p>
</body></html>
"""


def main():
    os.makedirs(PUBLIC, exist_ok=True)
    for route, title, desc, link in FIXES:
        # Strip trailing slash for filesystem path, but keep URL route as-is
        rel = route.rstrip("/").lstrip("/")
        path = os.path.join(PUBLIC, rel.replace("/", os.sep))
        os.makedirs(os.path.dirname(path), exist_ok=True)
        html = build_html(route, title, desc, link)
        with open(path, "w") as f:
            f.write(html)
        print(f"WROTE {path} ({len(html)}B)")
    print(f"\nTOTAL: {len(FIXES)} files written.")


if __name__ == "__main__":
    main()
