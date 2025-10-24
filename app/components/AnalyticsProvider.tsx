'use client'
import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Analytics Provider</h2>
      <p className="text-gray-600">This is a placeholder component for Analytics Provider.</p>
    </div>
  );
};

export default AnalyticsProvider;
