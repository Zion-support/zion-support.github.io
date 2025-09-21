#!/usr/bin/env python3
"""
Fix comma errors in JSX files
"""
import os
import re
import glob

def fix_comma_errors(file_path):
    """Fix comma errors in JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix extra commas in JSX tags
        content = re.sub(r'<(\w+),', r'<\1', content)
        content = re.sub(r'</(\w+),', r'</\1', content)
        
        # Fix extra commas before attributes
        content = re.sub(r'(\w+),(\s*\w+=)', r'\1\2', content)
        
        # Fix extra commas in JSX expressions
        content = re.sub(r'(\w+),(\s*\{)', r'\1\2', content)
        
        # Fix extra commas in JSX props
        content = re.sub(r'(\w+),(\s*[a-zA-Z])', r'\1\2', content)
        
        # Fix extra commas before closing tags
        content = re.sub(r',(\s*</)', r'\1', content)
        
        # Fix extra commas in JSX children
        content = re.sub(r'(\w+),(\s*\w)', r'\1\2', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed comma errors in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Fixing comma errors in JSX files...")
    
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"📋 Found {len(files_to_fix)} JSX files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_comma_errors(file_path):
                fixed_count += 1
    
    print(f"✅ Fixed comma errors in {fixed_count} files")

if __name__ == "__main__":
    main()