#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix merge conflicts in the codebase
=======
Script to automatically resolve merge conflicts by keeping the HEAD version
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
"""
import os
import re
import glob

<<<<<<< HEAD
def fix_merge_conflicts(file_path):
<<<<<<< HEAD
    """Fix merge conflicts in a file by choosing the HEAD version"""
=======
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
=======
def fix_merge_conflict(file_path):
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
<<<<<<< HEAD
<<<<<<< HEAD
        # Split content by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
<<<<<<< HEAD
        for i, line in enumerate(lines):
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = False
                continue
            elif line.startswith('======='):
                skip_until_end = True
                continue
=======
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = True
                continue
            elif line.startswith('======='):
                continue
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
            elif line.startswith('>>>>>>> '):
                skip_until_end = False
                continue
            elif not skip_until_end:
=======
        # Remove merge conflict markers and keep the HEAD version
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip() == '>>>>>>> cursor/website-audit-and-update-with-deployment-4c61':
                in_conflict = False
                keep_head = True
                continue
            elif in_conflict and not keep_head:
                continue
            else:
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                new_lines.append(line)
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern to match from ======= to >>>>>>> (remove this part)
        pattern2 = r'=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.md'
=======
    """Main function to fix all merge conflicts"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'hooks/**/*.ts',
        '*.tsx',
        '*.ts'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
<<<<<<< HEAD
<<<<<<< HEAD
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
            
            if fix_merge_conflicts(file_path):
=======
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_merge_conflict(file_path):
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                fixed_count += 1
=======
    """Fix merge conflicts in all relevant files"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")
=======
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

if __name__ == "__main__":
    main()