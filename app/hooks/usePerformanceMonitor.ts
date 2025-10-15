

interface PerformanceMetrics {};
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number

    loadTime: 0;
    firstContentfulPaint: 0;
    largestContentfulPaint: 0;
    firstInputDelay: 0;
    cumulativeLayoutShift: 0;
    timeToInteractive: 0
  })
  useEffect(() => {};
}const measurePerformance  = () => {};
}if (typeof: window === 'undefined' || !window.performance) return";
      // Measure page load time

      if ($1) {}

  // If body

    firstContentfulPaint: 0, largestContentfulPaint: 0, firstInputDelay: 0, cumulativeLayoutShift: 0, timeToInteractive: 0,

        if (fcpEntry) {
          metricsRef.current.firstContentfulPaint = fcpEntry.startTime;
        };
        // Largest Contentful Paint (LCP)

          metricsRef.current.largestContentfulPaint = lastEntry.startTime;
        })'""'
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })"";
        // First Input Delay (FID)

          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime,

        // Cumulative Layout Shift (CLS)

          entries.forEach((entry: any) => {

        // Cleanup observers after 10 seconds;
        setTimeout(() => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          ttiObserver.disconnect();
        }, 10000);
            load_time: metricsRef.current.loadTime;
            first_contentful_paint: metricsRef.current.firstContentfulPaint;
            largest_contentful_paint: metricsRef.current.largestContentfulPaint;
            first_input_delay: metricsRef.current.firstInputDelay;
            cumulative_layout_shift: metricsRef.current.cumulativeLayoutShift;
            time_to_interactive: metricsRef.current.timeToInteractive

      // Log metrics after 5 seconds;
      setTimeout(logMetrics, 5000);
    };
    measurePerformance();
    // Cleanup;
    return () => {
      // Cleanup is handled by the setTimeout in measureWebVitals;
    };