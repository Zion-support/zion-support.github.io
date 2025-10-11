'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, CheckCircle, Brain, Zap, Shield, Globe, Database, Code, Smartphone, Cpu, Network, Layers, Eye, MessageSquare, BarChart3 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: 'Starting at $299/month',
      popular: true,
      category: 'Content'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis solutions for various industries.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection', 'Visual search'],
      pricing: 'Starting at $499/month',
      popular: false,
      category: 'Vision'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants for customer service and support.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Intent recognition', 'Integration APIs'],
      pricing: 'Starting at $399/month',
      popular: true,
      category: 'Conversation'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting, trend analysis, and business intelligence.',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Demand forecasting', 'Performance optimization'],
      pricing: 'Starting at $599/month',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Security Solutions',
      description: 'Intelligent threat detection and cybersecurity solutions powered by AI.',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring', 'Incident response'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'AI Data Processing',
      description: 'Intelligent data processing, cleaning, and analysis for better business insights.',
      features: ['Data cleaning', 'Pattern recognition', 'Automated insights', 'Real-time processing', 'Data visualization'],
      pricing: 'Starting at $449/month',
      popular: false,
      category: 'Data'
    }
  ]

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns.'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-400" />,
      title: 'Computer Vision',
      description: 'Image and video analysis, object recognition, and visual intelligence solutions.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-400" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-400" />,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI implementation with bias detection and ethical guidelines.'
    }
  ]

  const stats = [
    { number: '200+', label: 'AI Models Deployed' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, computer vision, natural language processing, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  Advanced AI Solutions
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  AI Services & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Harness the power of artificial intelligence to transform your business operations, 
                  enhance decision-making, and drive innovation across every aspect of your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="/contact"
                    className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    Get AI Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    View Services
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
                    <div className="text-gray-300">AI Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
                    <div className="text-gray-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50%</div>
                    <div className="text-gray-300">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI expertise across all major domains to solve your business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Service Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive AI service packages designed for different business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 relative ${service.popular ? 'ring-2 ring-cyan-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                  Get a free AI consultation and discover how artificial intelligence can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Free AI Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    Call +1 302 464 0950
                  </a>
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