#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to fix lucide-react import issues by converting from named imports to default imports.
"""

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
import os
import re
import glob

<<<<<<< HEAD
def fix_lucide_imports_in_file(file_path):
    """Fix lucide-react imports in a single file."""
=======
def fix_lucide_imports(file_path):
    """Fix lucide-react imports to use default imports instead of named imports"""
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        original_content = content
        
        # Pattern to match lucide-react named imports
        lucide_pattern = r'import\s+{\s*([^}]+)\s*}\s+from\s+[\'"]lucide-react[\'"]'
        
        def fix_lucide_import(match):
            imports = match.group(1).strip()
            # Split by comma and clean up
            import_list = [imp.strip() for imp in imports.split(',')]
            import_list = [imp for imp in import_list if imp]  # Remove empty strings
            
            # Convert to individual default imports
            result = []
            for imp in import_list:
                result.append(f"import {imp} from 'lucide-react';")
            
            return '\n'.join(result)
        
        # Replace lucide-react named imports
        content = re.sub(lucide_pattern, fix_lucide_import, content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed lucide imports in: {file_path}")
            return True
        else:
            return False
            
=======
        # Check if file has lucide-react named imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Pattern to match named imports from lucide-react
        pattern = r'import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]lucide-react[\'"]'
        
        def replace_import(match):
            imports = match.group(1).strip()
            # Split by comma and clean up
            icon_names = [name.strip() for name in imports.split(',')]
            # Create individual default imports
            import_lines = []
            for icon in icon_names:
                import_lines.append(f"import {icon} from 'lucide-react';")
            return '\n'.join(import_lines)
        
        # Replace the import statement
        new_content = re.sub(pattern, replace_import, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix lucide-react imports in all relevant files."""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_lucide_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed lucide imports in {fixed_count} files")
=======
    # Find all TSX files
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if 'from \'lucide-react\'' in content or 'from "lucide-react"' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with lucide-react imports")
    
    fixed_count = 0
    for file_path in tsx_files:
        print(f"Processing: {file_path}")
        if fix_lucide_imports(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react imports")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react imports in {fixed_count} files")
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d

if __name__ == "__main__":
    main()