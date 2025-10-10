#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix extra closing braces in arrays
        content = re.sub(r'\]\}$', ']', content)
        
        # Fix missing closing article tags
        content = re.sub(r'(\s+</div>\s+</div>\s+</div>\s+</section>)', r'\n                </article>\n              ))}\n            </div>\n          </section>', content)
        
        # Fix React.memo syntax issues
        content = re.sub(r'React\.memo\(\(props\) => \{', '() => {', content)
        
        # Fix missing closing parentheses in function calls
        content = re.sub(r'(\s+)\}\s+export default', r'\1}\n\nexport default', content)
        
        # Fix extra closing braces in objects
        content = re.sub(r'(\s+)\},\s+\},', r'\1},', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'tabIndex="0"', 'tabIndex={0}', content)
        
        # Fix aria-label formatting
        content = re.sub(r'aria-label="\s*\n\s*([^"]+)\s*\n\s*">', r'aria-label="\1">', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_syntax_errors(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
