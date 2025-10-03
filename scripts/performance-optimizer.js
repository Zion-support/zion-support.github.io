#!/usr/bin/env node

/**
 * Advanced Performance Optimizer for Zion Website
 * Optimizes bundle size, implements code splitting, and enhances performance
 */

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Advanced Performance Optimization...');

// 1. Bundle Analysis and Optimization
function optimizeBundle() {
  console.log('📦 Optimizing bundle configuration...');
  
  const viteConfig = {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['framer-motion', 'lucide-react'],
            charts: ['recharts']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  };

  fs.writeFileSync('vite.config.optimized.js', 
    `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ${JSON.stringify(viteConfig, null, 2).replace(/^{|}$/g, '').slice(1, -1)}
})`);
  
  console.log('✅ Bundle optimization configuration created');
}

// 2. Image Optimization
function optimizeImages() {
  console.log('🖼️ Setting up image optimization...');
  
  const imageOptimizer = `
// Image optimization utilities
export const optimizeImage = (src, width, quality = 80) => {
  if (src.includes('placeholder.com')) return src;
  
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    f: 'auto'
  });
  
  return \`\${src}?\${params.toString()}\`;
};

export const getResponsiveImage = (src, sizes = [320, 640, 1024, 1920]) => {
  return sizes.map(size => ({
    src: optimizeImage(src, size),
    width: size
  }));
};
`;

  fs.writeFileSync('src/utils/imageOptimization.ts', imageOptimizer);
  console.log('✅ Image optimization utilities created');
}

// 3. Performance Monitoring
function setupPerformanceMonitoring() {
  console.log('📊 Setting up performance monitoring...');
  
  const performanceMonitor = `
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  
  init() {
    getCLS(this.handleMetric.bind(this));
    getFID(this.handleMetric.bind(this));
    getFCP(this.handleMetric.bind(this));
    getLCP(this.handleMetric.bind(this));
    getTTFB(this.handleMetric.bind(this));
  }
  
  private handleMetric(metric: any) {
    this.metrics.set(metric.name, metric.value);
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals'
      });
    }
    
    console.log(\`📊 \${metric.name}: \${metric.value}\`);
  }
  
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

export const performanceMonitor = new PerformanceMonitor();
`;

  fs.writeFileSync('src/utils/performanceMonitor.ts', performanceMonitor);
  console.log('✅ Performance monitoring setup complete');
}

// 4. Code Splitting Implementation
function implementCodeSplitting() {
  console.log('🔀 Implementing code splitting...');
  
  const lazyLoader = `
import { lazy, Suspense, ComponentType } from 'react';

// Lazy loading wrapper with loading state
export const lazyLoad = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload components for better UX
export const preloadComponent = (importFunc: () => Promise<any>) => {
  return () => {
    importFunc();
    return null;
  };
};
`;

  fs.writeFileSync('src/utils/lazyLoader.ts', lazyLoader);
  console.log('✅ Code splitting implementation complete');
}

// 5. Error Boundary
function createErrorBoundary() {
  console.log('🛡️ Creating error boundary...');
  
  const errorBoundary = `
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send error to monitoring service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
`;

  fs.writeFileSync('src/components/ErrorBoundary.tsx', errorBoundary);
  console.log('✅ Error boundary created');
}

// 6. SEO Optimization
function optimizeSEO() {
  console.log('🔍 Setting up SEO optimization...');
  
  const seoOptimizer = `
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, artificial intelligence, cloud computing, IT solutions, digital transformation',
  image = '/images/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
`;

  fs.writeFileSync('src/components/SEO.tsx', seoOptimizer);
  console.log('✅ SEO optimization setup complete');
}

// 7. Security Enhancements
function enhanceSecurity() {
  console.log('🔒 Implementing security enhancements...');
  
  const securityUtils = `
// Security utilities
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Content Security Policy headers
export const getCSPHeaders = () => ({
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.zion.tech"
  ].join('; ')
});
`;

  fs.writeFileSync('src/utils/security.ts', securityUtils);
  console.log('✅ Security enhancements implemented');
}

// 8. Accessibility Improvements
function improveAccessibility() {
  console.log('♿ Implementing accessibility improvements...');
  
  const accessibilityUtils = `
// Accessibility utilities
export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return () => element.removeEventListener('keydown', handleTabKey);
};

// High contrast mode detection
export const isHighContrastMode = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
`;

  fs.writeFileSync('src/utils/accessibility.ts', accessibilityUtils);
  console.log('✅ Accessibility improvements implemented');
}

// Run all optimizations
async function runOptimizations() {
  try {
    optimizeBundle();
    optimizeImages();
    setupPerformanceMonitoring();
    implementCodeSplitting();
    createErrorBoundary();
    optimizeSEO();
    enhanceSecurity();
    improveAccessibility();
    
    console.log('\\n🎉 All optimizations completed successfully!');
    console.log('📈 Performance improvements:');
    console.log('   • Bundle size optimization');
    console.log('   • Code splitting implementation');
    console.log('   • Image optimization');
    console.log('   • Performance monitoring');
    console.log('   • Error boundaries');
    console.log('   • SEO optimization');
    console.log('   • Security enhancements');
    console.log('   • Accessibility improvements');
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

runOptimizations();