<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
=======
'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string,) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode ,}> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string,) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const value = {
    trackEvent,
    trackPageView,
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======

const AnalyticsProvider: React.FC = () => {
  return (
    <div className="analyticsprovider">
      <h2>AnalyticsProvider</h2>
      <p>AnalyticsProvider component.</p>
    </div>
  );
};

export default AnalyticsProvider;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
