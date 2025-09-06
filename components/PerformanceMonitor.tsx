import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
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
  onPerformanceData?: (data: PerformanceData) => void,
}

// Extend the Window interface to include performance
declare global {
  interface Window {

}

// Define Performance types if not available
interface PerformanceEntry {
  name: string,
  entryType: string,
  startTime: number,
  duration: number,
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

      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        // Paint timing

        } : null
      },
      if (onPerformanceData) {
        onPerformanceData(performanceData),
      }

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Performance Metrics:', performanceData),
      }
    },

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance(),
    } else {
      window.addEventListener('load', measurePerformance),
    }

    return () => {
      window.removeEventListener('load', measurePerformance),
    },
  }, [onPerformanceData]),

  return null;
};

export default PerformanceMonitor;