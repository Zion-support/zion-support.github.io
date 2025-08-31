import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimization?: boolean;
  enableReporting?: boolean;
  reportUrl?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimization = true,
  enableReporting = true,
  reportUrl = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      }
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[entries.length - 1];
      if (fid) {
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
      }
    });

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

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // DOM Load Time
    const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, domLoad }));

    // Window Load Time
    const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, windowLoad }));

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not fully supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableMonitoring]);

  // Performance optimization
  const optimizePerformance = useCallback(() => {
    if (!enableOptimization) return;

    // Preload critical resources
    const criticalResources = [
      '/css/index.css',
      '/js/main.js',
      '/logo192.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.js') ? 'script' : 'image';
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    // Optimize fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });

    // Enable resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ];

    resourceHints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.rel === 'preconnect') {
          link.setAttribute('crossorigin', 'anonymous');
        }
        document.head.appendChild(link);
      }
    });

    setIsOptimized(true);
  }, [enableOptimization]);

  // Performance reporting
  const reportPerformance = useCallback(async () => {
    if (!enableReporting || !metrics) return;

    try {
      const reportData = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
        metrics,
        vitals: {
          fcp: metrics.fcp < 1800 ? 'good' : metrics.fcp < 3000 ? 'needs-improvement' : 'poor',
          lcp: metrics.lcp < 2500 ? 'good' : metrics.lcp < 4000 ? 'needs-improvement' : 'poor',
          fid: metrics.fid < 100 ? 'good' : metrics.fid < 300 ? 'needs-improvement' : 'poor',
          cls: metrics.cls < 0.1 ? 'good' : metrics.cls < 0.25 ? 'needs-improvement' : 'poor'
        }
      };

      await fetch(reportUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  }, [enableReporting, metrics, reportUrl]);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                if (confirm('A new version is available. Would you like to update?')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                }
              }
            });
          }
        });
      } catch (error) {
        console.warn('Service Worker registration failed:', error);
      }
    }
  }, []);

  // Intersection Observer for lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enableOptimization) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    }, observerOptions);

    // Observe images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, [enableOptimization]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (!enableOptimization) return;

    // Clean up event listeners
    const cleanupEventListeners = () => {
      // Remove unused event listeners
      const elements = document.querySelectorAll('[data-event-cleanup]');
      elements.forEach(element => {
        element.removeAttribute('data-event-cleanup');
      });
    };

    // Optimize animations
    const optimizeAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        if (!element.classList.contains('animate-optimized')) {
          element.classList.add('animate-optimized');
          element.style.willChange = 'transform, opacity';
        }
      });
    };

    cleanupEventListeners();
    optimizeAnimations();
  }, [enableOptimization]);

  useEffect(() => {
    const cleanup = measurePerformance();
    registerServiceWorker();
    
    return cleanup;
  }, [measurePerformance, registerServiceWorker]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      optimizePerformance();
      setupLazyLoading();
      optimizeMemory();
    } else {
      window.addEventListener('load', () => {
        optimizePerformance();
        setupLazyLoading();
        optimizeMemory();
      });
    }
  }, [optimizePerformance, setupLazyLoading, optimizeMemory]);

  useEffect(() => {
    if (metrics && Object.values(metrics).every(val => val !== undefined)) {
      reportPerformance();
    }
  }, [metrics, reportPerformance]);

  // Performance insights display (development only)
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs z-50">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        <div className="space-y-1">
          <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
          <div>FID: {metrics.fid?.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
        </div>
        <div className="mt-2 text-green-400">
          {isOptimized ? '✓ Optimized' : 'Optimizing...'}
        </div>
      </div>
    );
  }

  return null;
};
