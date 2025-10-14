#!/usr/bin/env python3
import os
import re
import glob

def fix_unused_imports_advanced(file_path):
    """Fix unused imports in a TypeScript/JavaScript file with better detection"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file has merge conflicts
        if '<<<<<<< HEAD' in content:
            return False
        
        # Find all import statements
        import_pattern = r'import\s+{([^}]+)}\s+from\s+[\'"]([^\'"]+)[\'"];?'
        imports = re.findall(import_pattern, content)
        
        if not imports:
            return False
        
        modified = False
        
        for import_content, module in imports:
            # Split the imports and clean them
            items = [item.strip() for item in import_content.split(',')]
            
            # Check which imports are actually used in the file
            used_items = []
            for item in items:
                # Skip if it's a type import or has 'as' keyword
                if ' as ' in item or item.startswith('type '):
                    used_items.append(item)
                    continue
                
                # Extract the actual variable name (before any 'as' keyword)
                var_name = item.split(' as ')[0].strip()
                
                # Check if the variable is used in the file (not in import statements)
                # Look for the variable name in JSX, function calls, etc.
                usage_patterns = [
                    rf'<{var_name}\s',  # JSX component
                    rf'<{var_name}>',   # JSX component
                    rf'</{var_name}>',  # JSX closing tag
                    rf'{var_name}\.',   # Object property access
                    rf'{var_name}\(',   # Function call
                    rf'{var_name}\[',   # Array access
                    rf'{var_name}\s',   # Space after variable
                    rf'{var_name},',    # Comma after variable
                    rf'{var_name};',    # Semicolon after variable
                    rf'{var_name}\)',   # Closing parenthesis
                    rf'{var_name}\}}',  # Closing brace
                    rf'{var_name}\s*:', # Colon after variable (object property)
                    rf'{var_name}\s*=', # Assignment
                    rf'{var_name}\s*\?', # Optional chaining
                    rf'{var_name}\s*\|', # Union type
                    rf'{var_name}\s*&',  # Intersection type
                    rf'icon:\s*<{var_name}', # Icon in object
                    rf'icon:\s*{var_name}', # Icon in object
                    rf'className="[^"]*{var_name}[^"]*"', # CSS class
                ]
                
                is_used = any(re.search(pattern, content) for pattern in usage_patterns)
                
                if is_used:
                    used_items.append(item)
                else:
                    print(f"Removing unused import: {var_name} from {file_path}")
                    modified = True
            
            if used_items != items:
                # Reconstruct the import statement
                new_import_content = ', '.join(used_items)
                new_import = f'import {{{new_import_content}}} from "{module}";'
                old_import = f'import {{{import_content}}} from "{module}";'
                
                content = content.replace(old_import, new_import)
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed unused imports in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_modified = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_unused_imports_advanced(file_path):
                files_modified += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Modified {files_modified} files")

if __name__ == "__main__":
    main()