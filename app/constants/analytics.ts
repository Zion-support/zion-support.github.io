// Analytics constants and utilities
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  SCROLL: 'scroll',
  FORM_SUBMIT: 'form_submit',
  DOWNLOAD: 'download',
  OUTBOUND_CLICK: 'outbound_click'
} as const;

export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: 'GA_MEASUREMENT_ID',
  DEBUG_MODE: process.env.NODE_ENV === 'development'
} as const;