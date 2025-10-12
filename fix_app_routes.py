#!/usr/bin/env python3
"""
Script to fix malformed Route elements in App.tsx
"""
import re

def fix_app_routes():
    """Fix malformed Route elements in App.tsx"""
    with open('/workspace/app/App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix malformed Route elements
    # Pattern: </Route path="/path" element={<Component ><Route path="/next-path" element={<NextComponent >} />
    content = re.sub(r'</Route path="([^"]+)" element={<([^>]+) ><Route path="([^"]+)" element={<([^>]+) >} />', 
                     r'<Route path="\1" element={\2 />}\n                <Route path="\3" element={\4 />}', 
                     content)
    
    # Fix remaining malformed patterns
    content = re.sub(r'</Route path="([^"]+)" element={<([^>]+) >', r'<Route path="\1" element={\2 />}', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</Route path="[^"]+" element={<[^>]+ >', '', content)
    
    # Fix malformed JSX elements
    content = re.sub(r'<([A-Za-z]+) >', r'<\1 />', content)
    
    with open('/workspace/app/App.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed App.tsx routes")

if __name__ == "__main__":
    fix_app_routes()