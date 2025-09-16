#!/usr/bin/env python3
import re

def fix_routes():
    """Fix broken routes in App.tsx"""
    app_file = '/workspace/App.tsx'
    
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all routes with empty element={}
    broken_routes = re.findall(r'<Route[^>]*element=\{\}[^>]*/>', content)
    
    for route in broken_routes:
        print(f"Removing broken route: {route}")
        content = content.replace(route + '\n', '')
        content = content.replace(route, '')
    
    # Write the updated content
    with open(app_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed {len(broken_routes)} broken routes")

if __name__ == "__main__":
    fix_routes()