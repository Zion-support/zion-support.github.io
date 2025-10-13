import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import PerformanceDashboard from './PerformanceDashboard';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => {
      const baseMetrics = prev || {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        interactionToNextPaint: 0,
        cumulativeLayoutShift: 0,
        timeToFirstByte: 0
      };
      
      return {
        ...baseMetrics,
        [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
         metric.name === 'INP' ? 'interactionToNextPaint' :
         metric.name === 'FCP' ? 'firstContentfulPaint' :
         metric.name === 'LCP' ? 'largestContentfulPaint' :
         metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
      };
    });
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => {
        const baseMetrics = prev || {
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          interactionToNextPaint: 0,
          cumulativeLayoutShift: 0,
          timeToFirstByte: 0
        };
        
        return {
          ...baseMetrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        };
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [updateMetric]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowDashboard(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          aria-label="Open performance dashboard"
        >
          Performance
        </button>
      </div>
      
      <PerformanceDashboard 
        isVisible={showDashboard} 
        onClose={() => setShowDashboard(false)} 
      />
    </>
  );
};

export default PerformanceMonitor;