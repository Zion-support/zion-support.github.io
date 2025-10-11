#!/usr/bin/env python3
"""
Script to fix missing exports and unused variables.
"""

import os
import re
import sys
from pathlib import Path

def fix_file_exports_and_unused(file_path):
    """Fix exports and unused variables in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        modified = False
        
        # Fix 1: Add missing export default if component is defined but not exported
        if 'const ' in content and 'React.FC' in content and 'export default' not in content:
            # Find the component name
            match = re.search(r'const\s+(\w+)\s*:\s*React\.FC', content)
            if match:
                component_name = match.group(1)
                # Add export at the end
                content += f'\n\nexport default {component_name};'
                modified = True
        
        # Fix 2: Remove unused imports (basic approach)
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Skip lines with unused imports that are clearly not used
            if 'import' in line and any(unused in line for unused in [
                'Helmet', 'Wifi', 'BarChart', 'Brain', 'Target', 'Zap', 'Shield',
                'Navigation', 'Footer', 'CheckCircle'
            ]):
                # Check if the import is actually used in the file
                import_name = re.search(r'import\s*\{([^}]+)\}', line)
                if import_name:
                    imports = [imp.strip() for imp in import_name.group(1).split(',')]
                    used_imports = []
                    for imp in imports:
                        if imp in content.replace(line, ''):  # Check if used elsewhere
                            used_imports.append(imp)
                    
                    if used_imports:
                        new_line = line.replace(import_name.group(1), ', '.join(used_imports))
                        new_lines.append(new_line)
                    else:
                        # Remove the entire import line
                        continue
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        if len(new_lines) != len(lines):
            content = '\n'.join(new_lines)
            modified = True
        
        # Fix 3: Add export for components that are defined but not exported
        if 'const ' in content and 'React.FC' in content and 'export default' not in content:
            # Find the component name
            match = re.search(r'const\s+(\w+)\s*:\s*React\.FC', content)
            if match:
                component_name = match.group(1)
                # Add export at the end
                content += f'\n\nexport default {component_name};'
                modified = True
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files
    file_patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in file_patterns:
        for file_path in workspace.glob(pattern):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in str(file_path) or '.git' in str(file_path):
                continue
                
            files_processed += 1
            
            if fix_file_exports_and_unused(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files with export/unused issues")
    
    return files_fixed > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)