#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the most recent version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the content after the last =======
        # This assumes the most recent version is after the last =======
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_depth -= 1
                continue
            elif not in_conflict:
                fixed_lines.append(line)
        
        # If we're still in a conflict at the end, just take everything
        if in_conflict:
            # Take the last section before any conflict markers
            content_before_conflicts = content.split('<<<<<<<')[0]
            if content_before_conflicts.strip():
                fixed_lines = content_before_conflicts.split('\n')
        
        fixed_content = '\n'.join(fixed_lines)
        
        # Clean up any remaining syntax issues
        fixed_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', fixed_content)  # Remove excessive newlines
        fixed_content = re.sub(r'import\s+.*?;\s*import', 'import', fixed_content)  # Fix duplicate imports
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out backup files and node_modules
    files_to_fix = [f for f in files_to_fix if not f.endswith('.original') and 'node_modules' not in f]
    
    print(f"Found {len(files_to_fix)} files to check for merge conflicts")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()