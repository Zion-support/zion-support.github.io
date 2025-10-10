'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedAnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enableGoogleTagManager?: boolean;
  enableFacebookPixel?: boolean;
  enableCustomEvents?: boolean;
  enablePerformanceTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableConversionTracking?: boolean;
  enableHeatmapTracking?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps>= ({
  enableGoogleAnalytics = true,
  enableGoogleTagManager = true,
  enableFacebookPixel = false,
  enableCustomEvents = true,
  enablePerformanceTracking = true,
  enableUserBehaviorTracking = true,
  enableConversionTracking = true,
  enableHeatmapTracking = false,
}) => {
  // Google Analytics setup
  const setupGoogleAnalytics = useCallback(() => {
    if (typeof window === 'undefined' || !enableGoogleAnalytics) return;

    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,

    // Enhanced ecommerce tracking
    gtag('config', GA_MEASUREMENT_ID, {)
    custom_map: {
        'custom_parameter_1': 'service_category',
        'custom_parameter_2': 'service_type',
        'custom_parameter_3': 'user_type'
      }

  }, [enableGoogleAnalytics]);

  // Google Tag Manager setup
  const setupGoogleTagManager = useCallback(() => {
    if (typeof window === 'undefined' || !enableGoogleTagManager) return;

    const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM ID

    // GTM script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':)
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

  }, [enableGoogleTagManager]);

  // Facebook Pixel setup
  const setupFacebookPixel = useCallback(() => {
    if (typeof window === 'undefined' || !enableFacebookPixel) return;

    const PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with actual Pixel ID

    // Facebook Pixel initialization
    (function(f: Window, b: Document, e: string, v: string, n: unknown, t: HTMLScriptElement, s: HTMLScriptElement | null) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq?.('init', PIXEL_ID);
    window.fbq?.('track', 'PageView');

  }, [enableFacebookPixel]);

  // Custom event tracking
  const setupCustomEvents = useCallback(() => {
    if (typeof window === 'undefined' || !enableCustomEvents) return;

    // Track button clicks
    const trackButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a[role="button"]');

      if (button) {
        const buttonText = button.textContent?.trim() || '';
        const buttonClass = button.className || '';
        const buttonId = button.id || '';

        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'button_click', {
            event_category: 'Engagement',
            event_label: buttonText,
            button_class: buttonClass,
            button_id: buttonId,
            page_location: window.location.href,
            page_title: document.title

        }
      }
    };

    // Track form submissions)
    const trackFormSubmission = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || '';
      const formClass = form.className || '';
      const formAction = form.action || '';

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Engagement',
          event_label: 'Form Submission',
          form_id: formId,
          form_class: formClass,
          form_action: formAction,
          page_location: window.location.href

      }
    };

    // Track external link clicks)
    const trackExternalLinkClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href) {
        const url = new URL(target.href);
        const currentDomain = window.location.hostname;

        if (url.hostname !== currentDomain) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'Outbound',
              event_label: target.href,
              transport_type: 'beacon',
              page_location: window.location.href

          }
        }
      }
    };

    // Track scroll depth
    let maxScrollDepth = 0;)
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;

        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'Engagement',
              event_label: `${scrollPercent}%`,
              page_location: window.location.href

          }
        }
      }
    };

    // Add event listeners)
    document.addEventListener('click', trackButtonClick);
    document.addEventListener('submit', trackFormSubmission);
    document.addEventListener('click', trackExternalLinkClick);
    window.addEventListener('scroll', trackScrollDepth);

    // Track page visibility changes
    const trackVisibilityChange = () => {
      if (document.hidden) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_hide', {
            event_category: 'Engagement',
            page_location: window.location.href

        }
      } else {)
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_show', {
            event_category: 'Engagement',
            page_location: window.location.href

        }
      }
    };
)
    document.addEventListener('visibilitychange', trackVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('click', trackButtonClick);
      document.removeEventListener('submit', trackFormSubmission);
      document.removeEventListener('click', trackExternalLinkClick);
      window.removeEventListener('scroll', trackScrollDepth);
      document.removeEventListener('visibilitychange', trackVisibilityChange);
    };
  }, [enableCustomEvents]);

  // Performance tracking
  const setupPerformanceTracking = useCallback(() => {
    if (typeof window === 'undefined' || !enablePerformanceTracking) return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',)
    value: Math.round(lastEntry.startTime),
            custom_parameter_1: 'largest_contentful_paint'

        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;

          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',)
    value: Math.round(fid),
              custom_parameter_1: 'first_input_delay'

          }

      }).observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',)
    value: Math.round(clsValue * 1000),
            custom_parameter_1: 'cumulative_layout_shift'

        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    trackWebVitals();

    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_load_time', {
          event_category: 'Performance',
          event_label: 'Page Load',)
    value: Math.round(loadTime),
          custom_parameter_1: 'load_time'

      }

  }, [enablePerformanceTracking]);

  // User behavior tracking
  const setupUserBehaviorTracking = useCallback(() => {
    if (typeof window === 'undefined' || !enableUserBehaviorTracking) return;

    // Track time on page
    const startTime = Date.now();

    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          event_label: 'Time on Page',
          value: timeOnPage,
          custom_parameter_1: 'seconds'

      }
    };

    // Track before page unload)
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track mouse movements (heatmap data)
    if (enableHeatmapTracking) {
      let mouseMovements = 0;
      const trackMouseMovement = () => {
        mouseMovements++;

        if (mouseMovements % 10 === 0) { // Track every 10 movements
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'mouse_movement', {
              event_category: 'User Behavior',
              event_label: 'Mouse Activity',
              value: mouseMovements,
              custom_parameter_1: 'movement_count'

          }
        }
      };
)
    document.addEventListener('mousemove', trackMouseMovement);
    }

    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [enableUserBehaviorTracking, enableHeatmapTracking]);

  // Conversion tracking
  const setupConversionTracking = useCallback(() => {
    if (typeof window === 'undefined' || !enableConversionTracking) return;

    // Track contact form submissions
    const trackContactForm = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.id === 'contact-form' || form.className.includes('contact-form')) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            event_category: 'Conversion',
            event_label: 'Contact Form Submission',
            value: 1,
            custom_parameter_1: 'lead_generation'

        }
      }
    };

    // Track phone number clicks)
    const trackPhoneClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('a[href^="tel:"]')) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            event_category: 'Conversion',
            event_label: 'Phone Click',
            value: 1,
            custom_parameter_1: 'phone_lead'

        }
      }
    };

    // Track email clicks)
    const trackEmailClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('a[href^="mailto:"]')) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            event_category: 'Conversion',
            event_label: 'Email Click',
            value: 1,
            custom_parameter_1: 'email_lead'

        }
      }
    };
)
    document.addEventListener('submit', trackContactForm);
    document.addEventListener('click', trackPhoneClick);
    document.addEventListener('click', trackEmailClick);

    return () => {
      document.removeEventListener('submit', trackContactForm);
      document.removeEventListener('click', trackPhoneClick);
      document.removeEventListener('click', trackEmailClick);
    };
  }, [enableConversionTracking]);

  useEffect(() => {
    const cleanupFunctions = [
      setupGoogleAnalytics(),
      setupGoogleTagManager(),
      setupFacebookPixel(),
      setupCustomEvents(),
      setupPerformanceTracking(),
      setupUserBehaviorTracking(),
      setupConversionTracking(),
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, [
    setupGoogleAnalytics,
    setupGoogleTagManager,
    setupFacebookPixel,
    setupCustomEvents,
    setupPerformanceTracking,
    setupUserBehaviorTracking,
    setupConversionTracking,
  ]);

  return null;
};

export default EnhancedAnalytic</EnhancedAnalyticsProps>s</EnhancedAnalyticsProps>;</EnhancedAnalyticsProps>
</EnhancedAnalyticsProps>