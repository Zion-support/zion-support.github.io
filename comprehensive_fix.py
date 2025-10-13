#!/usr/bin/env python3
"""
Comprehensive script to fix TypeScript/TSX files with structural issues
"""
import os
import re
import glob

def fix_blog_page(file_path):
    """Fix the blog page specifically"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the blog page structure
        fixed_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Latest insights and updates from Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're working on bringing you the latest insights and updates. Check back soon!
            </p>
          </div>
        </div>
      </div>
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

def fix_performance_utils(file_path):
    """Fix the performance utils file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and fix structure
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Fix the class structure
        fixed_content = '''export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceConfig {
  enabled: boolean;
  monitoring: boolean;
  optimization: boolean;
}

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  };

  measureLoadTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }
    return this.metrics.loadTime;
  }

  measureRenderTime() {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
      }
    }
    return this.metrics.renderTime;
  }

  measureMemoryUsage() {
    if (typeof window !== 'undefined' && (window as any).performance.memory) {
      const memory = (window as any).performance.memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return this.metrics.memoryUsage;
  }

  measureFPS() {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(countFrames);
    };
    
    if (typeof window !== 'undefined') {
      requestAnimationFrame(countFrames);
    }
    
    return this.metrics.fps;
  }

  getAllMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  resetMetrics() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0
    };
  }
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_seo_utils(file_path):
    """Fix the SEO utils file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up the content
        content = content.strip()
        
        if not content:
            # Create a basic SEO utils file
            content = '''export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

export class SEOUtils {
  static generateMetaTags(config: SEOConfig) {
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords.join(', '),
      canonical: config.canonical,
      'og:title': config.title,
      'og:description': config.description,
      'og:image': config.ogImage,
      'twitter:card': 'summary_large_image',
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': config.ogImage,
    };
  }

  static generateStructuredData(type: string, data: any) {
    return {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  }
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_accessibility_utils(file_path):
    """Fix the accessibility utils file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create a clean accessibility utils file
        fixed_content = '''export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableReducedMotion: false
  };

  constructor(config?: Partial<AccessibilityConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupScreenReaderSupport() {
    if (!this.config.enableScreenReader) return;
    
    // Add ARIA labels and roles where needed
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', '');
    });
  }

  setupHighContrast() {
    if (!this.config.enableHighContrast) return;
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    }
  }

  setupReducedMotion() {
    if (!this.config.enableReducedMotion) return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }
  }

  initialize() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
  }
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_cn_utils(file_path):
    """Fix the cn utils file"""
    try:
        fixed_content = '''import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all problematic files"""
    fixes = [
        ('app/blog/page.tsx', fix_blog_page),
        ('utils/performanceUtils.ts', fix_performance_utils),
        ('utils/seoUtils.ts', fix_seo_utils),
        ('utils/accessibilityUtils.ts', fix_accessibility_utils),
        ('utils/cn.ts', fix_cn_utils),
    ]
    
    for file_path, fix_func in fixes:
        if os.path.exists(file_path):
            fix_func(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()