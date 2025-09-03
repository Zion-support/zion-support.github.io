import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMonitorProps {
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  className = ''
}) => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    loadTime: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          setMetrics(prev => ({
            ...prev,
            loadTime: Math.round(perfData.loadEventEnd - perfData.fetchStart)
          }));
        }
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`performance-monitor ${className}`}>
      <div className="metrics">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>Memory: {metrics.memory}MB</div>
        <div>FPS: {metrics.fps}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;