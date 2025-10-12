'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Search, BarChart3, Target } from 'lucide-react'

interface SEOMetrics {
  score: number
  keywords: number
  backlinks: number
  traffic: number
}

const SEOEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetrics>({
    score: 0,
    keywords: 0,
    backlinks: 0,
    traffic: 0
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'Keyword Optimization',
      description: 'Advanced keyword research and optimization for better search rankings'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Analysis',
      description: 'Machine learning algorithms analyze and optimize your content for SEO'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Performance Tracking',
      description: 'Real-time monitoring of SEO metrics and ranking improvements'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Technical SEO',
      description: 'Comprehensive technical optimization for better search engine visibility'
    }
  ]

  const benefits = [
    'Higher search engine rankings',
    'Increased organic traffic',
    'Better user experience',
    'Improved click-through rates',
    'Enhanced brand visibility',
    'Competitive advantage',
    'Long-term growth',
    'ROI optimization'
  ]

  const seoStrategies = [
    'On-page optimization',
    'Technical SEO audit',
    'Content strategy development',
    'Link building campaigns',
    'Local SEO optimization',
    'Mobile-first indexing',
    'Core Web Vitals optimization',
    'Schema markup implementation'
  ]

  const analyzeSEO = async () => {
    setIsAnalyzing(true)
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate improved metrics
    setMetrics({
      score: 85,
      keywords: 150,
      backlinks: 45,
      traffic: 1250
    })
    
    setIsAnalyzing(false)
  }

  useEffect(() => {
    // Initialize with some default values
    setMetrics({
      score: 65,
      keywords: 75,
      backlinks: 20,
      traffic: 800
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>SEO Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization solutions by Zion Tech Group. Boost your search rankings and organic traffic." />
        <meta name="keywords" content="SEO optimization, search engine optimization, keyword research, technical SEO, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              SEO Enhancer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Boost your search engine rankings with our advanced SEO optimization solutions. 
              Drive more organic traffic and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={analyzeSEO}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Search className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze SEO
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Current SEO metrics and optimization opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.score}/100</div>
              <div className="text-gray-300 text-sm">SEO Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.keywords}</div>
              <div className="text-gray-300 text-sm">Keywords</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.backlinks}</div>
              <div className="text-gray-300 text-sm">Backlinks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{metrics.traffic}</div>
              <div className="text-gray-300 text-sm">Monthly Traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO optimization tools and strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Strategies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven strategies to improve your search engine visibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoStrategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{strategy}</span>
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
              SEO Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your SEO?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start optimizing your search engine visibility today and see results in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start SEO Analysis
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEOEnhancer