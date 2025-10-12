<<<<<<< HEAD
import { useState, useEffect} from 'react';
import { HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    usedJSHeapSize: number;,
  totalJSHeapSize: number;,
  jsHeapSizeLimit: number;
  };
  connection?: {
    effectiveType: string;,
  downlink: number;,
  rtt: number;
  };

  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
    // Only show in development or if user has enabled debug mode
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in, window) {
      // LCP
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
 ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
        const entries = list.getEntries();
 ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let const clsValue = 0;
        const entries = list.getEntries();
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
 ({ ...prev, cls: clsValue }));
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP
        const entries = list.getEntries();
 ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB
        const entries = list.getEntries();
 ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Memory usage
        if ('memory' in, performance) {
 ({ 
            ...prev, 
            memory: (performance as, any).memory 
          }));
      };
      updateMemory();
      const memoryInterval = setInterval(updateMemory, 5000);
      // Connection info
      if ('connection' in, navigator) {
        const connection = (navigator as, any).connection;
 ({ 
          ...prev, 
          connection: {,
  effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
        }));

        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);
      };
  }, []);

  if (!isVisible) return null;

    if (value 
    if (value 
    return 'text-red-400';
  };

    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function PerformanceDashboard() {
  return (
<<<<<<< HEAD

          Performance
        
setIsVisible(false)}
          className="text-gray-400hover:text-white"
          ×

          <span>LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}>{metrics.lcp.toFixed(0)}ms

          <span>FID:</span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300 })}>{metrics.fid.toFixed(0)}ms

          <span>CLS:</span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}>{metrics.cls.toFixed(3)}

          <span>FCP:</span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}>{metrics.fcp.toFixed(0)}ms

          <span>TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}>{metrics.ttfb.toFixed(0)}ms

        {metrics.memory && (

              <span className="text-gray-300">Memory</span>
              <div>Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div>Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>

        )}

        {metrics.connection && (

              <span className="text-gray-300">Connection</span>
              <div>Type: {metrics.connection.effectiveType}</div>
              <div>Speed: {metrics.connection.downlink}Mbps</div>
              <div>RTT: {metrics.connection.rtt}ms</div>

        )}
    
  );
};

export default PerformanceDashboard;

=======
    <>
      <Helmet>
        <title>Performance Dashboard - Zion Tech Group</title>
        <meta name="description" content="Professional performance dashboard by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Performance Dashboard</h1>
          <p className="text-lg text-gray-300 mb-8">Professional performance dashboard coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
