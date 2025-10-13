import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children }: AnalyticsProps) {
  return (
    <div className={`analytics ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}