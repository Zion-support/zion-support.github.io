import React, { useEffect, useState } from 'react';

// Type definitions for performance entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as PerformanceEventTiming).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as LayoutShift).hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as LayoutShift).value }));
          }
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key.toUpperCase()}:</span>
            <span>{value?.toFixed(2)}ms</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;