'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Code, Eye, FileText, Target, Clock, DollarSign, TrendingUp, Database, Cloud, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const services = [
    {
      id: 'ai-content-generation',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (50+ languages)',
        'Brand voice training and customization',
        'Content templates and frameworks',
        'Plagiarism detection and originality scoring',
        'Content scheduling and automation',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Content Marketing', 'Social Media Management', 'Blog Writing', 'Technical Documentation']
    },
    {
      id: 'ai-analytics-intelligence',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling',
      features: [
        'Real-time data processing and visualization',
        'Predictive analytics and forecasting',
        'Custom KPI dashboards and reports',
        'Automated anomaly detection',
        'Natural language query interface',
        'Machine learning model deployment',
        'Data integration and ETL processes',
        'ROI and performance optimization'
      ],
      pricing: 'Starting at $99/month',
      marketPrice: '$200-1000/month',
      category: 'Data & Analytics',
      popular: true,
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Monitoring']
    },
    {
      id: 'ai-chatbot-builder',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance',
      features: [
        '24/7 customer support automation',
        'Lead qualification and scoring',
        'FAQ automation and knowledge base',
        'Multi-language support',
        'Integration with CRM systems',
        'Conversation analytics and insights',
        'Custom training and personality',
        'Voice and text support'
      ],
      pricing: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Automation', 'Internal Help Desk']
    },
    {
      id: 'ai-automation',
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent AI-powered workflows and decision making',
      features: [
        'Workflow automation and orchestration',
        'Document processing and extraction',
        'Email and communication automation',
        'Data entry and validation',
        'Approval workflows and routing',
        'Exception handling and escalation',
        'Performance monitoring and optimization',
        'Custom rule creation and management'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Automation',
      popular: false,
      useCases: ['Document Processing', 'Email Automation', 'Data Entry', 'Approval Workflows']
    },
    {
      id: 'ai-computer-vision',
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis using computer vision and machine learning',
      features: [
        'Object detection and recognition',
        'Facial recognition and analysis',
        'Image classification and tagging',
        'Video content analysis',
        'Quality control automation',
        'Medical image analysis',
        'Security and surveillance',
        'Augmented reality applications'
      ],
      pricing: 'Starting at $149/month',
      marketPrice: '$300-1500/month',
      category: 'Computer Vision',
      popular: false,
      useCases: ['Quality Control', 'Security Systems', 'Medical Imaging', 'AR/VR Applications']
    },
    {
      id: 'ai-data-analytics',
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'AI Data Analytics',
      description: 'Intelligent data processing, analysis, and insights generation for business intelligence',
      features: [
        'Big data processing and analysis',
        'Predictive modeling and forecasting',
        'Real-time data streaming',
        'Data visualization and dashboards',
        'Machine learning model training',
        'Data quality assessment',
        'Automated reporting',
        'Data governance and compliance'
      ],
      pricing: 'Starting at $199/month',
      marketPrice: '$400-2000/month',
      category: 'Data & Analytics',
      popular: true,
      useCases: ['Big Data Analytics', 'Predictive Modeling', 'Real-time Insights', 'Data Governance']
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation', 'Computer Vision']

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including content generation, analytics, chatbots, automation, and computer vision solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, analytics, chatbots, automation" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From content generation to advanced analytics, we have the tools you need to succeed.
          </p>
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
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                  </div>
                  <div className="text-sm text-purple-300">{service.category}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.useCases.map((useCase, index) => (
                    <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
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

      <Footer />
    </div>
  )
}

export default AIServicesPage