#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors():
    """Fix common syntax errors in TypeScript/JavaScript files"""
    
    # Get all TypeScript and JavaScript files
    ts_files = glob.glob("src/**/*.ts", recursive=True)
    tsx_files = glob.glob("src/**/*.tsx", recursive=True)
    js_files = glob.glob("src/**/*.js", recursive=True)
    jsx_files = glob.glob("src/**/*.jsx", recursive=True)
    
    all_files = ts_files + tsx_files + js_files + jsx_files
    
    fixed_count = 0
    
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix missing semicolons after return statements in switch cases
            content = re.sub(r'return ([^;]+),(\s*case)', r'return \1;\2', content)
            content = re.sub(r'return ([^;]+),(\s*default)', r'return \1;\2', content)
            
            # Fix missing semicolons after function calls
            content = re.sub(r'(\w+)\(\)(\s*)(\n\s*[a-zA-Z])', r'\1();\2\3', content)
            
            # Fix missing semicolons after variable declarations
            content = re.sub(r'(\w+)\s*=\s*([^;]+),(\s*)(\n\s*[a-zA-Z])', r'\1 = \2;\3\4', content)
            
            # Fix missing commas in array elements
            content = re.sub(r'(\{.*?\})\s*(\n\s*\{)', r'\1,\2', content)
            
            # Fix missing commas in object properties
            content = re.sub(r'(\w+:\s*[^,}]+)\s*(\n\s*\w+:)', r'\1,\2', content)
            
            # Fix missing semicolons after useEffect/useMemo dependencies
            content = re.sub(r'\}, \[([^\]]+)\],(\s*)(\n\s*[a-zA-Z])', r'\}, [\1]);\2\3', content)
            
            # Fix missing semicolons after function declarations
            content = re.sub(r'(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]+)\},(\s*)(\n\s*[a-zA-Z])', r'\1 = (\2) => {\3};\4\5', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed_count += 1
                print(f"Fixed syntax errors in: {file_path}")
        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == "__main__":
    fix_syntax_errors()