import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export default function PerformanceOptimizer({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      new PerformanceObserver((entryList) => {
        let cls = 0;
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const navigation = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
        }
      }).observe({ entryTypes: ['navigation'] });

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Auto-optimization functions
  const optimizeImages = useCallback(() => {
    if (!autoOptimize) return;

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
    });
  }, [autoOptimize]);

  const optimizeFonts = useCallback(() => {
    if (!autoOptimize) return;

    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }, [autoOptimize]);

  const optimizeCSS = useCallback(() => {
    if (!autoOptimize) return;

    // Remove unused CSS
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        // This is a simplified version - in production you'd want more sophisticated CSS purging
        rules.forEach(rule => {
          if (rule instanceof CSSStyleRule) {
            const selector = rule.selectorText;
            if (selector && !document.querySelector(selector)) {
              // Rule might be unused - could be removed in production
            }
          }
        });
      } catch (error) {
        // Cross-origin stylesheets will throw errors
      }
    });
  }, [autoOptimize]);

  const runOptimizations = useCallback(async () => {
    if (!autoOptimize) return;

    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        optimizeFonts(),
        optimizeCSS()
      ]);

      // Additional optimizations
      if ('serviceWorker' in navigator) {
        // Register service worker for caching
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }

      // Preload critical resources
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });

    } catch (error) {
      console.warn('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, optimizeImages, optimizeFonts, optimizeCSS]);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    runOptimizations();

    // Re-run optimizations on route changes
    const handleRouteChange = () => {
      setTimeout(runOptimizations, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [enabled, measurePerformance, runOptimizations]);

  // Performance score calculation
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    // TTFB scoring (0-100)
    if (metrics.ttfb > 800) score -= 15;
    else if (metrics.ttfb > 600) score -= 5;

    return Math.max(0, score);
  };

  if (!enabled) return null;

  return (
    <>
      {showMetrics && metrics && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Performance Metrics
          </h3>
          <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
            <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
            <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
            <div>FID: {metrics.fid?.toFixed(0)}ms</div>
            <div>CLS: {metrics.cls?.toFixed(3)}</div>
            <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
              <strong>Score: {getPerformanceScore(metrics)}/100</strong>
            </div>
          </div>
          {isOptimizing && (
            <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
              Optimizing...
            </div>
          )}
        </div>
      )}
    </>
  );
}