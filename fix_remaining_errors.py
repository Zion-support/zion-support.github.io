#!/usr/bin/env python3
"""
Script to fix remaining parsing errors
"""
import os
import re
import glob

def fix_remaining_errors(content):
    """Fix remaining parsing errors"""
    # Fix malformed class names with missing spaces
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix specific patterns
    content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
    content = re.sub(r'w-5 h-5ml-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'flexitems-center', 'flex items-center', content)
    content = re.sub(r'justify-center', 'justify-center', content)
    content = re.sub(r'text-4xlfont-bold', 'text-4xl font-bold', content)
    content = re.sub(r'text-lgtext-gray-300', 'text-lg text-gray-300', content)
    content = re.sub(r'mb-8', 'mb-8', content)
    content = re.sub(r'px-4sm:px-6', 'px-4 sm:px-6', content)
    content = re.sub(r'lg:px-8', 'lg:px-8', content)
    content = re.sub(r'max-w-7xlmx-auto', 'max-w-7xl mx-auto', content)
    content = re.sub(r'text-center', 'text-center', content)
    content = re.sub(r'flexitems-center', 'flex items-center', content)
    content = re.sub(r'justify-center', 'justify-center', content)
    content = re.sub(r'mb-4', 'mb-4', content)
    content = re.sub(r'mb-6', 'mb-6', content)
    content = re.sub(r'mb-8', 'mb-8', content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_remaining_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Find all TypeScript/React files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/*.tsx',
        '/workspace/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()