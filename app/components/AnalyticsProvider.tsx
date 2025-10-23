<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from "react"
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

export default function Page() {

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
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

interface AnalyticsProviderProps {
  children: ReactNode
}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    if (type of windo w !=="undefined") {
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
    }
  }, [])

  consttrackEvent= (
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)
    }
  }

  consttrackPageView= (pageName: string) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("config","GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: window.location.href,
      })
    }
  }

  constvalue: AnalyticsContextType = {trackEvent,
    trackPageView,
  }

  return (
<<<<<<< HEAD
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
=======
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AnalyticsProvider
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AnalyticsProvider solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

export default AnalyticsProvider
  );
};

export default AnalyticsProviderPage;
