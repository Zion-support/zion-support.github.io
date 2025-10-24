<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'
=======
'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible = false, className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const monitorPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
<<<<<<< HEAD
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
=======
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
            renderTime: Math.round(domContentLoaded),
          });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
        }
      };

      // Monitor after page load
      window.addEventListener('load', monitorPerformance);

      return () => {
        window.removeEventListener('load', monitorPerformance);
      };
    }
<<<<<<< HEAD
=======

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (e: KeyboardEvent,) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
=======
import React, {useEffect} from 'react';
import {getCLS, getFID, getFCP, getLCP, getTTFB};
export default PerformanceMonitor;
'use client';
const PerformanceMonitor: React.FC = () => {useEffect(() => {
    // Monitor Core Web Vitals;
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);});
      if ('web-vitals' in window) {onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);}
    };

    // Monitor performance metrics;
    const monitorPerformance = () => {if ('performance' in, window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(const entry = > entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,});
          }, 0);
        });
      }
    };

    // Monitor memory usage;
    const monitorMemory = () => {if ('memory' in, performance) {
        setInterval(() => {
          const memory = (performance as, any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',});
        }, 30000); // Check every 30 seconds;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      }
    };

    window.addEventListener('keydown', handleKeyDown);

<<<<<<< HEAD
    return () => {
      window.removeEventListener('load', measureWebVitals);
      window.removeEventListener('keydown', handleKeyDown);
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    // Cleanup;
    return () => {// Cleanup if needed;};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  }, []);

  return null;
=======
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="performancemonitor">
      <h2>PerformanceMonitor</h2>
      <p>PerformanceMonitor component.</p>
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
};

export default PerformanceMonitor;
<<<<<<< HEAD
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
=======
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return null;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

export default PerformanceMonitor
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = () => {
  return (
    <div className="performancemonitor">
      <h2>PerformanceMonitor</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
