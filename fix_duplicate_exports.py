#!/usr/bin/env python3
"""
Script to fix duplicate default exports
"""
import os
import re
import glob

def fix_duplicate_exports(file_path):
    """Fix duplicate default exports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has duplicate default exports
        default_exports = re.findall(r'export default\s+[^;]+;', content)
        if len(default_exports) <= 1:
            return False
        
        # Remove duplicate export default statements
        # Keep only the first one
        lines = content.split('\n')
        fixed_lines = []
        found_first_export = False
        
        for line in lines:
            if re.match(r'\s*export default\s+[^;]+;\s*$', line):
                if not found_first_export:
                    fixed_lines.append(line)
                    found_first_export = True
                # Skip duplicate exports
            else:
                fixed_lines.append(line)
        
        fixed_content = '\n'.join(fixed_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed duplicate exports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_duplicate_exports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed duplicate exports in {files_fixed} files")

if __name__ == "__main__":
    main()