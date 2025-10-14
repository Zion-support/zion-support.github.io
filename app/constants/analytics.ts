// Analytics constants
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  SCROLL: 'scroll',
  FORM_SUBMIT: 'form_submit',
  CONVERSION: 'conversion',
  ENGAGEMENT: 'engagement',
  ERROR: 'error'
} as const;

export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';

export const ANALYTICS_CONFIG = {
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development',
  trackPageViews: true,
  trackClicks: true,
  trackScrolls: true,
  trackForms: true
} as const;

export type AnalyticsEvent = typeof ANALYTICS_EVENTS[keyof typeof ANALYTICS_EVENTS];
