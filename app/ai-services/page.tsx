'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Eye, MessageCircle, BarChart, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI that understands and responds to natural language.',
      category: 'Conversational AI',
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration APIs'],
      icon: MessageCircle,
      price: 'Starting at $500/month'
    },
    {
      id: 2,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis using cutting-edge computer vision technology.',
      category: 'Computer Vision',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis'],
      icon: Eye,
      price: 'Starting at $800/month'
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict future trends and behaviors.',
      category: 'Analytics',
      features: ['Trend forecasting', 'Risk assessment', 'Customer behavior prediction', 'Real-time insights'],
      icon: BarChart,
      price: 'Starting at $1,200/month'
    },
    {
      id: 4,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI solutions.',
      category: 'Automation',
      features: ['Process automation', 'Workflow optimization', 'Decision making', 'Error reduction'],
      icon: Zap,
      price: 'Starting at $600/month'
    },
    {
      id: 5,
      title: 'AI Security',
      description: 'Protect your systems with AI-powered security solutions.',
      category: 'Security',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring'],
      icon: Shield,
      price: 'Starting at $900/month'
    },
    {
      id: 6,
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs.',
      category: 'Custom',
      features: ['Custom model development', 'Data analysis', 'Integration support', 'Ongoing maintenance'],
      icon: Brain,
      price: 'Contact for pricing'
    }
  ]

  const categories = ['all', 'Conversational AI', 'Computer Vision', 'Analytics', 'Automation', 'Security', 'Custom']

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including chatbots, computer vision, predictive analytics, and custom AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, predictive analytics, AI automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business. 
              Our comprehensive AI services deliver intelligent solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300 mx-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">Analyze your business needs and identify AI opportunities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy and roadmap</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">Build and deploy AI solutions with best practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">Monitor, optimize, and scale your AI solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiServicesPage