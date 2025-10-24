<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

<<<<<<< HEAD
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script")
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)

        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
          }
        window.gtag("js", new Date())
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")
      }
=======
      });
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8
    }
  };

<<<<<<< HEAD
  const trackEvent = (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)
    }
  }

  const trackPageView = (pageName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: window.location.href,
      })
    }
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8

>>>>>>> origin/main
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  )
}

export default AnalyticsProvider
=======
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-4da8
