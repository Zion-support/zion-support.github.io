'use client';

import React from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children
}) => {
  return <>{children}</>;
};

export default PerformanceOptimizer;
