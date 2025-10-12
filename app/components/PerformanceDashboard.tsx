'use client';

import { useState, useEffect } from 'react';
import { HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });

  useEffect(() => {
    // Only show in development or if user has enabled debug mode
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Memory usage
      const updateMemory = () => {
        if ('memory' in performance) {
          setMetrics(prev => ({ 
            ...prev, 
            memory: (performance as any).memory 
          }));
        }
      };
      updateMemory();
      const memoryInterval = setInterval(updateMemory, 5000);

      // Connection info
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          connection: {
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

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400 flex items-center">
          <Activity className="w-4 h-4 mr-1" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
=======
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-4 text-white text-xsmax-w-xsz-50">
      <div className="flex items-centerjustify-betweenmb-3">
        <h3 className="font-semibold text-cyan-400-flex items-center" />
          <Activity className="w-4-h-4mr-1" / />
          Performance
        </h3>
        <button
          onClick="{()" =  />setIsVisible(false)}
          className="text-gray-400-hover:text-white"
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
<<<<<<< HEAD
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
=======
        <div className="flexjustify-between">
          <span   />LCP:</span>
          <span className="{get-ScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustify-between">
          <span   />FID:</span>
          <span className="{get-ScoreColor(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustify-between">
          <span   />CLS:</span>
          <span className="{get-ScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flexjustify-between">
          <span   />FCP:</span>
          <span className="{get-ScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flexjustify-between">
          <span   />TTFB:</span>
          <span className="{get-ScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </span>
        </div>

        {metrics.memory && (
<<<<<<< HEAD
          <div className="pt-2 border-t border-gray-600">
            <div className="flex items-center mb-1">
              <HardDrive className="w-3 h-3 mr-1" />
              <span className="text-gray-300">Memory</span>
            </div>
            <div className="text-gray-400 pl-4">
              <div>Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div>Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
=======
          <div className="pt-2-border-tborder-gray-600">
            <div className="flexitems-centermb-1">
              <HardDrive className="w-3-h-3mr-1" / />
              <span className="text-gray-300"   />Memory</span>
            </div>
            <div className="text-gray-400-pl-4">
              <div   />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div   />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </div>
          </div>
        )}

        {metrics.connection && (
<<<<<<< HEAD
          <div className="pt-2 border-t border-gray-600">
            <div className="flex items-center mb-1">
              <Wifi className="w-3 h-3 mr-1" />
              <span className="text-gray-300">Connection</span>
            </div>
            <div className="text-gray-400 pl-4">
              <div>Type: {metrics.connection.effectiveType}</div>
              <div>Speed: {metrics.connection.downlink}Mbps</div>
              <div>RTT: {metrics.connection.rtt}ms</div>
=======
          <div className="pt-2-border-tborder-gray-600">
            <div className="flexitems-centermb-1">
              <Wifi className="w-3-h-3mr-1" / />
              <span className="text-gray-300"   />Connection</span>
            </div>
            <div className="text-gray-400-pl-4">
              <div   />Type: {metrics.connection.effectiveType}</div>
              <div   />Speed: {metrics.connection.downlink}Mbps</div>
              <div   />RTT: {metrics.connection.rtt}ms</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDashboard;