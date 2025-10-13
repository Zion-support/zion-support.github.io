import React, { useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.gtag = function() {
          (window.gtag as any).q = (window.gtag as any).q || [];
          (window.gtag as any).q.push(arguments);
        };

        window.gtag('js', new Date());
        window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID);
      }
    }
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;