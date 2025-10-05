#!/usr/bin/env python3
import os
import re

def fix_lucide_imports_targeted(file_path):
    """Fix lucide-react import statements to use the correct syntax."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match incorrect lucide-react imports
        # Match: import IconName from 'lucide-react';
        pattern = r"import\s+(\w+)\s+from\s*['\"]lucide-react['\"];"
        
        def replace_imports(match):
            icon_name = match.group(1)
            # Use the correct import syntax for lucide-react
            return f"import {{ {icon_name} }} from 'lucide-react';"
        
        # Replace the imports
        new_content = re.sub(pattern, replace_imports, content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed lucide imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files in the entire workspace
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                tsx_files.append(file_path)
    
    print(f"Processing {len(tsx_files)} TSX files")
    
    fixed_count = 0
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Look for the specific pattern: import IconName from 'lucide-react';
                if re.search(r"import\s+\w+\s+from\s*['\"]lucide-react['\"];", content):
                    if fix_lucide_imports_targeted(file_path):
                        fixed_count += 1
        except:
            continue
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()