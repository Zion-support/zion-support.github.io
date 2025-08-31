<<<<<<< HEAD
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
=======
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Loader2,
  Eye,
  EyeOff,
  X
} from 'lucide-react';

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
  enabled: boolean;
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
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
    windowLoad: null
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
<<<<<<< HEAD
  const [performanceScore, setPerformanceScore] = useState<string>('A');
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');
=======
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showMetricsDisplay, setShowMetricsDisplay] = useState(showMetrics);
  const [showOptimizationNotification, setShowOptimizationNotification] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce

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
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

<<<<<<< HEAD
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // DOM Content Loaded
      const domLoad = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (domLoad) {
        setMetrics(prev => ({ ...prev, domLoad: domLoad.domContentLoadedEventEnd - domLoad.domContentLoadedEventStart }));
      }

      // Window Load
      const windowLoad = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (windowLoad) {
        setMetrics(prev => ({ ...prev, windowLoad: windowLoad.loadEventEnd - windowLoad.loadEventStart }));
      }
    }
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enabled || !optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add responsive srcset if not present
      if (!img.srcset && img.src) {
        const originalSrc = img.src;
        img.srcset = `${originalSrc} 1x, ${originalSrc} 2x`;
      }
    });
  }, [enabled, optimizeImages]);

  // Component lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enabled || !lazyLoadComponents) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.lazy) {
            target.classList.remove('lazy');
            target.classList.add('loaded');
            observer.unobserve(target);
          }
        }
      });
    });

    document.querySelectorAll('[data-lazy]').forEach(el => {
      observer.observe(el);
    });
  }, [enabled, lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enabled || !preloadCritical) return;
    
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js',
      '/fonts/critical.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [enabled, preloadCritical]);

  // Performance optimization
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        setupLazyLoading(),
        preloadCriticalResources()
      ]);
      
      setOptimizationStatus('Optimized');
    } catch (error) {
      setOptimizationStatus('Error');
      console.error('Performance optimization error:', error);
    } finally {
      setIsOptimizing(false);
=======
  // Performance analysis and optimization
  const analyzeAndOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    
    if (currentMetrics.fcp > 2000) {
      newOptimizations.push('First Contentful Paint is slow - consider image optimization and critical CSS inlining');
    }
    
    if (currentMetrics.lcp > 4000) {
      newOptimizations.push('Largest Contentful Paint is slow - optimize hero images and critical resources');
    }
    
    if (currentMetrics.ttfb > 600) {
      newOptimizations.push('Time to First Byte is high - optimize server response time and CDN');
    }
    
    if (currentMetrics.cls > 0.1) {
      newOptimizations.push('Cumulative Layout Shift detected - ensure stable layout and proper image dimensions');
    }
    
    setOptimizations(newOptimizations);
  }, []);

  // Auto-optimization features
  const autoOptimize = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    const appliedOptimizations: string[] = [];
    
    try {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });
        
        images.forEach(img => imageObserver.observe(img));
        appliedOptimizations.push('Image lazy loading enabled');
      }
      
      // Preload critical fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      if (fontLinks.length === 0) {
        const criticalFonts = ['Orbitron', 'Rajdhani'];
        criticalFonts.forEach(font => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'font';
          link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700&display=swap`;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        });
        appliedOptimizations.push('Critical fonts preloaded');
      }
      
      // Register service worker
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          appliedOptimizations.push('Service worker registered');
        } catch (error) {
          console.log('Service worker registration failed:', error);
        }
      }
      
      // Add DNS prefetch and preconnect hints
      const existingHints = document.querySelectorAll('link[rel="dns-prefetch"], link[rel="preconnect"]');
      if (existingHints.length === 0) {
        const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];
        domains.forEach(domain => {
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = `//${domain}`;
          document.head.appendChild(dnsPrefetch);
          
          const preconnect = document.createElement('link');
          preconnect.rel = 'preconnect';
          preconnect.href = `//${domain}`;
          preconnect.crossOrigin = 'anonymous';
          document.head.appendChild(preconnect);
        });
        appliedOptimizations.push('DNS prefetch and preconnect hints added');
      }
      
      if (appliedOptimizations.length > 0) {
        setOptimizations(appliedOptimizations);
        setShowOptimizationNotification(true);
        setTimeout(() => setShowOptimizationNotification(false), 5000);
      }
      
    } catch (error) {
      console.error('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled]);

  // Setup performance observers
  useEffect(() => {
    if (!enabled || !window.PerformanceObserver) return;

    // LCP observer
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry && 'startTime' in lastEntry) {
            setMetrics(prev => prev ? {
              ...prev,
              lcp: lastEntry.startTime
            } : null);
          }
        });
        
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.log('LCP observer not supported');
      }
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
    }
  }, [enabled, optimizeImages, setupLazyLoading, preloadCriticalResources]);

<<<<<<< HEAD
  // Memory management
  const cleanupMemory = useCallback(() => {
    if (!enabled) return;
    
    // Clear performance observer
    if ('PerformanceObserver' in window) {
      // Cleanup observers when component unmounts
      return () => {
        // This will be handled by the cleanup function
      };
    }
  }, [enabled]);

  // Effect for performance monitoring
  useEffect(() => {
    if (!enabled) return;
    
    measurePerformance();
    
    // Cleanup function
    return cleanupMemory;
  }, [enabled, measurePerformance, cleanupMemory]);

  // Effect for performance score calculation
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [metrics, calculatePerformanceScore]);

  // Effect for initial optimizations
  useEffect(() => {
    if (enabled) {
      runOptimizations();
    }
  }, [enabled, runOptimizations]);

  // Performance metrics display
  const renderMetrics = () => {
    if (!showMetrics) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm z-50"
      >
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Performance Metrics
        </h3>
        <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid && metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-500' : 'text-green-500'}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">Score:</span>
            <span className={`text-lg font-bold ${
              performanceScore === 'A' ? 'text-green-500' :
              performanceScore === 'B' ? 'text-blue-500' :
              performanceScore === 'C' ? 'text-yellow-500' :
              performanceScore === 'D' ? 'text-orange-500' : 'text-red-500'
            }`}>
              {performanceScore}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Status: {optimizationStatus}
          </div>
        </div>
      </motion.div>
    );
  };

  // Performance optimization status indicator
  const renderOptimizationStatus = () => {
    if (!enabled) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 z-50"
        title={`Performance Optimization: ${optimizationStatus}`}
      >
        <div className={`w-3 h-3 rounded-full ${
          isOptimizing ? 'bg-yellow-500 animate-pulse' :
          optimizationStatus === 'Optimized' ? 'bg-green-500' :
          optimizationStatus === 'Error' ? 'bg-red-500' : 'bg-gray-400'
        }`} />
      </motion.div>
    );
  };
=======
    // FID observer
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry && 'processingStart' in lastEntry) {
            const fid = lastEntry.processingStart - lastEntry.startTime;
            setMetrics(prev => prev ? {
              ...prev,
              fid
            } : null);
          }
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.log('FID observer not supported');
      }
    }

    // CLS observer
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          setMetrics(prev => prev ? {
            ...prev,
            cls: clsValue
          } : null);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.log('CLS observer not supported');
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled]);

  // Initial performance measurement
  useEffect(() => {
    if (!enabled) return;
    
    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [enabled, measurePerformance]);

  // Auto-optimize on mount
  useEffect(() => {
    if (enabled && autoOptimize) {
      const timer = setTimeout(autoOptimize, 1000);
      return () => clearTimeout(timer);
    }
  }, [enabled, autoOptimize, autoOptimize]);
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce

  if (!enabled) return null;

  // Helper functions
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 4000) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatMetric = (value: number, unit: string = 'ms'): string => {
    if (value === 0) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  return (
    <>
<<<<<<< HEAD
      {renderOptimizationStatus()}
      {renderMetrics()}
=======
      {/* Floating Metrics Display */}
      <AnimatePresence>
        {showMetricsDisplay && metrics && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl p-4 min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white flex items-center">
                <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                Performance Metrics
              </h3>
              <button
                onClick={() => setShowMetricsDisplay(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {metrics && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Performance Score</span>
                  <span className={`text-sm font-bold ${getPerformanceColor(getPerformanceScore(metrics))}`}>
                    {getPerformanceScore(metrics)} ({getPerformanceGrade(getPerformanceScore(metrics))})
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">FCP:</span>
                    <span className="ml-1 text-white">{formatMetric(metrics.fcp)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">LCP:</span>
                    <span className="ml-1 text-white">{formatMetric(metrics.lcp)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">FID:</span>
                    <span className="ml-1 text-white">{formatMetric(metrics.fid)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">CLS:</span>
                    <span className="ml-1 text-white">{metrics.cls.toFixed(3)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">TTFB:</span>
                    <span className="ml-1 text-white">{formatMetric(metrics.ttfb)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">DOM:</span>
                    <span className="ml-1 text-white">{formatMetric(metrics.domLoad)}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimization Notification */}
      <AnimatePresence>
        {showOptimizationNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">
              {optimizations.length} optimization{optimizations.length !== 1 ? 's' : ''} applied automatically
            </span>
            <button
              onClick={() => setShowOptimizationNotification(false)}
              className="ml-2 text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowMetricsDisplay(!showMetricsDisplay)}
        className="fixed top-4 right-4 z-40 bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-2 text-white transition-all duration-200 hover:scale-105"
        title="Toggle Performance Metrics"
      >
        {showMetricsDisplay ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
>>>>>>> 5744fec236daa51ca3ddce9178c8ec834cc3b8ce
    </>
  );
};
