#!/usr/bin/env python3
"""
Fix function names in all page files to be valid JavaScript identifiers.
"""

import os
import re
import subprocess

def run_command(cmd):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=True)
        return result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {cmd}")
        return e.stdout, e.stderr

def fix_function_name(file_path):
    """Fix function name in a single page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the file path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
        
        # Convert to valid JavaScript identifier
        function_name = re.sub(r'[^a-zA-Z0-9_]', '', page_name.title().replace('-', '').replace('_', ''))
        if not function_name:
            function_name = 'Page'
        
        # Replace the function name in the content
        content = re.sub(
            r'export default function [^{]+{',
            f'export default function {function_name}Page() {{',
            content
        )
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
        
    except Exception as e:
        print(f"   ❌ Error fixing {file_path}: {e}")
        return False

def fix_all_function_names():
    """Fix function names in all page files."""
    print("🔧 Fixing function names in all page files...")
    
    # Find all page.tsx files
    stdout, stderr = run_command("find app -name 'page.tsx' -type f")
    page_files = [line.strip() for line in stdout.strip().split('\n') if line.strip()]
    
    print(f"📋 Found {len(page_files)} page files to fix")
    
    fixed_count = 0
    for file_path in page_files:
        print(f"🔨 Fixing: {file_path}")
        if fix_function_name(file_path):
            print(f"   ✅ Fixed {file_path}")
            fixed_count += 1
        else:
            print(f"   ❌ Failed to fix {file_path}")
    
    print(f"🎉 Fixed {fixed_count} out of {len(page_files)} page files!")

def main():
    """Main function."""
    print("🎯 Zion Tech Group - Fix Function Names")
    print("=" * 50)
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Fix all function names
    fix_all_function_names()
    
    # Add and commit the fixed files
    print("📝 Committing fixed files...")
    run_command("git add -A")
    run_command("git commit -m 'Fix function names in all page files - remove spaces'")
    
    print("✅ Function name fixes completed!")

if __name__ == "__main__":
    main()