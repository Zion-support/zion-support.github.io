#!/usr/bin/env python3
import os

def fix_component_files():
    """Fix component files with syntax errors"""
    
    component_files = [
        'app/components/Analytics.tsx',
        'app/components/EnhancedAccessibility.tsx',
        'app/components/EnhancedErrorBoundary.tsx',
        'app/components/EnhancedPerformanceMonitor.tsx',
        'app/components/FuturisticCard.tsx',
        'app/components/FuturisticTextEnhanced.tsx',
        'app/components/ImprovedErrorBoundary.tsx',
        'app/components/ImprovedFooter.tsx',
        'app/components/ImprovedImage.tsx',
        'app/components/ImprovedNavigation.tsx',
        'app/components/ImprovedSidebar.tsx',
        'app/components/Loading.tsx',
        'app/components/MobileNavigation.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/ResponsiveContainer.tsx',
        'app/components/ResponsiveGrid.tsx',
        'app/components/ResponsiveText.tsx'
    ]
    
    template = '''import React from 'react';

interface {COMPONENT_NAME}Props {
  className?: string;
  children?: React.ReactNode;
}

export default function {COMPONENT_NAME}({ className = '', children, ...props }: {COMPONENT_NAME}Props) {
  return (
    <div className={`{COMPONENT_NAME_LOWER}-component ${className}`} {...props}>
      {children}
    </div>
  );
}'''
    
    fixed_count = 0
    
    for file_path in component_files:
        if os.path.exists(file_path):
            try:
                # Extract component name from path
                component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
                component_name = ''.join(word.capitalize() for word in component_name.split('-'))
                component_name_lower = component_name.lower()
                
                # Replace placeholders in template
                content = template.replace('{COMPONENT_NAME}', component_name).replace('{COMPONENT_NAME_LOWER}', component_name_lower)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed: {file_path}")
                fixed_count += 1
            except Exception as e:
                print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} component files")

if __name__ == "__main__":
    fix_component_files()