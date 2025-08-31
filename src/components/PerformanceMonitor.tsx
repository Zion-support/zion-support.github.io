import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  onMetricsUpdate,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

  useEffect(() => {
    if (!enabled) return;

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        const fcp = fcpEntry.startTime;
        setMetrics(prev => ({ ...prev, fcp }));
        onMetricsUpdate?.({ ...metrics, fcp });
      }
    });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const lcp = lastEntry.startTime;
        setMetrics(prev => ({ ...prev, lcp }));
        onMetricsUpdate?.({ ...metrics, lcp });
      }
    });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const fid = entry.processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid }));
        onMetricsUpdate?.({ ...metrics, fid });
      });
    });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          onMetricsUpdate?.({ ...metrics, cls: clsValue });
        }
      });
    });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      onMetricsUpdate?.({ ...metrics, ttfb });
    }

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    // Measure First Meaningful Paint (FMP) approximation
    const measureFMP = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fmpEntry = paintEntries.find(entry => entry.name === 'first-paint');
      if (fmpEntry) {
        const fmp = fmpEntry.startTime;
        setMetrics(prev => ({ ...prev, fmp }));
        onMetricsUpdate?.({ ...metrics, fmp });
      }
    };

    // Wait for paint events
    if (document.readyState === 'complete') {
      measureFMP();
    } else {
      window.addEventListener('load', measureFMP);
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      window.removeEventListener('load', measureFMP);
    };
  }, [enabled, onMetricsUpdate]);

  // Send metrics to analytics
  useEffect(() => {
    if (enabled && metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      // Send to analytics service
      sendMetricsToAnalytics(metrics);
    }
  }, [metrics, enabled]);

  const sendMetricsToAnalytics = (metrics: PerformanceMetrics) => {
    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'Zion Tech Group',
        value: Math.round(metrics.lcp || 0),
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb
        }
      });
    }

    // Example: Send to custom analytics endpoint
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: window.location.href,
        timestamp: Date.now(),
        metrics
      })
    }).catch(console.error);
  };

  const getPerformanceScore = (): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 25;
    }
    
    // LCP scoring (0-100)
    if (metrics.lcp) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 25;
    }
    
    // FID scoring (0-100)
    if (metrics.fid) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 25;
    }
    
    // CLS scoring (0-100)
    if (metrics.cls) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 25;
    }
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  if (!showMetrics) return null;

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  return (
    <div className="fixed top-4 right-4 z-50 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white">Performance</h3>
        <div className={`px-2 py-1 rounded text-xs font-bold ${
          grade === 'A' ? 'bg-green-500 text-white' :
          grade === 'B' ? 'bg-blue-500 text-white' :
          grade === 'C' ? 'bg-yellow-500 text-white' :
          grade === 'D' ? 'bg-orange-500 text-white' :
          'bg-red-500 text-white'
        }`}>
          {grade}
        </div>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-zinc-400">FCP:</span>
          <span className="text-white">{metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">LCP:</span>
          <span className="text-white">{metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">FID:</span>
          <span className="text-white">{metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">CLS:</span>
          <span className="text-white">{metrics.cls ? metrics.cls.toFixed(3) : '...'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">TTFB:</span>
          <span className="text-white">{metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '...'}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-zinc-700">
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-400">Score:</span>
          <span className="text-sm font-medium text-white">{score}/100</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
