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
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Keep the newer version (after =======)
            new_content = parts[0]
            for i in range(1, len(parts), 2):
                if i + 1 < len(parts):
                    new_content += parts[i + 1]  # Keep the newer version
                else:
                    new_content += parts[i]
            
            # Clean up any remaining merge conflict markers
            new_content = re.sub(r'<<<<<<< HEAD.*?\n', '', new_content, flags=re.DOTALL)
            new_content = re.sub(r'=======.*?\n', '', new_content, flags=re.DOTALL)
            new_content = re.sub(r'>>>>>>>.*?\n', '', new_content, flags=re.DOTALL)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            return True
        else:
            # If we can't parse properly, try a simpler approach
            lines = content.split('\n')
            new_lines = []
            skip_until = None
            
            for line in lines:
                if line.startswith('<<<<<<< HEAD'):
                    skip_until = '======='
                    continue
                elif line.startswith('======='):
                    skip_until = '>>>>>>>'
                    continue
                elif line.startswith('>>>>>>>'):
                    skip_until = None
                    continue
                elif skip_until == '=======':
                    continue  # Skip the old version
                elif skip_until == '>>>>>>>':
                    new_lines.append(line)  # Keep the new version
                else:
                    new_lines.append(line)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            
            return True
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()