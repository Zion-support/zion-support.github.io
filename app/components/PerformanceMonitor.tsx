import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database, Clock } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
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
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // Time to First Byte
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          }
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    // Memory usage (if available)
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    measureWebVitals();
    measureMemory();

    // Update memory usage periodically
    const memoryInterval = setInterval(measureMemory, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <Zap className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <Clock className="w-4 h-4" />;
    return <Database className="w-4 h-4" />;
  };

const PerformanceMonitor = () => {
  return (
    <div>
      <h1>PerformanceMonitor</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceMonitor;