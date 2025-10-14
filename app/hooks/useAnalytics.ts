<<<<<<< HEAD
import { useContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

// This will be imported from the AnalyticsProvider component
declare const AnalyticsContext: React.Context<AnalyticsContextType | undefined>;
=======
'use client';
import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};