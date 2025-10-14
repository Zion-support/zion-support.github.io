'use client'
import React, { useEffect } from 'react'

const EnhancedPerformanceOptimizer: React.FC = () => {
  const features = [
    {
      title: 'Advanced Caching',
      description: 'Intelligent caching strategies that reduce load times by up to 80%',
      icon: '⚡'
    },
    {
      title: 'Code Splitting',
      description: 'Automatic code splitting for optimal bundle sizes and faster loading',
      icon: '📦'
    },
    {
      title: 'Image Optimization',
      description: 'Automatic image compression and lazy loading for better performance',
      icon: '🖼️'
    },
    {
      title: 'CDN Integration',
      description: 'Global content delivery network for lightning-fast content delivery',
      icon: '🌐'
    }
  ]

  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/main.woff2',
        '/images/hero-bg.jpg'
      ]
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'image'
        document.head.appendChild(link)
      })
    }

    optimizePerformance()
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Performance Optimizer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our performance optimization solutions deliver unmatched speed, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable improvements our optimization delivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-xl text-white mb-2">Faster Load Times</div>
              <div className="text-gray-300">Average improvement in page load speed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-xl text-white mb-2">Better Core Web Vitals</div>
              <div className="text-gray-300">Improved Google performance scores</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-xl text-white mb-2">Reduced Bounce Rate</div>
              <div className="text-gray-300">Better user engagement and retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve lightning-fast performance and better user experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedPerformanceOptimizer
