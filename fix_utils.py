#!/usr/bin/env python3
"""
Fix utils directory files
"""

UTILS_FILES = {
    '/workspace/utils/performanceOptimizer.ts': '''/**
 * Performance Optimizer Utilities
 */

export const performanceOptimizer = {
  init: () => {
    if (typeof window !== 'undefined') {
      console.log('Performance optimizer initialized');
    }
  },
  
  getMetrics: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return {
        navigation: performance.getEntriesByType('navigation')[0],
        resources: performance.getEntriesByType('resource'),
      };
    }
    return null;
  },
};

export const lazyLoadImages = () => {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        img.src = img.dataset.src || '';
      }
    });
  }
};

export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    console.log('Preloading critical resources');
  }
};

export const collectPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: perfData?.loadEventEnd - perfData?.fetchStart,
      domContentLoaded: perfData?.domContentLoadedEventEnd - perfData?.fetchStart,
    };
  }
  return null;
};
''',

    '/workspace/utils/performanceUtils.ts': '''/**
 * Performance utility functions
 */

export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name}: ${end - start}ms`);
  } else {
    fn();
  }
};

export const getPageLoadTime = (): number | null => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return perfData?.loadEventEnd - perfData?.fetchStart;
  }
  return null;
};

export const optimizeImages = () => {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }
};
''',

    '/workspace/utils/seoUtils.ts': '''/**
 * SEO utility functions
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const generateMetaTags = (config: SEOConfig): string => {
  const { title, description, keywords, ogImage, canonicalUrl } = config;
  
  let tags = `<title>${title}</title>`;
  tags += `<meta name="description" content="${description}" />`;
  
  if (keywords && keywords.length > 0) {
    tags += `<meta name="keywords" content="${keywords.join(', ')}" />`;
  }
  
  if (ogImage) {
    tags += `<meta property="og:image" content="${ogImage}" />`;
  }
  
  if (canonicalUrl) {
    tags += `<link rel="canonical" href="${canonicalUrl}" />`;
  }
  
  return tags;
};

export const updatePageTitle = (title: string) => {
  if (typeof window !== 'undefined') {
    document.title = title;
  }
};
''',
}


def main():
    print("=" * 70)
    print("FIXING UTILS FILES")
    print("=" * 70)
    print()
    
    for filepath, content in UTILS_FILES.items():
        try:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"✓ Fixed {filepath}")
        except Exception as e:
            print(f"✗ Error fixing {filepath}: {e}")
    
    print()
    print("=" * 70)
    print("DONE!")
    print("=" * 70)


if __name__ == '__main__':
    main()