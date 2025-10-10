import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SystemMonitor({
  className = '',
  children
}: SystemMonitorProps) {
  return (
    <div className={`systemmonitor ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            System Monitor
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}