import React, { createContext, useContext, ReactNode } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export type { AnalyticsContextType };
export { AnalyticsContext };
