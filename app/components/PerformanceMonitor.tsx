<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

<<<<<<< HEAD
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
=======
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
  });

  const [isVisible, setIsVisible] = useState(false);
=======
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680

export default function PerformanceMonitor() {
  useEffect(() => {
<<<<<<< HEAD
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return;

    const measurePerformance = () => {
      // Measure load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
<<<<<<< HEAD
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Measure render time (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const renderTime = fcp ? fcp.startTime : 0;
=======
      if (navigation) {
        console.log('Page load metrics:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc

      // Measure memory usage
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / memory.totalJSHeapSize : 0;

      // Measure FPS
      let fps = 0;
      if (typeof window.requestAnimationFrame === 'function') {
        let lastTime = performance.now();
        let frameCount = 0;
        
        const measureFrame = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            lastTime = currentTime;
            frameCount = 0;
          }
<<<<<<< HEAD
          requestAnimationFrame(measureFrame);
        };
        
        requestAnimationFrame(measureFrame);
=======
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
      }

<<<<<<< HEAD
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100),
        fps
      });
=======
    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
    };

    // Initial measurement
    measurePerformance();

<<<<<<< HEAD
    // Show/hide with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
=======
import React, { useEffect } from 'react'
import { usePerformance } from '../hooks/usePerformance'

interface PerformanceMonitorProps {
  enabled?: boolean
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ enabled = false }) => {
  const metrics = usePerformance()

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Log performance metrics in development
    if (process.env['NODE_ENV'] === 'development' && Object.keys(metrics).length > 0) {
      console.group('🚀 Performance Metrics')
      console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A')
      console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A')
      console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'N/A')
      console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A')
      console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A')
      console.groupEnd()

      // Send to analytics in production
      if (process.env['NODE_ENV'] === 'production') {
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metrics.lcp || 0),
            custom_map: {
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls,
              fcp: metrics.fcp,
              ttfb: metrics.ttfb
            }
          })
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
      }
    }
  }, [metrics, enabled])

<<<<<<< HEAD
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Render Time: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}%</div>
      <div>FPS: {metrics.fps}</div>
      <div className="text-xs text-gray-400 mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
    // Show performance panel after 3 seconds;
const timer = setTimeout(() => setIsVisible(true), 3000);
=======
import React from 'react';

const PerformanceMonitor: React.FC = () => {
=======
'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor performance metrics
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  return null;
};

export default PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
  return null
}

export default PerformanceMonitor
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
=======
    // Monitor Core Web Vitals
    onCLS(console.log);
    onINP(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);

    // Monitor bundle loading performance
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.navigationStart
            });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  return null;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
=======
const PerformanceMonitor: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Monitor</h3>
      <div className="text-gray-300">
        <p>Performance monitoring is active.</p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
=======
    // Cleanup
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] })
    } catch (error) {
      console.warn('Performance Observer not supported:', error)
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      }))
    }

    // Log performance metrics for debugging
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Performance Metrics:', metrics)
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Don't render anything in production
  if (process.env['NODE_ENV'] === 'production') {
    return null
  }

  // Development mode - show metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={`${metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div className={`${metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}`}>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls && (
          <div className={`${metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.fcp && (
          <div className={`${metrics.fcp > 3000 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
