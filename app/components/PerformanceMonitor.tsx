'use client';

<<<<<<< HEAD
import React, { useEffect } from 'react';
import { measureWebVitals } from '../../src/utils/performanceMonitor';
=======
interface PerformanceMetrics {
  loadTime: number,
  memoryUsage: number,
  connectionSpeed: string,
  renderTime: number,
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    measureWebVitals();

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log('Page Load Performance:', {
            loadTime,
            domContentLoaded,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

<<<<<<< HEAD
  return null;
=======
  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 min-w-[200px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold flex items-center">
          <Activity className="w-4 h-4 mr-1" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Load Time:
          </span>
          <span className="text-green-400">{metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            Render Time:
          </span>
          <span className="text-blue-400">{metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Database className="w-3 h-3 mr-1" />
            Memory:
          </span>
          <span className="text-yellow-400">{metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            Connection:
          </span>
          <span className="text-purple-400">{metrics.connectionSpeed}</span>
        </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle</div>
    </div>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
};

export default PerformanceMonitor;