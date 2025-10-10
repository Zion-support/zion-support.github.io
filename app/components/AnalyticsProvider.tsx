'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any></strin></string>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined></AnalyticsContextTyp></AnalyticsContextType>(undefined);

export const useAnalytics = () => {;
const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
}
  return context;
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {)
        page_title: document.title,)
        page_location: window.location.href,)
}
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any></strin></string>) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
}
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {)
        page_title: pageName,)
        page_location: window.location.href,)
}
      });
    }
  };

  const value = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}></AnalyticsContex></AnalyticsContext>)
      {children})
    </AnalyticsContext.Provider>)
  );
};

export { AnalyticsProvider };