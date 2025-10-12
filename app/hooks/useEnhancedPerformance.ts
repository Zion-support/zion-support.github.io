import { useState, useEffect, useCallback } from 'react';

  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;

  });

  const [isOptimized, setIsOptimized] = useState(false);

    if (typeof window === 'undefined') return;

    // Measure load time
    const loadTime = performance.now();

    // Measure memory usage
    const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;

    // Measure render time
      const renderTime = performance.now() - loadTime;

        memoryUsage: memoryUsage / 1024 / 1024 // Convert to MB
      }));
    });
  }, []);

    setIsOptimized(true);

    // Preload critical resources

      ];

        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });
    }
  }, []);

    measurePerformance();

    const interval = setInterval(measurePerformance, 5000);

    return () => clearInterval(interval);
  }, [measurePerformance]);

    measurePerformance
  };
};
