import React, { useEffect } from 'react';
;
interface PerformanceData {;
  loadTime:number;
  domContentLoaded:number;
  firstPaint:number;
  firstContentfulPaint:number;
}
;
interface PerformanceMonitorProps {;
  onPerformanceData?:(data:PerformanceData) => void;
}
;
const PerformanceMonitor:React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {;
  useEffect(() => {;
    const measurePerformance = () => {;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      ;
      const performanceData:PerformanceData = {;
        loadTime:navigation.loadEventEnd - navigation.loadEventStart,;
        domContentLoaded:navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,;
        firstPaint:paint.find(entry => entry.name === 'first-paint')?.startTime || 0,;
        firstContentfulPaint:paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,;
      };
      ;
      if (onPerformanceData) {;
        onPerformanceData(performanceData);
      }
    };
;
    // Measure performance after page load;
    if (document.readyState === 'complete') {;
      measurePerformance();
    } else {;
      window.addEventListener('load', measurePerformance);
    }
;
    return () => {;
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);
;
  return null;
};
;
export default PerformanceMonitor;