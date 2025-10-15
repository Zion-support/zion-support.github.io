import React from 'react';
import { useOptimizedPerformance } from '../hooks/useOptimizedPerformance';

const PerformanceMonitor: React.FC = () => {
  // Use the optimized performance hook
  useOptimizedPerformance({
    enableWebVitals: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableDebouncing: true,
  });

  return null;
};

export default PerformanceMonitor;
