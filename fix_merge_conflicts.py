#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/TSX files by keeping the newer version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    """Fix merge conflicts by keeping the newer version (after =======)"""
=======
    """Fix merge conflicts in a single file."""
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
    """Fix merge conflicts in a single file by choosing the HEAD version"""
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
=======
    """Fix merge conflicts in a single file"""
>>>>>>> cursor/website-audit-and-update-with-deployment-df24
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
<<<<<<< HEAD
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern to match from ======= to >>>>>>> (remove this part)
        pattern2 = r'=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
<<<<<<< HEAD
            f.write(fixed_content)
            
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbe3
=======
            f.write(content)
        
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
        print(f"Fixed merge conflicts in: {file_path}")
=======
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove all merge conflict markers and keep the content after =======
        # This keeps the newer version (after =======)
        lines = content.split('\n')
        new_lines = []
        skip_until_equals = False
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_equals = True
                continue
            elif line.strip() == '=======':
                skip_until_equals = False
                continue
            elif line.strip().startswith('>>>>>>> cursor'):
                skip_until_end = False
                continue
            elif skip_until_equals or skip_until_end:
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
>>>>>>> cursor/website-audit-and-update-with-deployment-df24
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    # Find all TypeScript/JavaScript files with merge conflicts
=======
    # Find all files with merge conflicts
>>>>>>> cursor/website-audit-and-update-with-deployment-3b6d
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
=======
    """Fix merge conflicts in all TSX files"""
    # Find all TSX files
    tsx_files = glob.glob('**/*.tsx', recursive=True)
>>>>>>> cursor/website-audit-and-update-with-deployment-df24
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()