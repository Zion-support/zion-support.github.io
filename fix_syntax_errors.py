#!/usr/bin/env python3
"""Script to fix syntax errors in TypeScript files."""

import re
from pathlib import Path

def fix_error_boundary():
    """Fix ErrorBoundary.tsx duplicate code."""
    file_path = Path('/workspace/app/components/ErrorBoundary.tsx')
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    # Remove duplicate component stack section (lines around 115-120)
    # Look for the duplicate pattern
    new_lines = []
    skip_next_duplicate = False
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is the start of duplicate componentStack
        if i > 0 and 'this.state.errorInfo && (' in line:
            # Look ahead to see if this is a duplicate
            if i + 4 < len(lines) and 'Component Stack:' in lines[i+2]:
                # This looks like a duplicate, skip it
                # Skip until we find the closing )}
                while i < len(lines) and ')}' not in lines[i]:
                    i += 1
                i += 1  # Skip the )} line too
                continue
        
        new_lines.append(line)
        i += 1
    
    with open(file_path, 'w') as f:
        f.writelines(new_lines)
    
    print(f"✓ Fixed ErrorBoundary.tsx")

def fix_contact_page():
    """Fix contact/page.tsx JSX fragment issue."""
    file_path = Path('/workspace/app/contact/page.tsx')
    with open(file_path, 'r') as f:
        content = f.read()
    
    # The issue is likely mismatched JSX fragments or divs
    # Let's check if there's a return statement without proper wrapping
    lines = content.split('\n')
    
    # Find the problematic area around line 45
    if len(lines) > 45:
        # Check for common issues
        for i in range(max(0, 40), min(len(lines), 50)):
            # Remove extra closing tags or fragments
            if lines[i].strip() == '</>':
                # Check if this is a duplicate
                if i > 0 and '</div>' in lines[i-1]:
                    lines[i] = ''
    
    content = '\n'.join(lines)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed contact/page.tsx")

def fix_accessibility_enhancer():
    """Fix accessibilityEnhancer.ts unterminated template literal."""
    file_path = Path('/workspace/app/utils/accessibilityEnhancer.ts')
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Find unterminated template literals
    # Look for template literal that's not closed
    lines = content.split('\n')
    
    # Check around line 681
    if len(lines) > 680:
        # Look backwards from end to find unclosed template literal
        for i in range(len(lines) - 1, max(0, len(lines) - 20), -1):
            line = lines[i]
            # If we find an opening ` without closing
            if '`' in line and line.count('`') % 2 == 1:
                # Add closing backtick
                lines[i] = line.rstrip() + '`;'
                break
    
    content = '\n'.join(lines)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed accessibilityEnhancer.ts")

def fix_performance_monitor():
    """Fix performanceMonitor.ts unterminated template literal."""
    file_path = Path('/workspace/app/utils/performanceMonitor.ts')
    with open(file_path, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # Check around line 237
    if len(lines) > 236:
        # Look backwards from end to find unclosed template literal
        for i in range(len(lines) - 1, max(0, len(lines) - 20), -1):
            line = lines[i]
            # If we find an opening ` without closing
            if '`' in line and line.count('`') % 2 == 1:
                # Add closing backtick
                lines[i] = line.rstrip() + '`;'
                break
    
    content = '\n'.join(lines)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed performanceMonitor.ts")

def fix_newest_content_banner():
    """Fix NewestContent2025Banner.tsx JSX structure issues."""
    file_path = Path('/workspace/app/components/NewestContent2025Banner.tsx')
    
    try:
        with open(file_path, 'r') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return
    
    lines = content.split('\n')
    
    # This file has multiple JSX structure issues
    # The safest approach is to check for unmatched tags
    
    # Count opening and closing tags
    open_divs = 0
    for i, line in enumerate(lines):
        open_divs += line.count('<div')
        open_divs -= line.count('</div>')
    
    # If there are unmatched divs, add closing tags at the end
    if open_divs > 0:
        # Find the last meaningful line before the export
        for i in range(len(lines) - 1, -1, -1):
            if lines[i].strip() and not lines[i].strip().startswith('export'):
                # Add closing divs here
                lines.insert(i + 1, '      ' + '</div>' * open_divs)
                break
    elif open_divs < 0:
        # Remove extra closing divs
        for i in range(len(lines) - 1, -1, -1):
            if '</div>' in lines[i] and open_divs < 0:
                lines[i] = lines[i].replace('</div>', '', 1)
                open_divs += 1
                if open_divs >= 0:
                    break
    
    content = '\n'.join(lines)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed NewestContent2025Banner.tsx")

def main():
    print("Fixing syntax errors...")
    
    try:
        fix_error_boundary()
    except Exception as e:
        print(f"Error fixing ErrorBoundary: {e}")
    
    try:
        fix_contact_page()
    except Exception as e:
        print(f"Error fixing contact page: {e}")
    
    try:
        fix_accessibility_enhancer()
    except Exception as e:
        print(f"Error fixing accessibilityEnhancer: {e}")
    
    try:
        fix_performance_monitor()
    except Exception as e:
        print(f"Error fixing performanceMonitor: {e}")
    
    try:
        fix_newest_content_banner()
    except Exception as e:
        print(f"Error fixing NewestContent2025Banner: {e}")
    
    print("\nDone!")

if __name__ == '__main__':
    main()