#!/usr/bin/env python3
"""
Fix utils files with merge conflicts and syntax errors
"""
import os
import re

def fix_accessibility_utils():
    """Fix accessibilityUtils.ts"""
    content = '''export interface AccessibilityConfig {
  enabled: boolean;
  announceChanges: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: number;
  screenReader: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enabled: true,
      announceChanges: true,
      highContrast: false,
      reducedMotion: false,
      fontSize: 16,
      screenReader: false,
      ...config
    };
  }

  announceToScreenReader(message: string): void {
    if (this.config.enabled && this.config.announceChanges) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility utils initialized');
    }
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  setReducedMotion(enabled: boolean): void {
    this.config.reducedMotion = enabled;
    if (enabled) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
    document.documentElement.style.fontSize = `${size}px`;
  }

  enableScreenReader(): void {
    this.config.screenReader = true;
    document.body.classList.add('screen-reader-optimized');
  }

  disableScreenReader(): void {
    this.config.screenReader = false;
    document.body.classList.remove('screen-reader-optimized');
  }

  getConfig(): AccessibilityConfig {
    return { ...this.config };
  }
}'''
    
    with open('/workspace/utils/accessibilityUtils.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: utils/accessibilityUtils.ts")

def fix_performance_utils():
    """Fix performanceUtils.ts"""
    content = '''export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export interface PerformanceConfig {
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

  private config: PerformanceConfig = {
    enabled: true,
    monitoring: true,
    optimization: true
  };

  measureLoadTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      return this.metrics.loadTime;
    }
    return 0;
  }

  measureRenderTime(): number {
    if (typeof window !== 'undefined' && window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.renderTime = fcp.startTime;
        return this.metrics.renderTime;
      }
    }
    return 0;
  }

  measureMemoryUsage(): number {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      return this.metrics.memoryUsage;
    }
    return 0;
  }

  measureFPS(): number {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFrame = (currentTime: number) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(measureFrame);
    };
    
    requestAnimationFrame(measureFrame);
    return this.metrics.fps;
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  optimizeImages(): void {
    if (!this.config.optimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  preloadCriticalResources(): void {
    if (!this.config.optimization) return;
    
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  enableMonitoring(): void {
    this.config.monitoring = true;
    this.measureLoadTime();
    this.measureRenderTime();
    this.measureMemoryUsage();
    this.measureFPS();
  }

  disableMonitoring(): void {
    this.config.monitoring = false;
  }

  getConfig(): PerformanceConfig {
    return { ...this.config };
  }
}'''
    
    with open('/workspace/utils/performanceUtils.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: utils/performanceUtils.ts")

def fix_seo_utils():
    """Fix seoUtils.ts"""
    content = '''export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  generateMetaTags() {
    return {
      title: this.config.title,
      description: this.config.description,
      keywords: this.config.keywords.join(', '),
      canonical: this.config.canonicalUrl,
      'og:title': this.config.title,
      'og:description': this.config.description,
      'og:image': this.config.ogImage,
      'og:type': this.config.ogType || 'website',
      'twitter:card': this.config.twitterCard || 'summary_large_image',
      'twitter:title': this.config.title,
      'twitter:description': this.config.description,
      'twitter:image': this.config.ogImage,
    };
  }

  updateTitle(title: string): void {
    document.title = title;
  }

  updateMetaDescription(description: string): void {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  updateMetaKeywords(keywords: string[]): void {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  updateOpenGraphTags(tags: Record<string, string>): void {
    Object.entries(tags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  updateTwitterCardTags(tags: Record<string, string>): void {
    Object.entries(tags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  generateStructuredData(data: Record<string, any>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  getConfig(): SEOConfig {
    return { ...this.config };
  }
}'''
    
    with open('/workspace/utils/seoUtils.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: utils/seoUtils.ts")

def fix_cn_utils():
    """Fix cn.ts"""
    content = '''import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}'''
    
    with open('/workspace/utils/cn.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: utils/cn.ts")

def main():
    """Main function"""
    print("Fixing utils files...")
    fix_accessibility_utils()
    fix_performance_utils()
    fix_seo_utils()
    fix_cn_utils()
    print("All utils files fixed!")

if __name__ == "__main__":
    main()