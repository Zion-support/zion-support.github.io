'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Search, Globe, Zap } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

const AdvancedSEOOptimizer: React.FC = () => {
  const [seoScore, setSeoScore] = useState(0)
  const [recommendations, setRecommendations] = useState<string[]>([])

  useEffect(() => {
    // Simulate SEO analysis
    const analyzeSEO = () => {
      const score = Math.floor(Math.random() * 40) + 60 // Score between 60-100
      setSeoScore(score)
      
      const recs = []
      if (score < 80) recs.push('Optimize meta descriptions')
      if (score < 85) recs.push('Improve heading structure')
      if (score < 90) recs.push('Add alt text to images')
      if (score < 95) recs.push('Optimize page loading speed')
      
      setRecommendations(recs)
    }

    analyzeSEO()
  }, [])

  const features = [
    {
      icon: Search,
      title: 'Keyword Optimization',
      description: 'Advanced keyword research and optimization tools.',
      benefits: ['Keyword research', 'Density analysis', 'Competitor analysis', 'Trend tracking']
    },
    {
      icon: Globe,
      title: 'Technical SEO',
      description: 'Comprehensive technical SEO analysis and optimization.',
      benefits: ['Site speed analysis', 'Mobile optimization', 'Schema markup', 'Crawlability']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Detailed SEO performance tracking and reporting.',
      benefits: ['Rank tracking', 'Traffic analysis', 'Conversion tracking', 'ROI measurement']
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'AI-powered automated SEO improvements.',
      benefits: ['Auto-optimization', 'Content suggestions', 'Link building', 'Monitoring']
    }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings with AI insights',
    'Automate SEO tasks and save time',
    'Get detailed performance reports',
    'Stay ahead of algorithm changes'
  ]

  return (
    <>
      <Helmet>
        <title>Advanced SEO Optimizer</title>
        <meta name="description" content="Advanced SEO Optimizer solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, SEO optimization, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Optimize your website&apos;s search engine performance with AI-driven solutions.
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

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful SEO optimization features designed to boost your rankings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Score Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">SEO Analysis</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current SEO performance and optimization recommendations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-emerald-400 mb-2">{seoScore}</div>
                <div className="text-xl text-gray-300">SEO Score</div>
              </div>
              {recommendations.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Recommendations:</h3>
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our SEO Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven SEO optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AdvancedSEOOptimizer