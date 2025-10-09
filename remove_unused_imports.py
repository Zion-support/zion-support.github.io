#!/usr/bin/env python3
"""
Script to remove unused imports from TypeScript/TSX files
"""
import os
import re
import glob

def remove_unused_imports(file_path):
    """Remove unused imports from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements
        import_pattern = r"import\s+{([^}]+)}\s+from\s+['\"][^'\"]+['\"];?"
        imports = re.findall(import_pattern, content)
        
        if not imports:
            return False
        
        # Get all used identifiers in the file
        used_identifiers = set()
        
        # Find all identifier usage (excluding import statements)
        identifier_pattern = r'\b([A-Za-z_$][A-Za-z0-9_$]*)\b'
        lines = content.split('\n')
        
        for line in lines:
            # Skip import lines
            if line.strip().startswith('import '):
                continue
            # Find all identifiers in the line
            matches = re.findall(identifier_pattern, line)
            used_identifiers.update(matches)
        
        # Process each import statement
        modified = False
        for import_match in re.finditer(import_pattern, content):
            import_content = import_match.group(1)
            import_start = import_match.start()
            import_end = import_match.end()
            
            # Parse the import list
            import_items = [item.strip() for item in import_content.split(',')]
            
            # Filter out unused imports
            used_imports = []
            for item in import_items:
                # Handle aliased imports (e.g., "Component as Comp")
                base_name = item.split(' as ')[0].strip()
                if base_name in used_identifiers or item in used_identifiers:
                    used_imports.append(item)
            
            if len(used_imports) != len(import_items):
                # Reconstruct the import statement
                if used_imports:
                    new_import = f"import {{ {', '.join(used_imports)} }} from {import_match.group(0).split(' from ')[1]};"
                else:
                    # If no imports are used, remove the entire import line
                    new_import = ""
                
                content = content[:import_start] + new_import + content[import_end:]
                modified = True
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed unused imports from {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to remove unused imports from all files"""
    # Find all TypeScript and TSX files
    patterns = ['**/*.ts', '**/*.tsx']
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    files = [f for f in files if not any(exclude in f for exclude in [
        'node_modules', '__tests__', '_app_disabled', '_conflicted_disabled',
        '_pages_api_disabled', '_pages_disabled', 'admin-api-disabled',
        'api-disabled', 'api.disabled', 'api.disabled.temp', 'api-backup',
        'apps.backup', 'automation_backup', 'ai-optimization-backups',
        'automation_logs', 'all-automations-reports', 'accessibility-reports',
        'app/blog', 'corrupted-files-backup', 'corrupted_backup',
        'corrupted_files_backup_2', 'content', 'contracts', 'components_backup',
        'app/services', 'app/guides', 'data', 'data_backup', 'dao',
        'deployments', 'disabled-api', 'e2e', 'factories', 'src/pages/blog-disabled',
        'hooks', 'lib_backup', 'services', 'middleware', 'lib/integrations',
        'lint-target'
    ])]
    
    fixed_count = 0
    for file_path in files:
        if remove_unused_imports(file_path):
            fixed_count += 1
    
    print(f"Removed unused imports from {fixed_count} files")

if __name__ == "__main__":
    main()