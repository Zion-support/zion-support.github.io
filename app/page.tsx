'use client'
import React from 'react'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import PerformanceDashboard from './components/PerformanceDashboard'
import { usePerformanceMonitor } from './utils/performance'
import { useAnalytics } from './utils/analytics'
export default function HomePage() {
  const { startTiming, endTiming } = usePerformanceMonitor()
  const { trackPageView, trackClick } = useAnalytics()
  // Track page performance
  React.useEffect(() => {
    startTiming('homepage-load')
    trackPageView('/', 'Zion Tech Group - Advanced AI & IT Solutions')
    return () => {
      endTiming('homepage-load')
    }
  }, [startTiming, endTiming, trackPageView])
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, blockchain, IT services, machine learning, artificial intelligence"
        url="https://zion.app"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "description": "Advanced AI & IT Solutions for the Future",
          "url": "https://zion.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zion.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge technology. We provide AI-powered solutions, 
                cybersecurity, and digital transformation services for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
                  onClick={() => trackClick('cta', 'get-started')}
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
                  onClick={() => trackClick('cta', 'learn-more')}
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <PerformanceDashboard />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}