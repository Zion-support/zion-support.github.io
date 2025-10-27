import React from 'react';

interface _SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}


const SystemMonitor: React.FC<_SystemMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`ystemmonitor ${className}`}>
      {children}
    </div>
  );
};

SystemMonitor.displayName = 'SystemMonitor';

export default SystemMonitor;