import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Eye, 
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  overall: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  autoOptimize?: boolean;
  showMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  autoOptimize = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<PerformanceMetrics[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // Measure Core Web Vitals
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lcpEntry.startTime } : null);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            setMetrics(prev => prev ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime } : null);
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
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => prev ? { ...prev, ttfb } : null);
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance measurement failed:', error);
      }
    }
  }, []);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observerRef.current?.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );
    }
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/css/index.css',
      '/js/main.js',
      '/fonts/inter-var.woff2'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize performance
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Preload critical resources
      preloadCriticalResources();
      
      // Optimize images
      optimizeImages();
      
      // Enable service worker if available
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update metrics
      if (metrics) {
        setOptimizationHistory(prev => [...prev, metrics]);
      }
      
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [metrics, preloadCriticalResources, optimizeImages]);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP penalty (target: < 1.8s)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP penalty (target: < 2.5s)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1500) score -= 15;
    
    // FID penalty (target: < 100ms)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS penalty (target: < 0.1)
    if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.05) score -= 10;
    
    // TTFB penalty (target: < 600ms)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 400) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Get score color
  const getScoreColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  // Get score background
  const getScoreBackground = useCallback((score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  }, []);

  useEffect(() => {
    if (autoOptimize) {
      measurePerformance();
      setupIntersectionObserver();
      preloadCriticalResources();
      
      // Measure performance after page load
      const timer = setTimeout(() => {
        optimizeImages();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, measurePerformance, setupIntersectionObserver, preloadCriticalResources, optimizeImages]);

  // Calculate overall score when metrics change
  useEffect(() => {
    if (metrics && !metrics.overall) {
      const overall = getPerformanceScore(metrics);
      setMetrics(prev => prev ? { ...prev, overall } : null);
    }
  }, [metrics, getPerformanceScore]);

  return (
    <>
      {children}
      
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-4 max-w-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <h4 className="font-semibold text-zion-slate-dark">Performance</h4>
            </div>
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="p-2 hover:bg-zion-cyan/10 rounded-lg transition-colors"
              title="Optimize performance"
            >
              {isOptimizing ? (
                <RefreshCw className="w-4 h-4 text-zion-cyan animate-spin" />
              ) : (
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
              )}
            </button>
          </div>
          
          {/* Overall Score */}
          <div className="mb-3">
            <div className={`w-16 h-16 rounded-full ${getScoreBackground(metrics.overall)} flex items-center justify-center mx-auto`}>
              <span className={`text-2xl font-bold ${getScoreColor(metrics.overall)}`}>
                {metrics.overall}
              </span>
            </div>
            <p className="text-center text-sm text-zion-slate/60 mt-1">Performance Score</p>
          </div>
          
          {/* Core Web Vitals */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zion-slate/70">FCP</span>
              <span className={`font-mono ${metrics.fcp <= 1800 ? 'text-green-600' : 'text-yellow-600'}`}>
                {(metrics.fcp / 1000).toFixed(1)}s
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zion-slate/70">LCP</span>
              <span className={`font-mono ${metrics.lcp <= 2500 ? 'text-green-600' : 'text-yellow-600'}`}>
                {(metrics.lcp / 1000).toFixed(1)}s
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zion-slate/70">FID</span>
              <span className={`font-mono ${metrics.fid <= 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zion-slate/70">CLS</span>
              <span className={`font-mono ${metrics.cls <= 0.1 ? 'text-green-600' : 'text-yellow-600'}`}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          </div>
          
          {/* Optimization History */}
          {optimizationHistory.length > 0 && (
            <div className="mt-3 pt-3 border-t border-zion-slate/20">
              <p className="text-xs text-zion-slate/60 mb-2">Optimization History</p>
              <div className="flex space-x-1">
                {optimizationHistory.slice(-5).map((hist, index) => (
                  <div
                    key={index}
                    className={`w-2 h-8 rounded-sm ${getScoreBackground(hist.overall)}`}
                    title={`Score: ${hist.overall}`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};
