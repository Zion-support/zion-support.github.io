import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const performanceData = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          totalTime: navigation.loadEventEnd - navigation.fetchStart
        };
        
        if (onPerformanceData) {
          onPerformanceData(performanceData);
        }
      }
    };
    
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    
    return () => {
      window.removeEventListener('load', measurePerformance);
    }
  }, [onPerformanceData]);
  return null
};
export default PerformanceMonitor;