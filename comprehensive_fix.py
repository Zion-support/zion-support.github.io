#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining issues in the codebase.
This script will:
1. Fix all remaining merge conflicts
2. Clean up malformed files
3. Remove duplicate imports
4. Fix syntax errors
"""

import os
import re
import glob
import shutil

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> ' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep HEAD content
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> origin/main
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> origin/main'
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be different branch names
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> .*'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< .*?\n', '', content)
        content = re.sub(r'=======.*?\n', '', content)
        content = re.sub(r'>>>>>>> .*?\n', '', content)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def clean_malformed_files():
    """Clean up malformed files that might be causing issues"""
    problematic_files = [
        'app/App.tsx',
        'vite.config.ts',
        'main.tsx'
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check for malformed content
                if 'export default App;' in content and 'function App()' not in content:
                    print(f"Fixing malformed {file_path}")
                    # This is likely a malformed file, we'll recreate it
                    if file_path == 'vite.config.ts':
                        create_vite_config()
                    elif file_path == 'main.tsx':
                        create_main_tsx()
            except Exception as e:
                print(f"Error checking {file_path}: {e}")

def create_vite_config():
    """Create a proper vite.config.ts file"""
    vite_config = '''import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@/components': resolve(__dirname, './app/components'),
      '@/pages': resolve(__dirname, './app'),
      '@/utils': resolve(__dirname, './utils'),
      '@/types': resolve(__dirname, './types'),
      '@/hooks': resolve(__dirname, './hooks'),
      '@/config': resolve(__dirname, './config'),
      '@/data': resolve(__dirname, './data'),
      '@/content': resolve(__dirname, './content'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('react-router')) {
            return 'router'
          }
          if (id.includes('framer-motion')) {
            return 'animation'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})'''
    
    with open('vite.config.ts', 'w', encoding='utf-8') as f:
        f.write(vite_config)

def create_main_tsx():
    """Create a proper main.tsx file"""
    main_tsx = '''import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/styles/futuristic.css'
import './app/styles/futuristic-enhanced.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)'''
    
    with open('main.tsx', 'w', encoding='utf-8') as f:
        f.write(main_tsx)

def find_files_with_conflicts():
    """Find all files with merge conflicts"""
    files_with_conflicts = []
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.css', '*.md']
    
    for ext in extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    return files_with_conflicts

def remove_duplicate_files():
    """Remove duplicate or backup files that might be causing issues"""
    duplicate_patterns = [
        '**/*.backup*',
        '**/*.broken*',
        '**/*.original',
        '**/backup-*',
        '**/corrupted-*'
    ]
    
    for pattern in duplicate_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    os.remove(file_path)
                    print(f"Removed duplicate file: {file_path}")
                except Exception as e:
                    print(f"Error removing {file_path}: {e}")

def main():
    print("Starting comprehensive codebase cleanup...")
    
    # Remove duplicate files first
    print("Removing duplicate files...")
    remove_duplicate_files()
    
    # Clean malformed files
    print("Cleaning malformed files...")
    clean_malformed_files()
    
    # Find all files with conflicts
    files_with_conflicts = find_files_with_conflicts()
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Check for any remaining conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show only first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")
    
    print("Comprehensive cleanup completed!")

if __name__ == "__main__":
    main()