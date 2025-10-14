import React, { useState, useEffect } from "react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');

        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: Math.round(entry.startTime)
              }));
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
              }));
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });

        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

        // Memory usage (if available)
        const memoryUsage = (window as any).performance?.memory?.usedJSHeapSize || 0;

        // Network latency
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

        // Calculate Total Blocking Time
        const longTasks = window.performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50); // 50ms is the threshold
        }, 0);

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(firstContentfulPaint),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
          firstContentfulPaint: Math.round(firstContentfulPaint),
          largestContentfulPaint: 0, // Will be updated by observer
          cumulativeLayoutShift: 0, // Will be updated by observer
          firstInputDelay: 0, // Would need specific measurement
          totalBlockingTime: Math.round(totalBlockingTime),
        });

        return () => observer.disconnect();
      }
    };

    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    // Add recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
  };

  const exportMetrics = () => {
    const dataStr = JSON.stringify(metrics, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'performance-metrics.json';
    link.click();
  };

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Load Time:</span>
          <span className={`font-mono ${getScoreColor(metrics.loadTime, { good: 1000, needsImprovement: 3000 })}`}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">FCP:</span>
          <span className={`font-mono ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">LCP:</span>
          <span className={`font-mono ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">TBT:</span>
          <span className={`font-mono ${getScoreColor(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}`}>
            {metrics.totalBlockingTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className={`font-mono ${getScoreColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Network:</span>
          <span className={`font-mono ${getScoreColor(metrics.networkLatency, { good: 500, needsImprovement: 1000 })}`}>
            {metrics.networkLatency}ms
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-700 text-xs text-gray-500">
        <div>Ctrl+Shift+P: Toggle</div>
        <div>Ctrl+Shift+R: Record</div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;