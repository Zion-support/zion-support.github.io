import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  const [isOptimized, setIsOptimized] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Performance optimization strategies
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');

      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top <= window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization]);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = '/fonts/inter-var.woff2';
    document.head.appendChild(link);
  }, []);

  const optimizeCSS = useCallback(() => {
    // Inline critical CSS
    const criticalCSS = `
      .critical-styles {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }, []);

  // Apply optimizations
  useEffect(() => {
    if (isOptimized) return;

    const timer = setTimeout(() => {
      optimizeImages();
      optimizeFonts();
      optimizeCSS();
      setIsOptimized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isOptimized, optimizeImages, optimizeFonts, optimizeCSS]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    const recommendations = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint by reducing render-blocking resources');
    }
    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and fonts');
    }
    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }
    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Fix Cumulative Layout Shift by setting explicit dimensions for images');
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte by optimizing server response time');
    }
    
    return recommendations;
  }, [metrics]);

  return (
    <>
      {/* Performance Monitor */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance Monitor</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Performance Score:</span>
              <span className={`font-bold ${performanceScore >= 90 ? 'text-green-600' : performanceScore >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                {performanceScore}/100
              </span>
            </div>
            {metrics.fcp && (
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={metrics.fcp <= 1800 ? 'text-green-600' : 'text-red-600'}>
                  {Math.round(metrics.fcp)}ms
                </span>
              </div>
            )}
            {metrics.lcp && (
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={metrics.lcp <= 2500 ? 'text-green-600' : 'text-red-600'}>
                  {Math.round(metrics.lcp)}ms
                </span>
              </div>
            )}
            {metrics.fid && (
              <div className="flex justify-between">
                <span>FID:</span>
                <span className={metrics.fid <= 100 ? 'text-green-600' : 'text-red-600'}>
                  {Math.round(metrics.fid)}ms
                </span>
              </div>
            )}
            {metrics.cls && (
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={metrics.cls <= 0.1 ? 'text-green-600' : 'text-red-600'}>
                  {metrics.cls.toFixed(3)}
                </span>
              </div>
            )}
            {metrics.ttfb && (
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span className={metrics.ttfb <= 600 ? 'text-green-600' : 'text-red-600'}>
                  {Math.round(metrics.ttfb)}ms
                </span>
              </div>
            )}
          </div>
          
          {/* Recommendations */}
          {getRecommendations().length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <h4 className="text-xs font-semibold text-gray-700 mb-2">Recommendations:</h4>
              <ul className="space-y-1">
                {getRecommendations().map((rec, index) => (
                  <li key={index} className="text-xs text-gray-600">• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Optimized content */}
      <div className={isOptimized ? 'optimized' : ''}>
        {children}
      </div>

      {/* Performance optimization styles */}
      <style jsx global>{`
        .optimized img {
          transition: opacity 0.3s ease;
        }
        
        .optimized img[loading="lazy"] {
          opacity: 0;
        }
        
        .optimized img[loading="lazy"].loaded {
          opacity: 1;
        }
        
        /* Critical CSS for above-the-fold content */
        .critical-styles {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Optimize animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default PerformanceOptimizer;