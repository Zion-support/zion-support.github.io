<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
=======
import React, { createContext, useContext, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

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

<<<<<<< HEAD
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Implement analytics tracking here
    console.log('Analytics Event:', event, properties);
    
    // Example: Send to analytics service
=======
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Basic analytics tracking
    console.log('Analytics Event:', eventName, properties);
    
    // In a real implementation, you would send this to your analytics service
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  };

<<<<<<< HEAD
  const identify = (userId: string, traits?: Record<string, any>) => {
    // Implement user identification here
    console.log('Analytics Identify:', userId, traits);
    
    // Example: Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    // Implement page tracking here
    console.log('Analytics Page:', name, properties);
    
    // Example: Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
=======
  const trackPageView = (pageName: string) => {
    console.log('Page View:', pageName);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
        page_location: window.location.href,
      });
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics Provider initialized');
  }, []);

  const value: AnalyticsContextType = {
    track,
    identify,
    page
=======
  const value = {
    trackEvent,
    trackPageView,
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

<<<<<<< HEAD
=======
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
export default AnalyticsProvider;