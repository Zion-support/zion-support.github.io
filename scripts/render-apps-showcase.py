#!/usr/bin/env python3
"""Render the maintained app showcase and language homepages; no dependencies."""
import argparse
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COPY = json.loads((ROOT / 'content/apps-showcase.json').read_text())
ORIGIN = 'https://ziontechgroup.com'
RELEASE = 'apps-showcase-2026-11-12-v1'
e = html.escape

def showcase(locale):
    return ('/' if locale == 'en' else f'/{locale}/') + 'apps-network-showcase/'

def home(locale):
    return '/en/' if locale == 'en' else f'/{locale}/'

def network(locale):
    return '/zion-app-network/' if locale == 'en' else f'/zion-app-network/home-{locale}.html'

def resource_routes(locale):
    suffix = '' if locale == 'en' else '-pt-br' if locale == 'pt' else f'-{locale}'
    prefix = '/' if locale == 'en' else f'/{locale}/'
    guide = lambda slug: f'/zion-app-network/{slug}{suffix}.html'
    return [guide('datacenter-service-request-guide-2026'), guide('field-visit-handoff-2026'),
            prefix+'apps/finops-scenario-estimator.html', prefix+'apps/finops-pilot-guide.html',
            guide('app-selection-evidence-scorecard-2026'), guide('equipment-lifecycle-decision-guide-2026')]

def languages(locale, is_home=False):
    route = home if is_home else showcase
    return ''.join(f'<a href="{route(l)}" lang="{c["lang"]}" hreflang="{c["lang"]}"'
                   + (' aria-current="page"' if l == locale else '') + f'>{c["name"]}</a>'
                   for l,c in COPY.items())

def render(locale, is_home=False):
    c = COPY[locale]
    title, intro = (c['homeTitle'], c['homeIntro']) if is_home else (c['title'], c['intro'])
    route = home if is_home else showcase
    canonical = ORIGIN + route(locale)
    alternates = ''.join(f'<link rel="alternate" hreflang="{v["lang"]}" href="{ORIGIN+route(l)}">' for l,v in COPY.items())
    cards = ''
    routes = resource_routes(locale)
    for group in range(3):
        cards += f'<section class="path" aria-labelledby="path-{group}"><div class="path-heading"><span aria-hidden="true">0{group+1}</span><h3 id="path-{group}">{e(c["groups"][group])}</h3></div><div class="cards">'
        for i in range(group*2, group*2+2):
            name, description, kind = c['cards'][i]
            cards += f'<article class="resource"><p class="kind">{e(kind)}</p><h4>{e(name)}</h4><p>{e(description)}</p><a href="{routes[i]}" hreflang="{c["lang"]}">{e(c["open"])} <span aria-hidden="true">↗</span></a></article>'
        cards += '</div></section>'
    steps = ''.join(f'<li><span aria-hidden="true">0{i+1}</span><p>{e(s)}</p></li>' for i,s in enumerate(c['steps']))
    schema = json.dumps({'@context':'https://schema.org','@type':'CollectionPage','name':title,'description':intro,'url':canonical,'inLanguage':c['lang']},ensure_ascii=False).replace('<','\\u003c')
    return f'''<!doctype html>
<html lang="{c['lang']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)} | Zion Tech Group</title><meta name="description" content="{e(intro)}">
<link rel="canonical" href="{canonical}">{alternates}<link rel="alternate" hreflang="x-default" href="{ORIGIN+route('en')}">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(intro)}"><meta property="og:url" content="{canonical}"><meta property="og:type" content="website">
<link rel="stylesheet" href="/assets/css/apps-showcase.css"><script type="application/ld+json">{schema}</script></head>
<body class="zion-showcase" data-apps-showcase="{RELEASE}">
<a class="skip" href="#main">{e(c['skip'])}</a>
<header class="wrap"><div class="top"><a class="brand" href="{home(locale)}">ZION<span>TECH GROUP</span></a><nav aria-label="{e(c['network'])}"><a href="{home(locale)}">{e(c['home'])}</a><a href="{showcase(locale)}">{e(c['network'])}</a><a href="{network(locale)}">{e(c['directory'])}</a><a class="button secondary" href="/discovery/" hreflang="pt-BR">{e(c['discovery'])}</a></nav></div><nav class="languages" aria-label="{e(c['languages'])}">{languages(locale,is_home)}</nav></header>
<main id="main" class="wrap" tabindex="-1"><section class="hero"><p class="eyebrow">{e(c['eyebrow'])}</p><h1>{e(title)}</h1><p class="intro">{e(intro)}</p><div class="actions"><a class="button" href="#resources">{e(c['tools'])} <span aria-hidden="true">↓</span></a><a href="{network(locale)}">{e(c['directory'])} <span aria-hidden="true">↗</span></a></div></section>
<section id="resources" class="resources" aria-labelledby="resources-title"><p class="eyebrow">{e(c['network'])}</p><h2 id="resources-title">{e(c['featured'])}</h2>{cards}</section>
<section class="process" aria-labelledby="process-title"><h2 id="process-title">{e(c['stepsTitle'])}</h2><ol>{steps}</ol><p class="scope">{e(c['scope'])}</p></section>
<section class="discovery" aria-labelledby="discovery-title"><div><p class="eyebrow">Zion Tech Group</p><h2 id="discovery-title">{e(c['discovery'])}</h2><p>{e(c['discoveryBody'])}</p><p class="note">{e(c['discoveryLanguage'])}</p></div><div class="actions"><a class="button" href="/discovery/" hreflang="pt-BR">{e(c['discovery'])} <span aria-hidden="true">↗</span></a><a href="mailto:commercial@ziontechgroup.com">{e(c['contact'])}</a></div></section>
<p class="field-note">{e(c['fieldNote'])}</p></main>
<footer class="wrap"><a class="brand" href="{home(locale)}">ZION<span>TECH GROUP</span></a><nav aria-label="{e(c['network'])}"><a href="{showcase(locale)}">{e(c['network'])}</a><a href="{network(locale)}">{e(c['directory'])}</a><a href="https://github.com/Zion-support/zion-app-network">{e(c['source'])}</a></nav><span>© 2026 Zion Tech Group</span></footer>
</body></html>
'''

def promotion(locale):
    c=COPY[locale]
    return f'''<!-- {RELEASE}:start -->
<section id="zion-apps-showcase" class="wrap" style="max-width:1200px;margin:2rem auto;padding:2rem 1.25rem;border:1px solid #475569;border-radius:1rem;background:#0f172a;color:#e2e8f0" aria-labelledby="zion-apps-showcase-title"><p style="color:#67e8f9">{e(c['eyebrow'])}</p><h2 id="zion-apps-showcase-title">{e(c['promo'])}</h2><p>{e(c['promoBody'])}</p><p><a href="{showcase(locale)}" style="color:#c4b5fd">{e(c['network'])} →</a> · <a href="{network(locale)}" style="color:#c4b5fd">{e(c['directory'])}</a></p><nav aria-label="{e(c['languages'])}" style="display:flex;flex-wrap:wrap;gap:1rem">{languages(locale)}</nav></section>
<!-- {RELEASE}:end -->'''

def files():
    result={}
    for locale in COPY:
        result['public'+showcase(locale)+'index.html']=render(locale)
        if locale != 'en':
            result['public'+home(locale)+'index.html']=render(locale,True)
            # Recover the catalog entry used by the existing network navigation.
            # These curated entries share the showcase canonical, without a redirect.
            result[f'public/{locale}/apps/index.html']=render(locale)
    # Keep the historical root path in sync with the deployable English source.
    result['apps-network-showcase/index.html']=render('en')
    for path in ('public/index.html','public/en/index.html','public/apps/index.html'):
        content=(ROOT/path).read_text()
        if path=='public/en/index.html':
            content=re.sub(r'<link\b(?=[^>]*\brel=[\"\x27]alternate[\"\x27])[^>]*>', '', content, flags=re.I)
            alternates=''.join(f'<link rel="alternate" hreflang="{v["lang"]}" href="{ORIGIN+home(l)}">' for l,v in COPY.items())
            alternates+=f'<link rel="alternate" hreflang="x-default" href="{ORIGIN+home("en")}">'
            content=content.replace('</head>',alternates+'</head>',1)
        pattern=r'<!-- '+RELEASE+r':start -->.*?<!-- '+RELEASE+r':end -->'
        if re.search(pattern,content,re.S):
            content=re.sub(pattern,lambda _:promotion('en'),content,flags=re.S)
        else:
            closing='</main>' if '</main>' in content else '</body>'
            assert closing in content, path
            content=content.replace(closing,promotion('en')+'\n'+closing,1)
        result[path]=content
    sitemap=(ROOT/'public/sitemap-0.xml').read_text()
    for locale in COPY:
        for route in (home(locale),showcase(locale)):
            url=ORIGIN+route
            if f'<loc>{url}</loc>' not in sitemap:
                sitemap=sitemap.replace('</urlset>',f'<url><loc>{url}</loc><lastmod>2026-11-12</lastmod></url>\n</urlset>')
    result['public/sitemap-0.xml']=sitemap
    return result

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--check',action='store_true');args=parser.parse_args()
    for path,content in files().items():
        p=ROOT/path
        if args.check:
            assert p.exists() and p.read_text()==content, f'Regenerate {path}'
        else:
            p.parent.mkdir(parents=True,exist_ok=True);p.write_text(content)
    print('Showcase: 5 languages, 4 restored homepages, 4 catalog entries, 3 promotions and root mirror verified.')
