'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, TrendingUp, Users, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const InvestorsPage: React.FC = () => {
  const metrics = [
    {
      title: 'Revenue Growth',
      value: '150%',
      description: 'Year-over-year growth'
    },
    {
      title: 'Client Satisfaction',
      value: '98%',
      description: 'Customer satisfaction rate'
    },
    {
      title: 'Market Expansion',
      value: '25+',
      description: 'Countries served'
    },
    {
      title: 'Team Growth',
      value: '200+',
      description: 'Employees worldwide'
    }
  ]

  const highlights = [
    'Strong financial performance',
    'Expanding market presence',
    'Innovative technology solutions',
    'Experienced leadership team',
    'Growing customer base',
    'Strategic partnerships',
    'Research and development focus',
    'Sustainable growth strategy'
  ]

  return (
    <>
      <Helmet>
        <title>Investors - Zion Tech Group | Investor Relations</title>
        <meta name="description" content="Investor information and financial highlights for Zion Tech Group. Learn about our growth and investment opportunities." />
        <meta name="keywords" content="investors, financial information, growth metrics, Zion Tech Group investment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Investor Relations
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Learn about Zion Tech Group's financial performance, growth strategy, 
                and investment opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Key Metrics</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Our performance highlights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{metric.title}</div>
                  <div className="text-gray-300 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Investment Highlights</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Why invest in Zion Tech Group
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {highlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {highlights.slice(4).map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Interested in Investing?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Contact our investor relations team to learn more about investment opportunities 
                  and our growth strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact IR Team
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Request Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default InvestorsPage