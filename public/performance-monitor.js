// Performance monitoring script,
(function() {,
  'use strict';
  // Monitor Core Web Vitals,
  function getCLS(onPerfEntry) {,
    let clsValue = 0;
    let clsEntries = [];
    let sessionValue = 0;
    let sessionEntries = [];
    new PerformanceObserver((entryList) => {,
      for (const entry of entryList.getEntries()) {,
        if (!entry.hadRecentInput) {,
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 &&,
              entry.startTime - firstSessionEntry.startTime < 5000) {,
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {,
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
,
          if (sessionValue > clsValue) {,
            clsValue = sessionValue;
            clsEntries = [...sessionEntries];
            onPerfEntry({ name: 'CLS', value: clsValue, entries: clsEntries ,});
          }
        }
      }
    }).observe({ type: 'layout-shift', buffered: true ,});
  }
,
  function getFID(onPerfEntry) {,
    new PerformanceObserver((entryList) => {,
      for (const entry of entryList.getEntries()) {,
        onPerfEntry({ name: 'FID', value: entry.processingStart - entry.startTime, entry });
      }
    }).observe({ type: 'first-input', buffered: true ,});
  }
,
  function getFCP(onPerfEntry) {,
    new PerformanceObserver((entryList) => {,
      for (const entry of entryList.getEntries()) {,
        if (entry.name === 'first-contentful-paint') {,
          onPerfEntry({ name: 'FCP', value: entry.startTime, entry });
        }
      }
    }).observe({ type: 'paint', buffered: true ,});
  }
,
  function getLCP(onPerfEntry) {,
    new PerformanceObserver((entryList) => {,
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      onPerfEntry({ name: 'LCP', value: lastEntry.startTime, entry: lastEntry ,});
    }).observe({ type: 'largest-contentful-paint', buffered: true ,});
  }
,
  function getTTFB(onPerfEntry) {,
    new PerformanceObserver((entryList) => {,
      for (const entry of entryList.getEntries()) {,
        if (entry.responseStart <= entry.requestStart) {,
          onPerfEntry({ name: 'TTFB', value: entry.responseStart - entry.requestStart, entry });
        }
      }
    }).observe({ type: 'navigation', buffered: true ,});
  }
,
  // Initialize performance monitoring,
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
  // Monitor memory usage,
  if ('memory' in performance) {,
    setInterval(() => {,
      const memory = performance.memory;
      console.log('Memory Usage:', {,
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB';
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB';
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB',});
    }, 5000);
  }
})();