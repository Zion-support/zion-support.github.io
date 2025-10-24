<<<<<<< HEAD
import { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties);
    
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    console.log('Analytics Page:', name, properties);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
        page_location: window.location.href,
        ...properties
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Load Google Analytics or other analytics scripts here
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };
=======
import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot;

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void
  trackPageView: (pageName: string) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
  }
  return context
}

interface AnalyticsProviderProps {
  children: ReactNode
}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;)
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)

        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
          }
        window.gtag(&quot;js&quot;, new Date())
        window.gtag(&quot;config&quot;, process.env.REACT_APP_GA_MEASUREMENT_ID || &quot;&quot;)
      }
    }
  }, [])

  consttrackEvent= (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;event&quot;, eventName, parameters)
    }
  }

  consttrackPageView= (pageName: string) => {if (type of windo w !==&quot;undefined&quot; && windo w.gtag) {
      window.gtag(&quot;config&quot;,&quot;GA_MEASUREMENT_ID&quot;, {
        page_title: pageName,
        page_location: window.location.href,
      })
    }
  }

  constvalue: AnalyticsContextType = {trackEvent,
    trackPageView,
  }
>>>>>>> origin/main

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  );
};

const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;
=======
  )
}

export default AnalyticsProvider
  );
};

export default AnalyticsProviderPage;
>>>>>>> origin/main
