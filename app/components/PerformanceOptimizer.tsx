'use client';
import Navigation from './Navigation'
import { ArrowRight } from 'lucide-react'

import React, { useEffect, useState, useCallback } from 'react'
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'

interface PerformanceOptimizerProps {
  className?: string;
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
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PerformanceOptimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced PerformanceOptimizer solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
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
