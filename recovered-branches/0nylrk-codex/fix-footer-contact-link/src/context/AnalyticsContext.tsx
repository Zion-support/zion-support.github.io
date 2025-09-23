
<<<<<<< HEAD
import React{ createContextuseStateuseContextuseEffectReactNode } from 'react';
=======
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

// Analytics event types
export type AnalyticsEventType = 
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'form_error'
  | 'search'
  | 'filter'
  | 'conversion'
  | 'listing_view'
  | 'listing_contact'
  | 'payment_initiated'
  | 'payment_completed'
  | 'signup'
  | 'login';

// Interface for analytics events
export interface AnalyticsEvent {
  type: AnalyticsEventType;
  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number;
  userId?: string | null;
<<<<<<< HEAD
  metadata?: Record<stringany>;
}

export interface AnalyticsContextType {
  trackEvent: (type: AnalyticsEventTypemetadata?: Record<stringany>) => void;
  trackConversion: (conversionType: stringvalue?: numbermetadata?: Record<stringany>) => void;
=======
  metadata?: Record<string, any>;
}

export interface AnalyticsContextType {
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
>>>>>>> origin/auto/autonomy-17186719616
  pageViews: number;
  lastEvent: AnalyticsEvent | null;
  events: AnalyticsEvent[];
  clearEvents: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
<<<<<<< HEAD
  const [pageViewsetPageViews] = useState(0);
  const [eventsetEvents] = useState<AnalyticsEvent[]>([]);
  const [lastEventsetLastEvent] = useState<AnalyticsEvent | null>(null);
=======
  const [pageViews, setPageViews] = useState(0);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [lastEvent, setLastEvent] = useState<AnalyticsEvent | null>(null);
>>>>>>> origin/auto/autonomy-17186719616
  const location = useLocation();
  const { user } = useAuth();

  // Track page views when location changes
  useEffect(() => {
<<<<<<< HEAD
    trackEvent('page_view'{ path: location.pathname });
    setPageViews((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }[location.pathname]);

  // Function to track general analytics events
  const trackEvent = async (type: AnalyticsEventTypemetadata: Record<stringany> = {}) => {
=======
    trackEvent('page_view', { path: location.pathname });
    setPageViews((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Function to track general analytics events
  const trackEvent = async (type: AnalyticsEventType, metadata: Record<string, any> = {}) => {
>>>>>>> origin/auto/autonomy-17186719616
    const event: AnalyticsEvent = {
      type,
      path: location.pathname,
      timestamp: Date.now(),
      userId: user?.id,
      metadata
    };
    
<<<<<<< HEAD
    setEvents((prevEvents) => [...prevEventsevent]);
=======
    setEvents((prevEvents) => [...prevEvents, event]);
>>>>>>> origin/auto/autonomy-17186719616
    setLastEvent(event);
    
    try {
      // Store event in Supabase for persistent analytics
      await supabase.from('analytics_events').insert([{
        event_type: type,
        path: location.pathname,
        user_id: user?.id,
        metadata: metadata
      }]);
      
<<<<<<< HEAD
      console.log(`Analytics event tracked: ${type}`metadata);
    } catch (error) {
      console.error('Error logging analytics event:'error);
=======
      console.log(`Analytics event tracked: ${type}`, metadata);
    } catch (error) {
      console.error('Error logging analytics event:', error);
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  // Function to track conversion events
<<<<<<< HEAD
  const trackConversion = (conversionType: stringvalue?: numbermetadata: Record<stringany> = {}) => {
    trackEvent('conversion'{ 
      conversionType
      value
=======
  const trackConversion = (conversionType: string, value?: number, metadata: Record<string, any> = {}) => {
    trackEvent('conversion', { 
      conversionType, 
      value, 
>>>>>>> origin/auto/autonomy-17186719616
      ...metadata 
    });
  };
  
  // Clear events (for development or testing)
  const clearEvents = () => {
    setEvents([]);
    setLastEvent(null);
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackConversion,
        pageViews,
        lastEvent,
        events,
        clearEvents
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  // Cast is used here because the context default is undefined until provided
  // by `AnalyticsProvider`. The runtime check above ensures it's defined.
  return context as AnalyticsContextType;
};
