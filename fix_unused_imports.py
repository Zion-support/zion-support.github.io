#!/usr/bin/env python3
import os
import re
import glob

def fix_unused_imports(file_path):
    """Remove unused imports from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file doesn't exist or is empty
        if not content.strip():
            return False
        
        # Skip test files and broken files
        if 'test' in file_path or 'broken' in file_path or 'disabled' in file_path:
            return False
        
        # Find all import statements
        import_pattern = r'import\s+{([^}]+)}\s+from\s+["\'][^"\']+["\'];?'
        imports = re.findall(import_pattern, content, re.MULTILINE)
        
        if not imports:
            return False
        
        # For each import statement, check if the imported items are used
        for import_match in re.finditer(import_pattern, content):
            import_statement = import_match.group(0)
            import_items = import_match.group(1)
            
            # Parse individual imports
            items = [item.strip() for item in import_items.split(',')]
            used_items = []
            
            for item in items:
                # Handle "as" aliases
                if ' as ' in item:
                    original_name = item.split(' as ')[0].strip()
                    alias = item.split(' as ')[1].strip()
                    # Check if either the original name or alias is used
                    if (original_name in content and original_name != item) or (alias in content and alias != item):
                        used_items.append(item)
                else:
                    # Check if the item is used in the content (excluding the import statement itself)
                    content_without_import = content.replace(import_statement, '')
                    if item in content_without_import:
                        used_items.append(item)
            
            # If some items are used, update the import
            if used_items:
                new_import = f"import {{ {', '.join(used_items)} }} from {import_match.group(0).split(' from ')[1]}"
                content = content.replace(import_statement, new_import)
            else:
                # If no items are used, remove the entire import
                content = content.replace(import_statement, '')
        
        # Write the updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed unused imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or 'dist' in file_path or 'build' in file_path:
                continue
                
            if fix_unused_imports(file_path):
                fixed_count += 1
    
    print(f"Fixed unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()