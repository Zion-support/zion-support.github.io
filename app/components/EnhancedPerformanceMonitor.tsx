import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    fcp: number;
    lcp: number;
    cls: number;
    fid: number;
  };
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate,
  threshold = {
    fcp: 1500,
    lcp: 2500,
    cls: 0.1,
    fid: 100
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint > threshold.fcp) {
      score -= Math.min(30, (metrics.firstContentfulPaint - threshold.fcp) / 100);
    }
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint > threshold.lcp) {
      score -= Math.min(30, (metrics.largestContentfulPaint - threshold.lcp) / 100);
    }
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift > threshold.cls) {
      score -= Math.min(20, metrics.cumulativeLayoutShift * 100);
    }
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay > threshold.fid) {
      score -= Math.min(20, (metrics.firstInputDelay - threshold.fid) / 10);
    }
    
    return Math.max(0, Math.round(score));
  }, [threshold]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = lcpEntries[lcpEntries.length - 1];
      
      // Calculate load time
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Calculate Time to Interactive (TTI) - simplified
      const tti = navigation.domContentLoadedEventEnd - navigation.navigationStart;
      
      // Calculate Total Blocking Time (TBT) - simplified
      const tbt = navigation.loadEventEnd - navigation.domContentLoadedEventEnd;
      
      // Calculate Speed Index (simplified)
      const speedIndex = fcp ? fcp.startTime : 0;
      
      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Would need CLS observer
        firstInputDelay: 0, // Would need FID observer
        timeToInteractive: tti,
        totalBlockingTime: tbt,
        speedIndex
      };
      
      setMetrics(performanceMetrics);
      
      const score = calculatePerformanceScore(performanceMetrics);
      setPerformanceScore(score);
      setIsOptimized(score >= 80);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(performanceMetrics);
      }
      
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('🚀 Performance Metrics:', {
          ...performanceMetrics,
          score,
          isOptimized: score >= 80
        });
      }
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [calculatePerformanceScore, onMetricsUpdate]);

  const measureCoreWebVitals = useCallback(() => {
    // Measure FCP
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp && metrics) {
            const updatedMetrics = { ...metrics, firstContentfulPaint: fcp.startTime };
            setMetrics(updatedMetrics);
            const score = calculatePerformanceScore(updatedMetrics);
            setPerformanceScore(score);
            setIsOptimized(score >= 80);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        
        // Measure LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp && metrics) {
            const updatedMetrics = { ...metrics, largestContentfulPaint: lcp.startTime };
            setMetrics(updatedMetrics);
            const score = calculatePerformanceScore(updatedMetrics);
            setPerformanceScore(score);
            setIsOptimized(score >= 80);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Measure CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          if (metrics) {
            const updatedMetrics = { ...metrics, cumulativeLayoutShift: clsValue };
            setMetrics(updatedMetrics);
            const score = calculatePerformanceScore(updatedMetrics);
            setPerformanceScore(score);
            setIsOptimized(score >= 80);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.error('Error setting up Core Web Vitals observers:', error);
      }
    }
  }, [metrics, calculatePerformanceScore]);

  useEffect(() => {
    // Initial performance measurement
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Set up Core Web Vitals monitoring
    const cleanup = measureCoreWebVitals();

    // Real-time monitoring
    let intervalId: NodeJS.Timeout | null = null;
    if (enableRealTimeMonitoring) {
      intervalId = setInterval(measurePerformance, 5000);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, [measurePerformance, measureCoreWebVitals, enableRealTimeMonitoring]);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/og-image.jpg', as: 'image' },
        { href: '/logo.png', as: 'image' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.as === 'style') {
          link.onload = () => {
            link.rel = 'stylesheet';
          };
        }
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add error handling
        img.onerror = () => {
          img.style.display = 'none';
        };
      });
    };

    optimizeImages();
  }, []);

  // Don't render anything visible
  return null;
};

export default EnhancedPerformanceMonitor;