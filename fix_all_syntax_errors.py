#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors in TypeScript/JavaScript files
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix comprehensive syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix import statement errors
        # 1. Fix broken import statements like "import React; { useEffect;" -> "import React, { useEffect"
        content = re.sub(r'import\s+([^;]+);\s*{\s*([^}]+)}', r'import \1, { \2', content)
        
        # 2. Fix missing commas in destructured imports
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from\s*([^;]+),', r'import { \1 } from \2;', content)
        
        # 3. Fix missing semicolons in import statements
        content = re.sub(r'import\s+([^;]+)\s+from\s+([^;]+)(?!\s*;)', r'import \1 from \2;', content)
        
        # Fix variable declaration errors
        # 4. Fix broken variable declarations like "const [metric;s;" -> "const [metrics,"
        content = re.sub(r'(\w+);\s*;', r'\1,', content)
        
        # 5. Fix broken array destructuring
        content = re.sub(r'\[\s*([^;]+);\s*;', r'[ \1,', content)
        
        # 6. Fix broken object destructuring
        content = re.sub(r'{\s*([^;]+);\s*;', r'{ \1,', content)
        
        # Fix function call errors
        # 7. Fix broken function calls like "performance.now(;);" -> "performance.now();"
        content = re.sub(r'(\w+)\(;\s*\);', r'\1();', content)
        
        # 8. Fix broken function calls with parameters
        content = re.sub(r'(\w+)\(([^;]+);\s*\)', r'\1(\2)', content)
        
        # Fix object property errors
        # 9. Fix broken object properties like "memoryUsage: 0;," -> "memoryUsage: 0,"
        content = re.sub(r'(\w+):\s*([^,;]+);\s*,', r'\1: \2,', content)
        
        # 10. Fix broken object properties without comma
        content = re.sub(r'(\w+):\s*([^,;]+);\s*([^,}])', r'\1: \2,\n    \3', content)
        
        # Fix string errors
        # 11. Fix broken strings like "reac;t;" -> "react"
        content = re.sub(r'"([^";]+);\s*;([^"]*)"', r'"\1\2"', content)
        
        # Fix JSX errors
        # 12. Fix broken JSX like "</d;i;v;>" -> "</div>"
        content = re.sub(r'</([^>]+);\s*;([^>]*)>', r'</\1>', content)
        
        # 13. Fix broken JSX attributes
        content = re.sub(r'(\w+)="([^"]+);\s*;([^"]*)"', r'\1="\2\3"', content)
        
        # Fix operator errors
        # 14. Fix broken operators like "frameCount;+;+;" -> "frameCount++;"
        content = re.sub(r'(\w+);\s*\+\s*;\s*\+\s*;', r'\1++;', content)
        
        # 15. Fix broken operators like "frameCount =  ;0;" -> "frameCount = 0;"
        content = re.sub(r'(\w+)\s*=\s*;\s*(\d+)', r'\1 = \2', content)
        
        # Fix conditional errors
        # 16. Fix broken conditionals like "if (e.ctrlKey && e.shiftKey && e.key === 'P') {" -> proper syntax
        content = re.sub(r'if\s*\(\s*([^)]+);\s*\)', r'if (\1)', content)
        
        # Fix return statement errors
        # 17. Fix broken returns like "return contex;t;" -> "return context;"
        content = re.sub(r'return\s+([^;]+);\s*;', r'return \1;', content)
        
        # Fix export errors
        # 18. Fix broken exports like "export default Ap;p;" -> "export default App;"
        content = re.sub(r'export\s+default\s+([^;]+);\s*;', r'export default \1;', content)
        
        # Fix template literal errors
        # 19. Fix broken template literals
        content = re.sub(r'`([^`]+);\s*;([^`]*)`', r'`\1\2`', content)
        
        # Fix class method errors
        # 20. Fix broken class methods
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*\)\s*{', r'\1(\2) {', content)
        
        # Fix interface errors
        # 21. Fix broken interfaces
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*}', r'interface \1 {\n  \2\n}', content)
        
        # Fix type errors
        # 22. Fix broken type declarations
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;', r'type \1 = \2;', content)
        
        # Fix generic errors
        # 23. Fix broken generics
        content = re.sub(r'(\w+)<([^>]+);\s*;([^>]*)>', r'\1<\2>', content)
        
        # Fix comment errors
        # 24. Fix broken comments
        content = re.sub(r'//\s*([^;]+);\s*;([^\\n]*)', r'// \1\2', content)
        
        # Fix semicolon placement errors
        # 25. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix trailing comma errors
        # 26. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix function parameter errors
        # 27. Fix broken function parameters
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1, \2)', content)
        
        # Fix array access errors
        # 28. Fix broken array access
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix object access errors
        # 29. Fix broken object access
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix conditional operator errors
        # 30. Fix broken conditional operators
        content = re.sub(r'(\w+)\s*\?\s*([^:]+);\s*;\s*([^:]+)', r'\1 ? \2 : \3', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    # Get all TypeScript and JavaScript files
    ts_files = glob.glob('src/**/*.ts', recursive=True)
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    js_files = glob.glob('src/**/*.js', recursive=True)
    jsx_files = glob.glob('src/**/*.jsx', recursive=True)
    
    all_files = ts_files + tsx_files + js_files + jsx_files
    
    fixed_count = 0
    for file_path in all_files:
        if fix_syntax_errors(file_path):
            fixed_count += 1
            print(f"Fixed syntax errors in: {file_path}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == "__main__":
    main()