#!/usr/bin/env python3
import re

def fix_navigation_links():
    """Fix all href attributes to to attributes in Navigation.tsx"""
    file_path = '/workspace/app/components/Navigation.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all href="/..." with to="/..."
    content = re.sub(r'href="(/[^"]*)"', r'to="\1"', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed all href attributes to to attributes in Navigation.tsx")

if __name__ == "__main__":
    fix_navigation_links()