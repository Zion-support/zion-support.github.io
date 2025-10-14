export const advanced Analytics = {
  track Page View: (page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: page,
        page_location: window.location.href
      });
    }
  },
  
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },
  
  trackConversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversion Id,
        value: value,
        currency: currency
      });
    }
  },
  set User Properties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: properties
      });
    }
  }
};