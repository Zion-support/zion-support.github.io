
    }
  }, [options.enabled, measureMemoryUsage]);

  useEffect(() => {
    if (!isMonitoringFPS) return;

    const countFrames = () => {
      frameCountRef.current++;
      const currentTime = performance.now();

      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round(
          (frameCountRef.current * 1000) / (currentTime - lastTimeRef.current),
        );
        setMetrics((prev) => ({
          ...prev,
          fps,
        }));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, [isMonitoringFPS]);

  useEffect(() => {
    if (options.measureMemoryUsage) {
      measureMemoryUsage();
    }
  }, [measureMemoryUsage, options.measureMemoryUsage]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window === "undefined") return;

    const monitorWebVitals = () => {
      if ("performance" in window) {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setMetrics((prev) => ({
            ...prev,
            loadTime,
          }));
        }
      }
    };

    // Run monitoring after page load
    if (document.readyState === "complete") {
      monitorWebVitals();
    } else {
      window.addEventListener("load", monitorWebVitals);
    }

    return () => {
      window.removeEventListener("load", monitorWebVitals);
    };
  }, []);

  return {

