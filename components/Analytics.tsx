'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

export default function Analytics({ 
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  enableDebug = process.env.NODE_ENV === 'development'
}: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && googleAnalyticsId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        debug_mode: enableDebug,
      });

      if (enableDebug) {
        console.log('🔍 Google Analytics initialized:', googleAnalyticsId);
      }
    }
  }, [googleAnalyticsId, enableDebug]);

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalyticsId, {
        page_path: pathname,
        page_title: document.title,
      });

      if (enableDebug) {
        console.log('📊 Page view tracked:', pathname);
      }
    }
  }, [pathname, googleAnalyticsId, enableDebug]);

  return null;
}

// Analytics utility functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event tracked:', { action, category, label, value });
    }
  }
};

export const trackConversion = (conversionId: string, value?: number, currency = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Conversion tracked:', { conversionId, value, currency });
    }
  }
};

export const trackCustomEvent = (eventName: string, parameters: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Custom event tracked:', eventName, parameters);
    }
  }
};

export const trackUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      user_properties: properties,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('👤 User properties set:', properties);
    }
  }
};

export const trackTiming = (name: string, value: number, category = 'Performance') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: value,
      event_category: category,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('⏱️ Timing tracked:', { name, value, category });
    }
  }
};