import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, Clock, Gauge } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableOptimizations?: boolean;
  className?: string;
}

export function PerformanceOptimizer({ 
  showMetrics = false,
  enableOptimizations = true,
  className = ''
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      // Measure Core Web Vitals
      const measureFCP = () => {
        const fcpEntry = performance.getEntriesByType('paint').find(
          entry => entry.name === 'first-contentful-paint'
        );
        return fcpEntry ? fcpEntry.startTime : 0;
      };

      const measureLCP = () => {
        const lcpEntry = performance.getEntriesByType('largest-contentful-paint');
        return lcpEntry.length > 0 ? lcpEntry[lcpEntry.length - 1].startTime : 0;
      };

      const measureCLS = () => {
        let cls = 0;
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                cls += (entry as any).value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
        return cls;
      };

      const measureTTFB = () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;
      };

      // Simulate FID measurement (requires user interaction)
      const measureFID = () => {
        return new Promise<number>((resolve) => {
          const startTime = performance.now();
          const handleFirstInput = () => {
            const fid = performance.now() - startTime;
            document.removeEventListener('click', handleFirstInput);
            document.removeEventListener('keydown', handleFirstInput);
            resolve(fid);
          };
          document.addEventListener('click', handleFirstInput, { once: true });
          document.addEventListener('keydown', handleFirstInput, { once: true });
        });
      };

      // Get immediate metrics
      const immediateMetrics: Partial<PerformanceMetrics> = {
        fcp: measureFCP(),
        lcp: measureLCP(),
        cls: measureCLS(),
        ttfb: measureTTFB(),
      };

      // Measure FID when user interacts
      measureFID().then(fid => {
        setMetrics({
          ...immediateMetrics,
          fid
        } as PerformanceMetrics);
      });

      setMetrics(immediateMetrics as PerformanceMetrics);
    }
  }, []);

  // Performance optimizations
  const applyOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    const appliedOptimizations: string[] = [];

    try {
      // 1. Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          const criticalResources = [
            '/images/hero-bg.jpg',
            '/fonts/inter-var.woff2'
          ];
          
          criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.includes('.woff2') ? 'font' : 'image';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          });
          appliedOptimizations.push('Preloaded critical resources');
        });
      }

      // 2. Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          appliedOptimizations.push('Applied lazy loading to images');
        }
      });

      // 3. Optimize fonts
      if ('fonts' in document) {
        try {
          await document.fonts.ready;
          appliedOptimizations.push('Fonts loaded and optimized');
        } catch (error) {
          console.warn('Font optimization failed:', error);
        }
      }

      // 4. Enable service worker caching
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          if (registration.active) {
            appliedOptimizations.push('Service worker active and caching');
          }
        } catch (error) {
          console.warn('Service worker registration failed:', error);
        }
      }

      // 5. Optimize animations
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'transform, opacity';
      });
      appliedOptimizations.push('Optimized animation performance');

      // 6. Memory management
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          // Trigger garbage collection if memory usage is high
          if ('gc' in window) {
            (window as any).gc();
            appliedOptimizations.push('Triggered garbage collection');
          }
        }
      }

      setOptimizations(appliedOptimizations);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableOptimizations]);

  // Monitor performance continuously
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial measurement
      measurePerformance();

      // Set up performance observer for LCP
      if ('PerformanceObserver' in window) {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
          }
        });

        try {
          observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('PerformanceObserver not supported:', error);
        }
      }

      // Measure performance after page load
      const handleLoad = () => {
        setTimeout(measurePerformance, 1000);
      };

      window.addEventListener('load', handleLoad);

      // Apply optimizations after initial load
      if (enableOptimizations) {
        setTimeout(applyOptimizations, 2000);
      }

      return () => {
        window.removeEventListener('load', handleLoad);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [measurePerformance, applyOptimizations, enableOptimizations]);

  // Performance score calculation
  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-2500ms is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-2500ms is good)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (0-100ms is good)
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 15;

    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', icon: <CheckCircle className="w-5 h-5" /> };
    if (score >= 80) return { grade: 'B', color: 'text-blue-400', icon: <TrendingUp className="w-5 h-5" /> };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-400', icon: <Clock className="w-5 h-5" /> };
    return { grade: 'D', color: 'text-red-400', icon: <AlertTriangle className="w-5 h-5" /> };
  };

  if (!showMetrics && !showOptimizationPanel) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <AnimatePresence>
        {showOptimizationPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-4 max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Performance Optimizer</h3>
              <button
                onClick={() => setShowOptimizationPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {metrics && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Performance Score</span>
                  {(() => {
                    const score = calculatePerformanceScore(metrics);
                    const { grade, color, icon } = getPerformanceGrade(score);
                    return (
                      <div className={`flex items-center ${color}`}>
                        {icon}
                        <span className="ml-1 font-bold">{grade}</span>
                        <span className="ml-2 text-sm">({score})</span>
                      </div>
                    );
                  })()}
                </div>

                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>FCP:</span>
                    <span className={metrics.fcp < 1000 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.fcp.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>LCP:</span>
                    <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>FID:</span>
                    <span className={metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.fid.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>CLS:</span>
                    <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={applyOptimizations}
              disabled={isOptimizing}
              className="w-full flex items-center justify-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize Performance
                </>
              )}
            </button>

            {optimizations.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-white mb-2">Applied Optimizations:</h4>
                <ul className="space-y-1 text-xs text-gray-300">
                  {optimizations.map((optimization, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {optimization}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        title="Performance Optimizer"
      >
        <Gauge className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
