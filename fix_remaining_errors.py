#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in TypeScript/JSX files
"""

import os
import re
import glob

def fix_remaining_errors(file_path):
    """Fix remaining syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate export default statements
        lines = content.split('\n')
        export_defaults = []
        other_lines = []
        
        for line in lines:
            if line.strip().startswith('export default'):
                export_defaults.append(line)
            else:
                other_lines.append(line)
        
        # Keep only the first export default
        if len(export_defaults) > 1:
            other_lines.append(export_defaults[0])
            content = '\n'.join(other_lines)
        
        # Fix 2: Fix malformed function syntax
        content = re.sub(r'\);\s*\n\s*};\s*\n\s*$', ');\n}', content)
        
        # Fix 3: Fix malformed JSX structure
        content = re.sub(r'<div className="min-h-screen[^"]*">\s*<div className="[^"]*">\s*<h1>([^<]+)</h1>', 
                        r'<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1>\1</h1>', content)
        
        # Fix 4: Fix missing semicolons
        content = re.sub(r'const\s+\w+\s*=\s*new\s+Date\(\)\.getFullYear\(\)\n', 'const \\1 = new Date().getFullYear();\n', content)
        
        # Fix 5: Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)"\s*,', r'className="\1"', content)
        
        # Fix 6: Fix malformed grid classes
        content = re.sub(r'grid-cols-1 md:\s*grid-cols-2', 'grid-cols-1 md:grid-cols-2', content)
        
        # Fix 7: Fix malformed JSX structure with commas
        content = re.sub(r'<div className="grid[^"]*">,', r'<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">', content)
        
        # Fix 8: Fix malformed footer structure
        content = re.sub(r'<footer className="[^"]*">\s*</footer><div className="[^"]*">,', 
                        r'<footer className="bg-slate-900 text-white">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_remaining_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed remaining errors in {files_fixed} files")

if __name__ == "__main__":
    main()