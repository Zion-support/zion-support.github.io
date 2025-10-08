#!/usr/bin/env python3
"""
Fix common syntax errors in TypeScript/JavaScript files
"""
import os
import re

def fix_file_if_starts_with_paren(filepath):
    """Fix files that start with closing parenthesis"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
        
        if not lines:
            return False, "Empty file"
        
        # Check if first non-empty line starts with );
        first_line_idx = 0
        while first_line_idx < len(lines) and not lines[first_line_idx].strip():
            first_line_idx += 1
        
        if first_line_idx < len(lines) and lines[first_line_idx].strip().startswith(');'):
            # Remove the first line with );
            lines = lines[first_line_idx + 1:]
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            return True, "Removed leading ); line"
        
        return False, "No issue"
    except Exception as e:
        return False, f"Error: {str(e)}"


def fix_unclosed_comments(filepath):
    """Fix files with unclosed comments"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Count /* and */
        open_count = content.count('/*')
        close_count = content.count('*/')
        
        if open_count > close_count:
            # Add closing comment markers
            content += '\n' + ('*/' * (open_count - close_count))
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, f"Added {open_count - close_count} closing comment markers"
        
        return False, "No unclosed comments"
    except Exception as e:
        return False, f"Error: {str(e)}"


def fix_duplicate_properties(filepath):
    """Fix duplicate properties in JSON-like files"""
    try:
        if not filepath.endswith(('.ts', '.tsx', '.js', '.jsx')):
            return False, "Not a TS/JS file"
        
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
        
        # Look for duplicate "jsxImportSource" lines
        seen_props = {}
        cleaned_lines = []
        changed = False
        
        for i, line in enumerate(lines):
            # Check for property definitions like '"jsxImportSource": "react",'
            match = re.match(r'\s*"([^"]+)"\s*:\s*(.+),?\s*$', line)
            if match:
                prop_name = match.group(1)
                if prop_name in seen_props:
                    # Skip duplicate
                    changed = True
                    continue
                seen_props[prop_name] = True
            
            cleaned_lines.append(line)
        
        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(cleaned_lines)
            return True, "Removed duplicate properties"
        
        return False, "No duplicates"
    except Exception as e:
        return False, f"Error: {str(e)}"


def create_proper_not_found():
    """Create a proper not-found.tsx file"""
    content = """import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        
        <div className="mb-8">
          <p className="text-2xl text-gray-200 mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-lg text-gray-300">
            Do not worry, let us get you back on track!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {popularPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all"
            >
              {page.name}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
"""
    with open('/workspace/app/not-found.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✓ Created proper app/not-found.tsx")


def create_proper_about_page():
    """Create a proper about page"""
    content = """import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose lg:prose-xl">
          <p>
            Zion Tech Group is a leading provider of AI and IT solutions,
            helping businesses transform through technology.
          </p>
        </div>
      </div>
    </div>
  );
}
"""
    with open('/workspace/app/about/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✓ Created proper app/about/page.tsx")


def main():
    print("=" * 70)
    print("FIXING SYNTAX ERRORS")
    print("=" * 70)
    print()
    
    # Fix app/page.tsx
    success, msg = fix_file_if_starts_with_paren('/workspace/app/page.tsx')
    if success:
        print(f"✓ app/page.tsx: {msg}")
    
    # Fix app/page-optimized.tsx
    success, msg = fix_file_if_starts_with_paren('/workspace/app/page-optimized.tsx')
    if success:
        print(f"✓ app/page-optimized.tsx: {msg}")
    
    # Fix unclosed comments in src/utils files
    for file in ['src/utils/analytics.ts', 'src/utils/errorHandler.ts', 
                 'src/utils/performanceMonitor.ts']:
        filepath = f'/workspace/{file}'
        if os.path.exists(filepath):
            success, msg = fix_unclosed_comments(filepath)
            if success:
                print(f"✓ {file}: {msg}")
    
    # Create proper versions of broken files
    create_proper_not_found()
    create_proper_about_page()
    
    print()
    print("=" * 70)
    print("DONE!")
    print("=" * 70)


if __name__ == '__main__':
    main()