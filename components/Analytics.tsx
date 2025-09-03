import React, { useEffect } from 'react';
<<<<<<< HEAD
import { User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  statu,
    s: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}



=======
'interface AnalyticsProps {trackingId?: string;
}

<<<<<<< HEAD
>>>>>>> main
// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void;
}

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
<<<<<<< HEAD
  useEffect(() => {'
    if (typeof window === 'undefined' || !trackingId) return;
    // Load Google Analytics script'
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);`
=======
=======
const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID 
}) => {
>>>>>>> main
  useEffect(() => {
if (!trackingId || typeof window === 'undefined') return;''    // Load Google Analytics
    const script1 = document.createElement('script');'    script1.async = true;'    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;`    document.head.appendChild(script1);

<<<<<<< HEAD
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

>>>>>>> main
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}`
      gtag('js', new Date());
      gtag('config', '${trackingId}, {
        page_title: document.title, page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Track page views on route changes
    const handleRouteChange = () => {`
      if (typeof gtag !== 'undefined') {'
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
=======
    const script2 = document.createElement('script');'    script2.innerHTML = `'      window.dataLayer = window.dataLayer || [];`      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());'      gtag('config', '${trackingId}', {'        page_title: document.title, page_location: window.location.href,'        send_page_view: true
      });
    `;`    document.head.appendChild(script2);

    // Track page views on route changes
    const handleRouteChange = () => {;
      if (typeof gtag !== 'undefined') {'        gtag('config', trackingId, {'          page_title: document.title, page_location: window.location.href,'        });}
>>>>>>> main
    };

    // Listen for route changes (Next.js)
<<<<<<< HEAD
    window.addEventListener('popstate', handleRouteChange);
    return () => {'
=======
window.addEventListener('popstate', handleRouteChange);''    return () => {
      window.removeEventListener('popstate', handleRouteChange);'    };'  }, [trackingId]);

<<<<<<< HEAD
    return () => {
>>>>>>> main
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);
=======
  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
    if (typeof gtag !== 'undefined') {'      gtag('event', action, {'        event_category: category, event_label: label,'        value: value, });}
  };
>>>>>>> main

  // Track page performance
<<<<<<< HEAD
  useEffect(() => {'
    if (typeof window === 'undefined') return;
    const trackPerformance = () => {'
=======
  useEffect(() => {
if (typeof window === 'undefined') return;''    const trackPerformance = () => {;
      if (typeof gtag !== 'undefined' && 'performance' in window) {'        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;'        if (perfData) {'          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          trackEvent('page_load_time', 'Performance', 'Page Load', Math.round(loadTime));'        }'      }
    };

<<<<<<< HEAD
    const trackPerformance = () => {
>>>>>>> main
      if (typeof gtag !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType('
          'navigation'
        )[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          trackEvent('
            'page_load_time',
            'Performance',
            'Page Load',
            Math.round(loadTime);
          );
        }
      }
    };
'
    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, []);

  return null;
};

// Export tracking functions for use in components
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {'
  if (typeof gtag !== 'undefined') {'
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {'
  if (typeof gtag !== 'undefined') {'
    gtag('config', process.env['NEXT_PUBLIC_GA_TRACKING_ID'] || '', {
      page_title: title,
      page_location: url,
    });
  }
};

export default Analytics;
<<<<<<< HEAD
'
=======
=======
    window.addEventListener('load', trackPerformance);'    return () => window.removeEventListener('load', trackPerformance);'  }, []);'
  return null;
};

// Export tracking functions for use in components;
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
  if (typeof gtag !== 'undefined') {'    gtag('event', action, {'      event_category: category, event_label: label,'      value: value, });
  }
};

export const trackPageView = (url: string, title: string) => {;
  if (typeof gtag !== 'undefined') {'    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {'      page_title: title, page_location: url,'    });}
};

export default Analytics;
>>>>>>> main
>>>>>>> main
