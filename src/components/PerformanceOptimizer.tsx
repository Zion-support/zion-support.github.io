import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Loader,
  BarChart3,
  Cpu,
  Network,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  showMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableMonitoring = true,
  enableOptimizations = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);
  const [showOptimizer, setShowOptimizer] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const optimizationTimeoutRef = useRef<NodeJS.Timeout>();

  // Performance monitoring setup
  useEffect(() => {
    if (!enableMonitoring) return;

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
        
        const newMetrics: PerformanceMetrics = {
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: 0, // Will be updated by observer
          cls: 0, // Will be updated by observer
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
          domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          windowLoad: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          memoryUsage: 'memory' in performance ? (performance as any).memory : undefined
        };

        setMetrics(newMetrics);
      }
    };

    // Set up performance observers
    if ('PerformanceObserver' in window) {
      // FID observer
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            setMetrics(prev => prev ? { ...prev, fid: Math.round(fidEntry.processingStart - fidEntry.startTime) } : null);
          }
        }
      });

      try {
        observerRef.current.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }
    }

    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableMonitoring]);

  // Performance optimizations
  const runOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    setOptimizationStatus([]);

    const optimizations = [
      { name: 'Preloading critical resources', action: () => preloadCriticalResources() },
      { name: 'Optimizing images', action: () => optimizeImages() },
      { name: 'Compressing assets', action: () => compressAssets() },
      { name: 'Caching strategies', action: () => implementCaching() },
      { name: 'Code splitting optimization', action: () => optimizeCodeSplitting() }
    ];

    for (const optimization of optimizations) {
      try {
        setOptimizationStatus(prev => [...prev, `🔄 ${optimization.name}...`]);
        await optimization.action();
        setOptimizationStatus(prev => prev.map(status => 
          status.includes(optimization.name) 
            ? `✅ ${optimization.name} completed` 
            : status
        ));
        await new Promise(resolve => setTimeout(resolve, 500)); // Visual feedback
      } catch (error) {
        setOptimizationStatus(prev => prev.map(status => 
          status.includes(optimization.name) 
            ? `❌ ${optimization.name} failed` 
            : status
        ));
      }
    }

    setIsOptimizing(false);
    setOptimizationStatus(prev => [...prev, '🎉 All optimizations completed!']);
    
    // Auto-hide after 3 seconds
    optimizationTimeoutRef.current = setTimeout(() => {
      setShowOptimizer(false);
    }, 3000);
  }, [enableOptimizations]);

  // Optimization functions
  const preloadCriticalResources = async () => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      }
    });
  };

  const optimizeImages = async () => {
    // Implement image optimization strategies
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

  const compressAssets = async () => {
    // Implement asset compression strategies
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered for asset compression');
      } catch (error) {
        console.warn('Service Worker registration failed');
      }
    }
  };

  const implementCaching = async () => {
    // Implement caching strategies
    if ('caches' in window) {
      try {
        const cache = await caches.open('zion-tech-v1');
        await cache.addAll([
          '/',
          '/offline.html',
          '/css/main.css',
          '/js/main.js'
        ]);
      } catch (error) {
        console.warn('Cache implementation failed');
      }
    }
  };

  const optimizeCodeSplitting = async () => {
    // Implement code splitting optimizations
    const modules = document.querySelectorAll('script[type="module"]');
    modules.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      if (scriptElement.src && !scriptElement.hasAttribute('preload')) {
        scriptElement.setAttribute('preload', 'true');
      }
    });
  };

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // TTFB scoring (0-100)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 400) score -= 10;
    
    // Memory usage scoring
    if (metrics.memoryUsage) {
      const memoryRatio = metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.jsHeapSizeLimit;
      if (memoryRatio > 0.8) score -= 10;
      else if (memoryRatio > 0.6) score -= 5;
    }
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance status
  const performanceStatus = useMemo(() => {
    if (performanceScore >= 90) return { color: 'text-green-500', icon: CheckCircle, label: 'Excellent' };
    if (performanceScore >= 70) return { color: 'text-yellow-500', icon: TrendingUp, label: 'Good' };
    if (performanceScore >= 50) return { color: 'text-orange-500', icon: AlertTriangle, label: 'Fair' };
    return { color: 'text-red-500', icon: AlertTriangle, label: 'Poor' };
  }, [performanceScore]);

  // Auto-optimize on poor performance
  useEffect(() => {
    if (performanceScore < 50 && enableOptimizations && !isOptimizing) {
      const timer = setTimeout(() => {
        runOptimizations();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [performanceScore, enableOptimizations, isOptimizing, runOptimizations]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (optimizationTimeoutRef.current) {
        clearTimeout(optimizationTimeoutRef.current);
      }
    };
  }, []);

  if (!enableMonitoring && !enableOptimizations) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Performance Monitor Floating Button */}
      {showMetrics && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowOptimizer(!showOptimizer)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Performance Monitor"
        >
          <Gauge className="w-6 h-6" />
        </motion.button>
      )}

      {/* Performance Dashboard */}
      <AnimatePresence>
        {showOptimizer && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setShowOptimizer(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ×
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Score</span>
                <performanceStatus.icon className={`w-5 h-5 ${performanceStatus.color}`} />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{performanceScore}</div>
                <span className={`text-sm font-medium ${performanceStatus.color}`}>
                  {performanceStatus.label}
                </span>
              </div>
            </div>

            {/* Metrics Display */}
            {metrics && (
              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                    <span className="font-medium">{metrics.fcp}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                    <span className="font-medium">{metrics.lcp}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className="font-medium">{metrics.ttfb}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                    <span className="font-medium">
                      {metrics.memoryUsage ? `${Math.round(metrics.memoryUsage.usedJSHeapSize / 1024 / 1024)}MB` : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Controls */}
            {enableOptimizations && (
              <div className="space-y-3">
                <button
                  onClick={runOptimizations}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isOptimizing ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Run Optimizations
                    </>
                  )}
                </button>

                {/* Optimization Status */}
                {optimizationStatus.length > 0 && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {optimizationStatus.map((status, index) => (
                      <div key={index} className="text-xs text-gray-600 dark:text-gray-400">
                        {status}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
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
