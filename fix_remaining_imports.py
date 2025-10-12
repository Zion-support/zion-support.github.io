#!/usr/bin/env python3
import os
import re
import glob

def fix_remaining_unused_imports(file_path):
    """Fix remaining unused imports by removing specific unused ones"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # List of commonly unused imports to remove
        unused_imports = [
            'LinkIcon', 'isVisible', 'Send', 'MousePointer', 'Hash', 'AtSign', 
            'Terminal', 'Layers', 'Lightbulb', 'Type', 'Image', 'Video', 'Music',
            'selectedPlan', 'setSelectedPlan', 'CheckCircle', 'CreditCard',
            'GitBranch', 'Workflow', 'Link as LinkIcon', 'Wifi', 'Package',
            'TrendingUp', 'Calendar', 'Sparkles', 'Cpu', 'Database', 'Smartphone',
            'Lock', 'Monitor', 'Server', 'Mail', 'Phone', 'MapPin', 'Play'
        ]
        
        # Find import statements and remove unused imports
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            if line.strip().startswith('import') and '{' in line:
                # Handle destructured imports
                import_part = line.split('from')[0].strip()
                from_part = 'from' + line.split('from')[1] if 'from' in line else ''
                
                # Extract imports from the destructuring
                if '{' in import_part:
                    imports_start = import_part.find('{') + 1
                    imports_end = import_part.find('}')
                    if imports_start > 0 and imports_end > imports_start:
                        imports_text = import_part[imports_start:imports_end]
                        imports_list = [imp.strip() for imp in imports_text.split(',')]
                        
                        # Filter out unused imports
                        used_imports = []
                        for imp in imports_list:
                            # Handle 'as' aliases
                            actual_name = imp.split(' as ')[0].strip()
                            if actual_name not in unused_imports and imp not in unused_imports:
                                used_imports.append(imp)
                        
                        if used_imports:
                            new_line = f"import {{ {', '.join(used_imports)} }} {from_part}"
                            new_lines.append(new_line)
                        # If no used imports, skip the line entirely
                    else:
                        new_lines.append(line)
                else:
                    new_lines.append(line)
            elif 'const [' in line and '] = useState' in line:
                # Handle useState destructuring
                if 'selectedPlan' in line or 'setSelectedPlan' in line or 'isVisible' in line:
                    # Skip unused useState variables
                    continue
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Clean up extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed remaining unused imports in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files in the app directory
    app_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if fix_remaining_unused_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed remaining unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()