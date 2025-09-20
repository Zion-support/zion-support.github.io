import React from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'

export const metadata = {
  title: 'Analytics Revolution 2025 - Advanced Data Analytics | Zion Tech Group',
  description: 'Transform your data into actionable insights with our advanced analytics solutions. Real-time processing, predictive intelligence, and AI-powered analytics.',
  keywords: ['analytics', 'data analytics', 'business intelligence', 'predictive analytics', 'real-time analytics']
}

export default function AnalyticsPage() {
  return (
    <div>
      <SEO
        title="Analytics Revolution 2025 - Advanced Data Analytics"
        description="Transform your data into actionable insights with our advanced analytics solutions. Real-time processing, predictive intelligence, and AI-powered analytics."
        keywords="analytics, data analytics, business intelligence, predictive analytics, real-time analytics"
        url="/analytics"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Analytics Revolution 2025
          </h1>
          <p className="text-xl mb-8">
            Transform your data into actionable insights with our advanced analytics solutions. Real-time processing, predictive intelligence, and AI-powered analytics.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">
                Process and analyze data in real-time for instant insights and decision making.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Intelligence</h3>
              <p className="text-gray-600">
                Forecast trends and outcomes with advanced machine learning algorithms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-600">
                Comprehensive dashboards and reports for data-driven business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-gray-600 mb-8">
            Start your analytics journey today and unlock the power of your data.
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Analytics Journey
          </Link>
        </div>
      </section>
    </div>
  )
}