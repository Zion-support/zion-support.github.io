import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// gtag is already declared globally in src/types/global.d.ts

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  reportToAnalytics?: boolean;
  logToConsole?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  reportToAnalytics = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    const sendToAnalytics = (metric: { name: string; id: string; value: number }) => {
      if (logToConsole) {
        console.log('Performance Metric:', metric);
      }

      if (reportToAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as Window & { gtag: (...args: unknown[]) => void }).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Store metrics in state for debugging
    onCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
    onINP((metric) => setMetrics(prev => ({ ...prev, inp: metric.value })));
    onFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
    onLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
    onTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));

    // Monitor resource loading performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
            
            if (logToConsole) {
              console.log('Navigation Performance:', {
                loadTime,
                domContentLoaded,
                totalTime: navEntry.loadEventEnd - navEntry.fetchStart
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, [reportToAnalytics, logToConsole]);

  // Development mode: show performance metrics
  if (process.env.NODE_ENV === 'development' && logToConsole) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono z-50">
        <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        <div>INP: {metrics.inp?.toFixed(1) || 'N/A'}ms</div>
        <div>FCP: {metrics.fcp?.toFixed(1) || 'N/A'}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(1) || 'N/A'}ms</div>
        <div>TTFB: {metrics.ttfb?.toFixed(1) || 'N/A'}ms</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;