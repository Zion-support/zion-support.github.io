<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SystemMonitorProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

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