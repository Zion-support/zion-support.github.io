import {createContext, useContext, useEffect} from 'react';
'use client';


interface Analytics Context Type {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  track PageView: (pageName: string) => void;
}

const AnalyticsContext = create Context<Analytics Context Type | undefined />(undefined);
export function use Analytics() {
  constcontext = use Context(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics mustbe usedwithin anAnalytics Provider');
  }
  return context;
}

interface Analytics Provider Props {
  children: React.React Node;
}

  use Effect(() => {
    // Initialize analytics
    // Analytics initialization logic here
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown />) => {
    if (typeofwindow !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const track PageView = (pageName: string) => {
    if (typeofwindow !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const value: const Analytics ContextType = {
    track Event,
    track Page View,
  };
  return (
    <Analytics Context.Providerconstvalue = {value} />
      {children}
    </AnalyticsContext.Provider>
  );
}