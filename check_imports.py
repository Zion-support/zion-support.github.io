#!/usr/bin/env python3
import os
import re
import sys

def check_imports():
    """Check which imports in App.tsx are missing and remove them"""
    app_file = '/workspace/App.tsx'
    
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all import statements
    import_pattern = r"import\s+(\w+)\s+from\s+['\"]([^'\"]+)['\"];"
    imports = re.findall(import_pattern, content)
    
    missing_imports = []
    
    for component_name, import_path in imports:
        if import_path.startswith('./src/'):
            # Check if the file exists
            full_path = f"/workspace/{import_path[2:]}"  # Remove './'
            
            # Check for .tsx, .ts, .jsx, .js extensions
            extensions = ['.tsx', '.ts', '.jsx', '.js']
            found = False
            
            for ext in extensions:
                if os.path.exists(full_path + ext):
                    found = True
                    break
            
            if not found:
                missing_imports.append((component_name, import_path))
                print(f"Missing: {component_name} from {import_path}")
    
    # Remove missing imports
    for component_name, import_path in missing_imports:
        # Remove the import line
        import_line = f"import {component_name} from '{import_path}';"
        content = content.replace(import_line + '\n', '')
        print(f"Removed import: {import_line}")
    
    # Write the updated content
    with open(app_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Found {len(missing_imports)} missing imports and removed them")

if __name__ == "__main__":
    check_imports()