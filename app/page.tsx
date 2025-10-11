'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  DollarSign, 
  Award, 
  Rocket, 
  Layers, 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Headphones, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Printer, 
  Router, 
  Package, 
  Heart, 
  Eye, 
  Mic 
} from 'lucide-react'

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'))
const ContentCarousel = lazy(() => import('./components/ContentCarousel'))
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'))
const ContentStatistics = lazy(() => import('./components/ContentStatistics'))
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'))

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner')
      import('./components/ContentCarousel')
    }, 100)
  }
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true)
      preloadComponents()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform integration.',
      features: ['AWS Migration', 'Azure Solutions', 'GCP Integration', 'DevOps'],
      href: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics'],
      href: '/data-analytics'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],
      href: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      href: '/mobile-development'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI and IT Solutions for the Future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <service.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage