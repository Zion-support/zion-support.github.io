import React, { useEffect } from 'react';
import { getPerformanceTracker } from '../utils/performance';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const tracker = getPerformanceTracker();
    
    // The tracker handles all performance monitoring internally
    // We just need to ensure it's initialized
    
    return () => {
      // Cleanup is handled by the tracker singleton
      tracker.cleanup();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
