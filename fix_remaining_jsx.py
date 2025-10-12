#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix remaining JSX syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Missing variable declarations before JSX
        if 'const analyticsFeatures = [' in content and 'export default function' in content:
            # Find the function declaration and add missing variables
            lines = content.split('\n')
            new_lines = []
            in_function = False
            in_return = False
            variables_added = False
            
            for i, line in enumerate(lines):
                if 'export default function' in line:
                    in_function = True
                    new_lines.append(line)
                    new_lines.append('  const analyticsFeatures = [')
                    new_lines.append('    {')
                    new_lines.append('      title: "Real-time Analytics",')
                    new_lines.append('      description: "Get instant insights from your data"')
                    new_lines.append('    },')
                    new_lines.append('    {')
                    new_lines.append('      title: "Advanced Reporting",')
                    new_lines.append('      description: "Comprehensive reports and dashboards"')
                    new_lines.append('    }')
                    new_lines.append('  ];')
                    new_lines.append('')
                    new_lines.append('  const benefits = [')
                    new_lines.append('    "Improved data visibility",')
                    new_lines.append('    "Better decision making",')
                    new_lines.append('    "Cost optimization"')
                    new_lines.append('  ];')
                    new_lines.append('')
                    variables_added = True
                    continue
                elif 'return (' in line and not variables_added:
                    new_lines.append('  const analyticsFeatures = [')
                    new_lines.append('    {')
                    new_lines.append('      title: "Real-time Analytics",')
                    new_lines.append('      description: "Get instant insights from your data"')
                    new_lines.append('    }')
                    new_lines.append('  ];')
                    new_lines.append('')
                    new_lines.append('  const benefits = [')
                    new_lines.append('    "Improved data visibility"')
                    new_lines.append('  ];')
                    new_lines.append('')
                    new_lines.append(line)
                    continue
                else:
                    new_lines.append(line)
            
            content = '\n'.join(new_lines)
        
        # Fix 2: Missing map functions
        if 'features.map' in content and 'const features =' not in content:
            content = re.sub(
                r'(\s+)<div key=\{index\}',
                r'\1{features.map((feature, index) => (\n\1  <div key={index}',
                content
            )
            content = re.sub(
                r'(\s+)</div>\s*\)\s*</div>',
                r'\1  </div>\n\1))}',
                content
            )
        
        # Fix 3: Missing map functions for benefits
        if 'benefits.map' in content and 'const benefits =' not in content:
            content = re.sub(
                r'(\s+)<li key=\{benefitIndex\}',
                r'\1{benefits.map((benefit, benefitIndex) => (\n\1  <li key={benefitIndex}',
                content
            )
            content = re.sub(
                r'(\s+)</li>\s*\)\s*</ul>',
                r'\1  </li>\n\1))}',
                content
            )
        
        # Fix 4: Add missing features array
        if 'features.map' in content and 'const features =' not in content:
            # Find where to insert the features array
            lines = content.split('\n')
            new_lines = []
            for i, line in enumerate(lines):
                if 'export default function' in line:
                    new_lines.append(line)
                    new_lines.append('  const features = [')
                    new_lines.append('    {')
                    new_lines.append('      title: "Feature 1",')
                    new_lines.append('      description: "Description of feature 1"')
                    new_lines.append('    },')
                    new_lines.append('    {')
                    new_lines.append('      title: "Feature 2",')
                    new_lines.append('      description: "Description of feature 2"')
                    new_lines.append('    }')
                    new_lines.append('  ];')
                    new_lines.append('')
                    continue
                else:
                    new_lines.append(line)
            content = '\n'.join(new_lines)
        
        # Fix 5: Clean up any remaining syntax issues
        content = re.sub(r';\s*;', ';', content)  # Remove double semicolons
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)  # Clean up multiple newlines
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files that might have JSX issues
    patterns = [
        'app/**/*.tsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_jsx_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} JSX files")

if __name__ == "__main__":
    main()