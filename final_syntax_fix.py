#!/usr/bin/env python3
"""
Final comprehensive syntax fix for all remaining issues
"""
import os
import re
import glob

def fix_all_syntax_errors(file_path):
    """Fix all remaining syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix double commas
        content = re.sub(r',,', ',', content)
        content = re.sub(r',\s*,', ',', content)
        
        # Fix import syntax issues
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from', lambda m: f'import {{ {m.group(1).replace(" ", ", ")} }} from', content)
        
        # Fix missing commas in destructuring
        content = re.sub(r'const\s*\[\s*(\w+)\s+(\w+)\s*\]', r'const [\1, \2]', content)
        content = re.sub(r'const\s*{\s*(\w+)\s+(\w+)\s*}', r'const { \1, \2 }', content)
        
        # Fix missing commas in function parameters
        content = re.sub(r'\(\s*(\w+):\s*(\w+)\s+(\w+)\s*\)', r'(\1: \2, \3)', content)
        
        # Fix missing commas in object properties
        content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n\3:', content)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1,\n\2', content, flags=re.MULTILINE)
        
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
    print("🔧 Final comprehensive syntax fix...")
    
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"📋 Found {len(files_to_fix)} TypeScript files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_all_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"✅ Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()