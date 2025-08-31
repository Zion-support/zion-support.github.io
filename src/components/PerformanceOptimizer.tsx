import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimization?: boolean;
  enableReporting?: boolean;
  reportUrl?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimization = true,
  enableReporting = true,
  reportUrl = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) return;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
        } else if (entry.entryType === 'layout-shift') {
          const layoutShift = entry as any;
          setMetrics(prev => prev ? { ...prev, cls: layoutShift.value } : null);
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
    }

    // Measure DOM and window load times
    if (document.readyState === 'complete') {
      setMetrics(prev => prev ? { ...prev, domLoad: performance.now() } : null);
    } else {
      window.addEventListener('load', () => {
        setMetrics(prev => prev ? { ...prev, windowLoad: performance.now() } : null);
      });
    }

    return () => observer.disconnect();
  }, [enableMonitoring]);

  // Performance optimization
  const optimizePerformance = useCallback(() => {
    if (!enableOptimization) return;

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });

    // Optimize fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', '');
    });

    setIsOptimized(true);
  }, [enableOptimization]);

  // Performance reporting
  const reportPerformance = useCallback(async () => {
    if (!enableReporting || !metrics) return;

    try {
      await fetch(reportUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      console.error('Failed to report performance metrics:', error);
    }
  }, [enableReporting, metrics, reportUrl]);

  // Initialize performance monitoring
  useEffect(() => {
    measurePerformance();
    optimizePerformance();
  }, [measurePerformance, optimizePerformance]);

  // Report metrics when they change
  useEffect(() => {
    if (metrics && Object.values(metrics).every(val => val > 0)) {
      reportPerformance();
    }
  }, [metrics, reportPerformance]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;

    // Core Web Vitals scoring
    if (metrics.fcp > 1800) score -= 20; // FCP should be < 1.8s
    if (metrics.lcp > 2500) score -= 20; // LCP should be < 2.5s
    if (metrics.fid > 100) score -= 15;  // FID should be < 100ms
    if (metrics.cls > 0.1) score -= 15;  // CLS should be < 0.1

    return Math.max(0, score);
  }, [metrics]);

  // Performance status
  const getPerformanceStatus = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return { status: 'Excellent', color: 'text-green-500' };
    if (score >= 70) return { status: 'Good', color: 'text-yellow-500' };
    if (score >= 50) return { status: 'Fair', color: 'text-orange-500' };
    return { status: 'Poor', color: 'text-red-500' };
  }, [getPerformanceScore]);

  if (!enableMonitoring) return null;

  return (
    <div className="performance-optimizer">
      <div className="performance-metrics">
        <h3>Performance Metrics</h3>
        {metrics && (
          <div className="metrics-grid">
            <div className="metric">
              <span className="label">FCP:</span>
              <span className="value">{metrics.fcp.toFixed(0)}ms</span>
            </div>
            <div className="metric">
              <span className="label">LCP:</span>
              <span className="value">{metrics.lcp.toFixed(0)}ms</span>
            </div>
            <div className="metric">
              <span className="label">FID:</span>
              <span className="value">{metrics.fid.toFixed(0)}ms</span>
            </div>
            <div className="metric">
              <span className="label">CLS:</span>
              <span className="value">{metrics.cls.toFixed(3)}</span>
            </div>
            <div className="metric">
              <span className="label">TTFB:</span>
              <span className="value">{metrics.ttfb.toFixed(0)}ms</span>
            </div>
          </div>
        )}
        <div className="performance-score">
          <span className="label">Score:</span>
          <span className={`value ${getPerformanceStatus().color}`}>
            {getPerformanceScore()}/100
          </span>
          <span className="status">{getPerformanceStatus().status}</span>
        </div>
        {isOptimized && (
          <div className="optimization-status">
            <span className="checkmark">✅</span> Performance optimizations applied
          </div>
        )}
      </div>
    </div>
  );
};
