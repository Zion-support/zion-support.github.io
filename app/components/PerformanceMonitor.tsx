import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  renderTime: number;
  loadTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0,
  });

  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure render time
      const renderStart = performance.now();
      
      // Measure load time
      const loadTime = performance.now() - performance.timing.navigationStart;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
          } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });

      // Observe different entry types
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Calculate performance score
      const calculateScore = () => {
        let score = 100;
        
        // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
        if (metrics.lcp) {
          if (metrics.lcp > 4000) score -= 30;
          else if (metrics.lcp > 2500) score -= 15;
        }
        
        // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
        if (metrics.fid) {
          if (metrics.fid > 300) score -= 25;
          else if (metrics.fid > 100) score -= 10;
        }
        
        // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
        if (metrics.cls) {
          if (metrics.cls > 0.25) score -= 25;
          else if (metrics.cls > 0.1) score -= 10;
        }
        
        // FCP scoring (good: <1.8s, needs improvement: 1.8-3s, poor: >3s)
        if (metrics.fcp) {
          if (metrics.fcp > 3000) score -= 20;
          else if (metrics.fcp > 1800) score -= 10;
        }
        
        return Math.max(0, score);
      };

      // Update metrics
      setMetrics(prev => ({
        ...prev,
        renderTime: performance.now() - renderStart,
        loadTime,
        memoryUsage,
      }));

      // Calculate and set performance score
      setTimeout(() => {
        setPerformanceScore(calculateScore());
      }, 1000);

      return () => {
        observer.disconnect();
      };
    };

    // Start monitoring after component mounts
    const cleanup = measurePerformance();

    return cleanup;
  }, [metrics.lcp, metrics.fid, metrics.cls, metrics.fcp]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="performance-monitor bg-white rounded-lg shadow-lg p-6 m-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Performance Monitor</h3>
      
      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Overall Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              performanceScore >= 90 ? 'bg-green-500' : 
              performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{getScoreLabel(performanceScore)}</p>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Core Web Vitals</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid && metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'Measuring...'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Additional Metrics</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-500' : 'text-green-500'}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Render Time:</span>
              <span className="text-blue-500">
                {metrics.renderTime.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">System Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Load Time:</span>
            <span className="ml-2 text-blue-500">{metrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div>
            <span className="text-gray-600">Memory Usage:</span>
            <span className="ml-2 text-blue-500">
              {metrics.memoryUsage ? `${(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;