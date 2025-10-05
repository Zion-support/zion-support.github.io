#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/TSX files.
Resolves conflicts by choosing the correct import pattern and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflicts with imports
        conflict_pattern = r'<<<<<<< HEAD\s*\n\s*import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"];\s*\n\s*;\s*\n\s*;\s*\n\s*;\s*\n\s*;\s*\n=======\s*\n((?:import\s+\w+\s+from\s+[\'"][^\'"]+[\'"];\s*\n?)+)>>>>>>> [^\n]+\n'
        
        # Find all conflicts
        conflicts = re.findall(conflict_pattern, content, re.MULTILINE | re.DOTALL)
        
        for match in conflicts:
            destructured_imports = match[0].strip()
            module_name = match[1].strip()
            individual_imports = match[2].strip()
            
            # Extract individual import names
            individual_names = re.findall(r'import\s+(\w+)\s+from', individual_imports)
            
            # Create the correct import statement
            if individual_names:
                # Use the destructured import format
                correct_import = f"import {{ {', '.join(individual_names)} }} from '{module_name}';"
            else:
                # Fallback to individual imports if destructured parsing fails
                correct_import = individual_imports
            
            # Replace the entire conflict block
            old_conflict = f"<<<<<<< HEAD\n\nimport {{{destructured_imports}}} from '{module_name}';\n\n;\n;\n;\n;\n=======\n{individual_imports}>>>>>>> cursor/fix-errors-and-merge-to-main-ec39\n"
            content = content.replace(old_conflict, correct_import + '\n')
        
        # Handle simpler conflict patterns
        # Pattern for conflicts with just import statements
        simple_conflict_pattern = r'<<<<<<< HEAD\s*\n\s*import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"];\s*\n\s*;\s*\n\s*;\s*\n\s*;\s*\n\s*;\s*\n=======\s*\n((?:import\s+\w+\s+from\s+[\'"][^\'"]+[\'"];\s*\n?)+)>>>>>>> [^\n]+\n'
        
        # More general pattern for any merge conflict
        general_conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # If both contain imports, prefer the destructured format
            if 'import {' in head_content and 'import ' in branch_content:
                # Extract imports from both sides
                head_imports = re.findall(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', head_content)
                branch_imports = re.findall(r'import\s+(\w+)\s+from\s*[\'"]([^\'"]+)[\'"]', branch_content)
                
                if head_imports and branch_imports:
                    # Use the destructured format
                    module_name = head_imports[0][1]
                    all_names = set()
                    
                    # Add names from destructured import
                    for names_str, _ in head_imports:
                        names = [name.strip() for name in names_str.split(',')]
                        all_names.update(names)
                    
                    # Add names from individual imports
                    for name, _ in branch_imports:
                        all_names.add(name)
                    
                    return f"import {{ {', '.join(sorted(all_names))} }} from '{module_name}';\n"
            
            # If one side is cleaner, use that
            if len(head_content) < len(branch_content) and head_content:
                return head_content + '\n'
            elif branch_content:
                return branch_content + '\n'
            else:
                return head_content + '\n'
        
        # Apply the general conflict resolution
        content = re.sub(general_conflict_pattern, resolve_conflict, content, flags=re.MULTILINE | re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_to_fix = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    files_to_fix.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_to_fix)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()