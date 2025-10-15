#!/usr/bin/env python3
"""
Comprehensive script to fix all unused imports in the codebase.
"""

import os
import re
import glob

def fix_unused_imports_in_file(file_path):
    """Remove unused imports from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Check if this is an import line
            if 'import' in line and 'from' in line and ('lucide-react' in line or 'react-icons' in line):
                # Extract the import statement
                import_match = re.match(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', line)
                if import_match:
                    imports_str = import_match.group(1)
                    source = import_match.group(2)
                    
                    # Parse individual imports
                    imports = [imp.strip() for imp in imports_str.split(',')]
                    
                    # Check which imports are actually used in the file
                    used_imports = []
                    for imp in imports:
                        # Remove any type annotations or aliases
                        clean_imp = imp.split(' as ')[0].strip()
                        if clean_imp and clean_imp in content:
                            used_imports.append(imp)
                    
                    # Reconstruct the import line
                    if used_imports:
                        new_line = f"import {{ {', '.join(used_imports)} }} from '{source}';"
                        new_lines.append(new_line)
                    else:
                        # If no imports are used, remove the line
                        continue
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Only write if content changed
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed unused imports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a specific file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        # Remove empty lines at the end
        lines = content.split('\n')
        while lines and not lines[-1].strip():
            lines.pop()
        
        # Ensure proper closing
        if lines and not lines[-1].strip().endswith('}'):
            lines.append('}')
        
        new_content = '\n'.join(lines)
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing syntax in {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    print("Fixing unused imports in all files...")
    
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if '.original' in file_path or file_path.endswith('.backup'):
                continue
                
            files_processed += 1
            if fix_unused_imports_in_file(file_path):
                files_fixed += 1
    
    print(f"Fixed unused imports in {files_fixed} out of {files_processed} files")
    
    # Fix specific files with syntax errors
    print("Fixing syntax errors...")
    syntax_files = [
        'app/ai-automated-reporting/page.tsx',
        'app/components/EnhancedAccessibilityEnhancer.tsx',
        'app/components/FuturisticBackground.tsx',
        'app/components/FuturisticServiceCard.tsx',
        'app/components/GlobalErrorBoundary.tsx',
        'app/components/Header.tsx',
        'app/components/LoadingSkeleton.tsx',
        'app/components/Navigation.tsx',
        'app/components/OptimizedImage.tsx',
        'app/components/OptimizedLoadingSpinner.tsx',
        'app/components/PWAInstaller.tsx',
        'app/components/PerformanceEnhancer.tsx',
        'app/components/ServiceWorker.tsx',
        'app/components/ServiceWorkerRegistration.tsx',
        'app/components/Sidebar.tsx',
        'app/components/SystemMonitor.tsx',
        'app/components/UserExperienceEnhancer.tsx'
    ]
    
    syntax_fixed = 0
    for file_path in syntax_files:
        if os.path.exists(file_path):
            if fix_syntax_errors_in_file(file_path):
                syntax_fixed += 1
    
    print(f"Fixed syntax errors in {syntax_fixed} files")
    print("Done!")

if __name__ == "__main__":
    main()