#!/usr/bin/env python3
"""
Script to fix all missing closing braces in app/page.tsx
"""

import re

def fix_page_tsx():
    """Fix all missing closing braces in app/page.tsx"""
    file_path = '/workspace/app/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix all instances where there's a missing closing brace before ];
        # Pattern: any content followed by whitespace and ];
        content = re.sub(r'(\w+)\s*\n\s*\]', r'\1\n    }\n  ]', content)
        
        # Fix specific patterns that are common
        content = re.sub(r'(\s+color: \'[^\']+\')\s*\n\s*\]', r'\1\n    }\n  ]', content)
        
        # Fix any remaining patterns where there's content followed by whitespace and ];
        content = re.sub(r'([^}]\s*)\n\s*\]', r'\1\n    }\n  ]', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Fixed app/page.tsx")
        return True
        
    except Exception as e:
        print(f"Error fixing app/page.tsx: {e}")
        return False

if __name__ == "__main__":
    fix_page_tsx()