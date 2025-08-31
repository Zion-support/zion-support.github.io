import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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
    windowLoad: null
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<string>('A');
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showMetricsDisplay, setShowMetricsDisplay] = useState(showMetrics);
  const [showOptimizationNotification, setShowOptimizationNotification] = useState(false);
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
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
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

      // DOM and Window Load
      if (document.readyState === 'complete') {
        setMetrics(prev => ({ 
          ...prev, 
          domLoad: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
          windowLoad: performance.timing.loadEventEnd - performance.timing.navigationStart
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
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): string => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add responsive srcset if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseUrl = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        img.srcset = `${baseUrl}-300w${extension} 300w, ${baseUrl}-600w${extension} 600w, ${baseUrl}-900w${extension} 900w`;
        img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
      }
    });
    
    setOptimizations(prev => [...prev, 'Images optimized with lazy loading and responsive srcset']);
  }, [optimizeImages]);

  // Component lazy loading
  const implementLazyLoading = useCallback(() => {
    if (!lazyLoadComponents) return;
    
    // Implement Intersection Observer for components
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.lazy) {
            target.classList.remove('lazy-hidden');
            target.classList.add('lazy-loaded');
            observer.unobserve(target);
          }
        }
      });
    });
    
    // Observe lazy components
    document.querySelectorAll('[data-lazy]').forEach((el) => {
      observer.observe(el);
    });
    
    setOptimizations(prev => [...prev, 'Lazy loading implemented for components']);
  }, [lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCritical) return;
    
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/css/critical.css';
    document.head.appendChild(criticalCSS);
    
    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.as = 'font';
    criticalFont.href = '/fonts/inter-var.woff2';
    criticalFont.crossOrigin = 'anonymous';
    document.head.appendChild(criticalFont);
    
    setOptimizations(prev => [...prev, 'Critical resources preloaded']);
  }, [preloadCritical]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Cleanup event listeners
    const cleanupEventListeners = () => {
      // Remove unused event listeners
      const elements = document.querySelectorAll('[data-event-listener]');
      elements.forEach((el) => {
        if (!el.isConnected) {
          el.removeEventListener('click', () => {});
          el.removeEventListener('scroll', () => {});
        }
      });
    };
    
    // Cleanup intervals and timeouts
    const cleanupTimers = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    
    cleanupEventListeners();
    cleanupTimers();
    
    setOptimizations(prev => [...prev, 'Memory optimized with cleanup']);
  }, []);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
    if (!enabled || !autoOptimize) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      await Promise.all([
        optimizeImages(),
        implementLazyLoading(),
        preloadCriticalResources(),
        optimizeMemory()
      ]);
      
      setOptimizationStatus('Optimized');
      setShowOptimizationNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowOptimizationNotification(false);
      }, 3000);
      
    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('Failed');
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, autoOptimize, optimizeImages, implementLazyLoading, preloadCriticalResources, optimizeMemory]);

  // Effect for performance monitoring
  useEffect(() => {
    if (!enabled) return;
    
    measurePerformance();
    
    // Update performance score when metrics change
    if (Object.values(metrics).some(val => val !== null)) {
      const score = calculatePerformanceScore(metrics);
      setPerformanceScore(score);
    }
    
    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, measurePerformance, metrics, calculatePerformanceScore]);

  // Effect for auto-optimization
  useEffect(() => {
    if (!enabled || !autoOptimize) return;
    
    // Run optimizations after page load
    const handleLoad = () => {
      setTimeout(runOptimizations, 1000);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [enabled, autoOptimize, runOptimizations]);

  // Don't render if disabled
  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetricsDisplay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg p-4 shadow-lg z-50 max-w-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Performance Metrics</h3>
            <button
              onClick={() => setShowMetricsDisplay(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">FCP:</span>
              <span className="text-white">{metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">LCP:</span>
              <span className="text-white">{metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">FID:</span>
              <span className="text-white">{metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CLS:</span>
              <span className="text-white">{metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">TTFB:</span>
              <span className="text-white">{metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Score:</span>
              <span className={`text-lg font-bold ${
                performanceScore === 'A' ? 'text-green-400' :
                performanceScore === 'B' ? 'text-yellow-400' :
                performanceScore === 'C' ? 'text-orange-400' :
                'text-red-400'
              }`}>
                {performanceScore}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Optimization Notification */}
      <AnimatePresence>
        {showOptimizationNotification && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Performance optimized!</span>
            <button
              onClick={() => setShowOptimizationNotification(false)}
              className="ml-2 text-white hover:text-green-200"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Metrics Button */}
      <button
        onClick={() => setShowMetricsDisplay(!showMetricsDisplay)}
        className="fixed bottom-4 left-4 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
        title="Toggle Performance Metrics"
      >
        {showMetricsDisplay ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>

      {/* Optimization Status Indicator */}
      <div className="fixed top-4 left-4 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg z-50 text-sm">
        <div className="flex items-center space-x-2">
          {isOptimizing ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Zap className="w-4 h-4 text-yellow-400" />
          )}
          <span>{optimizationStatus}</span>
        </div>
      </div>
    </>
  );
};
