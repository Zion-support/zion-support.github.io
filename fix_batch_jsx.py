#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX structure in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if this file has the problematic pattern
        if ('></div><Helmet>' in content or 
            '></div><h1' in content or
            '></div><p' in content or
            'Expected corresponding closing tag for JSX fragment' in content):
            
            # Extract the function name
            func_match = re.search(r'export default function (\w+)', content)
            if not func_match:
                return False
            
            func_name = func_match.group(1)
            
            # Extract the title from the Helmet or create one
            title_match = re.search(r'<title>([^<]+)</title>', content)
            if title_match:
                title = title_match.group(1).strip()
            else:
                # Create title from function name
                title = func_name.replace('Page', '')
                # Add spaces before capital letters
                title = re.sub(r'([A-Z])', r' \1', title).strip()
                if not title.endswith('Zion Tech Group'):
                    title += ' - Zion Tech Group'
            
            # Extract the description
            desc_match = re.search(r'<meta name="description" content="([^"]+)"', content)
            if desc_match:
                description = desc_match.group(1)
            else:
                description = f"Professional {title.replace(' - Zion Tech Group', '').lower()} services by Zion Tech Group. Transform your business with our expert solutions."
            
            # Extract the main heading
            h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
            if h1_match:
                heading = h1_match.group(1).strip()
            else:
                heading = title.replace(' - Zion Tech Group', '')
            
            # Extract the paragraph content
            p_match = re.search(r'<p[^>]*>([^<]+)</p>', content)
            if p_match:
                paragraph = p_match.group(1).strip()
            else:
                paragraph = f"Professional {heading.lower()} services coming soon."
            
            # Create the fixed content
            fixed_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {func_name}() {{
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{heading}</h1>
          <p className="text-lg text-gray-300 mb-8">{paragraph}</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}}'''
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get specific files that need fixing
    files_to_fix = [
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/about/page.tsx',
        'app/accessibility-page/page.tsx',
        'app/accessibility/page.tsx',
        'app/advanced-security-suite/page.tsx',
        'app/ai-3d-generation/page.tsx',
        'app/ai-accounting-assistant/page.tsx',
        'app/ai-agricultural-intelligence-pro/page.tsx',
        'app/ai-analytics-dashboard-pro/page.tsx',
        'app/ai-analytics-dashboard/page.tsx',
        'app/ai-analytics/page.tsx',
        'app/ai-api-management/page.tsx',
        'app/ai-api-manager/page.tsx',
        'app/ai-automated-reporting/page.tsx',
        'app/ai-automated-testing/page.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            print(f"Processing: {file_path}")
            if fix_jsx_file(file_path):
                files_fixed += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()