import React, { useEffect } from 'react';
import { PerformanceMonitor as PerfMonitor, setupGlobalErrorHandlers } from '../utils/performance';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    const perfMonitor = PerfMonitor.getInstance();
    perfMonitor.startMonitoring();

    // Setup global error handlers
    setupGlobalErrorHandlers();

    // Cleanup on unmount
    return () => {
      perfMonitor.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;