#!/usr/bin/env python3

import os
import re
import glob

def fix_syntax_errors():
    print("🔧 Starting comprehensive syntax error fixes...")
    
    # Find all JavaScript and TypeScript files
    file_patterns = [
        'src/**/*.js',
        'src/**/*.jsx', 
        'src/**/*.ts',
        'src/**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in file_patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    for file_path in files_to_fix:
        fix_file_syntax(file_path)
    
    print("✅ Syntax fixes completed!")

def fix_file_syntax(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        
        # 1. Fix variable declarations ending with comma instead of semicolon
        content = re.sub(r'(const\s+\w+\s*=\s*[^,;]+),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        content = re.sub(r'(let\s+\w+\s*=\s*[^,;]+),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        content = re.sub(r'(var\s+\w+\s*=\s*[^,;]+),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        # 2. Fix object properties with semicolons instead of commas
        content = re.sub(r'(\w+\s*:\s*[^,;]+);(\s*\w+\s*:)', r'\1,\2', content)
        
        # 3. Fix missing commas in object properties
        content = re.sub(r'(\w+\s*:\s*[^,}\n]+)(\s*\n\s*)(\w+\s*:)', r'\1,\2\3', content)
        
        # 4. Fix function calls ending with comma instead of semicolon
        content = re.sub(r'(\w+\([^)]*\)),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        # 5. Fix array elements with semicolons
        content = re.sub(r'(\[[^\]]*);([^\]]*\])', r'\1,\2', content)
        
        # 6. Fix missing semicolons at end of statements
        content = re.sub(r'(\}\s*)(\n\s*(?:const|let|var|function|return|if|for|while))', r'\1;\2', content)
        
        # 7. Fix object method definitions
        content = re.sub(r'(\w+\s*:\s*\([^)]*\)\s*=>\s*\{[^}]+\}),(\s*\})', r'\1\2', content)
        
        # 8. Fix useEffect dependencies
        content = re.sub(r'(\}\s*,\s*\[[^\]]*\]),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        # 9. Fix interface properties
        content = re.sub(r'(\w+\s*:\s*[^,;]+),(\s*\})', r'\1\2', content)
        
        # 10. Fix return statements
        content = re.sub(r'(return\s+[^;]+),(\s*$)', r'\1;\2', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

if __name__ == "__main__":
    fix_syntax_errors()