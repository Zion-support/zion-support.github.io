#!/usr/bin/env python3
import os
import re

def fix_lucide_imports(file_path):
    """Fix lucide-react import statements to use the correct syntax."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all individual lucide-react imports
        individual_imports = []
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i].strip()
            
            # Check if this is an individual lucide-react import
            if re.match(r"import\s+(\w+)\s+from\s*['\"]lucide-react['\"];", line):
                match = re.match(r"import\s+(\w+)\s+from\s*['\"]lucide-react['\"];", line)
                if match:
                    individual_imports.append(match.group(1))
                # Skip this line (we'll add the combined import later)
                i += 1
            else:
                new_lines.append(lines[i])
                i += 1
        
        # If we found individual imports, replace them with a single combined import
        if individual_imports:
            # Remove duplicates while preserving order
            unique_imports = []
            for imp in individual_imports:
                if imp not in unique_imports:
                    unique_imports.append(imp)
            
            # Create the combined import
            combined_import = f"import {{ {', '.join(unique_imports)} }} from 'lucide-react';"
            
            # Find the first import line and replace the section
            new_content = '\n'.join(new_lines)
            
            # Find where to insert the import (after the first import)
            first_import_index = -1
            for i, line in enumerate(new_lines):
                if line.strip().startswith('import ') and 'lucide-react' not in line:
                    first_import_index = i
                    break
            
            if first_import_index >= 0:
                new_lines.insert(first_import_index + 1, combined_import)
            else:
                # If no other imports found, add at the beginning
                new_lines.insert(0, combined_import)
            
            new_content = '\n'.join(new_lines)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed lucide imports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files in the app directory specifically
    tsx_files = []
    for root, dirs, files in os.walk('/workspace/app'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                tsx_files.append(file_path)
    
    print(f"Processing {len(tsx_files)} TSX files in app directory")
    
    fixed_count = 0
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if "from 'lucide-react'" in content:
                    if fix_lucide_imports(file_path):
                        fixed_count += 1
        except:
            continue
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()