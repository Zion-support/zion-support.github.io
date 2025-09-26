import React, { useEffect, useState } from 'react';
import { 
  preloadCriticalResources, 
  registerServiceWorker, 
  monitorPerformance, 
  addResourceHints,
  getMemoryUsage,
  debounce
} from '../utils/performanceOptimizations';

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean;
}

export default function PerformanceOptimizer({
  enableServiceWorker = true,
  enableMonitoring = true,
  enableResourceHints = true,
  enablePreloading = true
}: PerformanceOptimizerProps): null {
  const [memoryUsage, setMemoryUsage] = useState<{
    used: number;
    total: number;
    percentage: number;
  } | null>(null);

  useEffect(() => {
    // Initialize performance optimizations
    if (enableResourceHints) {
      addResourceHints();
    }

    if (enablePreloading) {
      preloadCriticalResources();
    }

    if (enableServiceWorker) {
      registerServiceWorker();
    }

    if (enableMonitoring) {
      monitorPerformance();
    }

    // Monitor memory usage
    const updateMemoryUsage = debounce(() => {
      const usage = getMemoryUsage();
      if (usage) {
        setMemoryUsage(usage);
      }
    }, 1000);

    // Update memory usage periodically
    const interval = setInterval(updateMemoryUsage, 5000);
    updateMemoryUsage(); // Initial check

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [enableServiceWorker, enableMonitoring, enableResourceHints, enablePreloading]);

  // Log memory usage if it's high
  useEffect(() => {
    if (memoryUsage && memoryUsage.percentage > 80) {
      console.warn('High memory usage detected:', memoryUsage);
    }
  }, [memoryUsage]);

  return null;
}