'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Server, ArrowRight, CheckCircle, Star, Brain, Users, Mail, FileText, MessageSquare, Cpu, Cloud, Code, Database, Smartphone, Wifi, BarChart3, Shield } from 'lucide-react'
import { allServices } from '../data/services'

const ITServicesPage: React.FC = () => {
  const itServices = allServices.filter(s => s.category === 'it')

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
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your specifications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Discover our comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and data analytics. Transform your business with our expertise." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, custom development, data analytics, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions to power your business. From cloud infrastructure 
              to cybersecurity, we provide the technology foundation you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver results
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our IT Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end IT services for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {iconMap[service.icon] || <Server className="w-6 h-6" />}
                  <span className="text-blue-400 text-sm font-semibold bg-blue-400/10 px-2 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
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
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
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
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can help your business 
                achieve its technology goals and stay competitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default ITServicesPage