#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group website.
This script automatically resolves merge conflicts by choosing the appropriate version
and cleaning up the code.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and choose the appropriate content
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # If head content is empty or just whitespace, use branch content
            if not head_content or head_content.isspace():
                return branch_content
            
            # If branch content is empty or just whitespace, use head content
            if not branch_content or branch_content.isspace():
                return head_content
            
            # If both have content, prefer the longer/more complete version
            if len(branch_content) > len(head_content):
                return branch_content
            else:
                return head_content
        
        content = re.sub(pattern1, resolve_conflict, content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> origin/main
        pattern2 = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> origin/main'
        content = re.sub(pattern2, resolve_conflict, content, flags=re.DOTALL)
        
        # Pattern 3: <<<<<<< HEAD ... ======= ... >>>>>>> cursor/fix-errors-and-merge-to-main-*
        pattern3 = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> cursor/fix-errors-and-merge-to-main-[^\n]+'
        content = re.sub(pattern3, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\s*\n.*?\n=======\s*\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        
        # Remove any standalone merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\s*\n?', '', content)
        content = re.sub(r'=======\s*\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content)
        content = re.sub(r'\n\s*$', '\n', content)
        
        # Fix common syntax issues
        # Fix missing closing tags
        content = fix_jsx_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No changes needed in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix unclosed div tags
    open_divs = content.count('<div')
    close_divs = content.count('</div>')
    
    if open_divs > close_divs:
        missing_closes = open_divs - close_divs
        content += '\n' + '  </div>\n' * missing_closes
    
    # Fix common JSX issues
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content, flags=re.MULTILINE)
    content = re.sub(r'^\s*</div>\s*$', r'  </div>', content, flags=re.MULTILINE)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def fix_import_statements(content):
    """Fix duplicate or malformed import statements."""
    # Remove duplicate imports
    lines = content.split('\n')
    seen_imports = set()
    fixed_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line.strip() not in seen_imports:
                seen_imports.add(line.strip())
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def main():
    """Main function to fix all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Find all TypeScript/JavaScript files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Additional cleanup for specific problematic files
    cleanup_specific_files()
    
    print("Merge conflict resolution complete!")

def cleanup_specific_files():
    """Clean up specific files that need special handling."""
    specific_fixes = {
        'app/main.tsx': fix_main_tsx,
        'app/page.tsx': fix_page_tsx,
        'app/App.tsx': fix_app_tsx,
    }
    
    for file_path, fix_func in specific_fixes.items():
        if os.path.exists(file_path):
            try:
                fix_func(file_path)
                print(f"Applied specific fixes to: {file_path}")
            except Exception as e:
                print(f"Error applying specific fixes to {file_path}: {e}")

def fix_main_tsx(file_path):
    """Fix main.tsx specifically."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean up the main.tsx file
    content = """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_page_tsx(file_path):
    """Fix page.tsx specifically."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean up the page.tsx file
    content = """import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI and IT Solutions for Your Business
        </p>
      </div>
    </div>
  );
}
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_app_tsx(file_path):
    """Fix App.tsx specifically."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean up the App.tsx file
    content = """import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="min-h-screen bg-gray-50">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </Suspense>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    main()