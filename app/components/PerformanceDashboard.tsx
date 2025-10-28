'use client';

import React, { memo } from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`performance-dashboard ${className}`}>
      {children}
    </div>
  );
});

PerformanceDashboard.displayName = 'PerformanceDashboard';

export default PerformanceDashboard;