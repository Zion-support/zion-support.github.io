import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  ttfb: number;
  memoryUsage: number;
  loadTime: number;
}

interface AdvancedPerformanceMonitorProps {
  showDetails?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    ttfb: 0,
    memoryUsage: 0,
    loadTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const trackMetric = (name: string, value: number) => {
    console.log(`Performance Metric: ${name} = ${value}ms`);
    
    // Send to custom analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Performance Metric', {
        name,
        value: Math.round(value),
        timestamp: Date.now()
      });
    }
  };

  useEffect(() => {
    const measureWebVitals = () => {
      // Web vitals measurement logic
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Simulate metrics for now
        setMetrics(prev => ({ ...prev, fcp: 1000, lcp: 2000, ttfb: 500 }));
      }
    };

    const measureMemory = () => {
      // Memory measurement logic
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    const measureLoadTime = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setMetrics(prev => ({ ...prev, loadTime }));
          trackMetric('Load Time', loadTime);
        }
      }
    };

    // Initialize measurements
    measureWebVitals();
    measureMemory();
    measureLoadTime();

    // Set up performance observer
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: paintEntry.startTime }));
              trackMetric('FCP', paintEntry.startTime);
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            const lcpEntry = entry as PerformanceEntry;
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
            trackMetric('LCP', lcpEntry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

      return () => {
        observer.disconnect();
      };
    }
    
    // Return undefined if PerformanceObserver is not available
    return undefined;
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const getPerformanceGrade = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const fcpGrade = getPerformanceGrade(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpGrade = getPerformanceGrade(metrics.lcp, { good: 2500, poor: 4000 });
  const ttfbGrade = getPerformanceGrade(metrics.ttfb, { good: 800, poor: 1800 });

  if (!showDetails) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        title="Performance Monitor"
      >
        📊
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-slate-800 border border-purple-500/20 rounded-lg p-4 w-80 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <div className="flex space-x-2">
              <button
                onClick={toggleRecording}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                  isRecording
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                }`}
              >
                {isRecording ? 'Recording' : 'Record'}
              </button>
              <button
                onClick={toggleVisibility}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">First Contentful Paint</span>
              <span className={`text-sm font-medium ${
                fcpGrade === 'good' ? 'text-green-400' :
                fcpGrade === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Largest Contentful Paint</span>
              <span className={`text-sm font-medium ${
                lcpGrade === 'good' ? 'text-green-400' :
                lcpGrade === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Time to First Byte</span>
              <span className={`text-sm font-medium ${
                ttfbGrade === 'good' ? 'text-green-400' :
                ttfbGrade === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Memory Usage</span>
              <span className="text-sm font-medium text-blue-400">
                {metrics.memoryUsage.toFixed(1)}MB
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Load Time</span>
              <span className="text-sm font-medium text-purple-400">
                {Math.round(metrics.loadTime)}ms
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              {isRecording ? 'Recording performance data...' : 'Click Record to start monitoring'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;