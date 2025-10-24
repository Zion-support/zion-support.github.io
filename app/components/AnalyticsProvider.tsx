<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
=======
=======


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
'use client';
import React, { createContext, useContext, useEffect } from 'react';

<<<<<<< HEAD
interface AnalyticsContextType {
<<<<<<< HEAD
<<<<<<< HEAD
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string,) => void;
=======
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
=======
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
=======
interface AnalyticsContextType {trackEvent: (eventName: string, parameters?: Record<string, any   />) => void;
  trackPageView: (pageName: string) => void;}

const AnalyticsContext = createContext<AnalyticsContextType | undefined   />(undefined);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  const context = useContext(AnalyticsContext);
  if (!context) {throw new Error('useAnalytics must be used within an AnalyticsProvider');}
  return context;
<<<<<<< HEAD
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode ,}> = ({ children }) => {
  useEffect(() => {
<<<<<<< HEAD
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
=======
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag;
      
      // Configure Google Analytics
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
=======
  const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
    }
  };

  const trackPageView = (pageName: string,) => {
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
=======

<<<<<<< HEAD
interface AnalyticsProviderProps {children: React.ReactNode;}

    // Initialize analytics
    // Analytics initialization logic here
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, unknown   />) => {if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);}
=======
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, properties);
    // Add your analytics tracking logic here
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    console.log('Page View:', pageName, properties);
    // Add your page view tracking logic here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
  };

    if (typeof window !== 'undefined' && window.gtag) {window.gtag('config', 'GA_MEASUREMENT_ID', {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    // Google Analytics
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
        page_title: pageName,
        page_location: window.location.href,});
    }
  };
<<<<<<< HEAD

  const value = {
    trackEvent,
    trackPageView,
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
=======
  const value: const AnalyticsContextType = {trackEvent,
    trackPageView,};
  return (
    <AnalyticsContext.Provider const value = {value}   /></AnalyticsContext>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
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
=======
import React from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export { AnalyticsProvider };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = () => {
  return (
    <div className="analyticsprovider">
      <h2>AnalyticsProvider</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default AnalyticsProvider;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
