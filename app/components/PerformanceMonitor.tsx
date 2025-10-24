import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => {
    const initPerformanceMonitoring = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        if (typeof window !== 'undefined') {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('CLS:', metric);
            }
          });
          
          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('FID:', metric);
            }
          });
          
          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, fcp: metric.value }));
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('FCP:', metric);
            }
          });
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('LCP:', metric);
            }
          });
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('TTFB:', metric);
            }
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('Performance monitoring not available:', error);
        }
      }
    };

    initPerformanceMonitoring();
  }, []);

  // Generate warnings based on performance thresholds
  useEffect(() => {
    const newWarnings: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      newWarnings.push('FCP is too slow (>1.8s)');
    }
    if (metrics.lcp && metrics.lcp > 2500) {
      newWarnings.push('LCP is too slow (>2.5s)');
    }
    if (metrics.fid && metrics.fid > 100) {
      newWarnings.push('FID is too slow (>100ms)');
    }
    if (metrics.cls && metrics.cls > 0.1) {
      newWarnings.push('CLS is too high (>0.1)');
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      newWarnings.push('TTFB is too slow (>600ms)');
    }
    
    setWarnings(newWarnings);
  }, [metrics]);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">Performance Monitor</h3>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-600' : 'text-green-600'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-600' : 'text-green-600'}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-600' : 'text-green-600'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}
          </span>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="mt-2 p-2 bg-red-50 rounded text-xs">
          <div className="font-semibold text-red-800 mb-1">Warnings:</div>
          {warnings.map((warning, index) => (
            <div key={index} className="text-red-700">• {warning}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;