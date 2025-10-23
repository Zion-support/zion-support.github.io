<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
=======
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from "react"
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95

import { logger } from '../utils/logger';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string) => void;
  trackPerformance: (metric: string, value: number) => void;
  trackError: (error: Error, context?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);

export const useAnalytics = () => {
  const _context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  enableDebug = process.env['NODE_ENV'] === 'development',
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !googleAnalyticsId) return;

    // Initialize Google Analytics
    const _script = document.createElement('script');
    script.async = true;
    script['src'] = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize gtag
      (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
      }
      (window as unknown as { gtag: typeof gtag }).gtag = gtag;

      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      setIsInitialized(true);
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [googleAnalyticsId]);

  const trackEvent = (event: AnalyticsEvent) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      logger.debug('Analytics Event', 'Analytics', { event: JSON.stringify(event) });
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  const trackPageView = (page: string) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      logger.debug('Page View', 'Analytics', { page });
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: page,
      });
    }
  };

  const trackPerformance = (metric: string, value: number) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {
      logger.perf(metric, value);
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: metric,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  };

  const trackError = (error: Error, context?: string) => {
    if (!isInitialized || typeof window === 'undefined') return;

    if (enableDebug) {

    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          context: context || 'unknown',
        },
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackPerformance,
    trackError,
  };

  return (
<<<<<<< HEAD
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
=======
  )
}
=======
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AnalyticsProvider
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AnalyticsProvider solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

export default AnalyticsProvider
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95
  );
};

export default AnalyticsProvider;
