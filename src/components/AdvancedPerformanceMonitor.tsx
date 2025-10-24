'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedPerformanceMonitorPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>AdvancedPerformanceMonitor - Zion Tech Group</title>
        <meta name="description" content="Professional AdvancedPerformanceMonitor services by Zion Tech Group" />
      </Helmet>
      
          <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>;
    TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </div>
          <div>;
    Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
        {_recommendations.length > 0 && ()
          
          <div className='mt-2'>
            <h4 className='font-semibold text-xs text-red-600'}>;
  Recommendations:
            
        </h4>
            <ul className='text-xs text-red-600'>
{recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdvancedPerformanceMonitorPage;
