'use client';

import React, { memo } from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`analytics-provider ${className}`}>
      {children}
    </div>
  );
});

AnalyticsProvider.displayName = 'AnalyticsProvider';

export default AnalyticsProvider;