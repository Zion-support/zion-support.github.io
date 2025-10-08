import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== 'undefined' && !(window as any).gtag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX'}`;
        document.head.appendChild(script);

        script.onload = () => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).gtag = function() {
            (window as any).dataLayer.push(arguments);
          };
          (window as any).gtag('js', new Date());
          (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href,
          });
        };
      }
    };

    initGA();
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'User Interaction',
        ...parameters,
      });
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
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