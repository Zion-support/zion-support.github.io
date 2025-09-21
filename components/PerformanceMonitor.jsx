import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isVisible: false
  });

  useEffect(() => {
    // Monitor performance metrics
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        // Memory usage (if available)
        const memoryUsage = performance.memory ? 
          Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0;

        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime),
          memoryUsage,
          isVisible: true
        }));
      }
    };

    // Measure initial load
    measurePerformance();

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Track page visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setMetrics(prev => ({ ...prev, isVisible: false }));
      } else {
        setMetrics(prev => ({ ...prev, isVisible: true }));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track user interactions
  useEffect(() => {
    const trackInteractions = (event) => {
      const interactionData = {
        type: event.type,
        target: event.target.tagName,
        timestamp: Date.now(),
        url: window.location.pathname
      };

      // Send to analytics (placeholder)
      console.log('User interaction:', interactionData);
    };

    const events = ['click', 'scroll', 'keydown', 'focus'];
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteractions, { passive: true });
    });

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteractions);
      });
    };
  }, []);

  // Real-time performance monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.performance) {
        const now = performance.now();
        setMetrics(prev => ({
          ...prev,
          renderTime: Math.round(now)
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Send performance data to analytics endpoint
  useEffect(() => {
    if (metrics.loadTime > 0) {
      const performanceData = {
        loadTime: metrics.loadTime,
        memoryUsage: metrics.memoryUsage,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
      };

      // Send to analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(performanceData)
      }).catch(error => {
        console.log('Analytics endpoint not available:', error);
      });
    }
  }, [metrics.loadTime]);

  return (
    <div className="performance-monitor">
      {/* This component doesn't render UI, it just monitors performance */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          Load: {metrics.loadTime}ms | Memory: {metrics.memoryUsage}MB | Visible: {metrics.isVisible ? 'Yes' : 'No'}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;