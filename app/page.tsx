'use client'
import React, { useState, useEffect, memo, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, ArrowRight, CheckCircle, Star, Users, Zap, Shield, 
  BarChart, Globe, Cpu, Target, Sparkles, ChevronRight 
} from 'lucide-react'
import ServiceCardSkeleton from './components/ServiceCardSkeleton'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'

// Preload components for better performance
const preloadComponents = async () => {
  const components = [
    () => import('./components/EnhancedHero'),
    () => import('./components/EnhancedServicesShowcase'),
    () => import('./components/EnhancedPerformanceOptimizer')
  ]
  
  await Promise.all(components.map(component => component()))
}

const HomePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    preloadComponents()
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and rapid deployment for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive insights and reporting to drive informed decisions.'
    }
  ]

  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      href: '/ai-services',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Globe,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, and digital transformation.',
      href: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure']
    },
    {
      icon: Cpu,
      title: 'Emerging Tech',
      description: 'Next-generation technologies including quantum computing, blockchain, and IoT solutions.',
      href: '/emerging-tech',
      features: ['Quantum Computing', 'Blockchain', 'IoT', '5G']
    },
    {
      icon: Target,
      title: 'Micro SaaS',
      description: 'Specialized software solutions designed for specific business needs and workflows.',
      href: '/micro-saas',
      features: ['Custom Solutions', 'API Integration', 'Scalable Architecture', 'User-Friendly']
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ]

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      >
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="neon-text">Zion Tech Group</span>
                <br />
                <span className="text-cyan-400">AI & IT Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and IT solutions. 
                We deliver innovative technology that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-6 energy-pulse group">
                    <div className="text-4xl mb-4 text-center cyber-scan-line">
                      <service.icon className="h-12 w-12 mx-auto text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="cyber-button w-full text-center py-3 inline-flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      Explore Service
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </article>
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="cyber-card p-6 h-full group-hover:scale-105 transition-transform">
                    <feature.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with our AI and IT solutions today. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AccessibilityEnhancer>
    </div>
  )
})

HomePage.displayName = 'HomePage'
export default HomePage
