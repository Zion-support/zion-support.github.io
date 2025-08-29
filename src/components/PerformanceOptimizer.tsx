import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resources, setResources] = useState<ResourceTiming[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize performance monitoring
    initializePerformanceMonitoring();
    
    // Setup intersection observer for lazy loading
    setupIntersectionObserver();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Setup service worker for caching
    setupServiceWorker();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const initializePerformanceMonitoring = () => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if ('navigation' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
      }
    }
  };

  const setupIntersectionObserver = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName === 'IMG') {
              const img = target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observerRef.current?.unobserve(img);
              }
            }
            
            // Lazy load components
            if (target.dataset.lazyComponent) {
              loadLazyComponent(target.dataset.lazyComponent);
              observerRef.current?.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe all lazy elements
    document.querySelectorAll('[data-lazy]').forEach(el => {
      observerRef.current?.observe(el);
    });
  };

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const font = document.createElement('link');
    font.rel = 'preload';
    font.as = 'font';
    font.href = '/fonts/inter-var.woff2';
    font.crossOrigin = 'anonymous';
    document.head.appendChild(font);

    // DNS prefetch for external domains
    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  };

  const setupServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  };

  const loadLazyComponent = async (componentName: string) => {
    try {
      // Dynamic import for lazy components
      const module = await import(`../components/${componentName}`);
      console.log(`Lazy loaded component: ${componentName}`);
    } catch (error) {
      console.error(`Failed to load component: ${componentName}`, error);
    }
  };

  const optimizeImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const image = img as HTMLImageElement;
      if (image.dataset.src) {
        // Add loading="lazy" for better performance
        image.loading = 'lazy';
        
        // Add decoding="async" for non-blocking image decoding
        image.decoding = 'async';
        
        // Add fetchpriority="high" for above-the-fold images
        if (image.dataset.priority === 'high') {
          image.fetchPriority = 'high';
        }
      }
    });
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    try {
      // Optimize images
      optimizeImages();
      
      // Prefetch next page
      prefetchNextPage();
      
      // Warm up connections
      warmUpConnections();
      
      // Optimize CSS delivery
      optimizeCSSDelivery();
      
      console.log('Performance optimizations completed');
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const prefetchNextPage = () => {
    // Prefetch likely next pages based on user behavior
    const likelyPages = ['/services', '/about', '/contact'];
    likelyPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  };

  const warmUpConnections = () => {
    // Warm up connections to external domains
    const domains = ['api.ziontechgroup.com', 'cdn.ziontechgroup.com'];
    domains.forEach(domain => {
      const img = new Image();
      img.src = `https://${domain}/ping`;
    });
  };

  const optimizeCSSDelivery = () => {
    // Inline critical CSS
    const criticalCSS = document.querySelector('style[data-critical]');
    if (criticalCSS) {
      criticalCSS.setAttribute('media', 'all');
    }
    
    // Defer non-critical CSS
    const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"][data-non-critical]');
    nonCriticalCSS.forEach(link => {
      link.setAttribute('media', 'print');
      link.setAttribute('onload', "this.media='all'");
    });
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2500) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  return (
    <div className="performance-optimizer">
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm z-50"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold">Performance</span>
            </div>
            
            <div className="space-y-1 text-xs">
              <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
              <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
              <div>FID: {metrics.fid?.toFixed(0)}ms</div>
              <div>CLS: {metrics.cls?.toFixed(3)}</div>
              <div>Score: {getPerformanceScore()}/100</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimization Controls */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Performance'}
        </motion.button>
      </div>

      {/* Resource Monitoring */}
      <div className="fixed top-20 right-4 z-50 max-w-xs">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
          <h3 className="font-semibold mb-2">Resource Monitor</h3>
          <div className="space-y-1 text-xs">
            {resources.slice(0, 5).map((resource, index) => (
              <div key={index} className="flex justify-between">
                <span className="truncate">{resource.name}</span>
                <span>{resource.duration}ms</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
