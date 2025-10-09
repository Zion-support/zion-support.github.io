import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if user enables it
    const shouldShow = process.env.NODE_ENV === 'development' || 
      localStorage.getItem('show-performance-monitor') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Import and use web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
      });

      getFID((metric) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
      });

      getFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
      });

      getLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
      });

      getTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      });
    });

    // Get load time
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        setMetrics(prev => ({ 
          ...prev, 
          loadTime: perfData.loadEventEnd - perfData.fetchStart 
        }));
      }
    });

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          console.log('Resource loaded:', entry.name, entry.duration);
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getScore = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'Good': return 'text-green-400';
      case 'Needs Improvement': return 'text-yellow-400';
      case 'Poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(getScore(metrics.fid, { good: 100, needsImprovement: 300 }))}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(getScore(metrics.ttfb, { good: 600, needsImprovement: 1500 }))}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(getScore(metrics.loadTime, { good: 3000, needsImprovement: 5000 }))}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'Loading...'}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-700">
        <button
          onClick={() => {
            localStorage.setItem('show-performance-monitor', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-gray-400 hover:text-white"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;