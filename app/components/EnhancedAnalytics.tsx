'use client';
import React, { useEffect, createContext, useContext } from 'react';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
}

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to analytics service
      console.log('Analytics Event:', { event, properties, timestamp: Date.now() });
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', event, properties);
      }
    }
  };

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href
    });

    // Track user interactions
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        trackEvent('click', {
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          href: target.getAttribute('href')
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent % 25 === 0) {
          trackEvent('scroll_depth', { percent: scrollPercent });
        }
      }
    };

    // Track form submissions
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      trackEvent('form_submit', {
        form_id: form.id,
        form_class: form.className
      });
    };

    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('submit', handleSubmit);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const EnhancedAnalytics: React.FC = () => {
  return null; // This component doesn't render anything
};

export default EnhancedAnalytics;
