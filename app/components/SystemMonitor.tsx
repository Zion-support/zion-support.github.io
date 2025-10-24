<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default SystemMonitor;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
