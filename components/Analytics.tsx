
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
import Head from 'next/head';

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
    (window as any).trackEvent = trackEvent;
    (window as any).trackButtonClick = trackButtonClick;
    (window as any).trackFormSubmission = trackFormSubmission;
    (window as any).trackExternalLink = trackExternalLink;
  }

  return (
    <Head>;
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window && window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = performance && performance.getEntriesByType('navigation')[0]
                  if (perfData) {
                    const loadTime = perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart
                    if (window && window.gtag) {
                      window && window.gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math && Math.round(loadTime),
                      })
                    }
                  }
                }, 0)
              })
            }
          `,
        }}
      />;
    </Head>;
  );
};

export default Analytics;