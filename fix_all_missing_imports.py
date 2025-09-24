#!/usr/bin/env python3

import re
import os

def fix_missing_imports():
    app_file = '/workspace/App.tsx'
    
    # Read the file
    with open(app_file, 'r') as f:
        content = f.read()
    
    # Find all import statements
    import_pattern = r"import\s+[^;]+from\s+['\"]([^'\"]+)['\"];"
    imports = re.findall(import_pattern, content)
    
    # Check which imports are missing
    missing_imports = []
    for import_path in imports:
        full_path = f"/workspace/{import_path}"
        if not os.path.exists(full_path):
            missing_imports.append(import_path)
            print(f"Missing: {full_path}")
    
    # Remove missing imports
    for missing in missing_imports:
        # Remove the import line
        pattern = rf"import\s+[^;]+from\s+['\"]{re.escape(missing)}['\"];"
        content = re.sub(pattern, '', content)
        
        # Remove the component usage in JSX
        component_name = missing.split('/')[-1].replace('.tsx', '').replace('.jsx', '')
        # Remove route
        route_pattern = rf'<Route\s+path="[^"]*{re.escape(component_name)}[^"]*"\s+element=\{{<{re.escape(component_name)}\s*/>\}}\s*/>'
        content = re.sub(route_pattern, '', content)
        
        # Remove links
        link_pattern = rf'href="[^"]*{re.escape(component_name)}[^"]*"'
        content = re.sub(link_pattern, 'href="#"', content)
    
    # Write back the file
    with open(app_file, 'w') as f:
        f.write(content)
    
    print(f"Fixed {len(missing_imports)} missing imports")

if __name__ == "__main__":
    fix_missing_imports()