'use client';

import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  performanceData?: any;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        const logMetric = (metric: any) => {
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log(metric);
          }
        };
        getCLS(logMetric);
        getFID(logMetric);
        getFCP(logMetric);
        getLCP(logMetric);
        getTTFB(logMetric);
      });
    }

    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const metrics = {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              totalTime: navigation.loadEventEnd - navigation.fetchStart
            };
            
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics:', metrics);
            }
          }
        }, 1000);
      });
    }
  }, []);

  return (
    <div className="performance-monitor">
      {performanceData && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Performance Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {performanceData.lcp ? `${performanceData.lcp}ms` : 'N/A'}
              </div>
              <div className="text-sm text-blue-700">LCP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {performanceData.fid ? `${performanceData.fid}ms` : 'N/A'}
              </div>
              <div className="text-sm text-blue-700">FID</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {performanceData.cls ? performanceData.cls.toFixed(3) : 'N/A'}
              </div>
              <div className="text-sm text-blue-700">CLS</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;