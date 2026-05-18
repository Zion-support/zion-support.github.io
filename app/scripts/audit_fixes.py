"""Audit and fix: broken links, build errors, favicons, ProposalPDF."""
import subprocess, os, re

app_dir = '/Users/klebergarciaalcatrao/app'
project = '/Users/klebergarciaalcatrao'

# ── 1. Install react-hot-toast ──────────────────────────────────────
print("=== 1. Install missing npm deps ===")
r = subprocess.run(['npm', 'install', 'react-hot-toast', '--ignore-scripts'], 
                   capture_output=True, text=True, cwd=project, timeout=60)
print(f"  react-hot-toast: {'OK' if r.returncode == 0 else 'FAIL'}")

# ── 2. Fix ProposalPDF import ───────────────────────────────────────
print("\n=== 2. Find ProposalPDF references ===")
r = subprocess.run(['grep', '-rn', 'ProposalPDF', app_dir], capture_output=True, text=True)
refs = r.stdout.strip().split('\n')
for ref in refs:
    print(f"  {ref}")

# The route imports from '@/components/ProposalPDF' — does that file exist?
pdf_paths = [
    os.path.join(app_dir, 'components', 'ProposalPDF.tsx'),
    os.path.join(app_dir, 'components', 'ProposalPDF.ts'),
]
for p in pdf_paths:
    print(f"  {p}: {'EXISTS' if os.path.exists(p) else 'MISSING'}")

# ── 3. Favicon references ──────────────────────────────────────────
print("\n=== 3. Favicon files ===")
# The build references /favicon-16x16.png etc.
# Check if these exist in /public or /app
fav_files = ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-180x180.png']
for loc in [os.path.join(project, 'public'), app_dir, os.path.join(app_dir, 'favicon')]:
    if os.path.exists(loc):
        print(f"  {loc}:")
        for f in os.listdir(loc):
            if 'favicon' in f.lower():
                print(f"    ✓ {f}")

# ── 4. Missing /ai-lab/autonomous-api-monitoring page ───────────────
print("\n=== 4. ai-lab page audit ===")
mon_path = os.path.join(app_dir, 'ai-lab', 'autonomous-api-monitoring', 'page.tsx')
print(f"  autonomous-api-monitoring exists: {os.path.exists(mon_path)}")

# find all ai-lab pages and links pointing to ai-lab/*
r = subprocess.run(['grep', '-rn', '/ai-lab/', app_dir], capture_output=True, text=True)
ai_lab_links = set()
for line in r.stdout.split('\n'):
    m = re.search(r'/ai-lab/[^\s"\'\)>]+', line)
    if m:
        ai_lab_links.add(m.group(0))
        
print(f"\n  ai-lab link targets ({len(ai_lab_links)} unique):")
missing_ai_lab = []
for href in sorted(ai_lab_links):
    dest = os.path.join(app_dir, href.lstrip('/'), 'page.tsx')
    exists = os.path.exists(dest)
    if not exists:
        missing_ai_lab.append(href)
    print(f"    {'✓' if exists else '✗'} {href}")
        
print(f"\n  Missing ai-lab pages: {len(missing_ai_lab)}")
for href in missing_ai_lab:
    print(f"    ✗ {href}")
