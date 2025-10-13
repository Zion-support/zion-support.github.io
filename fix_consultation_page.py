#!/usr/bin/env python3
import re

def fix_consultation_page():
    with open('/workspace/app/consultation/page.tsx', 'r') as f:
        content = f.read()
    
    # Remove the duplicate additionalServices array that's in the wrong place
    # Find the pattern where it starts after </div> and remove it
    pattern = r'                  </div>\n\n  const additionalServices = \[.*?^\s*\];'
    content = re.sub(pattern, '                  </div>', content, flags=re.MULTILINE | re.DOTALL)
    
    with open('/workspace/app/consultation/page.tsx', 'w') as f:
        f.write(content)
    
    print("Fixed consultation page")

if __name__ == "__main__":
    fix_consultation_page()