#!/usr/bin/env python3
"""
Script to create missing page files based on App.tsx imports
"""
import os
import re
import glob

def extract_imports_from_app_tsx():
    """Extract all page imports from App.tsx"""
    with open('App.tsx', 'r') as f:
        content = f.read()
    
    # Find all import statements for pages
    pattern = r'import\("\./app/([^"]+)/page"\)'
    matches = re.findall(pattern, content)
    
    return matches

def create_missing_page(import_path):
    """Create a missing page file"""
    page_dir = f"app/{import_path}"
    page_file = f"{page_dir}/page.tsx"
    
    # Check if directory exists
    if not os.path.exists(page_dir):
        os.makedirs(page_dir, exist_ok=True)
        print(f"Created directory: {page_dir}")
    
    # Check if page file exists
    if not os.path.exists(page_file):
        # Extract service name from path
        service_name = import_path.split('/')[-1].replace('-', ' ').title()
        
        # Create the page content
        page_content = f'''import {{ ArrowRight }} from "lucide-react";

import {{ Helmet }} from "react-helmet-async";
import {{ Link }} from "react-router-dom";

export default function {service_name.replace(' ', '')}ZionTechGroup() {{
  return (
    <>
      <Helmet>
        <title>{service_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {service_name.lower()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            {service_name}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional {service_name.lower()} services by Zion Tech Group.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}}
'''
        
        with open(page_file, 'w') as f:
            f.write(page_content)
        
        print(f"Created page: {page_file}")
        return True
    else:
        print(f"Page already exists: {page_file}")
        return False

def main():
    """Main function to create all missing pages"""
    print("Extracting imports from App.tsx...")
    imports = extract_imports_from_app_tsx()
    
    print(f"Found {len(imports)} page imports")
    
    created_count = 0
    for import_path in imports:
        if create_missing_page(import_path):
            created_count += 1
    
    print(f"\nCreated {created_count} missing pages")

if __name__ == "__main__":
    main()