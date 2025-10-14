import React, { ReactNode } from "react";

interface EnhancedAnalyticsProps {
  children: ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAnalytics;
