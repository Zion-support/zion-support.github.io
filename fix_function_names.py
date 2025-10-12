#!/usr/bin/env python3
"""
Script to fix function names with hyphens
"""
import os
import re
import glob

def fix_function_names(content):
    """Fix function names with hyphens"""
    # Fix function names like "5G-Data-AnalyticsPage" -> "FiveGDataAnalyticsPage"
    content = re.sub(r'export default function (\d+[Gg])-([A-Za-z-]+)Page\(\)', 
                     lambda m: f'export default function {m.group(1).replace("5G", "FiveG").replace("5g", "FiveG")}{"".join(word.capitalize() for word in m.group(2).split("-"))}Page()', 
                     content)
    
    # Fix other function names with hyphens
    content = re.sub(r'export default function ([A-Za-z0-9]+)-([A-Za-z-]+)Page\(\)', 
                     lambda m: f'export default function {m.group(1)}{"".join(word.capitalize() for word in m.group(2).split("-"))}Page()', 
                     content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_function_names(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed function names: {file_path}")
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