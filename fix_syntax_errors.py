#!/usr/bin/env python3
"""
Fix common syntax errors in merged files
"""
import os
import re
import glob

def fix_file_syntax(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in arrays
        content = re.sub(r'(\{ [^}]+ \})\s*\n\s*(\{ [^}]+ \})', r'\1,\n\2', content)
        
        # Fix missing commas in imports
        content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1,\n\2', content, flags=re.MULTILINE)
        
        # Fix missing commas in object properties
        content = re.sub(r'(\w+:\s*[^,\n]+)\s*\n\s*(\w+:)', r'\1,\n\2', content)
        
        # Fix missing commas in function parameters
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n\2', content)
        
        # Fix merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> .*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> .*?\n', '', content, flags=re.DOTALL)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*export', r'\1;\n\nexport', content)
        
        # Fix missing commas in destructuring
        content = re.sub(r'(\w+)\s*\n\s*}', r'\1,\n}', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed syntax errors in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Fixing syntax errors in merged files...")
    
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.jsx',
        'src/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"📋 Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file_syntax(file_path):
                fixed_count += 1
    
    print(f"✅ Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()