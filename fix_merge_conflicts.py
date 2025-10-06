#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/JavaScript files by resolving import conflicts
and choosing the cleaner destructured import approach.
"""

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
        original_content = content
        
        # Pattern to match merge conflict blocks with imports
        conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_import_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # Look for import statements in both sides
            head_imports = re.findall(r'import\s+{([^}]+)}\s+from\s+[\'"]([^\'"]+)[\'"]', head_content)
            branch_imports = re.findall(r'import\s+([^{][^,\s]+)\s+from\s+[\'"]([^\'"]+)[\'"]', branch_content)
            
            # If we have destructured imports in HEAD, prefer those
            if head_imports:
                for imports, module in head_imports:
                    # Clean up the imports
                    clean_imports = re.sub(r'\s+', ' ', imports.strip())
                    return f"import {{ {clean_imports} }} from '{module}';"
            
            # If we have individual imports in branch, convert to destructured
            if branch_imports:
                # Group by module
                module_imports = {}
                for imp, module in branch_imports:
                    if module not in module_imports:
                        module_imports[module] = []
                    module_imports[module].append(imp.strip())
                
                result = []
                for module, imports in module_imports.items():
                    clean_imports = ', '.join(sorted(set(imports)))
                    result.append(f"import {{ {clean_imports} }} from '{module}';")
                
                return '\n'.join(result)
            
            # If no clear import pattern, return the HEAD content
            return head_content
>>>>>>> origin/merge-fixes-20251005-193002
    """Main function to fix merge conflicts in all relevant files."""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1