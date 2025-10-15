#!/usr/bin/env python3
"""
Script to fix component exports and imports comprehensively
"""
import os
import re
import glob

def fix_component_exports(file_path):
    """Fix component exports and imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has issues
        if 'export default' not in content:
            return False
        
        # Fix 5G pages - make sure component name matches export
        if '5g-' in file_path:
            # Extract the component name from the file path
            path_parts = file_path.split('/')
            page_name = path_parts[-2]  # Get the directory name
            component_name = 'FiveG' + ''.join(word.capitalize() for word in page_name.split('-')[1:]) + 'Page'
            
            # Fix the export statement
            content = re.sub(r'export default [^;]+;', f'export default {component_name};', content)
            
            # Fix the component declaration
            content = re.sub(r'const [^=]+ = \(\) => {', f'const {component_name} = () => {{', content)
            
            # Add missing imports that are used in the component
            missing_imports = []
            if 'Shield' in content and 'Shield' not in content.split('import')[0]:
                missing_imports.append('Shield')
            if 'Settings' in content and 'Settings' not in content.split('import')[0]:
                missing_imports.append('Settings')
            if 'Activity' in content and 'Activity' not in content.split('import')[0]:
                missing_imports.append('Activity')
            if 'Brain' in content and 'Brain' not in content.split('import')[0]:
                missing_imports.append('Brain')
            if 'Target' in content and 'Target' not in content.split('import')[0]:
                missing_imports.append('Target')
            if 'Zap' in content and 'Zap' not in content.split('import')[0]:
                missing_imports.append('Zap')
            if 'Database' in content and 'Database' not in content.split('import')[0]:
                missing_imports.append('Database')
            if 'Users' in content and 'Users' not in content.split('import')[0]:
                missing_imports.append('Users')
            
            # Add missing imports to the import statement
            if missing_imports:
                import_line = content.split('\n')[0]  # Get the first import line
                if 'from' in import_line:
                    # Add to existing import
                    before_from = import_line.split(' from')[0]
                    if before_from.endswith('}'):
                        # Add to existing object
                        before_from = before_from[:-1] + ', ' + ', '.join(missing_imports) + '}'
                    else:
                        # Add new object
                        before_from = before_from + ', {' + ', '.join(missing_imports) + '}'
                    content = content.replace(import_line, before_from + ' from' + import_line.split(' from')[1])
        
        # Fix AI pages - make sure component name matches export
        elif 'ai-' in file_path:
            # Extract the component name from the file path
            path_parts = file_path.split('/')
            page_name = path_parts[-2]  # Get the directory name
            component_name = 'Ai' + ''.join(word.capitalize() for word in page_name.split('-')[1:]) + 'Page'
            
            # Fix the export statement
            content = re.sub(r'export default [^;]+;', f'export default {component_name};', content)
            
            # Fix the component declaration
            content = re.sub(r'const [^=]+ = \(\) => {', f'const {component_name} = () => {{', content)
            
            # Add missing imports that are used in the component
            missing_imports = []
            if 'Shield' in content and 'Shield' not in content.split('import')[0]:
                missing_imports.append('Shield')
            if 'Settings' in content and 'Settings' not in content.split('import')[0]:
                missing_imports.append('Settings')
            if 'Activity' in content and 'Activity' not in content.split('import')[0]:
                missing_imports.append('Activity')
            if 'Brain' in content and 'Brain' not in content.split('import')[0]:
                missing_imports.append('Brain')
            if 'Target' in content and 'Target' not in content.split('import')[0]:
                missing_imports.append('Target')
            if 'Zap' in content and 'Zap' not in content.split('import')[0]:
                missing_imports.append('Zap')
            if 'Database' in content and 'Database' not in content.split('import')[0]:
                missing_imports.append('Database')
            if 'Users' in content and 'Users' not in content.split('import')[0]:
                missing_imports.append('Users')
            
            # Add missing imports to the import statement
            if missing_imports:
                import_line = content.split('\n')[0]  # Get the first import line
                if 'from' in import_line:
                    # Add to existing import
                    before_from = import_line.split(' from')[0]
                    if before_from.endswith('}'):
                        # Add to existing object
                        before_from = before_from[:-1] + ', ' + ', '.join(missing_imports) + '}'
                    else:
                        # Add new object
                        before_from = before_from + ', {' + ', '.join(missing_imports) + '}'
                    content = content.replace(import_line, before_from + ' from' + import_line.split(' from')[1])
        
        # Fix 404 page
        elif '404' in file_path:
            content = re.sub(r'export default [^;]+;', 'export default NotFoundPage;', content)
            content = re.sub(r'const [^=]+ = \(\) => {', 'const NotFoundPage = () => {', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed component exports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_component_exports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed component exports in {files_fixed} files")

if __name__ == "__main__":
    main()