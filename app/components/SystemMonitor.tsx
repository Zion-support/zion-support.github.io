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
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">SystemMonitor</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
