#!/usr/bin/env python3
"""
Fix test files with syntax errors.
"""

import os
import re
import glob
from pathlib import Path

def fix_test_file(file_path):
    """Fix common test file syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Fix import statements with commas
        content = re.sub(r'import\s+([^,]+),\s*import\s+', r'import \1;\nimport ', content)
        content = re.sub(r'import\s+([^,]+),\s*$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix 2: Fix function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*;\s*', r'const \1 = () => {\n  ', content)
        
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
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*;\s*return\s*\(\s*<>\s*;\s*', 
                        r'const \1 = () => {\n  return (\n    <>\n      ', content)
        
        # Fix 11: Fix export statements
        content = re.sub(r'export\s+default\s+(\w+)\s*;\s*$', r'export default \1;', content, flags=re.MULTILINE)
        
        # Fix 12: Fix specific patterns that are causing errors
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"]\s*;\s*import', 'import React from \'react\';\nimport', content)
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"]\s*;\s*\{', 'import React from \'react\';\nimport {', content)
        
        # Fix 13: Fix function component syntax
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*;\s*return\s*\(\s*<>\s*;\s*', 
                        r'const \1 = () => {\n  return (\n    <>\n      ', content)
        
        # Fix 14: Fix object property syntax
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;\s*(\w+)', r'\1: "\2",\n    \3', content)
        
        # Fix 15: Fix array syntax
        content = re.sub(r'\[\s*"([^"]*)"\s*;\s*"([^"]*)"\s*;\s*', r'["\1",\n        "\2",\n        ', content)
        
        # Fix 16: Fix test-specific patterns
        content = re.sub(r'describe\s*\(\s*[\'"]\w+[\'"]\s*,\s*\(\s*\)\s*=>\s*\{\s*;\s*', r'describe(\'Advanced Components\', () => {\n  ', content)
        content = re.sub(r'it\s*\(\s*[\'"]\w+[\'"]\s*,\s*\(\s*\)\s*=>\s*\{\s*;\s*', r'it(\'should render without crashing\', () => {\n    ', content)
        content = re.sub(r'beforeEach\s*\(\s*\(\s*\)\s*=>\s*\{\s*;\s*', r'beforeEach(() => {\n    ', content)
        content = re.sub(r'afterEach\s*\(\s*\(\s*\)\s*=>\s*\{\s*;\s*', r'afterEach(() => {\n    ', content)
        
        # Fix 17: Fix JSX in tests
        content = re.sub(r'<(\w+)></(\w+)>\s*<div>([^<]+)</div>\s*</\2>', r'<\1>\n        <div>\3</div>\n      </\2>', content)
        
        # Fix 18: Fix expect statements
        content = re.sub(r'expect\s*\(\s*([^)]+)\s*\)\s*\.\s*toBeInTheDocument\s*\(\s*\)\s*;\s*$', r'expect(\1).toBeInTheDocument();', content, flags=re.MULTILINE)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_test_files():
    """Find all test files that might have syntax errors."""
    file_extensions = ['*.test.tsx', '*.test.ts', '*.spec.tsx', '*.spec.ts']
    test_files = []
    
    for ext in file_extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
            test_files.append(file_path)
    
    return test_files

def main():
    """Main function to fix test files."""
    print("🔍 Fixing test files...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    test_files = find_test_files()
    
    if not test_files:
        print("✅ No test files found!")
        return
    
    print(f"📁 Found {len(test_files)} test files")
    
    print("\n🔧 Fixing test file syntax errors...")
    
    fixed_count = 0
    for file_path in test_files:
        if fix_test_file(file_path):
            print(f"  ✅ Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\n✅ Successfully fixed syntax errors in {fixed_count} test files")

if __name__ == "__main__":
    main()