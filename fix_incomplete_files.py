#!/usr/bin/env python3
"""
Script to fix incomplete files that are causing build errors
"""
import os
import glob

def fix_incomplete_file(file_path):
    """Fix incomplete files by adding basic structure"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read().strip()
        
        # Check if file is incomplete (ends with function declaration but no body)
        if content.endswith('() => {') or content.endswith('() => {'):
            print(f"Fixing incomplete file: {file_path}")
            
            # Extract the function name from the content
            lines = content.split('\n')
            function_name = None
            for line in lines:
                if 'const' in line and '= () => {' in line:
                    function_name = line.split('const ')[1].split(' = () => {')[0]
                    break
            
            if function_name:
                # Create a basic complete component
                basic_component = f"""{content}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {function_name.replace('Page', '')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            This page is under construction. Please check back soon for updates.
          </p>
        </div>
      </section>
    </div>
  );
}};

export default {function_name};"""
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(basic_component)
                
                return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all incomplete files"""
    # Get all page files
    page_files = []
    
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith('.tsx') and file == 'page.tsx':
                file_path = os.path.join(root, file)
                page_files.append(file_path)
    
    print(f"Found {len(page_files)} page files")
    
    fixed_count = 0
    for file_path in page_files:
        if fix_incomplete_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} incomplete files")

if __name__ == "__main__":
    main()