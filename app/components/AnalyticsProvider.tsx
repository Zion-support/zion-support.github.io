"use client";
import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        AnalyticsProvider
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default AnalyticsProvider;