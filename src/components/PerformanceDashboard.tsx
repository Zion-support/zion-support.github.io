import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`performance-dashboard ${className}`}>
      <h2>Performance Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span className="label">Load Time</span>
          <span className="value">1.2s</span>
        </div>
        <div className="metric">
          <span className="label">Performance Score</span>
          <span className="value">95</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;