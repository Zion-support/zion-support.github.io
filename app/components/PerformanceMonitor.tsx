import React from 'react';
'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
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
  });
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export default function PerformanceMonitor() {

  useEffect(() => {
      if (navigation) {
        console.log('Page load metrics:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    };

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
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
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
    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

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
      }
    };

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
      }
    }
  }, [metrics, enabled])

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

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
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
import React from 'react';

const PerformanceMonitor: React.FC = () => {
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

  return null;
};

export default PerformanceMonitor;
  return null
}

export default PerformanceMonitor
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
      window.removeEventListener('scroll', trackScroll);
      clearTimeout(scrollTimeout);
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
  const [isVisible, setIsVisible] = useState(false);

      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
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
};

export default PerformanceMonitor;
};

export default PerformanceMonitor;
