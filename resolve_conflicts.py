#!/usr/bin/env python3
"""Script to resolve merge conflict markers in files."""

import re
import sys
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts by keeping the HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Pattern to match merge conflict blocks
    # <<<<<<< HEAD
    # ... content A ...
    # =======
    # ... content B ...
    # >>>>>>> branch
    
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
    
    # Check if there are conflicts
    if '<<<<<<< HEAD' not in content:
        print(f"No conflicts found in {file_path}")
        return False
    
    # For most cases, we'll keep the HEAD version (first part)
    # But we need to be smarter about it
    resolved_content = content
    
    # Find all conflict blocks
    conflicts = list(re.finditer(pattern, content, re.DOTALL))
    
    if conflicts:
        print(f"Found {len(conflicts)} conflict blocks in {file_path}")
        
        # Resolve from end to start to preserve positions
        for match in reversed(conflicts):
            head_content = match.group(1)
            other_content = match.group(2)
            
            # Choose the better version (non-empty, longer, or HEAD)
            if head_content.strip() and not other_content.strip():
                resolved = head_content + '\n'
            elif other_content.strip() and not head_content.strip():
                resolved = other_content + '\n'
            elif len(head_content.strip()) >= len(other_content.strip()):
                resolved = head_content + '\n'
            else:
                resolved = other_content + '\n'
            
            # Replace the entire conflict block
            resolved_content = resolved_content[:match.start()] + resolved + resolved_content[match.end():]
        
        # Write the resolved content
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✓ Resolved conflicts in {file_path}")
            return True
        except Exception as e:
            print(f"Error writing {file_path}: {e}")
            return False
    else:
        # Try a simpler pattern for nested conflicts
        lines = content.split('\n')
        resolved_lines = []
        skip_until_marker = None
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            if skip_until_marker:
                if skip_until_marker in line:
                    skip_until_marker = None
                i += 1
                continue
            
            if line.startswith('<<<<<<< HEAD'):
                # Start of conflict - collect HEAD content
                i += 1
                head_lines = []
                while i < len(lines) and not lines[i].startswith('======='):
                    head_lines.append(lines[i])
                    i += 1
                
                # Skip the ======= line
                i += 1
                
                # Skip until >>>>>>> marker
                while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                    i += 1
                
                # Skip the >>>>>>> line
                i += 1
                
                # Keep the HEAD content
                resolved_lines.extend(head_lines)
            else:
                resolved_lines.append(line)
                i += 1
        
        resolved_content = '\n'.join(resolved_lines)
        
        # Write the resolved content
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✓ Resolved conflicts in {file_path}")
            return True
        except Exception as e:
            print(f"Error writing {file_path}: {e}")
            return False

def main():
    files_to_fix = [
        'app/App.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/enterprise/page.tsx',
        'app/setupTests.tsx',
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        full_path = Path('/workspace') / file_path
        if full_path.exists():
            if resolve_conflicts_in_file(full_path):
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"\nFixed {fixed_count} files")
    return 0 if fixed_count > 0 else 1

if __name__ == '__main__':
    sys.exit(main())