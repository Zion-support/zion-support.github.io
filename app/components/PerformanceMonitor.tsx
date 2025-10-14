import React from 'react';

interface PerformanceMonitorProps {
  onMetricsUpdate: (metrics: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = () => {
  return null;
};

export default PerformanceMonitor;