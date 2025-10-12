import { useState, useEffect} from 'react';
import { HardDrive } from 'lucide-react';
<<<<<<< HEAD
'use client';

import { useState, useEffect } from 'react';
import { HardDrive } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

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

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <h3 className="w-5 h-5ml-2" />
          <Activity className="w-5 h-5ml-2" />
          Performance
        </h3>
        <button
          onClick="{()" =  />setIsVisible(false)}
          className="text-gray-400hover: text-white"
        >
          ×
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span />LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span />FID:</span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span />CLS:</span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span />FCP:</span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span />TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms
          </span>
        </div>

        {metrics.memory && (
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <HardDrive className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />Memory</span>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
        )}

        {metrics.connection && (
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Wifi className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />Connection</span>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div />Type: {metrics.connection.effectiveType}</div>
              <div />Speed: {metrics.connection.downlink}Mbps</div>
              <div />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
      </div>
  );
};

export default PerformanceDashboard;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
