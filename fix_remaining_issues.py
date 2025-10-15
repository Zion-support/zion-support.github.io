#!/usr/bin/env python3
"""
Script to fix remaining import and React issues
"""
import os
import re
import glob

def fix_remaining_issues(file_path):
    """Fix remaining import and React issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has React hooks or components
        has_react_hooks = any(hook in content for hook in ['useState', 'useEffect', 'memo', 'lazy', 'Suspense'])
        if not has_react_hooks and 'React.FC' not in content:
            return False
        
        # Add React import if missing and needed
        if has_react_hooks and 'import React' not in content and 'from "react"' not in content:
            # Find the first import line
            lines = content.split('\n')
            import_index = 0
            for i, line in enumerate(lines):
                if line.strip().startswith('import '):
                    import_index = i
                    break
            
            # Add React import
            react_import = "import React, { useState, useEffect, memo, lazy, Suspense } from 'react';"
            lines.insert(import_index, react_import)
            content = '\n'.join(lines)
        
        # Fix duplicate imports in lucide-react
        if 'lucide-react' in content:
            # Find all lucide-react imports
            lines = content.split('\n')
            lucide_lines = []
            other_lines = []
            
            for line in lines:
                if 'lucide-react' in line:
                    lucide_lines.append(line)
                else:
                    other_lines.append(line)
            
            if lucide_lines:
                # Extract all unique imports
                all_imports = set()
                for line in lucide_lines:
                    if '{' in line and '}' in line:
                        imports_part = line.split('{')[1].split('}')[0]
                        imports = [imp.strip() for imp in imports_part.split(',') if imp.strip()]
                        all_imports.update(imports)
                
                # Create single lucide-react import
                if all_imports:
                    # Find the first lucide line position
                    first_lucide_index = 0
                    for i, line in enumerate(other_lines):
                        if 'lucide-react' in line:
                            first_lucide_index = i
                            break
                    
                    # Replace all lucide lines with single import
                    new_lucide_import = f"import {{ {', '.join(sorted(all_imports))} }} from 'lucide-react';"
                    other_lines[first_lucide_index] = new_lucide_import
                    
                    # Remove other lucide lines
                    other_lines = [line for line in other_lines if 'lucide-react' not in line or line == new_lucide_import]
                    
                    content = '\n'.join(other_lines)
        
        # Remove unused imports (basic cleanup)
        lines = content.split('\n')
        cleaned_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                # Check if this import is actually used
                if 'lucide-react' in line:
                    # Keep lucide-react imports for now
                    cleaned_lines.append(line)
                elif 'react' in line:
                    # Keep react imports
                    cleaned_lines.append(line)
                else:
                    # For other imports, check if they're used
                    if 'from' in line:
                        import_name = line.split('{')[1].split('}')[0].strip() if '{' in line else line.split(' ')[1]
                        if import_name in content:
                            cleaned_lines.append(line)
            else:
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed remaining issues in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_remaining_issues(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed remaining issues in {files_fixed} files")

if __name__ == "__main__":
    main()