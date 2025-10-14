import React from 'react';

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAnalytics;