#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the correct version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts

        if '' not in content and '>>>>>>>' not in content:

        if '' not in content:

            return False
        
        # Pattern to match merge conflicts
        pattern = r'.*?(.*?)>>>>>>> cursor/fix-errors-and-merge-to-main-e61d'
        

        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        content = re.sub(r'\n?', '', content)
        content = re.sub(r'
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True

        # Find all merge conflicts and replace with the correct version
        matches = re.findall(pattern, content, re.DOTALL)
        if matches:
            # Replace all merge conflicts with the correct version (after )
            fixed_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
            
            # Clean up any remaining conflict markers
            fixed_content = re.sub(r'.*?', '', fixed_content, flags=re.DOTALL)
            fixed_content = re.sub(r'>>>>>>> cursor/fix-errors-and-merge-to-main-e61d', '', fixed_content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed: {file_path}")
            return True
        return False

    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed {fixed_count} files with merge conflicts")

if __name__ == "__main__":
    main()