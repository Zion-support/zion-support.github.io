#!/usr/bin/env python3
"""
Script to fix component files
"""
import os

def fix_advanced_performance_monitor(file_path):
    """Fix the AdvancedPerformanceMonitor component"""
    try:
        fixed_content = '''import React from 'react';

interface AdvancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdvancedPerformanceMonitor({ className = '', children }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_futuristic_text(file_path):
    """Fix the FuturisticText component"""
    try:
        fixed_content = '''import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_image_optimizer(file_path):
    """Fix the ImageOptimizer component"""
    try:
        fixed_content = '''import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageOptimizer({ src, alt, className = '', width, height }: ImageOptimizerProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix component files"""
    fixes = [
        ('app/components/AdvancedPerformanceMonitor.tsx', fix_advanced_performance_monitor),
        ('app/components/FuturisticText.tsx', fix_futuristic_text),
        ('app/components/ImageOptimizer.tsx', fix_image_optimizer),
    ]
    
    for file_path, fix_func in fixes:
        if os.path.exists(file_path):
            fix_func(file_path)

if __name__ == "__main__":
    main()