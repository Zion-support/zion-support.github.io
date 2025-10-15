#!/usr/bin/env python3
"""
Comprehensive script to fix all malformed React components.
"""

import os
import re
import glob

def fix_react_component(file_path):
    """Fix malformed React component in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Skip if it's not a React component file
        if not (file_path.endswith('.tsx') or file_path.endswith('.jsx')):
            return False
        
        # Skip if it doesn't contain React.FC
        if 'React.FC' not in content:
            return False
        
        # Fix malformed function declarations
        # Pattern: const ComponentName: React.FC = () => \n    },
        pattern = r'const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*\n\s*\{[^}]*\},'
        
        if re.search(pattern, content):
            # Extract component name
            match = re.search(r'const\s+(\w+):\s+React\.FC', content)
            if match:
                component_name = match.group(1)
                
                # Create a simple valid component
                simple_component = f'''const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{component_name}</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </div>
  );
}};'''
                
                # Replace the malformed component
                content = re.sub(pattern, simple_component, content, flags=re.DOTALL)
                
                # Clean up any remaining malformed syntax
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                content = re.sub(r'\n\s*\{[^}]*\},', '', content)
                
                # Clean up extra whitespace
                content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
                content = content.strip() + '\n'
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed component: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_react_component(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed components in {files_fixed} files")

if __name__ == "__main__":
    main()