'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface AnalyticsProps {
  gaId?: string;
  enablePageTracking?: boolean;
  enableEventTracking?: boolean;
  enableEcommerce?: boolean;
  enablePerformanceTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  gaId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  enablePageTracking = true,
  enableEventTracking = true,
  enableEcommerce = true,
  enablePerformanceTracking = true
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    const initGA = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll handle this manually
      });
    };

    initGA();

    // Track page views
    if (enablePageTracking) {
      const trackPageView = () => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: pathname
          });
        }
      };

      // Track initial page load
      trackPageView();

      // Track route changes
      const handleRouteChange = () => {
        trackPageView();
      };

      // Listen for route changes (Next.js)
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [gaId, enablePageTracking, pathname]);

  // Track custom events
  useEffect(() => {
    if (!enableEventTracking || typeof window === 'undefined') return;

    const trackEvent = (eventName: string, parameters: any = {}) => {
      if ('gtag' in window) {
        (window as any).gtag('event', eventName, {
          event_category: parameters.category || 'General',
          event_label: parameters.label || '',
          value: parameters.value || 0,
          ...parameters
        });
      }
    };

    // Track button clicks
    const trackButtonClicks = () => {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const button = target.closest('button, a');
        
        if (button) {
          const buttonText = button.textContent?.trim() || '';
          const buttonClass = button.className || '';
          
          trackEvent('button_click', {
            category: 'Engagement',
            label: buttonText,
            button_class: buttonClass
          });
        }
      });
    };

    // Track form submissions
    const trackFormSubmissions = () => {
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        const formId = form.id || 'unknown';
        const formClass = form.className || '';
        
        trackEvent('form_submit', {
          category: 'Engagement',
          label: formId,
          form_class: formClass
        });
      });
    };

    // Track file downloads
    const trackDownloads = () => {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[href]') as HTMLAnchorElement;
        
        if (link && (link.href.includes('.pdf') || link.href.includes('.doc') || link.href.includes('.zip'))) {
          const fileName = link.href.split('/').pop() || 'unknown';
          
          trackEvent('file_download', {
            category: 'Engagement',
            label: fileName,
            file_url: link.href
          });
        }
      });
    };

    // Track external link clicks
    const trackExternalLinks = () => {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[href]') as HTMLAnchorElement;
        
        if (link && link.hostname !== window.location.hostname) {
          trackEvent('external_link_click', {
            category: 'Engagement',
            label: link.hostname,
            link_url: link.href
          });
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      
      const updateScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track at 25%, 50%, 75%, 100%
          if (maxScroll >= 25 && maxScroll < 50) {
            trackEvent('scroll_depth', { category: 'Engagement', label: '25%' });
          } else if (maxScroll >= 50 && maxScroll < 75) {
            trackEvent('scroll_depth', { category: 'Engagement', label: '50%' });
          } else if (maxScroll >= 75 && maxScroll < 100) {
            trackEvent('scroll_depth', { category: 'Engagement', label: '75%' });
          } else if (maxScroll >= 100) {
            trackEvent('scroll_depth', { category: 'Engagement', label: '100%' });
          }
        }
      };

      window.addEventListener('scroll', updateScrollDepth, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', updateScrollDepth);
      };
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        if (timeOnPage >= 30) { // Track every 30 seconds
          trackEvent('time_on_page', {
            category: 'Engagement',
            label: `${timeOnPage} seconds`,
            value: timeOnPage
          });
        }
      };

      const interval = setInterval(trackTime, 30000);
      
      return () => {
        clearInterval(interval);
      };
    };

    // Initialize tracking
    trackButtonClicks();
    trackFormSubmissions();
    trackDownloads();
    trackExternalLinks();
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();

    return () => {
      cleanupScroll?.();
      cleanupTime?.();
    };
  }, [enableEventTracking]);

  // Track ecommerce events
  useEffect(() => {
    if (!enableEcommerce || typeof window === 'undefined') return;

    // Track service views
    const trackServiceViews = () => {
      const serviceElements = document.querySelectorAll('[data-service]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const service = entry.target.getAttribute('data-service');
            if (service) {
              if ('gtag' in window) {
                (window as any).gtag('event', 'view_item', {
                  event_category: 'Ecommerce',
                  item_id: service,
                  item_name: service,
                  item_category: 'Services'
                });
              }
            }
          }
        });
      });

      serviceElements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    };

    const cleanup = trackServiceViews();
    return cleanup;
  }, [enableEcommerce]);

  return null;
};

export default Analytics;