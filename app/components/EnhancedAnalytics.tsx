"use client"
import React, { createContext, useContext, useEffect } from "react";

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
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
  children
}) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== "undefined") {
      // Analytics initialization code here
    }
  }, []);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Track event
      console.log("Analytics Event:", event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Identify user
      console.log("Analytics Identify:", userId, traits);
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Track page view
      console.log("Analytics Page:", name, properties);
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;