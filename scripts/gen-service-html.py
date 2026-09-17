#!/usr/bin/env python3
"""Generate rich standalone HTML for service pages from page.tsx source files.
Usage: python3 gen_service_html.py <slug1> <slug2> ...
Or: python3 gen_service_html.py  (uses all NEW_SLUGS in the file)
"""
import json, os, re, html, sys

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
SVC_DIR = os.path.join(BASE, 'app', 'services')
OUT_DIR = '/tmp/new-service-html'

CSS = """*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(160deg,#020617 0%,#0f172a 45%,#1e1b4b 100%);color:#e2e8f0;line-height:1.65;min-height:100vh}
a{color:#67e8f9;text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:960px;margin:0 auto;padding:28px 20px 64px}
nav.top{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-bottom:28px;font-size:.92rem}
nav.top .brand{font-weight:800;font-size:1.15rem;background:linear-gradient(135deg,#00d4ff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.badge{display:inline-block;background:rgba(167,139,250,.15);border:1px solid rgba(167,139,250,.35);color:#c4b5fd;border-radius:999px;padding:3px 10px;font-size:.75rem;font-weight:600;letter-spacing:.02em}
h1{font-size:clamp(1.7rem,3vw,2.4rem);line-height:1.2;margin:12px 0 12px;background:linear-gradient(135deg,#e2e8f0,#a5b4fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.lead{color:#cbd5e1;font-size:1.08rem;margin-bottom:24px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:20px 0}
.card{background:rgba(15,23,42,.62);border:1px solid rgba(124,58,237,.28);border-radius:14px;padding:18px}
.card h3{margin:0 0 8px;color:#c4b5fd;font-size:1.02rem}
.card p,.card li{color:#cbd5e1;font-size:.95rem}
ol.steps{padding-left:20px}ol.steps li{margin:8px 0}
.cta{margin:32px 0;padding:22px;border-radius:16px;background:linear-gradient(135deg,rgba(0,105,255,.25),rgba(124,58,237,.25));border:1px solid rgba(0,212,255,.25);text-align:center}
.btn{display:inline-block;margin:6px;padding:12px 20px;border-radius:12px;font-weight:700;background:linear-gradient(135deg,#0069ff,#00d4ff);color:#fff}
.btn.alt{background:transparent;border:1px solid rgba(167,139,250,.5);color:#e2e8f0}
footer{margin-top:48px;padding-top:20px;border-top:1px solid rgba(148,163,184,.2);color:#94a3b8;font-size:.88rem}
ul.clean{padding-left:18px}ul.clean li{margin:6px 0}
.crumb{color:#94a3b8;font-size:.85rem;margin-bottom:10px}
.crumb a{color:#a5b4fc}
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:8px}
.price-box{background:#1e293b;border-radius:6px;padding:12px;text-align:center}
.price-box.pro{border:2px solid #a78bfa}
.price-box h3{font-size:1rem;margin:0 0 4px 0;color:#93c5fd}
.price-box .price{font-size:1.5rem;font-weight:bold;color:#fff}"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__| Zion Tech Group</title>
<meta name="description" content="__DESC__">
<link rel="canonical" href="__CANONICAL__/">
<meta name="robots" content="index,follow">
<meta property="og:title" content="__TITLE__| Zion Tech Group">
<meta property="og:description" content="__DESC__">
<meta property="og:url" content="__CANONICAL__/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="__TITLE__| Zion Tech Group">
<meta name="twitter:description" content="__DESC__">
<style>
__CSS__
</style>
<script type="application/ld+json">__JSONLD__</script>
<script src="/assets/js/zion-shell.js" defer></script>
</head>
<body>
<div class="wrap">
<nav class="top" aria-label="Primary">
  <a class="brand" href="/">Zion Tech Group</a>
  <a href="/services/">Services</a>
  <a href="/plans/">Plans</a>
  <a href="/blog/">Blog</a>
  <a href="/booking/">Book $99</a>
  <a href="/contact/">Contact</a>
</nav>
<p class="crumb"><a href="/">Home</a> / <a href="/services/">Services</a> / __H1__</p>
<span class="badge">__CATEGORY__</span>
<h1>__H1__</h1>
<p class="lead">__LEAD__</p>
<div class="card">
<h2>Key Features</h2>
<ol class="steps">
__FEATURES__
</ol>
</div>
<div class="card">
<h2>Benefits</h2>
<ul class="clean">
__BENEFITS__
</ul>
</div>
<div class="card" style="border-color:#7c3aed">
<h2>Pricing</h2>
<div class="price-grid">
<div class="price-box"><h3>Basic</h3><div class="price">$__BASIC__/mo</div></div>
<div class="price-box pro"><h3>Pro</h3><div class="price">$__PRO__/mo</div></div>
<div class="price-box"><h3>Enterprise</h3><div class="price">$__ENTERPRISE__/mo</div></div>
</div>
</div>
<div class="cta">
<p><strong>Scope __H1__ the honest way.</strong></p>
<a class="btn" href="/booking/">Book $99 Discovery</a>
<a class="btn alt" href="/plans/">See plans</a>
<a class="btn alt" href="mailto:kleber@ziontechgroup.com?subject=__TITLE_ENCODED__">Email Zion</a>
</div>
<p><a href="/services/">All services</a> &middot; <a href="/plans/">Live prices</a> &middot; <a href="/booking/">Book Discovery</a> &middot; <a href="/blog/">Field notes</a> &middot; <a href="/contact/">Contact</a> &middot; <a href="/use-cases/">Use cases</a></p>
<footer>
<p>&copy; 2026 Zion Tech Group &middot; 364 E Main St STE 1008, Middletown, DE 19709 &middot; <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> &middot; +1 302 464 0950</p>
<p><a href="/">Home</a> &middot; <a href="/services/">Services</a> &middot; <a href="/plans/">Plans</a> &middot; <a href="/privacy/">Privacy</a> &middot; <a href="/terms/">Terms</a></p>
</footer>
</div>
</body>
</html>"""


def parse_tsx(slug):
    path = os.path.join(SVC_DIR, slug, 'page.tsx')
    with open(path, 'r') as f:
        content = f.read()
    r = {'slug': slug}
    m = re.search(r'title:\s*"([^"]+)"', content)
    r['title'] = m.group(1).replace(' - Zion Tech Group', '') if m else slug.replace('-', ' ').title()
    m = re.search(r'description:\s*"([^"]+)"', content)
    r['description'] = m.group(1) if m else ''
    m = re.search(r'canonical:\s*`([^`]+)`', content)
    r['canonical'] = m.group(1) if m else 'https://ziontechgroup.com/services/' + slug
    m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    r['h1'] = html.unescape(m.group(1).strip()) if m else r['title']
    m = re.search(r'</h1>\s*<p[^>]*>([^<]+)</p>', content)
    if not m:
        m = re.search(r'<p[^>]*class="text-lg"[^>]*>([^<]+)</p>', content)
    r['lead'] = html.unescape(m.group(1).strip()) if m else r['description']

    features = []
    m = re.search(r'Key Features</h2>\s*</div>\s*<div[^>]*>\s*<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if not m:
        m = re.search(r'Key Features</h2>.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if m:
        features = [html.unescape(li.strip()) for li in re.findall(r'<li>([^<]+)</li>', m.group(1))]
    r['features'] = features

    benefits = []
    m = re.search(r'Benefits</h2>\s*</div>\s*<div[^>]*>\s*<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if not m:
        m = re.search(r'Benefits</h2>.*?<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if m:
        benefits = [html.unescape(li.strip()) for li in re.findall(r'<li>([^<]+)</li>', m.group(1))]
    r['benefits'] = benefits

    prices = {}
    price_matches = re.findall(r'<h3[^>]*>(\w+)</h3>\s*<p[^>]*>\$(\d+)/month</p>', content)
    for label, price in price_matches:
        prices[label.capitalize()] = price
    r['pricing'] = prices
    r['category'] = 'AI Operations'
    return r


def build_html(s):
    e = html.escape
    pricing = s.get('pricing', {})
    basic = pricing.get('Basic', pricing.get('basic', 'Contact us'))
    pro = pricing.get('Pro', pricing.get('pro', 'Contact us'))
    enterprise = pricing.get('Enterprise', pricing.get('enterprise', 'Contact us'))
    features = s.get('features', [])
    feat_items = ''.join('        <li>{}</li>\n'.format(e(f)) for f in features) if features else '        <li>Data-driven insights and automation</li>\n'
    benefits = s.get('benefits', [])
    ben_items = ''.join('        <li>{}</li>\n'.format(e(b)) for b in benefits) if benefits else '        <li>Improved operational efficiency</li>\n'

    json_ld = json.dumps({
        "@context": "https://schema.org", "@type": "Service",
        "name": s['title'],
        "provider": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com",
                     "email": "kleber@ziontechgroup.com", "telephone": "+1 302 464 0950"},
        "description": s.get('description', ''), "areaServed": "Worldwide",
        "url": s.get('canonical', 'https://ziontechgroup.com/services/' + s['slug'])
    }, ensure_ascii=False)

    out = HTML_TEMPLATE
    out = out.replace('__TITLE__', e(s['title']))
    out = out.replace('__TITLE_ENCODED__', s['title'].replace(' ', '%20').replace('&', '%26'))
    out = out.replace('__DESC__', e(s['description'][:160]))
    out = out.replace('__CANONICAL__', e(s.get('canonical', 'https://ziontechgroup.com/services/' + s['slug'])))
    out = out.replace('__CSS__', CSS)
    out = out.replace('__JSONLD__', json_ld)
    out = out.replace('__H1__', e(s['h1']))
    out = out.replace('__CATEGORY__', e(s.get('category', 'AI Operations')))
    out = out.replace('__LEAD__', e(s.get('lead', s['description'])[:300]))
    out = out.replace('__FEATURES__', feat_items)
    out = out.replace('__BENEFITS__', ben_items)
    out = out.replace('__BASIC__', e(str(basic)))
    out = out.replace('__PRO__', e(str(pro)))
    out = out.replace('__ENTERPRISE__', e(str(enterprise)))

    feat_list = '\n'.join('- ' + f for f in features) if features else '- Data-driven insights'
    ben_list = '\n'.join('- ' + b for b in benefits) if benefits else '- Improved efficiency'
    txt = '{} | Zion Tech Group\n{}\n\nKey Features:\n{}\n\nBenefits:\n{}\n\nPricing: Basic ${}/mo | Pro ${}/mo | Enterprise ${}/mo\n\nBook a $99 Discovery: https://ziontechgroup.com/booking/\n'.format(
        s['title'], s.get('description', '')[:160], feat_list, ben_list, basic, pro, enterprise)
    return out, txt


if __name__ == '__main__':
    if len(sys.argv) > 1:
        slugs = sys.argv[1:]
    else:
        slugs = []

    if not slugs:
        print("Usage: python3 gen_service_html.py <slug1> <slug2> ...")
        sys.exit(1)

    generated = 0
    failed = 0
    for slug in slugs:
        try:
            data = parse_tsx(slug)
            html_out, txt = build_html(data)
            out_html = os.path.join(OUT_DIR, 'services', slug, 'index.html')
            out_txt = os.path.join(OUT_DIR, 'services', slug, 'index.txt')
            os.makedirs(os.path.dirname(out_html), exist_ok=True)
            with open(out_html, 'w') as f:
                f.write(html_out)
            with open(out_txt, 'w') as f:
                f.write(txt)
            generated += 1
        except Exception as ex:
            print('FAILED: {} -- {}'.format(slug, ex))
            failed += 1
    print('Generated: {} HTML + txt pairs'.format(generated))
    print('Failed: {}'.format(failed))
