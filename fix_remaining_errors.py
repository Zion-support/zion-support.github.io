#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in TypeScript/JSX files
"""

import os
import re
import glob

def fix_complex_syntax_errors(content):
    """Fix complex syntax errors"""
    # Fix malformed type annotations with extra commas
    content = re.sub(r'(\w+)\s*:\s*([^,;]+),\s*([^,;]+),\s*([^,;]+)', r'\1: \2\3\4', content)
    
    # Fix malformed function calls with extra commas
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\(', r'\1\2\3(', content)
    
    # Fix malformed object properties with extra commas
    content = re.sub(r'(\w+),\s*(\w+)\s*:\s*([^,}]+),', r'\1\2: \3,', content)
    
    # Fix malformed array access with extra commas
    content = re.sub(r'(\w+)\[(\w+),\s*(\w+)\]', r'\1[\2\3]', content)
    
    # Fix malformed string concatenation
    content = re.sub(r"'([^']+),\s*([^']+),\s*([^']+)'", r"'\1\2\3'", content)
    content = re.sub(r'"([^"]+),\s*([^"]+),\s*([^"]+)"', r'"\1\2\3"', content)
    
    # Fix malformed template literals
    content = re.sub(r'`([^`]+),\s*([^`]+),\s*([^`]+)`', r'`\1\2\3`', content)
    
    # Fix malformed method calls
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\.\s*(\w+)', r'\1\2\3.\4', content)
    
    # Fix malformed variable declarations
    content = re.sub(r'const\s+(\w+),\s*(\w+),\s*(\w+)\s*=', r'const \1\2\3 =', content)
    content = re.sub(r'let\s+(\w+),\s*(\w+),\s*(\w+)\s*=', r'let \1\2\3 =', content)
    content = re.sub(r'var\s+(\w+),\s*(\w+),\s*(\w+)\s*=', r'var \1\2\3 =', content)
    
    # Fix malformed type unions
    content = re.sub(r'(\w+)\s*\|\s*(\w+),\s*(\w+)', r'\1 | \2\3', content)
    
    # Fix malformed generic types
    content = re.sub(r'<(\w+),\s*(\w+),\s*(\w+)>', r'<\1\2\3>', content)
    
    # Fix malformed array types
    content = re.sub(r'(\w+)\[\],\s*(\w+)\[\],\s*(\w+)\[\]', r'\1\2\3[]', content)
    
    # Fix malformed optional properties
    content = re.sub(r'(\w+),\s*(\w+)\s*\?\s*:\s*([^;]+)', r'\1\2?: \3', content)
    
    # Fix malformed function parameters
    content = re.sub(r'\(\s*(\w+),\s*(\w+),\s*(\w+)\s*:\s*([^)]+)\)', r'(\1\2\3: \4)', content)
    
    # Fix malformed object destructuring
    content = re.sub(r'\{\s*(\w+),\s*(\w+),\s*(\w+)\s*\}', r'{\1\2\3}', content)
    
    # Fix malformed array destructuring
    content = re.sub(r'\[\s*(\w+),\s*(\w+),\s*(\w+)\s*\]', r'[\1\2\3]', content)
    
    # Fix malformed import statements
    content = re.sub(r'import\s+(\w+),\s*(\w+),\s*(\w+)\s+from', r'import \1\2\3 from', content)
    
    # Fix malformed export statements
    content = re.sub(r'export\s+(\w+),\s*(\w+),\s*(\w+)', r'export \1\2\3', content)
    
    # Fix malformed class declarations
    content = re.sub(r'class\s+(\w+),\s*(\w+),\s*(\w+)', r'class \1\2\3', content)
    
    # Fix malformed interface declarations
    content = re.sub(r'interface\s+(\w+),\s*(\w+),\s*(\w+)', r'interface \1\2\3', content)
    
    # Fix malformed type declarations
    content = re.sub(r'type\s+(\w+),\s*(\w+),\s*(\w+)', r'type \1\2\3', content)
    
    # Fix malformed enum declarations
    content = re.sub(r'enum\s+(\w+),\s*(\w+),\s*(\w+)', r'enum \1\2\3', content)
    
    # Fix malformed namespace declarations
    content = re.sub(r'namespace\s+(\w+),\s*(\w+),\s*(\w+)', r'namespace \1\2\3', content)
    
    # Fix malformed module declarations
    content = re.sub(r'module\s+(\w+),\s*(\w+),\s*(\w+)', r'module \1\2\3', content)
    
    # Fix malformed declare statements
    content = re.sub(r'declare\s+(\w+),\s*(\w+),\s*(\w+)', r'declare \1\2\3', content)
    
    # Fix malformed const assertions
    content = re.sub(r'as\s+const,\s*(\w+),\s*(\w+)', r'as const\1\2', content)
    
    # Fix malformed type assertions
    content = re.sub(r'as\s+(\w+),\s*(\w+),\s*(\w+)', r'as \1\2\3', content)
    
    # Fix malformed non-null assertions
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*!', r'\1\2\3!', content)
    
    # Fix malformed optional chaining
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\?\.', r'\1\2\3?.', content)
    
    # Fix malformed nullish coalescing
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\?\?', r'\1\2\3??', content)
    
    # Fix malformed logical operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*&&', r'\1\2\3 &&', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\|\|', r'\1\2\3 ||', content)
    
    # Fix malformed comparison operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*==', r'\1\2\3 ==', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*!=', r'\1\2\3 !=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*===', r'\1\2\3 ===', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*!==', r'\1\2\3 !==', content)
    
    # Fix malformed arithmetic operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\+', r'\1\2\3 +', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*-', r'\1\2\3 -', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\*', r'\1\2\3 *', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*/', r'\1\2\3 /', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*%', r'\1\2\3 %', content)
    
    # Fix malformed assignment operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*=', r'\1\2\3 =', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\+=', r'\1\2\3 +=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*-=', r'\1\2\3 -=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\*=', r'\1\2\3 *=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*/=', r'\1\2\3 /=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*%=', r'\1\2\3 %=', content)
    
    # Fix malformed increment/decrement operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\+\+', r'\1\2\3++', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*--', r'\1\2\3--', content)
    content = re.sub(r'\+\+\s*(\w+),\s*(\w+),\s*(\w+)', r'++\1\2\3', content)
    content = re.sub(r'--\s*(\w+),\s*(\w+),\s*(\w+)', r'--\1\2\3', content)
    
    # Fix malformed bitwise operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*&', r'\1\2\3 &', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\|', r'\1\2\3 |', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\^', r'\1\2\3 ^', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*~', r'\1\2\3 ~', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*<<', r'\1\2\3 <<', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*>>', r'\1\2\3 >>', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*>>>', r'\1\2\3 >>>', content)
    
    # Fix malformed shift assignment operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*<<=', r'\1\2\3 <<=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*>>=', r'\1\2\3 >>=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*>>>=', r'\1\2\3 >>>=', content)
    
    # Fix malformed bitwise assignment operators
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*&=', r'\1\2\3 &=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\|=', r'\1\2\3 |=', content)
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*\^=', r'\1\2\3 ^=', content)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_complex_syntax_errors(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Find all TypeScript and JSX files
    patterns = [
        'src/components/**/*.tsx',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_count += 1
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()