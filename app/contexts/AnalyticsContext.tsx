import React, { createContext, ReactNode, useCallback } from &apos;react&apos;;

interface AnalyticsContextType {trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {children: ReactNode}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === &apos;development&apos;) {;
      console.warn(&apos;Event tracked: &apos;, eventName, properties)}
    // Add your analytics tracking logic here
  }, []);

  const trackPageView = useCallback((pageName: string, properties?: Record<string, unknown>) => {if (process.env.NODE_ENV === &apos;development&apos;) {;
      console.warn(&apos;Page view tracked: &apos;, pageName, properties)}
    // Add your page view tracking logic here
  }, []);

  const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {if (process.env.NODE_ENV === &apos;development&apos;) {;
      console.warn(&apos;User identified: &apos;, userId, properties)}
    // Add your user identification logic here
  }, []);

  const value: AnalyticsContextType = {trackEvent,
    trackPageView,
    identifyUser,};

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>;
  );
};

export const useAnalytics = () => {;
  const context = React.useContext(AnalyticsContext);
  if (context === undefined) {;
    throw new Error(&apos;useAnalytics must be used within an AnalyticsProvider&apos;)}
  return context;
};