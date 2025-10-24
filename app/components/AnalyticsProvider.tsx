'use client';;
import React, {createContext, useContext, useEffect, ReactNode}from 'react';

import React from 'react';

export const useAnalytics = () => {const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}return context;

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}
'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react'
interface AnalyticsContextType {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (pageName: string, pagePath: string) => void
  }

const AnalyticsContext = createContext</string><AnalyticsContextType | undefined>(undefined)
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default AnalyticsProvider;
