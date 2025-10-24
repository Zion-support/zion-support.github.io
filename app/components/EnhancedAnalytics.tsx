'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
<<<<<<< HEAD
);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
=======
)
export const useAnalytics = ($2) => {
$3
};
  return context
}
interface AnalyticsProviderProps {
  children: React.ReactNode,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

<<<<<<< HEAD
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
=======
        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {,
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
        }
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID);
      }
    }
  }, []);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', event, properties);
      }
      // Custom analytics
      console.log('Analytics Event:', event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          user_id: userId,
          custom_map: traits
        });
      }
      // Custom analytics
      console.log('Analytics Identify:', userId, traits);
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      // Custom analytics
      console.log('Analytics Page:', name, properties);
    }
  };

  const value: AnalyticsContextType = {,
    track,
    identify,
    page
  };

  return (
<<<<<<< HEAD
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
=======
    <AnalyticsContext.Provider value={value}>{children}
    </AnalyticsContext></AnalyticsContext.Provider>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c

export default AnalyticsProvider;