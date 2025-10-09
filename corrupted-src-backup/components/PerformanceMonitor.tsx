:src/components/PerformanceMonitor.tsx
import React, { useEffect, useState } from 'react';
import performanceOptimizer, { WebVitalsMetrics } from '../utils/performanceOptimizer';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true,
  enableLongTaskMonitoring = true 
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);

  useEffect(() => {
    // Initialize performance monitoring
    // Add critical resource hints manually
    if (typeof document !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];
      
      hints.forEach(hint => {
        const _link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      });
    }
    
    // Measure page load performance
//     const pageLoadMetrics = performanceOptimizer.measurePageLoad();
    if (pageLoadMetrics) {
      setMetrics(pageLoadMetrics);
      if (enableReporting) {
        performanceOptimizer.reportWebVitals(pageLoadMetrics);
      }
    }

    // Monitor long tasks if enabled
    if (enableLongTaskMonitoring) {
      const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntryList) => {
        setLongTasks(prev => [...prev, ...entries]);
//         });
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [enableReporting, enableLongTaskMonitoring]);

  // Monitor Web Vitals using Performance Observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const _entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
//           const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, LCP: lcp }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ LCP: lcp });
          }
        }
        
        if (entry.entryType === 'first-input') {
//           const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, FID: fid }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ FID: fid });
          }
        }
        
        if (entry.entryType === 'layout-shift') {
//           const cls = (entry as any).value;
          setMetrics(prev => ({ ...prev, CLS: cls }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ CLS: cls });
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
//       }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  // Development mode: Log performance metrics
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development' && Object.keys(metrics).length > 0) {
//       }
  }, [metrics]);

  return <>{children}</>;
import React, { useEffect, useState, useCallback } from 'react';
import performanceOptimizer, { WebVitalsMetrics, PerformanceBudget } from '../utils/performanceOptimizer';

interface PerformanceMonitorProps {
  enabled?: boolean;
  budget?: PerformanceBudget;
  onMetricsUpdate?: (metrics: WebVitalsMetrics) => void;
  onBudgetViolation?: (violations: string[]) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  budget = {
    maxBundleSize: 500, // 500KB
    maxImageSize: 100, // 100KB
    maxFirstLoad: 3000, // 3 seconds
    maxInteractive: 2000 // 2 seconds
  },
  onMetricsUpdate,
  onBudgetViolation
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [budgetStatus, setBudgetStatus] = useState<{ passed: boolean; violations: string[] }>({ passed: true, violations: [] });

  const updateMetrics = useCallback(() => {
//     const newMetrics = performanceOptimizer.measurePageLoad();
    if (newMetrics) {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
      onMetricsUpdate?.(newMetrics);
      
      // Check performance budget
      const _budgetCheck = performanceOptimizer.checkPerformanceBudget(budget);
      setBudgetStatus(budgetCheck);
      
      if (!budgetCheck.passed) {
        onBudgetViolation?.(budgetCheck.violations);
      }
    }
  }, [budget, onMetricsUpdate, onBudgetViolation]);

  useEffect(() => {
    if (!enabled) return;

    // Initial metrics
    updateMetrics();

    // Monitor long tasks
    const longTaskObserver = performanceOptimizer.monitorLongTasks((entries) => {
//       });

    // Monitor Web Vitals
    const reportVitals = (newMetrics: WebVitalsMetrics) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
      performanceOptimizer.reportWebVitals(newMetrics);
    };

    // Set up performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {
            const _paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              reportVitals({ FCP: paintEntry.startTime });
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            const _lcpEntry = entry as PerformanceEntry;
            reportVitals({ LCP: lcpEntry.startTime });
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

      return () => {
        observer.disconnect();
        longTaskObserver?.disconnect();
      };
    }

    return () => {
      longTaskObserver?.disconnect();
    };
  }, [enabled, updateMetrics]);

  if (!enabled) return null;

  return (
    <div className="performance-monitor">
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle performance monitor"
      >
        📊
      </button>

      {/* Performance panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close performance monitor"
            >
              ✕
            </button>
          </div>

          {/* Metrics */}
          <div className="space-y-2 mb-4">
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">FCP:</span>
              <span className={`ml-2 ${metrics.FCP && metrics.FCP < 1800 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.FCP ? `${Math.round(metrics.FCP)}ms` : 'N/A'}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">LCP:</span>
              <span className={`ml-2 ${metrics.LCP && metrics.LCP < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.LCP ? `${Math.round(metrics.LCP)}ms` : 'N/A'}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">TTFB:</span>
              <span className={`ml-2 ${metrics.TTFB && metrics.TTFB < 600 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.TTFB ? `${Math.round(metrics.TTFB)}ms` : 'N/A'}
              </span>
            </div>
          </div>

          {/* Budget Status */}
          <div className="border-t pt-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Budget Status:</span>
              <span className={`text-sm font-bold ${budgetStatus.passed ? 'text-green-600' : 'text-red-600'}`}>
                {budgetStatus.passed ? '✓ PASSED' : '✗ FAILED'}
              </span>
            </div>
            {budgetStatus.violations.length > 0 && (
              <div className="text-xs text-red-600 dark:text-red-400">
                {budgetStatus.violations.map((violation, index) => (
                  <div key={index}>• {violation}</div>
                ))}
              </div>
            )}
          </div>

          {/* Connection Quality */}
          <div className="border-t pt-3 mt-3">
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Connection:</span>
              <span className="ml-2 text-blue-600">
                {performanceOptimizer.getConnectionQuality().toUpperCase()}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">WebP Support:</span>
              <span className="ml-2 text-blue-600">
                {performanceOptimizer.shouldUseWebP() ? 'YES' : 'NO'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
}