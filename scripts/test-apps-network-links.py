#!/usr/bin/env python3
"""Read-only catalog language contracts for existing artifacts or in-memory snapshots.

Checks a bounded sample: four localized catalogs and five token-cost editions.
No generation, HTTP, form submission, payment, or deployment is performed.
"""
import argparse
import collections
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

SITE = 'https://ziontechgroup.com'


LANGS = {'en': 'en', 'pt': 'pt-BR', 'es': 'es', 'fr': 'fr', 'de': 'de'}


HREFLANGS = ['en', 'pt', 'es', 'fr', 'de', 'x-default']


def route(lang, slug):
    return '/' + ('' if lang == 'en' else lang + '/') + slug + '/'


class Element:
    def __init__(self, tag, attrs=(), parent=None):
        self.tag, self.attrs, self.parent = tag, dict(attrs), parent
        self.children = []

    def text(self):
        if self.tag in ('script', 'style') or 'hidden' in self.attrs or self.attrs.get('aria-hidden') == 'true':
            return ''
        if re.search(r'display\s*:\s*none|visibility\s*:\s*hidden', self.attrs.get('style', ''), re.I):
            return ''
        return ' '.join(c if isinstance(c, str) else c.text() for c in self.children)

    def within(self, predicate):
        node = self
        while node:
            if predicate(node):
                return True
            node = node.parent
        return False


class Document(HTMLParser):
    VOID = set('area base br col embed hr img input link meta param source track wbr'.split())

    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.root = Element('document')
        self.current = self.root
        self.nodes = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        node = Element(tag, attrs, self.current)
        self.current.children.append(node)
        self.nodes.append(node)
        if tag not in self.VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        node = self.current
        while node.parent:
            if node.tag == tag:
                self.current = node.parent
                return
            node = node.parent

    def handle_data(self, data):
        self.current.children.append(data)

    def tagged(self, tag):
        return [n for n in self.nodes if n.tag == tag]


def is_language_container(node):
    return 'langs' in node.attrs.get('class', '').split()


def metadata(doc):
    return {
        'lang': [n.attrs.get('lang') for n in doc.tagged('html')],
        'title': [n.text().strip() for n in doc.tagged('title')],
        'canonical': [n.attrs for n in doc.tagged('link') if n.attrs.get('rel') == 'canonical'],
        'alternates': [n.attrs for n in doc.tagged('link') if n.attrs.get('rel') == 'alternate'],
    }


def check_page(html, url, lang, slug, require_apps=True):
    doc = Document(html)
    groups = {key: [] for key in ['selector', 'app_links', 'discovery_cta', 'metadata']}
    anchors = doc.tagged('a')
    base_nodes = doc.tagged('base')
    effective_base = urljoin(url, base_nodes[0].attrs.get('href', '')) if base_nodes else url
    selectors = [a for a in anchors if a.within(is_language_container)]
    containers = [n for n in doc.nodes if is_language_container(n)]
    if not selectors or not containers:
        groups['selector'].append('Missing language selector (cannot pass vacuously)')
    for container in containers:
        selected = [a for a in selectors if a.within(lambda n: n is container)]
        counts = collections.Counter(a.attrs.get('hreflang') for a in selected)
        if counts != collections.Counter({l: 1 for l in LANGS}):
            groups['selector'].append('Selector must contain each of en/pt/es/fr/de exactly once')
        active = [a for a in selected if a.attrs.get('aria-current') in ('true', 'page')]
        if len(active) != 1 or active[0].attrs.get('hreflang') != lang:
            groups['selector'].append('Exactly one current language is required')
    for a in selectors:
        href = a.attrs.get('href', '')
        target = urljoin(effective_base, href)
        code = a.attrs.get('hreflang')
        expected = SITE + route(code, slug) if code in LANGS else None
        if target != expected or 'undefined' in unquote(target).lower():
            groups['selector'].append(f'{code}: {href!r} resolves to {target}; expected {expected}')

    app_links = [a for a in anchors if not a.within(is_language_container) and (
        'card' in a.attrs.get('class', '').split() or
        a.within(lambda n: n.attrs.get('id') in ('apps', 'related')) or
        urlsplit(urljoin(effective_base, a.attrs.get('href', ''))).path.endswith('/apps-network/'))]
    if require_apps and not app_links:
        groups['app_links'].append('Missing app links (cannot pass vacuously)')
    for a in app_links:
        target = urljoin(effective_base, a.attrs.get('href', ''))
        parsed = urlsplit(target)
        segments = [x for x in unquote(parsed.path).split('/') if x]
        language_positions = [i for i, x in enumerate(segments) if x in LANGS]
        if (parsed.scheme != 'https' or parsed.netloc != 'ziontechgroup.com' or
                'undefined' in unquote(target).lower() or '//' in parsed.path or
                len(language_positions) > 1 or any(i != 0 for i in language_positions)):
            groups['app_links'].append(f'{a.attrs.get("href")!r} resolves to invalid locale path {target}')

    ctas = [a for a in anchors if urlsplit(urljoin(effective_base, a.attrs.get('href', ''))).path.rstrip('/') == '/discovery']
    if not ctas:
        groups['discovery_cta'].append('Missing Discovery CTA (cannot pass vacuously)')
    for a in ctas:
        if lang != 'pt':
            # Explicit R7 policy: visible PT-BR in the CTA itself. A head link,
            # hreflang alone, hidden note or distant paragraph is insufficient.
            if not re.search(r'\bPT-BR\b', a.text(), re.I):
                groups['discovery_cta'].append('Foreign-language CTA must visibly disclose PT-BR')
            if a.attrs.get('hreflang', '').lower() != 'pt-br':
                groups['discovery_cta'].append('Foreign-language CTA must identify destination hreflang=pt-BR')

    meta = metadata(doc)
    canonical = [n for n in doc.tagged('link') if n.attrs.get('rel') == 'canonical']
    alternates = [n for n in doc.tagged('link') if n.attrs.get('rel') == 'alternate']
    if meta['lang'] != [LANGS[lang]] or len(meta['title']) != 1 or not meta['title'][0]:
        groups['metadata'].append('Missing/incorrect html lang or title')
    if len(canonical) != 1 or canonical[0].attrs.get('href') != url:
        groups['metadata'].append('Exactly one absolute self-canonical is required')
    counts = collections.Counter(n.attrs.get('hreflang') for n in alternates)
    if counts != collections.Counter(HREFLANGS):
        groups['metadata'].append('Exactly six distinct alternates are required')
    for n in canonical + alternates:
        if not n.within(lambda x: x.tag == 'head'):
            groups['metadata'].append('SEO links must remain in head')
    for n in alternates:
        code = n.attrs.get('hreflang')
        expected = SITE + route('en' if code == 'x-default' else code, slug) if code in HREFLANGS else None
        if n.attrs.get('href') != expected:
            groups['metadata'].append(f'Incorrect alternate {code}: {n.attrs.get("href")}')
    return groups


def cases(family):
    result = [(l, 'apps-network') for l in LANGS if l != 'en']
    if family == 'generated':
        result += [(l, 'token-cost') for l in LANGS]
    return result


def check_root(root, family='generated'):
    result = []
    for lang, slug in cases(family):
        rel = route(lang, slug).lstrip('/') + 'index.html'
        file = root / rel
        if not file.is_file():
            result.append({'url': SITE + route(lang, slug), 'groups': {'input': ['Missing ' + rel]}})
        else:
            result.append({'url': SITE + route(lang, slug), 'groups': check_page(file.read_text(), SITE + route(lang, slug), lang, slug)})
    failed = collections.Counter(key for row in result for key, errors in row['groups'].items() if errors)
    total = sum(len(row['groups']) for row in result)
    return {'pages': len(result), 'groups': total, 'failed_groups': sum(failed.values()),
            'failed_by_contract': dict(failed), 'passed_groups': total - sum(failed.values()), 'details': result}


def mutation_tests(good):
    url, lang, slug = SITE + '/es/apps-network/', 'es', 'apps-network'
    assert not any(check_page(good, url, lang, slug).values())
    mutations = [
        ('undefined selector', 'selector', lambda s: s.replace('href="' + SITE + '/fr/apps-network/" hreflang="fr"', 'href="' + SITE + '/fr/undefined/" hreflang="fr"', 1)),
        ('missing selector', 'selector', lambda s: re.sub(r'<nav class="langs"[^>]*>.*?</nav>', '', s, flags=re.S)),
        ('wrong selector family', 'selector', lambda s: s.replace('href="' + SITE + '/fr/apps-network/" hreflang="fr"', 'href="' + SITE + '/fr/token-cost/" hreflang="fr"', 1)),
        ('relative repeated locale', 'app_links', lambda s: s.replace('href="/es/token-cost/"', 'href="es/token-cost/"', 1)),
        ('absolute repeated locale', 'app_links', lambda s: s.replace('href="/es/token-cost/"', 'href="/es/apps-network/es/token-cost/"', 1)),
        ('double slash app path', 'app_links', lambda s: s.replace('href="/es/token-cost/"', 'href="/es//token-cost/"', 1)),
        ('missing app links', 'app_links', lambda s: re.sub(r'<section id="apps">.*?</section>', '', s, flags=re.S)),
        ('CTA metadata only', 'discovery_cta', lambda s: s.replace(' — Cuestionario en portugués (PT-BR)', '')),
        ('hidden CTA notice', 'discovery_cta', lambda s: s.replace(' — Cuestionario en portugués (PT-BR)', '<span hidden>PT-BR</span>')),
        ('wrong CTA hreflang', 'discovery_cta', lambda s: s.replace('href="/discovery/" hreflang="pt-BR"', 'href="/discovery/" hreflang="es"')),
        ('missing CTA', 'discovery_cta', lambda s: re.sub(r'<a class="btn" href="/discovery/"[^>]*>.*?</a>', '', s)),
        ('wrong canonical', 'metadata', lambda s: s.replace('rel="canonical" href="' + url + '"', 'rel="canonical" href="' + SITE + '/"')),
        ('missing alternate', 'metadata', lambda s: re.sub(r'  <link rel="alternate" hreflang="fr"[^>]+>', '', s)),
        ('duplicate alternate', 'metadata', lambda s: s.replace('hreflang="x-default"', 'hreflang="en"', 1)),
        ('wrong alternate target', 'metadata', lambda s: s.replace('rel="alternate" hreflang="fr" href="' + SITE + '/fr/apps-network/"', 'rel="alternate" hreflang="fr" href="' + SITE + '/de/apps-network/"')),
        ('wrong html language', 'metadata', lambda s: s.replace('<html lang="es">', '<html lang="en">')),
    ]
    results = []
    for name, group, mutate in mutations:
        bad = mutate(good)
        if bad == good:
            raise AssertionError('Mutation did not apply: ' + name)
        errors = check_page(bad, url, lang, slug)
        if not errors[group]:
            raise AssertionError('Mutation escaped its contract: ' + name)
        results.append({'case': name, 'rejected_by': group})
    return results

def check_snapshot(pages, family):
    result = []
    for lang, slug in cases(family):
        rel = route(lang, slug).lstrip('/') + 'index.html'
        groups = (check_page(pages[rel], SITE + route(lang, slug), lang, slug)
                  if rel in pages else {'input': ['Missing ' + rel]})
        result.append({'url': SITE + route(lang, slug), 'groups': groups})
    failed = collections.Counter(key for row in result for key, errors in row['groups'].items() if errors)
    total = sum(len(row['groups']) for row in result)
    return {'pages': len(result), 'groups': total, 'failed_groups': sum(failed.values()),
            'failed_by_contract': dict(failed), 'passed_groups': total - sum(failed.values()), 'details': result}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument('--root', type=Path, help='Already assembled public artifact directory')
    source.add_argument('--snapshot', type=Path, help='JSON object mapping relative HTML paths to content')
    parser.add_argument('--family', choices=['generated', 'hubs'], default='generated')
    parser.add_argument('--negative-controls', action='store_true', help='Verify rejection of 16 known invalid mutations')
    args = parser.parse_args()
    if args.root:
        result = check_root(args.root, args.family)
        read_es = lambda: (args.root / 'es/apps-network/index.html').read_text()
    else:
        pages = json.loads(args.snapshot.read_text())
        result = check_snapshot(pages, args.family)
        read_es = lambda: pages['es/apps-network/index.html']
    if args.negative_controls and not result['failed_groups']:
        result['negative_controls'] = mutation_tests(read_es())
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return int(result['failed_groups'] > 0)


if __name__ == '__main__':
    raise SystemExit(main())
