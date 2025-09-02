import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory: number;
  cpu: number;
  network: string;
}

interface ComprehensiveOptimizerProps {
  enabled?: boolean;
  showPanel?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  autoOptimize?: boolean;
}

export const ComprehensiveOptimizer: React.FC<ComprehensiveOptimizerProps> = ({
  enabled = true,
  showPanel = false,
  position = 'top-right',
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memory: 0,
    cpu: 0,
    network: 'unknown'
  });
  
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // Measure Core Web Vitals
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
          
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          }
          
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize / 1024 / 1024 }));
      }

      // Detect network type
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ ...prev, network: connection.effectiveType || 'unknown' }));
      }
    }
  }, [enabled]);

  // Auto-optimization strategies
  const applyOptimizations = useCallback(() => {
    if (!autoOptimize) return;

    const newOptimizations: string[] = [];

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        newOptimizations.push('Lazy loading enabled for images');
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
        newOptimizations.push(`Preloaded critical resource: ${resource}`);
      }
    });

    // Optimize animations
    const animatedElements = document.querySelectorAll('[style*="animation"], [style*="transition"]');
    animatedElements.forEach(el => {
      if (!(el as HTMLElement).style.willChange) {
        (el as HTMLElement).style.willChange = 'transform, opacity';
        newOptimizations.push('Optimized animations with will-change');
      }
    });

    // Enable service worker caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        newOptimizations.push('Service worker caching enabled');
      }).catch(() => {
        // Service worker not available
      });
    }

    setOptimizations(prev => [...prev, ...newOptimizations]);
  }, [autoOptimize]);

  // Performance optimization
  const optimizePerformance = useCallback(() => {
    setIsOptimizing(true);
    
    // Debounce scroll events
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Handle scroll events
      }, 16); // 60fps
    };
    
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    // Optimize resize events
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize events
      }, 250);
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    // Cleanup
    setTimeout(() => {
      setIsOptimizing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      applyOptimizations();
    }
  }, [enabled, measurePerformance, applyOptimizations]);

  const getPerformanceGrade = () => {
    const { fcp, lcp, fid, cls } = metrics;
    
    let score = 100;
    
    if (fcp > 1800) score -= 20;
    if (lcp > 2500) score -= 25;
    if (fid > 100) score -= 20;
    if (cls > 0.1) score -= 15;
    
    if (score >= 90) return { grade: 'A', color: 'text-green-500' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-500' };
    return { grade: 'D', color: 'text-red-500' };
  };

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  if (!enabled) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
              <button
                onClick={optimizePerformance}
                disabled={isOptimizing}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isOptimizing ? 'Optimizing...' : 'Optimize'}
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Performance Grade:</span>
                <span className={`font-bold ${getPerformanceGrade().color}`}>
                  {getPerformanceGrade().grade}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">FCP:</span>
                  <span className="ml-1 font-mono">{metrics.fcp.toFixed(0)}ms</span>
                </div>
                <div>
                  <span className="text-gray-500">LCP:</span>
                  <span className="ml-1 font-mono">{metrics.lcp.toFixed(0)}ms</span>
                </div>
                <div>
                  <span className="text-gray-500">FID:</span>
                  <span className="ml-1 font-mono">{metrics.fid.toFixed(0)}ms</span>
                </div>
                <div>
                  <span className="text-gray-500">CLS:</span>
                  <span className="ml-1 font-mono">{metrics.cls.toFixed(3)}</span>
                </div>
                <div>
                  <span className="text-gray-500">Memory:</span>
                  <span className="ml-1 font-mono">{metrics.memory.toFixed(1)}MB</span>
                </div>
                <div>
                  <span className="text-gray-500">Network:</span>
                  <span className="ml-1 font-mono">{metrics.network}</span>
                </div>
              </div>
              
              {optimizations.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Applied Optimizations:</h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                        ✓ {optimization}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComprehensiveOptimizer;