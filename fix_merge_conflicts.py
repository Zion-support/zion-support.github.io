#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to fix merge conflicts in TypeScript/JavaScript files by resolving import conflicts
and choosing the cleaner destructured import approach.
"""

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
import os
import re
import glob

<<<<<<< HEAD
def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
=======
def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a TypeScript/TSX file by resolving import conflicts"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        original_content = content
        
        # Pattern to match merge conflict blocks with imports
        conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_import_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # Look for import statements in both sides
            head_imports = re.findall(r'import\s+{([^}]+)}\s+from\s+[\'"]([^\'"]+)[\'"]', head_content)
            branch_imports = re.findall(r'import\s+([^{][^,\s]+)\s+from\s+[\'"]([^\'"]+)[\'"]', branch_content)
            
            # If we have destructured imports in HEAD, prefer those
            if head_imports:
                for imports, module in head_imports:
                    # Clean up the imports
                    clean_imports = re.sub(r'\s+', ' ', imports.strip())
                    return f"import {{ {clean_imports} }} from '{module}';"
            
            # If we have individual imports in branch, convert to destructured
            if branch_imports:
                # Group by module
                module_imports = {}
                for imp, module in branch_imports:
                    if module not in module_imports:
                        module_imports[module] = []
                    module_imports[module].append(imp.strip())
                
                result = []
                for module, imports in module_imports.items():
                    clean_imports = ', '.join(sorted(set(imports)))
                    result.append(f"import {{ {clean_imports} }} from '{module}';")
                
                return '\n'.join(result)
            
            # If no clear import pattern, return the HEAD content
            return head_content
        
        # Replace all merge conflicts
        content = re.sub(conflict_pattern, resolve_import_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Remove any remaining semicolons on their own lines
        content = re.sub(r'^\s*;\s*$', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match the merge conflict for imports
        # This matches the pattern where HEAD has a single import and the other branch has individual imports
        pattern = r'<<<<<<< HEAD\s*\n\s*import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*;\s*\n=======\s*\n(?:import\s+\w+\s+from\s+[\'"]lucide-react[\'"];\s*\n)*>>>>>>> [^\n]+\n'
        
        # More flexible pattern to catch various import conflict patterns
        pattern2 = r'<<<<<<< HEAD\s*\n\s*import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*;\s*\n=======\s*\n(?:import\s+\w+\s+from\s+[\'"]lucide-react[\'"];\s*\n)*>>>>>>> [^\n]+\n'
        
        # Even more flexible - just look for the import conflict pattern
        lines = content.split('\n')
        new_lines = []
        i = 0
        modified = False
        
        while i < len(lines):
            line = lines[i]
            
            # Check for merge conflict start
            if '<<<<<<< HEAD' in line:
                # Look for the import pattern in HEAD section
                head_lines = []
                j = i + 1
                while j < len(lines) and '=======' not in lines[j]:
                    head_lines.append(lines[j])
                    j += 1
                
                # Look for the import pattern in the other branch
                other_lines = []
                k = j + 1
                while k < len(lines) and '>>>>>>>' not in lines[k]:
                    other_lines.append(lines[k])
                    k += 1
                
                # Check if this is an import conflict
                head_content = '\n'.join(head_lines)
                if 'import {' in head_content and 'from \'lucide-react\'' in head_content:
                    # Extract the imports from HEAD section
                    import_match = re.search(r'import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]lucide-react[\'"]', head_content)
                    if import_match:
                        imports = import_match.group(1).strip()
                        # Clean up the imports (remove extra whitespace, newlines)
                        imports = re.sub(r'\s+', ' ', imports)
                        # Add the clean import
                        new_lines.append(f"import {{ {imports} }} from 'lucide-react';")
                        modified = True
                        i = k + 1
                        continue
                
                # If not an import conflict, keep the HEAD version
                new_lines.extend(head_lines)
                i = k + 1
                modified = True
            else:
                new_lines.append(line)
                i += 1
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            return True
        
        return False
        
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix merge conflicts in all relevant files."""
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
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
=======
    # Find all TSX files with merge conflicts
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in tsx_files:
        print(f"Processing: {file_path}")
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed merge conflicts")
        else:
            print(f"  - No changes needed or error occurred")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()