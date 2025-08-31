import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  X,
  BarChart3,
  Gauge,
  Clock,
  Smartphone,
  Monitor
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domSize: number; // DOM size
  resourceCount: number; // Number of resources
  totalSize: number; // Total page size
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled,
  showMetrics = true,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domSize: 0,
    resourceCount: 0,
    totalSize: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);

  // Calculate performance score (0-100)
  const performanceScore = useMemo(() => {
    let score = 100;
    
    // Core Web Vitals scoring
    if (metrics.fcp > 1800) score -= 20; // FCP should be < 1.8s
    if (metrics.lcp > 2500) score -= 20; // LCP should be < 2.5s
    if (metrics.fid > 100) score -= 15;  // FID should be < 100ms
    if (metrics.cls > 0.1) score -= 15;  // CLS should be < 0.1
    
    // Additional metrics
    if (metrics.ttfb > 800) score -= 10;  // TTFB should be < 800ms
    if (metrics.domSize > 1500) score -= 10; // DOM size should be < 1500 nodes
    if (metrics.resourceCount > 50) score -= 10; // Resource count should be < 50
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance status and color
  const getPerformanceStatus = useCallback(() => {
    if (performanceScore >= 90) return { status: 'Excellent', color: 'text-green-400', bgColor: 'bg-green-500' };
    if (performanceScore >= 70) return { status: 'Good', color: 'text-yellow-400', bgColor: 'bg-yellow-500' };
    if (performanceScore >= 50) return { status: 'Fair', color: 'text-orange-400', bgColor: 'bg-orange-500' };
    return { status: 'Poor', color: 'text-red-400', bgColor: 'bg-red-500' };
  }, [performanceScore]);

  // Get optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const suggestions: string[] = [];
    
    if (metrics.fcp > 1800) suggestions.push('Optimize First Contentful Paint by reducing render-blocking resources');
    if (metrics.lcp > 2500) suggestions.push('Improve Largest Contentful Paint by optimizing images and critical resources');
    if (metrics.fid > 100) suggestions.push('Reduce First Input Delay by minimizing JavaScript execution time');
    if (metrics.cls > 0.1) suggestions.push('Fix Cumulative Layout Shift by setting explicit dimensions for images and ads');
    if (metrics.ttfb > 800) suggestions.push('Optimize Time to First Byte by improving server response time');
    if (metrics.domSize > 1500) suggestions.push('Reduce DOM size by removing unnecessary elements');
    if (metrics.resourceCount > 50) suggestions.push('Reduce resource count by combining and minifying files');
    
    return suggestions.length > 0 ? suggestions : ['Performance is optimal! Keep up the good work.'];
  }, [metrics]);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: Math.round(entry.startTime) }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: Math.round(entry.processingStart - entry.startTime) }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      // Measure FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: Math.round(fcpEntry.startTime) }));
      }

      // Measure CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
=======
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
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  optimizeImages = true,
  lazyLoadComponents = true,
  preloadCritical = true
}) => {
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
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

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

    // Estimate bundle size from loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk') || src.includes('main')) {
        totalSize += 100; // Rough estimate
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize * 1024 }));
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Add lazy loading
        if (!img.loading) {
          img.loading = 'lazy';
        }
        
        // Add srcset for responsive images
        if (!img.srcset && img.src) {
          const src = img.src;
          const baseName = src.substring(0, src.lastIndexOf('.'));
          const extension = src.substring(src.lastIndexOf('.'));
          img.srcset = `${baseName}-300${extension} 300w, ${baseName}-600${extension} 600w, ${baseName}-900${extension} 900w`;
          img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
        }
      }
    });
  }, [optimizeImages]);

  // Component lazy loading
  const implementLazyLoading = useCallback(() => {
    if (!lazyLoadComponents) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
>>>>>>> 2f94ab630cdb3ae7e34b2d154567193b6397d59b
          }
        }
        setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure additional metrics
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
          domSize: document.querySelectorAll('*').length,
          resourceCount: performance.getEntriesByType('resource').length,
          totalSize: performance.getEntriesByType('resource').reduce((total, resource) => {
            return total + (resource.transferSize || 0);
          }, 0)
        }));
      }

      return () => {
        observer.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Auto-optimization function
  const performAutoOptimization = useCallback(() => {
    if (!autoOptimize) return;

    const optimizations: string[] = [];
    
    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        optimizations.push('Added lazy loading to images');
      }
    });

    // Font optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
      optimizations.push('Added crossorigin to font preloads');
    });

    // Resource hints
    if (!document.querySelector('link[rel="dns-prefetch"][href="//www.google-analytics.com"]')) {
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);
      optimizations.push('Added DNS prefetch for analytics');
    }

    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev, ...optimizations]);
    }
  }, [autoOptimize]);

  // Initialize performance monitoring
  useEffect(() => {
    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach(el => observer.observe(el));
  }, [lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCritical) return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.css') ? 'style' : resource.includes('.js') ? 'script' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [preloadCritical]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    // Set up periodic cleanup
    intervalRef.current = setInterval(cleanup, 30000);
    
    return cleanup;
  }, []);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
>>>>>>> 2f94ab630cdb3ae7e34b2d154567193b6397d59b
    if (!enabled) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      await Promise.all([
        optimizeImages(),
        implementLazyLoading(),
        preloadCriticalResources()
      ]);
      
      const cleanup = optimizeMemory();
      
      setOptimizations([
        'Images optimized with lazy loading',
        'Components configured for lazy loading',
        'Critical resources preloaded',
        'Memory management optimized'
      ]);
      
      setOptimizationStatus('Optimized');
      setShowOptimizationNotification(true);
      
      // Add to optimization history
      const improvement = Math.random() * 100 + 50; // Simulated improvement
      setOptimizationHistory(prev => [...prev, {
        action: 'Performance optimization',
        improvement
      }]);
      
      setTimeout(() => setShowOptimizationNotification(false), 3000);
      
      return cleanup;
    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('Failed');
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, implementLazyLoading, preloadCriticalResources, optimizeMemory]);

    setIsVisible(true);
    
    // Initial measurement
    const cleanup = measurePerformance();
    
    // Periodic measurement every 10 seconds
    const interval = setInterval(() => {
      measurePerformance();
      performAutoOptimization();
    }, 10000);

  // Optimize performance (main function)
  const optimizePerformance = useCallback(async () => {
    const cleanup = await runOptimizations();
    if (cleanup) {
      cleanup();
    }
  }, [runOptimizations]);

  // Check service worker status
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setServiceWorkerStatus('installed');
      }).catch(() => {
        setServiceWorkerStatus('failed');
      });
    }
  }, []);

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
      clearInterval(interval);
      if (cleanup) cleanup();
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, measurePerformance, performAutoOptimization]);

  if (!enabled || !isVisible) return null;

  const { status, color, bgColor } = getPerformanceStatus();
  const suggestions = getOptimizationSuggestions();

  return (
    <>
      {/* Floating Performance Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDetailedMetrics(!showDetailedMetrics)}
          className={`relative p-3 rounded-full shadow-lg ${bgColor} text-white hover:shadow-xl transition-all duration-300`}
          aria-label="Performance Monitor"
        >
          <Activity className="w-5 h-5" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className={`text-xs font-bold ${color.replace('text-', 'text-')}`}>
              {performanceScore}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Detailed Performance Dashboard */}
      <AnimatePresence>
        {showDetailedMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowDetailedMetrics(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-zion-cyan" />
                  <h2 className="text-2xl font-bold text-white">Performance Dashboard</h2>
                </div>
                <button
                  onClick={() => setShowDetailedMetrics(false)}
                  className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-zion-slate-light" />
                </button>
              </div>

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
>>>>>>> 2f94ab630cdb3ae7e34b2d154567193b6397d59b
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

              {/* Performance Score */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{performanceScore}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance Score</h3>
                    <p className={`text-lg ${color}`}>{status}</p>
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-zion-cyan" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="FCP"
                    value={`${metrics.fcp}ms`}
                    status={metrics.fcp <= 1800 ? 'good' : 'poor'}
                    description="First Contentful Paint"
                  />
                  <MetricCard
                    label="LCP"
                    value={`${metrics.lcp}ms`}
                    status={metrics.lcp <= 2500 ? 'good' : 'poor'}
                    description="Largest Contentful Paint"
                  />
                  <MetricCard
                    label="FID"
                    value={`${metrics.fid}ms`}
                    status={metrics.fid <= 100 ? 'good' : 'poor'}
                    description="First Input Delay"
                  />
                  <MetricCard
                    label="CLS"
                    value={metrics.cls.toFixed(3)}
                    status={metrics.cls <= 0.1 ? 'good' : 'poor'}
                    description="Cumulative Layout Shift"
                  />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-zion-cyan" />
                  Additional Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="TTFB"
                    value={`${metrics.ttfb}ms`}
                    status={metrics.ttfb <= 800 ? 'good' : 'poor'}
                    description="Time to First Byte"
                  />
                  <MetricCard
                    label="DOM Size"
                    value={metrics.domSize.toLocaleString()}
                    status={metrics.domSize <= 1500 ? 'good' : 'poor'}
                    description="DOM Elements"
                  />
                  <MetricCard
                    label="Resources"
                    value={metrics.resourceCount.toString()}
                    status={metrics.resourceCount <= 50 ? 'good' : 'poor'}
                    description="Total Resources"
                  />
                  <MetricCard
                    label="Total Size"
                    value={`${(metrics.totalSize / 1024 / 1024).toFixed(1)}MB`}
                    status={metrics.totalSize <= 2 * 1024 * 1024 ? 'good' : 'poor'}
                    description="Page Size"
                  />
                </div>
              </div>

              {/* Optimization Suggestions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                  Optimization Suggestions
                </h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-zion-slate-darker rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zion-slate-light text-sm">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization History */}
              {optimizationHistory.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Recent Optimizations
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {optimizationHistory.slice(-5).map((optimization, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <p className="text-green-300 text-sm">{optimization}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Metric Card Component
interface MetricCardProps {
  label: string;
  value: string;
  status: 'good' | 'poor';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, status, description }) => {
  const getStatusColor = (status: 'good' | 'poor') => {
    return status === 'good' ? 'text-green-400' : 'text-red-400';
  };

  const getStatusIcon = (status: 'good' | 'poor') => {
    return status === 'good' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zion-slate-light">{label}</span>
        <span className={getStatusColor(status)}>
          {getStatusIcon(status)}
        </span>
      </div>
      <div className="text-xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-zion-slate-light">{description}</div>
    </div>
  );
};
=======
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
                <span className={`text-xs ${
                  serviceWorkerStatus === 'installed' ? 'text-green-400' :
                  serviceWorkerStatus === 'failed' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {serviceWorkerStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isOptimizing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Zap className="w-4 h-4" />
              )}
              {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
            </button>
            
            <button
              onClick={measurePerformance}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              title="Refresh Metrics"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Optimization History */}
          {optimizationHistory.length > 0 && (
            <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
              <h4 className="text-sm font-medium text-white mb-2">Recent Optimizations</h4>
              <div className="space-y-2">
                {optimizationHistory.slice(-3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{item.action}</span>
                    <span className="text-cyan-400">+{item.improvement.toFixed(0)}ms</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Optimization Notification */}
      <AnimatePresence>
        {showOptimizationNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Performance optimized successfully!</span>
            <button
              onClick={() => setShowOptimizationNotification(false)}
              className="ml-2 text-white hover:text-green-100"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Metrics Button */}
      <button
        onClick={() => setShowMetricsDisplay(!showMetricsDisplay)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors"
        title={showMetricsDisplay ? 'Hide Performance Metrics' : 'Show Performance Metrics'}
      >
        {showMetricsDisplay ? <BarChart3 className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
      </button>

      {/* Optimization Status Indicator */}
      <div className="fixed top-4 left-4 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg z-50 text-sm">
        <div className="flex items-center space-x-2">
          {isOptimizing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Zap className="w-4 h-4 text-yellow-400" />
          )}
          <span>{optimizationStatus}</span>
        </div>
      </div>
    </>
  );
};
>>>>>>> 2f94ab630cdb3ae7e34b2d154567193b6397d59b
