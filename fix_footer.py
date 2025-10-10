#!/usr/bin/env python3
"""
Script to fix Footer.tsx syntax errors
"""
import re

def fix_footer():
    with open('app/components/Footer.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix array syntax issues
    content = re.sub(r'const (\w+) = \[\s*\];\s*', r'const \1 = [\n', content)
    content = re.sub(r'(\s*\{[^}]*\})\s*;\s*\]', r'\1\n];', content)
    
    # Fix function declaration
    content = re.sub(r'const (\w+): React\.FC = memo\(\(\) => \{\s*;', r'const \1: React.FC = memo(() => {\n', content)
    
    # Fix missing closing brackets
    content = re.sub(r'(\s*\{[^}]*\})\s*;\s*$', r'\1\n', content, flags=re.MULTILINE)
    
    with open('app/components/Footer.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_footer()