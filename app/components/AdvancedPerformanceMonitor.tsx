<<<<<<< HEAD
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
=======
import React from 'react'";
import SEOHead from './components/SEOHead';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

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

  const measurePerformance  = useCallback(() => {};
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
<<<<<<< HEAD
    const  fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];"
=======
    const fcpEntry  = performance.getEntriesByName('first-contentful-paint')[0]";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (fcpEntry) {}
      newMetrics.fcp = fcpEntry.startTime
    }

    // Largest Contentful Paint (LCP)
<<<<<<< HEAD
    const  lcpEntries = performance.getEntriesByType('largest-contentful-paint');"
=======
    const lcpEntries  = performance.getEntriesByType('largest-contentful-paint')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (lcpEntries.length > 0) {}
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime
    }

    // First Input Delay (FID)
<<<<<<< HEAD
    const  fidEntries = performance.getEntriesByType('first-input');"
    if (fidEntries.length > 0) {}
      const  fidEntry = fidEntries[0] as any
      newMetrics.fid = fidEntry.processingStart - fidEntry.startTime
    }

    // Cumulative Layout Shift (CLS)
    let  clsValue = 0
    const  clsEntries = performance.getEntriesByType('layout-shift');"
=======
    const fidEntries  = performance.getEntriesByType('first-input')";
    if (fidEntries.length > 0) {}
      const fidEntry  = fidEntries[0] as any;
      newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
    }

    // Cumulative Layout Shift (CLS)
    let: clsValue = 0;
    const clsEntries  = performance.getEntriesByType('layout-shift')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
        clsValue += entry.value
      }
    })
    newMetrics.cls = clsValue
    // Time to First Byte (TTFB)
<<<<<<< HEAD
    const  navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;"
=======
    const navigationEntry  = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
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
<<<<<<< HEAD
    const  paintEntries = performance.getEntriesByType('paint');"
    const  fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');"
=======
    const paintEntries  = performance.getEntriesByType('paint')";
    const fmpEntry  = paintEntries.find(entry => entry.name === 'first-meaningful-paint')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (fmpEntry) {}
      newMetrics.fmp = fmpEntry.startTime
    }

    // Memory usage
<<<<<<< HEAD
    if ('memory' in performance) {}"
      const  memoryInfo = (performance as any).memory
=======
    if ('memory' in performance) {}";
      const memoryInfo  = (performance as any).memory;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
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
=======

    if (onMetricsUpdate) {}
      onMetricsUpdate(newMetrics);
    }

    if (logToConsole) {}
      console.log('Performance Metrics:', newMetrics)";
    }
  }, [onMetricsUpdate, logToConsole]);

  useEffect(() => {}
    // Initial measurement
    measurePerformance();

    if (enableRealTimeMonitoring) {}
      // Set up real-time monitoring
      const observer  = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {};
          if (entry.entryType === 'largest-contentful-paint' ||)";
              entry.entryType === 'first-input' || ";
              entry.entryType === 'layout-shift') {}";
            measurePerformance();
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })";

      // Periodic monitoring
      const interval  = setInterval(measurePerformance, 5000);

      return () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
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

<<<<<<< HEAD
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
=======
  // This component doesn't render anything visible"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  return null;

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
<<<<<<< HEAD
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
=======
        title="Components - Zion Tech Group";
        description="Professional components solutions for modern businesses";
      />";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
