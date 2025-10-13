import React from 'react';

interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
=======
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
    console.log('Analytics initialized');
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Analytics Event:', eventName, properties);
    // Add your analytics tracking logic here
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    console.log('Page View:', pageName, properties);
    // Add your page view tracking logic here
  };

  const value = {
//     trackEvent,
//     trackPageView,
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
<<<<<<< HEAD
    </div>
=======
//     </AnalyticsContext.Provider>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
