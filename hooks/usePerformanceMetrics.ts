
      const paintEntries = window && window.performance.getEntriesByType("paint");

      const fcp = paintEntries && paintEntries.find(
        (entry) => entry && entry.name === "first-contentful-paint",
      );
      const lcpEntries = window && window.performance.getEntriesByType(
        "largest-contentful-paint",
      );
      const lcp = lcpEntries[0] as PerformanceEntry;

      const clsEntries = window && window.performance.getEntriesByType("layout-shift");
      const cls = clsEntries && clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      }, 0);

      const fidEntries = window && window.performance.getEntriesByType("first-input");

      const fid = fidEntries[0] as PerformanceEventTiming;
      setMetrics({

        loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp && fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp && lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime : 0,

      });
    }


