<<<<<<< HEAD
interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initializeAnalytics = () => {
      // Google Analytics 4 tracking
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Google Analytics initialization would go here
        console.log('Analytics initialized');
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Page view tracking would go here
        console.log('Page view tracked:', window.location.pathname);
      }
    };

    initializeAnalytics();
    trackPageView();
  }, []);

  return <>{children}</>;
};

=======
import React from 'react';

interface EnhancedanalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedanalytics({ className = '', children, ...props }: EnhancedanalyticsProps) {
  return (
    <div className={`enhancedanalytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
