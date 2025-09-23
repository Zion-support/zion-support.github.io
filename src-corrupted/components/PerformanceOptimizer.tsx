import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  overallScore: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCompression?: boolean;
  enableCaching?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCompression = true,
  enableCaching = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const location = useLocation();

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => prev ? { ...prev, fcp: fcp.startTime } : null);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => prev ? { ...prev, lcp: lcp.startTime } : null);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1] as PerformanceEntry & { processingStart: number };
          if (fid) {
            setMetrics(prev => prev ? { ...prev, fid: fid.processingStart - fid.startTime } : null);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean };
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => prev ? { ...prev, ttfb } : null);
        }

        // Calculate overall score
        setTimeout(() => {
          if (metrics) {
            const score = calculatePerformanceScore(metrics);
            setMetrics(prev => prev ? { ...prev, overallScore: score } : null);
          }
        }, 1000);

      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    }
  }, [metrics]);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
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
  }, []);

  // Route change optimization
  useEffect(() => {
    setIsOptimizing(true);
    
    // Preload next likely routes
    if (enablePreloading) {
      const preloadRoutes = getPreloadRoutes(location.pathname);
      preloadRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    }

    // Optimize images and resources
    if (enableCompression) {
      optimizeImages();
      optimizeFonts();
    }

    // Enable caching strategies
    if (enableCaching) {
      enableServiceWorkerCaching();
    }

    const timer = setTimeout(() => setIsOptimizing(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname, enablePreloading, enableCompression, enableCaching]);

  // Performance monitoring on mount
  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  // Lazy loading optimization
  const optimizedChildren = useMemo(() => {
    if (enableLazyLoading) {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            'data-lazy-loaded': 'true',
            'data-performance-optimized': 'true'
          });
        }
        return child;
      });
    }
    return children;
  }, [children, enableLazyLoading]);

  // Preload routes based on current location
  const getPreloadRoutes = (currentPath: string): string[] => {
    const routeMap: Record<string, string[]> = {
      '/': ['/services', '/ai-solutions', '/about'],
      '/services': ['/ai-services', '/cloud-devops', '/enterprise-solutions'],
      '/ai-solutions': ['/ai-services', '/quantum-technology', '/cybersecurity'],
      '/about': ['/team', '/mission', '/careers']
    };
    
    return routeMap[currentPath] || [];
  };

  // Image optimization
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  // Font optimization
  const optimizeFonts = () => {
    if ('fonts' in document) {
      (document as any).fonts.ready.then(() => {
        // Fonts are loaded, optimize rendering
        // Note: fontDisplay is not available in CSSStyleDeclaration
        // This would need to be handled via CSS custom properties
      });
    }
  };

  // Service worker caching
  const enableServiceWorkerCaching = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.warn);
    }
  };

  // Performance insights
  const getPerformanceInsights = () => {
    if (!metrics) return null;
    
    const insights = [];
    if (metrics.fcp > 1000) insights.push('Consider optimizing First Contentful Paint');
    if (metrics.lcp > 2500) insights.push('Largest Contentful Paint could be improved');
    if (metrics.fid > 100) insights.push('First Input Delay needs optimization');
    if (metrics.cls > 0.1) insights.push('Cumulative Layout Shift should be reduced');
    
    return insights;
  };

  return (
    <>
      {isOptimizing && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 z-50">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
        </div>
      )}
      
      {optimizedChildren}
      
      {/* Performance Debug Panel (Development Only) */}
      {import.meta.env.DEV && metrics && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs z-50">
          <h3 className="font-bold mb-2">Performance Metrics</h3>
          <div className="space-y-1">
            <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
            <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
            <div>FID: {metrics.fid?.toFixed(0)}ms</div>
            <div>CLS: {metrics.cls?.toFixed(3)}</div>
            <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
            <div className="font-bold">Score: {metrics.overallScore}/100</div>
          </div>
          {getPerformanceInsights() && (
            <div className="mt-2 pt-2 border-t border-gray-600">
              <div className="font-bold text-yellow-400">Insights:</div>
              {getPerformanceInsights()?.map((insight, index) => (
                <div key={index} className="text-yellow-300 text-xs">• {insight}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      data-src={src}
      alt={alt}
      className={`lazy ${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        filter: isLoaded ? 'none' : 'blur(5px)'
      }}
    />
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    if ('performance' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          cls += layoutShiftEntry.value;
        }
        setMetrics(prev => ({ ...prev, cls }));
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

  return metrics;
};

export default PerformanceOptimizer;
