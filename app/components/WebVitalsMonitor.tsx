import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const WebVitalsMonitor: React.FC = () => {
  const [vitals, setVitals] = useState<WebVitalsData[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVital = (metric: any) => {
      setVitals(prev => {
        const existing = prev.find(v => v.name === metric.name);
        if (existing) {
          return prev.map(v => v.name === metric.name ? metric : v);
        }
        return [...prev, metric];
      });
    };

    onCLS(handleVital);
    onINP(handleVital);
    onFCP(handleVital);
    onLCP(handleVital);
    onTTFB(handleVital);

    // Show monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const formatValue = (name: string, value: number) => {
    if (name === 'CLS') return value.toFixed(3);
    if (name === 'INP' || name === 'FCP' || name === 'LCP' || name === 'TTFB') {
      return `${Math.round(value)}ms`;
    }
    return value.toString();
  };

  if (!isVisible || vitals.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-800">Core Web Vitals</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {vitals.map((vital) => (
          <div key={vital.name} className="flex justify-between items-center">
            <span className="text-gray-600">{vital.name}:</span>
            <div className="flex items-center space-x-2">
              <span className="font-mono">{formatValue(vital.name, vital.value)}</span>
              <span className={`text-xs ${getRatingColor(vital.rating)}`}>
                {vital.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
        </div>
      </div>
    </div>
  );
};

export default WebVitalsMonitor;