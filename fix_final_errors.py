#!/usr/bin/env python3
import os
import re
import glob

def fix_final_errors(file_path):
    """Fix final parsing errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 'use client';', -> 'use client';
        content = re.sub(r"'use client';',", r"'use client';", content)
        
        # Fix import statements with extra quotes and commas
        content = re.sub(r"import\s+([^']*)';',", r"import \1;", content)
        
        # Fix from 'module';', -> from 'module';
        content = re.sub(r"from\s+'([^']*)';',", r"from '\1';", content)
        
        # Fix const declarations with extra quotes
        content = re.sub(r"const\s+'([^']*)':", r"const \1:", content)
        
        # Fix React.FC declarations
        content = re.sub(r"React\.FC<([^>]*)>", r"React.FC<\1>", content)
        
        # Fix interface declarations
        content = re.sub(r"interface\s+'([^']*)'", r"interface \1", content)
        
        # Fix component declarations
        content = re.sub(r"const\s+'([^']*)':\s*React\.FC", r"const \1: React.FC", content)
        
        # Fix default export statements
        content = re.sub(r"export\s+default\s+'([^']*)'", r"export default \1", content)
        
        # Fix JSX component names
        content = re.sub(r"<'([^']*)'", r"<\1", content)
        content = re.sub(r"</'([^']*)'>", r"</\1>", content)
        
        # Fix className with extra quotes
        content = re.sub(r"className\s*=\s*'([^']*)';',", r"className='\1'", content)
        
        # Fix string literals with extra quotes
        content = re.sub(r"'([^']*)';',", r"'\1'", content)
        
        # Fix object properties
        content = re.sub(r"'([^']*)':\s*'([^']*)';',", r"'\1': '\2'", content)
        
        # Fix array elements
        content = re.sub(r"'([^']*)';',", r"'\1'", content)
        
        # Fix function parameters
        content = re.sub(r"\(\s*'([^']*)':\s*([^)]*)\s*\)", r"(\1: \2)", content)
        
        # Fix return statements
        content = re.sub(r"return\s+'([^']*)';',", r"return '\1'", content)
        
        # Fix JSX attributes
        content = re.sub(r"(\w+)\s*=\s*'([^']*)';',", r"\1='\2'", content)
        
        # Fix closing tags
        content = re.sub(r"</'([^']*)'>", r"</\1>", content)
        
        # Fix opening tags
        content = re.sub(r"<'([^']*)'", r"<\1", content)
        
        # Fix standalone quotes
        content = re.sub(r"^\s*'([^']*)';',\s*$", r"// \1", content, flags=re.MULTILINE)
        
        # Fix console statements
        content = re.sub(r"console\.(log|warn|error|info)\([^)]*\);?", r"// \0", content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get all .tsx files
    tsx_files = glob.glob('/workspace/**/*.tsx', recursive=True)
    
    fixed_count = 0
    
    for file_path in tsx_files:
        if fix_final_errors(file_path):
            fixed_count += 1
            if fixed_count % 50 == 0:
                print(f"Fixed {fixed_count} files...")
    
    print(f"Fixed {fixed_count} files total")

if __name__ == "__main__":
    main()