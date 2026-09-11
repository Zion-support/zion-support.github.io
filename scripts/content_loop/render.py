"""Render a Zion blog brief into the live commercial HTML template."""

from __future__ import annotations

import html as html_lib
import json
import re
from datetime import date

JSON_LD_UNSAFE = re.compile(r"[\u2028\u2029]")


def esc(text: str) -> str:
    return html_lib.escape(text or "", quote=True)


def json_ld(obj: dict) -> str:
    dumped = json.dumps(obj, ensure_ascii=False, indent=2)
    dumped = dumped.replace("<", "\\u003c").replace(">", "\\u003e")
    return JSON_LD_UNSAFE.sub(" ", dumped)


def _paras(items: list[str]) -> str:
    return "\n".join(f"  <p>{item}</p>" for item in items)


def _list(items: list[str] | None) -> str:
    if not items:
        return ""
    lis = "\n".join(f"    <li>{item}</li>" for item in items)
    return f"  <ul>\n{lis}\n  </ul>"


def render_article(brief: dict) -> str:
    lang = brief.get("lang", "en")
    slug = brief["slug"]
    title = brief["title"]
    h1 = brief.get("h1") or title
    description = brief["description"]
    keywords = ", ".join(brief.get("keywords") or [])
    published = brief.get("date") or date.today().isoformat()
    excerpt = brief.get("excerpt") or description
    tags = ", ".join(brief.get("tags") or [])
    minutes = brief.get("read_minutes", 8)
    canonical = f"https://ziontechgroup.com/blog/{slug}/"
    og_image = "https://ziontechgroup.com/og-blog-pricing.svg"

    related = brief.get("related") or []
    related_html = ""
    if related:
        links = " · ".join(
            f'<a href="{esc(item["href"])}">{esc(item["label"])}</a>' for item in related
        )
        related_html = f"  <p>Also read: {links}.</p>"

    sections_html = []
    for section in brief.get("sections") or []:
        body = [_paras(section.get("paras") or [])]
        body.append(_list(section.get("bullets")))
        for h3 in section.get("h3s") or []:
            body.append(f'  <h3>{h3["h3"]}</h3>')
            body.append(_paras(h3.get("paras") or []))
            body.append(_list(h3.get("bullets")))
        sections_html.append(
            "<section class=\"section\">\n"
            f"  <h2>{section['h2']}</h2>\n"
            + "\n".join(part for part in body if part)
            + "\n</section>"
        )

    intro = brief.get("intro") or []
    intro_html = "<section class=\"section\">\n" + _paras(intro) + "\n" + related_html + "\n</section>"

    faqs = brief.get("faqs") or []
    faq_items = []
    for faq in faqs:
        faq_items.append(
            "  <div class=\"faq-item\">\n"
            f"    <div class=\"faq-question\">{faq['q']}</div>\n"
            f"    <div class=\"faq-answer\">{faq['a']}</div>\n"
            "  </div>"
        )
    faq_html = (
        "<section class=\"section\">\n"
        "  <h2>FAQs</h2>\n"
        + "\n".join(faq_items)
        + "\n</section>"
    )

    cta = brief.get("cta") or {}
    cta_h2 = cta.get("h2") or "Map the first workflow — Discovery $99"
    cta_p = cta.get("p") or "We map the job, the tools, and the human gates. Then you decide whether to build."

    article_schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": h1,
        "description": description,
        "image": og_image,
        "inLanguage": lang,
        "author": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
        },
        "datePublished": published,
        "dateModified": published,
        "mainEntityOfPage": {"@type": "WebPage", "@id": canonical},
        "about": brief.get("primary_keyword") or title,
    }
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": faq["q"],
                "acceptedAnswer": {"@type": "Answer", "text": re.sub(r"<[^>]+>", "", faq["a"])},
            }
            for faq in faqs
        ],
    }
    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ziontechgroup.com/"},
            {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ziontechgroup.com/blog/"},
            {"@type": "ListItem", "position": 3, "name": h1, "item": canonical},
        ],
    }

    display_date = published
    try:
        parsed = date.fromisoformat(published)
        display_date = parsed.strftime("%B ") + str(parsed.day) + parsed.strftime(", %Y")
    except ValueError:
        pass

    return f"""<!--
Blog: {esc(h1)} — Zion Tech Group
SEO: {esc(brief.get('primary_keyword') or title)}
Generated-by: content-loop
-->
<!DOCTYPE html>
<html lang="{esc(lang)}" dir="ltr">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"/>
<link rel="stylesheet" href="/styles.css"/>
<title>{esc(title)} | Zion Tech Group</title>
<meta name="description" content="{esc(description)}"/>
<meta name="keywords" content="{esc(keywords)}"/>
<link rel="canonical" href="{esc(canonical)}"/>
<meta property="og:title" content="{esc(title)} | Zion Tech Group"/>
<meta property="og:description" content="{esc(excerpt)}"/>
<meta property="og:url" content="{esc(canonical)}"/>
<meta property="og:type" content="article"/>
<meta property="og:image" content="{esc(og_image)}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="{esc(h1)}"/>
<link rel="icon" href="/favicon.ico"/>
<link rel="apple-touch-icon" href="/icon.svg"/>
<script type="application/ld+json">
{json_ld(article_schema)}
</script>
<script type="application/ld+json">
{json_ld(faq_schema)}
</script>
<script type="application/ld+json">
{json_ld(breadcrumb_schema)}
</script>
<style>
:root {{ --purple: #a855f7; --pink: #ec4899; --blue: #3b82f6; --slate-950: #020617; --slate-900: #0f172a; --slate-800: #1e293b; --slate-700: #334155; --slate-400: #94a3b8; --slate-300: #cbd5e1; --white: #f8fafc; --green: #22c55e; }}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--slate-950); color: var(--white); line-height: 1.7; }}
.container {{ max-width: 800px; margin: 0 auto; padding: 0 24px; }}
.nav {{ display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(148, 163, 184, 0.1); }}
.nav-brand {{ font-size: 1.5rem; font-weight: 700; background: linear-gradient(135deg, var(--purple), var(--pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-decoration: none; }}
.nav-links a {{ color: var(--slate-400); text-decoration: none; font-size: 0.875rem; margin-left: 16px; }}
.header {{ padding: 60px 24px 40px; border-bottom: 1px solid rgba(148, 163, 184, 0.1); }}
.header .meta {{ color: var(--slate-400); font-size: 0.875rem; margin-bottom: 12px; display: flex; gap: 16px; flex-wrap: wrap; }}
.header h1 {{ font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 16px; }}
.header .excerpt {{ color: var(--slate-400); font-size: 1.125rem; line-height: 1.6; }}
.section {{ padding: 48px 0; }}
.section h2 {{ font-size: 1.75rem; font-weight: 700; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid rgba(148, 163, 184, 0.1); }}
.section h3 {{ font-size: 1.25rem; font-weight: 600; margin: 24px 0 8px; color: var(--purple); }}
.section p {{ color: var(--slate-300); margin-bottom: 16px; }}
.section ul {{ color: var(--slate-300); margin: 12px 0 20px 24px; }}
.section ul li {{ margin-bottom: 6px; }}
.section a {{ color: var(--purple); }}
.faq-item {{ border-bottom: 1px solid rgba(148, 163, 184, 0.1); padding: 20px 0; }}
.faq-question {{ font-size: 1.125rem; font-weight: 600; margin-bottom: 8px; }}
.faq-answer {{ color: var(--slate-300); font-size: 0.9375rem; line-height: 1.6; }}
.cta {{ background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1), transparent 70%); padding: 48px 24px; text-align: center; }}
.cta h2 {{ font-size: 1.75rem; margin-bottom: 12px; }}
.cta p {{ color: var(--slate-400); margin-bottom: 24px; }}
.cta .btn {{ display: inline-block; background: linear-gradient(135deg, var(--purple), var(--pink)); color: white; padding: 14px 32px; border-radius: 9999px; font-weight: 600; font-size: 1rem; text-decoration: none; }}
.cta .btn-outline {{ display: inline-block; background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(148, 163, 184, 0.2); color: var(--slate-300); padding: 14px 32px; border-radius: 9999px; font-weight: 600; font-size: 1rem; text-decoration: none; }}
.cta-row {{ display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }}
.footer {{ padding: 32px 24px; border-top: 1px solid rgba(148, 163, 184, 0.1); color: var(--slate-400); font-size: 0.8125rem; text-align: center; }}
.footer a {{ color: var(--slate-300); }}
</style>
</head>
<body>
<nav class="nav">
  <a href="/" class="nav-brand">Zion Tech Group</a>
  <div class="nav-links">
    <a href="/services/">Services</a>
    <a href="/blog/">Blog</a>
    <a href="/plans/">Plans</a>
    <a href="/book/">Book $99</a>
  </div>
</nav>
<header class="header">
  <div class="container">
    <div class="meta">
      <span>📅 {esc(display_date)}</span>
      <span>⏱️ {minutes} min read</span>
      <span>🏷️ {esc(tags)}</span>
    </div>
    <h1>{h1}</h1>
    <p class="excerpt">{excerpt}</p>
  </div>
</header>
<div class="container">
{intro_html}
{chr(10).join(sections_html)}
{faq_html}
</div>
<section class="cta">
  <div class="container">
    <h2>{cta_h2}</h2>
    <p>{cta_p}</p>
    <div class="cta-row">
      <a href="/book/" class="btn">Book Discovery — $99</a>
      <a href="/plans/" class="btn-outline">View plans</a>
      <a href="/contact/" class="btn-outline">Contact</a>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="container">
    <p>&copy; 2026 Zion Tech Group. | <a href="/">Home</a> | <a href="/blog/">Blog</a> | <a href="/book/">Book</a> | <a href="/contact/">Contact</a></p>
  </div>
</footer>
</body>
</html>
"""
