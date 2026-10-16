#!/usr/bin/env python3
"""Build only Zion's three reviewed satellite tools and their five-language links.

No network access or deployment. Original application logic is source-hash pinned.
Human-readable JavaScript string literals are translated, never executable input.
All reads and collisions are validated before the first output write.
"""
from __future__ import annotations
import argparse
import hashlib
import html
import json
import re
from pathlib import Path
from typing import Any

RELEASE = 'satellite-suite-five-locales-v1'
BASE = 'https://ziontechgroup.com'
LANGS = {'en': 'en', 'pt': 'pt-BR', 'es': 'es', 'fr': 'fr', 'de': 'de'}
NATIVE = {'en': 'English', 'pt': 'Portugu\u00eas', 'es': 'Espa\u00f1ol', 'fr': 'Fran\u00e7ais', 'de': 'Deutsch'}
SLUGS = ['mcp-trust-boundary-studio', 'agent-canary-release-lab', 'field-spares-custody-kit']
TITLES = ['MCP Trust Boundary Studio', 'Agent Canary Release Lab', 'Field Spares Custody Kit']
PINNED = ['ea2d7688629e71a77ec850294c7734a9d8f39bc7', '730e534757351aa9b7f182b41083c60c4cc3e611', '34deac379e2c2f9cd11d51141c9d4c59920444ec']
DESCRIPTIONS = ['Map agent access before connecting business systems.', 'Plan a reversible model or agent release.', 'Trace parts and verify evidence before field work.']
EVIDENCE = ['Collect authorization metadata, tool scopes, approval records and tenant-isolation tests. Use synthetic tokens only.', 'Record the baseline, representative test cases, cohort owner, stop thresholds and a tested rollback path. No production change is executed.', 'Reconcile old and replacement serials, custody receipts, written all-in costs, customer PO and a separate Zion release. Never infer approval from a score.']
PRIVACY = 'Inputs stay in this browser session. No live AI, telemetry, email, payment or dispatch service is connected.'
LIMITS = 'Scores summarize selected inputs, not measured safety, performance or readiness. Optional paid services require a separate agreement.'
JS_STRING = re.compile(r'"(?:\\.|[^"\\])*"')
CSS = '''/* satellite-suite-five-locales-v1; scoped to generated pages */
:root{color-scheme:dark;--ink:#e7f0f5;--muted:#afc6d6;--accent:#75e5cb;--line:#345367}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:#091524;font:16px/1.65 system-ui,-apple-system,Segoe UI,sans-serif}a{color:var(--accent);text-underline-offset:4px}a,button,input,select{touch-action:manipulation}:focus-visible{outline:3px solid #ffd891;outline-offset:4px}header,footer{background:#101f32;border-block:1px solid var(--line)}.wrap{max-width:1180px;margin:auto;padding:22px}.brand{font-size:1.1rem;font-weight:800;color:white;text-decoration:none}.nav,.languages,.actions{display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center}.nav{margin-top:14px;font-size:.92rem}.languages{margin-block:20px;font-size:.87rem}.languages a{border:1px solid var(--line);border-radius:20px;padding:6px 13px;text-decoration:none}.languages a[aria-current=page]{background:#254b51;color:#fff;border-color:var(--accent)}.skip{position:absolute;top:-100px;left:18px;z-index:5;background:#142d41;padding:14px}.skip:focus{top:12px}main{max-width:1180px;margin:24px auto 64px;padding:0 22px}h1{font-size:clamp(2rem,5vw,3.35rem);line-height:1.12;letter-spacing:-.025em;overflow-wrap:anywhere;max-width:1000px;margin-block:16px}h2{font-size:1.4rem;line-height:1.3}h3{line-height:1.4}.eyebrow{color:var(--accent);font-size:.78rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.lead{max-width:860px;font-size:1.1rem;color:#cadce7}.muted{font-size:.88rem;color:var(--muted)}.columns{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:24px;margin-top:26px;align-items:start}.panel,.card{padding:24px;background:#11253a;border:1px solid var(--line);border-radius:16px;min-width:0}.panel h2{margin-top:0}.panel p,.card p{overflow-wrap:anywhere}.field{display:block;font-weight:650;margin:16px 0}.field input,.field select{display:block;width:100%;min-height:44px;margin-top:7px;padding:10px 12px;background:#081827;color:var(--ink);border:1px solid #527386;border-radius:9px;font:inherit}.field input[aria-invalid=true]{border-color:#e5b27a}.check{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-top:1px solid var(--line)}.check input{accent-color:var(--accent);width:19px;height:19px;margin:4px 0;flex-shrink:0}button,.button{display:inline-block;padding:11px 16px;border:1px solid var(--accent);background:var(--accent);color:#07342e;border-radius:9px;font:inherit;font-weight:700;cursor:pointer;text-decoration:none;min-height:44px}.secondary{background:transparent;color:var(--accent)}.actions{margin-top:24px}#notice{min-height:1.6em}#score{font-size:1.2rem;font-weight:700;color:var(--accent)}#status{padding:13px;background:#433041;border:1px solid #946779;border-radius:9px;font-weight:700}#status.ready,#status.review{background:#353423;border-color:#8e8558}#findings{padding-left:22px}#findings li{padding:6px 0;overflow-wrap:anywhere}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-block:24px}.card{display:flex;flex-direction:column}.card .button{margin-top:auto;align-self:flex-start}.notes{margin-top:28px;border-top:1px solid var(--line);padding-top:24px}.footer{font-size:.88rem;color:var(--muted)}fieldset{border:0;padding:0;margin:0}legend{font-size:1.03rem;font-weight:750;padding-top:14px}.source-links{font-size:.85rem}.source-links a{margin-right:15px}@media(max-width:850px){.columns,.cards{grid-template-columns:1fr}.wrap,main{padding-inline:16px}.panel,.card{padding:19px}.actions button{max-width:100%}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}'''


def blob_sha(data: bytes) -> str:
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()


def page_url(locale: str, slug: str | None = None) -> str:
    prefix = '' if locale == 'en' else '/' + locale
    return prefix + ('/' + slug + '/' if slug else '/apps/satellite-labs.html')


def home_url(locale: str) -> str:
    return '/' if locale == 'pt' else '/' + locale + '/'


def escape(value: str) -> str:
    return html.escape(value, quote=True)


def load_copy(path: Path) -> dict[str, dict[str, str]]:
    data = json.loads(path.read_text('utf-8'))
    if data.get('schema') == 'parallel-copy-v1':
        if set(data) != {'schema', 'languages', 'entries'} or data['languages'] != ['pt', 'es', 'fr', 'de']:
            raise ValueError('Invalid parallel translation schema')
        entries = data['entries']
        if not isinstance(entries, dict) or not entries or any(not isinstance(k, str) or not isinstance(v, list) or len(v) != 4 for k, v in entries.items()):
            raise ValueError('Invalid parallel translation entry')
        data = {'en': {key: key for key in entries}, **{loc: {key: values[i] for key, values in entries.items()} for i, loc in enumerate(data['languages'])}}
    if set(data) != set(LANGS):
        raise ValueError('Exactly five supported copy sets are required')
    keys = set(data['en'])
    for lang, copy in data.items():
        if set(copy) != keys or any(not isinstance(v, str) or not v or re.search(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', v) for v in copy.values()):
            raise ValueError('Missing or invalid translation: ' + lang)
    return data


def model(source: str, index: int) -> dict[str, Any]:
    if index < 2:
        return json.loads(source.split(',spec=', 1)[1].split(';const $=', 1)[0])
    # Mirrors the pinned pure evaluator. No behavior is implemented in this schema.
    return {'opts': [['movement', 'Part movement', ['Local depot', 'Imported part', 'Already onsite']], ['sla', 'Service target', ['Planned visit', 'Four-hour target', 'Next business day']]],
            'text': [['ticket', 'Work order reference'], ['asset', 'Original asset serial'], ['part', 'Replacement part serial']],
            'nums': [['base', 'Supplier base cost', ''], ['travel', 'Travel / parking', ''], ['freight', 'Freight', ''], ['tax', 'Taxes / duties', '']],
            'checks': [['scope', 'Final written scope and site'], ['engineer', 'Named engineer and qualifications'], ['serial', 'Old/new serial mapping'], ['custody', 'Chain-of-custody receipt'], ['terms', 'All-in costs and exclusions'], ['client', 'Client written acceptance'], ['po', 'Applicable PO / work order'], ['zion', 'Separate Zion written authorization']]}


def compile_runtime(source: str, locale: str, copy: dict[str, str]) -> str:
    """Replace only exact, JSON-compatible human-readable string literals."""
    def replacement(match: re.Match[str]) -> str:
        token = match[0]
        try:
            value = json.loads(token)
        except ValueError:
            return token
        return json.dumps(copy[value], ensure_ascii=True) if value in copy else token
    translated = JS_STRING.sub(replacement, source)
    # Report keys and arithmetic stay stable; locale-specific strings are human text.
    # Decimal input parsing is unchanged. Only displayed decimal numbers are formatted.
    translated = translated.replace('.toFixed(2)', '.toLocaleString(' + json.dumps(LANGS[locale]) + ',{minimumFractionDigits:2,maximumFractionDigits:2})')
    prefix = '/* ' + RELEASE + ' | ' + locale + ' | source logic preserved */\n'
    return prefix + translated


def controls(spec: dict[str, Any], tr: Any) -> str:
    parts = []
    for ident, label, options in spec['opts']:
        opts = ''.join(f'<option value="{i}">{escape(tr(v))}</option>' for i, v in enumerate(options))
        parts.append(f'<label class="field" for="{ident}">{escape(tr(label))}<select id="{ident}">{opts}</select></label>')
    for ident, label in spec.get('text', []):
        parts.append(f'<label class="field" for="{ident}">{escape(tr(label))}<input id="{ident}" maxlength="120" required autocomplete="off"></label>')
    for ident, label, default in spec.get('nums', []):
        step = '1' if ident == 'users' else '.01' if ident != 'threshold' else '.1'
        maximum = '100' if ident == 'threshold' else '100000000'
        minimum = '.1' if ident == 'threshold' else '1' if ident == 'users' else '0'
        parts.append(f'<label class="field" for="{ident}">{escape(tr(label))}<input id="{ident}" type="number" value="{default}" min="{minimum}" max="{maximum}" step="{step}" required inputmode="decimal"></label>')
    for ident, label in spec['checks']:
        parts.append(f'<label class="check" for="{ident}"><input id="{ident}" type="checkbox"><span>{escape(tr(label))}</span></label>')
    return '\n'.join(parts)


def page(locale: str, index: int | None, spec: dict[str, Any] | None, copy: dict[str, str]) -> str:
    tr = lambda key: copy[key]
    slug = SLUGS[index] if index is not None else None
    url = page_url(locale, slug)
    title = TITLES[index] if index is not None else tr('Three tools. One evidence-first workflow.')
    description = tr(DESCRIPTIONS[index]) if index is not None else tr('Start with the access checklist, rehearse a controlled rollout, then prepare the field-evidence packet when onsite work is relevant.')
    headlinks = ''.join(f'<link rel="alternate" hreflang="{tag}" href="{BASE + page_url(lang, slug)}">' for lang, tag in LANGS.items())
    headlinks += f'<link rel="alternate" hreflang="x-default" href="{BASE + page_url("en", slug)}">'
    language_links = ''.join(f'<a href="{page_url(lang, slug)}" lang="{tag}" hreflang="{tag}"' + (' aria-current="page"' if lang == locale else '') + f'>{NATIVE[lang]}</a>' for lang, tag in LANGS.items())
    nav = f'<a href="{home_url(locale)}">{escape(tr("Home"))}</a><a href="{page_url(locale)}">{escape(tr("Compare the tools"))}</a>'
    nav += f'<a href="{("" if locale == "en" else "/" + locale)}/discovery/">{escape(tr("Free Discovery"))}</a>'
    nav += ''.join(f'<a href="{page_url(locale, s)}"' + (' aria-current="page"' if s == slug else '') + f'>{escape(TITLES[i])}</a>' for i, s in enumerate(SLUGS))
    cards = ''.join(f'<article class="card"><p class="eyebrow">0{i+1}</p><h3>{escape(TITLES[i])}</h3><p>{escape(tr(DESCRIPTIONS[i]))}</p><p class="muted">{escape(tr(EVIDENCE[i]))}</p><a class="button secondary" href="{page_url(locale, s)}">{escape(tr("Choose a tool"))}</a></article>' for i, s in enumerate(SLUGS))
    if index is not None:
        content = f'''<div class="columns"><section class="panel" aria-labelledby="form-h"><h2 id="form-h">{escape(tr('Evaluate one scenario'))}</h2><p class="muted">{escape(tr('Check only evidence you have verified. A checked box is a declaration, not independent verification.'))}</p><p class="muted">{escape(tr('Use fictional or redacted references. Amounts use a decimal point and one consistent currency.'))}</p><form id="lab" autocomplete="off">{controls(spec, tr)}<div class="actions"><button type="button" id="copy">{escape(tr('Copy summary'))}</button><button type="button" id="export">{escape(tr('Download JSON'))}</button><button class="secondary" type="reset">{escape(tr('Reset'))}</button></div></form><p id="notice" role="status" aria-live="polite"></p><noscript><p>{escape(tr('Enable JavaScript to use the interactive worksheet. The guidance and navigation remain available.'))}</p></noscript></section><aside class="panel" aria-labelledby="result-h" aria-live="polite"><h2 id="result-h">{escape(tr('Assessment'))}</h2><p id="score"></p><p id="status" class="hold">{escape(tr('HOLD - incomplete or invalid evidence'))}</p><ul id="findings"></ul><p id="extra" class="muted"></p><h3>{escape(tr('Evidence to prepare'))}</h3><p class="muted">{escape(tr(EVIDENCE[index]))}</p></aside></div><section class="notes"><h2>{escape(tr('Related tools'))}</h2><div class="cards">{cards}</div></section>'''
        script = f'<script defer src="/assets/satellite-suite/{locale}/{slug}.js"></script>'
    else:
        content = f'<section class="cards" aria-label="{escape(tr("Choose a tool"))}">{cards}</section>'
        script = ''
    return f'''<!doctype html>
<html lang="{LANGS[locale]}" data-zion-satellite-suite="{RELEASE}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{escape(description)}"><title>{escape(title)} | Zion Tech Group</title><link rel="canonical" href="{BASE + url}">{headlinks}<link rel="stylesheet" href="/assets/satellite-suite/style.css">{script}</head><body><a class="skip" href="#main">{escape(tr('Skip to the tool'))}</a><header><div class="wrap"><a class="brand" href="{home_url(locale)}">ZION / LABS</a><nav class="nav" aria-label="{escape(tr('App network'))}">{nav}</nav></div></header><main id="main" tabindex="-1"><p class="eyebrow">{escape(tr('Free browser tools'))}</p><h1>{escape(title)}</h1><p class="lead">{escape(description)}</p><p class="muted">{escape(tr('No account. No API keys. No automatic actions.'))}</p><nav class="languages" aria-label="{escape(tr('Language'))}">{language_links}</nav><p class="muted">{escape(tr('Changing language opens a fresh worksheet; copy or export your work first.'))}</p>{content}<section class="notes"><p>{escape(tr(PRIVACY))}</p><p class="muted">{escape(tr(LIMITS))}</p><div class="actions"><a class="button" href="{('' if locale == 'en' else '/' + locale)}/discovery/">{escape(tr('Free Discovery'))}</a><a class="button secondary" href="/contact/" hreflang="en">{escape(tr('Plan a scoped pilot'))}</a></div></section></main><footer><div class="wrap footer"><a href="{home_url(locale)}">{escape(tr('Home'))}</a> &middot; <a href="/privacy/" hreflang="en">{escape(tr('Privacy'))}</a><p>Zion Tech Group</p></div></footer></body></html>\n'''


def homepage_block(locale: str, copy: dict[str, str]) -> str:
    # Own only this section; all existing commercial/style/form/script bytes survive.
    tr = lambda key: copy[key]
    items = ''.join(f'<article><h3>{escape(TITLES[i])}</h3><p>{escape(tr(DESCRIPTIONS[i]))}</p><a href="{page_url(locale,s)}">{escape(tr("Choose a tool"))}</a></article>' for i,s in enumerate(SLUGS))
    return f'''<!--zion-satellite-home:start--><section id="zion-new-satellite-labs" lang="{LANGS[locale]}" data-zion-satellite-suite="{RELEASE}"><h2>{escape(tr('Three tools. One evidence-first workflow.'))}</h2><p>{escape(tr(PRIVACY))}</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:20px">{items}</div><p><a href="{page_url(locale)}">{escape(tr('Compare the tools'))}</a> &middot; <a href="{('' if locale=='en' else '/' + locale)}/discovery/">{escape(tr('Free Discovery'))}</a></p></section><!--zion-satellite-home:end-->'''


def insert_home(original: str, locale: str, copy: dict[str, str]) -> str:
    if re.search(r'http-equiv\s*=\s*[\"\']?refresh', original, re.I):
        raise ValueError('Redirect cannot serve as a translated homepage')
    lang = re.search(r'<html\b[^>]*\blang=[\"\']([^\"\']+)', original, re.I)
    if not lang or lang[1].lower().split('-')[0] != locale:
        raise ValueError('Homepage locale mismatch: ' + locale)
    if original.count('<!--zion-satellite-home:start-->') != original.count('<!--zion-satellite-home:end-->'):
        raise ValueError('Unpaired homepage ownership markers')
    block = homepage_block(locale, copy)
    owned = re.compile(r'<!--zion-satellite-home:start-->[\s\S]*?<!--zion-satellite-home:end-->')
    matches = list(owned.finditer(original))
    if len(matches) > 1: raise ValueError('Duplicate homepage ownership')
    if matches: return original[:matches[0].start()] + block + original[matches[0].end():]
    # Upgrade only the section previously written by this PR, not another owner's cards.
    prior = list(re.finditer(r'<section\b[^>]*\bid=[\"\']zion-new-satellite-labs[\"\'][^>]*>[\s\S]*?</section>', original, re.I))
    if len(prior) > 1: raise ValueError('Duplicate old suite section')
    if prior:
        if re.search(r'<section\b', prior[0][0][8:], re.I): raise ValueError('Unexpected nested section')
        return original[:prior[0].start()] + block + original[prior[0].end():]
    anchors = list(re.finditer(r'</main\s*>', original, re.I))
    if not anchors: anchors = list(re.finditer(r'<footer\b', original, re.I))
    if len(anchors) != 1: raise ValueError('Ambiguous homepage insertion point')
    pos = anchors[0].start()
    return original[:pos] + block + original[pos:]


def safe_path(root: Path, relative: str) -> Path:
    candidate = root / relative
    if '..' in Path(relative).parts or Path(relative).is_absolute(): raise ValueError('Escaping output path')
    if not candidate.resolve().is_relative_to(root.resolve()): raise ValueError('Output escapes artifact')
    for item in [candidate, *candidate.parents]:
        if item == root.parent: break
        if item.is_symlink(): raise ValueError('Symlink output refused: ' + str(item))
    return candidate


def build(source: Path, output: Path, copyfile: Path, homes: bool = True) -> dict[str, Any]:
    source, output = source.resolve(), output.absolute()
    if source == output.resolve(): raise ValueError('Source must not be overwritten')
    if output.is_symlink(): raise ValueError('Symlink artifact refused')
    translations = load_copy(copyfile)
    sources, specs, hashes = [], [], {}
    for i, slug in enumerate(SLUGS):
        src = safe_path(source, slug + '/app.js').read_bytes()
        if blob_sha(src) != PINNED[i]: raise ValueError('Unreviewed runtime changed: ' + slug)
        sources.append(src.decode('utf-8')); specs.append(model(sources[-1], i)); hashes[slug] = PINNED[i]
    writes: dict[str, bytes] = {'assets/satellite-suite/style.css': CSS.encode()}
    manifest: dict[str, Any] = {'release': RELEASE, 'sourceGitBlobs': hashes, 'pages': [], 'homepages': [], 'scope': 'three tools, five locales; not whole-network coverage', 'liveVerified': False}
    for locale, copy in translations.items():
        for index in [None, 0, 1, 2]:
            url = page_url(locale, None if index is None else SLUGS[index])
            relative = url.lstrip('/') + ('index.html' if url.endswith('/') else '')
            data = page(locale, index, None if index is None else specs[index], copy).encode()
            target = safe_path(output, relative)
            if target.exists():
                old = target.read_bytes()
                own = RELEASE.encode() in old
                sourcepath = safe_path(source, relative)
                original_tool = locale == 'en' and index is not None and sourcepath.exists() and old == sourcepath.read_bytes()
                if not own and not original_tool: raise ValueError('Unowned route collision: ' + relative)
            writes[relative] = data
            manifest['pages'].append({'url': url, 'language': LANGS[locale], 'sha256': hashlib.sha256(data).hexdigest()})
            if index is not None:
                js = compile_runtime(sources[index], locale, copy).encode()
                writes[f'assets/satellite-suite/{locale}/{SLUGS[index]}.js'] = js
    if homes:
        for locale, copy in translations.items():
            relative = 'index.html' if locale == 'pt' else locale + '/index.html'
            f = safe_path(output, relative)
            if not f.is_file(): raise ValueError('Missing artifact homepage: ' + relative)
            old = f.read_bytes()
            new = insert_home(old.decode('utf-8'), locale, copy).encode()
            writes[relative] = new
            manifest['homepages'].append({'url': home_url(locale), 'beforeSha256': hashlib.sha256(old).hexdigest(), 'afterSha256': hashlib.sha256(new).hexdigest()})
    # Validate every destination and marker before writes, including manifest collision.
    mrel = 'apps/satellite-suite-publication.json'
    mf = safe_path(output, mrel)
    if mf.exists() and json.loads(mf.read_text()).get('release') != RELEASE: raise ValueError('Unowned manifest collision')
    for rel in writes: safe_path(output, rel)
    # Exclude volatile generation timestamps and pre-edit hashes from the durable manifest.
    for h in manifest['homepages']: h.pop('beforeSha256', None)
    manifest['generatedFiles'] = len(writes) + 1
    writes[mrel] = (json.dumps(manifest, ensure_ascii=True, indent=2) + '\n').encode()
    for rel, data in writes.items():
        p = safe_path(output, rel); p.parent.mkdir(parents=True, exist_ok=True); p.write_bytes(data)
    return manifest


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=Path('public'))
    parser.add_argument('--out', type=Path, required=True)
    parser.add_argument('--copy', type=Path, default=Path('content/satellite-suite-locales.json'))
    parser.add_argument('--without-homepages', action='store_true', help='isolated review output only')
    args = parser.parse_args()
    m = build(args.source, args.out, args.copy, not args.without_homepages)
    print(json.dumps({'release': RELEASE, 'pages': len(m['pages']), 'homepages': len(m['homepages']), 'generatedFiles': m['generatedFiles'], 'liveVerified': False}))
