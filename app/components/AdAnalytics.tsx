'use client'
import React from 'react';

interface AdAnalyticsProps {
  className?: string;
}

const AdAnalytics: React.FC<AdAnalyticsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Ad Analytics</h2>
      <p className="text-gray-600">This is a placeholder component for Ad Analytics.</p>
    </div>
  );
};

export default AdAnalytics;
