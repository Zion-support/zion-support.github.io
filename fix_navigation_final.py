#!/usr/bin/env python3
"""
Final script to fix Navigation.tsx syntax errors
"""
import re

def fix_navigation():
    with open('app/components/Navigation.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix semicolon after onClick
    content = re.sub(r'onClick=\{closeAllMenus\};\>', 'onClick={closeAllMenus}\n                      >', content)
    
    # Fix service.icon syntax
    content = re.sub(r'<service \.icon', '<service.icon', content)
    
    # Fix closing parenthesis and semicolon
    content = re.sub(r'\)\)\};', '))}', content)
    
    # Fix any remaining semicolon issues
    content = re.sub(r';\s*>', '\n                      >', content)
    
    with open('app/components/Navigation.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_navigation()