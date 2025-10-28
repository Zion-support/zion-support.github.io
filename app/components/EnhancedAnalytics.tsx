'use client';

import React, { memo } from 'react';

interface EnhancedAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-analytics ${className}`}>
      {children}
    </div>
  );
});

EnhancedAnalytics.displayName = 'EnhancedAnalytics';

export default EnhancedAnalytics;