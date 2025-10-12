#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing semicolons after export default
        content = re.sub(r'export default ([^{;]+)(?<!;)$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after function declarations
        content = re.sub(r'}\s*export default ([^{;]+)(?<!;)$', r'};\nexport default \1;', content, flags=re.MULTILINE)
        
        # Fix malformed JSX structure
        content = re.sub(r'}\s*}\s*export default', '}\n}\n\nexport default', content)
        
        # Fix missing closing braces
        content = re.sub(r'}\s*export default ([^{;]+)(?<!;)$', r'}\n}\n\nexport default \1;', content, flags=re.MULTILINE)
        
        # Fix duplicate closing braces
        content = re.sub(r'}\s*}\s*}\s*export default', '}\n}\n\nexport default', content)
        
        # Fix missing opening braces
        content = re.sub(r'export default function ([^{]+)\s*return', r'export default function \1 {\n  return', content)
        
        # Fix missing return statements
        content = re.sub(r'export default function ([^{]+)\s*{\s*<', r'export default function \1 {\n  return (', content)
        
        # Fix missing closing parentheses for return statements
        content = re.sub(r'}\s*}\s*export default', '}\n  )\n}\n\nexport default', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                total_files += 1
                if fix_syntax_errors(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {total_files} page files, fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()