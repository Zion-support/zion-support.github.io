<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void,
  trackPageView: (pageName: string) => void
}

<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(;
  undefined
)

export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
:app/components/AnalyticsProvider.tsx
  if (!context) {;
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
        const script = document.createElement(&quot;script&quot;);
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

<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
  consttrackEvent= (
    eventName: string
    parameters?: Record<string, unknown>
  ) => {
:app/components/AnalyticsProvider.tsx
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;event&quot;, eventName, parameters)
    }
  }

  consttrackPageView= (pageName: string) => {if (type of windo w !==&quot;undefined&quot; && windo w.gtag) {
      window.gtag(&quot;config&quot;,&quot;GA_MEASUREMENT_ID&quot;, {
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
        page_title: pageName,
  page_location: window.location.href
:app/components/AnalyticsProvider.tsx
      })
    }
  }

  constvalue: AnalyticsContextType = {trackEvent
    trackPageView
  }
=======
import React from 'react';
>>>>>>> origin/main

const AnalyticsProviderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AnalyticsProvider
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction and will be available soon.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700">
              We are working hard to bring you the best experience. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AnalyticsProviderPage
:app/components/AnalyticsProvider.tsx
=======
export default AnalyticsProviderPage;
>>>>>>> origin/main
