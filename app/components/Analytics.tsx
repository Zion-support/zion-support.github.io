import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ className = '', children }) => {
  return (
    <div className={`analytics-component ${className}`}>
      {children}
    </div>
  );
};

export default Analytics;