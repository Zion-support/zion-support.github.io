<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const monitorPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

          // Send to analytics service
          if (window.gtag) {
            window.gtag('event', 'performance_metrics', {
              event_category: 'performance',
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded),
              first_paint: Math.round(firstPaint),
              first_contentful_paint: Math.round(firstContentfulPaint)
            });
          }

          // Log to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', {
              loadTime,
              domContentLoaded,
              firstPaint,
              firstContentfulPaint
            });
          }
        }
      };

      // Monitor after page load
      window.addEventListener('load', monitorPerformance);

      return () => {
        window.removeEventListener('load', monitorPerformance);
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
=======
import React from 'react';
import { Monitor } from 'lucide-react';
interface PerformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Performancemonitor({ className = '', children, ...props }: PerformancemonitorProps) {
  return (
    <div className={`performancemonitor-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
=======
'use client'
import React, { useEffect, useState } from 'react'

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    loadTime: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateMetrics = () => {
      // Simulate performance metrics
      setMetrics({
        fps: Math.floor(Math.random() * 60) + 30,
        memory: Math.floor(Math.random() * 100),
        loadTime: Math.floor(Math.random() * 2000) + 500
      })
    }

    const interval = setInterval(updateMetrics, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      <div className="space-y-1 text-xs">
        <div>FPS: {metrics.fps}</div>
        <div>Memory: {metrics.memory}%</div>
        <div>Load: {metrics.loadTime}ms</div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
