'use client'
import React from 'react';

interface AdDashboardProps {
  className?: string;
}

const AdDashboard: React.FC<AdDashboardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Ad Dashboard</h2>
      <p className="text-gray-600">This is a placeholder component for Ad Dashboard.</p>
    </div>
  );
};

export default AdDashboard;
