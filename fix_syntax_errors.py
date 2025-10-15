#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        # 1. Fix missing semicolons after imports
        content = re.sub(r'from [\'"][^\'"]+[\'"]\s*\n(?!\s*[;{}])', lambda m: m.group(0).rstrip() + ';\n', content)
        
        # 2. Fix missing semicolons after variable declarations
        content = re.sub(r'(\w+)\s*=\s*[^;{}]+(?=\n\s*[a-zA-Z])', lambda m: m.group(0) + ';', content)
        
        # 3. Fix missing closing braces
        content = re.sub(r'(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*$', lambda m: m.group(0) + '\n}', content, flags=re.MULTILINE)
        
        # 4. Fix unterminated string literals
        content = re.sub(r'([\'"])([^\'"]*)\n', r'\1\2\1\n', content)
        
        # 5. Fix missing commas in object literals
        content = re.sub(r'(\w+)\s*:\s*[^,}]+(?=\n\s*[a-zA-Z])', lambda m: m.group(0) + ',', content)
        
        # 6. Fix JSX fragment issues
        content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '</>', content, flags=re.MULTILINE)
        
        # 7. Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # 8. Fix missing return statements
        content = re.sub(r'const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]*)\n\s*\}', 
                        lambda m: f'const {m.group(1)} = ({m.group(2)}) => {{\n  return {m.group(3)};\n}}', content)
        
        # 9. Fix missing export statements
        if 'export default' not in content and 'export {' not in content and 'export const' not in content:
            # Try to find the main component/function
            if 'const ' in content and 'React.FC' in content:
                content += '\n\nexport default ' + re.search(r'const\s+(\w+)\s*:\s*React\.FC', content).group(1) + ';'
        
        # 10. Fix missing imports
        if 'React' in content and 'import React' not in content:
            content = 'import React from \'react\';\n' + content
        
        # 11. Fix missing closing parentheses
        content = re.sub(r'\([^)]*$', lambda m: m.group(0) + ')', content, flags=re.MULTILINE)
        
        # 12. Fix missing closing brackets
        content = re.sub(r'\[[^\]]*$', lambda m: m.group(0) + ']', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to modify
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                if fix_syntax_errors(file_path):
                    print(f"Fixed syntax errors in: {file_path}")
                    fixed_count += 1
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
