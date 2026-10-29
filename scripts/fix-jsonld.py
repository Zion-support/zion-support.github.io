#!/usr/bin/env python3
"""Fix JSON-LD in service pages - wrap raw objects in template literals."""
import os
import re
from pathlib import Path

pattern = re.compile(r'<script type="application/ld\+json">(\{[^{}]*\})</script>')

files_modified = 0
for page_file in Path('app/services').rglob('page.tsx'):
    content = page_file.read_text()
    if pattern.search(content):
        new_content = pattern.sub(r'<script type="application/ld+json">{\`\1\`}</script>', content)
        page_file.write_text(new_content)
        files_modified += 1

print(f"Fixed {files_modified} files with JSON-LD")