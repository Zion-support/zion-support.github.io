import React, { useEffect } from 'react';
import { Home } from 'lucide-react';

import Head from 'next/head';
interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    event: string;
    category: string;
    action: string;
    label?: string;
    value?: number;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  pageName = 'Home',
  customEvents = [],
}) => {
  useEffect(() => {
    // Enhanced analytics tracking
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config,GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          custom_map: {
            custom_parameter_1: 'zion_tech_group',
          },
        });
      }
    };
    // Track user engagement
    const trackEngagement = () => {
      const startTime = Date.now();
      let isActive = true;
      const trackTimeOnPage = () => {
        if (isActive) {
          const timeSpent = Date.now() - startTime;
          if (timeSpent > 30000) {
            // 30 seconds
            // Track meaningful engagement
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event,engagement', {
                event_category: 'user_behavior',
                event_label: 'meaningful_engagement',
                value: Math.floor(timeSpent / 1000),
              });
            }
          }
        }
      };

      // Track when user leaves
      const handleBeforeUnload = () => {
        isActive = false;
        const timeSpent = Date.now() - startTime;
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event,page_exit', {
            event_category: 'user_behavior',
            event_label: 'time_on_page',
            value: Math.floor(timeSpent / 1000),
          });
        }
      };

      // Track scroll depth
      const trackScrollDepth = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        );

        if (scrollDepth >= 25 && scrollDepth < 50) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event,scroll', {
              event_category: 'user_behavior',
              event_label: '25_percent_scroll',
              value: scrollDepth,
            });
          }
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event,scroll', {
              event_category: 'user_behavior',
              event_label: '50_percent_scroll',
              value: scrollDepth,
            });
          }
        } else if (scrollDepth >= 75) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event,scroll', {
              event_category: 'user_behavior',
              event_label: '75_percent_scroll',
              value: scrollDepth,
            });
          }
        }
      };
      // Track button clicks
      const trackButtonClicks = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const buttonText =
            target.textContent ||
            target.closest('button')?.textContent ||
            'Unknown';
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event,click', {
              event_category: 'button_click',
              event_label: buttonText,
              page_title: pageName,
            });
          }
        }
      };

      // Track form interactions
      const trackFormInteractions = (e: Event) => {
        const target = e.target as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement;
        if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT'
        ) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event,form_interaction', {
              event_category: 'form_engagement',
              event_label: target.name || target.id || 'unknown_field',
              page_title: pageName,
            });
          }
        }
      };

      // Set up event listeners
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('scroll', trackScrollDepth, { passive: true });
      document.addEventListener('click', trackButtonClicks);
      document.addEventListener('focus', trackFormInteractions, true);
      // Track time on page every 30 seconds
      const interval = setInterval(trackTimeOnPage, 30000);
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener('scroll', trackScrollDepth);
        document.removeEventListener('click', trackButtonClicks);
        document.removeEventListener('focus', trackFormInteractions, true);
        clearInterval(interval);
      };
    };

    // Track custom events
    const trackCustomEvents = () => {
      customEvents.forEach(event => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', event.event, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
          });
        }
      });
    };

    // Initialize tracking
    trackPageView();
    const cleanup = trackEngagement();
    trackCustomEvents();

    return cleanup;
  }, [pageName, customEvents]);
  return (
    <Head>
      {/* Google Analytics 4 */}
      <script
        async
<<<<<<< HEAD:components/AnalyticsTracker.tsx
        src="https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
=======
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
>>>>>>> main:components.disabled/components/AnalyticsTracker.tsx
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
<<<<<<< HEAD:components/AnalyticsTracker.tsx
            gtag('config', 'GA_MEASUREMENT_ID', {
=======
            gtag('config,GA_MEASUREMENT_ID', {
>>>>>>> main:components.disabled/components/AnalyticsTracker.tsx
              page_title: '${pageName}', page_location: window.location.href,
              send_page_view: true
            })
          `,
        }}
      />
      {/* Enhanced E-commerce Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Track service interest
            function trackServiceInterest(serviceName, category) {
<<<<<<< HEAD:components/AnalyticsTracker.tsx
              gtag('event', 'view_item', {
=======
              gtag('event,view_item', {
>>>>>>> main:components.disabled/components/AnalyticsTracker.tsx
                event_category: 'service_interest', event_label: serviceName,
                items: [{
                  item_id: serviceName, item_name: serviceName,
                  item_category: category, item_brand: 'Zion Tech Group'
                }]
              })}

            // Track contact form submissions
            function trackContactSubmission(formType) {
<<<<<<< HEAD:components/AnalyticsTracker.tsx
              gtag('event', 'generate_lead', {
=======
              gtag('event,generate_lead', {
>>>>>>> main:components.disabled/components/AnalyticsTracker.tsx
                event_category: 'contact', event_label: formType,
                value: 1
              })}

            // Track demo requests
            function trackDemoRequest(demoType) {
<<<<<<< HEAD:components/AnalyticsTracker.tsx
              gtag('event', 'request_demo', {
=======
              gtag('event,request_demo', {
>>>>>>> main:components.disabled/components/AnalyticsTracker.tsx
                event_category: 'demo', event_label: demoType,
                value: 1
              })}
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsTracker;
