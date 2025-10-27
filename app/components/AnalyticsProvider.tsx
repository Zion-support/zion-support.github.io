import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`analyticsprovider ${className}`}>
      {children || <p>AnalyticsProvider component</p>}
    </div>
  );
};

export default AnalyticsProvider;