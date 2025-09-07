import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
}
    }

      observer.observe({ "entryTypes": ['navigation'],'
})"memory": {"used": number;
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [onPerformanceData])

  return null
}

export default PerformanceMonitor
  return null; // This component doesn't render anything;
}export default PerformanceMonitor;

interface PerformanceData {
  domContentLoaded: number,
  loadComplete: number,
  totalLoadTime: number,
  firstPaint: number,
  firstContentfulPaint: number,
  resourceCount: number,
  memory: {
    used: number,
    total: number,
    limit: number,
  } | null;
}

interface PerformanceData {
  domContentLoaded: number,
  loadComplete: number,
  totalLoadTime: number,
  firstPaint: number,
  firstContentfulPaint: number,
  resourceCount: number,
  memory: {
    used: number,
    total: number,
    limit: number,
  } | null;
}

interface PerformanceMonitorProps {
  }
  onPerformanceData?: ("data": any) => void;

}

interface Performance {
  getEntriesByType(type: string): PerformanceEntry[],
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  loadEventEnd: number,
  loadEventStart: number,
  domContentLoadedEventEnd: number,
  domContentLoadedEventStart: number,
  responseEnd: number,
  responseStart: number,
  requestStart: number,
  navigationStart: number,
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof window.performance === 'undefined') return;

    const measurePerformance = () => {
      const navigation = window.performance.getEntriesByType('navigation)[0] as PerformanceNavigationTiming;
      const paint = window.performance.getEntriesByType(paint');
      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint)?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource).length,
        
        // Memory usage (if available)
        memory: (window.performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.usedJSHeapSize,
          total: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.totalJSHeapSize,
          limit: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit
        } : null
      }

      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
         
        console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load
    if (document.readyState === complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;
