#!/usr/bin/env python3
"""
Script to fix duplicate export statements in TypeScript/JSX files
"""
import os
import re
import glob

def fix_duplicate_exports(file_path):
    """Fix duplicate export statements in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find all export default statements
        export_matches = list(re.finditer(r'export default \w+;', content))
        
        if len(export_matches) > 1:
            # Keep only the last export statement
            for i, match in enumerate(export_matches[:-1]):
                content = content.replace(match.group(), '')
        
        # Remove any remaining PagePage references
        content = re.sub(r'export default PagePage;', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed duplicate exports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix duplicate exports in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_duplicate_exports(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed duplicate exports in {files_fixed} files")

if __name__ == "__main__":
    main()