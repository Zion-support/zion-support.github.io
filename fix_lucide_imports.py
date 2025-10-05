#!/usr/bin/env python3
import os
import re
import glob

def fix_lucide_imports(file_path):
    """Fix lucide-react import statements to use the correct syntax."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match incorrect lucide-react imports
        # Match: import { Icon1, Icon2, Icon3 } from 'lucide-react';
        pattern = r"import\s*\{([^}]+)\}\s*from\s*['\"]lucide-react['\"];"
        
        def replace_imports(match):
            imports_str = match.group(1).strip()
            # Split by comma and clean up
            imports = [imp.strip() for imp in imports_str.split(',') if imp.strip()]
            
            if not imports:
                return ""
            
            # Create individual import statements
            individual_imports = []
            for imp in imports:
                individual_imports.append(f"import {imp} from 'lucide-react';")
            
            return '\n'.join(individual_imports)
        
        # Replace the imports
        new_content = re.sub(pattern, replace_imports, content)
        
        # Also fix any remaining merge conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> cursor/fix-errors-and-merge-to-main-ec39', '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining @ts-ignore comments that might be orphaned
        new_content = re.sub(r'\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*;\s*\n', '\n', new_content)
        
        # Clean up multiple empty lines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed lucide imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
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
                if "from 'lucide-react'" in content and "import {" in content:
                    if fix_lucide_imports(file_path):
                        fixed_count += 1
        except:
            continue
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()