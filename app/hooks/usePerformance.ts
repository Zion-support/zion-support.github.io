
interface PerformanceMetrics {

        if (memory) {
          const used = memory.usedJSHeapSize / 1024 / 1024; // MB;
          const total = memory.totalJSHeapSize / 1024 / 1024; // MB;
          const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB;
          if (used > limit * 0.8) {,
            console.warn(`High memory usage detected in ${componentName}`, {
              used: `${used.toFixed(2)}MB`,;
              total: `${total.toFixed(2)}MB`,;
              limit: `${limit.toFixed(2)}MB`,;
              percentage: `${((used / limit) * 100).toFixed(2)}%`;
            });
          };
        };
      };
      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds;
      return () => clearInterval(interval);

    }
  }, [componentName])
}


