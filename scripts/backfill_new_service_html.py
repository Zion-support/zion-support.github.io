#!/usr/bin/env python3
"""
Backfill static HTML for new service pages from page.tsx files.
Converts app/services/<slug>/page.tsx -> public/services/<slug>/index.html
Using the same HTML template format as existing backfilled pages.
"""
import os
import re
import sys
import json
from pathlib import Path

ROOT = Path("/Users/klebergarciaalcatrao/zion-support.github.io")
SERVICES_DIR = ROOT / "app" / "services"
OUTPUT_DIR = ROOT / "public" / "services"

def parse_page_tsx(filepath):
    """Extract metadata and content from a service page.tsx file."""
    content = filepath.read_text(encoding='utf-8')

    # Extract title from metadata
    title_match = re.search(r"title:\s*\"([^\"]+)\"", content)
    title = title_match.group(1) if title_match else "Service Page"

    # Extract description
    desc_match = re.search(r'description:\s*"([^"]+)"', content)
    description = desc_match.group(1) if desc_match else ""

    # Extract canonical URL
    canonical_match = re.search(r'canonical:\s*`([^`]+)`', content)
    canonical = canonical_match.group(1) if canonical_match else ""

    # Extract slug from canonical URL
    slug = canonical.split('/services/')[-1] if '/services/' in canonical else filepath.parent.name

    # Extract h1 text
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    h1_text = h1_match.group(1).strip() if h1_match else slug.replace('-', ' ').title()

    # Extract description paragraph (text after h1, before first div)
    desc_p_match = re.search(r'</h1>\s*<p[^>]*>(.*?)</p>', content, re.DOTALL)
    subtitle = desc_p_match.group(1).strip() if desc_p_match else description

    # Extract features (list items within the first <ul> after "Key Features")
    features_match = re.search(r'Key Features.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    features = []
    if features_match:
        features = re.findall(r'<li[^>]*>(.*?)</li>', features_match.group(1), re.DOTALL)
        features = [f.strip() for f in features]

    # Extract benefits (list items within the second <ul> after "Benefits")
    benefits_match = re.search(r'Benefits.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    benefits = []
    if benefits_match:
        benefits = re.findall(r'<li[^>]*>(.*?)</li>', benefits_match.group(1), re.DOTALL)
        benefits = [b.strip() for b in benefits]

    # Extract pricing tiers
    pricing_pattern = r'<h3[^>]*>(.*?)</h3>.*?\$(\d+)/month'
    pricing_matches = re.findall(pricing_pattern, content, re.DOTALL)
    pricing = []
    for tier_name, price in pricing_matches:
        pricing.append({"tier": tier_name.strip(), "price": price})

    return {
        "slug": slug,
        "title": title,
        "description": description,
        "canonical": canonical,
        "h1": h1_text,
        "subtitle": subtitle,
        "features": features,
        "benefits": benefits,
        "pricing": pricing,
    }


HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:type" content="website">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<style>
body{{font-family:system-ui,-apple-system,sans-serif;background:#0b1220;color:#e6f0ff;max-width:800px;margin:0 auto;padding:48px 24px;line-height:1.65}}
h1{{font-size:2.2rem;margin-bottom:0.5rem;color:#fff;font-weight:800}}
.subtitle{{color:#94a3b8;font-size:1.1rem;margin-bottom:2rem}}
.card{{background:#1e293b;border-radius:12px;padding:24px;margin:1.5rem 0;border:1px solid #334155}}
.card h2{{font-size:1.5rem;margin-bottom:1rem;color:#a78bfa;font-weight:700}}
ul{{padding-left:1.5rem}}
li{{margin-bottom:0.5rem}}
.price-grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem}}
.price-box{{background:#0f172a;border-radius:8px;padding:16px;text-align:center;border:1px solid #334155}}
.price-box.pro{{border-color:#a78bfa}}
.price-box h3{{margin:0 0 0.5rem;font-size:1rem;color:#94a3b8}}
.price{{font-size:1.8rem;font-weight:800;color:#a78bfa}}
.booking-btn{{display:inline-block;background:#a78bfa;color:#0b1220;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:1.1rem}}
.booking-btn:hover{{background:#c4b5fd}}
.back-link{{color:#a78bfa;text-decoration:none;font-size:0.9rem}}
.back-link:hover{{text-decoration:underline}}
.footer{{margin-top:4rem;padding-top:1rem;border-top:1px solid #334155;font-size:0.85rem;color:#64748b;text-align:center}}
</style>
</head>
<body>
<h1>{h1}</h1>
<div class="subtitle">{subtitle}</div>

<div class="card">
  <h2>Key Features</h2>
  <ul style="list-style:disc">
{features}
  </ul>
</div>

<div class="card">
  <h2>Benefits</h2>
  <ul style="list-style:disc">
{benefits}
  </ul>
</div>
{pricing_html}
<div style="text-align:center;margin:3rem 0">
  <a href="https://calendly.com/kleber-ziontechgroup/consultation" target="_blank" rel="noopener noreferrer" class="booking-btn">
    Book a Consultation
  </a>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
  <a href="/services/" class="back-link">← All Services</a>
  <a href="/tools/" style="color:#64748b;text-decoration:none;font-size:0.9rem">Try our free tools →</a>
</div>

<div class="footer">
  <p>© 2026 Zion Tech Group. All rights reserved.</p>
  <p>Service ID: {slug}</p>
</div>

<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{h1}",
  "description": "{description}",
  "provider": {{
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  }},
  "serviceUrl": "{canonical}",
  "areaServed": "Global"
}}
</script>
</body>
</html>"""


def generate_html(data):
    """Generate HTML from parsed page.tsx data."""
    features_html = '\n'.join(f'  <li>{f}</li>' for f in data["features"])
    benefits_html = '\n'.join(f'  <li>{b}</li>' for b in data["benefits"])

    if data["pricing"]:
        pricing_boxes = []
        for p in data["pricing"]:
            css_class = ' price-box pro' if p["tier"] == "Pro" else ' price-box'
            pricing_boxes.append(f'''    <div class="{css_class}">
      <h3>{p["tier"]}</h3>
      <div class="price">${p["price"]}/mo</div>
    </div>''')
        pricing_html = f'''<div class="card">
  <h2>Pricing Options</h2>
  <div class="price-grid">
{chr(10).join(pricing_boxes)}
  </div>
</div>'''
    else:
        pricing_html = ""

    html = HTML_TEMPLATE.format(
        title=data["title"],
        description=data["description"],
        canonical=data["canonical"],
        h1=data["h1"],
        subtitle=data["subtitle"],
        features=features_html,
        benefits=benefits_html,
        pricing_html=pricing_html,
        slug=data["slug"],
    )
    return html


def main():
    # Find all new service pages that don't have HTML yet
    count = 0
    skipped = 0
    errors = []

    # Get list of new directories (those in app/services but not in public/services)
    app_dirs = set()
    for d in SERVICES_DIR.iterdir():
        if d.is_dir() and (d / "page.tsx").exists():
            app_dirs.add(d.name)

    public_dirs = set()
    if OUTPUT_DIR.exists():
        for d in OUTPUT_DIR.iterdir():
            if d.is_dir():
                public_dirs.add(d.name)

    new_dirs = app_dirs - public_dirs
    print(f"New service dirs without HTML: {len(new_dirs)}")

    for slug in sorted(new_dirs):
        tsx_path = SERVICES_DIR / slug / "page.tsx"
        html_path = OUTPUT_DIR / slug / "index.html"

        if not tsx_path.exists():
            errors.append(f"  {slug}: page.tsx not found")
            continue

        try:
            data = parse_page_tsx(tsx_path)
            html = generate_html(data)
            html_path.parent.mkdir(parents=True, exist_ok=True)
            html_path.write_text(html, encoding='utf-8')
            count += 1
            if count <= 3:
                print(f"  Generated: {slug}")
        except Exception as e:
            errors.append(f"  {slug}: {e}")
            skipped += 1

    print(f"\nGenerated: {count}")
    print(f"Errors: {len(errors)}")
    for err in errors:
        print(err)

    # Write summary
    summary = {
        "generated": count,
        "errors": len(errors),
        "errors_detail": errors[:10],
    }
    (ROOT / "outreach_monitor" / "processed" / "backfill_html_result.json").write_text(
        json.dumps(summary, indent=2)
    )
    return 0 if not errors else 1


if __name__ == "__main__":
    sys.exit(main())
