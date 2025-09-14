#!/usr/bin/env python3

import re
import sys

def fix_duplicate_imports(file_path):
    """Fix duplicate imports in a file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    seen_imports = set()
    cleaned_lines = []
    
    for line in lines:
        # Check if this is an import line
        import_match = re.match(r'^import\s+(\w+)\s+from', line.strip())
        if import_match:
            import_name = import_match.group(1)
            if import_name in seen_imports:
                print(f"Removing duplicate import: {import_name}")
                continue
            seen_imports.add(import_name)
        
        cleaned_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(cleaned_lines))
    
    print(f"Fixed duplicate imports in {file_path}")

if __name__ == "__main__":
    fix_duplicate_imports('/workspace/app/page.tsx')