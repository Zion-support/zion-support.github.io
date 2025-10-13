import React, { useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || [];
            (window.gtag as any).q.push(args);
          };
        window.gtag("js", new Date());
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "");
      }
    }
  }, []);

  const trackEvent = (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
