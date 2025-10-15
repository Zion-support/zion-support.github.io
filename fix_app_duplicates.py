#!/usr/bin/env python3
"""
Script to fix duplicate declarations in App.tsx.
"""

import re

def fix_duplicates():
    """Fix duplicate declarations in App.tsx."""
    
    with open('/workspace/App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix duplicate const declarations
    pattern = r'const (\w+) = React\.lazy\(\(\) =>const \1 = React\.lazy\(\(\) => import\('
    replacement = r'const \1 = React.lazy(() => import('
    
    content = re.sub(pattern, replacement, content)
    
    with open('/workspace/App.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed duplicate declarations in App.tsx")

if __name__ == "__main__":
    fix_duplicates()