#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep both versions where possible
        # Pattern 1: Simple conflicts with two versions
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        def replace_conflict(match):
            head_content = match.group(1).strip()
            other_content = match.group(2).strip()
            
            # If both are similar, merge them
            if head_content and other_content:
                # For imports, combine them
                if 'import' in head_content and 'import' in other_content:
                    # Extract unique imports
                    head_imports = re.findall(r'import[^;]+;?', head_content)
                    other_imports = re.findall(r'import[^;]+;?', other_content)
                    all_imports = list(set(head_imports + other_imports))
                    return '\n'.join(all_imports)
                # For arrays/objects, merge them
                elif ('[' in head_content and ']' in head_content) or ('{' in head_content and '}' in head_content):
                    # Try to merge arrays/objects
                    try:
                        # Simple merge - keep both if they're different
                        if head_content != other_content:
                            return head_content + ',\n' + other_content
                        else:
                            return head_content
                    except:
                        return head_content
                else:
                    # Default: keep HEAD version
                    return head_content
            elif head_content:
                return head_content
            else:
                return other_content
        
        # Apply pattern 1
        content = re.sub(pattern1, replace_conflict, content, flags=re.DOTALL)
        
        # Pattern 2: Simple conflicts with just HEAD
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n\n>>>>>>> [^\n]+'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: Simple conflicts with just other branch
        pattern3 = r'<<<<<<< HEAD\n\n=======\n(.*?)\n>>>>>>> [^\n]+'
        content = re.sub(pattern3, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.css',
        '**/*.json'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', '.next', 'out', '__pycache__'
    ])]
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
            except:
                pass
    
    print(f"\nFixed {fixed_count} out of {total_conflicts} files with merge conflicts")

if __name__ == "__main__":
    main()