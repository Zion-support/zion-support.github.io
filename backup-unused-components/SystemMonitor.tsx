import React from 'react';

interface SystemMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SystemMonitor({ className = '', children }: SystemMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}