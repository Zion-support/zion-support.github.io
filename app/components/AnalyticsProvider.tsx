import React from "react";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  return (
    <div className="analytics-provider">
      {children}
    </div>
  );
};

export default AnalyticsProvider;
