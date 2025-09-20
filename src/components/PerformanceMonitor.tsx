import React, { useState, useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';

interface PerformanceMonitorProps {
  show?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  show = false, 
  position = 'bottom-right' 
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const metrics = usePerformance();

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  useEffect(() => {
    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const getPerformanceStatus = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono max-w-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-sm">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>FPS:</span>
            <span className={metrics.fps >= 50 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fps}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage < 50 ? 'text-green-400' : metrics.memoryUsage < 100 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.memoryUsage}MB
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Connection:</span>
            <span className="text-blue-400">{metrics.connectionSpeed}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={metrics.loadTime < 2000 ? 'text-green-400' : metrics.loadTime < 4000 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>

          {metrics.coreWebVitals.lcp && (
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getStatusColor(getPerformanceStatus(metrics.coreWebVitals.lcp, { good: 2500, needsImprovement: 4000 }))}>
                {metrics.coreWebVitals.lcp.toFixed(0)}ms
              </span>
            </div>
          )}

          {metrics.coreWebVitals.fid && (
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={getStatusColor(getPerformanceStatus(metrics.coreWebVitals.fid, { good: 100, needsImprovement: 300 }))}>
                {metrics.coreWebVitals.fid.toFixed(1)}ms
              </span>
            </div>
          )}

          {metrics.coreWebVitals.cls && (
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getStatusColor(getPerformanceStatus(metrics.coreWebVitals.cls, { good: 0.1, needsImprovement: 0.25 }))}>
                {metrics.coreWebVitals.cls.toFixed(3)}
              </span>
            </div>
          )}

          <div className="flex justify-between">
            <span>Visible:</span>
            <span className={metrics.isVisible ? 'text-green-400' : 'text-red-400'}>
              {metrics.isVisible ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;