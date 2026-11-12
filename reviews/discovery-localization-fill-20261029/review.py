#!/usr/bin/env python3
"""Offline review candidate. Default is read-only; never commits, deploys or sends."""
import argparse, hashlib, json
from pathlib import Path
from html.parser import HTMLParser

def blob(data):
    return hashlib.sha1(b"blob " + str(len(data)).encode() + b"\0" + data).hexdigest()

class Structure(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tokens=[]
    def handle_starttag(self, tag, attrs):
        values=dict(attrs)
        attrs=[(k,v) for k,v in attrs if not (tag=="nav" and k=="aria-label") and not (tag=="meta" and values.get("name")=="description" and k=="content")]
        self.tokens.append(("start",tag,attrs))
    def handle_endtag(self, tag):
        self.tokens.append(("end",tag))

def structure(text):
    parser=Structure();parser.feed(text);parser.close();return parser.tokens

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root",type=Path,required=True)
    parser.add_argument("--apply",action="store_true",help="Write only the five locally reviewed files after all preconditions pass")
    args=parser.parse_args()
    root=args.root.resolve()
    spec=json.loads(Path(__file__).with_name("replacements.json").read_text(encoding="utf-8"))
    expected_paths={"public/index.html"}|{f"public/{loc}/discovery/index.html" for loc in ("pt","es","fr","de")}
    if set(spec["expected"])!=expected_paths or set(spec["replacements"])!=expected_paths:
        raise SystemExit("Unexpected scope")
    pending=[]
    for name in sorted(expected_paths):
        path=(root/name).resolve()
        if root not in path.parents:raise SystemExit("Unsafe path")
        old=path.read_bytes();before,after=spec["expected"][name]
        if blob(old)==after:
            print("ALREADY_CURRENT",name);continue
        if blob(old)!=before:raise SystemExit("Source drift: "+name)
        text=old.decode("utf-8");new=text
        for left,right in spec["replacements"][name]:
            if new.count(left)!=1:raise SystemExit("Non-unique anchor: "+name)
            new=new.replace(left,right,1)
        if structure(text)!=structure(new):raise SystemExit("Unexpected structural change: "+name)
        data=new.encode("utf-8")
        if blob(data)!=after:raise SystemExit("Candidate digest mismatch: "+name)
        pending.append((path,data));print("CHECKED",name,len(spec["replacements"][name]))
    if args.apply:
        for path,data in pending:path.write_bytes(data)
        print("LOCAL_FILES_WRITTEN",len(pending))
    else:print("READ_ONLY_CHECK",len(pending),"candidate files")

if __name__=="__main__":main()
