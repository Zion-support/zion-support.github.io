
}

interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest'}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string}

interface FormData {
  [key: string]: string | number | boolean | File}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown}




      });
    `;
    document.head.appendChild(script2);

    // Track page views on route changes


    };

    // Listen for route changes (Next.js)



  };



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
          )}
      }
    };
'
    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance)}, []);

  return null};

// Export tracking functions for use in components
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {'
  if (typeof gtag !== 'undefined') {'
    gtag('event', action {
      event_category: category,
      event_label: label,
      value: value })}
};

export const trackPageView = (url: string, title: string) => {'
  if (typeof gtag !== 'undefined') {'
    gtag('config', process.env['NEXT_PUBLIC_GA_TRACKING_ID'] || '' {
      page_title: title,
      page_location: url })}
};


export default Analytics;

  return null};

// Export tracking functions for use in components;
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
  if (typeof gtag !== 'undefined') {'    gtag('event', action {'      event_category: category, event_label: label',      value: value });'
  }
};

export const trackPageView = (url: string, title: string) => {;
  if (typeof gtag !== 'undefined') {'    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '' {'      page_title: title, page_location: url'})}'

};

export default Analytics;



