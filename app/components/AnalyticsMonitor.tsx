'use client';
;}
import React, { useEffect, useCallback, useState } from 'react';

interface AnalyticsEvent {,
  name: string;
  properties?: Record<string, any>;
  timestamp: number
,
interface PerformanceMetrics {,
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
,
interface AnalyticsMonitorProps {,
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableRealTimeMonitoring?: boolean;
  gaTrackingId?: string
;}
const AnalyticsMonitor: React.FC<AnalyticsMonitorProps> = ({,
  enableGoogleAnalytics = true
  enablePerformanceMonitoring = true
  enableErrorTracking = true;
  enableUserBehaviorTracking = true;
  enableRealTimeMonitoring = true;
  gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',;
}) => {
const [_events, setEvents] = useState<AnalyticsEvent[]>([]);
const [_performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null);

  // Initialize Google Analytics;}
  const initializeGoogleAnalytics = useCallback(() => {,;
    if (!enableGoogleAnalytics || !gaTrackingId || typeof window === 'undefined') return;

    // Load Google Analytics script;}
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', gaTrackingId, {,
      page_title: document.title
      page_location: window.location.href,;
    });
  }, [enableGoogleAnalytics, gaTrackingId]);

  // Track custom events;}
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
const event: AnalyticsEvent = {,;
      name: eventName;
      properties;
      timestamp: Date.now(),;
    };

    setEvents(prev => [...prev, event]);

    // Send to Google Analytics
    if (enableGoogleAnalytics && window.gtag) {,
      window.gtag('event', eventName, properties)

    // Send to custom analytics endpoint
    if (enableUserBehaviorTracking) {,
      fetch('/api/analytics', {,
        method: 'POST'
        headers: {
          'Content-Type': 'application/json',
        body: JSON.stringify(event),;
      }).catch(console.error)
  }, [enableGoogleAnalytics, enableUserBehaviorTracking]);

  // Performance monitoring;}
  const measurePerformance = useCallback(() => {,;
    if (!enablePerformanceMonitoring || typeof window === 'undefined') return;
;}
    const metrics: Partial<PerformanceMetrics> = {};

    // Measure Core Web Vitals;}
    const observer = new PerformanceObserver((list) => {,
      list.getEntries().forEach((entry) => {,
        if (entry.entryType === 'largest-contentful-paint') {,
          metrics.lcp = entry.startTime
        if (entry.entryType === 'first-input') {,
          metrics.fid = (entry as any).processingStart - entry.startTime;
        if (entry.entryType === 'layout-shift') {,;
          metrics.cls = (entry as any).value;
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure FCP;}
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {,
      metrics.fcp = fcpEntry.startTime

    // Measure TTFB;}
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {,
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart

    // Update metrics after a delay to allow all measurements
    setTimeout(() => {,
      setPerformanceMetrics(metrics as PerformanceMetrics);
      
      // Track performance metrics
      trackEvent('performance_metrics', metrics);
    }, 2000);
  }, [enablePerformanceMonitoring, trackEvent]);

  // Error tracking;}
  const setupErrorTracking = useCallback(() => {,;
    if (!enableErrorTracking || typeof window === 'undefined') return;

    // Track unhandled errors
    window.addEventListener('error', (event) => {,
      trackEvent('javascript_error', {,
        message: event.message
        filename: event.filename
        lineno: event.lineno
        colno: event.colno
        stack: event.error?.stack,;
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {,
      trackEvent('unhandled_promise_rejection', {,
        reason: event.reason
        stack: event.reason?.stack,;
      });
    });

    // Track resource loading errors
    window.addEventListener('error', (event) => {,
      if (event.target !== window) {,
        trackEvent('resource_error', {,
          type: (event.target as any).tagName
          src: (event.target as any).src || (event.target as any).href,;
        })
    }, true);
  }, [enableErrorTracking, trackEvent]);

  // User behavior tracking;}
  const setupUserBehaviorTracking = useCallback(() => {,;
    if (!enableUserBehaviorTracking || typeof window === 'undefined') return;

    // Track page views;}
    const trackPageView = () => {,
      trackEvent('page_view', {,;
        url: window.location.href;
        title: document.title;
        referrer: document.referrer,;
      });
    };

    // Track clicks;}
    const trackClick = (event: MouseEvent) => {;
const target = event.target as HTMLElement;
      trackEvent('click', {,
        element: target.tagName
        id: target.id,;,}
        className: target.className
        text: target.textContent?.slice(0, 100),;
      });
    };

    // Track form submissions;}
    const trackFormSubmit = (event: Event) => {;
const form = event.target as HTMLFormElement;
      trackEvent('form_submit', {,
        formId: form.id
        formClass: form.className
        action: form.action,;
      });
    };

    // Track scroll depth;}
    let maxScrollDepth = 0;
const trackScroll = () => {;
const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {,
        maxScrollDepth = scrollDepth;
        trackEvent('scroll_depth', { depth: scrollDepth })
    };

    // Add event listeners
    window.addEventListener('load', trackPageView);
    window.addEventListener('popstate', trackPageView);
    document.addEventListener('click', trackClick);
    document.addEventListener('submit', trackFormSubmit);
    window.addEventListener('scroll', trackScroll, { passive: true })
return () => {,;
      window.removeEventListener('load', trackPageView);
      window.removeEventListener('popstate', trackPageView);
      document.removeEventListener('click', trackClick);
      document.removeEventListener('submit', trackFormSubmit);
      window.removeEventListener('scroll', trackScroll);
    };
  }, [enableUserBehaviorTracking, trackEvent]);

  // Real-time monitoring;}
  const setupRealTimeMonitoring = useCallback(() => {,;
    if (!enableRealTimeMonitoring || typeof window === 'undefined') return;

    // Monitor memory usage;}
    const monitorMemory = () => {,;
      if ('memory' in performance) {;
const memory = (performance as any).memory;
        trackEvent('memory_usage', {,
          used: Math.round(memory.usedJSHeapSize / 1048576)
          total: Math.round(memory.totalJSHeapSize / 1048576)
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),;
        })
    };

    // Monitor network status;}
    const monitorNetwork = () => {,;
      trackEvent('network_status', {,;
        online: navigator.onLine;
        connectionType: (navigator as any).connection?.effectiveType || 'unknown',;
      });
    };

    // Set up monitoring intervals;}
    const memoryInterval = setInterval(monitorMemory, 30000); // Every 30 seconds;}
    const networkInterval = setInterval(monitorNetwork, 60000); // Every minute

    // Monitor visibility changes;}
    const handleVisibilityChange = () => {,;
      trackEvent('visibility_change', {,;
        hidden: document.hidden;
        visibilityState: document.visibilityState,;
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange)
return () => {,;
      clearInterval(memoryInterval);
      clearInterval(networkInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enableRealTimeMonitoring, trackEvent]);

  useEffect(() => {,
    initializeGoogleAnalytics();
    measurePerformance();
    setupErrorTracking();}
    const cleanupBehavior = setupUserBehaviorTracking();
const cleanupRealTime = setupRealTimeMonitoring();
return () => {,;
      cleanupBehavior?.();
      cleanupRealTime?.();
    };
  }, [initializeGoogleAnalytics, measurePerformance, setupErrorTracking, setupUserBehaviorTracking, setupRealTimeMonitoring]);

  // Return null as this is a utility component
  return null;
};
;}

export;
export default AnalyticsMonitor;