'use client'
import React, { useState } from 'react'
import { CheckCircle, ArrowRight, Search, TrendingUp, Globe, Zap, Shield, BarChart } from 'lucide-react'

const EnhancedSEO: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'Keyword Research',
      description: 'Advanced keyword research and analysis to identify the best opportunities for your business.',
      benefits: ['Long-tail keywords', 'Competitor analysis', 'Search volume data', 'Trend analysis']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Rank Tracking',
      description: 'Monitor your search engine rankings and track your progress over time.',
      benefits: ['Daily monitoring', 'Position tracking', 'Competitor analysis', 'Performance reports']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Local SEO',
      description: 'Optimize your local presence and attract more customers in your area.',
      benefits: ['Google My Business', 'Local citations', 'Review management', 'Location-based keywords']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Technical SEO',
      description: 'Improve your website\'s technical foundation for better search engine visibility.',
      benefits: ['Site speed optimization', 'Mobile optimization', 'Schema markup', 'Core Web Vitals']
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'White-Hat Techniques',
      description: 'We use only ethical SEO practices that provide long-term results.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: 'Data-Driven Approach',
      description: 'All our strategies are based on comprehensive data analysis and testing.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Proven Results',
      description: 'Our clients see significant improvements in their search rankings and traffic.'
    }
  ]

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SEO</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost your search engine rankings and drive more organic traffic with our advanced SEO solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze My Site'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search engine visibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our SEO Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver results that matter for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your SEO?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with our comprehensive SEO analysis and see how we can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Analysis
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedSEO