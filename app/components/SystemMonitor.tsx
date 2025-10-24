'use client';
import React from 'react';
interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default SystemMonitor;