#!/usr/bin/env python3
"""
Script to remove unused imports from TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_unused_imports(file_path):
    """Fix unused imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Get all imports
        import_lines = []
        lines = content.split('\n')
        in_import = False
        current_import = []
        
        for line in lines:
            if line.strip().startswith('import ') and '{' in line:
                in_import = True
                current_import = [line]
            elif in_import and '}' in line:
                current_import.append(line)
                import_lines.append('\n'.join(current_import))
                in_import = False
                current_import = []
            elif in_import:
                current_import.append(line)
        
        # For each import, check which items are actually used
        for import_block in import_lines:
            # Extract imported items
            match = re.search(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', import_block)
            if not match:
                continue
                
            imported_items = [item.strip() for item in match.group(1).split(',')]
            import_source = match.group(2)
            
            # Check which items are actually used in the file
            used_items = []
            for item in imported_items:
                # Simple check - look for the item name in the file (not in import statements)
                file_without_imports = re.sub(r'import\s*\{[^}]+\}\s*from\s*[\'"][^\'"]+[\'"]', '', content)
                if re.search(rf'\\b{item}\\b', file_without_imports):
                    used_items.append(item)
            
            # If some items are unused, update the import
            if len(used_items) < len(imported_items):
                if used_items:
                    new_import = f"import {{ {', '.join(used_items)} }} from '{import_source}'"
                else:
                    new_import = f"import '{import_source}'"
                
                # Replace the old import with the new one
                content = content.replace(import_block, new_import)
        
        # Write the updated content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '__tests__']):
                continue
                
            files_processed += 1
            if fix_unused_imports(file_path):
                files_fixed += 1
    
    print(f"Processed {files_processed} files")
    print(f"Fixed unused imports in {files_fixed} files")

if __name__ == "__main__":
    main()