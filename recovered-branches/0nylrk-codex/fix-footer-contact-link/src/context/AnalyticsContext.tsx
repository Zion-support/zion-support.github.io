


  type: AnalyticsEventType,;


  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number
  userId?: string | null;
  metadata?: Record<string, any>
}


export interface AnalyticsContextType {;


export interface AnalyticsContextType {

export interface AnalyticsContextType {;


  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
  pageViews: number
  lastEvent: AnalyticsEvent | null
  events: AnalyticsEvent[]
  clearEvents: () => void
}


import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react',;
import { useLocation } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;



// Analytics event types;
export type AnalyticsEventType =;
  | 'page_view';
  | 'button_click';
  | 'form_submit';
  | 'form_error';
  | 'search';
  | 'filter';
  | 'conversion';
  | 'listing_view';
  | 'listing_contact';
  | 'payment_initiated';
  | 'payment_completed';
  | 'signup';


export interface AnalyticsEvent {
  type: AnalyticsEventType
  path?: string;
  component?: string;

import {useLocation} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react',;
import { useLocation } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
;

// Analytics event types;
export type AnalyticsEventType = ;
  | 'page_view';
  | 'button_click';
  | 'form_submit';
  | 'form_error';
  | 'search';
  | 'filter';
  | 'conversion';
  | 'listing_view';
  | 'listing_contact';
  | 'payment_initiated';
  | 'payment_completed';
  | 'signup';

  userId?: string | null;
  metadata?: Record<string, any>;
}
export interface AnalyticsContextType {;
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
  | 'login',;
// Interface for analytics events;
export interface AnalyticsEvent {;
  type: AnalyticsEventType,;
  path?: string,;
  component?: string,;
  elementId?: string,;
  timestamp: number,;
  userId?: string | null,;
  metadata?: Record<string any>;
}
;
export interface AnalyticsContextType {;
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string any>) => void,;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string any>) => void,;


  pageViews: number,;
  lastEvent: AnalyticsEvent | null,;
  events: AnalyticsEvent[],;
  clearEvents: () => void;
}



  // Track page views when location changes
  useEffect(() => {
    trackEvent('page_view', { path: location.pathname })
    setPageViews((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  // Function to track general analytics events
  const trackEvent = async (type: AnalyticsEventType, metadata: Record<string, any> = {}) => {


    try {
      // Store event in Supabase for persistent analytics
      await supabase.from('analytics_events').insert([{
        event_type: type
        path: location.pathname
        user_id: user?.id
        metadata: metadata

      }]);
      console.log(`Analytics event tracked: ${type}`, metadata)
    } catch (error) {
      console.error('Error logging analytics event:', error)

  const context = useContext(AnalyticsContext);
  if (!context) {;
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }


  // Cast is used here because the context default is undefined until provided;
  // by `AnalyticsProvider`. The runtime check above ensures it's defined.;
  return context as AnalyticsContextType;

};


