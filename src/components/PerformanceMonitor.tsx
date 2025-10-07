import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: undefined,
    inp: undefined,
    fcp: undefined,
    lcp: undefined,
    ttfb: undefined,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dynamically import web-vitals to avoid build issues
    import('web-vitals')
      .then(webVitals => {
        const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

        // Measure Core Web Vitals
        onCLS((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            cls: metric.value,
          }));
        });

        onFCP((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            fcp: metric.value,
          }));
        });

        onLCP((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            lcp: metric.value,
          }));
        });

        onTTFB((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            ttfb: metric.value,
          }));
        });

        // Try to use onINP if available (for newer versions)
        if (webVitals.onINP) {
          webVitals.onINP((metric: { value: number }) => {
            setMetrics((prev: PerformanceMetrics) => ({
              ...prev,
              inp: metric.value,
            }));
          });
        }
      })
      .catch(error => {
        console.warn('Failed to load web-vitals:', error);
      });
  }, []);

  if (!isVisible) {
    return (
      <button
onClick={() => setIsVisible(true)}
        className='fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50'
        title='Open Performance Monitor'
      >
        <Activity className='h-5 w-5'</button>
    );
  }

  return (
    <div className='fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50'>
      <div className='font-bold mb-2'>Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(2) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
      <button
onClick={() => setIsVisible(false)}
        className='mt-2 text-xs text-gray-400 hover:text-white'
      >
        Close
      </button>
    </div>
  );
};

export default PerformanceMonitor;
