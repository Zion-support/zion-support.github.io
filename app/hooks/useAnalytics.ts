<<<<<<< HEAD
import { useContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

// This will be imported from the AnalyticsProvider component
declare const AnalyticsContext: React.Context<AnalyticsContextType | undefined>;

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
=======
'use client';'import { useContext } from 'react';'import { AnalyticsContext } from '../contexts/AnalyticsContext';'
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');'  }
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  return context;
};