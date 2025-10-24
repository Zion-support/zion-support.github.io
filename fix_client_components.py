#!/usr/bin/env python3
"""
Fix client component issues in Next.js App Router.
This script adds 'use client' directives and fixes event handler issues.
"""

import os
import re
import glob
from pathlib import Path

def fix_client_component_issues(file_path):
    """Fix client component issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if already has 'use client' or is a server component
        if "'use client'" in content or '"use client"' in content:
            return False
        
        # Check if file has client-side features that need 'use client'
        needs_client = False
        
        # Check for event handlers
        if re.search(r'onClick\s*=', content) or \
           re.search(r'onSubmit\s*=', content) or \
           re.search(r'onChange\s*=', content) or \
           re.search(r'onInput\s*=', content) or \
           re.search(r'onFocus\s*=', content) or \
           re.search(r'onBlur\s*=', content) or \
           re.search(r'onMouseOver\s*=', content) or \
           re.search(r'onMouseOut\s*=', content) or \
           re.search(r'onKeyDown\s*=', content) or \
           re.search(r'onKeyUp\s*=', content):
            needs_client = True
        
        # Check for browser APIs
        if re.search(r'window\.', content) or \
           re.search(r'document\.', content) or \
           re.search(r'navigator\.', content) or \
           re.search(r'localStorage\.', content) or \
           re.search(r'sessionStorage\.', content):
            needs_client = True
        
        # Check for React hooks
        if re.search(r'useState\s*\(', content) or \
           re.search(r'useEffect\s*\(', content) or \
           re.search(r'useContext\s*\(', content) or \
           re.search(r'useReducer\s*\(', content) or \
           re.search(r'useCallback\s*\(', content) or \
           re.search(r'useMemo\s*\(', content):
            needs_client = True
        
        # Check for state management
        if re.search(r'useState|useEffect|useContext|useReducer|useCallback|useMemo', content):
            needs_client = True
        
        if needs_client:
            # Add 'use client' directive at the top
            if content.startswith("import ") or content.startswith("'use client'") or content.startswith('"use client"'):
                # Insert after imports
                lines = content.split('\n')
                insert_index = 0
                for i, line in enumerate(lines):
                    if line.strip().startswith('import ') or line.strip().startswith('from '):
                        insert_index = i + 1
                    elif line.strip() and not line.strip().startswith('import ') and not line.strip().startswith('from '):
                        break
                
                lines.insert(insert_index, "'use client';")
                content = '\n'.join(lines)
            else:
                content = "'use client';\n" + content
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed client component: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing client component in {file_path}: {e}")
        return False

def remove_problematic_event_handlers(file_path):
    """Remove problematic event handlers from server components."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if it's a client component
        if "'use client'" in content or '"use client"' in content:
            return False
        
        # Remove problematic event handlers
        original_content = content
        
        # Remove onClick handlers
        content = re.sub(r'\s+onClick\s*=\s*\{[^}]*\}', '', content)
        
        # Remove other event handlers
        content = re.sub(r'\s+onSubmit\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onChange\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onInput\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onFocus\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onBlur\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onMouseOver\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onMouseOut\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onKeyDown\s*=\s*\{[^}]*\}', '', content)
        content = re.sub(r'\s+onKeyUp\s*=\s*\{[^}]*\}', '', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed event handlers from server component: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error removing event handlers from {file_path}: {e}")
        return False

def find_tsx_files():
    """Find all TypeScript React files."""
    files = []
    
    # Search for TypeScript React files
    patterns = [
        'app/**/*.tsx',
        'src/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files.append(file_path)
    
    return files

def main():
    """Main function to fix client component issues."""
    print("Starting client component fixes...")
    
    # Find all TSX files
    tsx_files = find_tsx_files()
    print(f"Found {len(tsx_files)} TSX files")
    
    fixed_count = 0
    removed_handlers_count = 0
    
    for file_path in tsx_files:
        # First try to add 'use client' where needed
        if fix_client_component_issues(file_path):
            fixed_count += 1
        else:
            # If not a client component, remove problematic event handlers
            if remove_problematic_event_handlers(file_path):
                removed_handlers_count += 1
    
    print(f"\nClient component fixes complete:")
    print(f"  - Added 'use client' to: {fixed_count} files")
    print(f"  - Removed event handlers from: {removed_handlers_count} files")

if __name__ == "__main__":
    main()