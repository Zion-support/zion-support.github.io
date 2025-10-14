import React, { ReactNode } from "react";

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default AnalyticsProvider;
