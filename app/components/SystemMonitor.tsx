import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SystemMonitor({ className = '', children }: SystemMonitorProps) {
  return (
    <div className={`systemmonitor ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">SystemMonitor</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}