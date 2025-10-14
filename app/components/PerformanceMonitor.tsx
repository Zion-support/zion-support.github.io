import React, { useState, useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));
    };

    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Toggle Performance Monitor"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 bg-slate-800 border border-white/20 rounded-lg shadow-2xl p-4 w-80 z-50 backdrop-blur-lg">
          <h3 className="font-semibold text-white mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Performance Metrics
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">First Contentful Paint:</span>
              <span className={`font-mono ${metrics.fcp && metrics.fcp < 1800 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Loading...'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Largest Contentful Paint:</span>
              <span className={`font-mono ${metrics.lcp && metrics.lcp < 2500 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Loading...'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">First Input Delay:</span>
              <span className={`font-mono ${metrics.fid && metrics.fid < 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'Loading...'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Cumulative Layout Shift:</span>
              <span className={`font-mono ${metrics.cls && metrics.cls < 0.1 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Time to First Byte:</span>
              <span className={`font-mono ${metrics.ttfb && metrics.ttfb < 800 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Loading...'}
              </span>
            </div>
          </div>

          {/* Performance Score */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Performance Score:</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min(100, Math.max(0, 
                        ((metrics.fcp && metrics.fcp < 1800 ? 25 : 0) +
                         (metrics.lcp && metrics.lcp < 2500 ? 25 : 0) +
                         (metrics.fid && metrics.fid < 100 ? 25 : 0) +
                         (metrics.cls && metrics.cls < 0.1 ? 25 : 0))
                      ))}%` 
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400">
                  {Math.min(100, Math.max(0, 
                    ((metrics.fcp && metrics.fcp < 1800 ? 25 : 0) +
                     (metrics.lcp && metrics.lcp < 2500 ? 25 : 0) +
                     (metrics.fid && metrics.fid < 100 ? 25 : 0) +
                     (metrics.cls && metrics.cls < 0.1 ? 25 : 0))
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;