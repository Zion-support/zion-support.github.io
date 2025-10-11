#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace conflicts with HEAD version
        fixed_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'^<<<<<<< .*?\n', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^=======.*?\n', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^>>>>>>> .*?\n', '', fixed_content, flags=re.MULTILINE)
        
        # Clean up multiple newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts in the app directory"""
    app_dir = "/workspace/app"
    
    # Find all TypeScript/TSX files with merge conflicts
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has merge conflicts
            if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                total_count += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} out of {total_count} files with merge conflicts")

if __name__ == "__main__":
    main()