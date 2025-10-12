#!/usr/bin/env python3
"""
Script to fix the remaining 5G pages with syntax errors.
"""

import os
import re

def fix_5g_page(file_path):
    """Fix a single 5G page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the malformed structure
        # Remove extra closing divs and fix the structure
        content = re.sub(r'</div>\s*</div>\s*\);\s*$', '    </div>\n  );\n}', content)
        content = re.sub(r'\);\s*$', '    </div>\n  );\n}', content)
        
        # Fix the className issue in the main div
        content = re.sub(r'to-slate-900pt-20', 'to-slate-900 pt-20', content)
        
        # Fix malformed Link components
        content = re.sub(r'<Link to="/contact"\s*className="[^"]*"\s*>\s*Contact Us\s*<ArrowRight[^>]*/>\s*</Link>', 
                        '<Link\n          to="/contact"\n          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"\n        >\n          Contact Us\n          <ArrowRight className="w-5 h-5 ml-2" />\n        </Link>', 
                        content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all remaining 5G pages."""
    pages = [
        'app/5g-data-analytics/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx'
    ]
    
    for page in pages:
        file_path = f'/workspace/{page}'
        if os.path.exists(file_path):
            fix_5g_page(file_path)

if __name__ == "__main__":
    main()