<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className, children }) => {
  return (
    <div className={className}>
=======

const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      {children}
    </div>
  );
};
<<<<<<< HEAD
export default SystemMonitor;
=======

export default SystemMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
