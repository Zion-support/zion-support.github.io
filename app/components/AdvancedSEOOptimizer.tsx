'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

interface AdvancedSEOOptimizerProps {
  className?: string
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ className = '' }) => {
  const [seoScore, setSeoScore] = useState(0)
  const [recommendations, setRecommendations] = useState<string[]>([])

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return

    const newRecommendations: string[] = []
    let score = 100

    // Check title tag
    const title = document.querySelector('title')
    if (!title || title.textContent?.length === 0) {
      newRecommendations.push('Add a title tag')
      score -= 20
    } else if (title.textContent && title.textContent.length > 60) {
      newRecommendations.push('Title tag is too long (should be under 60 characters)')
      score -= 10
    }

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      newRecommendations.push('Add a meta description')
      score -= 15
    } else if (metaDescription.getAttribute('content') && metaDescription.getAttribute('content')!.length > 160) {
      newRecommendations.push('Meta description is too long (should be under 160 characters)')
      score -= 5
    }

    // Check heading structure
    const h1s = document.querySelectorAll('h1')
    if (h1s.length === 0) {
      newRecommendations.push('Add at least one H1 tag')
      score -= 15
    } else if (h1s.length > 1) {
      newRecommendations.push('Use only one H1 tag per page')
      score -= 10
    }

    // Check alt attributes on images
    const images = document.querySelectorAll('img')
    const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'))
    if (imagesWithoutAlt.length > 0) {
      newRecommendations.push(`Add alt attributes to ${imagesWithoutAlt.length} images`)
      score -= Math.min(imagesWithoutAlt.length * 2, 20)
    }

    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]')
    if (internalLinks.length === 0) {
      newRecommendations.push('Add internal links to improve site structure')
      score -= 10
    }

    setSeoScore(Math.max(score, 0))
    setRecommendations(newRecommendations)
  }, [])

  useEffect(() => {
    analyzeSEO()
  }, [analyzeSEO])

  return (
    <>
      <Helmet>
        <title>Advanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Professional Advanced SEO Optimizer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
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
              Advanced SEO optimization solution for modern businesses.
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
                Powerful SEO optimization features designed to improve your search rankings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Brain className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-300 mb-4">Advanced AI algorithms analyze your content and provide optimization recommendations.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Content optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Keyword analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Competitor research
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BarChart className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Tracking</h3>
                <p className="text-gray-300 mb-4">Monitor your SEO performance with detailed analytics and reporting.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Rank tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Traffic analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Conversion tracking
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Target className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Technical SEO</h3>
                <p className="text-gray-300 mb-4">Optimize technical aspects of your website for better search engine visibility.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Site speed optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Mobile optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                    Schema markup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Score Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Current SEO Score</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-6xl font-bold text-emerald-400 mb-4">{seoScore}/100</div>
              <p className="text-xl text-gray-300 mb-6">
                {seoScore >= 80 ? 'Excellent SEO performance!' : 
                 seoScore >= 60 ? 'Good SEO performance with room for improvement.' : 
                 'SEO needs significant improvement.'}
              </p>
              {recommendations.length > 0 && (
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-4">Recommendations:</h3>
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your SEO?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our advanced SEO optimization tools today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Analysis
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AdvancedSEOOptimizer