'use client';

import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Dynamic import for the large component
const AdvancedPerformanceMonitor = lazy(() => 
  import('./AdvancedPerformanceMonitor')
);

interface LazyAdvancedPerformanceMonitorProps {
  onMetricsUpdate?: (metrics: any) => void;
  enableRealTimeMonitoring?: boolean;
}

export const LazyAdvancedPerformanceMonitor: React.FC<LazyAdvancedPerformanceMonitorProps> = (_props) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdvancedPerformanceMonitor {...props} />
    </Suspense>
  );
};

export default LazyAdvancedPerformanceMonitor;