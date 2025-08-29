import React, { useEffect, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  // Performance monitoring
  useEffect(() => {
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

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // TTFB measurement
  useEffect(() => {
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    };

    if (document.readyState === 'complete') {
      measureTTFB();
    } else {
      window.addEventListener('load', measureTTFB);
      return () => window.removeEventListener('load', measureTTFB);
    }
  }, []);

  // Performance optimization triggers
  useEffect(() => {
    if (metrics) {
      // Trigger optimizations based on performance metrics
      if (metrics.fcp > 2000) {
        // Optimize images and critical resources
        optimizeImages();
      }
      if (metrics.lcp > 4000) {
        // Implement better lazy loading
        implementLazyLoading();
      }
      if (metrics.cls > 0.1) {
        // Fix layout shifts
        fixLayoutShifts();
      }
      setIsOptimized(true);
    }
  }, [metrics]);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const implementLazyLoading = useCallback(() => {
    // Implement intersection observer for better lazy loading
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          lazyObserver.unobserve(element);
        }
      });
    });

    lazyElements.forEach(element => lazyObserver.observe(element));
  }, []);

  const fixLayoutShifts = useCallback(() => {
    // Add explicit dimensions to prevent layout shifts
    const elements = document.querySelectorAll('img, video, iframe');
    elements.forEach(element => {
      if (!element.hasAttribute('width') || !element.hasAttribute('height')) {
        element.setAttribute('width', '100%');
        element.setAttribute('height', 'auto');
      }
    });
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 
                  resource.endsWith('.jpg') ? 'image' : 'style';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Service worker registration
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Performance budget monitoring
  useEffect(() => {
    const checkPerformanceBudget = () => {
      if (metrics) {
        const budget = {
          fcp: 2000,
          lcp: 4000,
          fid: 100,
          cls: 0.1,
          ttfb: 800
        };

        const violations = [];
        if (metrics.fcp > budget.fcp) violations.push(`FCP: ${metrics.fcp}ms > ${budget.fcp}ms`);
        if (metrics.lcp > budget.lcp) violations.push(`LCP: ${metrics.lcp}ms > ${budget.lcp}ms`);
        if (metrics.fid > budget.fid) violations.push(`FID: ${metrics.fid}ms > ${budget.fid}ms`);
        if (metrics.cls > budget.cls) violations.push(`CLS: ${metrics.cls} > ${budget.cls}`);
        if (metrics.ttfb > budget.ttfb) violations.push(`TTFB: ${metrics.ttfb}ms > ${budget.ttfb}ms`);

        if (violations.length > 0) {
          console.warn('Performance budget violations:', violations);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'performance_budget_violation', {
              violations: violations.join(', ')
            });
          }
        }
      }
    };

    if (metrics) {
      checkPerformanceBudget();
    }
  }, [metrics]);

  return (
    <>
      {children}
      
      {/* Performance monitoring overlay (development only) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
          <div className="mb-2 font-bold">Performance Metrics</div>
          <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
          <div>FID: {metrics.fid?.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
          <div className="mt-2 text-green-400">
            {isOptimized ? '✓ Optimized' : 'Optimizing...'}
          </div>
        </div>
      )}
    </>
  );
};

// Intersection Observer Hook for lazy loading
export const useLazyLoad = (threshold = 0.1, rootMargin = '50px') => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return [ref, inView];
};

// Resource preloader
export const ResourcePreloader: React.FC<{ resources: string[] }> = ({ resources }) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 
                resource.endsWith('.jpg') || resource.endsWith('.png') || resource.endsWith('.webp') ? 'image' : 
                resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [resources]);

  return null;
};

// Performance budget component
export const PerformanceBudget: React.FC<{ budget: Partial<PerformanceMetrics> }> = ({ budget }) => {
  const [currentMetrics, setCurrentMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      // Update metrics based on entries
      // This is a simplified version - you'd want more sophisticated logic
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  if (!currentMetrics) return null;

  return (
    <div className="performance-budget">
      {/* Budget visualization */}
    </div>
  );
};
