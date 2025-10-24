'use client';
import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AnalyticsProvider</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default AnalyticsProvider;
