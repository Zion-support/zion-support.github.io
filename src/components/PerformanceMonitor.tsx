import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

// Type definitions for Performance API
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface ResourceEntry extends PerformanceEntry {
  duration: number;
  transferSize?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Performance Observer for Core Web Vitals
    const observePerformance = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setMetrics(prev => ({
                ...prev,
                fcp: Math.round(fcpEntry.startTime)
              }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer failed:', e);
        }

        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setMetrics(prev => ({
                ...prev,
                lcp: Math.round(lastEntry.startTime)
              }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer failed:', e);
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
              if (entry.entryType === 'first-input') {
                const fidEntry = entry as FirstInputEntry;
                setMetrics(prev => ({
                  ...prev,
                  fid: Math.round(fidEntry.processingStart - fidEntry.startTime)
                }));
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer failed:', e);
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
              if (entry.entryType === 'layout-shift') {
                const layoutShiftEntry = entry as LayoutShiftEntry;
                if (!layoutShiftEntry.hadRecentInput) {
                  clsValue += layoutShiftEntry.value;
                  setMetrics(prev => ({
                    ...prev,
                    cls: Math.round(clsValue * 1000) / 1000
                  }));
                }
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer failed:', e);
        }
      }
    };

    // Navigation Timing API for TTFB and load time
    const measureNavigationTiming = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
          const navigation = navigationEntries[0] as PerformanceNavigationTiming;
          
          setMetrics(prev => ({
            ...prev,
            ttfb: Math.round(navigation.responseStart - navigation.requestStart),
            loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
          }));
        }
      }
    };

    // Resource timing for additional insights
    const measureResourceTiming = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const resourceEntries = performance.getEntriesByType('resource');
        const slowResources = resourceEntries
          .filter(entry => entry.duration > 1000)
          .slice(0, 5)
          .map(entry => {
            const resourceEntry = entry as ResourceEntry;
            return {
              name: resourceEntry.name,
              duration: Math.round(resourceEntry.duration),
              size: resourceEntry.transferSize || 0
            };
          });

        if (slowResources.length > 0) {
          console.warn('Slow resources detected:', slowResources);
        }
      }
    };

    // Initialize performance monitoring
    observePerformance();

    // Measure timing after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        measureNavigationTiming();
        measureResourceTiming();
      });
    } else {
      measureNavigationTiming();
      measureResourceTiming();
    }

    // Final measurements after window load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measureNavigationTiming();
        measureResourceTiming();
      }, 100);
    });

    // Cleanup
    return () => {
      // Performance observers are automatically cleaned up
    };
  }, []);

  // Notify parent component of metrics updates
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 10;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 10;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 10;
    
    return Math.max(score, 0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (!value) return 'pending';
    
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-zion-slate-light';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      case 'poor': return '❌';
      default: return '⏳';
    }
  };

  if (!showMetrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/30 rounded-xl p-4 shadow-2xl max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-zion-slate-light hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3"
        >
          {/* Overall Score */}
          <div className="text-center p-3 bg-white/5 rounded-lg border border-zion-cyan/20">
            <div className={`text-2xl font-bold ${getScoreColor(getPerformanceScore())}`}>
              {getPerformanceScore()}
            </div>
            <div className="text-zion-slate-light text-xs">Performance Score</div>
          </div>

          {/* Metrics */}
          <div className="space-y-2">
            {Object.entries(metrics).map(([key, value]) => {
              const status = getMetricStatus(key as keyof PerformanceMetrics, value);
              const displayValue = value ? `${value}${key === 'cls' ? '' : 'ms'}` : 'Pending';
              
              return (
                <div key={key} className="flex items-center justify-between text-xs">
                  <span className="text-zion-slate-light uppercase">{key}</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono ${getStatusColor(status)}`}>
                      {displayValue}
                    </span>
                    <span className="text-lg">{getStatusIcon(status)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommendations */}
          <div className="text-xs text-zion-slate-light">
            {getPerformanceScore() < 90 && (
              <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                💡 Consider optimizing images, reducing bundle size, and implementing lazy loading
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PerformanceMonitor;