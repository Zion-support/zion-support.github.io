'use client'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'

import React, { useEffect, useState, useCallback } from 'react'
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationStatus, setOptimizationStatus] = useState<{
    images: boolean
    lazyLoading: boolean
    preloading: boolean
    codeSplitting: boolean
  }>({
    images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false,
  })

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return

    // Optimize images
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
  
      if (img.loading !== 'lazy') {
        img.loading = 'lazy'
      }

      // Add WebP support detection
      if (!img.src.includes('.webp') && img.src.includes('.jpg')) {
        const webpSrc = img.src.replace('.jpg', '.webp')
        const webpImg = new Image()
        webpImg.onload = () => {
          img.src = webpSrc
        }
        webpImg.src = webpSrc
      }
    })

    setOptimizationStatus(prev => ({ ...prev, images: true }))
  }, [enableImageOptimization])

  const enableLazyLoadingOptimization = useCallback(() => {
    if (!enableLazyLoading) return

    // Intersection Observer for lazyloadingconstobserver= new IntersectionObserver(
      (entries) => {
  
        entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      },
      { rootMargin: '50px' }
    )

    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => observer.observe(img))

    setOptimizationStatus(prev => ({ ...prev, lazyLoading: true }))
  }, [enableLazyLoading])

  const enablePreloadingOptimization = useCallback(() => {
    if (!enablePreloading) return

    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
    ]

    criticalResources.forEach((resource) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })

    setOptimizationStatus(prev => ({ ...prev, preloading: true }))
  }, [enablePreloading])

  const enableCodeSplittingOptimization = useCallback(() => {
    if (!enableCodeSplitting) return

    // Dynamic imports for codesplittingconstloadComponent= async (componentName: string) => {
  
      try {
        const module = await import(`../components/${componentName}.tsx`)
        return module.default
      } catch (error) {
        // // console.warn(`Failed to load component: ${componentName}`, error)
        return null
      }
    }

    // Store the function globally for use in other components
    (window as any).loadComponent = loadComponent

    setOptimizationStatus(prev => ({ ...prev, codeSplitting: true }))
  }, [enableCodeSplitting])

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true)

    try {
      await Promise.all([
        optimizeImages(),
        enableLazyLoadingOptimization(),
        enablePreloadingOptimization(),
        enableCodeSplittingOptimization(),
      ])
    } catch (error) {
      // // console.error('Optimization failed:', error)
    } finally {
      setIsOptimizing(false)
    }
  }, [optimizeImages, enableLazyLoadingOptimization, enablePreloadingOptimization, enableCodeSplittingOptimization])

  useEffect(() => {
    runOptimizations()
  }, [runOptimizations])

  const allOptimizationsComplete = Object.values(optimizationStatus).every(Boolean)

  return (
    <>
      <Helmet>
        <title>PerformanceOptimizer</title>
        <meta name=&quot;description&quot; content=&quot;Advanced PerformanceOptimizer solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, PerformanceOptimizer, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              PerformanceOptimizer
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced PerformanceOptimizer solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
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
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PerformanceOptimizer
  );
};

export default PerformanceOptimizerPage;
