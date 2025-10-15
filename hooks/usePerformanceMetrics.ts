
      return;
    };
    setIsSupported(true);

      entries.forEach(entry => {
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({
            ...prev,
            fid: entry.processingStart! - entry.startTime;

    // Cumulative Layout Shift;
    let: clsValue = 0;
    new PerformanceObserver(list => {)

      entries.forEach(entry => {
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(prev => ({
            ...prev,
            ttfb: entry.responseStart! - entry.requestStart!;
  
  }));

