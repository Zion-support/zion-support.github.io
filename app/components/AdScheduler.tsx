import React from 'react';

interface AdSchedulerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdScheduler({ className = '', children }: AdSchedulerProps) {
  return (
    <div className={`adscheduler ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">AdScheduler</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}