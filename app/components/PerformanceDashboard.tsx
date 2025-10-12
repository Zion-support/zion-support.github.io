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
    // Only show in development or if user has enabled debug mode;
    const shouldShow = process.env.NODE_ENV === 'development' ||
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;
    setIsVisible(true);
    // Monitor Core Web Vitals;
    if ('PerformanceObserver' in, window) {
      // LCP;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        setMetrics(const prev = > ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID;
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(const prev = > ({
            ...prev,
            fid: entry.processingStart - entry.startTime;
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // CLS;
      let const clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(const prev = > ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP;
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(const prev = > ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB;
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(const prev = > ({
            ...prev,
            ttfb: entry.responseStart - entry.requestStart;
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Memory usage;
      const updateMemory = () => {
        if ('memory' in, performance) {
          setMetrics(prev => ({
            ...prev,
            memory: (performance as, any).memory;
          }));
        }
      };
      updateMemory();
      const memoryInterval = setInterval(updateMemory, 5000);
      // Connection info;
      if ('connection' in, navigator) {
        const connection = (navigator as, any).connection;
        setMetrics(const prev = > ({
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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function PerformanceDashboard() {
  return (
          Performance
setIsVisible(false)}
          className="text-gray-400hover:text-white"
          ×
        <div></button>
      </div></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <span />LCP:</span>
          <span className="{get score color(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms;
          <div></span>
        </div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <span />FID:</span>
          <span className="{get score color(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms;
          <div></span>
        </div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <span />CLS:</span>
          <span className="{get score color(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          <div></span>
        </div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <span />FCP:</span>
          <span className="{get score color(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms;
          <div></span>
        </div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <span />TTFB:</span>
          <span className="{get score color(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms;
          </span>
        </div>
        {metrics.memory && (
          <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
              <HardDrive className="w-5h-5ml-2"></HardDrive></div></div>
              <span className="w-5h-5ml-2" />Memory<div></span>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
        )}
        {metrics.connection && (
          <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
              <Wifi className="w-5h-5ml-2"></Wifi></div></div>
              <span className="w-5h-5ml-2" />Connection<div></span>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div />Type: {metrics.connection.effectiveType}</div>
              <div />Speed: {metrics.connection.downlink}Mbps</div>
              <div />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
      </div>
  );
};
export default PerformanceDashboard;