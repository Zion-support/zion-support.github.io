#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_exports(file_path):
    """Fix duplicate export statements in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all export default statements
        export_matches = list(re.finditer(r'export default function \w+\(\)', content))
        
        if len(export_matches) > 1:
            # Keep only the last export statement
            last_export = export_matches[-1]
            first_export = export_matches[0]
            
            # Remove everything from the first export to just before the last export
            content = content[:first_export.start()] + content[last_export.start():]
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed duplicate exports in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_missing_closing_braces(file_path):
    """Fix missing closing braces and export statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file ends with missing closing brace
        if content.strip().endswith(');') and 'export default' not in content:
            # Extract the function name from the file path
            filename = os.path.basename(file_path)
            page_name = filename.replace('.tsx', '').replace('-', ' ').title().replace(' ', '')
            
            # Add missing closing brace and export
            template = """
}}

export default function {page_name}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {page_name}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {page_name} page content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}}"""
            
            content += template.format(page_name=page_name)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed missing closing braces in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files in the app directory
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    fixed_count = 0
    
    for file_path in tsx_files:
        if fix_duplicate_exports(file_path):
            fixed_count += 1
        if fix_missing_closing_braces(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
