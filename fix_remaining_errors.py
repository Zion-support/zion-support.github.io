#!/usr/bin/env python3
"""
Script to fix remaining parsing errors after merge conflict resolution.
This script will:
1. Fix JSX syntax errors
2. Fix missing closing tags
3. Fix malformed JSX fragments
4. Clean up any remaining merge conflict markers
"""

import os
import re
import glob
from pathlib import Path

def find_files_with_errors(directory):
    """Find all files that might have parsing errors."""
    error_files = []
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.turbo'}
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts', '*.jsx', '*.js']
    
    for ext in extensions:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            # Skip if in excluded directory
            if any(excluded in file_path for excluded in exclude_dirs):
                continue
                
            # Skip if it's a directory
            if os.path.isdir(file_path):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Check for common error patterns
                    if any(pattern in content for pattern in [
                        '<<<<<<< HEAD', '=======', '>>>>>>> ',
                        'Expected corresponding closing tag',
                        'Unexpected token',
                        'JSX fragment has no corresponding closing tag'
                    ]):
                        error_files.append(file_path)
            except (UnicodeDecodeError, PermissionError, IsADirectoryError):
                continue
    
    return error_files

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors."""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix merge conflict markers that might have been missed
        if line.strip().startswith('<<<<<<< HEAD') or line.strip().startswith('=======') or line.strip().startswith('>>>>>>> '):
            i += 1
            continue
        
        # Fix malformed JSX fragments
        if '<>' in line and '</>' not in line:
            # Look for the closing fragment in the next few lines
            j = i + 1
            found_closing = False
            while j < min(i + 10, len(lines)):
                if '</>' in lines[j]:
                    found_closing = True
                    break
                j += 1
            
            if not found_closing:
                # Add closing fragment at the end of the function/component
                # This is a simple heuristic - look for the last closing brace
                for k in range(len(lines) - 1, i, -1):
                    if lines[k].strip() == '}' and 'export default' not in lines[k]:
                        lines.insert(k, '    </>')
                        break
        
        # Fix missing closing tags for common elements
        if '<div' in line and not line.strip().endswith('/>') and not line.strip().endswith('>'):
            # Look for the closing tag
            j = i + 1
            found_closing = False
            while j < min(i + 50, len(lines)):
                if '</div>' in lines[j]:
                    found_closing = True
                    break
                j += 1
            
            if not found_closing:
                # Add closing tag
                for k in range(len(lines) - 1, i, -1):
                    if lines[k].strip() == '}' and 'export default' not in lines[k]:
                        lines.insert(k, '      </div>')
                        break
        
        # Fix malformed JSX attributes
        if '>' in line and not line.strip().endswith('>') and not line.strip().endswith('/>'):
            # Look for the next line that might complete this tag
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                if next_line.strip().startswith('>'):
                    # Merge the lines
                    lines[i] = line + next_line.strip()
                    lines.pop(i + 1)
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def fix_specific_errors(content):
    """Fix specific common errors."""
    # Remove any remaining merge conflict markers
    content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]*\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?>>>>>>> [^\n]*\n', '', content, flags=re.DOTALL)
    
    # Fix common JSX syntax issues
    content = re.sub(r'<(\w+)([^>]*?)\s*>\s*$', r'<\1\2>', content, flags=re.MULTILINE)
    
    # Fix malformed fragments
    content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags for fragments
    if '<>' in content and '</>' not in content:
        # Add closing fragment before the last closing brace
        content = re.sub(r'(\s+)(\})\s*$', r'\1  </>\n\1\2', content, flags=re.MULTILINE)
    
    # Clean up excessive whitespace
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    return content

def clean_up_file(file_path):
    """Clean up a specific file by fixing parsing errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing parsing errors in: {file_path}")
        
        # Apply fixes
        content = fix_jsx_syntax(content)
        content = fix_specific_errors(content)
        
        # Ensure proper file ending
        content = content.strip() + '\n'
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all parsing errors."""
    workspace_dir = '/workspace'
    
    print("Searching for files with parsing errors...")
    error_files = find_files_with_errors(workspace_dir)
    
    if not error_files:
        print("No files with parsing errors found.")
        return
    
    print(f"Found {len(error_files)} files with potential parsing errors:")
    for file_path in error_files[:10]:  # Show first 10
        print(f"  - {file_path}")
    if len(error_files) > 10:
        print(f"  ... and {len(error_files) - 10} more")
    
    print("\nFixing parsing errors...")
    fixed_count = 0
    
    for file_path in error_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed parsing errors in {fixed_count} files.")

if __name__ == "__main__":
    main()