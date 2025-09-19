import React, { useState, useEffect } from 'react';

interface PerformanceMetricsProps {
  show?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ 
  show = false, 
  position = 'bottom-right' 
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    connectionType: 'unknown'
  });

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  useEffect(() => {
    // Show performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Collect performance metrics
    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Memory usage (if available)
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
      
      // Connection type (if available)
      const connection = (window.navigator as { connection?: { effectiveType?: string } }).connection;
      const connectionType = connection ? connection.effectiveType || 'unknown' : 'unknown';
      
      setMetrics({
        loadTime,
        renderTime: performance.now(),
        memoryUsage,
        connectionType
      });
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    // Update metrics periodically
    const interval = setInterval(collectMetrics, 5000);

    return () => {
      window.removeEventListener('load', collectMetrics);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono max-w-xs shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-green-400">Performance</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close performance metrics"
          >
            ×</button>
          </button>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className="text-blue-400">{metrics.loadTime.toFixed(2)}ms</span>
          <div className="flex justify-between">
            <span>Render Time:</span>
            <span className="text-yellow-400">{metrics.renderTime.toFixed(2)}ms</span>
          {metrics.memoryUsage > 0 && (
            <div className="flex justify-between">
              <span>Memory:</span>
              <span className="text-red-400">{metrics.memoryUsage.toFixed(2)}MB</span>
          )}
          <div className="flex justify-between">
            <span>Connection:</span>
            <span className="text-green-400">{metrics.connectionType}</span>
  );
};

export default PerformanceMetrics;