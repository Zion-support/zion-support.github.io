#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to fix lucide-react import issues by using the correct named import syntax.
"""

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
import os
import re
import glob

<<<<<<< HEAD
def fix_lucide_imports_in_file(file_path):
    """Fix lucide-react imports in a single file."""
=======
def fix_lucide_imports_final(file_path):
    """Fix lucide-react imports to use non-Icon versions"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        original_content = content
        
        # Pattern to match individual lucide-react imports that should be named imports
        individual_pattern = r'import\s+(\w+)\s+from\s+[\'"]lucide-react[\'"];'
        
        # Collect all individual imports
        individual_imports = re.findall(individual_pattern, content)
        
        if individual_imports:
            # Remove all individual imports
            content = re.sub(individual_pattern + r'\s*\n?', '', content)
            
            # Create a single named import
            unique_imports = sorted(set(individual_imports))
            named_import = f"import {{ {', '.join(unique_imports)} }} from 'lucide-react';"
            
            # Add the import after the first import statement or at the top
            import_pattern = r'(import\s+[^;]+;)\s*\n'
            if re.search(import_pattern, content):
                content = re.sub(import_pattern, r'\1\n' + named_import + '\n', content, count=1)
            else:
                content = named_import + '\n\n' + content
        
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
        # Check if file has lucide-react imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Pattern to match individual imports from lucide-react
        import_pattern = r'import\s+(\w+)Icon\s+from\s+[\'"]lucide-react[\'"];'
        
        def replace_import(match):
            icon_name = match.group(1)
            # Remove Icon suffix and create individual default import
            return f"import {icon_name} from 'lucide-react';"
        
        # Replace the import statements
        new_content = re.sub(import_pattern, replace_import, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
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
    # Find all TSX files with lucide-react imports
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
        if fix_lucide_imports_final(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react imports")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react imports in {fixed_count} files")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17

if __name__ == "__main__":
    main()