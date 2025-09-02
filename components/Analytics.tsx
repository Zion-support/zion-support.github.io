<<<<<<< HEAD
import React, { useEffect } from
  'react';'
  'interface AnalyticsProps {trackingId?: string;
=======
import React, { useEffect } from 'react'''interface AnalyticsProps {trackingId?: string
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID 
}) => {
  useEffect(() => {
<<<<<<< HEAD
if (!trackingId || typeof window === 'undefined
  ') return;''    // Load Google Analytics
    const script1 = document.createElement(
  'script');'    script1.async = true;'    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;`    document.head.appendChild(script1);

    const script2 = document.createElement(
  'script');'    script2.innerHTML = `
  '      window.dataLayer = window.dataLayer || [];`      function gtag(){dataLayer.push(arguments);}
      gtag('js
  ', new Date());'      gtag(
  'config',
  '${trackingId}', {
  '        page_title: document.title, page_location: window.location.href,'        send_page_view: true
=======
if (!trackingId || typeof window === 'undefined') return''    // Load Google Analytics
    const script1 = document.createElement('script')'    script1.async = true;'    script1.src = `https: //www.googletagmanager.com/gtag/js?id=${trackingId}`;`    document.head.appendChild(script1)

    const script2 = document.createElement('script')'    script2.innerHTML = `'      window.dataLayer = window.dataLayer || [];`      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())'      gtag('config', '${trackingId}', {'        page_title: document.title, page_location: window.location.href,'        send_page_view: true'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
      });
    `;`    document.head.appendChild(script2);

    // Track page views on route changes
<<<<<<< HEAD
    const handleRouteChange = () => {;
      if (typeof gtag !==
  'undefined') {
  '        gtag('config
  ', trackingId, {'          page_title: document.title, page_location: window.location.href,
  '        });}
    };

    // Listen for route changes (Next.js)
window.addEventListener('popstate
  ', handleRouteChange);''    return () => {
      window.removeEventListener(
  'popstate', handleRouteChange);'    };'  }, [trackingId]);

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
    if (typeof gtag !==
  'undefined') {
  '      gtag('event
  ', action, {'        event_category: category, event_label: label,
  '        value: value, });}
=======
    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {'        gtag('config', trackingId, {'          page_title: document.title, page_location: window.location.href,'        })}'
    };

    // Listen for route changes (Next.js)
window.addEventListener('popstate', handleRouteChange)''    return () => {
      window.removeEventListener('popstate', handleRouteChange)'    };'  }, [trackingId]);

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof gtag !== 'undefined') {'      gtag('event', action, {'        event_category: category, event_label: label,'        value: value, })}'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  };

  // Track page performance
  useEffect(() => {
<<<<<<< HEAD
if (typeof window === 'undefined
  ') return;''    const trackPerformance = () => {;
      if (typeof gtag !==
  'undefined' &&
  'performance' in window) {
  '        const perfData = performance.getEntriesByType('navigation
  ')[0] as PerformanceNavigationTiming;'        if (perfData) {
  '          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          trackEvent('page_load_time
  ', 'Performance
  ', 'Page Load
  ', Math.round(loadTime));'        }
  '      }
    };

    window.addEventListener('load
  ', trackPerformance);'    return () => window.removeEventListener(
  'load', trackPerformance);'  }, []);'
=======
if (typeof window === 'undefined') return''    const trackPerformance = () => {
      if (typeof gtag !== 'undefined' && 'performance' in window) {'        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming'        if (perfData) {'          const loadTime = perfData.loadEventEnd - perfData.fetchStart'
          trackEvent('page_load_timePerformancePage Load', Math.round(loadTime))'        }'      }
    }

    window.addEventListener('load', trackPerformance)'    return () => window.removeEventListener('load', trackPerformance)'  }, []);''
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  return null;
};

// Export tracking functions for use in components;
<<<<<<< HEAD
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
  if (typeof gtag !==
  'undefined') {
  '    gtag('event
  ', action, {'      event_category: category, event_label: label,
  '      value: value, });
=======
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof gtag !== 'undefined') {'    gtag('event', action, {'      event_category: category, event_label: label,'      value: value, })'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  }
};

export const trackPageView = (url: string, title: string) => {;
<<<<<<< HEAD
  if (typeof gtag !== 'undefined
  ') {'    gtag(
  'config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '
  ', {'      page_title: title, page_location: url,'    });}
=======
  if (typeof gtag !== 'undefined') {'    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {'      page_title: title, page_location: url,'    })}'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
};

export default Analytics;