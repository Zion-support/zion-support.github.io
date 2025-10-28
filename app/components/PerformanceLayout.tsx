'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { initializePerformanceOptimizations } from '../utils/performanceOptimizations';

// Lazy load non-critical components
const AdvancedPerformanceEnhancer = lazy(() => 
  import('./LazyAdvancedPerformanceEnhancer').then(module => ({
    default: module.LazyAdvancedPerformanceEnhancer
  }))
);

const AdvancedPerformanceMonitor = lazy(() => 
  import('./LazyAdvancedPerformanceMonitor').then(module => ({
    default: module.LazyAdvancedPerformanceMonitor
  }))
);

interface PerformanceLayoutProps {
  children: React.ReactNode;
  enablePerformanceMonitoring?: boolean;
  enablePerformanceOptimizations?: boolean;
}

export const PerformanceLayout: React.FC<PerformanceLayoutProps> = (_{
  children, enablePerformanceMonitoring = true, enablePerformanceOptimizations = true, _}) => {
  useEffect(() => {
    if (enablePerformanceOptimizations) {
      initializePerformanceOptimizations();
    }
  }, [enablePerformanceOptimizations]);

  return (
    <div className="min-h-screen">
      {enablePerformanceOptimizations && (
        <Suspense fallback={<LoadingSpinner />}>
          <AdvancedPerformanceEnhancer
            enableMonitoring={enablePerformanceMonitoring}
            enableOptimizations={enablePerformanceOptimizations}
          >
            {children}
          </AdvancedPerformanceEnhancer>
        </Suspense>
      )}
      
      {!enablePerformanceOptimizations && children}
      
      {enablePerformanceMonitoring && (
        <Suspense fallback={null}>
          <AdvancedPerformanceMonitor
            enableRealTimeMonitoring={enablePerformanceMonitoring}
          />
        </Suspense>
      )}
    </div>
  );
};

export default PerformanceLayout;