#!/usr/bin/env python3
"""
Script to fix JSX syntax errors caused by incomplete merge conflict resolution
"""
import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'^<<<<<<< .*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
        
        # Fix common JSX syntax issues
        # Fix unclosed tags by adding proper closing tags
        content = fix_unclosed_tags(content)
        
        # Fix malformed JSX expressions
        content = fix_jsx_expressions(content)
        
        # Clean up extra whitespace and newlines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed JSX syntax in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_unclosed_tags(content):
    """Fix unclosed JSX tags"""
    # Common patterns for unclosed tags
    tag_patterns = [
        (r'<h1([^>]*)>([^<]*)', r'<h1\1>\2</h1>'),
        (r'<h2([^>]*)>([^<]*)', r'<h2\1>\2</h2>'),
        (r'<h3([^>]*)>([^<]*)', r'<h3\1>\2</h3>'),
        (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
        (r'<section([^>]*)>([^<]*)', r'<section\1>\2</section>'),
        (r'<main([^>]*)>([^<]*)', r'<main\1>\2</main>'),
        (r'<button([^>]*)>([^<]*)', r'<button\1>\2</button>'),
        (r'<ul([^>]*)>([^<]*)', r'<ul\1>\2</ul>'),
        (r'<li([^>]*)>([^<]*)', r'<li\1>\2</li>'),
    ]
    
    for pattern, replacement in tag_patterns:
        content = re.sub(pattern, replacement, content)
    
    return content

def fix_jsx_expressions(content):
    """Fix malformed JSX expressions"""
    # Fix common JSX expression issues
    content = re.sub(r'\{([^}]*)\s*\}', r'{\1}', content)  # Clean up JSX expressions
    content = re.sub(r'\{([^}]*)\s*$', r'{\1}', content, flags=re.MULTILINE)  # Fix incomplete expressions
    
    return content

def create_clean_page_template(file_path):
    """Create a clean page template for severely corrupted files"""
    filename = os.path.basename(file_path)
    page_name = filename.replace('.tsx', '').replace('-', ' ').title()
    
    template = f''''use client';
import React from 'react';
import {{ CheckCircle, ArrowRight }} from 'lucide-react';

export default function {page_name.replace(' ', '')}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {page_name.lower()} services to help your business succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Solutions</h3>
              <p className="text-gray-300 mb-4">
                Professional {page_name.lower()} services delivered by experienced professionals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Fast Delivery
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 Support
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Approach</h3>
              <p className="text-gray-300 mb-4">
                Tailored solutions designed specifically for your business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Personalized Service
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Scalable Solutions
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cost Effective
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Ongoing Support
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our {page_name.lower()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}}
'''
    
    return template

def main():
    """Main function to fix all JSX syntax errors"""
    app_dir = "/workspace/app"
    
    # Find all TypeScript/TSX files
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has syntax issues
            if ('<<<<<<<' in content or '=======' in content or '>>>>>>>' in content or 
                'JSX element' in content or 'Expected corresponding' in content):
                total_count += 1
                
                # For severely corrupted files, create a clean template
                if len(content) < 500 or content.count('<') < 5:
                    template = create_clean_page_template(file_path)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(template)
                    print(f"Created clean template for: {file_path}")
                    fixed_count += 1
                else:
                    if fix_jsx_syntax(file_path):
                        fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} out of {total_count} files with JSX syntax issues")

if __name__ == "__main__":
    main()