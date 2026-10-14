#!/usr/bin/env python3
"""Finalize five use-case maps in a local artifact; no network or deployment."""
import argparse
import hashlib
import html
from html.parser import HTMLParser
import importlib.util
import json
from pathlib import Path
import re
import tempfile
from urllib.parse import unquote, urljoin, urlsplit

SPEC = importlib.util.spec_from_file_location('use_case_maps',Path(__file__).with_name('render-use-case-map-locales.py'))
maps = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(maps)
RELEASE = 'use-case-map-home-links-2026-10-14-v1'
PROMO = {
 'en':('Choose the decision before the app.','Compare ten operational questions and follow related app links.'),
 'pt':('Escolha a decisão antes do app.','Compare dez questões operacionais e siga os links de apps relacionados.'),
 'es':('Elige la decisión antes de la aplicación.','Compara diez preguntas operativas y sigue los enlaces a aplicaciones relacionadas.'),
 'fr':('Choisissez la décision avant l’application.','Comparez dix questions opérationnelles et suivez les liens vers les applications connexes.'),
 'de':('Wählen Sie die Entscheidung vor der App.','Vergleichen Sie zehn betriebliche Fragen und folgen Sie verwandten App-Links.')}

class Document(HTMLParser):
    def __init__(self,text):
        super().__init__(convert_charrefs=True)
        self.links=[]; self.ids=[]; self.lang=None
        self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if 'id' in a:self.ids.append(a['id'])
        if tag=='html':self.lang=a.get('lang')

def home(locale):
    return '/en/' if locale=='en' else ('/' if locale=='pt' else '/'+locale+'/')

def relative_file(url):
    return url.lstrip('/')+('index.html' if url.endswith('/') else '')

def safe_path(root,relative):
    target=root/relative
    if not target.resolve().is_relative_to(root.resolve()):
        raise ValueError('Artifact path escapes root: '+relative)
    cursor=root
    for part in Path(relative).parts:
        cursor=cursor/part
        if cursor.is_symlink():raise ValueError('Artifact symlink alias forbidden: '+relative)
    return target

def protected(text):
    return re.findall(r'<(?:form|script)\b[\s\S]*?</(?:form|script)>',text,re.I)

def edit_home(text,locale):
    if Document(text).lang!=maps.LANGS[locale]:
        raise ValueError('Homepage language mismatch: '+locale)
    old = re.findall(r'<p data-use-case-map-promotion="[^"]*">[\s\S]*?</p>',text)
    if len(old)>1:raise ValueError('Duplicate owned use-case promotion: '+locale)
    stripped=re.sub(r'<p data-use-case-map-promotion="[^"]*">[\s\S]*?</p>','',text)
    endings=['</section><!--home-app-paths:end-->','</div></section><!--zion-network-home:end-->']
    chosen=next((token for token in endings if token in stripped),None)
    if chosen is None or stripped.count(chosen)!=1:
        raise ValueError('Expected one inspected homepage insertion slot: '+locale)
    title,label=PROMO[locale]
    fragment='<p data-use-case-map-promotion="'+RELEASE+'"><strong>'+html.escape(title)+'</strong> <a href="'+maps.route(locale)+'">'+html.escape(label)+'</a></p>'
    after=stripped.replace(chosen,fragment+chosen)
    if protected(after)!=protected(text):raise ValueError('Homepage forms/scripts changed')
    if not set(Document(text).links).issubset(set(Document(after).links)):
        raise ValueError('Existing homepage href removed')
    return after

def validate_links(root,candidates,map_names):
    errors=[]
    for name in map_names:
        text=candidates[name]; doc=Document(text)
        for href in doc.links:
            raw=urlsplit(href)
            if raw.scheme and raw.scheme not in ('https','http'):
                errors.append(name+': unsafe link scheme '+href);continue
            if href.startswith('//') or '..' in Path(unquote(raw.path)).parts:
                errors.append(name+': unsafe path '+href);continue
            target=urlsplit(urljoin('https://ziontechgroup.com/'+name,href))
            if target.hostname!='ziontechgroup.com':
                errors.append(name+': external destination needs separate review '+href);continue
            if target.scheme!='https':
                errors.append(name+': HTTPS required '+href);continue
            pathname=unquote(target.path)
            relative=relative_file(pathname)
            try:disk=safe_path(root,relative)
            except ValueError as exc:errors.append(str(exc));continue
            if relative in candidates:body=candidates[relative]
            elif disk.is_file():body=disk.read_text(encoding='utf-8')
            else:
                errors.append(name+': missing artifact target '+pathname);continue
            if target.fragment and unquote(target.fragment) not in Document(body).ids:
                errors.append(name+': missing target fragment '+href)
    if errors:raise ValueError('Artifact link validation failed:\n'+'\n'.join(sorted(set(errors))))

def finalize(source,root):
    if source.resolve().is_relative_to(root.resolve()):
        raise ValueError('Keep immutable input source outside artifact output')
    if not root.is_dir():raise ValueError('Artifact directory does not exist')
    with tempfile.TemporaryDirectory() as td:
        stage=Path(td)
        pages=maps.build(source,stage)
        candidates=dict(pages)
        for locale in maps.LANGS:
            name=relative_file(home(locale));path=safe_path(root,name)
            if not path.is_file():raise ValueError('Missing localized homepage '+name)
            candidates[name]=edit_home(path.read_text(encoding='utf-8'),locale)
        validate_links(root,candidates,list(pages))
        manifest=json.loads((stage/'apps/use-case-map-locales.json').read_text(encoding='utf-8'))
        manifest.update({'status':'OFFLINE_ARTIFACT_VALIDATED_NOT_LIVE','homepage_links':{k:home(k) for k in maps.LANGS},'release':RELEASE,'scope':'Five maps and five existing homepage contextual links; local target existence only, not app functionality or live HTTP certification','map_sha256':{name:hashlib.sha256(text.encode()).hexdigest() for name,text in pages.items()}})
        candidates['apps/use-case-map-locales.json']=json.dumps(manifest,ensure_ascii=False,indent=2)+'\n'
        for name in candidates:
            target=safe_path(root,name)
            if target.exists() and not target.is_file():
                raise ValueError('Artifact output is not a regular file: '+name)
        # Complete semantic preflight, including manifest, before artifact writes.
        # Filesystem I/O failure during writes is not a transactional rollback.
        for name,text in candidates.items():
            target=safe_path(root,name);target.parent.mkdir(parents=True,exist_ok=True)
            target.write_text(text,encoding='utf-8')
        return manifest

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',type=Path,default=Path('public/apps/app-network-use-case-map.html'))
    parser.add_argument('--out',type=Path,required=True)
    args=parser.parse_args()
    try:
        result=finalize(args.source,args.out)
    except (ValueError,OSError) as exc:
        parser.exit(1,'HOLD: '+str(exc)+'\n')
    print('PASS: five local map bodies and existing homepage links; not deployed')
