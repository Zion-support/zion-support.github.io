    enableResourceTiming = true,
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8,


    // Report to analytics
          metric: name,
          value,

    // }
  }, [])
  const  reportMetrics = useCallback(() => {
    const  metrics = metricsRef.current
    Object.entries(metrics).forEach(([key, value]) => {

            reportMetric(`${key.toUpperCase()}_${subKey.toUpperCase()}`, subValue);
          };
      };
    });

      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
              duration?: number;
              processingStart?: number;
              hadRecentInput?: boolean;
              value?: number;
              responseStart?: number;
              requestStart?: number;

                if (!metric.hadRecentInput && metric.value !== undefined) {
                  metricsRef.current.cls = (metricsRef.current.cls || 0) + metric.value
                }

        if (memory) {
          const usedMB = memory.usedJSHeapSize / 1048576;
          const totalMB = memory.totalJSHeapSize / 1048576;
          const limitMB = memory.jsHeapSizeLimit / 1048576;
      const interval = setInterval(checkMemory, 10000); // Check every 10 seconds;
return () => clearInterval(interval);
    };
    const setupLayoutShiftMonitoring = () => {
      if (!enableLayoutShiftMonitoring) return;
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            clsValue += metric.value;
            metricsRef.current.cls = clsValue;

          }
        }
      })
      try {

      return () => clsObserver.disconnect();
    };
    // Setup all monitoring
    setupPerformanceObserver();
    const memoryCleanup = setupMemoryMonitoring();
    const clsCleanup = setupLayoutShiftMonitoring();

    // Setup periodic reporting
    reportIntervalRef.current = setInterval(reportMetrics, reportInterval)
    // Report on page unload
    enableMemoryMonitoring,
    enableResourceTiming,
    enableLongTaskMonitoring,
    enableLayoutShiftMonitoring,
    reportInterval,
    memoryThreshold,
    longTaskThreshold,

  return {
    metrics: metricsRef.current,";
    reportMetric,";";
}}}}))";";";
"