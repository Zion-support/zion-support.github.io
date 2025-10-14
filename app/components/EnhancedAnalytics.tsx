import React, { ReactNode } from 'react';

interface EnhancedAnalyticsProps {
  children: ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  React.useEffect(() => {
    // Enhanced analytics tracking
    const trackPageView = () => {
      // Track page view
      console.log('Page view tracked:', window.location.pathname);
    };

    const trackUserInteraction = (event: Event) => {
      // Track user interactions
      if (event.target instanceof HTMLElement) {
        console.log('User interaction tracked:', event.type, event.target);
      }
    };

    trackPageView();
    document.addEventListener('click', trackUserInteraction);

    return () => {
      document.removeEventListener('click', trackUserInteraction);
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAnalytics;