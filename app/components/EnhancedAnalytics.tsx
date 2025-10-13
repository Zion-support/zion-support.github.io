<<<<<<< HEAD

=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
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

