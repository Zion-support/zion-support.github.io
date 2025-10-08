import React, { useEffect } from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window === 'undefined') return;

      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    };

    // Initialize analytics
    initGoogleAnalytics();

    // Track page views on route changes
    const trackPageView = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: url,
          page_title: document.title,
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent,
            });
          }
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          value: timeOnPage,
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track clicks on important elements
    const trackClicks = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      
      if (link) {
        const href = link.getAttribute('href');
        const text = link.textContent?.trim();
        
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'Navigation',
            event_label: text || href,
            value: href,
          });
        }
      }
      
      if (button) {
        const text = button.textContent?.trim();
        const type = button.getAttribute('type') || 'button';
        
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'Interaction',
            event_label: text || type,
            value: type,
          });
        }
      }
    };

    document.addEventListener('click', trackClicks);

    // Track form submissions
    const trackFormSubmissions = (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (form.tagName === 'FORM') {
        const formId = form.id || form.className || 'unknown';
        
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Conversion',
            event_label: formId,
          });
        }
      }
    };

    document.addEventListener('submit', trackFormSubmissions);

    // Track phone number clicks
    const trackPhoneClicks = (e: Event) => {
      const target = e.target as HTMLElement;
      const phoneLink = target.closest('a[href^="tel:"]');
      
      if (phoneLink) {
        const phoneNumber = phoneLink.getAttribute('href')?.replace('tel:', '');
        
        if (window.gtag) {
          window.gtag('event', 'phone_click', {
            event_category: 'Contact',
            event_label: phoneNumber,
          });
        }
      }
    };

    document.addEventListener('click', trackPhoneClicks);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      document.removeEventListener('click', trackClicks);
      document.removeEventListener('submit', trackFormSubmissions);
      document.removeEventListener('click', trackPhoneClicks);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;