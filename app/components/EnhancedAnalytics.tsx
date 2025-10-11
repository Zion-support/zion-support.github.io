<<<<<<< HEAD
'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  trackUser: (userId: string, traits?: Record<string, any>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Add analytics initialization code here
      setIsLoaded(true)
    }

    initAnalytics()
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isLoaded) return

    // Track event with analytics service
    console.log('Analytics Event:', eventName, properties)
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties)
    }
  }

  const trackPageView = (pageName: string) => {
    if (!isLoaded) return

    // Track page view
    console.log('Analytics Page View:', pageName)
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
      })
    }
  }

  const trackUser = (userId: string, traits?: Record<string, any>) => {
    if (!isLoaded) return

    // Track user identification
    console.log('Analytics User:', userId, traits)
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      })
    }
  }

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUser
  }

=======
'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

interface EnhancedAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ className = '', children }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">EnhancedAnalytics Title</h3>
      <p className="text-gray-300 mb-4">EnhancedAnalytics description goes here.</p>
      {children}
<<<<<<< HEAD
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
=======
    </div>
  );
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default EnhancedAnalytics;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
