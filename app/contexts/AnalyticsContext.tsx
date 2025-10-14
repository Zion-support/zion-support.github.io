<<<<<<< HEAD
import { createContext } from 'react';

interface AnalyticsContextType {
=======
import { createContext, useState, useEffect, ReactNode } from 'react';'interface AnalyticsContextType {
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}
<<<<<<< HEAD

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
interface AnalyticsProviderProps {
  children: ReactNode;
}
export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true);
  }, []);
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    // Track event logic here
    console.log('Analytics Event:', eventName, properties);'  };
  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    // Track page view logic here
    console.log('Page View:', pageName);'  };
  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    console.log('User Set:', newUserId, properties);'  };
  const value = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export { AnalyticsContext };
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
