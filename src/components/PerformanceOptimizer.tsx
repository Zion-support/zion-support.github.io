import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('');

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('performance' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('PerformanceObserver not supported');
    }

    // Measure other metrics
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => prev ? { ...prev, ttfb } : null);
      }
    };

    const measureDOMLoad = () => {
      const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      setMetrics(prev => prev ? { ...prev, domLoad } : null);
    };

    const measureWindowLoad = () => {
      const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => prev ? { ...prev, windowLoad } : null);
    };

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
        }
      });
    });

    try {
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
    } catch (e) {
      console.warn('FCP observer not supported');
    }

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift') {
          const layoutShift = entry as LayoutShift;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
            setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
          }
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }

    // Measure FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const firstInput = entry as PerformanceEventTiming;
          setMetrics(prev => prev ? { ...prev, fid: firstInput.processingStart - firstInput.startTime } : null);
        }
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    });

    // Measure timing metrics
    if (document.readyState === 'complete') {
      measureTTFB();
      measureDOMLoad();
      measureWindowLoad();
    } else {
      window.addEventListener('load', () => {
        measureTTFB();
        measureDOMLoad();
        measureWindowLoad();
      });
    }

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  }, [enabled]);

  // Auto-optimization
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize || !enabled) return;

    setIsOptimizing(true);
    setOptimizationStatus('Starting optimizations...');

    try {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
      setOptimizationStatus('Image lazy loading optimized');

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      setOptimizationStatus('Critical resources preloaded');

      // Optimize animations
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.willChange = 'transform, opacity';
        }
      });

      setOptimizationStatus('Animations optimized');

      // Service worker optimization
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          setOptimizationStatus('Service worker registered');
        } catch (error) {
          console.warn('Service worker registration failed:', error);
        }
      }

      setOptimizationStatus('All optimizations completed');
      
      setTimeout(() => {
        setOptimizationStatus('');
        setIsOptimizing(false);
      }, 2000);

    } catch (error) {
      console.error('Optimization failed:', error);
      setOptimizationStatus('Optimization failed');
      setIsOptimizing(false);
    }
  }, [autoOptimize, enabled]);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    const cleanup = measurePerformance();
    return cleanup;
  }, [enabled, measurePerformance]);

  // Auto-optimize on mount
  useEffect(() => {
    if (autoOptimize && enabled) {
      const timer = setTimeout(performOptimizations, 1000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, enabled, performOptimizations]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return null;

    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1700) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    if (!metrics) return [];

    const recommendations = [];

    if (metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint by reducing server response time and critical resources');
    }
    if (metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and removing render-blocking resources');
    }
    if (metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }
    if (metrics.cls > 0.25) {
      recommendations.push('Minimize Cumulative Layout Shift by setting explicit dimensions for media elements');
    }

    return recommendations;
  }, [metrics]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm z-50 max-w-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-cyan-400">Performance Metrics</h3>
            <div className={`w-3 h-3 rounded-full ${performanceScore && performanceScore > 80 ? 'bg-green-400' : performanceScore && performanceScore > 60 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp < 1000 ? 'text-green-400' : metrics.fcp < 1800 ? 'text-yellow-400' : 'text-red-400'}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp < 1700 ? 'text-green-400' : metrics.lcp < 2500 ? 'text-yellow-400' : 'text-red-400'}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid < 50 ? 'text-green-400' : metrics.fid < 100 ? 'text-yellow-400' : 'text-red-400'}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            {performanceScore && (
              <div className="flex justify-between">
                <span>Score:</span>
                <span className={performanceScore > 80 ? 'text-green-400' : performanceScore > 60 ? 'text-yellow-400' : 'text-red-400'}>
                  {performanceScore}/100
                </span>
              </div>
            )}
          </div>

          {/* Recommendations */}
          {getRecommendations().length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-600">
              <h4 className="font-medium text-cyan-400 mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {getRecommendations().map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Optimization Status */}
      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm z-50 max-w-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <div>
                <div className="font-medium text-cyan-400">Optimizing...</div>
                <div className="text-xs text-slate-300">{optimizationStatus}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Hints */}
      <div className="hidden">
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/css/critical.css" as="style" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </div>
    </>
  );
};
