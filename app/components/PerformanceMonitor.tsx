'use client';'import React, { useEffect } from 'react';'';
const PerformanceMonitor: React.FC = () => {
  
  
  
  useEffect(() => {
  
  
  
    // Monitor performance metrics;
const observer = new PerformanceObserver((list) => {
  
      for (const entry of list.getEntries()) {
  
        console.log('Performance Entry:', entry);''      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });''
    return () => {
  
  
  
      observer.disconnect();
    }
  }, []);

  return null;
}
export default PerformanceMonitor;
export default PerformanceMonitor;
>>>>>>> origin/main
>>>>>>> cursor/delete-records-a75e
