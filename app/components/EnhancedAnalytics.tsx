'use client';
import React, { useEffect } from 'react';
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
  enableTracking?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  children,
  enableTracking = true,
  enablePerformanceMonitoring = true
}) => {
  useEffect(() => {
    if (enableTracking && typeof window !== 'undefined') {
      // Initialize analytics tracking
      console.log('Analytics initialized');
'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          event,
          properties,
        );
      }

      // Custom analytics
      }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "config",
          process.env.REACT_APP_GA_ID,
          {
            user_id: userId,
            custom_map: traits,
          },
        );
      }

      // Custom analytics
      }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          "page_view",
          {
            page_title: name,
            page_location: window.location.href,
            ...properties,
          },
        );
      }

      // Custom analytics
      }
  };

  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, parameters);
    }
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  }, [trackingId]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits
      });
    }
  }, [trackingId]);

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
    identify
  };

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

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      observer.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });

      return () => observer.disconnect();
    }
  }, []);
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
export default AnalyticsProvider;
