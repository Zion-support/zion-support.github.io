#!/usr/bin/env python3
import re

def remove_missing_components():
    """Remove usage of missing components from App.tsx"""
    app_file = '/workspace/App.tsx'
    
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Components to remove
    missing_components = [
        'UltimateTechInnovation2028',
        'RevolutionaryCaseStudies2029', 
        'UltimateTechRevolution2038'
    ]
    
    for component in missing_components:
        # Find and remove component usage (including comments and divs)
        pattern = rf'(\s*<!--.*?{component}.*?-->\s*)?\s*<div[^>]*>\s*<{component}[^>]*/>\s*</div>\s*'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Also remove any standalone component usage
        pattern = rf'(\s*<!--.*?{component}.*?-->\s*)?\s*<{component}[^>]*/>\s*'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        print(f"Removed usage of {component}")
    
    # Write the updated content
    with open(app_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    remove_missing_components()