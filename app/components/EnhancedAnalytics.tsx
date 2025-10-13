"use client";

import React, { createContext, useContext, useEffect } from "react";

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  // Helper functions
  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  };

  const getUserId = (): string | null => {
    return localStorage.getItem('analytics_user_id');
  };

  const storeAnalyticsEvent = (type: string, data: any) => {
    try {
      const analytics = JSON.parse(localStorage.getItem('analytics_data') || '[]');
      analytics.push({ type, data, timestamp: Date.now() });
      localStorage.setItem('analytics_data', JSON.stringify(analytics.slice(-100))); // Keep last 100 events
    } catch (error) {
      console.error('Failed to store analytics event:', error);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
        document.head.appendChild(script);

        (window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
        function gtag(...args: unknown[]) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", process.env.REACT_APP_GA_ID);
      }

      // Track initial page view
      page(document.title, {
        path: window.location.pathname,
        referrer: document.referrer,
      });
    }
  }, []);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Enhanced event tracking with additional context
      const enhancedProperties = {
        ...properties,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        userId: getUserId(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      };

      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          event,
          enhancedProperties,
        );
      }

      // Custom analytics with local storage
      storeAnalyticsEvent('event', { event, properties: enhancedProperties });

      // Console logging in development
      if (process.env.NODE_ENV === 'development') {
        console.log("Analytics Event:", event, enhancedProperties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "config",
          process.env.REACT_APP_GA_ID,
          {
            user_id: userId,
            custom_map: traits,
          },
        );
      }

      // Custom analytics
      console.log("Analytics Identify:", userId, traits);
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Enhanced page tracking with additional context
      const enhancedProperties = {
        ...properties,
        page_title: name,
        page_location: window.location.href,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        userId: getUserId(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      };

      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          "page_view",
          enhancedProperties,
        );
      }

      // Custom analytics with local storage
      storeAnalyticsEvent('page_view', { name, properties: enhancedProperties });

      // Console logging in development
      if (process.env.NODE_ENV === 'development') {
        console.log("Analytics Page:", name, enhancedProperties);
      }
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
