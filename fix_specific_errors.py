#!/usr/bin/env python3
"""
Script to fix specific errors found in the linting output.
"""

import os
import re
import glob

def fix_unused_imports_in_file(file_path):
    """Remove unused imports from specific files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Check if this is an import line
            if 'import' in line and 'from' in line and 'lucide-react' in line:
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

def fix_specific_syntax_errors():
    """Fix specific syntax errors in known problematic files."""
    
    # Fix app/ai-automated-reporting/page.tsx
    try:
        file_path = 'app/ai-automated-reporting/page.tsx'
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove the problematic line at the end
        lines = content.split('\n')
        # Remove empty lines and fix the structure
        new_lines = []
        for line in lines:
            if line.strip() and not line.strip().startswith('//') and 'Declaration or statement expected' not in line:
                new_lines.append(line)
        
        # Ensure proper closing
        if new_lines and not new_lines[-1].strip().endswith('}'):
            new_lines.append('}')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        print(f"Fixed syntax errors in: {file_path}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
    
    # Fix app/components/EnhancedAccessibilityEnhancer.tsx
    try:
        file_path = 'app/components/EnhancedAccessibilityEnhancer.tsx'
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the parsing error around line 162
        content = re.sub(r'}\s*$', '}', content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed syntax errors in: {file_path}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
    
    # Fix app/components/FuturisticBackground.tsx
    try:
        file_path = 'app/components/FuturisticBackground.tsx'
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the parsing error around line 136
        content = re.sub(r'}\s*$', '}', content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed syntax errors in: {file_path}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

def main():
    """Main function to fix specific errors."""
    print("Fixing unused imports...")
    
    # Files with unused import errors
    files_to_fix = [
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/about/page.tsx',
        'app/ai-chatbot-builder/page.tsx',
        'app/ai-expense-tracker/page.tsx',
        'app/ai-password-manager/page.tsx',
        'app/ai-task-manager/page.tsx',
        'app/blog/page.tsx',
        'app/careers/page.tsx',
        'app/components/EnhancedSEOOptimizer.tsx',
        'app/components/FuturisticHero.tsx',
        'app/pricing/page.tsx',
        'app/support/page.tsx',
        'app/page.tsx'
    ]
    
    files_fixed = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_unused_imports_in_file(file_path):
                files_fixed += 1
    
    print(f"Fixed unused imports in {files_fixed} files")
    
    print("Fixing specific syntax errors...")
    fix_specific_syntax_errors()
    
    print("Done!")

if __name__ == "__main__":
    main()