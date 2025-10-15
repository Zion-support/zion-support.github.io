#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======\s*\n(.*?)>>>>>>> .*', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Keep the part after ======= (newer version)
            fixed_content = parts[0] + parts[2]
            
            # Clean up any remaining merge conflict markers
            fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> .*?\n', '', fixed_content, flags=re.DOTALL)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        else:
            # If the regex didn't work as expected, try a simpler approach
            lines = content.split('\n')
            fixed_lines = []
            skip_until_end = False
            
            for line in lines:
                if line.strip().startswith('<<<<<<< HEAD'):
                    skip_until_end = True
                    continue
                elif line.strip().startswith('======='):
                    skip_until_end = False
                    continue
                elif line.strip().startswith('>>>>>>>'):
                    skip_until_end = False
                    continue
                elif not skip_until_end:
                    fixed_lines.append(line)
            
            fixed_content = '\n'.join(fixed_lines)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to modify
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
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
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} out of {total_conflicts} files with merge conflicts")

if __name__ == "__main__":
    main()
