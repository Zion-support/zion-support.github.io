'use client'
import React, { useState } from 'react'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Target, BarChart3, MessageSquare, Image, FileText, Search, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const aiServices = [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      category: 'Content & Marketing',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      useCases: ['Blog Writing', 'Social Media', 'Email Marketing', 'Product Descriptions']
    },
    {
      id: 2,
      name: 'AI Chatbot Enterprise',
      description: 'Build intelligent chatbots that understand context and provide personalized customer support 24/7.',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      category: 'Customer Service',
      features: ['Natural language processing', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations'],
      pricing: 'Starting at $99/month',
      useCases: ['Customer Support', 'Lead Qualification', 'FAQ Automation', 'Order Processing']
    },
    {
      id: 3,
      name: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      category: 'Data & Analytics',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'Data visualization'],
      pricing: 'Starting at $199/month',
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Tracking']
    },
    {
      id: 4,
      name: 'AI 3D Generation',
      description: 'Create stunning 3D models and visualizations using cutting-edge AI technology.',
      icon: <Image className="w-8 h-8 text-orange-500" />,
      category: 'Content & Marketing',
      features: ['3D model generation', 'Texture mapping', 'Animation support', 'Export options'],
      pricing: 'Starting at $149/month',
      useCases: ['Product Visualization', 'Architectural Design', 'Gaming Assets', 'Marketing Materials']
    },
    {
      id: 5,
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered drug discovery and molecular analysis.',
      icon: <Target className="w-8 h-8 text-red-500" />,
      category: 'Data & Analytics',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance'],
      pricing: 'Contact for pricing',
      useCases: ['Drug Development', 'Clinical Research', 'Molecular Analysis', 'Therapeutic Discovery']
    },
    {
      id: 6,
      name: 'AI Cybersecurity Suite',
      description: 'Protect your digital assets with AI-powered threat detection and security automation.',
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      category: 'Automation',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance reporting'],
      pricing: 'Starting at $299/month',
      useCases: ['Threat Prevention', 'Incident Response', 'Security Monitoring', 'Compliance Management']
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation']

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services | Zion Tech Group"
        description="Discover our comprehensive AI services including content generation, chatbots, analytics, and more. Transform your business with cutting-edge artificial intelligence."
        keywords="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, automation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Transform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate processes, 
            generate content, analyze data, and deliver exceptional customer experiences.
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
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
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
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{service.pricing}</span>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
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
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing Plans
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