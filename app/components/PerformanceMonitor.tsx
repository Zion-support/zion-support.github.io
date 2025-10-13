<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useAnalytics } from './EnhancedAnalytics';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa

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
=======
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showInProduction = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
  });
<<<<<<< HEAD
<<<<<<< HEAD

  const [isVisible, setIsVisible] = useState(false);
=======
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680

export default function PerformanceMonitor() {
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
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
=======
'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    navigationType: 'navigate'
  });

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env['NODE_ENV'] === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        }
        if (entry.entryType === 'first-input') {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        }
        if (entry.entryType === 'layout-shift') {
          updateMetrics({ cls: (entry as any).value });
        }
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          updateMetrics({ fcp: entry.startTime });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
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

<<<<<<< HEAD
    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
=======
    // Track LCP (Largest Contentful Paint)
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'lcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FID (First Input Delay) - now INP (Interaction to Next Paint)
    onINP((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'inp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track CLS (Cumulative Layout Shift)
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'cls',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FCP (First Contentful Paint)
    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'fcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track TTFB (Time to First Byte)
    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'ttfb',
        value: metric.value,
        rating: metric.rating
      });
    });
  }, [analytics]);

  // Track page load time
  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      analytics.trackEvent('page_load_time', {
        loadTime,
        url: window.location.href
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [analytics]);

  // Track resource loading performance
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          analytics.trackEvent('resource_load', {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            size: resourceEntry.transferSize,
            type: resourceEntry.initiatorType
          });
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
    };

<<<<<<< HEAD
    // Initial measurement
    measurePerformance();

<<<<<<< HEAD
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
=======
    // Cleanup
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
  }, []);

<<<<<<< HEAD
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Render Time: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}%</div>
      <div>FPS: {metrics.fps}</div>
      <div className="text-xs text-gray-400 mt-2">
=======
  const formatMetric = useCallback((value: number | undefined, suffix = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    return `${value.toFixed(0)}${suffix}`;
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Web Vitals
    if ('web-vitals' in window) {
      // This would be populated by the WebVitalsTracker component
      // For now, we'll use placeholder values
    }

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {
    updateMetrics();
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [updateMetrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-xl border border-cyan-500/20 rounded-lg shadow-2xl p-4 min-w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-cyan-400">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">INP:</span>
          <span className={getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}>
            {formatMetric(metrics.interactionToNextPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
            {formatMetric(metrics.cumulativeLayoutShift, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
<<<<<<< HEAD
=======
    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] 
    });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        navigationType: navigationEntry.type
      });
    }

    return () => observer.disconnect();
  }, []);

  // Only show in development
  if (process.env['NODE_ENV'] !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 text-xs font-mono z-50">
      <h4 className="text-cyan-400 font-semibold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>LCP: <span className="text-green-400">{metrics.lcp.toFixed(2)}ms</span></div>
        <div>FID: <span className="text-green-400">{metrics.fid.toFixed(2)}ms</span></div>
        <div>CLS: <span className="text-green-400">{metrics.cls.toFixed(3)}</span></div>
        <div>FCP: <span className="text-green-400">{metrics.fcp.toFixed(2)}ms</span></div>
        <div>TTFB: <span className="text-green-400">{metrics.ttfb.toFixed(2)}ms</span></div>
        <div>Type: <span className="text-blue-400">{metrics.navigationType}</span></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0acf
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
<<<<<<< HEAD
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
=======
    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [analytics]);

  // Track navigation timing
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      analytics.trackEvent('navigation_timing', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart,
        redirect: navigation.redirectEnd - navigation.redirectStart,
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart
      });
    }
  }, [analytics]);

  // Track memory usage (if available)
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      analytics.trackEvent('memory_usage', {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    }
  }, [analytics]);

  // Track connection information
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      analytics.trackEvent('connection_info', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });
    }
  }, [analytics]);

  // Track viewport changes
  useEffect(() => {
    const trackViewport = () => {
      analytics.trackEvent('viewport_change', {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio
      });
    };

    window.addEventListener('resize', trackViewport);
    trackViewport(); // Initial measurement
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa

    return () => window.removeEventListener('resize', trackViewport);
  }, [analytics]);

  // Track scroll performance
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const trackScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        analytics.trackEvent('scroll_performance', {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          documentHeight: document.documentElement.scrollHeight,
          viewportHeight: window.innerHeight
        });
      }, 100);
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => {
<<<<<<< HEAD
      observer.disconnect();
=======
      window.removeEventListener('scroll', trackScroll);
      clearTimeout(scrollTimeout);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
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
=======
  const [isVisible, setIsVisible] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env['NODE_ENV'] !== 'development' && !showInProduction) {
      return;
    }

    const updateMetrics = () => {
      // Get performance metrics from the browser
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
      
      setMetrics({
        lcp: lcp ? lcp.startTime : null,
        fid: null, // FID requires user interaction
        cls: null, // CLS requires more complex calculation
        fcp: fcp ? fcp.startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null
      });
    };

    // Update metrics after page load
    const timer = setTimeout(updateMetrics, 1000);
    
    // Show monitor after 2 seconds
    const visibilityTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Clock className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-2xl z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">LCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">TTFB</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FID</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">CLS</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Poor</span>
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
      </div>
    </div>
  );
=======
  // Track errors
  useEffect(() => {
    const trackError = (event: ErrorEvent) => {
      analytics.trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.toString()
      });
    };

    const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackEvent('unhandled_promise_rejection', {
        reason: event.reason?.toString()
      });
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackUnhandledRejection);

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackUnhandledRejection);
    };
  }, [analytics]);

  // Return null as this is a monitoring component
  return null;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
};

export default PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
