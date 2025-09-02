import React, { useEffect } from 'react';
<<<<<<< HEAD
import { User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}



// Declare gtag function for TypeScript
declare global {
  function gtag(...args: unknown[]): void}
=======
// Declare gtag function for TypeScript
declare global {
  function gtag(...args: any[]): void;
}
>>>>>>> main

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !trackingId) return;
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title, page_location: window.location.href,
        send_page_view: true
      })
    `;
    document.head.appendChild(script2);
    // Track page views on route changes
    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
    // Listen for route changes (Next.js)
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);
  // Track page performance
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const trackPerformance = () => {
      if (typeof gtag !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          trackEvent(
            'page_load_time',
            'Performance',
            'Page Load',
            Math.round(loadTime)
          );
        }
      }
    };
<<<<<<< HEAD

    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, []);

  return null;
};

=======
    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance);
  }, []);
  return null;
};
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
// Export tracking functions for use in components
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export const trackPageView = (url: string, title: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env['NEXT_PUBLIC_GA_TRACKING_ID'] || '', {
      page_title: title,
      page_location: url,
    });
  }
};
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default Analytics;
