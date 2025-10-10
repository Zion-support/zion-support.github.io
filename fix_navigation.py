#!/usr/bin/env python3
"""
Script to fix Navigation.tsx indentation and syntax issues
"""
import re

def fix_navigation():
    with open('app/components/Navigation.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix array indentation - all items should be indented with 4 spaces
    content = re.sub(r'^        \{', '    {', content, flags=re.MULTILINE)
    
    # Fix array closing brackets
    content = re.sub(r'^  \];', '  ];', content, flags=re.MULTILINE)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix function declarations
    content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', r'\1: React.FC = () => {', content)
    
    with open('app/components/Navigation.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_navigation()