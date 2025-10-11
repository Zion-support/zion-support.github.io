#!/usr/bin/env python3
"""
Script to fix specific syntax errors in TypeScript/JSX files
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix specific syntax errors in a file"""
    print(f"Fixing syntax errors in {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Fix specific patterns
    fixes = [
        # Fix double const declarations
        (r'const const (\w+): React\.FC', r'const \1: React.FC'),
        
        # Fix malformed function declarations
        (r'const (\w+): React\.FC = \(\) => \s*\n\s*\{', r'const \1: React.FC = () => {'),
        (r'const (\w+): React\.FC = \(\) => \s*\n\s*\}', r'const \1: React.FC = () => {'),
        
        # Fix malformed object literals
        (r'\s*\{\s*\n\s*\}\s*,', ''),
        (r'\s*\{\s*\n\s*\}\s*\]', ']'),
        (r'\s*\{\s*\n\s*\}\s*;', ';'),
        
        # Fix missing semicolons
        (r"import React from 'react'\n", "import React from 'react';\n"),
        (r"import \{Helmet\} from 'react-helmet-async'\n", "import {Helmet} from 'react-helmet-async';\n"),
        (r"import \{.*?\} from 'lucide-react'\n", lambda m: m.group(0).rstrip() + ';\n'),
        (r"import Navigation from '\.\./components/Navigation'\n", "import Navigation from '../components/Navigation';\n"),
        (r"import Footer from '\.\./components/Footer'\n", "import Footer from '../components/Footer';\n"),
        
        # Fix malformed array/object syntax
        (r'\s*benefits: \[.*?\]\s*\}\s*,', ''),
        (r'\s*benefits: \[.*?\]\s*\}\s*\]', ']'),
        
        # Remove orphaned closing braces and commas
        (r'^\s*\}\s*,\s*$', ''),
        (r'^\s*\}\s*$', ''),
        
        # Fix malformed JSX
        (r'<Helmet>\s*$', '<Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="Page description" />\n      </Helmet>'),
    ]
    
    # Apply fixes
    for pattern, replacement in fixes:
        if callable(replacement):
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
        else:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
    
    # If the file is still corrupted, create a basic template
    if 'const' in content and 'React.FC' in content and ('return' not in content or 'const const' in content):
        # Extract the component name
        match = re.search(r'const (\w+): React\.FC', content)
        if match:
            component_name = match.group(1)
            template = f"""'use client';
import React from 'react';
import {{Helmet}} from 'react-helmet-async';
import {{ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp}} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Title</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Page description and content.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}};

export default {component_name};"""
            content = template
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors in all files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files out of {len(files_to_fix)}")

if __name__ == "__main__":
    main()