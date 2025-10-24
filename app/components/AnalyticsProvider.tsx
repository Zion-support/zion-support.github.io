'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {;
  trackEvent: (_eventName: string, _parameters?: Record<string, unknown>) => void;
  trackPageView: (_pageName: string, _pagePath: string) => void}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined

)
export const useAnalytics = ($2) => {

$3};
  return context
interface AnalyticsProviderProps {;
  children: ReactNode}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {

  useEffect(() => {

    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
        script.async = true;
        document.head.appendChild(script);
        window.gtag =
          window.gtag ||
          function(...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
        window.gtag("js", new Date()
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")}
  }, [])


