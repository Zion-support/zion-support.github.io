import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
}

class AnalyticsService {
  private isInitialized = false;
  private queue: Array<AnalyticsEvent | PageView> = [];

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Initialize Google Analytics if available
    if ((window as any).gtag) {
      this.isInitialized = true;
      this.processQueue();
    } else {
      // Load Google Analytics script
      this.loadGoogleAnalytics();
    }
  }

  private loadGoogleAnalytics(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID'}`;
    
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function(...args: any[]) {
        (window as any).dataLayer.push(args);
      };
      
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });

      this.isInitialized = true;
      this.processQueue();
    };

    document.head.appendChild(script);
  }

  private processQueue(): void {
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      if (item) {
        if ('action' in item) {
          this.trackEvent(item as AnalyticsEvent);
        } else {
          this.trackPageView(item as PageView);
        }
      }
    }
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event:', event);
    }
  }

  trackPageView(pageView: PageView): void {
    if (!this.isInitialized) {
      this.queue.push(pageView);
      return;
    }

    if ((window as any).gtag) {
      (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Page View:', pageView);
    }
  }

  trackCustomEvent(eventName: string, parameters: Record<string, any> = {}): void {
    if (!this.isInitialized) {
      this.queue.push({ action: eventName, category: 'custom', ...parameters } as AnalyticsEvent);
      return;
    }

    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Custom Event:', eventName, parameters);
    }
  }
}

const analyticsService = new AnalyticsService();

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    analyticsService.init();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const pageView = {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname,
    };
    analyticsService.trackPageView(pageView);
  }, [location]);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    analyticsService.trackEvent(event);
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    analyticsService.trackCustomEvent(eventName, parameters);
  }, []);

  const trackButtonClick = useCallback((buttonName: string, _location?: string) => {
    trackEvent({
      action: 'click',
      category: 'button',
      label: buttonName,
    });
  }, [trackEvent]);

  const trackFormSubmit = useCallback((formName: string, success: boolean) => {
    trackEvent({
      action: 'submit',
      category: 'form',
      label: formName,
      value: success ? 1 : 0,
    });
  }, [trackEvent]);

  const trackDownload = useCallback((fileName: string, _fileType: string) => {
    trackEvent({
      action: 'download',
      category: 'file',
      label: fileName,
    });
  }, [trackEvent]);

  const trackExternalLink = useCallback((_url: string, linkText: string) => {
    trackEvent({
      action: 'click',
      category: 'external_link',
      label: linkText,
    });
  }, [trackEvent]);

  const trackSearch = useCallback((searchTerm: string, resultsCount: number) => {
    trackEvent({
      action: 'search',
      category: 'site_search',
      label: searchTerm,
      value: resultsCount,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackCustomEvent,
    trackButtonClick,
    trackFormSubmit,
    trackDownload,
    trackExternalLink,
    trackSearch,
  };
};

export default useAnalytics;