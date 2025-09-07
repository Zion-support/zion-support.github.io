const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      });

    }
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported }