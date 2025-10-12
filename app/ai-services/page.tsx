'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Mail, FileText, MessageSquare, Cpu, Cloud, Code, Database, Smartphone, Server, Wifi } from 'lucide-react'
import { allServices } from '../data/services'

const AIServicesPage: React.FC = () => {
  const aiServices = allServices.filter(s => s.category === 'ai')

  const iconMap: { [key: string]: React.ReactNode } = {
    'Brain': <Brain className="w-6 h-6" />,
    'MessageSquare': <MessageSquare className="w-6 h-6" />,
    'BarChart3': <BarChart3 className="w-6 h-6" />,
    'Shield': <Shield className="w-6 h-6" />,
    'FileText': <FileText className="w-6 h-6" />,
    'Users': <Users className="w-6 h-6" />,
    'Mail': <Mail className="w-6 h-6" />,
    'Cpu': <Cpu className="w-6 h-6" />,
    'Cloud': <Cloud className="w-6 h-6" />,
    'Code': <Code className="w-6 h-6" />,
    'Database': <Database className="w-6 h-6" />,
    'Smartphone': <Smartphone className="w-6 h-6" />,
    'Server': <Server className="w-6 h-6" />,
    'Wifi': <Wifi className="w-6 h-6" />
  }

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms that learn and adapt to your business needs'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'Natural Language Processing',
      description: 'Understand and process human language with state-of-the-art NLP'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Make data-driven decisions with AI-powered forecasting'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security',
      description: 'Protect your systems with intelligent threat detection'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, NLP, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive suite of AI solutions. 
              From machine learning to natural language processing, we deliver cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of AI services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {iconMap[service.icon] || <Brain className="w-6 h-6" />}
                  <span className="text-purple-400 text-sm font-semibold bg-purple-400/10 px-2 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    to={service.path}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-sm"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Call Now
                  </a>
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
                Let's discuss how our AI solutions can help your business achieve its goals 
                and stay competitive in today's market.
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

export default AIServicesPage