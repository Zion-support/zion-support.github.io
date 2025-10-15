#!/usr/bin/env python3
"""
Script to fix all malformed Route elements in App.tsx
"""
import re

def fix_all_routes():
    """Fix all malformed Route elements in App.tsx"""
    with open('/workspace/app/App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix malformed Route elements - missing angle brackets
    content = re.sub(r'element={([A-Za-z]+)Page />}', r'element={<\1Page />}', content)
    
    # Fix malformed Route elements - missing closing tag
    content = re.sub(r'element={<([A-Za-z]+)Page />}\s*$', r'element={<\1Page />} />', content, flags=re.MULTILINE)
    
    # Remove duplicate routes
    lines = content.split('\n')
    seen_routes = set()
    fixed_lines = []
    
    for line in lines:
        if '<Route path=' in line:
            # Extract the path
            path_match = re.search(r'path="([^"]+)"', line)
            if path_match:
                path = path_match.group(1)
                if path not in seen_routes:
                    seen_routes.add(path)
                    fixed_lines.append(line)
                else:
                    print(f"Removing duplicate route: {path}")
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    with open('/workspace/app/App.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed all routes in App.tsx")

if __name__ == "__main__":
    fix_all_routes()