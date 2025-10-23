<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95


interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const _fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const _fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const _entries = list.getEntries();
          const _lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      } catch (error) {

      }
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver(list => {
          const _entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&
              'startTime' in entry
            ) {
              const _fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({
                ...prev,
                fid: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
      } catch (error) {

<<<<<<< HEAD
      }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        let _clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const _entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&
              'value' in entry
            ) {
              const _clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      } catch (error) {

      }
    }

    // Measure Time to First Byte (TTFB)
    try {
      const _navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const _navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        memory,
      }));
    } catch (error) {

    }

    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {

        }
      });
    };
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const _resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {
       
      console.warn(
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
            );
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
          }
          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
            );
          }
          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
            );
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
        });
    } catch {
      // web-vitals not available, continue without it
    }
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const _cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
  ]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      );
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      );
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      );
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      );
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      );
    }

    return recommendations;
  }, [metrics]);

  const _recommendations = getPerformanceRecommendations();

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
=======
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AdvancedPerformanceMonitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AdvancedPerformanceMonitor solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95
          </div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
        {recommendations.length > 0 && (
          <div className='mt-2'>
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'>
              {recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default AdvancedPerformanceMonitor;
