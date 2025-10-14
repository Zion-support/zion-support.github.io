import React from 'react';
interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}
const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`performancedashboard ${className}`}>
      {children}
    </div>
  );
};
export default PerformanceDashboard;