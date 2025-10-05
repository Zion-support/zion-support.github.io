#!/usr/bin/env python3
import os
import re
import glob

def fix_lucide_named_imports(file_path):
    """Fix lucide-react imports to use named imports instead of default imports"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Find all individual default imports from lucide-react
        import_pattern = r'import\s+(\w+)\s+from\s+[\'"]lucide-react[\'"];'
        imports = re.findall(import_pattern, content)
        
        if not imports:
            return False
        
        # Remove all individual imports
        content = re.sub(import_pattern, '', content)
        
        # Create a single named import
        named_import = f"import {{ {', '.join(imports)} }} from 'lucide-react';"
        
        # Add the import at the top after other imports
        lines = content.split('\n')
        import_index = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('import ') and 'from' in line:
                import_index = i + 1
            elif line.strip() and not line.strip().startswith('import '):
                break
        
        lines.insert(import_index, named_import)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TSX files with lucide-react imports
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if 'from \'lucide-react\'' in content or 'from "lucide-react"' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with lucide-react imports")
    
    fixed_count = 0
    for file_path in tsx_files:
        print(f"Processing: {file_path}")
        if fix_lucide_named_imports(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react imports")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react imports in {fixed_count} files")

if __name__ == "__main__":
    main()