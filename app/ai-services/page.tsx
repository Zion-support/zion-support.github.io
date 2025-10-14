'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Shield, BarChart, Users, Settings, ArrowRight, CheckCircle } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      price: 'Starting at $2,500/month'
    },
    {
      id: 2,
      title: 'Intelligent Automation',
      description: 'Streamline your business processes with AI-powered automation solutions.',
      category: 'Automation',
      icon: Zap,
      features: [
        'Workflow automation',
        'Document processing',
        'Customer service bots',
        'Process optimization'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      id: 3,
      title: 'AI Security Solutions',
      description: 'Protect your business with advanced AI-powered security and threat detection.',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection',
        'Anomaly monitoring',
        'Automated response',
        'Compliance management'
      ],
      price: 'Starting at $2,800/month'
    },
    {
      id: 4,
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and use cases.',
      category: 'Machine Learning',
      icon: Brain,
      features: [
        'Custom model development',
        'Data preprocessing',
        'Model training & deployment',
        'Continuous optimization'
      ],
      price: 'Starting at $5,000/month'
    },
    {
      id: 5,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Enhance customer experience with intelligent conversational AI solutions.',
      category: 'Customer Service',
      icon: Users,
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        '24/7 availability'
      ],
      price: 'Starting at $1,500/month'
    },
    {
      id: 6,
      title: 'AI Infrastructure & DevOps',
      description: 'Scalable AI infrastructure and deployment solutions for enterprise environments.',
      category: 'Infrastructure',
      icon: Settings,
      features: [
        'Cloud AI platforms',
        'Container orchestration',
        'Model versioning',
        'Monitoring & logging'
      ],
      price: 'Starting at $4,000/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Security', name: 'Security' },
    { id: 'Machine Learning', name: 'Machine Learning' },
    { id: 'Customer Service', name: 'Customer Service' },
    { id: 'Infrastructure', name: 'Infrastructure' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, security, machine learning, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, AI security, chatbots, virtual assistants" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive innovation across every department.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {category.name}
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
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="text-cyan-400 text-sm font-semibold">{service.category}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify the best solutions for your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
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
