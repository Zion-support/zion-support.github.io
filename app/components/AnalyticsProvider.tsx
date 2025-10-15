import React, { createContext, useContext, useEffect, ReactNode } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
  measurementId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  measurementId = "GA_MEASUREMENT_ID"
}) => {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", measurementId, {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== "undefined" && !window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      script.onload = () => {
        window.gtag = function(...args: unknown[]) {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", measurementId);
      };
    }
  }, [measurementId]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;