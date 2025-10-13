<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface PerformanceDashboardProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceDashboard({ className = '', children }: PerformanceDashboardProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}