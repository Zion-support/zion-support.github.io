<<<<<<< HEAD
import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default PerformanceDashboard;
=======
'use client'

import React from 'react'

const PerformanceDashboard: React.FC = () => {
  return (
    <div className="performance-dashboard">
      <h2>Performance Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span>Load Time</span>
          <span>1.2s</span>
        </div>
        <div className="metric">
          <span>Memory Usage</span>
          <span>45MB</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDashboard
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
