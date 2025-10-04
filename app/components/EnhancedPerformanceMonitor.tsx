import React, { useEffect, useState, useCallback, useRef } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface EnhancedMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
  memory?: number;
  connection?: string;
  devicePixelRatio?: number;
  batteryLevel?: number;
  networkType?: string;
  connectionSpeed?: number;
  timestamp?: number;
}

interface PerformanceThresholds {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

interface PerformanceHistory {
  timestamp: number;
  metrics: EnhancedMetrics;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<EnhancedMetrics | null>(null);
  const [history, setHistory] = useState<PerformanceHistory[]>([]);
  const [thresholds] = useState<PerformanceThresholds>({
    cls: 0.1,
    inp: 200,
    fcp: 1800,
    lcp: 2500,
    ttfb: 800
  });
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getEnhancedPerformanceInfo = useCallback(() => {
    const memory = (performance as any).memory;
    const connection = (navigator as any).connection;
    const battery = (navigator as any).getBattery;
    
    return {
      memory: memory ? Math.round(memory.usedJSHeapSize / 1048576) : undefined,
      connection: connection ? connection.effectiveType : undefined,
      devicePixelRatio: window.devicePixelRatio,
      batteryLevel: battery ? undefined : undefined, // Will be async
      networkType: connection ? connection.type : undefined,
      connectionSpeed: connection ? connection.downlink : undefined,
      timestamp: Date.now()
    };
  }, []);

  const handleMetric = useCallback((metric: any) => {
    const enhancedMetrics: EnhancedMetrics = {
      cls: 0,
      inp: 0,
      fcp: 0,
      lcp: 0,
      ttfb: 0,
      ...getEnhancedPerformanceInfo()
    };
    
    // Map metric name to our interface
    switch (metric.name) {
      case 'CLS':
        enhancedMetrics.cls = metric.value;
        break;
      case 'INP':
        enhancedMetrics.inp = metric.value;
        break;
      case 'FCP':
        enhancedMetrics.fcp = metric.value;
        break;
      case 'LCP':
        enhancedMetrics.lcp = metric.value;
        break;
      case 'TTFB':
        enhancedMetrics.ttfb = metric.value;
        break;
    }
    
    setMetrics(prev => ({
      ...prev,
      ...enhancedMetrics
    }));
    
    // Add to history
    setHistory(prev => [
      ...prev.slice(-9), // Keep last 10 entries
      {
        timestamp: Date.now(),
        metrics: enhancedMetrics
      }
    ]);
  }, [getEnhancedPerformanceInfo, metrics]);

  const getStatusColor = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return 'text-green-600';
    if (value <= threshold) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return '✅';
    if (value <= threshold) return '⚠️';
    return '❌';
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Enhanced performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
        if (entry.entryType === 'resource') {
          console.log('Resource timing:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Periodic monitoring
    intervalRef.current = setInterval(() => {
      const currentMetrics = getEnhancedPerformanceInfo();
      setMetrics(prev => ({
        ...prev,
        ...currentMetrics
      }));
    }, 5000);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleMetric, getEnhancedPerformanceInfo]);

  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">Performance Monitor</div>
          <button
            onClick={toggleVisibility}
            className="text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            {isVisible ? '▼' : '▶'}
          </button>
        </div>
        
        {isVisible && (
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getStatusColor(metrics.cls, thresholds.cls)}>
                {getStatusIcon(metrics.cls, thresholds.cls)} {metrics.cls?.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>INP:</span>
              <span className={getStatusColor(metrics.inp, thresholds.inp)}>
                {getStatusIcon(metrics.inp, thresholds.inp)} {metrics.inp?.toFixed(1)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getStatusColor(metrics.fcp, thresholds.fcp)}>
                {getStatusIcon(metrics.fcp, thresholds.fcp)} {metrics.fcp?.toFixed(1)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getStatusColor(metrics.lcp, thresholds.lcp)}>
                {getStatusIcon(metrics.lcp, thresholds.lcp)} {metrics.lcp?.toFixed(1)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getStatusColor(metrics.ttfb, thresholds.ttfb)}>
                {getStatusIcon(metrics.ttfb, thresholds.ttfb)} {metrics.ttfb?.toFixed(1)}ms
              </span>
            </div>
            {metrics.memory && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span>{metrics.memory}MB</span>
              </div>
            )}
            {metrics.connection && (
              <div className="flex justify-between">
                <span>Connection:</span>
                <span>{metrics.connection}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>DPR:</span>
              <span>{metrics.devicePixelRatio}</span>
            </div>
            {metrics.networkType && (
              <div className="flex justify-between">
                <span>Network:</span>
                <span>{metrics.networkType}</span>
              </div>
            )}
            {metrics.connectionSpeed && (
              <div className="flex justify-between">
                <span>Speed:</span>
                <span>{metrics.connectionSpeed}Mbps</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default EnhancedPerformanceMonitor;