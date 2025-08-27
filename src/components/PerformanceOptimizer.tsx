import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, X, Settings, BarChart3, Clock, Gauge, Activity } from 'lucide-react';

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
  showControls?: boolean;
  autoOptimize?: boolean;
}

export function PerformanceOptimizer({ 
  enabled = true, 
  showControls = false, 
  autoOptimize = true 
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Measure Core Web Vitals
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: Math.round(entry.startTime) } : null);
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => prev ? { ...prev, lcp: Math.round(lastEntry.startTime) } : null);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => prev ? { ...prev, fid: Math.round(entry.processingStart - entry.startTime) } : null);
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart) } : null);
      }

      // DOM and Window Load times
      const domLoad = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (domLoad) {
        setMetrics(prev => prev ? { 
          ...prev, 
          domLoad: Math.round(domLoad.domContentLoadedEventEnd - domLoad.domContentLoadedEventStart),
          windowLoad: Math.round(domLoad.loadEventEnd - domLoad.loadEventStart)
        } : null);
      }

    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Auto-optimization features
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize) return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

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
        newOptimizations.push('Lazy loading enabled for images');
      }

      // Preload critical resources
      const criticalLinks = document.querySelectorAll('link[data-critical]');
      criticalLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        newOptimizations.push('Critical resources preloaded');
      });

      // Optimize animations for reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        newOptimizations.push('Animations optimized for reduced motion preference');
      }

      // Enable service worker if available
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          newOptimizations.push('Service worker registered');
        } catch (error) {
          // Service worker not available
        }
      }

    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
      setOptimizations(newOptimizations);
    }
  }, [autoOptimize]);

  // Performance recommendations
  const getPerformanceScore = useCallback(() => {
    if (!metrics) return { score: 0, grade: 'N/A', recommendations: [] };

    let score = 100;
    const recommendations: string[] = [];

    // FCP scoring (0-2000ms is good)
    if (metrics.fcp > 2000) {
      score -= 20;
      recommendations.push('Optimize First Contentful Paint - consider image optimization and critical CSS');
    }

    // LCP scoring (0-2500ms is good)
    if (metrics.lcp > 2500) {
      score -= 25;
      recommendations.push('Improve Largest Contentful Paint - optimize hero images and above-the-fold content');
    }

    // FID scoring (0-100ms is good)
    if (metrics.fid > 100) {
      score -= 20;
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.1) {
      score -= 20;
      recommendations.push('Fix Cumulative Layout Shift - ensure stable layout during page load');
    }

    // TTFB scoring (0-600ms is good)
    if (metrics.ttfb > 600) {
      score -= 15;
      recommendations.push('Improve Time to First Byte - optimize server response time');
    }

    let grade = 'A';
    if (score < 90) grade = 'B';
    if (score < 80) grade = 'C';
    if (score < 70) grade = 'D';
    if (score < 60) grade = 'F';

    return { score: Math.max(0, score), grade, recommendations };
  }, [metrics]);

  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    measurePerformance();

    // Measure after page load
    const handleLoad = () => {
      setTimeout(measurePerformance, 1000);
    };

    window.addEventListener('load', handleLoad);
    
    // Periodic measurement for SPA navigation
    const interval = setInterval(measurePerformance, 30000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, [enabled, measurePerformance]);

  useEffect(() => {
    if (autoOptimize) {
      performOptimizations();
    }
  }, [autoOptimize, performOptimizations]);

  if (!enabled) return null;

  const performanceScore = getPerformanceScore();

  return (
    <>
      {/* Performance Indicator */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            performanceScore.score >= 90 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : performanceScore.score >= 70 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          onClick={() => setIsVisible(!isVisible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Performance Monitor"
        >
          <Gauge className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Performance Score */}
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  performanceScore.score >= 90 ? 'text-green-500' :
                  performanceScore.score >= 70 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {performanceScore.score}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Grade: {performanceScore.grade}
                </div>
              </div>

              {/* Metrics Grid */}
              {metrics && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">FCP</div>
                    <div className="text-sm font-semibold">{metrics.fcp}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">LCP</div>
                    <div className="text-sm font-semibold">{metrics.lcp}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">FID</div>
                    <div className="text-sm font-semibold">{metrics.fid}ms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">CLS</div>
                    <div className="text-sm font-semibold">{metrics.cls}</div>
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Recent Optimizations
                  </h4>
                  <div className="space-y-1">
                    {optimizations.map((opt, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {performanceScore.recommendations.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Recommendations
                  </h4>
                  <div className="space-y-1">
                    {performanceScore.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls */}
              {showControls && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={performOptimizations}
                    disabled={isOptimizing}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isOptimizing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Optimizing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        Run Optimizations
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
