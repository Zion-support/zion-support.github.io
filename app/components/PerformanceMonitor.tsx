'use client';

import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  performanceData?: any;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Track Core Web Vitals
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }, []);

  return (
    <div className="performance-monitor">
      {performanceData && (
        <div className="performance-data">
          <h3>Performance Metrics</h3>
          <pre>{JSON.stringify(performanceData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
