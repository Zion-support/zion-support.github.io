import { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = (metric: any) => {
      setMetrics(prev => {
        const newMetrics = {
          ...prev,
          [metric.name]: metric.value,
        };
        
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics);
        }

        // Report to analytics if enabled
        if (enableReporting && typeof window !== 'undefined') {
          // Google Analytics 4
          if ('gtag' in window) {
            (window as any).gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              non_interaction: true,
            });
          }

          // Custom analytics endpoint
          if (process.env.NODE_ENV === 'production') {
            fetch('/api/analytics/web-vitals', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: metric.name,
                value: metric.value,
                id: metric.id,
                delta: metric.delta,
                timestamp: Date.now(),
                url: window.location.href,
                userAgent: navigator.userAgent,
              }),
            }).catch(console.error);
          }
        }

        return newMetrics;
      });
    };

    // Measure Web Vitals
    getCLS(updateMetrics);
    getFID(updateMetrics);
    getFCP(updateMetrics);
    getLCP(updateMetrics);
    getTTFB(updateMetrics);

    // Show performance panel in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, [onMetricsUpdate, enableReporting]);

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
      CLS: { good: 0.1, needsImprovement: 0.25 },
      FID: { good: 100, needsImprovement: 300 },
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      TTFB: { good: 800, needsImprovement: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-400';

    if (value <= threshold.good) return 'text-green-500';
    if (value <= threshold.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (metric: string, value: number | null) => {
    if (value === null) return 'Measuring...';
    
    const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
      CLS: { good: 0.1, needsImprovement: 0.25 },
      FID: { good: 100, needsImprovement: 300 },
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      TTFB: { good: 800, needsImprovement: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'Unknown';

    if (value <= threshold.good) return 'Good';
    if (value <= threshold.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50 max-w-xs">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Performance Metrics
      </h3>
      <div className="space-y-2 text-xs">
        {Object.entries(metrics).map(([metric, value]) => (
          <div key={metric} className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">{metric}:</span>
            <div className="flex items-center space-x-2">
              <span className={`font-mono ${getScoreColor(metric, value)}`}>
                {value !== null ? (
                  metric === 'CLS' ? value.toFixed(3) : `${Math.round(value)}ms`
                ) : (
                  '...'
                )}
              </span>
              <span className={`text-xs px-1 py-0.5 rounded ${
                getScoreColor(metric, value) === 'text-green-500' ? 'bg-green-100 text-green-800' :
                getScoreColor(metric, value) === 'text-yellow-500' ? 'bg-yellow-100 text-yellow-800' :
                getScoreColor(metric, value) === 'text-red-500' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {getScoreLabel(metric, value)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-3 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
      >
        Hide
      </button>
    </div>
  );
};

export default PerformanceMonitor;