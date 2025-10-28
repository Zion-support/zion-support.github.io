import React from 'react';


interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'systemmonitor ' + className}>
      {children || <p>SystemMonitor component</p>}
    </div>
  );
};

export default SystemMonitor;

