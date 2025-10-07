// usePerformance - TypeScript definitions and utilities

export interface usePerformanceConfig {
  // Configuration properties
}

export const defaultusePerformanceConfig: usePerformanceConfig = {
  // Default configuration
};

export default {
  defaultusePerformanceConfig
};
        analytics.track(
          'long_task',
          'performance',
          'detected',
          undefined,
          entry.duration
        );
      });
    });

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;
