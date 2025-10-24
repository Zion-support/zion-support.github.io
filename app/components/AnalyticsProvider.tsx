'use client';

import React from 'react';

interface AnalyticsProviderProps {
  children?: React.ReactNode;
  className?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnalyticsProvider;