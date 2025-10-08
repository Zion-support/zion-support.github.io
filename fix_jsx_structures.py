#!/usr/bin/env python3
"""
Fix JSX structure issues in remaining files
"""

from pathlib import Path

def fix_error_boundary():
    """Fix missing closing div in ErrorBoundary"""
    file_path = Path('app/components/ErrorBoundary.tsx')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add missing closing div before the closing of return statement
    content = content.replace(
        '              )}\n          </div>\n      );',
        '              )}\n          </div>\n        </div>\n      );'
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed ErrorBoundary.tsx")

def fix_contact_page():
    """Fix JSX fragment issues in contact page"""
    file_path = Path('app/contact/page.tsx')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Remove the fragment wrapper, it's causing issues
    fixed_lines = []
    for line in lines:
        if line.strip() == '<>':
            continue
        elif line.strip() == '</>':
            continue
        else:
            fixed_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print(f"✓ Fixed contact/page.tsx")

def fix_newest_banner():
    """Read and completely rebuild NewestContent2025Banner with proper structure"""
    file_path = Path('app/components/NewestContent2025Banner.tsx')
    
    # For now, let's see if we can identify the exact issues
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count div open/close tags
    open_divs = content.count('<div')
    close_divs = content.count('</div>')
    
    print(f"NewestContent2025Banner.tsx: {open_divs} opening divs, {close_divs} closing divs")
    
    # Count Link tags
    open_links = content.count('<Link')
    close_links = content.count('</Link>')
    
    print(f"NewestContent2025Banner.tsx: {open_links} opening Links, {close_links} closing Links")
    
    # Let's try to find malformed sections and remove them
    # Look for specific patterns that appear to be duplicated or malformed
    
    # Remove lines with standalone closing tags that don't match
    lines = content.split('\n')
    
    # Track brace/tag balance
    fixed_lines = []
    skip_until_next_article = False
    
    for i, line in enumerate(lines):
        # Skip obvious broken duplicate blocks
        if 'Read Full Article' in line and i > 0:
            # Check if this is a duplicate pattern
            if any('Read Full Article' in lines[j] for j in range(max(0, i-5), i)):
                continue
        
        fixed_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print(f"✓ Attempted fix for NewestContent2025Banner.tsx")

def main():
    print("Fixing JSX structure issues...\n")
    
    fix_error_boundary()
    fix_contact_page()
    fix_newest_banner()
    
    print("\nStructural fixes applied!")

if __name__ == '__main__':
    main()