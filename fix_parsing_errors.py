#!/usr/bin/env python3
"""
Script to fix parsing errors in TypeScript/JavaScript files after merge conflict resolution.
"""

import os
import re
import glob
from pathlib import Path

def find_tsx_files():
    """Find all TypeScript/JavaScript files."""
    files = []
    extensions = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    for pattern in extensions:
        files.extend(glob.glob(pattern, recursive=True))
    
    return [f for f in files if 'node_modules' not in f]

def fix_duplicate_export_default(content):
    """Fix duplicate export default statements."""
    lines = content.split('\n')
    fixed_lines = []
    found_export_default = False
    
    for line in lines:
        if 'export default function' in line and found_export_default:
            # Skip duplicate export default
            continue
        elif 'export default function' in line:
            found_export_default = True
            fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_malformed_imports(content):
    """Fix malformed import statements."""
    # Fix imports that are missing quotes or have syntax errors
    content = re.sub(r"import\('([^']+)'\)\);", r"import('\1');", content)
    content = re.sub(r"import\('([^']+)'\)\);", r"import('\1');", content)
    
    # Fix incomplete import statements
    content = re.sub(r"^ import\('([^']+)'\);", r"import('\1');", content, flags=re.MULTILINE)
    
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues."""
    lines = content.split('\n')
    fixed_lines = []
    in_jsx = False
    brace_count = 0
    
    for i, line in enumerate(lines):
        # Check if we're starting JSX
        if '<' in line and not in_jsx:
            in_jsx = True
            brace_count = 0
        
        # Count braces in JSX
        if in_jsx:
            brace_count += line.count('{') - line.count('}')
            
            # If we close all braces and find a closing tag, end JSX
            if brace_count <= 0 and '>' in line:
                in_jsx = False
        
        # Fix common JSX issues
        if in_jsx:
            # Fix unclosed tags
            if '<' in line and '>' not in line and i + 1 < len(lines):
                next_line = lines[i + 1]
                if '>' in next_line:
                    line = line + next_line
                    lines[i + 1] = ''  # Mark next line for removal
        
        fixed_lines.append(line)
    
    # Remove empty lines that were marked for removal
    return '\n'.join([line for line in fixed_lines if line != ''])

def fix_syntax_errors(content):
    """Fix common syntax errors."""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix missing semicolons in import statements
        if line.strip().startswith('import(') and not line.strip().endswith(';'):
            line = line.rstrip() + ';'
        
        # Fix incomplete function declarations
        if 'export default function' in line and not line.strip().endswith('{'):
            # Look for the next line that might have the opening brace
            if i + 1 < len(lines) and lines[i + 1].strip() == '{':
                line = line + ' {'
                lines[i + 1] = ''  # Remove the duplicate line
        
        # Fix malformed JSX
        if '<' in line and '>' not in line:
            # Try to find the closing tag in the next few lines
            for j in range(i + 1, min(i + 5, len(lines))):
                if '>' in lines[j]:
                    line = line + lines[j]
                    lines[j] = ''  # Mark for removal
                    break
        
        fixed_lines.append(line)
    
    # Remove empty lines
    return '\n'.join([line for line in fixed_lines if line.strip() != ''])

def fix_specific_files():
    """Fix specific known problematic files."""
    fixes = {
        '/workspace/app/5g-data-analytics/page.tsx': '''
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">5G Data Analytics</h1>
            <p className="text-lg text-gray-300 mb-8">Advanced data analytics solutions powered by 5G technology for real-time insights and business intelligence.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
''',
        '/workspace/app/App.tsx': '''
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load components for better performance
const Home = lazy(() => import('./page'));
const About = lazy(() => import('./about/page'));
const Services = lazy(() => import('./services/page'));
const Contact = lazy(() => import('./contact/page'));
const NotFound = lazy(() => import('./not-found/page'));

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-gray-300 mb-4">{error.message}</p>
        <button 
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="App">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white">Loading...</div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
'''
    }
    
    for file_path, content in fixes.items():
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}")
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def main():
    """Main function to fix parsing errors."""
    print("Fixing parsing errors...")
    
    # Fix specific problematic files first
    fix_specific_files()
    
    # Get all TypeScript/JavaScript files
    files = find_tsx_files()
    
    fixed_count = 0
    error_count = 0
    
    for file_path in files:
        try:
            # Skip if it's one of the files we already fixed
            if file_path in ['/workspace/app/5g-data-analytics/page.tsx', '/workspace/app/App.tsx']:
                continue
                
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Apply fixes
            content = fix_duplicate_export_default(content)
            content = fix_malformed_imports(content)
            content = fix_jsx_structure(content)
            content = fix_syntax_errors(content)
            
            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            fixed_count += 1
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            error_count += 1
    
    print(f"Fixed {fixed_count} files")
    print(f"Errors: {error_count} files")

if __name__ == "__main__":
    main()