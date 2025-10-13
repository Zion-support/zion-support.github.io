#!/usr/bin/env python3
"""
Script to fix unused variable imports in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_unused_imports(file_path):
    """Fix unused imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements
        import_pattern = r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"];?'
        imports = re.findall(import_pattern, content)
        
        if not imports:
            return False
            
        # Track which imports are actually used
        used_imports = set()
        
        # Find all usage of imported items
        for import_content, module in imports:
            # Split by comma and clean up
            imported_items = [item.strip() for item in import_content.split(',')]
            
            for item in imported_items:
                # Check if this import is used in the file (excluding the import statement itself)
                # Look for the item name in JSX, function calls, etc.
                usage_patterns = [
                    rf'<{re.escape(item)}\s',  # JSX component usage
                    rf'<{re.escape(item)}>',   # JSX component usage
                    rf'<{re.escape(item)}/>',  # JSX self-closing component
                    rf'{re.escape(item)}\.',   # Object property access
                    rf'{re.escape(item)}\(',   # Function call
                    rf'{re.escape(item)}\[',   # Array access
                    rf'{re.escape(item)}\s',   # Space after (variable usage)
                    rf'{re.escape(item)},',   # Comma after (in object/array)
                    rf'{re.escape(item)};',   # Semicolon after
                    rf'{re.escape(item)}:',   # Colon after (in object)
                    rf'{re.escape(item)}]',   # Closing bracket
                    rf'{re.escape(item)}',    # General usage
                ]
                
                # Check if any pattern matches (but not in import statements)
                for pattern in usage_patterns:
                    matches = re.findall(pattern, content)
                    if matches:
                        # Make sure it's not in an import statement
                        for match in matches:
                            match_pos = content.find(match)
                            if match_pos != -1:
                                # Check if this match is not inside an import statement
                                before_match = content[:match_pos]
                                import_count = before_match.count('import')
                                close_count = before_match.count('}')
                                if import_count <= close_count:  # Not inside import
                                    used_imports.add(item)
                                    break
        
        # Remove unused imports
        modified = False
        for import_content, module in imports:
            imported_items = [item.strip() for item in import_content.split(',')]
            used_items = [item for item in imported_items if item in used_imports]
            
            if len(used_items) != len(imported_items):
                # Some imports are unused
                if used_items:
                    new_import = f"import {{ {', '.join(used_items)} }} from '{module}';"
                else:
                    new_import = f"// import {{ {', '.join(imported_items)} }} from '{module}'; // Unused imports removed"
                
                old_import = f"import {{ {import_content} }} from '{module}';"
                if old_import in content:
                    content = content.replace(old_import, new_import)
                    modified = True
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all unused imports"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_unused_imports(file_path):
                    fixed_count += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()