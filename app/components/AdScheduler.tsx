'use client'
import React from 'react';

interface AdSchedulerProps {
  className?: string;
}

const AdScheduler: React.FC<AdSchedulerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Ad Scheduler</h2>
      <p className="text-gray-600">This is a placeholder component for Ad Scheduler.</p>
    </div>
  );
};

export default AdScheduler;
