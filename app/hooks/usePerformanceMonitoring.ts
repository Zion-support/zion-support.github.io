<<<<<<< HEAD
import { useState, useEffect } from 'react';

export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      setMetrics(prev => [...prev, ...entries]);
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

    return () => observer.disconnect();
  }, []);
=======
import React from 'react';

interface usePerformanceMonitoringProps {
  className?: string;
  children?: React.ReactNode;
}

const usePerformanceMonitoring: React.FC<usePerformanceMonitoringProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`useperformancemonitoring-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">usePerformanceMonitoring</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442

  const measurePerformance = (name: string, fn: () => void) => {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  };

  return { metrics, measurePerformance };
}