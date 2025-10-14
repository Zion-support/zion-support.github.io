<<<<<<< HEAD
import React from "react";
=======
import React, { createContext, useContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default AnalyticsProvider;
=======
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  //   // Analytics tracking implementation
  //   console.log('Analytics Event:', event, properties);
  // };

  // const trackPageView = (page: string) => {
  //   // Page view tracking implementation
  //   console.log('Page View:', page);
  // };

  // const value = {
  //   trackEvent,
  //   trackPageView,
  // };

  return (
    <div>
      {children}
    </div>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
