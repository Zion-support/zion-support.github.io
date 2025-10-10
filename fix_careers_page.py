#!/usr/bin/env python3
import re

def fix_careers_page():
    """Fix the careers page JSX structure"""
    
    with open('/workspace/app/careers/page.tsx', 'r') as f:
        content = f.read()
    
    # Fix the main structure issues
    # Replace the problematic closing tags
    content = re.sub(
        r'                \}\)\}\n              </div>\n            </div>\n          </section>',
        r'                ))}
              </div>
            </div>
          </section>',
        content
    )
    
    # Fix the final closing tags
    content = re.sub(
        r'        </div>\n      </>\n    \);',
        r'      </div>
    </>);',
        content
    )
    
    # Fix any remaining structural issues
    content = re.sub(r'  \{\/\* Benefits Section \*\/\n', r'        {/* Benefits Section */}\n', content)
    
    with open('/workspace/app/careers/page.tsx', 'w') as f:
        f.write(content)
    
    print("Fixed careers page structure")

if __name__ == "__main__":
    fix_careers_page()