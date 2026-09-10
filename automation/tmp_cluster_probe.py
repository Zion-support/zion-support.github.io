import re, glob
HTML_TITLE_RE = re.compile(r"<(title|h1)[^>]*>(.*?)</\1>", re.DOTALL | re.IGNORECASE)
def strip_suffix(t): return re.sub(r"\s*\|\s*Zion Tech Group.*$","",t,flags=re.IGNORECASE).strip()
def exth(html):
    for tag,raw in HTML_TITLE_RE.findall(html):
        c=re.sub(r"<[^>]+>","",raw).strip()
        if c: return strip_suffix(c)
    return None
titles=set()
for f in glob.glob("**/index.html",recursive=True):
    try:
        t=exth(open(f,encoding="utf-8",errors="ignore").read())
        if t: titles.add(t.lower())
    except Exception: pass
for f in glob.glob("*.md"):
    if f in ("index.md","README.md","_index.md"): continue
    c=open(f,errors="ignore").read()
    m=re.search(r'^title:\s*"?([^"\n]+)"?',c,re.M)
    if m: titles.add(m.group(1).strip().lower())
print("total titles:",len(titles))
kw={
 "AI Automation & Agents":["ai agent","agentic","automation"],
 "Cybersecurity & Privacy":["secur","zero trust","compliance","privacy","sase","soc-","threat","identity"],
 "Cloud Migration & FinOps":["cloud","finops","cost","migration","serverless"],
 "Healthcare & Biotech":["healthcare","health-","medical","telemed","patient","healthtech","biotech","clinical"],
 "Brazilian Market (PT-BR)":["brasil","brazilian","latam","brasileir"],
 "SaaS & Startups":["saas","startup","revenue"],
 "DevOps & Engineering":["devops","cicd","kubernetes","mlops","engineering","engenharia","pipeline"],
 "Digital Transformation":["digital transformation","roi","change management","upskill","culture"],
}
for c,kws in kw.items():
    hits=[t for t in titles if any(k in t for k in kws)]
    print(f"{c:32s} covered={len(hits)>0} hits={len(hits)}")
