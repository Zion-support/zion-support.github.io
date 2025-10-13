#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the most complete version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the first complete version
        # This is a simple approach - keep everything before the first conflict marker
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                conflict_depth -= 1
                if conflict_depth == 0:
                    in_conflict = False
                continue
            elif not in_conflict:
                new_lines.append(line)
        
        # If we still have conflicts, try a more aggressive approach
        if '<<<<<<< HEAD' in '\n'.join(new_lines):
            # Keep only the first section before any conflict markers
            content = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
            content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
            new_lines = content.split('\n')
        
        # Clean up any remaining artifacts
        final_content = '\n'.join(new_lines)
        final_content = re.sub(r'\n\s*\n\s*\n', '\n\n', final_content)  # Remove excessive newlines
        final_content = final_content.strip() + '\n'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
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
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f and 'build' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()