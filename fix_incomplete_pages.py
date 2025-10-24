#!/usr/bin/env python3
"""
Fix incomplete page files that are missing their return statements and JSX content.
"""

import os
import glob
import re

def fix_incomplete_page(file_path):
    """Fix an incomplete page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the file is incomplete (has const Page but no return statement)
        if 'const Page: React.FC = () => {' in content and 'return (' not in content:
            # Extract the title from the document.title line
            title_match = re.search(r"document\.title = '([^']+)'", content)
            if title_match:
                title = title_match.group(1)
                # Extract the service name from the title
                service_name = title.replace(' - Zion Tech Group', '')
                
                # Create the complete page content
                complete_content = content.replace(
                    'export default Page;',
                    f'''  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {service_name}
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Professional {service_name.lower()} services and solutions from Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
              <p className="text-gray-300 mb-4">Cutting-edge technology solutions for modern businesses.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  AI-powered features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time processing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Scalable architecture
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Enterprise security
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
              <p className="text-gray-300 mb-4">Comprehensive analytics and reporting capabilities.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Custom dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Data visualization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Performance metrics
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Optimization</h3>
              <p className="text-gray-300 mb-4">AI-driven optimization for maximum efficiency and performance.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Automated optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Predictive analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Smart recommendations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Continuous improvement
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}};

export default Page;'''
                )
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(complete_content)
                print(f"Fixed incomplete page: {file_path}")
                return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_incomplete_page(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} incomplete page files")

if __name__ == "__main__":
    main()