#!/usr/bin/env python3
"""
Script to fix EnhancedAccessibility.tsx semicolon issues
"""
import re

def fix_enhanced_accessibility():
    with open('app/components/EnhancedAccessibility.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix all semicolons in className attributes
    content = re.sub(r'className=\{`[^`]*`\}\};', lambda m: m.group(0).replace('};', '}'), content)
    
    # Fix all semicolons in onClick attributes
    content = re.sub(r'onClick=\{\([^}]*\)\};', lambda m: m.group(0).replace('};', '}'), content)
    
    # Fix all semicolons in other JSX attributes
    content = re.sub(r'(\w+)=\{[^}]*\}\};', lambda m: m.group(0).replace('};', '}'), content)
    
    # Fix semicolons before closing JSX tags
    content = re.sub(r';\s*>', '\n                >', content)
    
    # Fix indentation issues
    content = re.sub(r'                  className=', '                className=', content)
    content = re.sub(r'                  onClick=', '                onClick=', content)
    content = re.sub(r'                  aria-label=', '                aria-label=', content)
    
    with open('app/components/EnhancedAccessibility.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_enhanced_accessibility()