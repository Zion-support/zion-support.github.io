#!/usr/bin/env python3
"""
Script to fix page files that are missing closing braces and export statements.
"""

import os
import re

def fix_page_file(file_path):
    """Fix a single page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        
        # Track if we're in a component
        in_component = False
        component_name = None
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Skip empty lines at the start
            if not new_lines and not stripped:
                continue
                
            # Detect component start
            if 'import React' in line and not in_component:
                new_lines.append(line)
                continue
                
            if 'import SEOHead' in line:
                new_lines.append(line)
                continue
                
            # Look for component definition
            if 'const ' in line and 'React.FC' in line and not in_component:
                component_name = line.split('const ')[1].split(':')[0].strip()
                in_component = True
                new_lines.append(line)
                continue
                
            # Look for return statement
            if stripped.startswith('return (') and in_component:
                new_lines.append(line)
                continue
                
            # Handle JSX content
            if in_component and (stripped.startswith('<') or stripped.startswith('</') or stripped.startswith(')')):
                new_lines.append(line)
                continue
                
            # Handle closing of return statement
            if stripped == ');' and in_component:
                new_lines.append(line)
                continue
                
            # Handle closing of component
            if stripped == '};' and in_component:
                new_lines.append(line)
                in_component = False
                continue
                
            # Skip malformed lines
            if not stripped or stripped in ['<div>', '<>', 'return (', 'return(']:
                continue
                
            # Add the line if it looks valid
            if stripped or (new_lines and new_lines[-1].strip()):
                new_lines.append(line)
        
        # Ensure proper component structure
        if in_component:
            if not any(');' in line for line in new_lines):
                new_lines.append('  );')
            if not any(line.strip() == '};' for line in new_lines):
                new_lines.append('};')
        
        # Add export statement if missing
        if component_name and not any('export default' in line for line in new_lines):
            new_lines.append(f'export default {component_name};')
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed page file: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all page files."""
    page_files = [
        'app/pages/5GSolutionsPage.tsx',
        'app/pages/AIServicesPage.tsx',
        'app/pages/AISolutionsPage.tsx',
        'app/pages/CareersPage.tsx',
        'app/pages/CaseStudiesPage.tsx',
        'app/pages/CloudInfrastructurePage.tsx',
        'app/pages/CloudSolutionsPage.tsx',
        'app/pages/ContactPage.tsx',
        'app/pages/CybersecurityPage.tsx',
        'app/pages/DigitalTransformationPage.tsx',
        'app/pages/DocumentationPage.tsx',
        'app/pages/FiveGSolutionsPage.tsx',
        'app/pages/ITServicesPage.tsx',
        'app/pages/MicroSaaSPage.tsx',
        'app/pages/PortfolioPage.tsx',
        'app/pages/TeamPage.tsx',
        'app/sitemap/page.tsx'
    ]
    
    for file_path in page_files:
        if os.path.exists(file_path):
            fix_page_file(file_path)

if __name__ == "__main__":
    main()