"use client";
import React from 'react';

interface SystemMonitorProps {
  className?: string;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        SystemMonitor
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default SystemMonitor;