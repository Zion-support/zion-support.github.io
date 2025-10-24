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

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const monitorPerformance = () => {
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
            renderTime: Math.round(domContentLoaded),
          });
        }
      };

      // Monitor after page load
      window.addEventListener('load', monitorPerformance);

      return () => {
        window.removeEventListener('load', monitorPerformance);
      };
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (e: KeyboardEvent,) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
import React, {useEffect} from 'react';
import {getCLS, getFID, getFCP, getLCP, getTTFB};
export default PerformanceMonitor;
'use client';
const PerformanceMonitor: React.FC = () => {useEffect(() => {
    // Monitor Core Web Vitals;
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
        if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
        if ('memory' in performance) {
          setInterval(() => {
            const memory = (performance as any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',});
        }, 30000); // Check every 30 seconds;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup;
    return () => {// Cleanup if needed;};
  }, []);

  return null;
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="performancemonitor">
      <h2>PerformanceMonitor</h2>
      <p>PerformanceMonitor component.</p>
    </div>
  );
};

export default PerformanceMonitor;
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
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return null;
};

export default PerformanceMonitor

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
