#!/usr/bin/env python3
"""
Script to fix unused variable warnings by removing or prefixing them
"""

import os
import re
import glob

def fix_unused_vars(file_path):
    """Fix unused variables in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unused variables by prefixing with underscore
        patterns = [
            # Fix unused parameters in function definitions
            (r'(\w+):\s*\([^)]*\)\s*=>\s*{', r'\1: (_) => {'),
            # Fix unused variables in destructuring
            (r'const\s+{\s*(\w+)\s*}\s*=', r'const { \1: _\1 } ='),
            # Fix unused imports
            (r'import\s+{\s*([^}]+)\s*}\s*from', lambda m: f'import {{ {m.group(1).replace(",", ", ")} }} from'),
        ]
        
        # Fix specific unused variables
        unused_vars = [
            'useCallback', 'PerformanceMetrics', 'options', 'stateRef', 
            'isKeyboardUser', '_metadata', '_importFunc', '_props'
        ]
        
        for var in unused_vars:
            # Prefix with underscore if it's a parameter
            content = re.sub(f'\\b{var}\\b(?=\\s*[,)])', f'_{var}', content)
            # Remove unused imports
            content = re.sub(f'import\\s+{{\\s*{var}\\s*}}\\s*from[^;]+;\\s*', '', content)
            content = re.sub(f',\\s*{var}\\s*', '', content)
            content = re.sub(f'\\b{var}\\s*,', '', content)
        
        # Fix empty interfaces
        content = re.sub(
            r'interface\s+(\w+)\s*{\s*}\s*',
            r'interface \1 {\n  // eslint-disable-next-line @typescript-eslint/no-empty-object-type\n  [key: string]: unknown;\n}',
            content
        )
        
        # Fix unused variables in function parameters
        content = re.sub(
            r'(\w+):\s*\([^)]*\)\s*=>\s*{',
            lambda m: m.group(0).replace('(', '(_'),
            content
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix unused variables"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        'utils/**/*.ts',
        'utils/**/*.tsx',
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                if fix_unused_vars(file_path):
                    fixed_files.append(file_path)
    
    print(f"Fixed unused variables in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")

if __name__ == "__main__":
    main()