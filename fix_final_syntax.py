#!/usr/bin/env python3
"""
Fix final syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Fix import statements with commas
        content = re.sub(r'import\s+([^,]+),\s*\n\s*import\s+', r'import \1;\nimport ', content)
        content = re.sub(r'import\s+([^,]+),\s*$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix 2: Fix function declarations
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*', r'const \1: React.FC = () => {\n  ', content)
        
        # Fix 3: Fix object syntax
        content = re.sub(r'\{\s*;\s*', '{\n    ', content)
        content = re.sub(r';\s*\}\s*;', '\n  },\n  {', content)
        content = re.sub(r';\s*\}\s*\]\s*;', '\n  }\n];', content)
        
        # Fix 4: Fix JSX syntax
        content = re.sub(r'return\s*\(\s*<>\s*;\s*', 'return (\n    <>\n      ', content)
        content = re.sub(r'<>\s*;\s*', '<>\n      ', content)
        content = re.sub(r';\s*</>\s*;\s*', '\n    </>\n  );', content)
        
        # Fix 5: Fix property syntax
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*', r'\1: "\2",\n    ', content)
        content = re.sub(r'(\w+):\s*(\d+)\s*;\s*', r'\1: \2,\n    ', content)
        content = re.sub(r'(\w+):\s*(true|false)\s*;\s*', r'\1: \2,\n    ', content)
        
        # Fix 6: Fix array syntax
        content = re.sub(r'\[\s*"([^"]*)"\s*;\s*', r'["\1",\n        ', content)
        content = re.sub(r';\s*"([^"]*)"\s*;\s*', r',\n        "\1",\n        ', content)
        content = re.sub(r';\s*"([^"]*)"\s*\]\s*;\s*', r',\n        "\1"\n      ],\n    ', content)
        
        # Fix 7: Fix JSX elements
        content = re.sub(r'<(\w+)\s+className="([^"]*)"\s*/>\s*;\s*', r'<\1 className="\2" />,\n    ', content)
        
        # Fix 8: Fix trailing semicolons in wrong places
        content = re.sub(r';\s*\n\s*(\w+)', r',\n    \1', content)
        
        # Fix 9: Fix missing closing braces
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*$', r'\1: "\2"', content, flags=re.MULTILINE)
        
        # Fix 10: Fix React component structure
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*return\s*\(\s*<>\s*;\s*', 
                        r'const \1: React.FC = () => {\n  return (\n    <>\n      ', content)
        
        # Fix 11: Fix export statements
        content = re.sub(r'export\s+default\s+(\w+)\s*;\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Fix 12: Fix specific patterns that are causing errors
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"]\s*;\s*import', 'import React from \'react\';\nimport', content)
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"]\s*;\s*\{', 'import React from \'react\';\nimport {', content)
        
        # Fix 13: Fix function component syntax
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*return\s*\(\s*<>\s*;\s*', 
                        r'const \1: React.FC = () => {\n  return (\n    <>\n      ', content)
        
        # Fix 14: Fix object property syntax
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*(\w+)', r'\1: "\2",\n    \3', content)
        
        # Fix 15: Fix array syntax
        content = re.sub(r'\[\s*"([^"]*)"\s*;\s*"([^"]*)"\s*;\s*', r'["\1",\n        "\2",\n        ', content)
        
        # Fix 16: Fix standalone semicolons
        content = re.sub(r'^\s*;\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 17: Fix import statements with commas at the end
        content = re.sub(r'import\s+([^,]+),\s*$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix 18: Fix multiple import statements on same line
        content = re.sub(r'import\s+([^,]+),\s*\n\s*import\s+', r'import \1;\nimport ', content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_syntax_errors():
    """Find files that likely have syntax errors."""
    # Get the files mentioned in the linting errors
    problematic_files = [
        'App-backup.tsx',
        'App-minimal.tsx', 
        'App-optimized.tsx',
        'App.tsx',
        'EnhancedFooter.tsx'
    ]
    
    return [f for f in problematic_files if os.path.exists(f)]

def main():
    """Main function to fix syntax errors."""
    print("🔍 Fixing final syntax errors...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    files_to_fix = find_files_with_syntax_errors()
    
    if not files_to_fix:
        print("✅ No problematic files found!")
        return
    
    print(f"📁 Found {len(files_to_fix)} files to fix:")
    for file_path in files_to_fix:
        print(f"  - {file_path}")
    
    print("\n🔧 Fixing syntax errors...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_syntax_errors(file_path):
            print(f"  ✅ Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\n✅ Successfully fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()