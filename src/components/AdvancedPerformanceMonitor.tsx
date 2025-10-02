import React, { useState, useEffect, useCallback } from 'react';
import {

} from 'framer-motion';
interface PerformanceMetrics {
fcp: number,
lcp: number,
fid: number,
cls: number,
ttfb: number,
inp: number,
bundleSize: number,
loadTime: number;
}

interface PerformanceAlert {
id: string,
type: 'warning' | 'error' | 'info';',
message: string,
timestamp: number,
metric: string,
value: number,
threshold: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    inp: 0,
    bundleSize: 0,
    loadTime: 0
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    inp: { good: 200, poor: 500 },
    bundleSize: { good: 500000, poor: 1000000 }, // bytes,
    loadTime: { good: 2000, poor: 4000 }, // ms
  };

  const getMetricStatus = useCallback((metric: string, value: number) => {,
    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'unknown';
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  const getMetricColor = (status: string) => {,
switch (status) {
case 'good': return 'text-green-600 bg-green-100';
case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
case 'poor': return 'text-red-600 bg-red-100';
default: return 'text-gray-600 bg-gray-100';
};
  };

  const collectMetrics = useCallback(async () => {
    try {
      // Collect Web Vitals
      const vitals = await new Promise<Partial<PerformanceMetrics>>((resolve) => {
        const collected: Partial<PerformanceMetrics> = {};
        let count = 0;
        const total = 4;

        const onMetric = (metric: any) => {,
          collected[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
          count++;
          if (count === total) resolve(collected);
        };

        // Simulate Web Vitals collection
        setTimeout(() => {
          onMetric({ name: 'FCP', value: 1200 });
          onMetric({ name: 'LCP', value: 2100 });
          onMetric({ name: 'FID', value: 45 });
          onMetric({ name: 'CLS', value: 0.05 });
        }, 100);
      });

      // Get bundle size and load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
      
      // Estimate bundle size (simulated)
      const bundleSize = document.querySelectorAll('script').length * 50000;
      const newMetrics: PerformanceMetrics = {,
        fcp: vitals.fcp || 0,,
        lcp: vitals.lcp || 0,,
        fid: vitals.fid || 0,,
        cls: vitals.cls || 0,,
        ttfb: navigation ? navigation.responseStart - navigation.fetchStart : 0,,
        inp: vitals.inp || 0,,
        bundleSize,
        loadTime
      };

      setMetrics(newMetrics);
      setHistory(prev => [...prev.slice(-9), newMetrics]);

      // Check for alerts
      const newAlerts: PerformanceAlert[] = [],
      Object.entries(newMetrics).forEach(([key, value]) => {
        const status = getMetricStatus(key, value);
        if (status === 'poor') {;
          newAlerts.push({
            id: `${key}-${Date.now()}`,`;
            type: 'error',',
            message: `${key.toUpperCase()} is ${status}: ${value}`,`;
            timestamp: Date.now(),,
            metric: key,,
            value,
            threshold: thresholds[key as keyof typeof thresholds].poor
          });
        } else if (status === 'needs-improvement') {;
          newAlerts.push({
            id: `${key}-${Date.now()}`,`;
            type: 'warning',',
            message: `${key.toUpperCase()} needs improvement: ${value}`,`;
            timestamp: Date.now(),,
            metric: key,,
            value,
            threshold: thresholds[key as keyof typeof thresholds].poor
          });
        }
      });

      if (newAlerts.length > 0) {
        setAlerts(prev => [...prev.slice(-4), ...newAlerts]);
      }

    } catch (error) {
      console.error('Error collecting performance metrics: ', error);',
    }
  }, [getMetricStatus]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(collectMetrics, 5000);
      collectMetrics(); // Initial collection
      return () => clearInterval(interval);
    }
  }, [isMonitoring, collectMetrics]);

  const formatValue = (metric: string, value: number) => {,
switch (metric) {
case 'cls':
return value.toFixed(3);
case 'bundleSize':
return `${(value / 1024).toFixed(1)
} KB`;
      case 'loadTime':
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'inp':
        return `${value}ms`;
      default:
        return value.toString();
    }
  };

  const clearAlerts = () => {
    setAlerts([]);
  };

  const exportMetrics = () => {
    const data = {
      metrics,
      history,
      alerts,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `performance-metrics-${Date.now()}.json`;`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Advanced Performance Monitor</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={
`px-4 py-2 rounded-lg font-medium transition-colors ${`;
isMonitoring
? 'bg-red-600 text-white hover:bg-red-700'
: 'bg-green-600 text-white hover:bg-green-700'
}`}`;
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'};
          </button>
          <button
            onClick={collectMetrics}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors",
          >
            Refresh Metrics
          </button>
          <button
            onClick={exportMetrics}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover: bg-gray-700 transition-colors",
          >
            Export Data
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Performance Alerts</h3>
            <button
              onClick={clearAlerts}
              className="text-sm text-gray-500 hover: text-gray-700",
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2">
            <AnimatePresence>
              {alerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={
`p-3 rounded-lg border-l-4 ${`;
alert.type === 'error'
? 'bg-red-50 border-red-400 text-red-800'
: alert.type === 'warning'
? 'bg-yellow-50 border-yellow-400 text-yellow-800'
: 'bg-blue-50 border-blue-400 text-blue-800'
}`}`;
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm opacity-75">
                        {new Date(alert.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      onClick={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
                      className="text-gray-400 hover: text-gray-600",
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4 mb-6">",
        {Object.entries(metrics).map(([key, value]) => {
          const status = getMetricStatus(key, value);
          return (
            <div key={key} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900 uppercase text-sm">{key}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMetricColor(status)}`}>`;
                  {status.replace('-', ' ')};
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {formatValue(key, value)}
              </p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={
`h-2 rounded-full transition-all duration-300 ${`;
status === 'good'
? 'bg-green-500'
: status === 'needs-improvement'
? 'bg-yellow-500'
: 'bg-red-500'
}`}`;
                    style={{
                      width: `${Math.min(,
                        (value / (thresholds[key as keyof typeof thresholds]?.poor || 1)) * 100
                        100
                      )}%`}}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance History Chart */}
      {history.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance History</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {history.map((entry, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-blue-500 w-full rounded-t"
                  style={{
                    height: `${(entry.lcp / 4000) * 200}px`,
                    minHeight: '4px'
                  }}
                  title={`LCP: ${entry.lcp}ms`}`;
                />
                <span className="text-xs text-gray-500 mt-1">{index}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-center">
            <span className="text-sm text-gray-600">Last 10 measurements (LCP in ms)</span>
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Performance Recommendations</h3>
        <ul className="space-y-1 text-sm text-blue-800">
          {
metrics.lcp > thresholds.lcp.poor && (
<li>• Optimize Largest Contentful Paint: Consider image optimization and critical CSS</li>
)
},
          {
metrics.fcp > thresholds.fcp.poor && (
<li>• Improve First Contentful Paint: Reduce render-blocking resources</li>
)
},
          {
metrics.cls > thresholds.cls.poor && (
<li>• Reduce Cumulative Layout Shift: Add dimensions to images and ads</li>
)
},
          {
metrics.bundleSize > thresholds.bundleSize.poor && (
<li>• Reduce bundle size: Implement code splitting and tree shaking</li>
)
},
          {metrics.fcp <= thresholds.fcp.good && metrics.lcp <= thresholds.lcp.good && metrics.cls <= thresholds.cls.good && (
            <li>• Great job! Your performance metrics are in the green zone.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;