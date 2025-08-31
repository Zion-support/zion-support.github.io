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
  EyeOff
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
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const newMetrics: PerformanceMetrics = {
      fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      lcp: 0, // Will be updated by observer
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
      windowLoad: navigation.loadEventEnd - navigation.navigationStart
    };

    setMetrics(newMetrics);
    metricsRef.current = newMetrics;
  }, [enabled]);

  // Setup performance observers
  useEffect(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      if (metricsRef.current) {
        setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
      }
    });

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      if (metricsRef.current) {
        setMetrics(prev => prev ? { ...prev, fid: lastEntry.processingStart - lastEntry.startTime } : null);
      }
    });

    // CLS Observer
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      if (metricsRef.current) {
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
      }
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('PerformanceObserver not supported:', e);
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enabled]);

  // Initial measurement
  useEffect(() => {
    if (enabled) {
      // Wait for page load to get accurate metrics
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
        return () => window.removeEventListener('load', measurePerformance);
      }
    }
  }, [enabled, measurePerformance]);

  // Auto-optimization
  const runOptimizations = useCallback(async () => {
    if (!enabled || !autoOptimize) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        newOptimizations.push('Added lazy loading to images');
      }
    });

    // Preload critical resources
    const criticalLinks = document.querySelectorAll('link[rel="preload"]');
    if (criticalLinks.length === 0) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/orbitron.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
      newOptimizations.push('Added critical font preloading');
    }

    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        newOptimizations.push('Service worker registered for offline caching');
      } catch (e) {
        console.warn('Service worker registration failed:', e);
      }
    }

    // Resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.gpteng.co' }
    ];

    resourceHints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
        newOptimizations.push(`Added ${hint.rel} for ${hint.href}`);
      }
    });

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [enabled, autoOptimize]);

  useEffect(() => {
    if (autoOptimize) {
      const timer = setTimeout(runOptimizations, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, runOptimizations]);

  if (!enabled) return null;

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 15;
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

  return (
    <>
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {isVisible && metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-24 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-4 w-80 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Performance Metrics
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <EyeOff className="w-4 h-4" />
              </button>
            </div>

            {metrics && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Performance Score:</span>
                  <span className={`font-bold text-lg ${getPerformanceColor(getPerformanceScore(metrics))}`}>
                    {getPerformanceScore(metrics)} ({getPerformanceGrade(getPerformanceScore(metrics))})
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-gray-400">FCP</div>
                    <div className="text-white font-mono">{(metrics.fcp / 1000).toFixed(2)}s</div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-gray-400">LCP</div>
                    <div className="text-white font-mono">{(metrics.lcp / 1000).toFixed(2)}s</div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-gray-400">FID</div>
                    <div className="text-white font-mono">{metrics.fid.toFixed(0)}ms</div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-gray-400">CLS</div>
                    <div className="text-white font-mono">{metrics.cls.toFixed(3)}</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-200"
        title="Toggle Performance Metrics"
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </motion.button>

      {/* Optimization Status */}
      <AnimatePresence>
        {optimizations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed bottom-4 right-4 z-50 bg-green-900/95 backdrop-blur-md border border-green-700 rounded-xl p-4 max-w-sm shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Optimizations Applied</span>
            </div>
            <div className="text-sm text-green-200 space-y-1">
              {optimizations.slice(0, 3).map((opt, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3" />
                  {opt}
                </div>
              ))}
              {optimizations.length > 3 && (
                <div className="text-green-300 text-xs">
                  +{optimizations.length - 3} more optimizations
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Indicator */}
      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 left-4 z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-3 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-white">
              <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
              <span className="text-sm">Optimizing...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
