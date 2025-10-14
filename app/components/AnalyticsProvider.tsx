import React, { ReactNode } from "react";

interface AnalyticsProviderProps {
  children: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <>
      {children}
    </>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context;
};

export default AnalyticsProvider;
