#!/usr/bin/env python3
import re

def fix_navigation():
    """Fix all Navigation component JSX structure issues"""
    
    with open('/workspace/app/components/Navigation.tsx', 'r') as f:
        content = f.read()
    
    # Fix all the map function closing issues
    # Pattern: }</div>\n        </div>\n              )}
    content = re.sub(
        r'}\s*</div>\s*</div>\s*\)\)\}',
        r'}\n                    ))}\n                  </div>\n                </div>\n              )}',
        content
    )
    
    # Fix any remaining similar patterns
    content = re.sub(
        r'}\s*</div>\s*</div>\s*\)\)\}',
        r'}\n                    ))}\n                  </div>\n                </div>\n              )}',
        content
    )
    
    with open('/workspace/app/components/Navigation.tsx', 'w') as f:
        f.write(content)
    
    print("Fixed Navigation component structure")

if __name__ == "__main__":
    fix_navigation()