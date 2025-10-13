import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'development' || showInProduction) {
      setIsVisible(true);
    }

    const updateMetrics = (metric: any) => {
      setMetrics(prev => {
        const newMetrics = {
          ...prev,
          [metric.name]: metric.value
        };
        
        // Call the callback if provided
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics);
        }
        
        return newMetrics;
      });
    };

    // Measure Core Web Vitals
    onCLS(updateMetrics);
    onINP(updateMetrics);
    onFCP(updateMetrics);
    onLCP(updateMetrics);
    onTTFB(updateMetrics);

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, [showInProduction, onMetricsUpdate]);

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
      CLS: { good: 0.1, needsImprovement: 0.25 },
      INP: { good: 200, needsImprovement: 500 },
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      TTFB: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-400';

    if (value <= threshold.good) return 'text-green-400';
    if (value <= threshold.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (metric: string, value: number | null) => {
    if (value === null) return 'Measuring...';
    
    const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
      CLS: { good: 0.1, needsImprovement: 0.25 },
      INP: { good: 200, needsImprovement: 500 },
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      TTFB: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'Unknown';

    if (value <= threshold.good) return 'Good';
    if (value <= threshold.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  const formatValue = (metric: string, value: number | null) => {
    if (value === null) return 'Measuring...';
    
    if (metric === 'CLS') {
      return value.toFixed(3);
    }
    
    if (['INP', 'FCP', 'LCP', 'TTFB'].includes(metric)) {
      return `${Math.round(value)}ms`;
    }
    
    return value.toString();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(metrics).map(([metric, value]) => (
          <div key={metric} className="flex justify-between items-center">
            <span className="text-gray-300">{metric}:</span>
            <div className="flex items-center space-x-2">
              <span className={getScoreColor(metric, value)}>
                {formatValue(metric, value)}
              </span>
              <span className={`text-xs px-1 py-0.5 rounded ${
                getScoreLabel(metric, value) === 'Good' ? 'bg-green-500/20 text-green-400' :
                getScoreLabel(metric, value) === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {getScoreLabel(metric, value)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/10 text-xs text-gray-400">
        <div>CLS: Cumulative Layout Shift</div>
        <div>INP: Interaction to Next Paint</div>
        <div>FCP: First Contentful Paint</div>
        <div>LCP: Largest Contentful Paint</div>
        <div>TTFB: Time to First Byte</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;