import React, { createContext, useContext, useEffect, ReactNode } from "react"

declare global {
  interface Window {
    gtag: (...arg,
  s: any[]) => void
  }
}

interface AnalyticsContextType {
  trackEvent: (eventNam,
  e: string, parameters?: Record<string, unknown>) => void
  trackPageView: (pageNam,
  e: string) => void
}

const AnalyticsContext = $2;
export default AnalyticsProvider
  );
};

export default AnalyticsProviderPage;
