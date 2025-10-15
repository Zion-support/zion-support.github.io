#!/usr/bin/env python3
"""
Script to fix the App.tsx import statements.
"""

import re

def fix_app_imports():
    """Fix the App.tsx file by converting broken import statements to proper React.lazy imports."""
    
    with open('/workspace/App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match broken import statements
    pattern = r" import\('([^']+)'\)\);"
    
    def replace_import(match):
        path = match.group(1)
        # Extract the component name from the path
        component_name = path.split('/')[-2].replace('-', ' ').title().replace(' ', '') + 'Page'
        return f"const {component_name} = React.lazy(() => import('{path}'));"
    
    # Replace all broken import statements
    new_content = re.sub(pattern, replace_import, content)
    
    with open('/workspace/App.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Fixed App.tsx import statements")

if __name__ == "__main__":
    fix_app_imports()