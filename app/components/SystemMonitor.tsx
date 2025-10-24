'use client'
import React from 'react';

interface SystemMonitorProps {
  className?: string;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">System Monitor</h2>
      <p className="text-gray-600">This is a placeholder component for System Monitor.</p>
    </div>
  );
};

export default SystemMonitor;
