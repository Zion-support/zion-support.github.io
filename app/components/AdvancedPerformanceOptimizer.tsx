'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean
  enableLazyLoading?: boolean
  enableCompression?: boolean
  enableCaching?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableServiceWorker = true,
  enableLazyLoading = true,
  enableCompression = true,
  enableCaching = true
}) => {
  const [optimizations, setOptimizations] = useState<string[]>([])
  const [isOptimizing, setIsOptimizing] = useState(false)

  useEffect(() => {
    const applyOptimizations = async () => {
      setIsOptimizing(true)
      const appliedOptimizations: string[] = []

      try {
        // Service Worker Registration
        if ('serviceWorker' in navigator && enableServiceWorker) {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              appliedOptimizations.push('Service Worker registered')
            })
            .catch((registrationError) => {
              console.error('Service Worker registration failed:', registrationError)
            })
        }

        // Memory-based caching for API responses
        const cache = new Map()
        const originalFetch = window.fetch
        window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
          const url = input.toString()
          if (cache.has(url)) {
            return cache.get(url)
          }
          const response = await originalFetch(input, init)
          cache.set(url, response.clone())
          return response
        }
        appliedOptimizations.push('API response caching enabled')

        // Image lazy loading
        if (enableLazyLoading) {
          const images = document.querySelectorAll('img[data-src]')
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                img.src = img.dataset.src || ''
                img.classList.remove('lazy')
                imageObserver.unobserve(img)
              }
            })
          })
          images.forEach((img) => imageObserver.observe(img))
          appliedOptimizations.push('Lazy loading enabled')
        }

        // Resource preloading
        const criticalResources = [
          '/fonts/inter-var.woff2',
          '/css/critical.css'
        ]
        criticalResources.forEach((resource) => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.href = resource
          link.as = resource.endsWith('.woff2') ? 'font' : 'style'
          if (resource.endsWith('.woff2')) {
            link.crossOrigin = 'anonymous'
          }
          document.head.appendChild(link)
        })
        appliedOptimizations.push('Critical resources preloaded')

        // Performance monitoring
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.duration > 50) {
                console.warn('Long task detected:', {
                  duration: entry.duration,
                  startTime: entry.startTime
                })
              }
            })
          })
          observer.observe({ entryTypes: ['longtask'] })
          appliedOptimizations.push('Performance monitoring enabled')
        }

        setOptimizations(appliedOptimizations)
      } catch (error) {
        console.error('Optimization failed:', error)
      } finally {
        setIsOptimizing(false)
      }
    }

    applyOptimizations()
  }, [enableServiceWorker, enableLazyLoading, enableCompression, enableCaching])

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent performance optimization using advanced AI algorithms.',
      benefits: ['Smart caching', 'Predictive loading', 'Resource optimization', 'Performance insights']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive performance analytics with real-time monitoring.',
      benefits: ['Live metrics', 'Performance tracking', 'Bottleneck detection', 'Optimization suggestions']
    },
    {
      icon: Target,
      title: 'Precision Tuning',
      description: 'Fine-tune performance settings for optimal results.',
      benefits: ['Custom configurations', 'A/B testing', 'Performance profiling', 'Targeted optimizations']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Ongoing performance improvements and optimizations.',
      benefits: ['Automatic updates', 'Performance trends', 'Optimization cycles', 'Continuous monitoring']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Advanced Performance Optimizer</title>
        <meta name="description" content="Advanced Performance Optimizer solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, performance optimization, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Performance Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Optimize your application performance with AI-driven solutions.
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
                Powerful optimization features designed to maximize performance
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

        {/* Optimization Status */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Optimization Status</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current performance optimizations applied to your application
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              {isOptimizing ? (
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-300">Applying optimizations...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {optimizations.map((optimization, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{optimization}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AdvancedPerformanceOptimizer