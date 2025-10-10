#!/usr/bin/env python3
<<<<<<< HEAD
=======
"""
<<<<<<< HEAD
Script to automatically resolve merge conflicts by keeping the newer version (after =======)
=======
Script to fix merge conflicts in the codebase
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
"""

>>>>>>> origin/main
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts and keep content between <<<<<<< HEAD and =======
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        replacement = r'\1\n'
        
        # First pass: remove conflicts keeping HEAD
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Second pass: remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
<<<<<<< HEAD
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            return False
        
        # Keep the newer version (after =======)
        new_content = parts[0]  # Content before first conflict
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                new_content += parts[i + 1]  # Content after =======
                if i + 3 < len(parts):
                    new_content += parts[i + 3]  # Content after >>>>>>>
>>>>>>> origin/main
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
=======
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
        
<<<<<<< HEAD
        print(f"Fixed merge conflicts in {file_path}")
=======
>>>>>>> origin/main
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_with_conflicts = []
    for file_path in files_to_fix:
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
=======
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
<<<<<<< HEAD
        '**/*.tsx',
        '**/*.ts'
    ]
    
    fixed_count = 0
=======
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
>>>>>>> origin/main
    
    files_fixed = 0
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
<<<<<<< HEAD
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")
=======
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")
>>>>>>> cursor/analyze-improve-and-deploy-application-975f

if __name__ == "__main__":
    main()
