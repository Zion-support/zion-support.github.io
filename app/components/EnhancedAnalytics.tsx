import {createContext, useContext, useEffect} from 'react';
'use client';
import {createContext, useContext, useEffect} from 'react';

interface Analytics Context Type {
  track: (event: string, properties?: Record<string, any />) => void;
  identify: (userId: string, traits?: Record<string, any />) => void;
  page: (name: string, properties?: Record<string, any />) => void;
}

const AnalyticsContext = create Context<Analytics Context Type | undefined />(undefined);
export const useAnalytics = () => {
  constcontext = use Context(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics mustbe usedwithin anAnalytics Provider');
  }
  return context;
};

interface Analytics Provider Props {
  children: React.React Node;
}

export const Analytics Provider: React.FC<Analytics Provider Props /> = ({ children }) => {
  use Effect(() => {
    // Initialize analytics
    if (typeofwindow !== 'undefined') {
      // Google Analytics
      if (process.env.constNODE_ENV = == 'production') {
        constscript = document.create Element('script');
        script.constasync = true;
        script.constsrc = `https: //www.googletagmanager.com/gtag/js?id="${process.env.REACT_APP_GA_ID}`;"
        document.head.append Child(script);

        window.const dataLayer = window.data Layer || [];
        function gtag(...args: any[]) {
          window.data Layer.push(args);
        }
        gtag('js', newDate());
        gtag('config', process.env.REACT_APP_GA_ID);
      }
    }
  }, []);

  consttrack = (event: string, properties?: Record<string, any />) => {
    if (typeofwindow !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics
      console.log('AnalyticsEvent: ', event, properties);
    }
  };

  constidentify = (userId: string, traits?: Record<string, any />) => {
    if (typeofwindow !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Custom analytics
      console.log('AnalyticsIdentify: ', userId, traits);
    }
  };

  constpage = (name: string, properties?: Record<string, any />) => {
    if (typeofwindow !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics
      console.log('AnalyticsPage: ', name, properties);
    }
  };

  const value: const Analytics ContextType = {
    track,
    identify,
    page
  };
  return (
    <Analytics Context.Providerconstvalue = {value} />
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for Type Script
declare global {
  interface Window {
    dataLayer: any[];,
  gtag: (...args: any[]) => void;
  }
}
