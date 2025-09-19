import React, { useState, useEffect } from 'react';

interface PerformanceMonitorProps {
  show?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  show = false, 
  position = 'bottom-right' 
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  useEffect(() => {
    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Simple performance metrics
    const startTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime: startTime }));

    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: endTime - startTime }));
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <div className="bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs font-mono max-w-xs">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Performance</span>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-1">
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
          {metrics.memoryUsage && (
            <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;