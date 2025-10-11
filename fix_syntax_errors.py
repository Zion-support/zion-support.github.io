#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        # Remove unused imports
        lines = content.split('\n')
        fixed_lines = []
        unused_imports = set()
        
        for line in lines:
            # Check for unused imports
            if 'import' in line and 'from' in line:
                # Extract import names
                import_match = re.search(r'import\s*\{([^}]+)\}\s*from', line)
                if import_match:
                    imports = [imp.strip() for imp in import_match.group(1).split(',')]
                    # Check if any of these imports are used in the file
                    for imp in imports:
                        if imp not in content.replace(line, ''):
                            unused_imports.add(imp)
        
        # Remove lines with only unused imports
        for line in lines:
            if 'import' in line and 'from' in line:
                import_match = re.search(r'import\s*\{([^}]+)\}\s*from', line)
                if import_match:
                    imports = [imp.strip() for imp in import_match.group(1).split(',')]
                    if all(imp in unused_imports for imp in imports):
                        continue  # Skip this line
                    else:
                        # Remove unused imports from the line
                        used_imports = [imp for imp in imports if imp not in unused_imports]
                        if used_imports:
                            line = re.sub(r'import\s*\{[^}]+\}\s*from', f'import {{ {", ".join(used_imports)} }} from', line)
                        else:
                            continue  # Skip this line
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix common syntax errors
        # Fix missing commas in object literals
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n  \2', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*(export|import|const|let|var|function|class)', r'\1;\n\2', content)
        
        # Fix JSX closing tag issues
        content = re.sub(r'<(\w+)([^>]*)>\s*</\1>', r'<\1\2 />', content)
        
        # Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix enum syntax
        content = re.sub(r'enum\s+(\w+)\s*\{([^}]+)\}', lambda m: f'enum {m.group(1)} {{\n  {m.group(2).replace(",", ",\n  ")}\n}}', content)
        
        # Fix function parameter issues
        content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*\{', r'function \1() {', content)
        
        # Fix object property syntax
        content = re.sub(r'(\w+)\s*:\s*([^,}]+)\s*([,}])', r'\1: \2\3', content)
        
        # Fix any type issues
        content = re.sub(r':\s*any\b', ': unknown', content)
        
        # Fix missing return statements
        content = re.sub(r'function\s+(\w+)\s*\([^)]*\)\s*\{([^}]*)\}', 
                        lambda m: f'function {m.group(1)}({m.group(2)}) {{\n  return null;\n}}' if not 'return' in m.group(2) else m.group(0), content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.jsx',
        'components/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
