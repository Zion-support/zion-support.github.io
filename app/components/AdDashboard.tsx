import React from 'react';

interface AdDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdDashboard({ className = '', children }: AdDashboardProps) {
  return (
    <div className={`addashboard ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">AdDashboard</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}