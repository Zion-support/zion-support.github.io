import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitalsProps {
  showInProduction?: boolean;
}

interface MetricData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ showInProduction = false }) => {
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' && !showInProduction) {
      return;
    }

    const handleMetric = (metric: any) => {
      setMetrics(prev => {
        const existing = prev.find(m => m.name === metric.name);
        if (existing) {
          return prev.map(m => m.name === metric.name ? { ...m, value: metric.value, rating: metric.rating } : m);
        }
        return [...prev, { name: metric.name, value: metric.value, rating: metric.rating }];
      });
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Show metrics after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [showInProduction]);

  if (!isVisible || metrics.length === 0) {
    return null;
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatValue = (name: string, value: number) => {
    switch (name) {
      case 'CLS': return value.toFixed(3);
      case 'FCP':
      case 'LCP':
      case 'TTFB': return `${Math.round(value)}ms`;
      case 'INP': return `${Math.round(value)}ms`;
      default: return value.toString();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Core Web Vitals</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex justify-between items-center">
            <span className="text-gray-300">{metric.name}:</span>
            <span className={`font-mono ${getRatingColor(metric.rating)}`}>
              {formatValue(metric.name, metric.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreWebVitals;