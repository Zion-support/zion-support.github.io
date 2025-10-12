'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Target, BarChart3, MessageSquare, Image, FileText, Search, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Smart Invoicing',
      description: 'Revolutionary AI-powered invoicing platform that automates invoice generation, payment tracking, and cash flow management.',
      features: ['AI invoice generation', 'Smart payment tracking', 'Advanced analytics', 'Multi-currency support'],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Automation',
      popular: true,
      useCases: ['Small Business', 'Freelancers', 'E-commerce', 'Service Providers']
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered task assignment, deadline prediction, and team optimization.',
      features: ['AI task assignment', 'Smart deadline prediction', 'Real-time analytics', 'Team collaboration'],
      pricing: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'Automation',
      popular: true,
      useCases: ['Project Teams', 'Agencies', 'Startups', 'Enterprise']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Support Pro',
      description: 'Advanced AI-powered customer support with intelligent chatbots, multi-channel support, and real-time analytics.',
      features: ['AI chatbot', 'Multi-channel support', 'Real-time analytics', 'Smart escalation'],
      pricing: 'Starting at $39/month',
      marketPrice: '$80-300/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services']
    },
    {
      icon: <Image className="w-8 h-8 text-pink-500" />,
      title: 'AI Social Media Pro',
      description: 'Transform your social media presence with AI-powered content creation, smart scheduling, and audience intelligence.',
      features: ['AI content generation', 'Smart scheduling', 'Audience intelligence', 'Multi-platform support'],
      pricing: 'Starting at $29/month',
      marketPrice: '$60-250/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Brands', 'Influencers', 'Agencies', 'Small Business']
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: false,
      useCases: ['Content Creators', 'Marketers', 'Bloggers', 'Agencies']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      features: ['Predictive analytics', 'Automated reporting', 'Custom dashboards', 'Real-time insights'],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Data & Analytics',
      popular: false,
      useCases: ['Business Intelligence', 'Data Teams', 'Executives', 'Analysts']
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation']

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '500+', label: 'AI Models Trained' },
    { number: '10,000+', label: 'Businesses Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group"
        description="Discover our comprehensive AI services including smart invoicing, project management, customer support, and social media automation. Transform your business with AI."
        keywords="AI services, artificial intelligence, machine learning, AI automation, smart business tools, AI consulting"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Transform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to automate, optimize, 
            and revolutionize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {service.category}
                  </div>
                </div>
                <Link 
                  to={`/contact?service=${service.title}`}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our AI experts help you choose the perfect solutions for your business needs. 
                Get a free consultation and discover the power of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage