<<<<<<< HEAD
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
=======
import React, {createContext, useContext, useEffect, ReactNode } from &quot;react&quot;
;
declare global {interface Window {}
    gtag: (...args: any[]) => void
  }
}
;
interface AnalyticsContextType {trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void}
  trackPageView: (pageName: string) => void
}
;
export const AnalyticsContext=";";
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
  }
  return context;
}
<<<<<<< HEAD

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics
    // Analytics initialization logic here
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
=======
;
interface AnalyticsProviderProps {}
  children: ReactNode
}</string>
</string>;
exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
;  
    if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics;"
      if (process.env.NODE_ENV="==" &quot;production&quot;) {"}
        const script="document.createElement(&quot;script&quot;)}";"
        script.src="`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`";"
        script.async="true";
        document.head.appendChild(script);
"
        window.gtag="window.gtag" ||;"
          function (...args: any[]) {(window.gtag as any).q="(window.gtag" as any).q || []
            (window.gtag as any).q.push(args)
          }
        window.gtag(&quot;js&quot;, new Date());
        window.gtag(&quot;config&quot;, process.env.REACT_APP_GA_MEASUREMENT_ID || &quot;&quot;)
      }
    }
  }, []);
"
  consttrackEvent="(";</AnalyticsProviderProp>
    eventName: string,</AnalyticsProviderProp>;
    parameters?: Record<string, unknown>,
  ) => {if (typeof window !== &quot;undefined&quot; && window.gtag) {}
      window.gtag(&quot;event&quot;, eventName, parameters)
    }
  }
;"
  consttrackPageView="(pageName:" string) => {if (type of windo w !==&quot;undefined&quot; && windo w.gtag) {
      window.gtag(&quot;config&quot;,&quot;GA_MEASUREMENT_ID&quot;, {}
        page_title: pageName,});
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
        page_location: window.location.href,
      });
    }
<<<<<<< HEAD
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };


  return (
    <AnalyticsContext.Provider value={value}>
      {children}
=======
  }
;"
  constvalue: AnalyticsContextType="{trackEvent,}";
    trackPageView,
  }
;</string>
  return (</string>"
    <AnalyticsContext.Provider value="{value}"></AnalyticsContext>
      {children}</AnalyticsContext>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
    </AnalyticsContext.Provider>
  );
}
<<<<<<< HEAD

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
=======
;
export default AnalyticsProvider
  );
};
;
export default AnalyticsProviderPage;"
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
