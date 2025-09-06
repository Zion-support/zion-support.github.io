<<<<<<< HEAD

export default function PerformanceMonitor() {
=======
import React from 'react';
export default function PerformanceMonitor() {
  return (
    <div className="performance-monitor">
      <p>Performance Monitor</p>
    </div>
  );
}
        }
      }
;
    },;
,;
    // Initial tracking,;
    trackPageLoad(),;
    trackMemory(),;
    trackNetwork(),;
,;
    // Set up periodic tracking,;
    const interval = setInterval(() => {,;
      trackMemory(),;
      trackNetwork();
    }, 10000),;
,;
    // Track online/offline status,;
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnlin: e: true })),;
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnlin: e: false })),;
,;
    window.addEventListener('online', handleOnline),;
    window.addEventListener('offline', handleOffline),;
,;
    return () => {,;
      clearInterval(interval),;
      window.removeEventListener('online', handleOnline),;
      window.removeEventListener('offline', handleOffline);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;

const PerformanceMonitor: React.FC = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="performance-monitor">
      {/* Performance monitoring component */}
    </div>
  );
<<<<<<< HEAD
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  logToConsole = true,
  sendToAnalytics = false
}) => {
  const { measurePerformance, logPerformance } = usePerformance();

  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-measure performance when page becomes visible
        setTimeout(logPerformance, 1000);
      }
    };

    const handleBeforeUnload = () => {
      // Log final performance metrics before page unload
      logPerformance();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, logPerformance]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (logToConsole) {
          console.log(`Performance Entry: ${entry.name}`, {
            duration: entry.duration,
            startTime: entry.startTime,
            entryType: entry.entryType
          });
        }

        if (sendToAnalytics) {
          // Send to analytics service
          // analytics.track('performance_entry', {
          //   name: entry.name,
          //   duration: entry.duration,
          //   startTime: entry.startTime,
          //   entryType: entry.entryType
          // });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;

=======
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
