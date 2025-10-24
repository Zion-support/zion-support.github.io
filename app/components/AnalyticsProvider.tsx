<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot;;
import React, { createContext, useContext, useEffect, ReactNode } from "react"
>>>>>>> main:app/components/AnalyticsProvider.tsx

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
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;);
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
>>>>>>> main:app/components/AnalyticsProvider.tsx
  }
  return context
}

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== &quot;undefined&quot;) {
      // Google Analytics
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;);
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script")
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)
>>>>>>> main:app/components/AnalyticsProvider.tsx

        window.gtag =
          window.gtag ||
          function (...args: any[]) {
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
            (window.gtag as any).q = (window.gtag as any).q || [];
            (window.gtag as any).q.push(args);
          };
        window.gtag(&quot;js&quot;, new Date());
        window.gtag(&quot;config&quot;, process.env.REACT_APP_GA_MEASUREMENT_ID || &quot;");
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
          }
        window.gtag("js", new Date())
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")
>>>>>>> main:app/components/AnalyticsProvider.tsx
      }
    }
  }, [])

  const trackEvent = (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
<<<<<<< HEAD:app-broken/app/components/AnalyticsProvider.tsx
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;event&quot;, eventName, parameters);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)
>>>>>>> main:app/components/AnalyticsProvider.tsx
    }
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
      window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
        page_title: pageName,
        page_location: window.location.href,
      })
    }
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider