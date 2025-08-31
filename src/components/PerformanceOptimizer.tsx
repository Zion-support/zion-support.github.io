import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Gauge, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  Settings,
  BarChart3,
  Cpu,
  Memory,
  HardDrive,
  Network
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  optimizeImages = true,
  lazyLoadComponents = true,
  preloadCritical = true,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: null,
    windowLoad: null,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0,
  });
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<string>('A');
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showMetricsDisplay, setShowMetricsDisplay] = useState(showMetrics);
  const [showOptimizationNotification, setShowOptimizationNotification] = useState(false);
  const [serviceWorkerStatus, setServiceWorkerStatus] = useState<'installing' | 'installed' | 'failed'>('installing');
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{action: string, improvement: number}>>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
            performanceDataRef.current.fcp = fcp.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
            performanceDataRef.current.lcp = lcp.startTime;
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            const fidValue = fid.processingStart - fid.startTime;
            setMetrics(prev => ({ ...prev, fid: fidValue }));
            performanceDataRef.current.fid = fidValue;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let cls = 0;
          for (const entry of list.getEntries()) {
            if (entry instanceof LayoutShift) {
              cls += entry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls }));
          performanceDataRef.current.cls = cls;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Store observers for cleanup
        observerRef.current = {
          disconnect: () => {
            fcpObserver.disconnect();
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
          }
        };
      } catch (error) {
        console.error('Performance monitoring error:', error);
      }

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
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (entry instanceof LayoutShift) {
            cls += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        }));
      }

      // Store observers for cleanup
      observerRef.current = {
        disconnect: () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }
      };
    }

    // Measure bundle size and memory usage
    if ('performance' in window) {
      const memory = (performance as any).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
          cpuUsage: 0 // CPU usage requires more complex measurement
        }));
      }
    }

    // Additional performance monitoring for legacy support
    if (enablePerformanceMonitoring && 'PerformanceObserver' in window) {
      try {
        // Monitor First Contentful Paint (legacy approach)
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              console.log('FCP (legacy):', entry.startTime);
              performanceDataRef.current.fcp = entry.startTime;
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Monitor Time to First Byte (legacy approach)
        const ttfbObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const ttfb = navEntry.responseStart - navEntry.requestStart;
              console.log('TTFB (legacy):', ttfb);
              performanceDataRef.current.ttfb = ttfb;
            }
          }
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });

        // Store legacy observers for cleanup
        if (observerRef.current && typeof observerRef.current.disconnect === 'function') {
          const originalDisconnect = observerRef.current.disconnect;
          observerRef.current.disconnect = () => {
            originalDisconnect();
            fcpObserver.disconnect();
            ttfbObserver.disconnect();
          };
        }
      } catch (error) {
        console.warn('Legacy performance monitoring failed:', error);
      }
    }
  }, [enablePerformanceMonitoring, enableLazyLoading, enableIntersectionObserver]);

  // Lazy loading with Intersection Observer
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01,
    });

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Resource hints for performance
  const addResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
    ];

    domains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for additional domains
    const dnsDomains = [
      '//cdn.jsdelivr.net',
      '//unpkg.com',
    ];

    dnsDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }, []);

  // Critical CSS inline loading
  const loadCriticalCSS = useCallback(() => {
    const criticalCSS = document.querySelector('link[data-critical]');
    if (criticalCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = criticalCSS.getAttribute('href') || '';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    }
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const metrics = performanceDataRef.current;
    const suggestions: string[] = [];

    if (metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Optimize critical rendering path.');
    }

    if (metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and fonts.');
    }

    if (metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
    }

    if (metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure stable layouts.');
    }

    if (metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.');
    }

    return suggestions;
  }, []);

  // Apply optimizations
  const applyOptimizations = useCallback(() => {
    const suggestions = getOptimizationSuggestions();
    
    if (suggestions.length > 0) {
      console.log('Performance optimization suggestions:', suggestions);
      
      // Auto-apply some optimizations
      if (suggestions.some(s => s.includes('images'))) {
        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.loading !== 'lazy') {
            img.loading = 'lazy';
          }
        });
      }

      if (suggestions.some(s => s.includes('JavaScript'))) {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script:not([data-critical])');
        scripts.forEach(script => {
          if (!script.defer && !script.async) {
            script.defer = true;
          }
        });
      }
    }
  }, [getOptimizationSuggestions]);

  // Initialize performance monitoring
  useEffect(() => {
    if (enabled) {
      measurePerformance();
      
      // Update performance score when metrics change
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [enabled, measurePerformance, calculatePerformanceScore]);

  // Auto-optimize when enabled
  useEffect(() => {
    if (enabled && autoOptimize) {
      const timer = setTimeout(() => {
        runOptimizations();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [enabled, autoOptimize, runOptimizations]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading]);

  // Apply optimizations after metrics are collected
  useEffect(() => {
    const timer = setTimeout(() => {
      applyOptimizations();
    }, 5000); // Wait 5 seconds for metrics to be collected

    return () => clearTimeout(timer);
  }, [applyOptimizations]);

  return (
    <>
      {children}
      
      {/* Performance Metrics Display */}
      {showMetricsDisplay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Performance
            </h3>
            <button
              onClick={() => setShowMetricsDisplay(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Score</span>
              <span className={`text-2xl font-bold ${
                performanceScore === 'A' ? 'text-green-400' :
                performanceScore === 'B' ? 'text-yellow-400' :
                performanceScore === 'C' ? 'text-orange-400' :
                performanceScore === 'D' ? 'text-red-400' : 'text-red-600'
              }`}>
                {performanceScore}
              </span>
            </div>
          </div>

          {/* Core Web Vitals */}
          {metrics.fcp && metrics.lcp && metrics.fid && metrics.cls && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">FCP</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.fcp.toFixed(0)}ms
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">LCP</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.lcp.toFixed(0)}ms
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Memory</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <HardDrive className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Bundle</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {(metrics.bundleSize / 1024 / 1024).toFixed(1)}MB
                </span>
              </div>
            </div>
          )}

          {/* Service Worker Status */}
          <div className="mb-6 p-3 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Service Worker</span>
              <div className="flex items-center gap-2">
                {serviceWorkerStatus === 'installing' && (
                  <RefreshCw className="w-4 h-4 text-yellow-400 animate-spin" />
                )}
                {serviceWorkerStatus === 'installed' && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
                {serviceWorkerStatus === 'failed' && (
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                )}
              </div>
            </div>
          </div>

          {/* Optimization Status */}
          <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Status</span>
              <span className="text-sm text-cyan-400">{optimizationStatus}</span>
            </div>
          </div>

          {/* Recent Optimizations */}
          {optimizations.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Optimizations</h4>
              <div className="space-y-2">
                {optimizations.slice(-3).map((optimization, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    {optimization}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowMetricsDisplay(false)}
              className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};
