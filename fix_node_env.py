#!/usr/bin/env python3
import os
import re
import glob

def fix_node_env_access(file_path):
    """Fix NODE_ENV access to use bracket notation"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace process.env.NODE_ENV with process.env['NODE_ENV']
        original_content = content
        content = re.sub(r'process\.env\.NODE_ENV', "process.env['NODE_ENV']", content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
                
            if fix_node_env_access(file_path):
                files_fixed += 1
    
    print(f"Fixed NODE_ENV access in {files_fixed} files")

if __name__ == "__main__":
    main()