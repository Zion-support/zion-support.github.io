import React from 'react';

interface SystemmonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Systemmonitor({ className = '', children }: SystemmonitorProps) {
  return (
    <div className={`SystemMonitor-component ${className}`}>
      {children}
    </div>
  );
}