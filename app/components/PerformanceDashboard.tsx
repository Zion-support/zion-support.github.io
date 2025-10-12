import React from 'react';

interface PerformancedashboardProps {
  children?: React.ReactNode;
}

const Performancedashboard: React.FC<PerformancedashboardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Performancedashboard;
