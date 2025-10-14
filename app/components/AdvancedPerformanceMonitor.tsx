import React, { useState, useEffect } from 'react';

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
  // const [isRecording, setIsRecording] = useState(false);

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
            if (entry.entryType === 'layout-shift' && !(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,)
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value;
              }))
          }
        }"
        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] })";"'"
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (window as Window & { performance?: { memory?: { usedJSHeapSize: number } } }).performance?.memory?.usedJSHeapSize || 0;
        
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

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  // const startRecording = () => setIsRecording(true);
  // const stopRecording = () => setIsRecording(false);
  
  // const exportMetrics = () => {
    const dataStr = JSON.stringify(metrics, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'performance-metrics.json';
    link.click();
    URL.revokeObjectURL(url);
  // };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Advanced Performance Monitor</h1>
        <p className="text-gray-300 text-lg">
This component is under development.
        </p>291
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;

