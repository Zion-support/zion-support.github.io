'use client';
import React, { useEffect, useCallback } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enableEnhancedTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableConversionTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enableEnhancedTracking = true,
  enablePerformanceTracking = true,
  enableUserBehaviorTracking = true,
  enableConversionTracking = true
}) => {
  const initializeAnalytics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      anonymize_ip: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: false
    });

    // Enhanced tracking configuration
    if (enableEnhancedTracking) {
      gtag('config', trackingId, {
        custom_map: {
          'custom_parameter_1': 'user_type',
          'custom_parameter_2': 'engagement_level',
          'custom_parameter_3': 'conversion_funnel'
        }
      });
    }
  }, [trackingId, enableEnhancedTracking]);

  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    if (typeof window === 'undefined' || !('gtag' in window)) return;

    (window as any).gtag('event', 'page_view', {
      page_title: pageTitle || document.title,
      page_location: window.location.origin + pagePath,
      page_path: pagePath
    });
  }, []);

  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window === 'undefined' || !('gtag' in window)) return;

    (window as any).gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }, []);

  const trackConversion = useCallback((conversionId: string, value?: number, currency: string = 'USD') => {
    if (typeof window === 'undefined' || !('gtag' in window)) return;

    (window as any).gtag('event', 'conversion', {
      send_to: conversionId,
      value: value || 0,
      currency: currency
    });
  }, []);

  const trackPerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('gtag' in window) || !enablePerformanceTracking) return;

    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          trackEvent('web_vitals', {
            metric_name: 'CLS',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
            category: 'performance'
          });
        });
        
        getFID((metric) => {
          trackEvent('web_vitals', {
            metric_name: 'FID',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
            category: 'performance'
          });
        });
        
        getFCP((metric) => {
          trackEvent('web_vitals', {
            metric_name: 'FCP',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
            category: 'performance'
          });
        });
        
        getLCP((metric) => {
          trackEvent('web_vitals', {
            metric_name: 'LCP',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
            category: 'performance'
          });
        });
        
        getTTFB((metric) => {
          trackEvent('web_vitals', {
            metric_name: 'TTFB',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
            category: 'performance'
          });
        });
      });
    }
  }, [trackEvent, enablePerformanceTracking]);

  const trackUserBehavior = useCallback(() => {
    if (typeof window === 'undefined' || !('gtag' in window) || !enableUserBehaviorTracking) return;

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (scrollDepth >= 25 && scrollDepth < 50) {
          trackEvent('scroll_depth', { depth: 25, category: 'engagement' });
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          trackEvent('scroll_depth', { depth: 50, category: 'engagement' });
        } else if (scrollDepth >= 75 && scrollDepth < 90) {
          trackEvent('scroll_depth', { depth: 75, category: 'engagement' });
        } else if (scrollDepth >= 90) {
          trackEvent('scroll_depth', { depth: 90, category: 'engagement' });
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage >= 30) {
        trackEvent('time_on_page', { duration: timeOnPage, category: 'engagement' });
      }
    };

    // Track form interactions
    const trackFormInteractions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form, index) => {
        form.addEventListener('submit', () => {
          trackEvent('form_submit', {
            form_id: form.id || `form_${index}`,
            form_name: form.name || 'unnamed',
            category: 'conversion'
          });
        });

        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          input.addEventListener('focus', () => {
            trackEvent('form_field_focus', {
              field_name: (input as HTMLInputElement).name || 'unnamed',
              form_id: form.id || `form_${index}`,
              category: 'engagement'
            });
          });
        });
      });
    };

    // Track link clicks
    const trackLinkClicks = () => {
      const links = document.querySelectorAll('a[href]');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          const target = e.target as HTMLAnchorElement;
          trackEvent('link_click', {
            link_url: target.href,
            link_text: target.textContent?.trim() || '',
            link_destination: target.target || '_self',
            category: 'engagement'
          });
        });
      });
    };

    // Track button clicks
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          trackEvent('button_click', {
            button_text: target.textContent?.trim() || '',
            button_class: target.className || '',
            category: 'engagement'
          });
        });
      });
    };

    // Initialize tracking
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    setInterval(trackTimeOnPage, 30000); // Check every 30 seconds
    trackFormInteractions();
    trackLinkClicks();
    trackButtonClicks();
  }, [trackEvent, enableUserBehaviorTracking]);

  const trackConversions = useCallback(() => {
    if (typeof window === 'undefined' || !('gtag' in window) || !enableConversionTracking) return;

    // Track contact form submissions
    const contactForms = document.querySelectorAll('form[action*="contact"], form[data-form="contact"]');
    contactForms.forEach((form) => {
      form.addEventListener('submit', () => {
        trackConversion('AW-CONVERSION_ID', 1);
        trackEvent('contact_form_submit', {
          category: 'conversion',
          label: 'contact_form'
        });
      });
    });

    // Track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach((link) => {
      link.addEventListener('click', () => {
        trackEvent('phone_click', {
          category: 'conversion',
          label: 'phone_number'
        });
      });
    });

    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach((link) => {
      link.addEventListener('click', () => {
        trackEvent('email_click', {
          category: 'conversion',
          label: 'email_address'
        });
      });
    });

    // Track service page visits
    const serviceLinks = document.querySelectorAll('a[href*="/ai-"], a[href*="/it-"], a[href*="/services"]');
    serviceLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const href = (link as HTMLAnchorElement).href;
        const serviceType = href.includes('/ai-') ? 'ai_services' : 
                           href.includes('/it-') ? 'it_services' : 'services';
        
        trackEvent('service_interest', {
          category: 'conversion',
          label: serviceType,
          service_url: href
        });
      });
    });
  }, [trackConversion, trackEvent, enableConversionTracking]);

  useEffect(() => {
    initializeAnalytics();
    trackPerformance();
    trackUserBehavior();
    trackConversions();

    // Track page view on mount
    trackPageView(window.location.pathname, document.title);
  }, [initializeAnalytics, trackPerformance, trackUserBehavior, trackConversions, trackPageView]);

  // Track route changes (for SPA)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleRouteChange = () => {
      trackPageView(window.location.pathname, document.title);
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Listen for pushstate/replacestate (programmatic navigation)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [trackPageView]);

  return null;
};

export default Analytics;