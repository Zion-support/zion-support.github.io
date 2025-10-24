'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, TrendingUp, Target, BarChart, Zap, Shield } from 'lucide-react'
import Navigation from './Navigation'

interface SEOOptimizerProps {
  enableMetaOptimization?: boolean
  enableSchemaMarkup?: boolean
  enableSitemapGeneration?: boolean
  enableRobotsTxt?: boolean
  enableCanonicalUrls?: boolean
  enableOpenGraph?: boolean
  enableTwitterCards?: boolean
  enableStructuredData?: boolean
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enableMetaOptimization = true,
  enableSchemaMarkup = true,
  enableSitemapGeneration = true,
  enableRobotsTxt = true,
  enableCanonicalUrls = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableStructuredData = true
}) => {
  const [seoMetrics, setSeoMetrics] = useState({
    metaTags: 0,
    schemaMarkup: 0,
    internalLinks: 0,
    externalLinks: 0,
    imagesWithAlt: 0,
    totalImages: 0
  })

  const features = [
    {
      icon: Search,
      title: 'Meta Tag Optimization',
      description: 'Automatically optimize meta tags, titles, and descriptions for better search engine visibility.'
    },
    {
      icon: TrendingUp,
      title: 'Schema Markup',
      description: 'Implement structured data markup to help search engines understand your content.'
    },
    {
      icon: Target,
      title: 'Keyword Optimization',
      description: 'Analyze and optimize content for target keywords and search intent.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track SEO performance with detailed analytics and reporting.'
    }
  ]

  useEffect(() => {
    // Simulate SEO metrics collection
    const collectSEOMetrics = () => {
      if (typeof window !== 'undefined') {
        const metaTags = document.querySelectorAll('meta').length
        const schemaMarkup = document.querySelectorAll('[itemscope], [itemtype]').length
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]').length
        const externalLinks = document.querySelectorAll('a[href^="http"]').length
        const imagesWithAlt = document.querySelectorAll('img[alt]').length
        const totalImages = document.querySelectorAll('img').length

        setSeoMetrics({
          metaTags,
          schemaMarkup,
          internalLinks,
          externalLinks,
          imagesWithAlt,
          totalImages
        })
      }
    }

    collectSEOMetrics()
  }, [])

  return (
    <>
      <Helmet>
        <title>Advanced SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization solution for modern businesses." />
        <meta name="keywords" content="SEO optimization, search engine optimization, meta tags, schema markup" />
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Optimize your website for search engines with our comprehensive SEO solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
                Powerful SEO features designed to improve your search engine rankings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Metrics Dashboard */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
            <h3 className="font-semibold text-sm mb-2">SEO Metrics</h3>
            <div className="text-xs space-y-1">
              <div>Meta Tags: {seoMetrics.metaTags}</div>
              <div>Schema Markup: {seoMetrics.schemaMarkup}</div>
              <div>Internal Links: {seoMetrics.internalLinks}</div>
              <div>External Links: {seoMetrics.externalLinks}</div>
              <div>Images with Alt: {seoMetrics.imagesWithAlt}/{seoMetrics.totalImages}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AdvancedSEOOptimizer