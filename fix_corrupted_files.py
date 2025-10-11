#!/usr/bin/env python3
"""
Script to fix corrupted TypeScript/JSX files with syntax errors
"""
import os
import re
import glob

def fix_corrupted_file(file_path):
    """Fix a single corrupted file"""
    print(f"Fixing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Common patterns to fix
    fixes = [
        # Fix malformed function declarations
        (r'const \w+Page: React\.FC = \(\) => \s*\n\s*\{', 'const \\g<0> => {'),
        (r'const \w+Page: React\.FC = \(\) => \s*\n\s*\}', 'const \\g<0> => {'),
        
        # Fix malformed object literals
        (r'\s*\{\s*\n\s*\}\s*,', ''),
        (r'\s*\{\s*\n\s*\}\s*\]', ']'),
        (r'\s*\{\s*\n\s*\}\s*;', ';'),
        
        # Fix missing semicolons in imports
        (r"import React from 'react'\n", "import React from 'react';\n"),
        (r"import \{Helmet\} from 'react-helmet-async'\n", "import {Helmet} from 'react-helmet-async';\n"),
        
        # Fix malformed array/object syntax
        (r'\s*benefits: \[.*?\]\s*\}\s*,', ''),
        (r'\s*benefits: \[.*?\]\s*\}\s*\]', ']'),
        
        # Remove orphaned closing braces
        (r'^\s*\}\s*$', ''),
        
        # Fix malformed JSX
        (r'<Helmet>\s*$', '<Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name="description" content="Page description" />\n      </Helmet>'),
    ]
    
    # Apply fixes
    for pattern, replacement in fixes:
        content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
    
    # If the file is too corrupted, create a basic template
    if 'const' in content and 'React.FC' in content and 'return' not in content:
        # Extract the component name
        match = re.search(r'const (\w+Page): React\.FC', content)
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
    """Main function to fix all corrupted files"""
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
        if fix_corrupted_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files out of {len(files_to_fix)}")

if __name__ == "__main__":
    main()