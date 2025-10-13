import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  networkSpeed: string | null;
  bundleSize: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  enableAlerts?: boolean;
  alertThresholds?: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  enableAlerts = true,
  alertThresholds = {
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    networkSpeed: null,
    bundleSize: null,
    loadTime: null
  });

  const [alerts, setAlerts] = useState<string[]>([]);

  // Get performance metrics
  const getPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    // Core Web Vitals
    const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
    const fidEntries = performance.getEntriesByType('first-input') as PerformanceEventTiming[];
    const clsEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[];

    // Calculate metrics
    const lcp = lcpEntry ? lcpEntry.startTime : null;
    const fid = fidEntries.length > 0 ? fidEntries[0].processingStart - fidEntries[0].startTime : null;
    const cls = clsEntries.reduce((acc, entry) => acc + (entry as any).value, 0);
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
    const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.navigationStart : null;

    // Memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : null; // MB

    // Network speed estimation
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const networkSpeed = connection ? 
      `${connection.effectiveType || 'unknown'} (${connection.downlink || 'unknown'} Mbps)` : 
      'unknown';

    // Bundle size estimation
    const resources = performance.getEntriesByType('resource');
    const bundleSize = resources
      .filter((resource: any) => resource.name.includes('.js'))
      .reduce((total, resource: any) => total + resource.transferSize, 0) / 1024; // KB

    setMetrics({
      lcp,
      fid,
      cls,
      fcp,
      ttfb,
      memoryUsage,
      networkSpeed,
      bundleSize,
      loadTime
    });

    // Check for performance alerts
    if (enableAlerts) {
      const newAlerts: string[] = [];
      
      if (lcp && lcp > alertThresholds.lcp) {
        newAlerts.push(`LCP is ${lcp.toFixed(0)}ms (threshold: ${alertThresholds.lcp}ms)`);
      }
      
      if (fid && fid > alertThresholds.fid) {
        newAlerts.push(`FID is ${fid.toFixed(0)}ms (threshold: ${alertThresholds.fid}ms)`);
      }
      
      if (cls > alertThresholds.cls) {
        newAlerts.push(`CLS is ${cls.toFixed(3)} (threshold: ${alertThresholds.cls})`);
      }

      if (memoryUsage && memoryUsage > 100) {
        newAlerts.push(`Memory usage is ${memoryUsage.toFixed(1)}MB (high)`);
      }

      setAlerts(newAlerts);
    }
  }, [enableAlerts, alertThresholds]);

  // Monitor performance changes
  useEffect(() => {
    getPerformanceMetrics();

    // Set up observers for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceEventTiming[];
        entries.forEach(entry => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [getPerformanceMetrics]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.memoryUsage && metrics.memoryUsage > 100) score -= 10;
    if (metrics.loadTime && metrics.loadTime > 3000) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const performanceScore = getPerformanceScore();
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className={`text-sm font-medium ${getScoreColor(performanceScore)}`}>
              {performanceScore}/100
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className={`text-sm font-medium ${getScoreColor(performanceScore)}`}>
            {performanceScore}/100
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {metrics.lcp && (
            <div className="flex justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
          )}
          
          {metrics.fid && (
            <div className="flex justify-between">
              <span className="text-gray-400">FID:</span>
              <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
          )}
          
          {metrics.cls !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}
          
          {metrics.fcp && (
            <div className="flex justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className="text-cyan-400">{metrics.fcp.toFixed(0)}ms</span>
            </div>
          )}
          
          {metrics.ttfb && (
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className="text-cyan-400">{metrics.ttfb.toFixed(0)}ms</span>
            </div>
          )}
          
          {metrics.memoryUsage && (
            <div className="flex justify-between">
              <span className="text-gray-400">Memory:</span>
              <span className="text-cyan-400">{metrics.memoryUsage.toFixed(1)}MB</span>
            </div>
          )}
          
          {metrics.bundleSize && (
            <div className="flex justify-between">
              <span className="text-gray-400">Bundle:</span>
              <span className="text-cyan-400">{metrics.bundleSize.toFixed(1)}KB</span>
            </div>
          )}
          
          {metrics.loadTime && (
            <div className="flex justify-between">
              <span className="text-gray-400">Load Time:</span>
              <span className="text-cyan-400">{metrics.loadTime.toFixed(0)}ms</span>
            </div>
          )}
        </div>

        {alerts.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-700">
            <div className="text-xs text-red-400 font-medium mb-1">Alerts:</div>
            {alerts.map((alert, index) => (
              <div key={index} className="text-xs text-red-300">{alert}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(EnhancedPerformanceMonitor);