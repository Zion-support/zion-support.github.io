import React, { createContext, useContext, useEffect, ReactNode } from 'react';
interface AnalyticsContextType {
<<<<<<< HEAD
    track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void
  }
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
interface AnalyticsProviderProps {
    children: ReactNode,
  trackingId?: string
  }
=======
  track: (event: string, properties?: Record<string, any>) => void
}
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void};
;
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
interface AnalyticsProviderProps {
  children: ReactNode
}
  trackingId?: string};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script['src'] = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
<<<<<<< HEAD
        page_location: window.location.href});
    }
=======
        page_location: window.location.href})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  }, [trackingId]);
  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
<<<<<<< HEAD
      window.gtag('event', event, properties)
  }
=======
      window.gtag('event', event, properties)}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Also log in development
    if (process.env['NODE_ENV'] === 'development') {
    console.log('Analytics Event:', event, properties)
  }
  }
  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: name,
        page_location: window.location.href,
<<<<<<< HEAD
        ...properties});
    }
=======
        ...properties})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Also log in development
    if (process.env['NODE_ENV'] === 'development') {
    console.log('Analytics Page:', name, properties)
  }
  }
  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
<<<<<<< HEAD
        ...traits});
    }
=======
        ...traits})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Also log in development
    if (process.env['NODE_ENV'] === 'development') {
    console.log('Analytics Identify:', userId, traits)
  }
  }
  const value: AnalyticsContextType = {
    track,
    page,
    identify}
  return (
    <AnalyticsContext .Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  );
}
export const useAnalytics = (): AnalyticsContextType => {
    const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context;
}
// Declare global gtag function
declare global {
    interface Window {
    dataLayer: any[],
    gtag: (...args: any[]) => void
  }
}
  </AnalyticsProviderProps>
  </AnalyticsContextType>
=======
  )};
export const useAnalytics = (): AnalyticsContextType => {;
const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}
  return context};
// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[]
}
    gtag: (...args: any[]) => void};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
