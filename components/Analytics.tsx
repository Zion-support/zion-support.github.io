<<<<<<< HEAD
"use client";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect } from 'react';

import Head from 'next / head';
;

interface AnalyticsProps {
  tracking_id?: string;
}


interface AnalyticsProps {;
  trackingId?: string;
}
const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX' }) => {;
  useEffect(() => {;
    // Google Analytics 4;
    if (typeof window !== 'undefined' && trackingId) {;
      // Load gtag script;
      const script = document && document.createElement('script');
      script && script.async = true;
      script && script.src = `https://www && www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document && document.head.appendChild(script);
      // Initialize gtag;
      window && window.dataLayer = window && window.dataLayer || [];
      function gtag(): any (...args: unknown[]) {;
        window && window.dataLayer.push(args),;

      }
      window && window.gtag = gtag;
      gtag('js', new Date());

      gtag('config', trackingId, {;
        page_title: document && document.title,;
        page_location: window && window.location.href,;
      });
      // Track page views
      const trackPageView = () => {
        gtag('event', 'page_view', {
          page_title: document.title
          page_location: window.location.href
          page_path: window.location.pathname
        });
      }
      // Track page view on load
      trackPageView();
      // Track page view on route change (for SPA behavior)
      const handleRouteChange = () => {
        trackPageView();
      }
      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange);
      // Cleanup
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      }
    }
  }, [trackingId]);
  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }
  // Track button clicks
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      button_name: buttonName
      location: location |window.location.pathname
    });
  }
  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName
      page_location: window.location.href
    });
  }
  // Track external link clicks
  const trackExternalLink = (url: string, linkText: string) => {
    trackEvent('external_link_click', {
      link_url: url
      link_text: linkText
      page_location: window.location.href
    });
  };
  // Expose tracking functions globally for use in other components;
  if (typeof window !== 'undefined') {;

    (window as any).trackEvent = trackEvent;
const Analytics: React.FC < AnalyticsProps> = ({ tracking_id = 'G - XXXXXXXXXX' }) => {
  useEffect (() => {
    // Google Analytics 4;
    // Check condition
if ( {) {
  $2
}
      // Load gtag script;
      const script = document.create_element ('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com / gtag / js?id=${tracking_id}`;
      document.head.append_child (script);
;
      // Initialize gtag;
      window.data_layer = window.data_layer || [];
      /**
 * gtag - Function description
 */
function gtag() {
        window.data_layer.push (args),
      }
      window.gtag = gtag;
      gtag ('js', new Date ());
      gtag ('config', tracking_id, {
        page_title: document.title,
        page_location: window.location.href,
      });
;
      // Track page views;
      const trackPageView = () =>: any {
        gtag ('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
;
      // Track page view on load;
      trackPageView ();
;
      // Track page view on route change (for SPA behavior);
      const handleRouteChange = () =>: any {
        trackPageView ();
      }
;
      // Listen for popstate events (back / forward navigation);
      window.addEventListener ('popstate', handleRouteChange);
;
      // Cleanup;
      return () => {
        window.removeEventListener ('popstate', handleRouteChange);
      }
    }
  }, [tracking_id]);
;
  // Track custom events;
  const track_event = (event_name: string, parameters?: Record < string, any>) =>: any {
    // Check condition
if ( {) {
  $2
}
      window.gtag ('event', event_name, parameters);
    }
  }
;
  // Track button clicks;
  const trackButtonClick = (button_name: string, location?: string) =>: any {
    track_event ('button_click', {
      button_name: button_name,
      location: location || window.location.pathname,
    });
  }
;
  // Track form submissions;
  const trackFormSubmission = (form_name: string) =>: any {
    track_event ('form_submit', {
      form_name: form_name,
      page_location: window.location.href,
    });
  }
;
  // Track external link clicks;
  const trackExternalLink = (url: string, link_text: string) =>: any {
    track_event ('external_link_click', {
      link_url: url,
      link_text: link_text,
      page_location: window.location.href,
    });
  }
;
  // Expose tracking functions globally for use in other components;
  // Check condition
if ( {) {
  $2
}
    (window as any).track_event = track_event;
    (window as any).trackButtonClick = trackButtonClick;
    (window as any).trackFormSubmission = trackFormSubmission;
    (window as any).trackExternalLink = trackExternalLink;
  }
  return (
    <Head>;

      <script;
        dangerouslySetInnerHTML={{

                        name: 'load',
                        value: Math.round(loadTime),
                      });
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window && window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = performance && performance.getEntriesByType('navigation')[0]
                  if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    if (window.gtag) {
                      window.gtag('event', 'timing_complete', {

                        name: 'load'
                        value: Math.round(loadTime)
                        name: 'load',
                        value: Math.round(loadTime),

                      });
                    const loadTime = perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart
                    if (window && window.gtag) {
                      window && window.gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math && Math.round(loadTime),
                      })
                    }
                  }


                }, 0);
              });

            }

        }}
      />
    </Head>
  );

export default Analytics;

=======
import React, { useEffect } from 'react';
// We avoid declaring global window.gtag types here to prevent conflicts;
interface AnalyticsProps  {trackingId?: string;
}const Analytics: React.FC<AnalyticsProps> = ({trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
}) => {useEffect(() => {if (!trackingId || typeof window === 'undefined') return;const script1 = document.createElement('script')script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1)const script2 = document.createElement('script')script2.innerHTML = `;
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())gtag('config', '${trackingId}', {page_title: document.title,page_location: window.location.href,send_page_view: true;
      })`;
    document.head.appendChild(script2)const handleRouteChange = () => {if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {window.gtag('config', trackingId, {page_title: document.title,page_location: window.location.href,})}
    }window.addEventListener('popstate', handleRouteChange)return () => window.removeEventListener('popstate', handleRouteChange)}, [trackingId])useEffect(() => {if (typeof window === 'undefined') return;
    const trackPerformance = () => {if (typeof window.gtag !== 'undefined' && 'performance' in window) {const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (perf) {const loadTime = (perf.loadEventEnd || 0) - (perf.fetchStart || 0)window.gtag('event', 'page_load_time', {event_category: 'Performance',event_label: 'Page Load',value: Math.round(loadTime)})}
      }
    }window.addEventListener('load', trackPerformance)return () => window.removeEventListener('load', trackPerformance)}, [])return null;
}export const trackEvent = (action: string, category: string, label?: string, value?: number) => {if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {window.gtag('event', action, {event_category: category,event_label: label,value: value,})}
}export const trackPageView = (url: string, title: string) => {const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && id) {window.gtag('config', id, {page_title: title,page_location: url,})}
}export default Analytics;
>>>>>>> origin/merge-pr-12271
