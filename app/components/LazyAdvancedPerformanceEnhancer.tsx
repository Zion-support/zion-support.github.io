'use client';

import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Dynamic import for the large component
const AdvancedPerformanceEnhancer = lazy(() => 
  import('./AdvancedPerformanceEnhancer')
);

interface LazyAdvancedPerformanceEnhancerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
}

export const LazyAdvancedPerformanceEnhancer: React.FC<LazyAdvancedPerformanceEnhancerProps> = (_props) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdvancedPerformanceEnhancer {...props} />
    </Suspense>
  );
};

export default LazyAdvancedPerformanceEnhancer;