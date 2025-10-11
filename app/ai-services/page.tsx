'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Code, Star, Users, Clock, Brain, Eye, MessageSquare, FileText, BarChart3 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI.',
      features: ['Blog Posts', 'Social Media Content', 'Marketing Copy', 'Product Descriptions', 'Email Campaigns', 'SEO Content'],
      pricing: '$99/month',
      originalPrice: '$199/month',
      popular: true,
      link: '/zion-ai-content-generator'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent chatbots that can handle customer inquiries, provide support, and automate conversations.',
      features: ['24/7 Support', 'Multi-Language', 'Custom Training', 'Integration APIs', 'Analytics Dashboard', 'Voice Support'],
      pricing: '$149/month',
      originalPrice: '$299/month',
      popular: true,
      link: '/zion-ai-chatbots'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive business processes with AI-powered workflow automation and intelligent decision making.',
      features: ['Workflow Design', 'Data Processing', 'Decision Automation', 'Integration Hub', 'Monitoring', 'Custom Logic'],
      pricing: '$199/month',
      originalPrice: '$399/month',
      popular: false,
      link: '/zion-ai-automation'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Trend Analysis', 'Custom Reports', 'Real-time Dashboards', 'ML Models'],
      pricing: '$299/month',
      originalPrice: '$599/month',
      popular: true,
      link: '/zion-ai-analytics'
    },
    {
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'Computer Vision Solutions',
      description: 'AI-powered image and video analysis for quality control, object detection, and visual recognition.',
      features: ['Object Detection', 'Quality Control', 'Facial Recognition', 'OCR Processing', 'Video Analysis', 'Custom Models'],
      pricing: '$249/month',
      originalPrice: '$499/month',
      popular: false,
      link: '/zion-computer-vision'
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: 'AI Document Processing',
      description: 'Automated document analysis, extraction, and processing using advanced AI and machine learning.',
      features: ['Document OCR', 'Data Extraction', 'Classification', 'Validation', 'Batch Processing', 'API Integration'],
      pricing: '$179/month',
      originalPrice: '$359/month',
      popular: false,
      link: '/zion-ai-document-ai'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Service Pro',
      description: 'Advanced AI customer service solutions with sentiment analysis and intelligent routing.',
      features: ['Sentiment Analysis', 'Smart Routing', 'Ticket Classification', 'Response Generation', 'Quality Scoring', 'Multi-Channel'],
      pricing: '$219/month',
      originalPrice: '$439/month',
      popular: true,
      link: '/zion-ai-customer-service-pro'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'AI Code Reviewer',
      description: 'Automated code review and analysis with AI-powered suggestions for improvement and security.',
      features: ['Code Analysis', 'Security Scanning', 'Performance Review', 'Best Practices', 'Bug Detection', 'Refactoring Suggestions'],
      pricing: '$159/month',
      originalPrice: '$319/month',
      popular: false,
      link: '/zion-ai-code-reviewer'
    }
  ]

  const aiCapabilities = [
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text analysis, sentiment detection, and language understanding.'
    },
    {
      icon: <Eye className="w-6 h-6 text-green-400" />,
      title: 'Computer Vision',
      description: 'Image and video analysis with object detection, facial recognition, and visual intelligence.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Machine Learning',
      description: 'Custom ML models trained on your data for predictive analytics and intelligent automation.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: 'Conversational AI',
      description: 'Advanced chatbot and virtual assistant capabilities with natural conversation flow.'
    }
  ]

  const industries = [
    'Healthcare & Medical',
    'Financial Services',
    'E-commerce & Retail',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Legal Services',
    'Marketing & Advertising'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, automation, analytics, and more. Starting from $99/month." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, chatbots, analytics" />
      </Helmet>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From content generation to automation, we provide comprehensive AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore AI Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get AI Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">AI Capabilities</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Our AI services leverage cutting-edge technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive AI solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">50% OFF - Limited Time</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Our AI solutions are tailored for various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-gray-300 font-medium">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness AI Power?</h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Let's discuss how AI can transform your business operations and drive growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get AI Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}