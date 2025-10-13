<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
=======
'use client';
<<<<<<< HEAD
=======
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
import React, { useEffect } from 'react';

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
interface AnalyticsProviderProps {
'use client;

<<<<<<< HEAD
import React, { createContext, useContext, useEffect } from 'react;
  if (!context) {
    throw new Error(useAnalytics must be used within an AnalyticsProvider);

export default AnalyticsProvider;
export default AnalyticsProvider;
=======
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
