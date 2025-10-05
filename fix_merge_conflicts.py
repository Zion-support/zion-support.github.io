#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a TypeScript/TSX file by resolving import statements."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match the merge conflict in import statements
        # This matches the pattern where we have duplicate lucide-react imports
        pattern = r'<<<<<<< HEAD\s*\n\s*\n\s*import\s*\{[^}]*\}\s*from\s*[\'"]lucide-react[\'"];\s*\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*;\s*\n=======\s*\n(?:import\s+\w+\s+from\s+[\'"]lucide-react[\'"];\s*\n)*>>>>>>> cursor/fix-errors-and-merge-to-main-ec39'
        
        # More specific pattern for the common case
        specific_pattern = r'<<<<<<< HEAD\s*\n\s*\n\s*import\s*\{([^}]*)\}\s*from\s*[\'"]lucide-react[\'"];\s*\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*;\s*\n=======\s*\n(?:import\s+(\w+)\s+from\s+[\'"]lucide-react[\'"];\s*\n)*>>>>>>> cursor/fix-errors-and-merge-to-main-ec39'
        
        # Try to match and replace the specific pattern
        match = re.search(specific_pattern, content, re.MULTILINE | re.DOTALL)
        if match:
            # Extract the imports from the HEAD section
            imports_str = match.group(1).strip()
            # Clean up the imports string
            imports = [imp.strip() for imp in imports_str.split(',') if imp.strip()]
            # Create the proper import statement
            if imports:
                proper_import = f"import {{ {', '.join(imports)} }} from 'lucide-react';\n"
                # Replace the entire conflict section
                new_content = content[:match.start()] + proper_import + content[match.end():]
                # Remove any remaining @ts-ignore comments that might be orphaned
                new_content = re.sub(r'\n\s*// @ts-ignore\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*;\s*\n', '\n', new_content)
            else:
                # If no imports found, just remove the conflict markers
                new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> cursor/fix-errors-and-merge-to-main-ec39', '', content, flags=re.DOTALL)
        else:
            # Fallback: remove all merge conflict markers
            new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> cursor/fix-errors-and-merge-to-main-ec39', '', content, flags=re.DOTALL)
        
        # Clean up any remaining empty lines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files with merge conflicts
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()