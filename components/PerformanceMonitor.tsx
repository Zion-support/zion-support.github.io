import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as any; // Type assertion for FID-specific properties
          if (fidEntry.processingStart && fidEntry.startTime) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const clsEntry = entry as any; // Type assertion for CLS-specific properties
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }

      // First Meaningful Paint (FMP) - approximation
      const fmpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
        if (fmpEntry) {
          setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
        }
      });
      fmpObserver.observe({ entryTypes: ['paint'] });

      // Send metrics to analytics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          sendMetricsToAnalytics();
        }, 2000);
      });
    };

    const sendMetricsToAnalytics = () => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb,
            fmp: metrics.fmp
          }
        });
      }

      // Log to console for debugging
      console.log('Performance Metrics:', metrics);
    };

    measurePerformance();

    // Cleanup observers
    return () => {
      // PerformanceObserver cleanup is handled automatically
    };
  }, [metrics]);

  // Performance optimization suggestions
  const getPerformanceSuggestions = () => {
    const suggestions = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Consider optimizing critical CSS and reducing render-blocking resources.');
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and consider lazy loading.');
    }

    if (metrics.fid && metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Consider code splitting and reducing JavaScript execution time.');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure images and ads have defined dimensions.');
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Consider server-side optimizations and CDN usage.');
    }

    return suggestions;
  };

  // Only show suggestions in development
  if (process.env.NODE_ENV === 'development') {
    const suggestions = getPerformanceSuggestions();
    
    if (suggestions.length > 0) {
      return (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded max-w-sm">
          <h4 className="font-bold mb-2">Performance Suggestions:</h4>
          <ul className="text-sm space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index}>• {suggestion}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return null;
};

export default PerformanceMonitor;