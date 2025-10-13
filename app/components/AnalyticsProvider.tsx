<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
=======
import React from 'react';
>>>>>>> origin/main

interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Add your analytics tracking logic here
    console.log('Event tracked:', eventName, properties);
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Add your page view tracking logic here
    console.log('Page view tracked:', pageName, properties);
  };

  const value = {
    trackEvent,
    trackPageView,
  };

=======
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
>>>>>>> origin/main
  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/main
