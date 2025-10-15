<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  lcp: number;
  fcp: number;
  ttfb: number;
  memory: number;
  loadTime: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    fid: 0,
    lcp: 0,
    fcp: 0,
    ttfb: 0,
    memory: 0,
    loadTime: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (!isMonitoring) return;

    // Measure Core Web Vitals
    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getLCP, getFCP, getTTFB } = await import('web-vitals');
        
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
        });
        
        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
        });
        
        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
        });
        
        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
        });
        
        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        });
      } catch (error) {
        console.error('Error measuring web vitals:', error);
      }
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: memory.usedJSHeapSize / memory.jsHeapSizeLimit 
        }));
      }
    };

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance metric - ${name}:`, value);
    };

    measureWebVitals();
    measureMemory();
    measureLoadTime();

    // Set up continuous monitoring
    const interval = setInterval(() => {
      measureMemory();
    }, 5000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    setIsVisible(true);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const resetMetrics = () => {
    setMetrics({
      cls: 0,
      fid: 0,
      lcp: 0,
      fcp: 0,
      ttfb: 0,
      memory: 0,
      loadTime: 0
    });
  };

  const getPerformanceScore = () => {
    const scores = [];
    
    // CLS score (0-0.1 is good)
    if (metrics.cls <= 0.1) scores.push(100);
    else if (metrics.cls <= 0.25) scores.push(75);
    else scores.push(50);
    
    // FID score (0-100ms is good)
    if (metrics.fid <= 100) scores.push(100);
    else if (metrics.fid <= 300) scores.push(75);
    else scores.push(50);
    
    // LCP score (0-2.5s is good)
    if (metrics.lcp <= 2500) scores.push(100);
    else if (metrics.lcp <= 4000) scores.push(75);
    else scores.push(50);
    
    // FCP score (0-1.8s is good)
    if (metrics.fcp <= 1800) scores.push(100);
    else if (metrics.fcp <= 3000) scores.push(75);
    else scores.push(50);
    
    // TTFB score (0-800ms is good)
    if (metrics.ttfb <= 800) scores.push(100);
    else if (metrics.ttfb <= 1800) scores.push(75);
    else scores.push(50);
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  };

  const score = getPerformanceScore();
  const scoreColor = score >= 90 ? 'text-green-500' : score >= 70 ? 'text-yellow-500' : 'text-red-500';

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Toggle performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Monitor Panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-40 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
              <span className={`text-2xl font-bold ${scoreColor}`}>{score}/100</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">CLS</span>
              <span className="text-sm font-mono">{metrics.cls.toFixed(3)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">FID</span>
              <span className="text-sm font-mono">{metrics.fid.toFixed(1)}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">LCP</span>
              <span className="text-sm font-mono">{metrics.lcp.toFixed(0)}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">FCP</span>
              <span className="text-sm font-mono">{metrics.fcp.toFixed(0)}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">TTFB</span>
              <span className="text-sm font-mono">{metrics.ttfb.toFixed(0)}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
              <span className="text-sm font-mono">{(metrics.memory * 100).toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Load Time</span>
              <span className="text-sm font-mono">{metrics.loadTime}ms</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex space-x-2">
            {!isMonitoring ? (
              <button
                onClick={startMonitoring}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm transition-colors"
              >
                Start Monitoring
              </button>
            ) : (
              <button
                onClick={stopMonitoring}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm transition-colors"
              >
                Stop Monitoring
              </button>
            )}
            <button
              onClick={resetMetrics}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvancedPerformanceMonitor;
=======
<<<<<<< HEAD
import React from 'react';;'
import SEOHead from './components/SEOHead'
interface PerformanceMetrics {}
  fcp: number | null
  lcp: number | null
  fid= number | null
  cls: number | null
  ttfb: number | null
  fmp: number | null
  memory: {}
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  } | null
  navigation: {}
    loadEventEnd= number
    domContentLoadedEventEnd= number
    domContentLoadedEventStart: number
    loadEventStart: number
  } | null
}

interface PerformanceMonitorProps {}
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
  logToConsole?: boolean
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({)}
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";
interface PerformanceMetrics {};
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

interface PerformanceMetrics {}
>>>>>>> main
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {};
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {};
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
};
interface PerformanceMonitorProps {};
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
};
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps>  =  ({)};
>>>>>>> main
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {};
  const [metrics, setMetrics] = useState<PerformanceMetrics>({)};
    fcp: null,
    lcp: null,
    fid= null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,
<<<<<<< HEAD
    navigation: null;";
  });";";
  const measurePerformance  =  useCallback(() => {}";";";
    if (typeof window === 'undefined' || !('performance" in window)) {};
=======
    navigation: null
<<<<<<< HEAD
  })
  const  measurePerformance = useCallback(() => {}
    if (typeof: window === 'undefined' || !('performance' in window)) {}"
      return
    }

    const newMetrics: PerformanceMetrics = {}
=======
  });

  const: measurePerformance = useCallback(() => {};
    if (typeof: window === 'undefined' || !('performance' in window)) {}";
>>>>>>> main
      return;
    };
    const newMetrics: PerformanceMetrics  =  {};
>>>>>>> main
      fcp: null,
      lcp: null,
      fid= null,
      cls: null,
      ttfb: null,
      fmp: null,
      memory: null,
<<<<<<< HEAD
      navigation: null;";
    };";";
    // First Contentful Paint (FCP)";";";
    const fcpEntry = performance.getEntriesByName('first-contentful-paint")[0];
    if (fcpEntry) {};
      newMetrics.fcp = fcpEntry.startTime;";
    };";";
    // Largest Contentful Paint (LCP)";";";
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint");
    if (lcpEntries.length > 0) {};
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;";
    };";";
    // First Input Delay (FID)";";";
    const fidEntries = performance.getEntriesByType('first-input");
    if (fidEntries.length > 0) {};
      const fidEntry = fidEntries[0] as any;
      newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
    };";
    // Cumulative Layout Shift (CLS)";";
    let clsValue = 0;";";";
    const clsEntries = performance.getEntriesByType('layout-shift");
    clsEntries.forEach((entry: any) => {};
      if (!entry.hadRecentInput) {};
        clsValue += entry.value;
      };
    });";
    newMetrics.cls = clsValue;";";
    // Time to First Byte (TTFB)";";";
    const navigationEntry = performance.getEntriesByType('navigation")[0] as PerformanceNavigationTiming;
    if (navigationEntry) {};
=======
      navigation: null
    }
    // First Contentful Paint (FCP)
    const  fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];"
    if (fcpEntry) {}
      newMetrics.fcp = fcpEntry.startTime
    }

    // Largest Contentful Paint (LCP)
    const  lcpEntries = performance.getEntriesByType('largest-contentful-paint');"
    if (lcpEntries.length > 0) {}
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime
    }

    // First Input Delay (FID)
    const  fidEntries = performance.getEntriesByType('first-input');"
    if (fidEntries.length > 0) {}
      const  fidEntry = fidEntries[0] as any
      newMetrics.fid = fidEntry.processingStart - fidEntry.startTime
    }

    // Cumulative Layout Shift (CLS)
    let  clsValue = 0
    const  clsEntries = performance.getEntriesByType('layout-shift');"
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
        clsValue += entry.value
      }
    })
    newMetrics.cls = clsValue
    // Time to First Byte (TTFB)
    const  navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;"
    if (navigationEntry) {}
<<<<<<< HEAD
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      newMetrics.navigation = {}
        loadEventEnd= navigationEntry.loadEventEnd,
        domContentLoadedEventEnd= navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart
      }
=======
>>>>>>> main
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      newMetrics.navigation = {};
        loadEventEnd: navigationEntry.loadEventEnd,
        domContentLoadedEventEnd: navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart
<<<<<<< HEAD
      };";
    };";";
    // First Meaningful Paint (FMP) - approximated";";";
    const paintEntries = performance.getEntriesByType('paint");";";";
    const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint");
    if (fmpEntry) {};
      newMetrics.fmp = fmpEntry.startTime;";
    };";";
    // Memory usage";";";
    if ('memory" in performance) {};
      const memoryInfo = (performance as any).memory;
      newMetrics.memory = {};
=======
      };
>>>>>>> main
    }

    // First Meaningful Paint (FMP) - approximated
    const  paintEntries = performance.getEntriesByType('paint');"
    const  fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');"
    if (fmpEntry) {}
      newMetrics.fmp = fmpEntry.startTime
    }

    // Memory usage
    if ('memory' in performance) {}"
      const  memoryInfo = (performance as any).memory
      newMetrics.memory = {}
>>>>>>> main
        usedJSHeapSize: memoryInfo.usedJSHeapSize,
        totalJSHeapSize: memoryInfo.totalJSHeapSize,
        jsHeapSizeLimit: memoryInfo.jsHeapSizeLimit
<<<<<<< HEAD
      }
    }

    setMetrics(newMetrics)
=======
      };
    };
    setMetrics(newMetrics);
<<<<<<< HEAD
    if (onMetricsUpdate) {};
      onMetricsUpdate(newMetrics);";
    };";";
    if (logToConsole) {}";";";
      console.log('Performance Metrics:", newMetrics);
    };
  }, [
    onMetricsUpdate, logToConsole
  
  ]);
  useEffect(() => {};
    // Initial measurement
    measurePerformance();
    if (enableRealTimeMonitoring) {};
      // Set up real-time monitoring";
      const observer  =  new PerformanceObserver((list) => {};";";
        list.getEntries().forEach((entry) => {}";";";
          if (entry.entryType === 'largest-contentful-paint" ||)";";";
              entry.entryType === 'first-input" || ";";";
              entry.entryType === 'layout-shift") {};
            measurePerformance();
          };
        });";
      });";";
      observer.observe({";";";
    entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift"];
  });
      // Periodic monitoring
      const interval = setInterval(measurePerformance, 5000);
      return () => {};
        observer.disconnect();
        clearInterval(interval);
      };
    };
  }, [
    measurePerformance, enableRealTimeMonitoring";
  ";";
  ]);";";";
  // This component doesn"t render anything visible
  return null;

const ComponentsPage: React.FC  =  () => {
  return (;";
    <>;";";
      <SEOHead;";";";
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
=======

>>>>>>> main
    if (onMetricsUpdate) {}
      onMetricsUpdate(newMetrics)
    }

    if (logToConsole) {}
      console.log('Performance Metrics:', newMetrics);"
    }
  }, [onMetricsUpdate, logToConsole])
  useEffect(() => {}
    // Initial measurement
    measurePerformance()
    if (enableRealTimeMonitoring) {}
      // Set up real-time monitoring
      const  observer = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {}
          if (entry.entryType === 'largest-contentful-paint' ||)"
              entry.entryType === 'first-input' || "
              entry.entryType === 'layout-shift') {}"
            measurePerformance()
          }
        })
      })
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });"
      // Periodic monitoring
      const  interval = setInterval(measurePerformance, 5000)
      return () => {}
        observer.disconnect()
        clearInterval(interval)
      }
    }
  }, [measurePerformance, enableRealTimeMonitoring])
  // This component doesn't render anything visible"
  return null
}

<<<<<<< HEAD
=======
  // This component doesn't render anything visible";
  return null;

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
>>>>>>> main
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
>>>>>>> main
export default ComponentsPage;'";'";"
>>>>>>> main
