import React from "react";
import { AnalyticsProvider as AnalyticsContextProvider } from "../contexts/AnalyticsContext";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return (
    <AnalyticsContextProvider>
      {children}
    </AnalyticsContextProvider>
  );
};

export { AnalyticsProvider };
export default AnalyticsProvider;
