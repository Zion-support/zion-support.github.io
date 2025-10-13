<<<<<<< HEAD
import React, { useEffect, ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
=======
'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
interface AnalyticsProviderProps {
'use client;

import React, { createContext, useContext, useEffect } from 'react;
  if (!context) {
    throw new Error(useAnalytics must be used within an AnalyticsProvider);

export default AnalyticsProvider;
export default AnalyticsProvider;
