import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || isMonitoring) {
      const startTime = performance.now();
      
      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      // Monitor Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
          });
          
          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
          });
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
          });
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
          });
        });
      }

      // Monitor interaction to next paint
      let interactionStart = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'event') {
            const event = entry as PerformanceEventTiming;
            if (event.interactionId) {
              const inp = event.processingEnd - event.processingStart;
              setMetrics(prev => ({ ...prev, interactionToNextPaint: inp }));
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['event'] });
      
      return () => {
        observer.disconnect();
      };
    }
  }, [isMonitoring]);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (process.env.NODE_ENV === 'production' && !isMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-600" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-3 py-1 rounded text-xs font-medium ${
                isMonitoring 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {isMonitoring ? 'Monitoring' : 'Start Monitor'}
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.firstContentfulPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">INP:</span>
              <span className={`font-mono ${metrics.interactionToNextPaint ? getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
                {metrics.interactionToNextPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift?.toFixed(3) || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 200, poor: 600 }) : 'text-gray-400'}`}>
                {metrics.timeToFirstByte?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-3 h-3 mr-1" />
                Performance Tips:
              </div>
              <ul className="space-y-1 text-xs">
                <li>• Optimize images and use WebP format</li>
                <li>• Enable compression (gzip/brotli)</li>
                <li>• Use CDN for static assets</li>
                <li>• Minimize JavaScript bundles</li>
                <li>• Implement lazy loading</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;