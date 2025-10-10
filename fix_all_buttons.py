#!/usr/bin/env python3
"""
Script to fix all button syntax errors in Navigation.tsx
"""
import re

def fix_buttons():
    with open('app/components/Navigation.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix all button semicolon issues
    content = re.sub(r'<button;', '<button', content)
    
    # Fix all Link semicolon issues
    content = re.sub(r'onClick=\{closeAllMenus\};\s*>', 'onClick={closeAllMenus}\n                      >', content)
    
    # Fix service.icon syntax
    content = re.sub(r'<service \.icon', '<service.icon', content)
    
    # Fix closing parenthesis and semicolon
    content = re.sub(r'\)\)\};', '))}', content)
    
    # Fix any remaining semicolon issues before >
    content = re.sub(r';\s*>', '\n                      >', content)
    
    with open('app/components/Navigation.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_buttons()