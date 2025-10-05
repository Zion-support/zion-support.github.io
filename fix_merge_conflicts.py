#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a TypeScript/TSX file by resolving import conflicts"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
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
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
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
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()