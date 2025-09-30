/**
 * Analytics Utility
 * Handles tracking of user interactions, page views, and custom events
 */

// Types
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  path: string;
  title: string;
  referrer?: string;
}

interface UserProperties {
  userId?: string;
  userType?: 'visitor' | 'customer' | 'enterprise';
  industry?: string;
}

// Analytics Provider Configuration
const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Initialize analytics tracking
 */
export const initAnalytics = (): void => {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return;

  // Initialize Google Analytics
  if (GA_MEASUREMENT_ID) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track page view
 */
export const trackPageView = (data: PageViewData): void => {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return;

  try {
    // Google Analytics
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: data.path,
        page_title: data.title,
      });
    }

    // Custom analytics endpoint (optional)
    if (process.env.NEXT_PUBLIC_CUSTOM_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_CUSTOM_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'pageview',
          ...data,
          timestamp: new Date().toISOString(),
        }),
      }).catch((error) => console.error('Analytics error:', error));
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track custom event
 */
export const trackEvent = (event: AnalyticsEvent): void => {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return;

  try {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track user properties
 */
export const setUserProperties = (properties: UserProperties): void => {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return;

  try {
    if (window.gtag) {
      window.gtag('set', 'user_properties', properties);
    }
  } catch (error) {
    console.error('Error setting user properties:', error);
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent({
    category: 'Form',
    action: success ? 'submit_success' : 'submit_error',
    label: formName,
  });
};

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent({
    category: 'Button',
    action: 'click',
    label: `${buttonName} - ${location}`,
  });
};

/**
 * Track service inquiry
 */
export const trackServiceInquiry = (serviceName: string): void => {
  trackEvent({
    category: 'Service',
    action: 'inquiry',
    label: serviceName,
  });
};

/**
 * Track phone call
 */
export const trackPhoneCall = (location: string): void => {
  trackEvent({
    category: 'Contact',
    action: 'phone_call',
    label: location,
  });
};

/**
 * Track email click
 */
export const trackEmailClick = (location: string): void => {
  trackEvent({
    category: 'Contact',
    action: 'email_click',
    label: location,
  });
};

/**
 * Track download
 */
export const trackDownload = (fileName: string, fileType: string): void => {
  trackEvent({
    category: 'Download',
    action: 'file_download',
    label: `${fileName} (${fileType})`,
  });
};

/**
 * Track video play
 */
export const trackVideoPlay = (videoTitle: string): void => {
  trackEvent({
    category: 'Video',
    action: 'play',
    label: videoTitle,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number): void => {
  trackEvent({
    category: 'Engagement',
    action: 'scroll_depth',
    label: `${depth}%`,
    value: depth,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number): void => {
  trackEvent({
    category: 'Engagement',
    action: 'time_on_page',
    value: seconds,
  });
};

/**
 * Track search
 */
export const trackSearch = (searchTerm: string, resultsCount: number): void => {
  trackEvent({
    category: 'Search',
    action: 'search_query',
    label: searchTerm,
    value: resultsCount,
  });
};

/**
 * Track external link click
 */
export const trackExternalLink = (url: string): void => {
  trackEvent({
    category: 'External Link',
    action: 'click',
    label: url,
  });
};

/**
 * Track error
 */
export const trackError = (errorType: string, errorMessage: string): void => {
  trackEvent({
    category: 'Error',
    action: errorType,
    label: errorMessage,
  });
};

/**
 * Track conversion
 */
export const trackConversion = (conversionType: string, value?: number): void => {
  trackEvent({
    category: 'Conversion',
    action: conversionType,
    value: value,
  });
};

// Type augmentation for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default {
  init: initAnalytics,
  pageView: trackPageView,
  event: trackEvent,
  setUserProperties,
  formSubmission: trackFormSubmission,
  buttonClick: trackButtonClick,
  serviceInquiry: trackServiceInquiry,
  phoneCall: trackPhoneCall,
  emailClick: trackEmailClick,
  download: trackDownload,
  videoPlay: trackVideoPlay,
  scrollDepth: trackScrollDepth,
  timeOnPage: trackTimeOnPage,
  search: trackSearch,
  externalLink: trackExternalLink,
  error: trackError,
  conversion: trackConversion,
};