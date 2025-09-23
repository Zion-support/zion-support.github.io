'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  memory?: number
  connection?: string
  userAgent?: string
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number }
  lcp: { good: number; needsImprovement: number }
  fid: { good: number; needsImprovement: number }
  cls: { good: number; needsImprovement: number }
  ttfb: { good: number; needsImprovement: number }
}

const thresholds: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 }
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const performanceMetrics: PerformanceMetrics = {
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection?.effectiveType || 'unknown'
    }

    // Memory API (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      performanceMetrics.memory = memory.usedJSHeapSize / 1024 / 1024 // MB
    }

    // Enhanced FCP observer
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          performanceMetrics.fcp = entry.startTime
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Enhanced LCP observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      performanceMetrics.lcp = lastEntry.startTime
    })

    // First Input Delay (FID) - Note: FID is deprecated, using INP instead
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any
        if (fidEntry.processingStart) {
          performanceMetrics.fid = fidEntry.processingStart - fidEntry.startTime
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Enhanced CLS observer
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          performanceMetrics.cls = clsValue
        }
        setMetrics(prev => ({
          ...prev,
          cls: clsValue
        }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({
          ...prev,
          ttfb
        }));
      }
    };

    // Time to First Byte (TTFB)
    const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (ttfbEntry) {
      performanceMetrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
    }

    // Enhanced logging with performance assessment
    const logMetrics = () => {
      const assessment = {
        FCP: {
          value: `${performanceMetrics.fcp?.toFixed(2)}ms`,
          rating: performanceMetrics.fcp ? 
            (performanceMetrics.fcp <= thresholds.fcp.good ? 'good' : 
             performanceMetrics.fcp <= thresholds.fcp.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        LCP: {
          value: `${performanceMetrics.lcp?.toFixed(2)}ms`,
          rating: performanceMetrics.lcp ? 
            (performanceMetrics.lcp <= thresholds.lcp.good ? 'good' : 
             performanceMetrics.lcp <= thresholds.lcp.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        FID: {
          value: `${performanceMetrics.fid?.toFixed(2)}ms`,
          rating: performanceMetrics.fid ? 
            (performanceMetrics.fid <= thresholds.fid.good ? 'good' : 
             performanceMetrics.fid <= thresholds.fid.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        CLS: {
          value: performanceMetrics.cls?.toFixed(4),
          rating: performanceMetrics.cls !== undefined ? 
            (performanceMetrics.cls <= thresholds.cls.good ? 'good' : 
             performanceMetrics.cls <= thresholds.cls.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        },
        TTFB: {
          value: `${performanceMetrics.ttfb?.toFixed(2)}ms`,
          rating: performanceMetrics.ttfb ? 
            (performanceMetrics.ttfb <= thresholds.ttfb.good ? 'good' : 
             performanceMetrics.ttfb <= thresholds.ttfb.needsImprovement ? 'needs-improvement' : 'poor') : 'unknown'
        }
      }

      console.group('🚀 Performance Metrics')
      console.log('Core Web Vitals:', assessment)
      console.log('Memory Usage:', performanceMetrics.memory ? `${performanceMetrics.memory.toFixed(2)} MB` : 'N/A')
      console.log('Connection:', performanceMetrics.connection)
      console.log('User Agent:', performanceMetrics.userAgent)
      console.groupEnd()

      setMetrics(performanceMetrics)

      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Send comprehensive metrics to analytics
        const analyticsData = {
          ...assessment,
          memory: performanceMetrics.memory,
          connection: performanceMetrics.connection,
          timestamp: Date.now(),
          url: window.location.href
        }
        
        // Example analytics integration
        // analytics.track('performance_metrics', analyticsData)
        
        // Send to external monitoring service
        // fetch('/api/analytics/performance', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(analyticsData)
        // }).catch(console.error)
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    measureTTI();

    // Send metrics to analytics
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            fcp: Math.round(metrics.fcp),
            lcp: Math.round(metrics.lcp),
            fid: Math.round(metrics.fid),
            cls: Math.round(metrics.cls * 1000) / 1000,
            ttfb: Math.round(metrics.ttfb),
            tti: Math.round(metrics.tti),
          }
        });
      }
    };

    // Send metrics after 5 seconds
    const timer = setTimeout(sendMetrics, 5000);

    // Monitor for performance regressions
    const monitorPerformance = () => {
      if (performanceMetrics.lcp && performanceMetrics.lcp > thresholds.lcp.needsImprovement) {
        console.warn('⚠️ LCP performance regression detected:', performanceMetrics.lcp)
      }
      if (performanceMetrics.cls && performanceMetrics.cls > thresholds.cls.needsImprovement) {
        console.warn('⚠️ CLS performance regression detected:', performanceMetrics.cls)
      }
    }

    setTimeout(monitorPerformance, 2000)

    return () => {
      clearTimeout(timer);
    };
  }, [metrics]);

  if (!isVisible) return null;

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
      <div className="font-bold mb-2 text-yellow-400">Performance Monitor</div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {(metrics.cls * 1000 / 1000).toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={getScoreColor(metrics.tti, { good: 3800, needsImprovement: 7300 })}>
            {Math.round(metrics.tti)}ms ({getScoreText(metrics.tti, { good: 3800, needsImprovement: 7300 })})
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Core Web Vitals monitoring
      </div>
    </div>
  );
};

export default PerformanceMonitor;
