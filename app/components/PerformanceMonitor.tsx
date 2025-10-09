import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportingEndpoint?: string;
  sampleRate?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportingEndpoint = '/api/performance',
  sampleRate = 1.0
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
    loadTime: null,
    domContentLoaded: null,
    firstPaint: null,
    firstContentfulPaint: null
  });

  const [isSupported, setIsSupported] = useState(false);

  // Check if Performance API is supported
  useEffect(() => {
    const supported = 'performance' in window && 'PerformanceObserver' in window;
    setIsSupported(supported);
  }, []);

  // Report metrics to analytics
  const reportMetrics = useCallback(async (metricsData: PerformanceMetrics) => {
    if (!enableReporting || Math.random() > sampleRate) return;

    try {
      // Report to Google Analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metricsData.CLS !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metricsData.CLS * 1000)
          });
        }
        
        if (metricsData.INP !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'INP',
            value: Math.round(metricsData.INP)
          });
        }
        
        if (metricsData.FCP !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metricsData.FCP)
          });
        }
        
        if (metricsData.LCP !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metricsData.LCP)
          });
        }
        
        if (metricsData.TTFB !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metricsData.TTFB)
          });
        }
      }

      // Report to custom endpoint
      if (reportingEndpoint) {
        await fetch(reportingEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...metricsData,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: Date.now()
          })
        });
      }
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  }, [enableReporting, reportingEndpoint, sampleRate]);

  // Update metrics and notify parent
  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      reportMetrics(updated);
      return updated;
    });
  }, [onMetricsUpdate, reportMetrics]);

  // Measure Core Web Vitals
  useEffect(() => {
    if (!isSupported) return;

    // Cumulative Layout Shift (CLS)
    onCLS((metric) => {
      updateMetrics({ CLS: metric.value });
    });

    // Interaction to Next Paint (INP)
    onINP((metric) => {
      updateMetrics({ INP: metric.value });
    });

    // First Contentful Paint (FCP)
    onFCP((metric) => {
      updateMetrics({ FCP: metric.value });
    });

    // Largest Contentful Paint (LCP)
    onLCP((metric) => {
      updateMetrics({ LCP: metric.value });
    });

    // Time to First Byte (TTFB)
    onTTFB((metric) => {
      updateMetrics({ TTFB: metric.value });
    });
  }, [isSupported, updateMetrics]);

  // Measure additional performance metrics
  useEffect(() => {
    if (!isSupported) return;

    const measureAdditionalMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        updateMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: navigation.loadEventEnd - navigation.fetchStart,
          firstContentfulPaint: navigation.domContentLoadedEventEnd - navigation.fetchStart
        });
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measureAdditionalMetrics();
    } else {
      window.addEventListener('load', measureAdditionalMetrics);
      return () => window.removeEventListener('load', measureAdditionalMetrics);
    }
  }, [isSupported, updateMetrics]);

  // Monitor resource loading performance
  useEffect(() => {
    if (!isSupported) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Log slow resources
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [isSupported]);

  // Monitor long tasks
  useEffect(() => {
    if (!isSupported) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime
          });
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });

    return () => observer.disconnect();
  }, [isSupported]);

  // Get performance score based on metrics
  const getPerformanceScore = useCallback((): number => {
    let score = 100;
    
    // CLS scoring (0-1, lower is better)
    if (metrics.CLS !== null) {
      if (metrics.CLS > 0.25) score -= 30;
      else if (metrics.CLS > 0.1) score -= 15;
    }
    
    // INP scoring (ms, lower is better)
    if (metrics.INP !== null) {
      if (metrics.INP > 500) score -= 30;
      else if (metrics.INP > 200) score -= 15;
    }
    
    // FCP scoring (ms, lower is better)
    if (metrics.FCP !== null) {
      if (metrics.FCP > 3000) score -= 20;
      else if (metrics.FCP > 1800) score -= 10;
    }
    
    // LCP scoring (ms, lower is better)
    if (metrics.LCP !== null) {
      if (metrics.LCP > 4000) score -= 20;
      else if (metrics.LCP > 2500) score -= 10;
    }
    
    // TTFB scoring (ms, lower is better)
    if (metrics.TTFB !== null) {
      if (metrics.TTFB > 1000) score -= 10;
      else if (metrics.TTFB > 600) score -= 5;
    }
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance recommendations
  const getRecommendations = useCallback((): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.CLS !== null && metrics.CLS > 0.1) {
      recommendations.push('Consider fixing layout shifts to improve CLS score');
    }
    
    if (metrics.INP !== null && metrics.INP > 200) {
      recommendations.push('Optimize JavaScript execution to reduce INP');
    }
    
    if (metrics.FCP !== null && metrics.FCP > 1800) {
      recommendations.push('Optimize critical rendering path to improve FCP');
    }
    
    if (metrics.LCP !== null && metrics.LCP > 2500) {
      recommendations.push('Optimize largest contentful paint element');
    }
    
    if (metrics.TTFB !== null && metrics.TTFB > 600) {
      recommendations.push('Improve server response time to reduce TTFB');
    }
    
    return recommendations;
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;