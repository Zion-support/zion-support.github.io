'use client';

import { useEffect } from 'react';

<<<<<<< HEAD
interface PerformanceMonitorProps {}
  onPerformanceData?: (data: any) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {

interface Performance {
  getEntriesByType (type: string): PerformanceEntry[];
  now (): number;
}
interface PerformanceEntry {

interface PerformanceData {;
  domContentLoaded: number;,;
  loadComplete: number;,;
  totalLoadTime: number;,;
  firstPaint: number;,;
  firstContentfulPaint: number;,;
  resourceCount: number;,;
  memory: {;
    used: number;,;
    total: number;,;
    limit: number;,;
  } | null;
import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
import React, { useEffect, useState } from 'react' from 'react'';interface PerformanceMetrics {'
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  totalTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
>>>>>>> 2ea512582cbf5ac203ff3dc2f74e41078a1bcb65
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics: PerformanceMetrics = {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        };

<<<<<<< HEAD
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = window.performance.getEntriesByType('paint');
      const performanceData = null;
        // Memory usage (if available)
        memory: (window.performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number ;} }).memory ? {
          used: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number ;} }).memory.usedJSHeapSize;
          total: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number ;} }).memory.totalJSHeapSize;
          limit: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number ;} }).memory.jsHeapSizeLimit
        } : null;
      };

      const navigationEntries = window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart;
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart;
        // Paint timing
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime |0
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime |0
        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource').length;
// Memory usage (if available)
ursor/fix-syntax-push-and-merge-to-main-7db5
        memory: (window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.usedJSHeapSize
          total: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.totalJSHeapSize
          limit: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit
=======
        // Measure Core Web Vitals
        if ('web-vitals' in window) {
          // This would be imported from web-vitals library in a real implementation
          console.log('Core Web Vitals monitoring enabled');
        }

        // Log performance metrics
        console.group('🚀 Performance Metrics');
        console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`);
        console.log('Load Complete:', `${metrics.loadComplete.toFixed(2)}ms`);
        console.log('Total Load Time:', `${metrics.totalTime.toFixed(2)}ms`);
        console.log('First Paint:', `${metrics.firstPaint.toFixed(2)}ms`);
        console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
        console.groupEnd();

        // Send to analytics service (placeholder)
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_performance', {
            event_category: 'Performance',
            custom_map: {
              metric_1: 'dom_content_loaded',
              metric_2: 'total_load_time',
            },
            metric_1: Math.round(metrics.domContentLoaded),
            metric_2: Math.round(metrics.totalTime),
          });
        }

        // Store metrics for debugging
        (window as any).__performanceMetrics = metrics;

      } catch (error) {
        console.error('Performance monitoring error:', error);
>>>>>>> 2ea512582cbf5ac203ff3dc2f74e41078a1bcb65
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime.toFixed(2) + 'ms');
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime + 'ms');
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      });
    });

    try {
<<<<<<< HEAD
      observer.observe({ entryTypes: [;
        'paint', 'largest-contentful-paint',
        'first-input', 'layout-shift',
        'navigation'
      ] })
    } catch (e) {
      // Fallback for browsers that don&apos;t support all entry types''
      observer.observe({ entryTypes: [;
        'paint', 'largest-contentful-paint'
      ] })
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

      observer.observe({ entryTypes: ['navigation'] ;});

// Log performance data in development
      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load"
    if (document.readyState === "complete") {}
      measurePerformance();
    } else {"
      window.addEventListener("load", measurePerformance);
=======
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
>>>>>>> 2ea512582cbf5ac203ff3dc2f74e41078a1bcb65
    }

    return () => {
<<<<<<< HEAD

      observer.disconnect ();
      clear_timeout (timer);
if (typeof window ===, undefined
  ') return'    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV ===
  'development'
   const isAdmin = localStorage.getItem(
  'admin_mode') ===
  'true''    if (!isDev && !isAdmin) return'
    const observer = new PerformanceObserver((list) => {;const entries = list.getEntries()

      entries.forEach((entry) => {
        switch (entry.entryType) {
case 'paint'
  ': if (entry.name === 'first-contentful-paint
  ') {              setMetrics(prev => ({ ...prev, fcp: entry.startTime ;}))'            }
            break
          case
  'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime ;}))'            break'          case
  'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime ;}))
  break'          case'
  'layout-shift': if (!(entry as any).hadRecentInput) {
  '              setMetrics(prev => ({                ...prev, cls: (prev.cls || 0) + (entry as any).value';
              }))
            }
            break
          case
  'navigation': setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart ;}))
  break'        }})'
    })

    // Observe different types of performance entries
    try {
observer.observe({ entryTypes: [;
  'paint,  , largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })'    } catch (e) {'
  '      // Fallback for browsers that don&apos;t support all entry types''      observer.observe({ entryTypes: [';
  'paint, 'largest-contentful-paint'] })'    }
  ''
    // Show metrics after 3 seconds
    const timer = setTimeout(() => {;setIsVisible(true)
    }, 3000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null
  const getScoreColor = (value: number;, thresholds: { good: number poor: number ;}) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }
  const getScoreText = (value: number;, thresholds: { good: number poor: number ;}) => {
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.poor) return 'Needs Improvement'
    return 'Poor'
  }
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">
      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>
      <div className="space-y-2 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-600">FCP: </span>;
            <span className={getScoreColor(metrics.fcp, { good: 1800;, poor: 3000 ;})}>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800;, poor: 3000 ;})})
            </span>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex justify-between">
            <span className="text-gray-600">LCP: </span>;
            <span className={getScoreColor(metrics.lcp, { good: 2500;, poor: 4000 ;})}>
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500;, poor: 4000 ;})})
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span className="text-gray-600">FID: </span>;
            <span className={getScoreColor(metrics.fid, { good: 100;, poor: 300 ;})}>
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100;, poor: 300 ;})})
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span className="text-gray-600">CLS: </span>;
            <span className={getScoreColor(metrics.cls, { good: 0.1;, poor: 0.25 ;})}>
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1;, poor: 0.25 ;})})
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span className="text-gray-600">TTFB: </span>;
            <span className={getScoreColor(metrics.ttfb, { good: 800;, poor: 1800 ;})}>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800;, poor: 1800 ;})})
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700";
        >
          Hide
        </button>
      </div>
    </div>
  const getScoreColor = (value: number;, thresholds: { good: number poor: number ;}) => {
if (value <= thresholds.good) return 'text-green-600'
   if (value <= thresholds.poor) return
  'text-yellow-600'
   return
  'text-red-600'
 }''
  const getScoreText = (value: number;, thresholds: { good: number poor: number ;}) => {
    if (value <= thresholds.good) return
  'Good'
   if (value <= thresholds.poor) return
  'Needs Improvement'
   return
  'Poor'
 }''
  return (
    <div className='fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs'>'      <h3 className='text-sm font-semibold mb-3 text-gray-900'>Performance Metrics</h3>'      '      <div className='space-y-2 text-xs'>'        {metrics.fcp && ('          <div className='flex justify-between'>'            <span className='text-gray-600'>FCP: </span>'            <span className={getScoreColor(metrics.fcp;, { good: 1800;, poor: 3000 ;})}>'              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800;, poor: 3000 ;})})</span>
          </div>
        )}

        {metrics.lcp && (
<div className='flex justify-between'>'            <span className='text-gray-600'>LCP: </span>'            <span className={getScoreColor(metrics.lcp;, { good: 2500;, poor: 4000 ;})}>'              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500;, poor: 4000 ;})})</span>'
          </div>
        )}

        {metrics.fid && (
<div className='flex justify-between'>'            <span className='text-gray-600'>FID: </span>'            <span className={getScoreColor(metrics.fid;, { good: 100;, poor: 300 ;})}>'              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100;, poor: 300 ;})})</span>'
          </div>
        )}

        {metrics.cls && (
<div className='flex justify-between'>'            <span className='text-gray-600'>CLS: </span>'            <span className={getScoreColor(metrics.cls;, { good: 0.1;, poor: 0.25 ;})}>'              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1;, poor: 0.25 ;})})</span>'
          </div>
        )}

        {metrics.ttfb && (
<div className='flex justify-between'>'            <span className='text-gray-600'>TTFB: </span>'            <span className={getScoreColor(metrics.ttfb;, { good: 800;, poor: 1800 ;})}>'              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800;, poor: 1800 ;})})</span>'
          </div>
        )}
      </div>
<div className='mt-3 pt-2 border-t border-gray-200'>'        <button'          onClick={() => setIsVisible(false)}
          className='text-xs text-gray-500 hover: text-gray-700''        >'          Hide</button>;
      </div>
    </div>
  )
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
}, []);
  // Check condition
if (return null) {
  $2
}
  const getScoreColor = (value: number;, thresholds: { good: number; poor: number ;}) =>: any {
// Check condition
if (return 'text - green - 600) {
  $2
}
    // Check condition
if (return 'text - yellow - 600) {
  $2
}
    return 'text - red - 600;
}';
  const getScoreText = (value: number;, thresholds: { good: number; poor: number ;}) =>: any {
    // Check condition
if (return 'Good) {
  $2
}
    // Check condition
if (return 'Needs Improvement) {
  $2
}
    return 'Poor;
}';
  return (
    <div className="fixed bottom - 4 left - 4 bg - white shadow - lg rounded - lg p - 4 border z - 50 max - w-xs>      <h3 className="text - sm font - semibold mb - 3 text - gray - 900">Performance Metrics</h3>"      "      <div className="space - y-2 text - xs>        {metrics.fcp && ("          <div className="flex justify - between>            <span className="text - gray - 600">FCP: </span>"            <span className={getScoreColor (metrics.fcp;, { good: 1800;, poor: 3000 ;})}>"              {Math.round (metrics.fcp)}ms ({getScoreText (metrics.fcp, { good: 1800;, poor: 3000 ;})})</span>;
          </div>)}
        {metrics.lcp && (
<div className="flex justify - between>            <span className="text - gray - 600">LCP: </span>"            <span className={getScoreColor (metrics.lcp;, { good: 2500;, poor: 4000 ;})}>"              {Math.round (metrics.lcp)}ms ({getScoreText (metrics.lcp, { good: 2500;, poor: 4000 ;})})</span>;
          </div>)}
        {metrics.fid && (
<div className="flex justify - between>            <span className="text - gray - 600">FID: </span>"            <span className={getScoreColor (metrics.fid;, { good: 100;, poor: 300 ;})}>"              {Math.round (metrics.fid)}ms ({getScoreText (metrics.fid, { good: 100;, poor: 300 ;})})</span>;
          </div>)}
        {metrics.cls && (
<div className="flex justify - between>            <span className="text - gray - 600">CLS: </span>"            <span className={getScoreColor (metrics.cls;, { good: 0.1;, poor: 0.25 ;})}>"              {metrics.cls.to_fixed (3)} ({getScoreText (metrics.cls, { good: 0.1;, poor: 0.25 ;})})</span>;
          </div>)}
        {metrics.ttfb && (
<div className="flex justify - between>            <span className="text - gray - 600">TTFB: </span>"            <span className={getScoreColor (metrics.ttfb;, { good: 800;, poor: 1800 ;})}>"              {Math.round (metrics.ttfb)}ms ({getScoreText (metrics.ttfb, { good: 800;, poor: 1800 ;})})</span>;
          </div>)}
      </div>;
<div className="mt - 3 pt - 2 border - t border - gray - 200>        <button"          on_click={() => setIsVisible (false)}
          className="text - xs text - gray - 500 hover: text - gray - 700        >"          Hide</button>;
      </div>;
=======
      observer.disconnect();
>>>>>>> 2ea512582cbf5ac203ff3dc2f74e41078a1bcb65
      window.removeEventListener('load', measurePerformance);
    };
<<<<<<< HEAD
  }, [onPerformanceData]);
pr-12243
      return () => observer.disconnect();
      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metrics.cls = clsValue;
        if (process.env.NODE_ENV === 'production') {
          // gtag('event', 'web_vitals', {
          //   name: 'CLS';,
          //   value: Math.round(clsValue * 1000);,
          //   event_category: 'Web Vitals';
          // });
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] ;});
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }

      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime;
          }
        }
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] ;});
      } catch (e) {
        // Fallback for browsers that don't support FCP
      }

      // Monitor Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
origin/cursor/analyze-improve-and-deploy-application-347d
    }
=======
>>>>>>> 2ea512582cbf5ac203ff3dc2f74e41078a1bcb65
  }, []);

  return null; // This component doesn't render anything
}