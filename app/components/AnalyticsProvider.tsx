import React from 'react';

interface _AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}


const AnalyticsProvider: React.FC<_AnalyticsProviderProps> = ({ className = '', children }) => {
  return (
    <div className={`nalyticsprovider ${className}`}>
      {children}
    </div>
  );
};

AnalyticsProvider.displayName = 'AnalyticsProvider';

export default AnalyticsProvider;