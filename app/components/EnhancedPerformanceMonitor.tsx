'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when performance is poor
    if (process.env.NODE_ENV === 'development' || 
        (typeof window !== 'undefined' && window.location.search.includes('debug=true'))) {
      setIsVisible(true);
    }

    if (typeof window === 'undefined') return;

    // Web Vitals measurement
    const measureWebVitals = () => {
      // LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      }).observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    };

    // Memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    // Connection speed
    const measureConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          connectionSpeed: connection.effectiveType || 'unknown' 
        }));
      }
    };

    // Measure after page load
    const timeoutId = setTimeout(() => {
      measureWebVitals();
      measureMemory();
      measureConnection();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance Monitor</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            LCP
          </span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {formatValue(metrics.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            FID
          </span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {formatValue(metrics.fid)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Database className="w-3 h-3" />
            CLS
          </span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {formatValue(metrics.cls, '')}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>FCP</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {formatValue(metrics.fcp)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>TTFB</span>
          <span className={getScoreColor(metrics.ttfb, { good: 600, needsImprovement: 1500 })}>
            {formatValue(metrics.ttfb)}
          </span>
        </div>
        
        {metrics.memoryUsage && (
          <div className="flex justify-between items-center">
            <span>Memory</span>
            <span className="text-blue-400">
              {metrics.memoryUsage}MB
            </span>
          </div>
        )}
        
        {metrics.connectionSpeed && (
          <div className="flex justify-between items-center">
            <span>Connection</span>
            <span className="text-purple-400">
              {metrics.connectionSpeed}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;