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
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Generate session ID
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    
    // Load user ID from localStorage
    const storedUserId = localStorage.getItem('analytics_user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    const eventData = {
      event,
      properties: {
        ...properties,
        userId,
        sessionId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    };

    // Send to analytics service
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event, {
          event_category: properties?.category || 'general',
          event_label: properties?.label || '',
          value: properties?.value || 0,
          ...properties,
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }).catch(error => {
        console.warn('Analytics tracking failed:', error);
      });
    }

    console.log('Analytics Event:', eventData);
  };

  const trackPageView = (page: string) => {
    trackEvent('page_view', {
      page,
      title: document.title,
    });
  };

  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId);
    localStorage.setItem('analytics_user_id', newUserId);
    
    trackEvent('user_identified', {
      userId: newUserId,
      ...properties,
    });
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;