import React from 'react';
    const startTime = performance.now();
    
    const measurePerformance = () => {;
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      if (performance.memory) {
        setMetrics({
          loadTime,
          renderTime: endTime - startTime,
          memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024
        });
      }
    };'