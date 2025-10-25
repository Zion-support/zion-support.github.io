#!/usr/bin/env python3
<<<<<<< HEAD
=======
"""
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers
"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import os
import re
import glob

def fix_merge_conflicts(file_path):
<<<<<<< HEAD
    """Fix common merge conflict patterns in a file"""
=======
    """Fix merge conflicts in a single file by keeping HEAD version"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        original_content = content
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> branch (without newlines)
        content = re.sub(r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: Simple <<<<<<< HEAD ... ======= ... >>>>>>> 
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 4: <<<<<<< HEAD ... ======= ... >>>>>>> (inline)
        content = re.sub(r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up any orphaned ======= or >>>>>>> lines
        content = re.sub(r'^=======.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*$', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to ======= to >>>>>>> origin/main
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/main'
        
        # Replace with just the HEAD content (first capture group)
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be different conflict markers
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> origin/main\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> .*\n?', '', new_content)
        
        # Clean up any double newlines that might have been created
        new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix merge conflicts in all relevant files"""
    # Get all TypeScript, JavaScript, and JSX files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
=======
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
<<<<<<< HEAD
            # Skip node_modules and other irrelevant directories
=======
            # Skip node_modules and other directories
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
<<<<<<< HEAD
    print(f"Fixed {files_fixed} files")
=======
    print(f"Fixed merge conflicts in {files_fixed} files")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

if __name__ == "__main__":
    main()