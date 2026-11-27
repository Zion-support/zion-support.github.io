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

def catalog(locale):
    return '/apps/' if locale == 'en' else f'/{locale}/apps/'

def discovery(locale):
    return f'/{locale}/discovery/#dq'

def operations_guide(locale):
    suffix = '' if locale == 'en' else f'-{locale}'
    return f'/apps/operations-reliability-ai-2026{suffix}.html'

def network(locale):
    return '/zion-app-network/' if locale == 'en' else f'/zion-app-network/home-{locale}.html'

def resource_routes(locale):
    suffix = '' if locale == 'en' else '-pt-br' if locale == 'pt' else f'-{locale}'
    prefix = '/' if locale == 'en' else f'/{locale}/'
    guide = lambda slug: f'/zion-app-network/{slug}{suffix}.html'
    return [guide('datacenter-service-request-guide-2026'), guide('field-visit-handoff-2026'),
            prefix+'apps/finops-scenario-estimator.html', prefix+'apps/finops-pilot-guide.html',
            guide('app-selection-evidence-scorecard-2026'), guide('equipment-lifecycle-decision-guide-2026')]

def languages(locale, is_home=False, *, is_catalog=False):
    assert not (is_home and is_catalog), 'A language selector belongs to one route family'
    route = catalog if is_catalog else home if is_home else showcase
    return ''.join(f'<a href="{route(l)}" lang="{c["lang"]}" hreflang="{c["lang"]}"'
                   + (' aria-current="page"' if l == locale else '') + f'>{c["name"]}</a>'
                   for l,c in COPY.items())

CATALOG_STYLE = '''<style id="catalog-planning-styles">
.catalog-selected,.catalog-planning{margin:2rem 0;padding:1.5rem 0;border-top:1px solid #334155}
.catalog-selected h2,.catalog-planning h2{font-size:clamp(1.5rem,3vw,2rem);line-height:1.25;color:#fff}
.catalog-selected .path{display:block;padding:1.5rem 0;border-bottom:1px solid #334155}
.catalog-selected .path-heading{display:flex;gap:1rem;align-items:center}
.catalog-selected .path-heading h3{font-size:1.2rem;margin:.5rem 0 1rem}
.catalog-selected .path-heading span{color:#c4b5fd;font-size:.875rem}
.catalog-selected .cards,.catalog-planning .catalog-guide-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr));gap:1rem}
.catalog-selected .resource,.catalog-guide-card{display:flex;flex-direction:column;align-items:start;min-width:0;padding:1.25rem;border:1px solid #334155;border-radius:.75rem;background:#101c2f}
.catalog-selected .resource h4,.catalog-guide-card h3{margin:.5rem 0 .75rem;font-size:1.1875rem;line-height:1.35;color:#fff}
.catalog-selected .resource p,.catalog-planning p{font-size:1rem;line-height:1.65;color:#cbd5e1}
.catalog-selected .resource .kind{font-size:.875rem;color:#c4b5fd}
.catalog-selected .resource a,.catalog-guide-card a{margin-top:auto;padding-top:.5rem;font-size:1rem;color:#a5f3fc;text-underline-offset:.25rem}
.catalog-planning .catalog-next-links,.catalog-language-nav{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem;line-height:1.6}
.catalog-language-nav a,.catalog-next-links a{font-size:1rem;color:#a5f3fc}
.catalog-language-nav [aria-current="page"]{text-decoration:underline;text-underline-offset:.3rem}
.catalog-planning a:focus-visible,.catalog-selected a:focus-visible,.catalog-language-nav a:focus-visible{outline:3px solid #a5f3fc;outline-offset:4px}
</style>'''

def catalog_guides(locale):
    c = COPY[locale]
    cards = ''.join(
        f'<article class="catalog-guide-card"><h3>{e(title)}</h3><p>{e(description)}</p>'
        f'<a data-catalog-guide="{slug}" href="{catalog(locale)}{slug}.html" hreflang="{c["lang"]}">{e(c["open"])}</a></article>'
        for slug,title,description in c['planningGuides']
    )
    alternatives = (
        f'<p><a href="/discovery/#dq" hreflang="pt-BR">{e(c["portugueseDiscovery"])}</a></p>'
        if locale == 'en' else ''
    )
    return f'''<section class="catalog-planning" id="catalog-planning-guides" aria-labelledby="catalog-planning-title">
<h2 id="catalog-planning-title">{e(c['catalogGuidesTitle'])}</h2><p>{e(c['catalogGuidesIntro'])}</p>
<div class="catalog-guide-grid">{cards}</div>
<h3>{e(c['catalogNextTitle'])}</h3><nav class="catalog-next-links" aria-label="{e(c['catalogNextTitle'])}">
<a href="{catalog(locale)}discovery-app-paths.html" hreflang="{c['lang']}">{e(c['nextStepGuide'])}</a>
<a href="{operations_guide(locale)}" hreflang="{c['lang']}">{e(c['operationsGuide'])}</a>
<a href="/apps/content-hub.html" hreflang="en">{e(c['contentHub'])}</a>
<a href="{discovery(locale)}" hreflang="{c['lang']}">{e(c['discovery'])}</a></nav>{alternatives}
</section>'''

def multi_site_promotion(locale):
    c = COPY[locale]
    return f'''<!--multi-site-planning:start--><aside class="wrap" aria-labelledby="multi-site-planning-title" style="max-width:1120px;margin:2rem auto;padding:1.5rem;border:1px solid #475569;border-radius:1rem;background:#0f172a;color:#e2e8f0">
<h2 id="multi-site-planning-title">{e(c['multiSiteTitle'])}</h2><p style="font-size:1rem;line-height:1.65">{e(c['multiSiteIntro'])}</p>
<p><a href="{catalog(locale)}multi-site-it-support-planning.html" hreflang="{c['lang']}" style="color:#a5f3fc;text-decoration:underline;text-underline-offset:.25rem">{e(c['multiSiteLink'])}</a></p></aside><!--multi-site-planning:end-->'''

def insert_multi_site(content, locale):
    pattern = r'<!--multi-site-planning:start-->[\s\S]*?<!--multi-site-planning:end-->'
    assert len(re.findall(pattern, content)) <= 1, 'Unique multi-site planning promotion'
    block = multi_site_promotion(locale)
    if re.search(pattern, content):
        after = re.sub(pattern, lambda _: block, content)
    else:
        closing = '</main>' if '</main>' in content else '</body>'
        assert closing in content, 'Page landmark for planning guide'
        after = content.replace(closing, block + '\n' + closing, 1)
    assert protected_parts(after) == protected_parts(content), 'Planning promotion preserves page behavior'
    return after

def render(locale, is_home=False, *, is_catalog=False):
    assert not (is_home and is_catalog), 'A page belongs to one route family'
    c = COPY[locale]
    title, intro = ((c['catalogTitle'], c['catalogIntro']) if is_catalog else
                    (c['homeTitle'], c['homeIntro']) if is_home else (c['title'], c['intro']))
    local_discovery = True
    discovery_url = discovery(locale) if local_discovery else '/discovery/'
    discovery_lang = c['lang'] if local_discovery else 'pt-BR'
    discovery_note = c['localizedDiscoveryLanguage'] if local_discovery else c['discoveryLanguage']
    route = catalog if is_catalog else home if is_home else showcase
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
    next_step = catalog_guides(locale) if is_catalog else multi_site_promotion(locale)
    catalog_style = CATALOG_STYLE if is_catalog else ''
    resources_class = 'resources catalog-selected' if is_catalog else 'resources'
    schema = json.dumps({'@context':'https://schema.org','@type':'CollectionPage','name':title,'description':intro,'url':canonical,'inLanguage':c['lang']},ensure_ascii=False).replace('<','\\u003c')
    return f'''<!doctype html>
<html lang="{c['lang']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)} | Zion Tech Group</title><meta name="description" content="{e(intro)}">
<link rel="canonical" href="{canonical}">{alternates}<link rel="alternate" hreflang="x-default" href="{ORIGIN+route('en')}">
<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(intro)}"><meta property="og:url" content="{canonical}"><meta property="og:type" content="website">
<link rel="stylesheet" href="/assets/css/apps-showcase.css"><script type="application/ld+json">{schema}</script>{catalog_style}</head>
<body class="zion-showcase" data-apps-showcase="{RELEASE}">
<a class="skip" href="#main">{e(c['skip'])}</a>
<header class="wrap"><div class="top"><a class="brand" href="{home(locale)}">ZION<span>TECH GROUP</span></a><nav aria-label="{e(c['network'])}"><a href="{home(locale)}">{e(c['home'])}</a><a href="{showcase(locale)}">{e(c['network'])}</a><a href="{network(locale)}">{e(c['directory'])}</a><a class="button secondary" href="{discovery_url}" hreflang="{discovery_lang}">{e(c['discovery'])}</a></nav></div><nav class="languages" aria-label="{e(c['languages'])}">{languages(locale,is_home,is_catalog=is_catalog)}</nav></header>
<main id="main" class="wrap" tabindex="-1"><section class="hero"><p class="eyebrow">{e(c['eyebrow'])}</p><h1>{e(title)}</h1><p class="intro">{e(intro)}</p><div class="actions"><a class="button" href="#resources">{e(c['tools'])} <span aria-hidden="true">↓</span></a><a href="{network(locale)}">{e(c['directory'])} <span aria-hidden="true">↗</span></a></div></section>
<section id="resources" class="{resources_class}" aria-labelledby="resources-title"><p class="eyebrow">{e(c['network'])}</p><h2 id="resources-title">{e(c['featured'])}</h2>{cards}</section>
{next_step}<section class="process" aria-labelledby="process-title"><h2 id="process-title">{e(c['stepsTitle'])}</h2><ol>{steps}</ol><p class="scope">{e(c['scope'])}</p></section>
<section class="discovery" aria-labelledby="discovery-title"><div><p class="eyebrow">Zion Tech Group</p><h2 id="discovery-title">{e(c['discovery'])}</h2><p>{e(c['discoveryBody'])}</p><p class="note">{e(discovery_note)}</p></div><div class="actions"><a class="button" href="{discovery_url}" hreflang="{discovery_lang}">{e(c['discovery'])} <span aria-hidden="true">↗</span></a><a href="mailto:commercial@ziontechgroup.com">{e(c['contact'])}</a></div></section>
<p class="field-note">{e(c['fieldNote'])}</p></main>
<footer class="wrap"><a class="brand" href="{home(locale)}">ZION<span>TECH GROUP</span></a><nav aria-label="{e(c['network'])}"><a href="{showcase(locale)}">{e(c['network'])}</a><a href="{network(locale)}">{e(c['directory'])}</a><a href="https://github.com/Zion-support/zion-app-network">{e(c['source'])}</a></nav><span>© 2026 Zion Tech Group</span></footer>
</body></html>
'''

def promotion(locale):
    c=COPY[locale]
    return f'''<!-- {RELEASE}:start -->
<section id="zion-apps-showcase" class="wrap" style="max-width:1200px;margin:2rem auto;padding:2rem 1.25rem;border:1px solid #475569;border-radius:1rem;background:#0f172a;color:#e2e8f0" aria-labelledby="zion-apps-showcase-title"><p style="color:#67e8f9">{e(c['eyebrow'])}</p><h2 id="zion-apps-showcase-title">{e(c['promo'])}</h2><p>{e(c['promoBody'])}</p><p><a href="{showcase(locale)}" style="color:#c4b5fd">{e(c['network'])} →</a> · <a href="{network(locale)}" style="color:#c4b5fd">{e(c['directory'])}</a></p><nav aria-label="{e(c['languages'])}" style="display:flex;flex-wrap:wrap;gap:1rem">{languages(locale)}</nav></section>
<!-- {RELEASE}:end -->'''

def protected_parts(content):
    return re.findall(r'<script\b[^>]*>[\s\S]*?</script\s*>|<form\b[^>]*>[\s\S]*?</form\s*>', content, re.I)

def localize_home_discovery(content, locale):
    """Update the questionnaire destination without changing forms or scripts."""
    c = COPY[locale]
    def link(match):
        tag = match.group(0)
        route = r'href="/(?:en/|pt/|es/|fr/|de/)?discovery/(?:#dq)?"'
        if not re.search(route, tag):
            return tag
        tag = re.sub(route, f'href="{discovery(locale)}"', tag)
        if re.search(r'\bhreflang="[^"]*"', tag):
            tag = re.sub(r'\bhreflang="[^"]*"', f'hreflang="{c["lang"]}"', tag)
        else:
            tag = tag[:-1] + f' hreflang="{c["lang"]}">'
        if 'title=' in tag:
            tag = re.sub(r'\btitle="[^"]*"', f'title="{e(c["localizedDiscoveryTitle"])}"', tag)
        return tag
    after = re.sub(r'<a\b[^>]*>', link, content)
    after = after.replace(e(c['discoveryLanguage']), e(c['localizedDiscoveryLanguage']))
    labels = {
        'en': 'Free online Discovery (Portuguese)',
        'es': 'Discovery gratuito en línea (en portugués)',
        'fr': 'Discovery gratuit en ligne (en portugais)',
        'de': 'Kostenlose Online-Discovery (Portugiesisch)',
    }
    if locale in labels:
        after = after.replace(e(labels[locale]), e(c['discovery']))
    if locale == 'en':
        after = after.replace('It opens in Portuguese.', 'Available in English, Portuguese, Spanish, French and German.')
        after = after.replace('Start with a free online Discovery questionnaire in Portuguese.',
                              'Start with a free online Discovery questionnaire in your preferred language.')
    assert protected_parts(after) == protected_parts(content), 'Homepage forms/scripts changed'
    return after

def compose_home(locale, existing):
    """Render maintained six-card content around separately owned homepage blocks.

    The homepage promotion, its scoped styles and its language navigation have
    their own editing surface. Missing/duplicate ownership markers are errors;
    regeneration must never erase those additions or protected page behavior.
    """
    existing = localize_home_discovery(existing, locale)
    patterns = {
        'styles': r'<style id="zion-home-guides-styles">[\s\S]*?</style>',
        'navigation': r'<nav class="home-language-nav"[^>]*data-home-language-selector[^>]*>[\s\S]*?</nav>',
        'promotion': r'<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->',
    }
    parts = {}
    for name, pattern in patterns.items():
        matches = re.findall(pattern, existing)
        assert len(matches) == 1, f'Exactly one owned homepage {name}: {locale}'
        parts[name] = matches[0]
    assert 'id="app-paths-home"' in parts['promotion'], f'Homepage planning anchor: {locale}'
    content = render(locale, True)
    content = content.replace('</head>', parts['styles'] + '\n</head>', 1)
    content, count = re.subn(r'<nav class="languages"[\s\S]*?</nav>', lambda _: parts['navigation'], content, count=1)
    assert count == 1, f'Homepage language navigation: {locale}'
    content = content.replace('<section id="resources"', parts['promotion'] + '\n<section id="resources"', 1)
    assert protected_parts(content) == protected_parts(existing), f'Homepage forms/scripts changed: {locale}'
    return content

def english_catalog(content):
    """Add the same curated resources while retaining the English legacy index."""
    marker = r'<!--catalog-planning:start-->[\s\S]*?<!--catalog-planning:end-->'
    assert len(re.findall(marker, content)) <= 1, 'Duplicate catalog promotion'
    base = re.sub(marker + r'\n?', '', content)
    base = re.sub(r'<style id="catalog-planning-styles">[\s\S]*?</style>\n?', '', base)
    base = base.replace('href="/discovery/"', 'href="/en/discovery/#dq" hreflang="en"')
    rendered = render('en', is_catalog=True)
    selected = rendered[rendered.index('<section id="resources"'):rendered.index('<section class="process"')]
    block = ('<!--catalog-planning:start--><nav class="catalog-language-nav" aria-label="Catalog language">'
             + languages('en', is_catalog=True) + '</nav>\n' + selected + '<!--catalog-planning:end-->\n')
    assert base.count('<nav class="sub">') == 1, 'Preserved English category navigation'
    base = base.replace('<nav class="sub">', block + '<nav class="sub">', 1)
    base = base.replace('</head>', CATALOG_STYLE + '\n</head>', 1)
    assert protected_parts(base) == protected_parts(content), 'Catalog forms/scripts changed'
    return base

def files():
    result={}
    for locale in COPY:
        result['public'+showcase(locale)+'index.html']=render(locale)
        if locale != 'en':
            home_path='public'+home(locale)+'index.html'
            result[home_path]=compose_home(locale,(ROOT/home_path).read_text())
            # Preserve the published catalog route family in canonical, alternate,
            # Open Graph and structured metadata; the showcase is a separate page.
            result[f'public/{locale}/apps/index.html']=render(locale,is_catalog=True)
    # Keep the historical root path in sync with the deployable English source.
    result['apps-network-showcase/index.html']=render('en')
    for path in ('public/index.html','public/en/index.html','public/apps/index.html'):
        content=(ROOT/path).read_text()
        content=english_catalog(content) if path=='public/apps/index.html' else localize_home_discovery(content,'en')
        if path=='public/en/index.html':
            alternates=''.join(f'<link rel="alternate" hreflang="{v["lang"]}" href="{ORIGIN+home(l)}">' for l,v in COPY.items())
            alternates+=f'<link rel="alternate" hreflang="x-default" href="{ORIGIN+home("en")}">'
            pattern=r'<link\b(?=[^>]*\brel=[\"\x27]alternate[\"\x27])[^>]*>'
            matches=list(re.finditer(pattern,content,re.I))
            if matches:
                first=matches[0].start()
                content=re.sub(pattern,lambda match: alternates if match.start()==first else '',content,flags=re.I)
            else:
                content=content.replace('</head>',alternates+'</head>',1)
        pattern=r'<!-- '+RELEASE+r':start -->.*?<!-- '+RELEASE+r':end -->'
        if re.search(pattern,content,re.S):
            content=re.sub(pattern,lambda _:promotion('en'),content,flags=re.S)
        else:
            closing='</main>' if '</main>' in content else '</body>'
            assert closing in content, path
            content=content.replace(closing,promotion('en')+'\n'+closing,1)
        if path != 'public/apps/index.html':
            content=insert_multi_site(content,'en')
        result[path]=content
    for locale in COPY:
        map_path='public'+catalog(locale)+'discovery-app-paths.html'
        result[map_path]=insert_multi_site((ROOT/map_path).read_text(),locale)
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
