#!/usr/bin/env python3
"""
Script to fix corrupted page files with malformed JSX and TypeScript errors.
This script will clean up and recreate basic page structures.
"""

import os
import re
import glob
from pathlib import Path

def create_basic_page_template(page_name, title, description):
    """Create a basic page template for corrupted files"""
    return f''''use client';
import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud }} from 'lucide-react';

const {page_name}: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="AI, IT solutions, {title.lower()}, technology, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced AI Solutions</h3>
                <p className="text-gray-300">
                  Cutting-edge artificial intelligence technologies to transform your business operations.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Robust security measures to protect your data and ensure compliance.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-300">
                  Optimize your systems for maximum efficiency and scalability.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}};

export default {page_name};
'''

def fix_corrupted_page(file_path):
    """Fix a corrupted page file"""
    try:
        # Extract page name from file path
        page_name = Path(file_path).stem
        if page_name == 'page':
            # Get parent directory name
            page_name = Path(file_path).parent.name
        
        # Convert kebab-case to PascalCase
        page_name = ''.join(word.capitalize() for word in page_name.split('-'))
        
        # Create title and description
        title = page_name.replace('Page', '').replace('Ai', 'AI ')
        description = f"Professional {title} services and solutions for your business needs."
        
        # Generate new content
        new_content = create_basic_page_template(page_name, title, description)
        
        # Write the new content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_corrupted_pages():
    """Find corrupted page files"""
    corrupted_files = []
    
    # Look for page files that likely have issues
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts',
        'app/**/*-page.tsx',
        'app/**/*-page.ts'
    ]
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip certain directories
            if any(excluded in file_path for excluded in ['node_modules', '.git', 'dist', '.next', 'out', 'components']):
                continue
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                # Check for common corruption patterns
                if any(pattern in content for pattern in [
                    '<<<<<<< HEAD',
                    '=======',
                    '>>>>>>>',
                    'JSX expressions must have one parent element',
                    'Unexpected token',
                    'Declaration or statement expected'
                ]):
                    corrupted_files.append(file_path)
                    
            except:
                continue
    
    return corrupted_files

def main():
    """Main function to fix corrupted pages"""
    print("Starting corrupted page fixes...")
    
    # Find corrupted files
    corrupted_files = find_corrupted_pages()
    print(f"Found {len(corrupted_files)} potentially corrupted page files")
    
    if not corrupted_files:
        print("No corrupted files found!")
        return
    
    # Fix each file
    fixed_count = 0
    for file_path in corrupted_files:
        if fix_corrupted_page(file_path):
            fixed_count += 1
            print(f"Fixed corrupted page: {file_path}")
    
    print(f"Fixed {fixed_count} corrupted page files")

if __name__ == "__main__":
    main()