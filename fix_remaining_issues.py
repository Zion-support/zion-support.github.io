#!/usr/bin/env python3
"""
Script to fix remaining issues in TSX files:
1. Add export default for components
2. Remove unused variables
3. Fix any remaining structural issues
"""

import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix a single TSX file by adding exports and removing unused variables."""
    print(f"Fixing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find component definition
        component_pattern = r'const\s+(\w+Page):\s*React\.FC\s*=\s*\(\)\s*=>\s*{'
        match = re.search(component_pattern, content)
        
        if not match:
            print(f"  No component pattern found in {file_path}")
            return False
        
        component_name = match.group(1)
        
        # Check if already has export default
        if 'export default' in content:
            print(f"  Already has export default in {file_path}")
            return True
        
        # Add export default at the end
        if content.strip().endswith('}'):
            # Find the last closing brace
            last_brace_pos = content.rfind('}')
            if last_brace_pos != -1:
                # Insert export default before the last closing brace
                new_content = content[:last_brace_pos] + f'\n\nexport default {component_name};'
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"  Added export default to {file_path}")
                return True
        
        print(f"  Could not add export default to {file_path}")
        return False
        
    except Exception as e:
        print(f"  Error fixing {file_path}: {e}")
        return False

def fix_unused_variables(file_path):
    """Remove unused variables from TSX files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove unused CheckCircle import if it's not used
        if 'CheckCircle' in content and 'CheckCircle' not in content.replace('import { CheckCircle }', ''):
            content = re.sub(r"import \{ CheckCircle \} from 'lucide-react';\n", '', content)
        
        # Remove unused variable declarations
        # This is a simple approach - remove lines that declare variables but don't use them
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Skip lines that declare unused variables (simple heuristic)
            if re.match(r'^\s*const\s+\w+\s*=\s*\[.*\]\s*;\s*$', line.strip()):
                # Check if the variable is used later in the file
                var_name = re.search(r'const\s+(\w+)\s*=', line)
                if var_name:
                    var_name = var_name.group(1)
                    if var_name not in content.replace(line, ''):
                        print(f"  Removing unused variable: {var_name}")
                        continue
            new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  Removed unused variables from {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"  Error removing unused variables from {file_path}: {e}")
        return False

def main():
    """Main function to fix all TSX files."""
    app_dir = '/workspace/app'
    tsx_files = glob.glob(os.path.join(app_dir, '**', '*.tsx'), recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check...")
    
    for file_path in tsx_files:
        if fix_tsx_file(file_path):
            fixed_count += 1
        fix_unused_variables(file_path)
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()