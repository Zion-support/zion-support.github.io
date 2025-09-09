import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, BarChart3, Gauge, Monitor } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  bundleLoadTime: number | null;
  memoryUsage: number | null;
  networkSpeed: number | null;
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    bundleLoadTime: null,
    memoryUsage: null,
    networkSpeed: null,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 0;
    let totalMetrics = 0;

    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.good) score += 100;
      else if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.good) score += 100;
      else if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.good) score += 100;
      else if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.good) score += 100;
      else if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.ttfb !== null) {
      totalMetrics++;
      if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.good) score += 100;
      else if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.needsImprovement) score += 50;
      else score += 25;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  }, []);

  const getPerformanceStatus = (metric: keyof PerformanceThresholds, value: number | null): string => {
    if (value === null) return 'N/A';
    
    const thresholds = PERFORMANCE_THRESHOLDS[metric];
    if (value <= thresholds.good) return '🟢 Good';
    if (value <= thresholds.needsImprovement) return '🟡 Needs Improvement';
    return '🔴 Poor';
  };

  const getMetricValue = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'bundleLoadTime':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      case 'memoryUsage':
        return `${Math.round(value / 1024 / 1024)}MB`;
      case 'networkSpeed':
        return `${Math.round(value / 1024 / 1024)}MB/s`;
      default:
        return 'N/A';
    }
  };

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Measure FCP
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            setMetrics(prev => ({ ...prev, fcp: entries[0].startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            setMetrics(prev => ({ ...prev, lcp: entries[0].startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            setMetrics(prev => ({ ...prev, fid: entries[0].processingStart - entries[0].startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure CLS
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

        // Measure TTFB
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        // Measure bundle load time
        const bundleLoadTime = performance.now();
        setMetrics(prev => ({ ...prev, bundleLoadTime }));

        // Measure memory usage
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    measurePerformance();
  }, []);

  useEffect(() => {
    const score = getPerformanceScore(metrics);
    setPerformanceScore(score);
  }, [metrics, getPerformanceScore]);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl z-50 max-w-sm border border-zion-cyan/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-zion-cyan" />
          <h3 className="text-sm font-semibold">Performance Monitor</h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs p-1 rounded hover:bg-white/10 transition-colors"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>

      {/* Performance Score */}
      <div className="mb-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
        <div className="flex items-center justify-between">
          <span className="text-xs text-zion-cyan">Overall Score</span>
          <span className="text-lg font-bold text-zion-cyan">{performanceScore}</span>
        </div>
        <div className="w-full bg-zion-cyan/20 rounded-full h-2 mt-2">
          <div 
            className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>
      
      {/* Metrics */}
      <div className="space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-zion-cyan" />
            FCP
          </span>
          <span className="font-mono">{getMetricValue('fcp')}</span>
          <span className="text-xs">{getPerformanceStatus('fcp', metrics.fcp)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-zion-cyan" />
            LCP
          </span>
          <span className="font-mono">{getMetricValue('lcp')}</span>
          <span className="text-xs">{getPerformanceStatus('lcp', metrics.lcp)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-zion-cyan" />
            FID
          </span>
          <span className="font-mono">{getMetricValue('fid')}</span>
          <span className="text-xs">{getPerformanceStatus('fid', metrics.fid)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <BarChart3 className="w-3 h-3 text-zion-cyan" />
            CLS
          </span>
          <span className="font-mono">{getMetricValue('cls')}</span>
          <span className="text-xs">{getPerformanceStatus('cls', metrics.cls)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Gauge className="w-3 h-3 text-zion-cyan" />
            TTFB
          </span>
          <span className="font-mono">{getMetricValue('ttfb')}</span>
          <span className="text-xs">{getPerformanceStatus('ttfb', metrics.ttfb)}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="mt-4 pt-3 border-t border-zion-cyan/20 space-y-2">
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-zion-cyan text-black text-xs py-2 px-3 rounded-lg hover:bg-zion-cyan/80 transition-colors font-medium"
        >
          Refresh Metrics
        </button>
        
        <div className="text-center">
          <span className="text-xs text-gray-400">
            Press <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">Ctrl+Shift+P</kbd> to toggle
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
