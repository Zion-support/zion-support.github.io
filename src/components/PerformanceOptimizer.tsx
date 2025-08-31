import React, { useEffect, useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  lazyLoadComponents = true,
  preloadCritical = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('');

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enabled || !optimizeImages) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }

      // Add srcset for responsive images if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        
        // Generate responsive srcset
        const sizes = [320, 640, 768, 1024, 1280, 1920];
        const srcset = sizes
          .map(size => `${baseName}-${size}w${extension} ${size}w`)
          .join(', ');
        
        if (srcset) {
          img.srcset = srcset;
          img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px';
        }
      }
    });
  }, [enabled, optimizeImages]);

  // Component lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enabled || !lazyLoadComponents) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Load images
          const images = target.querySelectorAll('img[data-src]');
          images.forEach(img => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
            }
          });

          // Load iframes
          const iframes = target.querySelectorAll('iframe[data-src]');
          iframes.forEach(iframe => {
            const dataSrc = iframe.getAttribute('data-src');
            if (dataSrc) {
              iframe.src = dataSrc;
              iframe.removeAttribute('data-src');
            }
          });

          // Load components
          const components = target.querySelectorAll('[data-lazy-component]');
          components.forEach(component => {
            const componentType = component.getAttribute('data-lazy-component');
            if (componentType) {
              // Dynamic import for lazy components
              import(`../components/${componentType}`).then(module => {
                const Component = module.default;
                if (Component) {
                  // Render the component
                  const container = component.parentElement;
                  if (container) {
                    const root = ReactDOM.createRoot(container);
                    root.render(<Component />);
                  }
                }
              }).catch(error => {
                console.warn(`Failed to load lazy component ${componentType}:`, error);
              });
            }
          });

          observer.unobserve(target);
        }
      });
    }, observerOptions);

    // Observe all elements with lazy loading attributes
    const lazyElements = document.querySelectorAll('[data-src], [data-lazy-component]');
    lazyElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled, lazyLoadComponents]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enabled || !preloadCritical) return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
        link.as = 'image';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      }
      
      document.head.appendChild(link);
    });
  }, [enabled, preloadCritical]);

  // Performance optimization strategies
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;

    setIsOptimizing(true);
    setOptimizationStatus('Starting optimizations...');

    try {
      // Optimize images
      setOptimizationStatus('Optimizing images...');
      optimizeImages();

      // Setup lazy loading
      setOptimizationStatus('Setting up lazy loading...');
      setupLazyLoading();

      // Preload critical resources
      setOptimizationStatus('Preloading critical resources...');
      preloadCriticalResources();

      // Optimize CSS delivery
      setOptimizationStatus('Optimizing CSS delivery...');
      const criticalCSS = document.querySelector('style[data-critical]');
      if (criticalCSS) {
        criticalCSS.setAttribute('media', 'all');
      }

      // Optimize JavaScript execution
      setOptimizationStatus('Optimizing JavaScript execution...');
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.async && !script.defer) {
          script.defer = true;
        }
      });

      setOptimizationStatus('Optimizations completed successfully!');
      
      // Auto-hide status after 3 seconds
      setTimeout(() => {
        setOptimizationStatus('');
      }, 3000);

    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('Optimization failed. Check console for details.');
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, setupLazyLoading, preloadCriticalResources]);

  // Initialize performance monitoring and optimizations
  useEffect(() => {
    if (!enabled) return;

    // Start performance monitoring
    const cleanup = measurePerformance();

    // Run initial optimizations after a short delay
    const timer = setTimeout(() => {
      runOptimizations();
    }, 1000);

    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, [enabled, measurePerformance, runOptimizations]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics.fcp && !metrics.lcp && !metrics.fid && !metrics.cls) return null;

    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 20;
    }

    // LCP scoring (0-100)
    if (metrics.lcp) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 20;
    }

    // FID scoring (0-100)
    if (metrics.fid) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 20;
    }

    // CLS scoring (0-100)
    if (metrics.cls) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 20;
    }

    return Math.max(0, score);
  }, [metrics]);

  // Performance grade
  const performanceGrade = useMemo(() => {
    if (!performanceScore) return null;
    
    if (performanceScore >= 90) return { grade: 'A', color: 'text-green-500' };
    if (performanceScore >= 80) return { grade: 'B', color: 'text-yellow-500' };
    if (performanceScore >= 70) return { grade: 'C', color: 'text-orange-500' };
    return { grade: 'D', color: 'text-red-500' };
  }, [performanceScore]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Performance Metrics
            </h3>
            {performanceGrade && (
              <span className={`text-lg font-bold ${performanceGrade.color}`}>
                {performanceGrade.grade}
              </span>
            )}
          </div>
          
          <div className="space-y-1 text-xs">
            {metrics.fcp && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                <span className={metrics.fcp < 1800 ? 'text-green-600' : metrics.fcp < 3000 ? 'text-yellow-600' : 'text-red-600'}>
                  {Math.round(metrics.fcp)}ms
                </span>
              </div>
            )}
            {metrics.lcp && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                <span className={metrics.lcp < 2500 ? 'text-green-600' : metrics.lcp < 4000 ? 'text-yellow-600' : 'text-red-600'}>
                  {Math.round(metrics.lcp)}ms
                </span>
              </div>
            )}
            {metrics.fid && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">FID:</span>
                <span className={metrics.fid < 100 ? 'text-green-600' : metrics.fid < 300 ? 'text-yellow-600' : 'text-red-600'}>
                  {Math.round(metrics.fid)}ms
                </span>
              </div>
            )}
            {metrics.cls && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">CLS:</span>
                <span className={metrics.cls < 0.1 ? 'text-green-600' : metrics.cls < 0.25 ? 'text-yellow-600' : 'text-red-600'}>
                  {metrics.cls.toFixed(3)}
                </span>
              </div>
            )}
          </div>

          {performanceScore !== null && (
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 dark:text-gray-400">Score:</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {performanceScore}/100
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Optimization Status */}
      {optimizationStatus && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white rounded-lg shadow-lg p-3 max-w-sm z-50">
          <div className="flex items-center space-x-2">
            {isOptimizing && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            <span className="text-sm">{optimizationStatus}</span>
          </div>
        </div>
      )}
    </>
  );
};
