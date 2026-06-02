#!/usr/bin/env python3
"""Generate static service detail pages for services missing from out/"""
import json, os

base = '/data/data/com.termux/files/home/zion-support.github.io'
out_services = os.path.join(base, 'out', 'services')

with open(os.path.join(base, 'app/data/servicesData.json')) as f:
    services = json.load(f)

TPL = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Zion Tech Group</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://ziontechgroup.com/services/{id}/">
</head>
<body>
<main style="max-width:800px;margin:0 auto;padding:2rem;font-family:sans-serif;color:#1e293b">
<h1>{title}</h1>
<p>{desc}</p>
<h2>Key Features</h2>
<ul>{features}</ul>
<h2>Benefits</h2>
<ul>{benefits}</ul>
<h2>Pricing</h2>
<p><strong>Basic:</strong> {basic} | <strong>Pro:</strong> {pro} | <strong>Enterprise:</strong> {enterprise}</p>
<h2>Contact Us</h2>
<p>📞 +1 302 464 0950<br>✉ kleber@ziontechgroup.com<br>📍 364 E Main St STE 1008, Middletown, DE 19709<br>🌐 <a href="https://ziontechgroup.com">ziontechgroup.com</a></p>
<p><a href="/services/">← Back to All Services</a></p>
</main>
</body>
</html>'''

generated = 0
for s in services:
    svc_dir = os.path.join(out_services, s['id'])
    if not os.path.exists(svc_dir):
        os.makedirs(svc_dir, exist_ok=True)
        features = ''.join(f'<li>{f}</li>' for f in s.get('features', []))
        benefits = ''.join(f'<li>{b}</li>' for b in s.get('benefits', []))
        pricing = s.get('pricing', {})
        html = TPL.format(
            title=s['title'], desc=s['description'], id=s['id'],
            features=features, benefits=benefits,
            basic=pricing.get('basic', 'Contact us'),
            pro=pricing.get('pro', 'Contact us'),
            enterprise=pricing.get('enterprise', 'Custom')
        )
        with open(os.path.join(svc_dir, 'index.html'), 'w') as f:
            f.write(html)
        generated += 1

print(f"Generated {generated} service detail pages")
print(f"Total service pages now: {len(os.listdir(out_services))}")
