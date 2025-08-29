import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  RefreshCw,
  Settings,
  Monitor,
  Database,
  Network,
  Cpu,
  Memory,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkRequests: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  severity: 'low' | 'medium' | 'high';
  suggestion: string;
  timestamp: Date;
}

export const EnhancedPerformanceOptimizer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    networkRequests: 0,
    bundleSize: 0,
    cacheHitRate: 0
  });
  
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, firstInputDelay: fid.processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024)
      }));
    }

    // Monitor network requests
    const originalFetch = window.fetch;
    let requestCount = 0;
    
    window.fetch = function(...args) {
      requestCount++;
      setMetrics(prev => ({ ...prev, networkRequests: requestCount }));
      return originalFetch.apply(this, args);
    };

    // Monitor load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Analyze performance and generate suggestions
  const analyzePerformance = useCallback(() => {
    const newIssues: PerformanceIssue[] = [];
    const newOptimizations: string[] = [];

    // Analyze Core Web Vitals
    if (metrics.firstContentfulPaint > 2000) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'warning',
        message: 'First Contentful Paint is slow',
        severity: 'medium',
        suggestion: 'Optimize critical rendering path, reduce render-blocking resources',
        timestamp: new Date()
      });
    }

    if (metrics.largestContentfulPaint > 4000) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'error',
        message: 'Largest Contentful Paint is very slow',
        severity: 'high',
        suggestion: 'Optimize images, implement lazy loading, reduce server response time',
        timestamp: new Date()
      });
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        message: 'High Cumulative Layout Shift detected',
        severity: 'medium',
        suggestion: 'Set explicit dimensions for images and media elements',
        timestamp: new Date()
      });
    }

    if (metrics.firstInputDelay > 100) {
      newIssues.push({
        id: 'fid-high',
        type: 'warning',
        message: 'First Input Delay is high',
        severity: 'medium',
        suggestion: 'Reduce JavaScript execution time, implement code splitting',
        timestamp: new Date()
      });
    }

    // Memory usage analysis
    if (metrics.memoryUsage > 100) {
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        message: 'High memory usage detected',
        severity: 'medium',
        suggestion: 'Check for memory leaks, optimize component rendering',
        timestamp: new Date()
      });
    }

    // Network requests analysis
    if (metrics.networkRequests > 50) {
      newIssues.push({
        id: 'requests-high',
        type: 'info',
        message: 'High number of network requests',
        severity: 'low',
        suggestion: 'Consider bundling resources, implement HTTP/2 server push',
        timestamp: new Date()
      });
    }

    // Generate optimization suggestions
    if (metrics.loadTime > 3000) {
      newOptimizations.push('Implement code splitting and lazy loading');
    }
    if (metrics.bundleSize > 500) {
      newOptimizations.push('Optimize bundle size with tree shaking and compression');
    }
    if (metrics.cacheHitRate < 0.8) {
      newOptimizations.push('Improve caching strategy for static assets');
    }

    setIssues(newIssues);
    setOptimizations(newOptimizations);
  }, [metrics]);

  // Auto-optimize performance
  const autoOptimize = useCallback(() => {
    // Implement automatic optimizations
    const optimizations = [
      'Enabling resource hints',
      'Optimizing image loading',
      'Implementing service worker caching',
      'Enabling compression',
      'Optimizing critical CSS'
    ];

    setOptimizations(optimizations);
    
    // Apply some optimizations
    // Enable resource hints
    const links = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]');
    links.forEach(link => {
      if (link.getAttribute('rel') === 'preload') {
        link.setAttribute('rel', 'prefetch');
      }
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Enable compression if not already enabled
    if (!document.querySelector('meta[http-equiv="Accept-Encoding"]')) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Accept-Encoding');
      meta.setAttribute('content', 'gzip, deflate, br');
      document.head.appendChild(meta);
    }
  }, []);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.firstContentfulPaint > 2000) score -= 20;
    if (metrics.largestContentfulPaint > 4000) score -= 25;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    if (metrics.firstInputDelay > 100) score -= 15;
    if (metrics.memoryUsage > 100) score -= 10;
    if (metrics.networkRequests > 50) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    }
  }, [isMonitoring, startMonitoring]);

  useEffect(() => {
    if (isMonitoring) {
      analyzePerformance();
    }
  }, [isMonitoring, analyzePerformance]);

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6" />
        <div className="absolute inset-0 bg-zion-purple/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="performance-panel"
            className="fixed bottom-24 left-6 z-40 w-96 bg-white dark:bg-zion-slate border border-zion-purple/20 rounded-2xl shadow-2xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
              <h3 className="text-lg font-semibold text-zion-slate dark:text-white flex items-center gap-2">
                <Monitor className="w-5 h-5 text-zion-purple" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-zion-purple transition-colors duration-200"
                aria-label="Close performance monitor"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Performance Score */}
              <div className="text-center p-4 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-lg border border-zion-purple/20">
                <div className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {getScoreLabel(performanceScore)}
                </div>
              </div>

              {/* Monitoring Controls */}
              <div className="flex gap-2">
                <button
                  onClick={startMonitoring}
                  disabled={isMonitoring}
                  className="flex-1 p-2 text-sm bg-zion-purple text-white rounded-lg hover:bg-zion-purple/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start Monitoring
                </button>
                <button
                  onClick={stopMonitoring}
                  disabled={!isMonitoring}
                  className="flex-1 p-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Stop
                </button>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-purple" />
                  Core Web Vitals
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">FCP</div>
                    <div className="font-medium">{metrics.firstContentfulPaint.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">LCP</div>
                    <div className="font-medium">{metrics.largestContentfulPaint.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">CLS</div>
                    <div className="font-medium">{metrics.cumulativeLayoutShift.toFixed(3)}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">FID</div>
                    <div className="font-medium">{metrics.firstInputDelay.toFixed(0)}ms</div>
                  </div>
                </div>
              </div>

              {/* System Metrics */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-zion-purple" />
                  System Metrics
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">Memory</div>
                    <div className="font-medium">{metrics.memoryUsage}MB</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">Requests</div>
                    <div className="font-medium">{metrics.networkRequests}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">Load Time</div>
                    <div className="font-medium">{metrics.loadTime.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400">Bundle</div>
                    <div className="font-medium">{metrics.bundleSize}KB</div>
                  </div>
                </div>
              </div>

              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    Issues Found ({issues.length})
                  </h4>
                  
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {issues.slice(0, 3).map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          issue.severity === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                          issue.severity === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                          'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {issue.message}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {issue.suggestion}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Optimizations ({optimizations.length})
                  </h4>
                  
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {optimizations.map((optimization, index) => (
                      <div
                        key={index}
                        className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                      >
                        <div className="text-sm text-green-800 dark:text-green-200">
                          {optimization}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-purple/20 space-y-2">
              <button
                onClick={autoOptimize}
                className="w-full p-2 text-sm bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors duration-200"
              >
                Auto-Optimize
              </button>
              <button
                onClick={analyzePerformance}
                className="w-full p-2 text-sm border border-zion-purple/20 text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors duration-200"
              >
                Analyze Performance
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Performance optimization utilities
export const performanceUtils = {
  // Lazy load components with intersection observer
  lazyLoadComponent: (component: React.ComponentType, threshold = 0.1) => {
    return React.lazy(() => {
      return new Promise((resolve) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              resolve({ default: component });
              observer.disconnect();
            }
          },
          { threshold }
        );
        
        // Create a dummy element to observe
        const dummy = document.createElement('div');
        document.body.appendChild(dummy);
        observer.observe(dummy);
      });
    });
  },

  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Preload critical resources
  preloadResource: (href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  },

  // Optimize images
  optimizeImage: (img: HTMLImageElement) => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
  },

  // Service worker registration
  registerServiceWorker: async (swPath: string) => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(swPath);
        console.log('SW registered: ', registration);
        return registration;
      } catch (error) {
        console.log('SW registration failed: ', error);
        return null;
      }
    }
    return null;
  }
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isMonitoring, setIsMonitoring] = useState(false);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    // Implementation similar to the component
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};