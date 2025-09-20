import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import ModernAnalyticsDashboard from './components/ModernAnalyticsDashboard'
import AdvancedAIChatbot from './components/AdvancedAIChatbot'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import InteractiveFeatureShowcase from './components/InteractiveFeatureShowcase'
import EnhancedTestimonials from './components/EnhancedTestimonials'
import AISolutionsComparison from './components/AISolutionsComparison'
import ProjectManagementDashboard from './components/ProjectManagementDashboard'
import RealTimeCollaboration from './components/RealTimeCollaboration'
import AIPoweredSearch from './components/AIPoweredSearch'
import ModernPricingComparison from './components/ModernPricingComparison'
import DynamicFAQ from './components/DynamicFAQ'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description: 'Leading provider of AI automation, micro SaaS, and cutting-edge technology solutions. Transform your business with our innovative AI-powered services and enterprise solutions.',
  keywords: ['AI automation', 'micro SaaS', 'technology solutions', 'enterprise AI', 'business transformation', 'artificial intelligence'],
  openGraph: {
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    description: 'Leading provider of AI automation, micro SaaS, and cutting-edge technology solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Revolutionary AI & Technology Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    description: 'Leading provider of AI automation, micro SaaS, and cutting-edge technology solutions.',
    images: ['/og-image.svg']
  }
}

export default function HomePage() : any {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary AI & Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge AI automation, micro SaaS platforms, and enterprise technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          
          {/* AI-Powered Search */}
          <div className="max-w-4xl mx-auto">
            <AIPoweredSearch />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
              <p className="text-gray-600">
                Streamline operations with intelligent automation solutions that reduce costs and increase efficiency by up to 500%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Micro SaaS</h3>
              <p className="text-gray-600">
                Deploy powerful micro SaaS applications that scale with your business and provide immediate value.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600">
                Comprehensive technology solutions designed for enterprise-scale operations and maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <InteractiveFeatureShowcase />

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <EnhancedTestimonials />

      {/* Pricing Comparison */}
      <ModernPricingComparison />

      {/* Dynamic FAQ */}
      <DynamicFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies already using our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/success-stories"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Analytics Dashboard */}
      <ModernAnalyticsDashboard />

      {/* AI Solutions Comparison Tool */}
      <AISolutionsComparison />

      {/* Project Management Dashboard */}
      <ProjectManagementDashboard />

      {/* Real-Time Collaboration Workspace */}
      <RealTimeCollaboration />

      {/* Performance Optimizer */}
      <PerformanceOptimizer enableMonitoring={true} showMetrics={false} />
      
      {/* AI Chatbot */}
      <AdvancedAIChatbot />
    </div>
  )
}