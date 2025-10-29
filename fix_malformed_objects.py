#!/usr/bin/env python3
"""
Fix malformed object literals in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_malformed_objects(file_path):
    """Fix malformed object literals"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed object literals like {} icon: ... }
        content = re.sub(r'{\s*}\s*(\w+):', r'{\n    \1:', content)
        
        # Fix malformed object literals like {} icon: ... }
        content = re.sub(r'{\s*}\s*(\w+):\s*([^,}]+),', r'{\n    \1: \2,', content)
        
        # Fix missing commas between object properties
        content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing commas at end of object properties
        content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n\s*}', r'\1: \2\n  }', content)
        
        # Fix duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        fixed_lines = []
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        content = '\n'.join(fixed_lines)
        
        # Fix missing semicolons after imports
        content = re.sub(r'import\s+.*?from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Fix empty object literals
        content = re.sub(r'{\s*}\s*$', '{}', content, flags=re.MULTILINE)
        
        # Fix malformed arrays
        content = re.sub(r'\[\s*{\s*}\s*\]', '[]', content)
        
        # Clean up excessive newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed malformed objects in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out backup files and node_modules
    files_to_fix = [f for f in files_to_fix if not f.endswith('.original') and 'node_modules' not in f and os.path.isfile(f)]
    
    print(f"Found {len(files_to_fix)} files to check for malformed objects")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            if fix_malformed_objects(file_path):
                fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed malformed objects in {fixed_count} files")

if __name__ == "__main__":
    main()