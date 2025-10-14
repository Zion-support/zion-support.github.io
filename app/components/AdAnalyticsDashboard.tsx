import React from 'react';

interface AdAnalyticsDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const AdAnalyticsDashboard: React.FC<AdAnalyticsDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`adanalyticsdashboard ${className}`}>
      {children}
    </div>
  );
};

export default AdAnalyticsDashboard;