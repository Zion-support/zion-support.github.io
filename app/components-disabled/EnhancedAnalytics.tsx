"use client"

import React, { createContext, useContext, useEffect } from "react"

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void
}

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
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)

        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        ;(window as unknown as { gtag: typeof gtag }).gtag = gtag
        gtag("js", new Date())
        gtag("config", process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag: unknown }).gtag) {
        ;(window as unknown as { gtag: (command: string, eventName: string, parameters?: Record<string, unknown>) => void }).gtag(
          "event",
          event,
          properties
        )
      }
    }
  }

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag: unknown }).gtag) {
        ;(window as unknown as { gtag: (command: string, userId: string, traits?: Record<string, unknown>) => void }).gtag(
          "config",
          process.env.REACT_APP_GA_ID,
          {
            user_id: userId,
            custom_map: traits,
          }
        )
      }
    }
  }

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag: unknown }).gtag) {
        ;(window as unknown as { gtag: (command: string, pageName: string, properties?: Record<string, unknown>) => void }).gtag(
          "event",
          "page_view",
          {
            page_title: name,
            page_location: window.location.href,
            ...properties,
          }
        )
      }
    }
  }

  const value: AnalyticsContextType = {
    track,
    identify,
    page,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider