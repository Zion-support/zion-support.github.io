'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [analytics, setAnalytics] = useState<AnalyticsContextType>({
    trackEvent: (event: string, properties?: Record<string, any>) => {
      console.log('Analytics Event:', event, properties);
    },
    trackPageView: (page: string) => {
      console.log('Page View:', page);
    },
    setUser: (userId: string, properties?: Record<string, any>) => {
      console.log('Set User:', userId, properties);
    }
  });

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const EnhancedAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics solutions powered by AI and machine learning" />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Enhanced Analytics</h1>
          <p className="text-gray-300">Advanced analytics solutions powered by AI and machine learning</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;
