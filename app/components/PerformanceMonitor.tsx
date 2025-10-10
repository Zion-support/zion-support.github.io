'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Cpu, HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  memoryUsage?: number;
  connectionSpeed?: string;
  timestamp: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  showDebugInfo?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  enableMemoryMonitoring = false,
  enableNetworkMonitoring = false,
  showDebugInfo = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    memoryUsage: 0,
    connectionSpeed: 'unknown',
    timestamp: Date.now()
  });

  const [isVisible, setIsVisible] = useState(false);
  const [performanceHistory, setPerformanceHistory] = useState<PerformanceMetrics[]>([]);

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure LCP (Largest Contentful Paint)
    const measureLCP = (): Promise<number> => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    };

    // Measure FID (First Input Delay)
    const measureFID = (): Promise<number> => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          resolve(firstEntry.processingStart - firstEntry.startTime);
        });
        
        observer.observe({ entryTypes: ['first-input'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    };

    // Measure CLS (Cumulative Layout Shift)
    const measureCLS = (): Promise<number> => {
      return new Promise((resolve) => {
        let clsValue = 0;
        let clsEntries: PerformanceEntry[] = [];
        
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsEntries.push(entry);
              clsValue += (entry as any).value;
            }
          }
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Return CLS value after 5 seconds
        setTimeout(() => {
          observer.disconnect();
          resolve(clsValue);
        }, 5000);
      });
    };

    // Measure FCP (First Contentful Paint)
    const measureFCP = (): Promise<number> => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
            observer.disconnect();
          }
        });
        
        observer.observe({ entryTypes: ['paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    };

    // Measure TTFB (Time to First Byte)
    const measureTTFB = (): Promise<number> => {
      return new Promise((resolve) => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          resolve(navigation.responseStart - navigation.requestStart);
        } else {
          resolve(0);
        }
      });
    };

    // Measure all metrics
    Promise.all([
      measureLCP(),
      measureFID(),
      measureCLS(),
      measureFCP(),
      measureTTFB()
    ]).then(([lcp, fid, cls, fcp, ttfb]) => {
      const newMetrics: PerformanceMetrics = {
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        fcp: Math.round(fcp),
        ttfb: Math.round(ttfb),
        memoryUsage: 0,
        connectionSpeed: 'unknown',
        timestamp: Date.now()
      };

      setMetrics(newMetrics);
      setPerformanceHistory(prev => [...prev.slice(-9), newMetrics]);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'core_web_vitals',
          value: lcp,
          custom_map: {
            lcp: lcp,
            fid: fid,
            cls: cls,
            fcp: fcp,
            ttfb: ttfb
          }
        });
      }
    });
  }, [onMetricsUpdate]);

  // Measure memory usage
  const measureMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !enableMemoryMonitoring) return;

    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024); // Convert to MB
      
      setMetrics(prev => ({
        ...prev,
        memoryUsage
      }));
    }
  }, [enableMemoryMonitoring]);

  // Measure network connection
  const measureNetworkConnection = useCallback(() => {
    if (typeof window === 'undefined' || !enableNetworkMonitoring) return;

    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const speed = connection.effectiveType || 'unknown';
      
      setMetrics(prev => ({
        ...prev,
        connectionSpeed: speed
      }));
    }
  }, [enableNetworkMonitoring]);

  // Real-time monitoring
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const interval = setInterval(() => {
      measureMemoryUsage();
      measureNetworkConnection();
    }, 5000);

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, measureMemoryUsage, measureNetworkConnection]);

  // Initial measurement
  useEffect(() => {
    const timer = setTimeout(() => {
      measureCoreWebVitals();
      measureMemoryUsage();
      measureNetworkConnection();
    }, 1000);

    return () => clearTimeout(timer);
  }, [measureCoreWebVitals, measureMemoryUsage, measureNetworkConnection]);

  // Keyboard shortcut to toggle debug info
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 10;
    
    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (metrics.fcp > 3000) score -= 20;
    else if (metrics.fcp > 1800) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                    performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  if (!showDebugInfo && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="cyber-card-enhanced p-4 max-w-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white flex items-center">
            <Activity className="w-4 h-4 mr-2" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {/* Performance Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Performance Score</span>
            <span className={`text-lg font-bold ${scoreColor}`}>{performanceScore}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                performanceScore >= 90 ? 'bg-green-400' : 
                performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
              }`}
              style={{ width: `${performanceScore}%` }}
            />
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              LCP
            </span>
            <span className={metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.lcp}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              FID
            </span>
            <span className={metrics.fid > 100 ? 'text-red-400' : metrics.fid > 50 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.fid}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center">
              <Database className="w-3 h-3 mr-1" />
              CLS
            </span>
            <span className={metrics.cls > 0.1 ? 'text-red-400' : metrics.cls > 0.05 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.cls}
            </span>
          </div>
        </div>

        {/* Additional Metrics */}
        {enableMemoryMonitoring && metrics.memoryUsage && (
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-400 flex items-center">
              <HardDrive className="w-3 h-3 mr-1" />
              Memory
            </span>
            <span className="text-cyan-400">{metrics.memoryUsage}MB</span>
          </div>
        )}

        {enableNetworkMonitoring && metrics.connectionSpeed && (
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-400 flex items-center">
              <Wifi className="w-3 h-3 mr-1" />
              Connection
            </span>
            <span className="text-cyan-400">{metrics.connectionSpeed}</span>
          </div>
        )}

        {/* Performance History Chart */}
        {performanceHistory.length > 1 && (
          <div className="mt-4">
            <div className="text-xs text-gray-400 mb-2">Performance Trend</div>
            <div className="flex items-end space-x-1 h-8">
              {performanceHistory.map((metric, index) => (
                <div
                  key={index}
                  className="flex-1 bg-cyan-400/20 rounded-t"
                  style={{ height: `${(metric.lcp / 4000) * 100}%` }}
                  title={`LCP: ${metric.lcp}ms`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <button
          onClick={() => {
            measureCoreWebVitals();
            measureMemoryUsage();
            measureNetworkConnection();
          }}
          className="w-full mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;