import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`systemmonitor-component ${className}`}>
      {children}
    </div>
  );
};

SystemMonitor.displayName = 'SystemMonitor';

export default SystemMonitor;
