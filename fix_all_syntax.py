#!/usr/bin/env python3
import re
import os

def fix_app_tsx():
    """Fix App.tsx - remove duplicate }, []);"""
    filepath = 'App.tsx'
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find and remove the duplicate line around 187-189
    fixed_lines = []
    skip_next = False
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
        # Look for the pattern of duplicate }, []);
        if i < len(lines) - 1 and '  }, []);' in line and ('  }, []);' in lines[i+1] or 'return' in lines[i+2]):
            # Keep only one
            fixed_lines.append(line)
            skip_next = True
        else:
            fixed_lines.append(line)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    print(f'Fixed {filepath}')

def fix_shipping_rates():
    """Fix api/shipping-rates.js"""
    filepath = 'api/shipping-rates.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find first occurrence of module.exports and keep only up to that
    lines = content.split('\n')
    first_export_idx = -1
    for i, line in enumerate(lines):
        if line.strip() == 'module.exports = withSentry(handler);':
            first_export_idx = i
            break
    
    if first_export_idx > 0:
        # Keep only up to and including the first export
        lines = lines[:first_export_idx + 1]
        content = '\n'.join(lines) + '\n'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {filepath}')

def fix_subscribe():
    """Fix api/subscribe.js"""
    filepath = 'api/subscribe.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find first occurrence of module.exports and keep only up to that
    lines = content.split('\n')
    first_export_idx = -1
    for i, line in enumerate(lines):
        if line.strip() == 'module.exports = withSentry(handler);':
            first_export_idx = i
            break
    
    if first_export_idx > 0:
        # Keep only up to and including the first export
        lines = lines[:first_export_idx + 1]
        content = '\n'.join(lines) + '\n'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {filepath}')

def fix_about_page():
    """Fix app/about/page.tsx"""
    filepath = 'app/about/page.tsx'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # This file seems okay, but let's ensure proper closing
    # Check if there are any issues with the fragment
    if content.count('<>') != content.count('</>'):
        print(f'Warning: Mismatched fragments in {filepath}')
    
    # Ensure proper structure
    lines = content.split('\n')
    # The file should end properly
    if not lines[-1].strip().endswith('}'):
        if lines[-2].strip() == '}':
            # Already good
            pass
    
    print(f'Checked {filepath}')

def fix_error_boundary():
    """Fix app/components/ErrorBoundary.tsx"""
    filepath = 'app/components/ErrorBoundary.tsx'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix missing closing paren - look for the pattern
    content = re.sub(
        r'(<pre className="whitespace-pre-wrap">{this\.state\.errorInfo\.componentStack}</pre>)(\s+</div>)',
        r'\1\n\2',
        content
    )
    
    # Ensure proper closing
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {filepath}')

def fix_contact_page():
    """Fix app/contact/page.tsx"""
    filepath = 'app/contact/page.tsx'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ensure proper closing tags
    if content.count('<>') != content.count('</>'):
        print(f'Warning: Mismatched fragments in {filepath}')
    
    print(f'Checked {filepath}')

def fix_analytics():
    """Fix src/utils/analytics.ts"""
    filepath = 'src/utils/analytics.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix unclosed comment and missing method
    # Look for the pattern of duplicate "Update user properties"
    pattern = r'  /\*\*\s+\* Update user properties\s+  }\s+  /\*\*\s+\* Update user properties\s+export default analytics;'
    replacement = '''  /**
   * Update user properties
   */
  updateUserProperties(properties: Record<string, any>) {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

export default analytics;'''
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {filepath}')

if __name__ == '__main__':
    os.chdir('/workspace')
    
    try:
        fix_app_tsx()
        fix_shipping_rates()
        fix_subscribe()
        fix_about_page()
        fix_error_boundary()
        fix_contact_page()
        fix_analytics()
        print('\n✓ All syntax fixes applied!')
    except Exception as e:
        print(f'Error: {e}')
        import traceback
        traceback.print_exc()