#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the enhanced version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the enhanced version
        # Pattern to match merge conflicts and keep the part after =======
        pattern = r'<<<<<<< HEAD.*?=======\s*\n(.*?)>>>>>>>.*?cursor/.*?'
        replacement = r'\1'
        
        # Apply the pattern
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Clean up any remaining merge markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======\s*\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>>.*?cursor/.*?\n', '', new_content, flags=re.DOTALL)
        
        # Remove duplicate imports
        lines = new_content.split('\n')
        seen_imports = set()
        cleaned_lines = []
        
        for line in lines:
            if line.strip().startswith('import ') and line.strip() in seen_imports:
                continue
            if line.strip().startswith('import '):
                seen_imports.add(line.strip())
            cleaned_lines.append(line)
        
        new_content = '\n'.join(cleaned_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    files_with_conflicts = []
    
    for root, dirs, files in os.walk('/workspace/app'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()