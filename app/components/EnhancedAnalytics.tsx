&quot;use client&quot;

import React, { createContext, useContext, useEffect } from &quot;react&quot;

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {;
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
  }
  return context
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    // Initialize analytics
    if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;)
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)

        (window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag(&quot;js&quot;, new Date())
        gtag(&quot;config&quot;, process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  consttrack= (event: string,properties?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;event&quot;
          event
          properties
        )
      }

      // Custom analytics
      }
  }

  constidentify= (userId: string,traits?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;config&quot;
          process.env.REACT_APP_GA_ID
          {user_id: userId
            custom_map: traits
          }
        )
      }

      // Custom analytics
      }
  }

  constpage= (name: string,properties?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;event&quot;
         &quot;page_view&quot;
          {page_title: name
            page_location: windo w.location.href
            ...properties
          }
        )
      }

      // Custom analytics
      }
  }

  constvalue: AnalyticsContextType = {track
    identify
    page
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: any[]) => void
  }
}
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Settings, ArrowRight, Globe, Users, Target, Zap, CheckCircle, Shield, BarChart, Brain, Star, TrendingUp, Clock, Database } from 'lucide-react'

const EnhancedAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain
      title: 'AI-Powered Intelligence'
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    {
      icon: BarChart
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
    {
      icon: Target
      title: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision and accuracy.'
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
    {
      icon: TrendingUp
      title: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]

export default function AiCrmPage() {
  return (
    <>
      
      <Navigation />
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="rel ativepy-20 px-4 overflow-hidden">
          <div className="abs oluteinset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="rel ativemax-w-7xl mx-auto text-center">
            <h1 className="tex t-5xlmd: text-7xl font-bold text-white mb-6 leading-tight">
              EnhancedAnalytics
            </h1>
            <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced EnhancedAnalytics solution for modern businesses.
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <button className="bg-em erald-600hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="bor derborder-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20px-4">
          <div className="max-w-7x lmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-4xlfont-bold text-white mb-4">Key Features</h2>
              <p className="tex t-xltext-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="gri dmd: grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-wh ite/10backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12w-12te x t-emerald-400 mb-4" />
                  <h3 className="tex t-xlfont-semibold text-white mb-3">{feature.title}</h3>
                  <p className="tex t-gray-300mb-4">{feature.description}</p>
                  <ul className="spa ce-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="fle xitems-center text-sm text-gray-300">
                        <CheckCircle className="h-4w-4te x t-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20px-4 b g-white/5">
          <div className="max-w-7x lmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-4xlfont-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="tex t-xltext-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="gri dmd: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="fle xitems-start space-x-4">
                  <CheckCircle className="h-6w-6te x t-emerald-400 mt-1 flex-shrink-0" />
                  <p className="tex t-gray-300text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4">
          <div className="max-w-4x lmx-auto text-center">
            <h2 className="tex t-4xlfont-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="tex t-xltext-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <button className="bg-em erald-600hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="bor derborder-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>;
    </>
  );
}
export default EnhancedAnalyticsPage;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
