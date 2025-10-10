:src/components/PerformanceMonitor.tsx;
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
interface PerformanceMonitorProps {/* TODO: Fix JSX expression */}
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
    ,
=======
interface PerformanceMonitorProps {
/* TODO: Fix JSX expression *
}
};
;
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ ,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  children;
  enableReporting = true,
  enableLongTaskMonitoring = true
  }) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);
  useEffect(() => {
    // Initialize performance monitoring;
    // Add critical resource hints manually;
<<<<<<< HEAD
    if (typeof document !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];
      hints.forEach(hint => {
    )
        const _link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin
  }
=======
    if (typeof document !== 'undefined') {;
const hints = [
];
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' };
      ];
      hints.forEach(hint => {);
const _link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const,
  PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);
<<<<<<< HEAD
  useEffect(() => {/* TODO: Fix JSX expression */}
  s://fonts.googleapis.com' },
        {/* TODO: Fix JSX expression */}
  s://fonts.gstatic.com' },
        {/* TODO: Fix JSX expression */}
  s://fonts.googleapis.com' },
        {/* TODO: Fix JSX expression */}
  n: 'anonymous' }
      ];
      hints.forEach(hint => {/* TODO: Fix JSX expression */}
        })
        document.head.appendChild(link);
      });
    }
    // Measure page load performance;
//     const pageLoadMetrics = performanceOptimizer.measurePageLoad();
    if (pageLoadMetrics) {/* TODO: Fix JSX expression */}
      }
    }
    // Monitor long tasks if enabled;
    if (enableLongTaskMonitoring) {
      const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntryList) => {,
        setLongTasks(prev => [...prev, ...entries]);
    if (enableLongTaskMonitoring) {/* TODO: Fix JSX expression */}
//         });
      return () => {/* TODO: Fix JSX expression */}
        }
      }
    }
=======
  useEffect (() => {/* TODO: Fix JSX expression *
  s:/
        {/* TODO: Fix JSX expression *
  s:/
        {/* TODO: Fix JSX expression *
  s:/
        {/* TODO: Fix JSX expression *
  ,
    n: 'anonymous' };
      ];
      hints.forEach(hint => {/* TODO: Fix JSX expression */};
        })
        document.head.appendChild(link)})};
    /
/
    if (pageLoadMetrics) {/* TODO: Fix JSX expression *
      };
    };
    // Monitor long tasks if enabled;
    if (enableLongTaskMonitoring) {;
const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntryList) => {,
        setLongTasks(prev => [...prev, ...entries]);
    if (enableLongTaskMonitoring) {/* TODO: Fix JSX expression *
/
      return (<div>)
      {) => {/* TOD,
    O: Fix JSX expression *
        };
      }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  }, [enableReporting, enableLongTaskMonitoring]);
  // Monitor Web Vitals using Performance Observer;
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
<<<<<<< HEAD
    const observer = new PerformanceObserver((list) => {
      const _entries = list.getEntries();
=======
;
const observer = new PerformanceObserver((list) => {;
const _entries = list.getEntries();
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
//           const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, LCP: lcp }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ LCP: lcp });
<<<<<<< HEAD
  useEffect(() => {/* TODO: Fix JSX expression */}
  P: lcp }));
          if (enableReporting) {/* TODO: Fix JSX expression */}
  P: lcp });
          }
        }
        if (entry.entryType === 'first-input') {/* TODO: Fix JSX expression */}
  D: fid }));
          if (enableReporting) {/* TODO: Fix JSX expression */}
  D: fid });
          }
        }
        if (entry.entryType === 'layout-shift') {/* TODO: Fix JSX expression */}
  S: cls }));
          if (enableReporting) {/* TODO: Fix JSX expression */}
  S: cls });
          }
        }
      });
    });
    try {/* TODO: Fix JSX expression */}
  s: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {/* TODO: Fix JSX expression */}
//       }
    return () => {/* TODO: Fix JSX expression */}
    }
  }, [enableReporting]);
  // Development mode: Log performance metrics,
=======
  useEffect(() => {/* TODO: Fix JSX expression */};
  P: lcp }));
          if (enableReporting) {/* TODO: Fix JSX expression */};
  P: lcp })};
        };
        if (entry.entryType === 'first-input') {/* TODO: Fix JSX expression */};
  D: fid }));
          if (enableReporting) {/* TODO: Fix JSX expression */};
  D: fid })};
        };
        if (entry.entryType === 'layout-shift') {/* TODO: Fix JSX expression */};
  S: cls }));
          if (enableReporting) {/* TODO: Fix JSX expression */};
  S: cls })};
        };
      })});
    try {/* TODO: Fix JSX expression */};
  s: ['largest-contentful-paint', 'first-input', 'layout-shift'] })} catch (e) {/* TODO: Fix JSX expression */};
//       };
    return () => {/* TODO: Fix JSX expression */};
    }}, [enableReporting]);
  // Development mode: Log performance metrics;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  useEffect(() => {,
    if (process.env['NODE_ENV'] === 'development' && Object.keys(metrics).length > 0) {,
  // Development,
  mode: Log performance metrics,
  useEffect(() => {/* TODO: Fix JSX expression */}
//       }
  }, [metrics]);
<<<<<<< HEAD
  return <React.Fragment>{children}
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceMonitorProps {/* TODO: Fix JSX expression */}
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
    ,
=======
  return <React.Fragment>{children};
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceMonitorProps {
/* TODO: Fix JSX expression *
}
};
;
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  enabled = true;
  budget = {,
    maxBundleSize: 500, // 500KB;
    maxImageSize: 100, // 100KB;
    maxFirstLoad: 3000, // 3 seconds;
<<<<<<< HEAD
    maxInteractive: 2000 // 2 seconds
  },
=======
    maxInteractive: 2000 // 2 seconds},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  onMetricsUpdate,
  onBudgetViolation;
}) => {
const,
<<<<<<< HEAD
  PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({/* TODO: Fix JSX expression */}
=======
  PerformanceMonitor: React.FC<PerformanceMonitorProps>
);
} = ({/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  },
  onMetricsUpdate,
  onBudgetViolation;)
}) => {/* TODO: Fix JSX expression */}
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
  const [budgetStatus, setBudgetStatus] = useState<{/* TODO: Fix JSX expression */}
  s: string[] }>({/* TODO: Fix JSX expression */})
  s: [] });
  const updateMetrics = useCallback(() => {/* TODO: Fix JSX expression */}
      setMetrics(prev => ({ ...prev, ...newMetrics }));
      onMetricsUpdate?.(newMetrics);
      // Check performance budget;
      const _budgetCheck = performanceOptimizer.checkPerformanceBudget(budget);
      setBudgetStatus(budgetCheck);
      if (!budgetCheck.passed) {/* TODO: Fix JSX expression */}
      }
    }
  }, [budget, onMetricsUpdate, onBudgetViolation]);
  useEffect(() => {
    if (!enabled) return;
    // Initial metrics;
    updateMetrics();
    // Monitor long tasks;
    const longTaskObserver = performanceOptimizer.monitorLongTasks((entries) => {
//       });
    // Monitor Web Vitals;
    const reportVitals = (newMetrics: WebVitalsMetrics) => {,
  useEffect(() => {/* TODO: Fix JSX expression */}
//       });
    // Monitor Web Vitals;
=======
  const [budgetStatus, setBudgetStatus] = useState<{/* TODO: Fix JSX expression */};
  s: string[] }>({/* TODO: Fix JSX expression */})
  s: [] });
;
const updateMetrics = useCallback(() => {/* TODO: Fix JSX expression */};
      setMetrics(prev => ({ ...prev, ...newMetrics }));
      onMetricsUpdate?.(newMetrics);
      /
      const _budgetCheck = performanceOptimizer.checkPerformanceBudget(budget);
      setBudgetStatus(budgetCheck);
      if (!budgetCheck.passed) {/* TODO: Fix JSX expression *
      };
    };
  }, [budget, onMetricsUpdate, onBudgetViolation]);
  useEffect (() => {
    if (!enabled) return;
    /
    updateMetrics();
    /
    const longTaskObserver = performanceOptimizer.monitorLongTasks ((entries) => {
/
    /
    const reportVitals = (newMetrics: WebVitalsMetrics) => {,
  useEffect (() => {/* TODO: Fix JSX expression *
/
    /
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const reportVitals = (newMetric)
  s: WebVitalsMetrics) => {/* TODO: Fix JSX expression */}
      setMetrics(prev => ({ ...prev, ...newMetrics }));
<<<<<<< HEAD
      performanceOptimizer.reportWebVitals(newMetrics);
    }
    // Set up performance monitoring;
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {
            const _paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              reportVitals({ FCP: paintEntry.startTime });
    if ('PerformanceObserver' in window) {/* TODO: Fix JSX expression */}
  P: paintEntry.startTime });
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {/* TODO: Fix JSX expression */}
  P: lcpEntry.startTime });
          }
        });
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['paint', 'largest-contentful-paint'] });
      return () => {/* TODO: Fix JSX expression */}
      }
    }
    return () => {/* TODO: Fix JSX expression */}
    }
  }, [enabled, updateMetrics]);
  if (!enabled) return null;
  return(<div className="performance-monitor">)
      {/* Toggle button */})
      <button;)
  return (
    <div className="performance-monitor">
      {/* Toggle button */}</div>
      <button
        onClick={() => setIsVisible(!isVisible)}
=======
      performanceOptimizer.reportWebVitals(newMetrics)};
    // Set up performance monitoring;
    if ('PerformanceObserver' in window) {;
const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {;
const _paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              reportVitals({ FCP: paintEntry.startTime });
    if ('PerformanceObserver' in window) {/* TODO: Fix JSX expression */};
  P: paintEntry.startTime })};
          };
          if (entry.entryType === 'largest-contentful-paint') {/* TODO: Fix JSX expression */};
  P: lcpEntry.startTime })};
        })});
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['paint', 'largest-contentful-paint'] });
      return () => {/* TODO: Fix JSX expression */};
      }};
    return () => {/* TODO: Fix JSX expression */};
    }}, [enabled, updateMetrics]);
  if (!enabled) return null;
  return(<div className="performance-monitor">)
      {/* Toggle button *
      <button ;)
  return (<div className="performance-monitor">
      {/* Toggle button */}<
      <button)
        onClick = { () => setIsVisible(!isVisible) };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover: bg-blue-700 transition-colors"
        aria-label="Toggle performance monitor",
      >,
        📊,
      </button>,
,
      {/* Performance panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark: bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">,
          <div className="flex justify-between items-center mb-3">,
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>,
            <button;
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto"></div>
          <div className="flex justify-between items-center mb-3"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close performance monitor"
            >,
              ✕,
            </button>,
          </div>,
,
          {/* Metrics */}
          <div className="space-y-2 mb-4">
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark: text-gray-300">FCP:</span>,
          <div className="space-y-2 mb-4"></div>
            <div className="text-sm"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">FCP:</span>
              <span className={`ml-2 ${metrics.FCP && metrics.FCP < 1800 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.FCP ? `${Math.round(metrics.FCP)}ms` : 'N/A'}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark: text-gray-300">LCP:</span>,
            <div className="text-sm"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">LCP:</span>
              <span className={`ml-2 ${metrics.LCP && metrics.LCP < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.LCP ? `${Math.round(metrics.LCP)}ms` : 'N/A'}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark: text-gray-300">TTFB:</span>,
            <div className="text-sm"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">TTFB:</span>
              <span className={`ml-2 ${metrics.TTFB && metrics.TTFB < 600 ? 'text-green-600' : 'text-red-600'}`}>
  return (<div className="performance-monitor"></div>
      {/* Toggle button */}
      <button></button>)
        onClick={() => setIsVisible(!isVisible)}"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg,"
  hover:bg-blue-700 transition-colors""
        aria-label="Toggle performance monitor"
      >
        📊
<<<<<<< HEAD
      </button>
      {/* Performance panel */}
      {/* TODO: Fix JSX expression */}
=======
      <
      {/* Performance panel *
      {/* TOD,
    O: Fix JSX expression *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              onClick={() => setIsVisible(false)}"
              className="text-gray-500,
  hover:text-gray-700,
  dark:text-gray-400,
  dark:hove,"
  r:text-gray-200""
              aria-label="Close performance monitor"
            >
              ✕
<<<<<<< HEAD
            </button>
          </div>
          {/* Metrics */}"
          <div className="space-y-2 mb-4"></div>"
            <div className="text-sm"></div>"
=======
            <
          <
          {/* Metrics *
          <div className="space-y-2 mb-4"><
            <div className="text-sm"><
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">FC,
  P:</span>
              <span className={`ml-2 ${metrics.FCP && metrics.FCP < 1800 ? 'text-green-600' : 'text-red-600'}`}></span>`
                {metrics.FCP ? `${Math.round(metrics.FCP)}ms` : 'N/A'}
              </span>
            </div>"
            <div className="text-sm"></div>"
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">LC,
  P:</span>`
              <span className={`ml-2 ${metrics.LCP && metrics.LCP < 2500 ? 'text-green-600' : 'text-red-600'}`}></span>`
                {metrics.LCP ? `${Math.round(metrics.LCP)}ms` : 'N/A'}
              </span>
            </div>"
            <div className="text-sm"></div>"
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">TTF,
<<<<<<< HEAD
  B:</span>`
              <span className={`ml-2 ${metrics.TTFB && metrics.TTFB < 600 ? 'text-green-600' : 'text-red-600'}`}></span>`
                {metrics.TTFB ? `${Math.round(metrics.TTFB)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          {/* Budget Status */}
=======
  B:<
              <span className={`ml-2 ${metrics.TTFB && metrics.TTFB < 600 ? 'text-green-600' : 'text-red-600'}`}><
                {metrics.TTFB ? `${Math.round(metrics.TTFB)}ms` : 'N
              <
            <
          <
          {/* Budget Status *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="border-t pt-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-700 dark: text-gray-300">Budget Status:</span>,
          <div className="border-t pt-3"></div>
            <div className="flex items-center gap-2 mb-2"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Budget Status:</span>
              <span className={`text-sm font-bold ${budgetStatus.passed ? 'text-green-600' : 'text-red-600'}`}>
<<<<<<< HEAD
                {budgetStatus.passed ? '✓ PASSED' : '✗ FAILED'}
              </span>
            </div>
            {budgetStatus.violations.length > 0 && (
              <div className="text-xs text-red-600 dark: text-red-400">,
                {budgetStatus.violations.map((violation, index) => (
              <div className="text-xs text-red-600 dark:text-red-400">
                {budgetStatus.violations.map((violation, index) => (</div>
          {/* Budget Status */}"
          <div className="border-t pt-3"></div>"
            <div className="flex items-center gap-2 mb-2"></div>"
              <span className="text-sm font-medium text-gray-700,"
  dark:text-gray-300">Budget,
  Status:</span>`
              <span className={`text-sm font-bold ${budgetStatus.passed ? 'text-green-600' : 'text-red-600'}`}></span>
                {budgetStatus.passed ? '✓ PASSED' : '✗ FAILED'}
              </span>
            </div>
            {/* TODO: Fix JSX expression */}
                  <div key={index}>• {violation}</div>
                ))}
              </div>
            )}
          </div>
          {/* Connection Quality */}
=======
                {budgetStatus.passed ? '✓ PASSED' : '✗ FAILED'};
              <
            <
            {budgetStatus.violations.length > 0 && (<div className="text-xs text-red-600 dark: text-red-400">,)
                {budgetStatus.violations.map((violation, index) => (<div className="text-xs text-red-600 dark: text-red-400">)
                {budgetStatus.violations.map((violation), index) => (<
          {/* Budget Status *
          <div className="border-t pt-3"><
            <div className="flex items-center gap-2 mb-2"><
              <span className="text-sm font-medium text-gray-700,"
  dark:text-gray-300">Budget,
  Status:<
              <span className={`text-sm font-bold ${budgetStatus.passed ? 'text-green-600' : 'text-red-600'}`}><
                {budgetStatus.passed ? '✓ PASSED' : '✗ FAILED'};
              <
            <
            {/* TODO: Fix JSX expression *
                  <div key={index}>• {violation}<)
                ))};
              <
            )};
          <
          {/* Connection Quality *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="border-t pt-3 mt-3">
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark: text-gray-300">Connection:</span>,
              <span className="ml-2 text-blue-600">,
<<<<<<< HEAD
                {performanceOptimizer.getConnectionQuality().toUpperCase()}
              </span>
            </div>
=======
                {performanceOptimizer.getConnectionQuality().toUpperCase()};
              <
            <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark: text-gray-300">WebP Support:</span>,
              <span className="ml-2 text-blue-600">,
<<<<<<< HEAD
          <div className="border-t pt-3 mt-3"></div>
            <div className="text-sm"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">Connection:</span>
              <span className="ml-2 text-blue-600"></spa>
                {performanceOptimizer.getConnectionQuality().toUpperCase()}
              </span>
            </div>
            <div className="text-sm"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">WebP Support:</span>
=======
          <div className="border-t pt-3 mt-3"><
            <div className="text-sm"><
              <span className="font-medium text-gray-700 dark: text-gray-300">Connectio,
    n:<
              <span className="ml-2 text-blue-600"><
                {performanceOptimizer.getConnectionQuality().toUpperCase()};
              <
            <
            <div className="text-sm"><
              <span className="font-medium text-gray-700 dark: text-gray-300">WebP Suppor,
    t:<
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <span className="ml-2 text-blue-600">
          {/* Connection Quality */}"
          <div className="border-t pt-3 mt-3"></div>"
            <div className="text-sm"></div>"
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">Connectio,
<<<<<<< HEAD
  n:</span>"
              <span className="ml-2 text-blue-600"></span>
                {performanceOptimizer.getConnectionQuality().toUpperCase()}
              </span>
            </div>"
            <div className="text-sm"></div>"
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">WebP,
  Support:</span>"
              <span className="ml-2 text-blue-600"></span>
                {performanceOptimizer.shouldUseWebP() ? 'YES' : 'NO'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PerformanceMonitor;
}"`
  </WebVitalsMetrics>
  </PerformanceMonitorProps>
  </PerformanceMonitorProps>
  </WebVitalsMetrics>
  </PerformanceMonitorProps>
  </WebVitalsMetrics>
  </PerformanceMonitorProps>
=======
  n:<
              <span className="ml-2 text-blue-600"><
                {performanceOptimizer.getConnectionQuality().toUpperCase()};
              <
            <
            <div className="text-sm"><
              <span className="font-medium text-gray-700,"
  dark:text-gray-300">WebP,
  Support:<
              <span className="ml-2 text-blue-600"><
                {performanceOptimizer.shouldUseWebP() ? 'YES' : 'NO'};
              <
            <
          <
        <
      )};
    </div>
  )};
export default PerformanceMonitor}"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
