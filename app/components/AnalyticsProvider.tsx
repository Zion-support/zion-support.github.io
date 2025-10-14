import React, { useEffect } from 'react';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';  return <>{children}</>;
};

export default AnalyticsProvider; cursor/analyze-improve-and-deploy-application-30da
interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return <>{children}</>; cursor/analyze-improve-and-deploy-application-30da
};

export default AnalyticsProvider;
};

export default AnalyticsProvider;
