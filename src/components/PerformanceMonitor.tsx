import React, { useEffect, useState } from 'react';
// import { useWebVitals } from "../hooks/usePerformance";

interface PerformanceMetrics {
lcp?: number;
fid?: number;
cls?: number;
fcp?: number;
ttfb?: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  // useWebVitals();

  useEffect(() => {
    // Only show in development or when performance issues are detected
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Listen for performance metrics
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev
        [metric.name.toLowerCase()]: metric.value
      }));

      // Show monitor if poor performance is detected
      if (metric.name === 'LCP' && metric.value > 4000) {
        setIsVisible(true);
      }
      if (metric.name === 'CLS' && metric.value > 0.25) {
        setIsVisible(true);
      }
    };

    // Import and set up web vitals
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(handleMetric);
      onFID(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
    });

    return () => {
      setIsVisible(false);
    };
  }, []);

  if (!isVisible) return null;

  const getMetricColor = (name: string, value: number) => {
switch (name) {
case 'lcp':
return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400';
case 'fid':
return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400';
case 'cls':
return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400';
case 'fcp':
return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400';
case 'ttfb':
return value <= 800 ? 'text-green-400' : value <= 1800 ? 'text-yellow-400' : 'text-red-400';
default:
return 'text-gray-400';
}
  };

  const getMetricLabel = (name: string) => {
    const labels: Record<string, string> = {
      lcp: 'Largest Contentful Paint',
      fid: 'First Input Delay',
      cls: 'Cumulative Layout Shift',
      fcp: 'First Contentful Paint',
      ttfb: 'Time to First Byte'
    };
    return labels[name] || name.toUpperCase();
  };

  const formatMetricValue = (name: string, value: number) => {
    if (name === 'cls') {
      return value.toFixed(3);
    }
    return Math.round(value).toLocaleString();
  };

  const formatMetricUnit = (name: string) => {
    return name === 'cls' ? '' : 'ms';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-blue-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(metrics).map(([name, value]) => (
          <div key={name} className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">
              {getMetricLabel(name)}:
            </span>
            <span className={`font-mono text-xs ${getMetricColor(name, value)}`}>
              {formatMetricValue(name, value)}{formatMetricUnit(name)}
            </span>
          </div>
        ))}
      </div>
      
      {Object.keys(metrics).length === 0 && (
        <div className="text-gray-400 text-xs">
          Loading metrics...
        </div>
      )}
      
      <div className="mt-2 pt-2 border-t border-slate-700">
        <div className="text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Poor</span>
          </div>
        </div>
      </div>
    </div>
  );
};export default PerformanceMonitor;
