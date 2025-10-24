'use client';
import React, { createContext, useContext, useEffect, ReactNode } from "react";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  }
  return context;
};

<<<<<<< HEAD
interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
=======
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, }) => {
  useEffect(() => {
    if (typeof window !== &quot;undefined&quot;) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      // Google Analytics
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;);
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || [];
            (window.gtag as any).q.push(args);
          };
        window.gtag("js", new Date());
        window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "");
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      }
    }
  }, []);

  const trackEvent = (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;event&quot;, eventName, parameters);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    }
  };

<<<<<<< HEAD
  const trackPageView = (pageName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
=======
  const trackPageView = (pageName: string) => {if (typeof window !== "undefined" && window.gtag) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
<<<<<<< HEAD
  };

=======
  }
  return context;
}

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics
    // Analytics initialization logic here
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      })
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
  };

>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

<<<<<<< HEAD
export default AnalyticsProvider;
=======
<<<<<<< HEAD
export default AnalyticsProvider;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
