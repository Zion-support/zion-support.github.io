<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href});
    }
  }, [trackingId]);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
    
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: name,
        page_location: window.location.href,
        ...properties});
    }
    
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits});
    }
    
    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits);
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

export default function Component() {
  return (
<<<<<<< HEAD
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
=======
    <AnalyticsContext.Provider value={value}></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
}
=======
export default AnalyticsProvider;
  const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

    // Initialize Google Analytics;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https:// www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag;
      (window as {dataLayer: unknown[]}).dataLayer = (window as {dataLayer: unknown[]}).dataLayer || [];
        (window as {dataLayer: unknown[]}).dataLayer.push(args);
      (window as {gtag: typeof gtag}).gtag = gtag;
      gtag('js', new Date());
        send_page_view: true;
      });
    };
    // Track page views;
        });
    };

    // Handle route changes;
        });
    };
    // Track user interactions;
        const target = e.target as HTMLElement;
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
              value: href;
            });
      });
      // Track form submissions;
        const form = e.target as HTMLFormElement;
            event_label: form.id || 'contact_form'
          });
      });
      // Track phone number clicks;
        const target = e.target as HTMLElement;
              value: target.getAttribute('href')
            });
      });
    };
    // Initialize analytics;
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_TRACKING_ID]);
  return <>{children}<  />;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
