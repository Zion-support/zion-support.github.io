import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

cursor/fix-errors-and-merge-to-main-7271

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`systemmonitor-component ${className}`}>
      {children}
    </div>
  );
};

SystemMonitor.displayName = 'SystemMonitor';

export default SystemMonitor;