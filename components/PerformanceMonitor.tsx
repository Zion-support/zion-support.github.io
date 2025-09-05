import { useEffect } from 'react';

interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: any) => void;
}

const PerformanceMonitor = ({ 
  onPerformanceData, 
  showMetrics = false, 
  logMetrics = false,
  onThresholdExceeded 
}: PerformanceMonitorProps) => {
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
        
        if (logMetrics) {
          console.log('Performance Metrics:', performanceData);
        }
        
        if (onPerformanceData) {
          onPerformanceData(performanceData);
        }
        
        if (onThresholdExceeded && performanceData.totalTime > 3000) {
          onThresholdExceeded(performanceData);
        }
      }
    };
    
    // Measure performance after page load
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', measurePerformance);
      }
    }
  }, [onPerformanceData, logMetrics, onThresholdExceeded]);
  
  return null;
};

export default PerformanceMonitor;