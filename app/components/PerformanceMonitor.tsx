'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Activity, Clock, Zap, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  connectionSpeed: string;
  renderTime: number;
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Initialize performance monitoring
    const measureWebVitals = () => {
      // Basic web vitals measurement
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          // Get memory usage if available
          const memory = (performance as any).memory;
          const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;
          
          // Get connection speed
          const connection = (navigator as any).connection;
          const connectionSpeed = connection ? connection.effectiveType || 'unknown' : 'unknown';
          
          setMetrics({
            loadTime: Math.round(loadTime),
            memoryUsage,
            connectionSpeed,
            renderTime: Math.round(domContentLoaded)
          });
          
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
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measureWebVitals);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

<<<<<<< HEAD
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
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
};

export default PerformanceMonitor;