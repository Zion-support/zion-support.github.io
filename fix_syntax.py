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
        
        # Fix missing semicolons after imports
        content = re.sub(r"import ([^;]+)\n", r"import \1;\n", content)
        
        # Fix missing semicolons after 'use client'
        content = re.sub(r"'use client'\n", r"'use client';\n", content)
        
        # Fix malformed JSX closing tags like </> 
        content = re.sub(r'</>\s*</div>', r'</div>', content)
        
        # Fix missing semicolons in function declarations
        content = re.sub(r"export default function (\w+)\(\) \{\n", r"export default function \1() {\n", content)
        
        # Fix missing closing parentheses in return statements
        content = re.sub(r'    </div>;\n\}', r'    </div>\n  );\n}', content)
        
        # Fix malformed ArrowRight imports
        content = re.sub(r"import\s+ArrowRight\s+from\s+'lucide-react'", r"import { ArrowRight } from 'lucide-react'", content)
        
        # Fix duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        filtered_lines = []
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    filtered_lines.append(line)
            else:
                filtered_lines.append(line)
        content = '\n'.join(filtered_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax in {fixed_count} files")

if __name__ == "__main__":
    main()