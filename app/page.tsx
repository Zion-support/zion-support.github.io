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
        keywords="AI solutions, IT services, cybersecurity, cloud computing, digital transformation, machine learning, artificial intelligence, data analytics, blockchain, IoT"
        ogImage="/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered solutions, cybersecurity, and digital transformation services",
          "url": "https://zion.app",
          "logo": "https://zion.app/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence and technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  onClick={() => trackClick('hero-cta', 'contact')}
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                  onClick={() => trackClick('hero-cta', 'ai-services')}
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Dashboard */}
        <PerformanceDashboard />
        
        <Footer />
      </div>
    </>
  )
}