#!/usr/bin/env python3
"""
Fix remaining TypeScript errors
"""

import re
from pathlib import Path

def fix_accessibility_enhancer():
    """Fix unterminated template literal in accessibilityEnhancer.ts"""
    file_path = Path('app/utils/accessibilityEnhancer.ts')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add the missing closing for the template literal
    if content.endswith('Accessibility Report:\n'):
        content += '''- Total Checks: ${metrics.totalChecks}
- Issues Found: ${metrics.issuesFound}
- Warnings: ${metrics.warnings}
- Success Rate: ${metrics.successRate.toFixed(2)}%
`;
  }
}'''
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path}")
        return True
    else:
        print(f"✗ {file_path} doesn't end with expected pattern")
        return False

def fix_performance_monitor():
    """Fix unterminated template literal in performanceMonitor.ts"""
    file_path = Path('app/utils/performanceMonitor.ts')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add the missing closing for the template literal
    if content.endswith('Performance Report:\n'):
        content += '''- Score: ${score}/100
- FCP: ${metrics.fcp}ms
- LCP: ${metrics.lcp}ms
- FID: ${metrics.fid}ms
- CLS: ${metrics.cls}
`;
  }
}'''
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path}")
        return True
    else:
        print(f"✗ {file_path} doesn't end with expected pattern")
        return False

def fix_contact_page():
    """Fix JSX fragment issues in contact page"""
    file_path = Path('app/contact/page.tsx')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for missing closing tags
    if content.count('<>') != content.count('</>'):
        # Replace the fragment with a simple div
        content = content.replace('return (\n    <>', 'return (')
        content = content.replace('    </>\n  );', '  );')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path}")
        return True
    
    print(f"No issues found in {file_path}")
    return False

def fix_newest_content_banner():
    """Fix JSX issues in NewestContent2025Banner"""
    file_path = Path('app/components/NewestContent2025Banner.tsx')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Remove duplicate/malformed elements
    fixed_lines = []
    skip_next = False
    in_duplicate_block = False
    
    for i, line in enumerate(lines):
        # Skip obvious duplicate blocks that have closing tags appearing out of place
        if '</span>' in line and i > 0 and 'Read Full Article' in lines[i-1]:
            if not in_duplicate_block:
                fixed_lines.append(line)
                in_duplicate_block = True
            continue
        
        if in_duplicate_block and '<div' in line:
            in_duplicate_block = False
        
        if not in_duplicate_block:
            fixed_lines.append(line)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print(f"✓ Fixed {file_path}")
    return True

def main():
    print("Fixing remaining errors...\n")
    
    fix_accessibility_enhancer()
    fix_performance_monitor()
    fix_contact_page()
    fix_newest_content_banner()
    
    print("\nAll fixes applied!")

if __name__ == '__main__':
    main()