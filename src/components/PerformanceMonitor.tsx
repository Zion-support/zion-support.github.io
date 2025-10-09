'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tti: number | null;
}

interface PerformanceMonitorProps {
  enableReporting?: boolean;
  enableConsoleLogging?: boolean;
  enableAnalytics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableReporting = true,
  enableConsoleLogging = false,
  enableAnalytics = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tti: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    monitorCoreWebVitals();
    
    // Monitor additional performance metrics
    monitorAdditionalMetrics();
    
    // Monitor resource loading
    monitorResourceLoading();
    
    // Monitor user interactions
    monitorUserInteractions();
  }, []);

  const monitorCoreWebVitals = () => {
    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          setMetrics(prev => ({ ...prev, fcp }));
          reportMetric('FCP', fcp);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.startTime;
      setMetrics(prev => ({ ...prev, lcp }));
      reportMetric('LCP', lcp);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid }));
        reportMetric('FID', fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          reportMetric('CLS', clsValue);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  };

  const monitorAdditionalMetrics = () => {
    // Time to First Byte (TTFB)
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      reportMetric('TTFB', ttfb);
    }

    // First Meaningful Paint (FMP) - approximation
    const fmpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-meaningful-paint') {
          const fmp = entry.startTime;
          setMetrics(prev => ({ ...prev, fmp }));
          reportMetric('FMP', fmp);
        }
      }
    });
    fmpObserver.observe({ entryTypes: ['paint'] });

    // Time to Interactive (TTI) - approximation
    const ttiObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'time-to-interactive') {
          const tti = entry.startTime;
          setMetrics(prev => ({ ...prev, tti }));
          reportMetric('TTI', tti);
        }
      }
    });
    ttiObserver.observe({ entryTypes: ['measure'] });
  };

  const monitorResourceLoading = () => {
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        const loadTime = resource.responseEnd - resource.requestStart;
        
        if (loadTime > 1000) { // Log slow resources
          console.warn(`Slow resource: ${resource.name} took ${loadTime}ms`);
        }
      }
    });
    resourceObserver.observe({ entryTypes: ['resource'] });
  };

  const monitorUserInteractions = () => {
    let interactionCount = 0;
    let totalInteractionTime = 0;

    const interactionObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const interaction = entry as PerformanceEventTiming;
        interactionCount++;
        totalInteractionTime += interaction.duration;
        
        if (interaction.duration > 100) { // Log slow interactions
          console.warn(`Slow interaction: ${interaction.name} took ${interaction.duration}ms`);
        }
      }
    });
    interactionObserver.observe({ entryTypes: ['event'] });

    // Report interaction metrics on page unload
    window.addEventListener('beforeunload', () => {
      if (interactionCount > 0) {
        const avgInteractionTime = totalInteractionTime / interactionCount;
        reportMetric('Average Interaction Time', avgInteractionTime);
        reportMetric('Total Interactions', interactionCount);
      }
    });
  };

  const reportMetric = (name: string, value: number) => {
    if (enableConsoleLogging) {
      console.log(`Performance Metric - ${name}: ${value}ms`);
    }

    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value)
      });
    }

    if (enableReporting) {
      // Send to your analytics service
      sendToAnalytics(name, value);
    }
  };

  const sendToAnalytics = async (name: string, value: number) => {
    try {
      // Example: Send to your analytics endpoint
      await fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.error('Failed to send performance metric:', error);
    }
  };

  const getPerformanceScore = (): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp > 3000) score -= 30;
      else if (metrics.fcp > 1800) score -= 20;
      else if (metrics.fcp > 1000) score -= 10;
    }
    
    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1200) score -= 10;
    }
    
    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 20;
      else if (metrics.cls > 0.1) score -= 10;
    }
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();

  return (
    <div className="performance-monitor">
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono">
          <div className="font-bold mb-2">Performance Metrics</div>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
          <div className="mt-2 font-bold">
            Score: {performanceScore}/100
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
