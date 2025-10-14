#!/usr/bin/env python3
"""
Script to fix the consultation page structure
"""

def fix_consultation_page():
    file_path = 'app/consultation/page.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the structure by adding missing closing tags
    # The issue is that there are missing closing tags for sections and divs
    
    # Find the end of the file and add missing closing tags
    lines = content.split('\n')
    
    # Find where the CTA section ends
    cta_end = -1
    for i, line in enumerate(lines):
        if 'Contact Us' in line and 'ArrowRight' in line:
            cta_end = i
            break
    
    if cta_end != -1:
        # Add missing closing tags
        lines.insert(cta_end + 3, '        </div>')  # Close the CTA section div
        lines.insert(cta_end + 4, '      </section>')  # Close the CTA section
        lines.insert(cta_end + 5, '      </div>')  # Close the main container div
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print(f"Fixed consultation page structure")

if __name__ == "__main__":
    fix_consultation_page()