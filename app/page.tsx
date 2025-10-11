'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react'

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
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 animate-pulse border border-white/10" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    preloadComponents()
    setIsLoaded(true)
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, [])

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection', 'Custom data models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      category: 'Analytics',
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Object detection and recognition', 'Quality control automation', 'Facial recognition systems', 'Video analytics', 'Real-time processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      category: 'Computer Vision',
      popular: false
    },
    {
      icon: Mic,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: ['Speech-to-text conversion', 'Voice synthesis', 'Voice biometrics', 'Call analytics', 'Multi-language support'],
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support'],
      category: 'Voice AI',
      popular: false
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 'Performance monitoring'],
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      category: 'Automation',
      popular: true
    }
  ]

  // Real IT Services with actual capabilities and pricing
  const itServices = [
    {
      icon: Code,
      title: 'API Development',
      description: 'Professional API development with security, documentation, and integration support',
      price: '$2,500 - $15,000',
      marketPrice: '$5,000 - $25,000',
      features: ['RESTful API design', 'Security implementation', 'High performance', 'Database integration', 'API documentation'],
      benefits: ['Reduce development time by 60%', 'Improve system scalability', 'Enhanced security', 'Better integration'],
      category: 'Development',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      price: '$500 - $3,000/month',
      marketPrice: '$1,000 - $5,000/month',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions', 'Auto-scaling'],
      benefits: ['Cost reduction', 'Improved scalability', 'Enhanced security', 'Better performance'],
      category: 'Infrastructure',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: '$1,000 - $5,000/month',
      marketPrice: '$2,000 - $8,000/month',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response', 'Security Audits'],
      benefits: ['Protect against threats', 'Ensure compliance', 'Reduce risk', 'Peace of mind'],
      category: 'Security',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      price: '$800 - $4,000/month',
      marketPrice: '$1,500 - $6,000/month',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup & recovery', 'Monitoring'],
      benefits: ['Improved performance', 'Data security', 'Better insights', 'Reduced downtime'],
      category: 'Data',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android app development with modern frameworks',
      price: '$5,000 - $50,000',
      marketPrice: '$10,000 - $100,000',
      features: ['Native development', 'Cross-platform', 'UI/UX design', 'App store optimization', 'Maintenance'],
      benefits: ['Reach more customers', 'Better user experience', 'Increased engagement', 'Competitive advantage'],
      category: 'Mobile',
      popular: true
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications with responsive design and performance optimization',
      price: '$3,000 - $25,000',
      marketPrice: '$6,000 - $50,000',
      features: ['Responsive design', 'Performance optimization', 'SEO optimization', 'Security', 'Maintenance'],
      benefits: ['Better user experience', 'Higher conversion rates', 'Improved SEO', 'Mobile-friendly'],
      category: 'Web',
      popular: true
    }
  ]

  // Real Micro SAAS Services
  const microSaasServices = [
    {
      icon: Mail,
      title: 'Zion AI Email Marketing',
      description: 'AI-powered email automation that increases open rates by 300%',
      price: '$97/month',
      marketPrice: '$200-500/month',
      features: ['AI segmentation', 'Smart personalization', 'Predictive analytics', 'Automated workflows'],
      benefits: ['300% higher open rates', '50% lower unsubscribe rate', '3x more revenue', '20+ hours saved weekly'],
      category: 'Marketing',
      popular: true
    },
    {
      icon: Users,
      title: 'Zion AI CRM Assistant',
      description: 'Intelligent CRM management that increases sales by 40%',
      price: '$147/month',
      marketPrice: '$300-800/month',
      features: ['AI lead scoring', 'Predictive analytics', 'Smart insights', 'Automated follow-ups'],
      benefits: ['40% higher conversion', '30% faster sales cycle', '25% better retention', '15+ hours saved weekly'],
      category: 'CRM',
      popular: true
    },
    {
      icon: DollarSign,
      title: 'Zion AI Expense Tracker',
      description: 'Smart expense management with AI receipt scanning and categorization',
      price: '$9.99/month',
      marketPrice: '$20-50/month',
      features: ['AI receipt scanning', 'Smart categorization', 'Predictive analytics', 'Real-time tracking'],
      benefits: ['90% error reduction', '5+ hours saved weekly', '100% accurate categorization', '50K+ receipts processed'],
      category: 'Finance',
      popular: false
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization that increases organic traffic by 300%',
      price: '$97/month',
      marketPrice: '$200-500/month',
      features: ['AI keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis'],
      benefits: ['300% traffic increase', '156% ranking improvement', '22 hours saved weekly', '340% ROI improvement'],
      category: 'SEO',
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading AI & IT Solutions Provider
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Transform Your <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Business</span> with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your operations with cutting-edge technology that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="btn-cyber px-8 py-4 rounded-lg text-lg font-bold transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center floating">
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text-enhanced">500+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center floating" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-purple-400 mb-2 neon-text-enhanced">99.9%</div>
              <div className="text-gray-300 text-lg">Uptime Guarantee</div>
            </div>
            <div className="text-center floating" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-pink-400 mb-2 neon-text-enhanced">24/7</div>
              <div className="text-gray-300 text-lg">Support Available</div>
            </div>
            <div className="text-center floating" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl font-bold text-green-400 mb-2 neon-text-enhanced">$2M+</div>
              <div className="text-gray-300 text-lg">Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions that transform your business operations and drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              IT <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions that scale with your business and ensure optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Micro <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions that solve specific business problems with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pink-500/50 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-pink-400">{service.price}</span>
                  <span className="text-xs text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="space-y-1 mb-4">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-cyber px-8 py-4 rounded-lg text-lg font-bold transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage