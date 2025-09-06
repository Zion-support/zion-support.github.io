import React, { useEffect } from 'react;

// Extend the Window interface to include performance and gtag
declare global {
  interface Window {
    performance: {
      getEntriesByType: (_type: string) => unknown[]
},
  gtag: (...args: unknown[]) => void;
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
  limit: number
} | null;

interface PerformanceMonitorProps {
  onPerformanceData?: (performanceData: PerformanceData) => void

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    const measurePerformance = () => {";
      // Measure Core Web Vitals'
      if ('web-vitals' in window) {
        // This would be imported from web-vitals library
        console.log('Web Vitals measurement would be here');
      }

      // Measure page load time
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log('Page load time:', loadTime);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
  measurePerformance()
} else {
  window.addEventListener(load', measurePerformance)

    return () => {
  window.removeEventListener('load', measurePerformance)
};
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;
