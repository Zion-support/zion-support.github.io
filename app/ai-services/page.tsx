'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import { Brain, Zap, Shield, Globe, Database, Code, Smartphone, ArrowRight, CheckCircle, Star, Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const aiServices = [
    {
      id: 1,
      name: 'AI Content Generator',
      category: 'Content & Marketing',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      link: '/ai-content-generator',
      popular: true
    },
    {
      id: 2,
      name: 'AI Chatbot Enterprise',
      category: 'Customer Service',
      description: 'Intelligent chatbots that provide 24/7 customer support with natural language understanding and context awareness.',
      features: ['Natural language processing', 'Multi-channel support', 'Integration APIs', 'Analytics dashboard'],
      pricing: 'Starting at $99/month',
      icon: <Zap className="w-8 h-8 text-green-500" />,
      link: '/ai-chatbot-enterprise',
      popular: false
    },
    {
      id: 3,
      name: 'AI Analytics Dashboard',
      category: 'Data & Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      pricing: 'Starting at $199/month',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      id: 4,
      name: 'AI Voice Assistant',
      category: 'Automation',
      description: 'Advanced voice AI that understands natural speech and provides intelligent responses for various business applications.',
      features: ['Speech recognition', 'Natural responses', 'Multi-language support', 'Custom training'],
      pricing: 'Starting at $149/month',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      id: 5,
      name: 'AI 3D Generation',
      category: 'Content & Marketing',
      description: 'Create stunning 3D models and visualizations using AI-powered generation tools for marketing and design.',
      features: ['3D model generation', 'Texture mapping', 'Animation support', 'Export options'],
      pricing: 'Starting at $79/month',
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      link: '/ai-3d-generation',
      popular: false
    },
    {
      id: 6,
      name: 'AI Cybersecurity Suite',
      category: 'Security',
      description: 'Advanced AI-powered security solutions that detect and prevent cyber threats in real-time.',
      features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance monitoring'],
      pricing: 'Starting at $299/month',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/ai-cybersecurity-suite',
      popular: true
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation', 'Security']

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including content generation, chatbots, analytics, voice assistants, and cybersecurity solutions."
        keywords="AI services, artificial intelligence, machine learning, AI consulting, AI solutions"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Brain className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-white text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Transform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, 
            gain insights, and drive innovation across your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#services" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
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
              <div key={service.id} className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="text-purple-400 font-semibold text-lg">{service.pricing}</div>
                </div>
                
                <Link
                  to={service.link}
                  className="block w-full text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
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
                Ready to Implement AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our AI experts help you choose and implement the perfect AI solutions for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}