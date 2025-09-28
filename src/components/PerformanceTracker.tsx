import React, { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceTrackerProps {
  className?: string;
}

export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [isTracking, setIsTracking] = useState(false);
  const metricsRef = useRef<PerformanceMetrics>(metrics);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsTracking(true);

    // Track FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metricsRef.current.fcp = entry.startTime;
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Track LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        metricsRef.current.lcp = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Track first input delay
        if ('processingStart' in entry && entry.startTime) {
          const fid = (entry as any).processingStart - entry.startTime;
          metricsRef.current.fid = fid;
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if ('value' in entry) {
          clsValue += (entry as any).value;
          metricsRef.current.cls = clsValue;
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Track TTFB (Time to First Byte)
    const navigationObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          metricsRef.current.ttfb = navEntry.responseStart - navEntry.requestStart;
        }
      });
    });
    navigationObserver.observe({ entryTypes: ['navigation'] });

    // Update metrics every second
    const interval = setInterval(() => {
      setMetrics({ ...metricsRef.current });
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value === 0) return 'Measuring...';
    return `${Math.round(value)}${unit}`;
  };

  const getMetricColor = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-600 dark:text-gray-400';

    if (value <= threshold.good) {
      return 'text-green-600 dark:text-green-400';
    } else if (value <= threshold.needsImprovement) {
      return 'text-yellow-600 dark:text-yellow-400';
    } else {
      return 'text-red-600 dark:text-red-400';
    }
  };

  const getMetricStatus = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'Unknown';

    if (value <= threshold.good) {
      return 'Good';
    } else if (value <= threshold.needsImprovement) {
      return 'Needs Improvement';
    } else {
      return 'Poor';
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Real-time Core Web Vitals monitoring
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {isTracking ? 'Tracking' : 'Stopped'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatMetric(metrics.fcp)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FCP</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">First Contentful Paint</div>
          <div className={`text-xs font-medium mt-1 ${getMetricColor('fcp', metrics.fcp)}`}>
            {getMetricStatus('fcp', metrics.fcp)}
          </div>
        </div>

        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatMetric(metrics.lcp)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">LCP</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">Largest Contentful Paint</div>
          <div className={`text-xs font-medium mt-1 ${getMetricColor('lcp', metrics.lcp)}`}>
            {getMetricStatus('lcp', metrics.lcp)}
          </div>
        </div>

        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatMetric(metrics.fid)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FID</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">First Input Delay</div>
          <div className={`text-xs font-medium mt-1 ${getMetricColor('fid', metrics.fid)}`}>
            {getMetricStatus('fid', metrics.fid)}
          </div>
        </div>

        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatMetric(metrics.cls, '')}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">CLS</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">Cumulative Layout Shift</div>
          <div className={`text-xs font-medium mt-1 ${getMetricColor('cls', metrics.cls)}`}>
            {getMetricStatus('cls', metrics.cls)}
          </div>
        </div>

        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {formatMetric(metrics.ttfb)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">TTFB</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">Time to First Byte</div>
          <div className={`text-xs font-medium mt-1 ${getMetricColor('ttfb', metrics.ttfb)}`}>
            {getMetricStatus('ttfb', metrics.ttfb)}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Core Web Vitals
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
              These metrics are essential for user experience and SEO. Green indicates good performance, 
              yellow needs improvement, and red indicates poor performance that should be addressed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracker;