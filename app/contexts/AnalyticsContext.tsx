'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  isEnabled: boolean;



=======
  isEnabled: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
=======
  isEnabled: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-29e3
=======
  isEnabled: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-6c11
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-29e3
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6c11
  const [isEnabled, setIsEnabled] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    // Check if analytics is enabled
    setIsEnabled(true);
  }, []);
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    // Track event logic here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-29e3
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6c11
    console.log('Analytics Event:', eventName, properties);
  };
  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    // Track page view logic here
    console.log('Page View:', pageName);
  };
  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId);
    console.log('User Set:', newUserId, properties);
  };
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled,
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export { AnalyticsContext };