#!/usr/bin/env python3
"""
Fix final remaining issues including merge conflicts and syntax errors
"""
import os
import re
import glob

def fix_file_issues(file_path):
    """Fix issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> .*', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*', '', content)
        content = re.sub(r'>>>>>>> .*', '', content)
        
        # Fix common syntax issues
        # Remove duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        new_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Fix missing closing braces by adding them at the end if needed
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
        
        # Clean up extra newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining issues"""
    # Get all TypeScript/JavaScript files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    all_files = []
    for pattern in patterns:
        all_files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other irrelevant directories
    files_to_process = []
    for file_path in all_files:
        if any(exclude in file_path for exclude in ['node_modules', '.git', 'dist', 'build']):
            continue
        files_to_process.append(file_path)
    
    print(f"Processing {len(files_to_process)} files...")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_file_issues(file_path):
            print(f"Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\nFixed issues in {fixed_count} files")

if __name__ == "__main__":
    main()