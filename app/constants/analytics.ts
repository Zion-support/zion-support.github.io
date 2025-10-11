// Analytics constants
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  LINK_CLICK: 'link_click',
  SCROLL: 'scroll',
  TIME_ON_PAGE: 'time_on_page',
} as const;

export const ANALYTICS_CONFIG = {
  DEBUG: process.env.NODE_ENV === 'development',
  SAMPLE_RATE: 1.0,
  BATCH_SIZE: 10,
  FLUSH_INTERVAL: 5000,
} as const;