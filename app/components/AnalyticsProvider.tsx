<<<<<<< HEAD

'use client';
import { createContext, useContext, useEffect} from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
 void;

=======
import { createContext, useContext, useEffect} from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
const AnalyticsContext = createContext<AnalyticsContextType | undefined />(undefined);
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  return context;
<<<<<<< HEAD

interface AnalyticsProviderProps {
  children: React.ReactNode;

=======
}
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
  useEffect(() => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
    // Initialize analytics
    // Analytics initialization logic here
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, unknown />) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
  };
<<<<<<< HEAD

=======
  const trackPageView = (pageName: string) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
  };
  const value: const AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };
  return (
      {children}
  );