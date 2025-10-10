#!/usr/bin/env node

/**
 * Performance Optimizer for Zion Tech Group Website
 * Optimizes images, CSS, and JavaScript for better performance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize Vite configuration for better performance
const viteConfigPath = path.join(__dirname, '../vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Add performance optimizations
const performanceOptimizations = `
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion',
      'lucide-react',
      '@heroicons/react',
      'recharts'
    ],
    exclude: ['@vitejs/plugin-react']
  },
  
  // Build optimizations
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-ui';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            return 'vendor';
          }
          // Page chunks - group similar pages
          if (id.includes('/app/ai-') || id.includes('/app/machine-learning') || id.includes('/app/nlp') || id.includes('/app/computer-vision')) {
            return 'pages-ai';
          }
          if (id.includes('/app/it-') || id.includes('/app/cloud-') || id.includes('/app/cybersecurity') || id.includes('/app/devops')) {
            return 'pages-it';
          }
          if (id.includes('/app/blog/')) {
            return 'pages-blog';
          }
          if (id.includes('/app/')) {
            return 'pages-other';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        top_ret: true,
        toplevel: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false,
        ecma: 2020,
        indent_level: 0,
        indent_start: 0,
        inline_script: false,
        keep_numbers: false,
        max_line_len: false,
        preamble: null,
        preserve_annotations: false,
        quote_keys: false,
        quote_style: 0,
        safari10: true,
        semicolons: true,
        shebang: false,
        shorthand: false,
        source_map: null,
        webkit: true,
        width: 80,
        wrap_iife: false,
        wrap_func_args: true,
      }
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
`;

// Update vite config if not already optimized
if (!viteConfig.includes('manualChunks')) {
  viteConfig = viteConfig.replace(
    'optimizeDeps: {',
    performanceOptimizations
  );
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Updated Vite configuration for performance');
}

// 2. Create a performance monitoring component
const performanceMonitorPath = path.join(__dirname, '../app/components/PerformanceMonitor.tsx');
const performanceMonitorContent = `'use client';
import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('TTFB:', navigation.responseStart - navigation.requestStart);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
`;

if (!fs.existsSync(performanceMonitorPath)) {
  fs.writeFileSync(performanceMonitorPath, performanceMonitorContent);
  console.log('✅ Created PerformanceMonitor component');
}

// 3. Create lazy loading utility
const lazyLoadingPath = path.join(__dirname, '../app/utils/lazyLoading.ts');
const lazyLoadingContent = `/**
 * Lazy Loading Utilities
 * Provides utilities for lazy loading components and images
 */

import { lazy, ComponentType } from 'react';

/**
 * Creates a lazy-loaded component with error boundary
 */
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: any) {
    return (
      <LazyComponent {...props} />
    );
  };
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImage(img: HTMLImageElement, src: string) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(img);
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.webp',
    '/images/logo.svg'
  ];
  
  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
`;

if (!fs.existsSync(lazyLoadingPath)) {
  fs.writeFileSync(lazyLoadingPath, lazyLoadingContent);
  console.log('✅ Created lazy loading utilities');
}

// 4. Create SEO optimization utility
const seoOptimizerPath = path.join(__dirname, '../app/utils/seoOptimizer.ts');
const seoOptimizerContent = `/**
 * SEO Optimization Utilities
 * Provides utilities for better SEO performance
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
}

/**
 * Generate meta tags for SEO
 */
export function generateMetaTags(seoData: SEOData) {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/images/og-default.jpg',
    structuredData
  } = seoData;

  return {
    title: \`\${title} | Zion Tech Group\`,
    description,
    keywords: keywords.join(', '),
    canonical: canonicalUrl,
    openGraph: {
      title: \`\${title} | Zion Tech Group\`,
      description,
      url: canonicalUrl,
      image: ogImage,
      type: 'website',
      siteName: 'Zion Tech Group'
    },
    twitter: {
      card: 'summary_large_image',
      title: \`\${title} | Zion Tech Group\`,
      description,
      image: ogImage
    },
    structuredData: structuredData ? JSON.stringify(structuredData) : undefined
  };
}

/**
 * Generate structured data for services
 */
export function generateServiceStructuredData(service: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: \`https://ziontechgroup.com\${crumb.url}\`
    }))
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
`;

if (!fs.existsSync(seoOptimizerPath)) {
  fs.writeFileSync(seoOptimizerPath, seoOptimizerContent);
  console.log('✅ Created SEO optimization utilities');
}

// 5. Create accessibility utilities
const accessibilityPath = path.join(__dirname, '../app/utils/accessibility.ts');
const accessibilityContent = `/**
 * Accessibility Utilities
 * Provides utilities for better accessibility
 */

/**
 * Generate ARIA labels for better screen reader support
 */
export function generateAriaLabel(element: string, context?: string): string {
  const labels: Record<string, string> = {
    'button': 'Button',
    'link': 'Link',
    'image': 'Image',
    'heading': 'Heading',
    'navigation': 'Navigation',
    'main': 'Main content',
    'aside': 'Sidebar',
    'footer': 'Footer'
  };
  
  const baseLabel = labels[element] || element;
  return context ? \`\${baseLabel}: \${context}\` : baseLabel;
}

/**
 * Generate accessible color contrast
 */
export function getAccessibleColor(backgroundColor: string): string {
  // Simple contrast calculation - in production, use a proper color library
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 128 ? '#000000' : '#ffffff';
}

/**
 * Generate focus styles
 */
export function generateFocusStyles(): string {
  return \`
    :focus {
      outline: 2px solid #00ffff;
      outline-offset: 2px;
    }
    
    :focus:not(:focus-visible) {
      outline: none;
    }
    
    :focus-visible {
      outline: 2px solid #00ffff;
      outline-offset: 2px;
    }
  \`;
}

/**
 * Generate skip links
 */
export function generateSkipLinks(): Array<{href: string, text: string}> {
  return [
    { href: '#main-content', text: 'Skip to main content' },
    { href: '#navigation', text: 'Skip to navigation' },
    { href: '#footer', text: 'Skip to footer' }
  ];
}

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReader(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && 
         style.visibility !== 'hidden' && 
         element.getAttribute('aria-hidden') !== 'true';
}

/**
 * Announce to screen readers
 */
export function announceToScreenReader(message: string): void {
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
`;

if (!fs.existsSync(accessibilityPath)) {
  fs.writeFileSync(accessibilityPath, accessibilityContent);
  console.log('✅ Created accessibility utilities');
}

console.log('🎉 Performance optimization completed!');
console.log('📊 Key improvements:');
console.log('  - Optimized Vite configuration');
console.log('  - Added performance monitoring');
console.log('  - Created lazy loading utilities');
console.log('  - Added SEO optimization tools');
console.log('  - Enhanced accessibility utilities');