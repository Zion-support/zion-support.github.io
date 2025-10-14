import React from 'react';

interface AdDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const AdDashboard: React.FC<AdDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`addashboard ${className}`}>
      {children}
    </div>
  );
};

export default AdDashboard;