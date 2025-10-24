'use client';

import React from 'react';

interface EnhancedAnalyticsProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedAnalytics;