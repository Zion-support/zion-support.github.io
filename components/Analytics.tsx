<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
import Head from 'next / head';
;
interface AnalyticsProps {
  tracking_id?: string;
}
=======

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      }
      window && window.gtag = gtag;
      gtag('js', new Date());
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      }
      window && window.gtag = gtag;
      gtag('js', new Date());

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      gtag('config', trackingId, {;
        page_title: document && document.title,;
        page_location: window && window.location.href,;
      });
      // Track page views;
      const trackPageView = () => {;
        gtag('event', 'page_view', {;
          page_title: document && document.title,;
          page_location: window && window.location.href,;
          page_path: window && window.location.pathname,;
        });
      };
      // Track page view on load;
      trackPageView();
      // Track page view on route change (for SPA behavior);
      const handleRouteChange = () => {;
        trackPageView();
      };
      // Listen for popstate events (back/forward navigation);
      window && window.addEventListener('popstate', handleRouteChange);
      // Cleanup;
      return () => {;
        window && window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [trackingId]);
  // Track custom events;
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {;
    if (typeof window !== 'undefined' && window && window.gtag) {;
      window && window.gtag('event', eventName, parameters);
    }
  };
  // Track button clicks;
  const trackButtonClick = (buttonName: string, location?: string) => {;
    trackEvent('button_click', {;
      button_name: buttonName,;
      location: location || window && window.location.pathname,;
    });
  };
  // Track form submissions;
  const trackFormSubmission = (formName: string) => {;
    trackEvent('form_submit', {;
      form_name: formName,;
      page_location: window && window.location.href,;
    });
  };
  // Track external link clicks;
  const trackExternalLink = (url: string, linkText: string) => {;
    trackEvent('external_link_click', {;
      link_url: url,;
      link_text: linkText,;
      page_location: window && window.location.href,;
    });
  };
  // Expose tracking functions globally for use in other components;
  if (typeof window !== 'undefined') {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      <script;
        dangerouslySetInnerHTML={{
=======

      <script;
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
          __html: `;
            // Performance monitoring;
            // Check condition
if ( {) {
  $2
}
              window.addEventListener ('load', function () {
                set_timeout (function () {
                  const perf_data = performance.getEntriesByType ('navigation')[0];
                  // Check condition
if ( {) {
  $2
}
                    const load_time = perf_data.loadEventEnd - perf_data.loadEventStart;
                    // Check condition
if ( {) {
  $2
}
                      window.gtag ('event', 'timing_complete', {
                        name: 'load',
                        value: Math.round (load_time),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        name: 'load',
                        value: Math.round(loadTime),

                      });
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <script;
        dangerouslySetInnerHTML={{

                        name: 'load',
                        value: Math.round(loadTime),
                      });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    if (window.gtag) {
                      window.gtag('event', 'timing_complete', {
<<<<<<< HEAD
                        name: 'load'
                        value: Math.round(loadTime)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
}
                }, 0);
              });
            }
          `
          `,
        }}
=======
<<<<<<< HEAD
                }, 0)
              })
            }

    </Head>);
}
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          `,

        }}
export default Analytics;
      />
    </Head>
  );

};


<<<<<<< HEAD
export default Analytics;
}
};

export default Analytics;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default Analytics;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
