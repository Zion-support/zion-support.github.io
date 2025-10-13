#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the content after the last =======
        # This is a simple approach that keeps the "main" branch content
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_sections = []
        current_section = []
        
        for line in lines:
            if line.startswith('<<<<<<< '):
                in_conflict = True
                current_section = []
            elif line.startswith('======='):
                if in_conflict:
                    conflict_sections.append(current_section)
                    current_section = []
            elif line.startswith('>>>>>>> '):
                if in_conflict:
                    conflict_sections.append(current_section)
                    # Keep the last section (usually the main branch)
                    if conflict_sections:
                        fixed_lines.extend(conflict_sections[-1])
                    in_conflict = False
                    conflict_sections = []
                    current_section = []
            else:
                if in_conflict:
                    current_section.append(line)
                else:
                    fixed_lines.append(line)
        
        # If we're still in a conflict at the end, add the current section
        if in_conflict and current_section:
            fixed_lines.extend(current_section)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for merge conflicts...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< ' in content or '=======' in content or '>>>>>>> ' in content:
                    print(f"Fixing merge conflicts in: {file_path}")
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
                    else:
                        print(f"Failed to fix: {file_path}")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files out of {total_count} total files.")

if __name__ == "__main__":
    main()