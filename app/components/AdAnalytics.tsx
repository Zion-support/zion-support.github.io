import React from 'react';

interface AdAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdAnalytics({ className = '', children }: AdAnalyticsProps) {
  return (
    <div className={`adanalytics ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">AdAnalytics</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}