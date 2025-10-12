'use client';
import { useState, useEffect} from 'react';
import { HardDrive } from 'lucide-react';

import { useState, useEffect } from 'react';
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
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  useEffect(() => {
    // Only show in development or if user has enabled debug mode
    shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in, window) {
      // LCP
      lcpObserver = new PerformanceObserver((list) => {
        entries = list.getEntries();
        lastEntry = entries[entries.length - 1] as PerformanceEntry;
        setMetrics(prev = > ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      fidObserver = new PerformanceObserver((list) => {
        entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev = > ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      clsObserver = new PerformanceObserver((list) => {
        entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev = > ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP
      fcpObserver = new PerformanceObserver((list) => {
        entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev = > ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB
      navigationObserver = new PerformanceObserver((list) => {
        entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev = > ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Memory usage
      updateMemory = () => {
        if ('memory' in, performance) {
          setMetrics(prev => ({ 
            ...prev, 
            memory: (performance as, any).memory 
          }));
        }
      };
      updateMemory();
      memoryInterval = setInterval(updateMemory, 5000);
      // Connection info
      if ('connection' in, navigator) {
        connection = (navigator as, any).connection;
        setMetrics(prev = > ({ 
          ...prev, 
          connection: {,
  effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
          }
        }));
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);
      };
    }
  }, []);

  if (!isVisible) return null;

  getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    k = 1024;
    sizes = ['Bytes', 'KB', 'MB', 'GB'];
    i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixe d bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-4 text-white text-xsmax-w-xsz-50">
      <div className="fle x items-centerjustify-betweenmb-3">
        <h3 className="fon t-semibold text-cyan-400flex items-center" />
          <Activity className="w-4 h-4mr-1" />
          Performance
        </h3>
        <button
          onClick="{()" =  />setIsVisible(false)}
          className="tex t-gray-400hover:text-white"
        >
          ×
    <>
        </button>
      </div>

      <div className="spac e-y-2">
        <div className="flexjustif y-between">
          <span   />LCP:</span>
          <span className="{getScoreColo r(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustif y-between">
          <span   />FID:</span>
          <span className="{getScoreColo r(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustif y-between">
          <span   />CLS:</span>
          <span className="{getScoreColo r(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flexjustif y-between">
          <span   />FCP:</span>
          <span className="{getScoreColo r(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustif y-between">
          <span   />TTFB:</span>
          <span className="{getScoreColo r(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms
          </span>
        </div>

        {metrics.memory && (
          <div className="p t-2border-tborder-gray-600">
            <div className="fle x items-centermb-1">
              <HardDrive className="w-3 h-3mr-1" />
              <span className="tex t-gray-300"   />Memory</span>
            </div>
            <div className="tex t-gray-400pl-4">
              <div   />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div   />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
        )}

        {metrics.connection && (
          <div className="p t-2border-tborder-gray-600">
            <div className="fle x items-centermb-1">
              <Wifi className="w-3 h-3mr-1" />
              <span className="tex t-gray-300"   />Connection</span>
            </div>
            <div className="tex t-gray-400pl-4">
              <div   />Type: {metrics.connection.effectiveType}</div>
              <div   />Speed: {metrics.connection.downlink}Mbps</div>
              <div   />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
    <>
      </div>
  );
};

export default PerformanceDashboard;
    </>