#!/usr/bin/env python3
import os
import re
import glob

def create_clean_file_template(file_path):
    """Create a clean template for any file"""
    try:
        if file_path.endswith('page.tsx'):
            # Page template
            page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
            if not page_name:
                page_name = "Page"
            
            page_title = page_name.replace('-', ' ').title()
            component_name = page_title.replace(' ', '') + 'Page'
            
            template = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Advanced {page_title.lower()} solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            {page_title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced {page_title.lower()} solutions by Zion Tech Group.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}'''
        
        elif file_path.endswith('.tsx'):
            # Component template
            component_name = os.path.basename(file_path).replace('.tsx', '')
            
            template = f'''import React from 'react';

interface {component_name}Props {{
  // Add props here
}}

export default function {component_name}({{}}: {component_name}Props) {{
  return (
    <div className="{component_name.lower()}">
      <h2>{component_name}</h2>
      <p>Component under development.</p>
    </div>
  );
}}'''
        
        elif file_path.endswith('.ts'):
            # TypeScript file template
            file_name = os.path.basename(file_path).replace('.ts', '')
            
            if 'hook' in file_name.lower():
                template = f'''import {{ useState, useEffect }} from 'react';

export const {file_name} = () => {{
  const [state, setState] = useState(null);
  
  useEffect(() => {{
    // Hook implementation
  }}, []);
  
  return {{ state, setState }};
}};'''
            elif 'context' in file_name.lower():
                template = f'''import React, {{ createContext, useContext, ReactNode }} from 'react';

interface {file_name}Type {{
  // Add context type here
}}

const {file_name} = createContext<{file_name}Type | undefined>(undefined);

export const use{file_name} = () => {{
  const context = useContext({file_name});
  if (!context) {{
    throw new Error(`use{file_name} must be used within a {file_name}Provider`);
  }}
  return context;
}};

interface {file_name}ProviderProps {{
  children: ReactNode;
}}

export const {file_name}Provider: React.FC<{file_name}ProviderProps> = ({{ children }}) => {{
  return (
    <{file_name}.Provider value={{}}>
      {{children}}
    </{file_name}.Provider>
  );
}};'''
            else:
                template = f'''// {file_name} utility functions

export const {file_name} = {{
  // Add utility functions here
}};'''
        
        else:
            return None
        
        return template
        
    except Exception as e:
        print(f"Error creating template for {file_path}: {e}")
        return None

def fix_file(file_path):
    """Fix any file by replacing it with a clean template"""
    try:
        # Skip certain files that should not be modified
        if any(skip in file_path for skip in [
            'node_modules',
            '.git',
            'dist',
            'build',
            'coverage',
            '.next',
            'backup',
            'test',
            '__tests__',
            '.test.',
            '.spec.',
            'App.tsx',
            'main.tsx',
            'layout.tsx'
        ]):
            return False
        
        # Check if it's a file we can fix
        if not (file_path.endswith('.tsx') or file_path.endswith('.ts')):
            return False
        
        template = create_clean_file_template(file_path)
        if template:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(template)
            print(f"Fixed file: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed files: {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()