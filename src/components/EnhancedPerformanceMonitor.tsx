import React from 'react';
import { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  timestamp: number;
}

const EnhancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const performanceMetrics: Partial<PerformanceMetrics> = {
      timestamp: Date.now(),
    };

    const handleMetric = (metric: any) => {
      performanceMetrics[metric.name as keyof PerformanceMetrics] = metric.value;
      
      // Check if we have all metrics
      if (Object.keys(performanceMetrics).length === 6) {
        setMetrics(performanceMetrics as PerformanceMetrics);
        
        // Send to analytics (you can implement your analytics service here)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Show performance monitor after 3 seconds for debugging
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getPerformanceGrade = (metric: string, value: number) => {
    switch (metric) {
      case 'cls':
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
      case 'inp':
        return value <= 200 ? 'Good' : value <= 500 ? 'Needs Improvement' : 'Poor';
      case 'fcp':
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';
      case 'lcp':
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
      case 'ttfb':
        return value <= 800 ? 'Good' : value <= 1800 ? 'Needs Improvement' : 'Poor';
      default:
        return 'Unknown';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'Good':
        return 'text-green-600 bg-green-100';
      case 'Needs Improvement':
        return 'text-yellow-600 bg-yellow-100';
      case 'Poor':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => {
          if (key === 'timestamp') return null;
          const grade = getPerformanceGrade(key, value);
          const colorClass = getGradeColor(grade);
          
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <span className="font-medium text-gray-700 uppercase">{key}</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">{Math.round(value)}</span>
                <span className={`px-2 py-1 rounded text-xs ${colorClass}`}>
                  {grade}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-3 pt-2 border-t text-xs text-gray-500">
        Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;