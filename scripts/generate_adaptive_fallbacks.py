#!/usr/bin/env python3
"""Generate static HTML fallbacks for the 10 new adaptive landing pages."""

import os
import re

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
SERVICES_DIR = os.path.join(BASE, 'app', 'services')
PUBLIC_SERVICES = os.path.join(BASE, 'public', 'services')

NEW_SERVICES = [
    "adaptive-security-advisor-7c010b55",
    "adaptive-security-engine-6246011d",
    "adaptive-security-system-b38c9f08",
    "adaptive-suite-energy-587262a2",
    "adaptive-suite-for-healthcare-1-1d92c18b",
    "adaptive-suite-for-healthcare-fcf26c15",
    "adaptive-suite-for-logistics-db763ff9",
    "adaptive-suite-for-manufacturing-30607267",
    "adaptive-suite-for-real-estate-573d5fb0",
    "adaptive-suite-for-telecom-5b6e42b0",
]

def read_page_tsx(service_id):
    """Read the page.tsx and extract metadata + content."""
    page_path = os.path.join(SERVICES_DIR, service_id, 'page.tsx')
    if not os.path.exists(page_path):
        return None
    
    with open(page_path, 'r') as f:
        content = f.read()
    
    title_match = re.search(r'title:\s*"([^"]+)"', content)
    title = title_match.group(1).replace(' - Zion Tech Group', '') if title_match else service_id.replace('-', ' ').title()
    
    desc_match = re.search(r'description:\s*"([^"]+)"', content)
    description = desc_match.group(1) if desc_match else ''
    
    h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    h1 = h1_match.group(1) if h1_match else title
    
    p_match = re.search(r'<p[^>]*>([^<]+)</p>', content)
    subtitle = p_match.group(1) if p_match else description
    
    features = []
    features_section = re.search(r'<h2[^>]*>Key Features</h2>.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if features_section:
        for li in re.findall(r'<li>([^<]+)</li>', features_section.group(1)):
            features.append(li.strip())
    
    benefits = []
    benefits_section = re.search(r'<h2[^>]*>Benefits</h2>.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if benefits_section:
        for li in re.findall(r'<li>([^<]+)</li>', benefits_section.group(1)):
            benefits.append(li.strip())
    
    prices = {}
    price_section = re.search(r'<h2[^>]*>Pricing</h2>(.*?)</div>\s*</div>\s*</div>\s*</div>', content, re.DOTALL)
    if price_section:
        section = price_section.group(1)
        price_labels = re.findall(r'<h3[^>]*>([^<]+)</h3>', section)
        price_values = re.findall(r'<p[^>]*>\$([^<]+)/month</p>', section)
        for i, label in enumerate(price_labels):
            if i < len(price_values):
                prices[label.strip()] = price_values[i].strip()
    
    return {
        'title': title,
        'description': description,
        'h1': h1,
        'subtitle': subtitle,
        'features': features,
        'benefits': benefits,
        'prices': prices,
    }

def generate_html(data, service_id):
    features_html = ''.join(f'            <li>{f}</li>\n' for f in data['features']) if data['features'] else '            <li>No features listed</li>'
    benefits_html = ''.join(f'            <li>{b}</li>\n' for b in data['benefits']) if data['benefits'] else '            <li>No benefits listed</li>'
    
    price_boxes = ''
    price_order = ['Basic', 'Pro', 'Enterprise']
    for label in price_order:
        price = data['prices'].get(label, 'N/A')
        is_pro = ' border-2 border-purple-500' if label == 'Pro' else ''
        price_boxes += f'''            <div className="bg-slate-800 p-4 rounded-lg{is_pro}">
              <h3 className="font-semibold mb-2">{label}</h3>
              <p className="text-2xl font-bold mb-2">${price}/month</p>
            </div>
'''
    
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{data['title']} - Zion Tech Group</title>
<meta name="description" content="{data['description']}">
<link rel="canonical" href="https://ziontechgroup.com/services/{service_id}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="{data['title']} - Zion Tech Group">
<meta property="og:description" content="{data['description']}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://ziontechgroup.com/services/{service_id}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{data['title']} - Zion Tech Group">
<meta name="twitter:description" content="{data['description']}">
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
<h1>{data['h1']}</h1>
<div class="subtitle">{data['subtitle']}</div>

<div class="card">
  <h2>Key Features</h2>
  <ul style="list-style:disc">
{features_html}
  </ul>
</div>

<div class="card">
  <h2>Benefits</h2>
  <ul style="list-style:disc">
{benefits_html}
  </ul>
</div>

<div class="card">
  <h2>Pricing</h2>
  <div class="price-grid">
{price_boxes}
  </div>
</div>

<div style="margin-top:2rem">
  <a href="https://calendly.com/kleber-ziontechgroup/consultation" class="booking-btn" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
</div>

<div style="margin-top:2rem">
  <a href="/services/" class="back-link">← Back to All Services</a>
</div>

<div class="footer">
  Zion Tech Group - AI/IT Services & Solutions
</div>
</body>
</html>'''

def main():
    generated = 0
    for service_id in NEW_SERVICES:
        data = read_page_tsx(service_id)
        if not data:
            print(f'[⚠]  Could not read page.tsx for {service_id}')
            continue
        
        html = generate_html(data, service_id)
        
        out_dir = os.path.join(PUBLIC_SERVICES, service_id)
        os.makedirs(out_dir, exist_ok=True)
        out_path = os.path.join(out_dir, 'index.html')
        
        with open(out_path, 'w') as f:
            f.write(html)
        
        print(f'[📄] Generated static fallback: {service_id}')
        generated += 1
    
    print(f'\nTotal static fallbacks generated: {generated}')

if __name__ == '__main__':
    main()
