import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Analytics: React.FC<AnalyticsProps> = ({ className = '', children }) => {
  return (
    <div className={`analytics ${className}`}>
      {children}
    </div>
  );
};

export default Analytics;