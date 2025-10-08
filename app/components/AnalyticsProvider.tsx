import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  track: () => {},
});

export const useAnalytics = () => useContext(AnalyticsContext);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics initialization
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        (window as any).gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      };
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;