<<<<<<< HEAD:app/components/PerformanceMonitor.tsx
import React, { useEffect, useState } from 'react';

=======
'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  tbt: number;
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

interface PerformanceReport {
  metrics: PerformanceMetrics;
  score: number;
  recommendations: string[];
  timestamp: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    tbt: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [report, setReport] = useState<PerformanceReport | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    startMonitoring();
    
    return () => {
      stopMonitoring();
    };
  }, []);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    monitorCoreWebVitals();
    
    // Monitor memory usage
    monitorMemoryUsage();
    
    // Monitor performance metrics
    monitorPerformanceMetrics();
    
    // Monitor resource loading
    monitorResourceLoading();
    
    // Monitor user interactions
    monitorUserInteractions();
  }, [isMonitoring]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const monitorCoreWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
              break;
            case 'first-input':
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
              break;
            case 'layout-shift':
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                setMetrics(prev => ({ ...prev, cls: prev.cls + clsEntry.value }));
              }
              break;
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
              break;
            case 'navigation':
              const navEntry = entry as PerformanceNavigationTiming;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
              break;
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }, []);

  const monitorMemoryUsage = useCallback(() => {
    if (!('memory' in performance)) return;

    const updateMemoryMetrics = () => {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        }
      }));
    };

    updateMemoryMetrics();
    
    // Update memory metrics every 5 seconds
    const interval = setInterval(updateMemoryMetrics, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const monitorPerformanceMetrics = useCallback(() => {
    if (!('performance' in window)) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
  }, []);

  const monitorResourceLoading = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
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
        }
      });

      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource monitoring setup failed:', error);
    }
  }, []);

  const monitorUserInteractions = useCallback(() => {
    let interactionStart = 0;
    let interactionCount = 0;

    const handleInteraction = () => {
      if (interactionStart === 0) {
        interactionStart = performance.now();
      }
      interactionCount++;
    };

    const handleInteractionEnd = () => {
      if (interactionStart > 0) {
        const interactionTime = performance.now() - interactionStart;
        setMetrics(prev => ({ ...prev, tbt: interactionTime }));
        interactionStart = 0;
      }
    };

    // Monitor various user interactions
    ['click', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    // Reset interaction timer after 100ms of inactivity
    let timeoutId: NodeJS.Timeout;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleInteractionEnd, 100);
    };

    document.addEventListener('click', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('scroll', resetTimer);
    document.addEventListener('touchstart', resetTimer);
  }, []);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1500) score -= 10;

    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 30;
    else if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 30;
    else if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.05) score -= 10;

    // FCP scoring (0-100)
    if (metrics.fcp > 3000) score -= 20;
    else if (metrics.fcp > 1800) score -= 15;
    else if (metrics.fcp > 1000) score -= 10;

    // TTFB scoring (0-100)
    if (metrics.ttfb > 800) score -= 20;
    else if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 400) score -= 10;

    return Math.max(0, score);
  }, []);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];

    if (metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical resource loading');
    }

    if (metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    if (metrics.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - add dimensions to images and avoid dynamic content insertion');
    }

    if (metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint - inline critical CSS and optimize font loading');
    }

    if (metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte - optimize server response time and use CDN');
    }

    if (metrics.memory && metrics.memory.usedJSHeapSize > metrics.memory.jsHeapSizeLimit * 0.8) {
      recommendations.push('Optimize memory usage - check for memory leaks and optimize JavaScript');
    }

    return recommendations;
  }, []);

  const generateReport = useCallback(() => {
    const score = calculatePerformanceScore(metrics);
    const recommendations = generateRecommendations(metrics);

    const report: PerformanceReport = {
      metrics,
      score,
      recommendations,
      timestamp: Date.now()
    };

    setReport(report);
    return report;
  }, [metrics, calculatePerformanceScore, generateRecommendations]);

  const exportReport = useCallback(() => {
    const report = generateReport();
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `performance-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }, [generateReport]);

  // Generate report when metrics change
  useEffect(() => {
    if (metrics.lcp > 0 || metrics.fcp > 0) {
      generateReport();
    }
  }, [metrics, generateReport]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && report) {
      console.log('Performance Report:', report);
    }
  }, [report]);

  return (
    <div className="performance-monitor">
      {/* Performance metrics are monitored in the background */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs">
          <div className="font-bold mb-2">Performance Monitor</div>
          <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
          <div>FID: {metrics.fid.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls.toFixed(3)}</div>
          <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
          <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          {metrics.memory && (
            <div>Memory: {(metrics.memory.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB</div>
          )}
          {report && (
            <div className="mt-2">
              <div>Score: {report.score}/100</div>
              <button
                onClick={exportReport}
                className="mt-1 px-2 py-1 bg-blue-500 text-white rounded text-xs"
              >
                Export Report
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;