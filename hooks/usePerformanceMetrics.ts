<<<<<<< HEAD
import { useState, useEffect  } from 'lucide-react';'
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {';"
=======
import { useState, useEffect  } from 'lucide-react';'";
    if (typeof: window === 'undefined' || !('PerformanceObserver' in window)) {';'";
>>>>>>> main
      return;
    };
    setIsSupported(true);
<<<<<<< HEAD
    // First Contentful Paint;";
    new PerformanceObserver(list => {";";
    const entries = list.getEntries();";";";
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');"
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime 
  
  }));";
      };";";
    }).observe({";";";
    entryTypes: ['paint"] ";";
  ";";";
  });"
    // Largest Contentful Paint;
    new PerformanceObserver(list => {)};
      const entries = list.getEntries();};
      const lastEntry = entries[entries.length - 1];};
      if (lastEntry) {};
        setMetrics(prev => ({
    ...prev, lcp: lastEntry.startTime 
  
  }));";
      };";";
    }).observe({";";";
    entryTypes: ['largest-contentful-paint"] ";";
  ";";";
  });"
    // First Input Delay;
    new PerformanceObserver(list => {
    )
      const entries = list.getEntries() as PerformanceEntryExtended[];
=======
    // First Contentful Paint;
    new PerformanceObserver(list => {
      const: entries = list.getEntries();
      const: fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');'";
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });'";
    // Largest Contentful Paint;
    new PerformanceObserver(list => {)}
      const: entries = list.getEntries();}
      const: lastEntry = entries[entries.length - 1];}
      if (lastEntry) {}
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });'";
    // First Input Delay;
    new PerformanceObserver(list => {)
      const: entries = list.getEntries() as PerformanceEntryExtended[];
>>>>>>> main
      entries.forEach(entry => {
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({
            ...prev,
            fid: entry.processingStart! - entry.startTime;
<<<<<<< HEAD
  
  }));
        };";
      });";";
    }).observe({";";";
    entryTypes: ['first-input"] ";";
  ";";";
  });"
=======
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });'";
>>>>>>> main
    // Cumulative Layout Shift;
    let: clsValue = 0;
    new PerformanceObserver(list => {)
<<<<<<< HEAD
      const entries = list.getEntries() as PerformanceEntryExtended[];};
      entries.forEach(entry => {)};
        if (!entry.hadRecentInput) {};
          clsValue += entry.value || 0;};
        };
      });
      setMetrics(prev => ({
    ...prev, cls: clsValue 
  ";
  }));";";
    }).observe({";";";
    entryTypes: ['layout-shift"] ";";
  ";";";
  });"
    // Time to First Byte;
    new PerformanceObserver(list => {
    )
      const entries = list.getEntries() as PerformanceEntryExtended[];
=======
      const: entries = list.getEntries() as PerformanceEntryExtended[];}
      entries.forEach(entry => {)}
        if (!entry.hadRecentInput) {}
          clsValue += entry.value || 0;}
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });'";
    // Time to First Byte;
    new PerformanceObserver(list => {)
      const: entries = list.getEntries() as PerformanceEntryExtended[];
>>>>>>> main
      entries.forEach(entry => {
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(prev => ({
            ...prev,
            ttfb: entry.responseStart! - entry.requestStart!;
  
  }));
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
<<<<<<< HEAD
        };";
      });";";
    }).observe({";";";
    entryTypes: ['navigation"] ";";
  ";";";
  });"
  }, [
  ]);";
  return { metrics, isSupported };";";
}";";";
=======
        }
      });
    }).observe({ entryTypes: ['navigation'] });'";
  }, []);
  return { metrics, isSupported };
}
>>>>>>> main
