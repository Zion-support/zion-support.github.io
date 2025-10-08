#!/usr/bin/env python3
import re

# Fix contact/page.tsx
try:
    with open('app/contact/page.tsx', 'r') as f:
        content = f.read()
    
    # The issue is likely that there's a <> at the beginning that matches the </> at the end
    # Check if the return statement starts with <>
    if 'return (' in content:
        # Find the return statement
        parts = content.split('return (')
        if len(parts) == 2:
            before = parts[0]
            after = parts[1]
            
            # Remove the <> if it exists right after return (
            after = after.lstrip()
            if after.startswith('<>'):
                after = after[2:].lstrip()
                
                # Also need to remove the </> before the closing )
                after = after.replace('</>\n  );', ');')
                after = after.replace('</>);', ');')
                
                content = before + 'return (\n    ' + after
    
    with open('app/contact/page.tsx', 'w') as f:
        f.write(content)
    
    print("✓ Fixed contact/page.tsx")
except Exception as e:
    print(f"Error fixing contact page: {e}")

# Fix ErrorBoundary.tsx
try:
    with open('app/components/ErrorBoundary.tsx', 'r') as f:
        lines = f.readlines()
    
    # Remove duplicate {this.state.errorInfo && ( blocks
    new_lines = []
    skip_count = 0
    found_first = False
    
    for i, line in enumerate(lines):
        if skip_count > 0:
            skip_count -= 1
            continue
        
        # Look for the pattern {this.state.errorInfo && (
        if '{this.state.errorInfo && (' in line:
            if found_first:
                # This is a duplicate, skip until )}
                j = i
                while j < len(lines):
                    if ')}' in lines[j]:
                        skip_count = j - i
                        break
                    j += 1
                continue
            else:
                found_first = True
        
        new_lines.append(line)
    
    with open('app/components/ErrorBoundary.tsx', 'w') as f:
        f.writelines(new_lines)
    
    print("✓ Fixed ErrorBoundary.tsx")
except Exception as e:
    print(f"Error fixing ErrorBoundary: {e}")

# Fix NewestContent2025Banner.tsx
try:
    with open('app/components/NewestContent2025Banner.tsx', 'r') as f:
        content = f.read()
    
    # Count divs
    open_count = content.count('<div')
    close_count = content.count('</div>')
    
    print(f"NewestContent2025Banner: {open_count} opening divs, {close_count} closing divs")
    
    if open_count > close_count:
        # Add missing closing divs before the export statement
        diff = open_count - close_count
        
        # Find the last closing div or section
        last_section = content.rfind('</section>')
        if last_section != -1:
            # Add closing divs after this
            closing_divs = '\n'.join(['      </div>'] * diff)
            content = content[:last_section] + closing_divs + '\n    ' + content[last_section:]
    
    elif close_count > open_count:
        # Remove extra closing divs
        diff = close_count - open_count
        
        # Remove the last few </div> tags
        for _ in range(diff):
            last_close = content.rfind('</div>')
            if last_close != -1:
                # Remove this closing tag
                content = content[:last_close] + content[last_close+6:]
    
    with open('app/components/NewestContent2025Banner.tsx', 'w') as f:
        f.write(content)
    
    print("✓ Fixed NewestContent2025Banner.tsx")
except Exception as e:
    print(f"Error fixing NewestContent2025Banner: {e}")

print("\nDone!")