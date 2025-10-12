#!/usr/bin/env python3
"""
Script to fix remaining JSX syntax errors
"""
import os
import re
import glob

def fix_jsx_issues(content):
    """Fix remaining JSX issues"""
    # Fix malformed className attributes with missing spaces
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix malformed JSX elements like <Network className="w-8h-8text-cyan-400" >
    content = re.sub(r'<([A-Za-z]+) className="([^"]*?)" >', r'<\1 className="\2" />', content)
    
    # Fix malformed JSX elements like </Network className="w-8h-8text-cyan-400" ><Zap className="w-8h-8text-emerald-400" >
    content = re.sub(r'</[A-Za-z]+ className="[^"]*" ><([A-Za-z]+) className="([^"]*?)" >', r'<\1 className="\2" />', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</[A-Za-z]+ className="[^"]*" >', '', content)
    
    # Fix spaces in class names
    content = re.sub(r'w-8h-8', 'w-8 h-8', content)
    content = re.sub(r'w-6h-6', 'w-6 h-6', content)
    content = re.sub(r'w-4h-4', 'w-4 h-4', content)
    content = re.sub(r'w-5h-5', 'w-5 h-5', content)
    
    # Fix other common patterns
    content = re.sub(r'text-cyan-400" >', 'text-cyan-400" />', content)
    content = re.sub(r'text-emerald-400" >', 'text-emerald-400" />', content)
    content = re.sub(r'text-purple-400" >', 'text-purple-400" />', content)
    content = re.sub(r'text-red-400" >', 'text-red-400" />', content)
    content = re.sub(r'text-orange-400" >', 'text-orange-400" />', content)
    content = re.sub(r'text-pink-400" >', 'text-pink-400" />', content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_jsx_issues(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX issues: {file_path}")
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