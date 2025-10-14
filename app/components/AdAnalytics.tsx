import React from 'react';

interface AdAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const AdAnalytics: React.FC<AdAnalyticsProps> = ({ className = '', children }) => {
  return (
    <div className={`adanalytics ${className}`}>
      {children}
    </div>
  );
};

export default AdAnalytics;