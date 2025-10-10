#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Automatically optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize bundle splitting
function optimizeBundleSplitting() {
  console.log('📦 Optimizing bundle splitting...');
  
  const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
  let config = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Enhanced chunk splitting strategy
  const optimizedChunkConfig = `
    manualChunks: (id) => {
      // Vendor chunks - more granular splitting
      if (id.includes('node_modules')) {
        if (id.includes('react') || id.includes('react-dom')) {
          return 'vendor-react';
        }
        if (id.includes('framer-motion')) {
          return 'vendor-framer';
        }
        if (id.includes('lucide-react') || id.includes('@heroicons')) {
          return 'vendor-icons';
        }
        if (id.includes('recharts')) {
          return 'vendor-charts';
        }
        if (id.includes('react-router-dom')) {
          return 'vendor-router';
        }
        if (id.includes('tailwindcss') || id.includes('postcss')) {
          return 'vendor-css';
        }
        if (id.includes('lighthouse') || id.includes('jest')) {
          return 'vendor-dev';
        }
        return 'vendor-other';
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
      
      // Component chunks
      if (id.includes('/components/')) {
        return 'components';
      }
      
      // Utils chunks
      if (id.includes('/utils/') || id.includes('/hooks/')) {
        return 'utils';
      }
    }`;
  
  // Replace the existing manualChunks configuration
  config = config.replace(/manualChunks: \(id\) => \{[\s\S]*?\}/, optimizedChunkConfig);
  
  fs.writeFileSync(viteConfigPath, config);
  console.log('✅ Bundle splitting optimized');
}

// 2. Optimize images
function optimizeImages() {
  console.log('🖼️ Optimizing images...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Create optimized image loading component
  const optimizedImageComponent = `import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4='
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={\`relative overflow-hidden \${className}\`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            backgroundImage: \`url(\${placeholder})\`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          className={\`transition-opacity duration-300 \${isLoaded ? 'opacity-100' : 'opacity-0'}\`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage;`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(componentsDir, 'OptimizedImage.tsx'), optimizedImageComponent);
  console.log('✅ Image optimization component created');
}

// 3. Create performance monitoring
function createPerformanceMonitoring() {
  console.log('📊 Creating performance monitoring...');
  
  const performanceMonitor = `import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeWebVitals();
    this.initializeCustomMetrics();
  }

  private initializeWebVitals() {
    getCLS((metric) => {
      this.metrics.cls = metric.value;
      this.reportMetric('CLS', metric.value);
    });

    getFID((metric) => {
      this.metrics.fid = metric.value;
      this.reportMetric('FID', metric.value);
    });

    getFCP((metric) => {
      this.metrics.fcp = metric.value;
      this.reportMetric('FCP', metric.value);
    });

    getLCP((metric) => {
      this.metrics.lcp = metric.value;
      this.reportMetric('LCP', metric.value);
    });

    getTTFB((metric) => {
      this.metrics.ttfb = metric.value;
      this.reportMetric('TTFB', metric.value);
    });
  }

  private initializeCustomMetrics() {
    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Resources taking > 1s
              console.warn('Slow resource detected:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize
              });
            }
          }
        });
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime
          });
        });
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    }
  }

  private reportMetric(name: string, value: number) {
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        event_category: 'Performance'
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(\`📊 \${name}:\`, value);
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getReport() {
    return {
      webVitals: this.metrics,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink,
        rtt: (navigator as any).connection.rtt
      } : null
    };
  }

  public destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();
export default performanceMonitor;`;

  const utilsDir = path.join(__dirname, '..', 'src', 'utils');
  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(utilsDir, 'performanceMonitor.ts'), performanceMonitor);
  console.log('✅ Performance monitoring created');
}

// 4. Create SEO optimization
function createSEOOptimization() {
  console.log('🔍 Creating SEO optimization...');
  
  const seoOptimizer = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = ['AI solutions', 'IT services', 'digital transformation', 'enterprise software', 'automation'],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl || window.location.href} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'SEOOptimizer.tsx'), seoOptimizer);
  console.log('✅ SEO optimization created');
}

// 5. Create accessibility enhancements
function createAccessibilityEnhancements() {
  console.log('♿ Creating accessibility enhancements...');
  
  const accessibilityEnhancer = `import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip to main content functionality
    const addSkipToMainContent = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = \`
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      \`;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // High contrast mode detection
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);
    };

    // Reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
    };

    // Focus management
    const addFocusManagement = () => {
      let focusableElements: HTMLElement[] = [];
      
      const updateFocusableElements = () => {
        focusableElements = Array.from(
          document.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
      };
      
      const trapFocus = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };
      
      document.addEventListener('keydown', trapFocus);
      updateFocusableElements();
      
      // Update focusable elements when DOM changes
      const observer = new MutationObserver(updateFocusableElements);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        document.removeEventListener('keydown', trapFocus);
        observer.disconnect();
      };
    };

    // Initialize all accessibility features
    addSkipToMainContent();
    addHighContrastSupport();
    addReducedMotionSupport();
    const cleanup = addFocusManagement();
    
    return cleanup;
  }, []);

  return null;
};

export default AccessibilityEnhancer;`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'AccessibilityEnhancer.tsx'), accessibilityEnhancer);
  console.log('✅ Accessibility enhancements created');
}

// 6. Create error boundary
function createErrorBoundary() {
  console.log('🛡️ Creating error boundary...');
  
  const errorBoundary = `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    if (typeof window !== 'undefined') {
      console.error('Error caught by boundary:', error, errorInfo);
      
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          event_category: 'Error'
        });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors ml-4"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'ErrorBoundary.tsx'), errorBoundary);
  console.log('✅ Error boundary created');
}

// Run all optimizations
async function runOptimizations() {
  try {
    optimizeBundleSplitting();
    optimizeImages();
    createPerformanceMonitoring();
    createSEOOptimization();
    createAccessibilityEnhancements();
    createErrorBoundary();
    
    console.log('🎉 Performance optimization completed successfully!');
    console.log('📈 Key improvements:');
    console.log('  • Enhanced bundle splitting for better caching');
    console.log('  • Optimized image loading with lazy loading');
    console.log('  • Comprehensive performance monitoring');
    console.log('  • Advanced SEO optimization');
    console.log('  • Accessibility enhancements');
    console.log('  • Error boundary for better error handling');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

runOptimizations();