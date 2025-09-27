import React from 'react';

interface EnhancedDashboardProps {
  className?: string;
}

export const EnhancedDashboard: React.FC<EnhancedDashboardProps> = ({
  className = ''
}) => {
  return (
    <div className={`enhanced-dashboard ${className}`}>
      <h2>Enhanced Dashboard</h2>
      <p>Enhanced dashboard component</p>
    </div>
  );
};

export default EnhancedDashboard;