import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`systemmonitor-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SystemMonitor</h3>
          <p className="text-gray-600">This is the SystemMonitor component.</p>
        </div>
      )}
    </div>
  );
};

export default SystemMonitor;