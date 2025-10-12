#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_exports(file_path):
    """Fix duplicate export statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find all export default statements
        export_matches = list(re.finditer(r'export default\s+([^;]+);', content))
        
        if len(export_matches) > 1:
            print(f"Fixing duplicate exports in: {file_path}")
            
            # Keep only the first export statement
            first_export = export_matches[0]
            last_export = export_matches[-1]
            
            # Remove all export statements except the first one
            before_first = content[:first_export.end()]
            after_last = content[last_export.end():]
            
            # Clean up the content between first and last export
            middle_content = content[first_export.end():last_export.start()]
            middle_content = re.sub(r'export default\s+[^;]+;', '', middle_content)
            
            content = before_first + middle_content + after_last
            
            # Clean up extra whitespace
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
            
        return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
                
            files_processed += 1
            if fix_duplicate_exports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed duplicate exports in {files_fixed} files")

if __name__ == "__main__":
    main()
