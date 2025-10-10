'use client';
import React, { useEffect, useState } from 'react';
import { Zap, AlertTriangle, CheckCircle, Clock, Database, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if performance monitoring is enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('performance-monitoring') === 'enabled';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Measure connection speed
    const measureConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          connectionSpeed: connection.effectiveType || 'unknown'
        }));
      }
    };

    // Measure Time to First Byte
    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const ttfbObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ 
                ...prev, 
                ttfb: entry.responseStart - entry.requestStart 
              }));
            }
          }
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
      }
    };

    measureWebVitals();
    measureMemory();
    measureConnection();
    measureTTFB();

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureMemory();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const getPerformanceStatus = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'unknown';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'needs-improvement':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const fcpStatus = getPerformanceStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 });
  const lcpStatus = getPerformanceStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 });
  const clsStatus = getPerformanceStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 });

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <div className="flex items-center space-x-2 mb-3">
        <Zap className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance Monitor</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>FCP</span>
          <div className="flex items-center space-x-1">
            {getStatusIcon(fcpStatus)}
            <span>{metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '-'}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>LCP</span>
          <div className="flex items-center space-x-1">
            {getStatusIcon(lcpStatus)}
            <span>{metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '-'}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>CLS</span>
          <div className="flex items-center space-x-1">
            {getStatusIcon(clsStatus)}
            <span>{metrics.cls ? metrics.cls.toFixed(3) : '-'}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Memory</span>
          <div className="flex items-center space-x-1">
            <Database className="w-4 h-4 text-blue-400" />
            <span>{metrics.memoryUsage ? `${Math.round(metrics.memoryUsage)}MB` : '-'}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Connection</span>
          <div className="flex items-center space-x-1">
            <Wifi className="w-4 h-4 text-green-400" />
            <span>{metrics.connectionSpeed || '-'}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20">
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;