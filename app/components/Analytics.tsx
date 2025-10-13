<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Analytics({ className = '', children }: AnalyticsProps) {
  return (
    <div className={`${className}`}>
=======
export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import React, { useEffect } from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
<<<<<<< HEAD
<<<<<<< HEAD
  children: React.ReactNode;
}

export default function Analytics({ children }: AnalyticsProps) {
  return <>{children}</>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
}
=======
interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
  measurementId?: string;
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  measurementId = 'G-XXXXXXXXXX', // Replace with actual GA4 measurement ID
  enabled = process.env.NODE_ENV === 'production'
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [measurementId, enabled]);

  // Track page views on route changes
  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !window.gtag) return;

    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location, measurementId, enabled]);

  // Track Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const trackWebVitals = () => {
      // Track LCP
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            window.gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'Largest Contentful Paint',
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Track FID
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'first-input') {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round((entry as any).processingStart - entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'First Input Delay',
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Track CLS
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals',
          event_label: 'Cumulative Layout Shift',
        });
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      trackWebVitals();
    } else {
      window.addEventListener('load', trackWebVitals);
    }

    return () => {
      window.removeEventListener('load', trackWebVitals);
    };
  }, [enabled]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!enabled || typeof window === 'undefined' || !window.gtag) return;
    
    window.gtag('event', eventName, parameters);
  };

  // Track button clicks
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a, [role="button"]');
      
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown';
        const buttonId = button.id || button.className;
        
        trackEvent('button_click', {
          button_text: buttonText,
          button_id: buttonId,
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enabled]);

  // Track form submissions
  useEffect(() => {
    if (!enabled) return;

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className;
      
      trackEvent('form_submit', {
        form_id: formId,
        page_location: window.location.href,
      });
    };

    document.addEventListener('submit', handleSubmit);
    return () => document.removeEventListener('submit', handleSubmit);
  }, [enabled]);

  // Track scroll depth
  useEffect(() => {
    if (!enabled) return;

    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          trackEvent('scroll_depth', {
            scroll_percent: scrollPercent,
            page_location: window.location.href,
          });
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => window.removeEventListener('scroll', trackScroll);
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default Analytics;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  trackingId?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId, children }) => {
  useEffect(() => {
    if (trackingId && typeof window !== 'undefined') {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    }
  }, [trackingId]);

  return <>{children}</>;
};

export default Analytics;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
