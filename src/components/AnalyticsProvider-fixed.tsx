import React, { useEffect, ReactNode } from 'react';

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views
      const trackPageView = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      };

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
        if (href && href.startsWith('tel:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: href
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
        if (href && href.startsWith('mailto:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'email_click', {
              event_category: 'engagement',
              event_label: 'email_address',
              value: href
            });
          }
        }
      });

      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.classList.contains('cyber-button')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'button_click', {
              event_category: 'engagement',
              event_label: target.textContent || 'button',
              value: 1
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const target = e.target as HTMLFormElement;
        if ((window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: target.id || 'form',
            value: 1
          });
        }
      });

      // Track external link clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
        if (href && (href.startsWith('http://') || href.startsWith('https://')) && !href.includes(window.location.hostname)) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'external_link_click', {
              event_category: 'engagement',
              event_label: href,
              value: 1
            });
          }
        }
      });

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: 'seconds',
            value: timeOnPage
          });
        }
      };

      // Track time on page every 30 seconds
      const timeInterval = setInterval(trackTimeOnPage, 30000);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        clearInterval(timeInterval);
      };
    };

    const cleanup = initAnalytics();
    
    // Handle route changes
    const handleRouteChange = () => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;