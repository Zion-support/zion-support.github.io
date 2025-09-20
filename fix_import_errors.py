#!/usr/bin/env python3
"""
Script to fix import statement syntax errors in TypeScript/JavaScript files
"""

import os
import re
import glob

def fix_import_errors(file_path):
    """Fix import statement syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix import statement syntax errors
        # 1. Fix missing commas in import statements
        content = re.sub(r'import\s+([^,]+)\s+from\s+([^;]+),', r'import \1 from \2;', content)
        
        # 2. Fix missing semicolons in import statements
        content = re.sub(r'import\s+([^;]+)\s+from\s+([^;]+)(?!\s*;)', r'import \1 from \2;', content)
        
        # 3. Fix missing commas in destructured imports
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from\s*([^;]+),', r'import {\1} from \2;', content)
        
        # 4. Fix missing semicolons after import statements
        content = re.sub(r'import\s+([^;]+)\s+from\s+([^;]+)(?!\s*[;,])', r'import \1 from \2;', content)
        
        # 5. Fix malformed import statements
        content = re.sub(r'import\s+([^,;]+)\s*,', r'import \1;', content)
        
        # 6. Fix missing semicolons in export statements
        content = re.sub(r'export\s+([^;]+)\s*,', r'export \1;', content)
        
        # 7. Fix missing semicolons after export statements
        content = re.sub(r'export\s+([^;]+)(?!\s*[;,])', r'export \1;', content)
        
        # 8. Fix missing semicolons in const declarations
        content = re.sub(r'const\s+([^;]+)\s*,', r'const \1;', content)
        
        # 9. Fix missing semicolons after const declarations
        content = re.sub(r'const\s+([^;=]+)\s*=\s*([^;]+)(?!\s*[;,])', r'const \1 = \2;', content)
        
        # 10. Fix missing semicolons in let declarations
        content = re.sub(r'let\s+([^;]+)\s*,', r'let \1;', content)
        
        # 11. Fix missing semicolons after let declarations
        content = re.sub(r'let\s+([^;=]+)\s*=\s*([^;]+)(?!\s*[;,])', r'let \1 = \2;', content)
        
        # 12. Fix missing semicolons in var declarations
        content = re.sub(r'var\s+([^;]+)\s*,', r'var \1;', content)
        
        # 13. Fix missing semicolons after var declarations
        content = re.sub(r'var\s+([^;=]+)\s*=\s*([^;]+)(?!\s*[;,])', r'var \1 = \2;', content)
        
        # 14. Fix missing semicolons in function declarations
        content = re.sub(r'function\s+([^(]+)\s*\([^)]*\)\s*{\s*$', r'function \1() {\n', content, flags=re.MULTILINE)
        
        # 15. Fix missing semicolons after arrow functions
        content = re.sub(r'=\s*\([^)]*\)\s*=>\s*([^;]+)(?!\s*[;,])', r'= () => \1;', content)
        
        # 16. Fix missing semicolons after object method definitions
        content = re.sub(r'(\w+)\s*:\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # 17. Fix missing semicolons after array elements
        content = re.sub(r'(\w+)\s*,', r'\1,', content)
        
        # 18. Fix missing semicolons after return statements
        content = re.sub(r'return\s+([^;]+)(?!\s*[;,])', r'return \1;', content)
        
        # 19. Fix missing semicolons after throw statements
        content = re.sub(r'throw\s+([^;]+)(?!\s*[;,])', r'throw \1;', content)
        
        # 20. Fix missing semicolons after break statements
        content = re.sub(r'break\s*(?!\s*[;,])', r'break;', content)
        
        # 21. Fix missing semicolons after continue statements
        content = re.sub(r'continue\s*(?!\s*[;,])', r'continue;', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed import errors in {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix import errors in all TypeScript/JavaScript files"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.jsx',
        'src/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_import_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed import errors in {fixed_count} files")

if __name__ == "__main__":
    main()