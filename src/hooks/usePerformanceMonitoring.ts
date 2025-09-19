import { useEffect, useState }  from 'react';
export const usePerformanceMonitoring = () => {,
  const [metrics, setMetrics] = useState({,
    loadTime: "0";
    renderTime: "0";
    memoryUsage: "0",});
  useEffect(() => {,
    // Measure page load time,
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
    // Measure render time,
    const renderStart = performance.now();
    requestAnimationFrame(() => {,
      const renderTime = performance.now() - renderStart;
      setMetrics(prev => ({ ...prev, renderTime }));
    });
    // Monitor memory usage (if available),
    if ('memory' in performance) {,
      const memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024, // MB,
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
    // Cleanup,
    return () => {,
      // Cleanup logic if needed,
  };
  }, []);
  return metrics;
  };
export const useLazyLoading = (importFunction, deps = []) => {,
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {,
    let isMounted = true;
    const loadComponent = async () => {,
      try {,
        setLoading(true);
        const module = await importFunction();
        if (isMounted) {,
          setComponent(() => module.default);
          setError(null);
        }
      } catch (err) {,
        if (isMounted) {,
          setError(err);
          console.error('Failed to load component:', err);
        }
      } finally {,
        if (isMounted) {,
          setLoading(false);
        }
      }
  };
    loadComponent();
    return () => {,
      isMounted = false;
  };
  }, deps);
  return { Component, loading, error,
  };
  };