import React, { useEffect, useCallback, useMemo } from 'react';

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
  targetScore?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  targetScore = 90
}) => {
  const metrics = useMemo<PerformanceMetrics>(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }), []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  const addResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            metrics.lcp = entry.startTime;
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            metrics.fid = entry.processingStart - entry.startTime;
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      metrics.ttfb = performance.timing.responseStart - performance.timing.requestStart;
    }
  }, [metrics]);

  const calculatePerformanceScore = useCallback(() => {
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
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }, [metrics]);

  const optimizeBundle = useCallback(() => {
    // Dynamic imports for non-critical components
    const loadNonCriticalComponents = () => {
      import('./LazyLoader').then(({ default: LazyLoader }) => {
        // Component loaded successfully
      }).catch(() => {
        // Handle loading error
      });
    };

    // Load non-critical components after initial render
    setTimeout(loadNonCriticalComponents, 2000);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Add resource hints
    addResourceHints();
    
    // Optimize fonts
    optimizeFonts();
    
    // Start performance measurement
    measurePerformance();
    
    // Optimize images after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }
    
    // Optimize bundle
    optimizeBundle();

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, [enabled, addResourceHints, optimizeFonts, measurePerformance, optimizeImages, optimizeBundle]);

  if (!enabled) return null;

  const performanceScore = calculatePerformanceScore();
  const isGoodScore = performanceScore >= targetScore;

  return (
    <>
      {showMetrics && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 border border-gray-200 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Performance Score: {performanceScore}/100
          </div>
          <div className={`w-full bg-gray-200 rounded-full h-2 ${isGoodScore ? 'bg-green-200' : 'bg-yellow-200'}`}>
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                isGoodScore ? 'bg-green-500' : 'bg-yellow-500'
              }`}
              style={{ width: `${performanceScore}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            FCP: {metrics.fcp.toFixed(0)}ms | LCP: {metrics.lcp.toFixed(0)}ms
          </div>
        </div>
      )}
    </>
  );
};

