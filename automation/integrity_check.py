import os
import sys

repo = "/Users/miami2/zion-support/zion-support.github.io"

paths_to_check = [
    # out/ files
    "out/public-roadmap/index.html",
    "out/status-page/index.html",
    "out/use-cases/index.html",
    "out/free-consultation/index.html",
    "out/tools/phishing-analyzer/index.html",
    "out/docs/industries/financial-services/index.html",
    # docs/ files
    "docs/public-roadmap/index.html",
    "docs/status-page/index.html",
    "docs/use-cases/index.html",
    "docs/free-consultation/index.html",
    "docs/tools/phishing-analyzer/index.html",
    "docs/industries/financial-services/index.html",
]

print("=== FILE EXISTENCE CHECK ===")
for rel in paths_to_check:
    full = os.path.join(repo, rel)
    if os.path.isfile(full):
        size = os.path.getsize(full)
        print(f"OK   {rel} ({size}B)")
    else:
        print(f"MISS {rel}")

# Check for conflict markers in phishing-analyzer files
print("\n=== CONFLICT MARKER CHECK ===")
for rel in ["public/tools/phishing-analyzer/index.html",
            "docs/tools/phishing-analyzer/index.html",
            "out/tools/phishing-analyzer/index.html"]:
    full = os.path.join(repo, rel)
    if os.path.isfile(full):
        with open(full) as f:
            content = f.read()
        has_markers = any(m in content for m in ["<<<<<<<", "=======", ">>>>>>>"])
        print(f"{'CONFLICT' if has_markers else 'CLEAN'} {rel} ({len(content)}B)")
    else:
        print(f"MISS {rel}")

# Check canonical URLs in key files
print("\n=== CANONICAL URL CHECK ===")
canonical_checks = [
    "public/public-roadmap/index.html",
    "docs/public-roadmap/index.html",
    "out/public-roadmap/index.html",
]
for rel in canonical_checks:
    full = os.path.join(repo, rel)
    if os.path.isfile(full):
        with open(full) as f:
            content = f.read()
        import re
        matches = re.findall(r'<link rel="canonical" href="([^"]+)"', content)
        if matches:
            for m in matches:
                issue = "OK" if m.startswith("https://ziontechgroup.com") else "WRONG"
                print(f"{issue} {rel}: {m}")
        else:
            print(f"NO CANONICAL {rel}")
    else:
        print(f"MISS {rel} (no canonical check)")
