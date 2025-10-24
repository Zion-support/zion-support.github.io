'use client';

            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          newMetrics.cumulativeLayoutShift = clsValue;
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const longTasks = entries.filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50);
          if (longTasks.length === 0) {
            newMetrics.timeToInteractive = performance.now();
        ttiObserver.observe({ entryTypes: ['longtask'] });

        // Total Blocking Time (TBT) - approximation
        const tbtObserver = new PerformanceObserver((list) => {
          const blockingTime = entries
            .filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50)
            .reduce((total, entry: PerformanceEntry) => total + ((entry as PerformanceEntry & { duration: number }).duration - 50), 0);
          newMetrics.totalBlockingTime = blockingTime;
        tbtObserver.observe({ entryTypes: ['longtask'] });

      // Update metrics state
      setMetrics(prevMetrics => ({ ...prevMetrics, ...newMetrics }));

      // Call callback if provided
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);

      // Log to console if enabled
      if (logToConsole) {
        console.log('Performance Metrics Updated:', newMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
  }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole]);

  // Service Worker registration for performance monitoring
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((registrationError) => {
          console.log('Service Worker registration failed:', registrationError);
  }, []);

  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}</div>
          <div>FCP: {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}</div>
          <div>FID: {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}</div>
          <div>TTI: {metrics.timeToInteractive ? `${metrics.timeToInteractive.toFixed(2)}ms` : 'N/A'}</div>
          <div>TBT: {metrics.totalBlockingTime ? `${metrics.totalBlockingTime.toFixed(2)}ms` : 'N/A'}</div>
        </div>
    );

  return null;

// Global performance monitoring utilities
export const performanceUtils = {
  // Measure custom performance marks
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
  },

  // Measure time between marks
  measure: (name: string, startMark: string, endMark?: string) => {
      if (endMark) {
        performance.measure(name, startMark, endMark);
        performance.measure(name, startMark);

  // Get performance entries
  getEntries: (type?: string) => {
      return type ? performance.getEntriesByType(type) : performance.getEntries();
    return [];

  // Clear performance entries
  clearEntries: (type?: string) => {
      if (type) {
        performance.clearMeasures(type);
        performance.clearMarks(type);
        performance.clearMeasures();
        performance.clearMarks();

// Google Analytics integration for performance tracking
export const trackPerformanceToGA = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      event_label: 'Core Web Vitals',
      custom_map: {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        time_to_interactive: metrics.timeToInteractive,
        total_blocking_time: metrics.totalBlockingTime

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;


