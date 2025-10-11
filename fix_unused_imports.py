#!/usr/bin/env python3
import os
import re
import glob

def fix_unused_imports(file_path):
    """Remove unused imports from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Common unused imports that appear frequently
        unused_imports = [
            'Phone', 'Mail', 'MapPin', 'ArrowRight', 'Zap', 'Shield', 'Brain', 'Globe',
            'CheckCircle', 'Settings', 'BarChart', 'DollarSign', 'Star', 'Users', 'Cog',
            'Eye', 'MessageSquare', 'BarChart3', 'Clock', 'Cloud', 'Code', 'Database',
            'Smartphone', 'DollarSign', 'Users'
        ]
        
        # Pattern to match import statements
        import_pattern = r'import\s*\{([^}]+)\}\s*from\s*[\'"][^\'"]+[\'"]'
        
        def fix_import(match):
            import_content = match.group(1)
            # Split by comma and clean up
            imports = [imp.strip() for imp in import_content.split(',')]
            
            # Remove unused imports
            used_imports = []
            for imp in imports:
                # Check if this import is actually used in the file
                if imp not in unused_imports or imp in content.replace(import_content, ''):
                    used_imports.append(imp)
            
            if used_imports:
                return f"import {{ {', '.join(used_imports)} }} from 'lucide-react'"
            else:
                return ""
        
        # Fix lucide-react imports
        new_content = re.sub(import_pattern, fix_import, content)
        
        # Also remove any standalone unused imports
        for unused in unused_imports:
            # Remove standalone imports
            new_content = re.sub(rf'import\s*\{{\s*{unused}\s*}}\s*from\s*[\'"][^\'"]+[\'"]\n?', '', new_content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed unused imports in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/components/*.tsx',
        'app/components/*.ts', 
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if 'node_modules' not in f and 'dist' not in f and '.next' not in f]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_unused_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()