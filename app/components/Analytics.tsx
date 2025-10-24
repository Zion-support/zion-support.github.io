'use client';

import React from 'react';

interface AnalyticsProps {
  children?: React.ReactNode;
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Analytics;