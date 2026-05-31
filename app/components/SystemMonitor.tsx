import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const SystemMonitor = ({ className = '', children }) => {
  return (
    <div className={`systemmonitor-component ${className}`}>
{children || <h2>SystemMonitor</h2>}
    </div>
  );
};

export default SystemMonitor;