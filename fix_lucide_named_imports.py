#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to fix lucide-react import statements by converting to named imports.
"""

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
import os
import re
import glob

def fix_lucide_named_imports(file_path):
<<<<<<< HEAD
    """Fix lucide-react import statements by converting to named imports."""
=======
    """Fix lucide-react imports to use named imports instead of default imports"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Check if file has lucide-react default imports
        if 'import ' not in content or 'lucide-react' not in content:
            return False
        
        print(f"Fixing lucide-react imports in: {file_path}")
        
        # Find all individual lucide-react imports
        individual_imports = []
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i].strip()
            
            # Check if this is an individual lucide-react import
            if line.startswith('import ') and 'from \'lucide-react\'' in line:
                # Extract the component name
                match = re.match(r'import\s+(\w+)\s+from\s+\'lucide-react\';', line)
                if match:
                    component_name = match.group(1)
                    individual_imports.append(component_name)
                    # Skip this line (don't add it to new_lines)
                    i += 1
                    continue
            
            new_lines.append(lines[i])
            i += 1
        
        # If we found individual imports, replace them with a single named import
        if individual_imports:
            # Remove duplicates and sort
            unique_imports = sorted(list(set(individual_imports)))
            
            # Create the named import
            named_import = f"import {{ {', '.join(unique_imports)} }} from 'lucide-react';"
            
            # Find the first import line and replace the lucide-react imports
            import_inserted = False
            final_lines = []
            
            for line in new_lines:
                if line.startswith('import ') and not import_inserted:
                    # Insert the lucide-react import before other imports
                    final_lines.append(named_import)
                    import_inserted = True
                final_lines.append(line)
            
            if not import_inserted:
                # If no imports found, add at the beginning
                final_lines.insert(0, named_import)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(final_lines))
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all lucide-react import statements."""
    # Find all TypeScript/TSX files
    patterns = [
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that have individual lucide-react imports
    files_with_issues = []
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'from \'lucide-react\'' in content and 'import {' not in content:
                    files_with_issues.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_issues)} files with lucide-react import issues")
    
    fixed_count = 0
    for file_path in files_with_issues:
        if fix_lucide_named_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed lucide-react imports in {fixed_count} files")
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ec17

if __name__ == "__main__":
    main()