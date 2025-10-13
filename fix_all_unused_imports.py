#!/usr/bin/env python3
"""
Script to fix all unused imports by commenting them out
"""
import os
import re
import glob

def fix_unused_imports_in_file(file_path):
    """Fix unused imports in a single file by commenting them out"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements
        import_pattern = r'^import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"];?$'
        lines = content.split('\n')
        modified = False
        
        for i, line in enumerate(lines):
            match = re.match(import_pattern, line.strip())
            if match:
                import_content = match.group(1)
                module = match.group(2)
                
                # Split by comma and clean up
                imported_items = [item.strip() for item in import_content.split(',')]
                
                # Check each imported item
                unused_items = []
                used_items = []
                
                for item in imported_items:
                    # Check if this import is used in the file
                    # Look for various usage patterns
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
                    ]
                    
                    is_used = False
                    for pattern in usage_patterns:
                        # Check if pattern exists and it's not in an import statement
                        matches = re.finditer(pattern, content)
                        for match in matches:
                            match_start = match.start()
                            # Check if this match is not inside an import statement
                            before_match = content[:match_start]
                            import_count = before_match.count('import')
                            close_count = before_match.count('}')
                            if import_count <= close_count:  # Not inside import
                                is_used = True
                                break
                        if is_used:
                            break
                    
                    if is_used:
                        used_items.append(item)
                    else:
                        unused_items.append(item)
                
                # If there are unused items, comment out the entire import
                if unused_items and not used_items:
                    lines[i] = f"// {line} // Unused import"
                    modified = True
                elif unused_items and used_items:
                    # Keep only used items
                    new_import = f"import {{ {', '.join(used_items)} }} from '{module}';"
                    lines[i] = new_import
                    modified = True
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(lines))
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
                if fix_unused_imports_in_file(file_path):
                    fixed_count += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()