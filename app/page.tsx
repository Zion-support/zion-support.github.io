'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'AI Services' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
  ]

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Services & Solutions',
      description: 'Comprehensive AI solutions including content generation, chatbots, automation, and machine learning models.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $39/month', 'AI Email Assistant - $19/month'],
      link: '/ai-services'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Micro SAAS Applications',
      description: 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services'
    },
    {
      icon: <Wifi className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Cpu className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud services, 5G implementation, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section with Futuristic Design */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Advanced <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4 py-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Services
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link 
                  key={index} 
                  to={feature.link} 
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-blue-400 group-hover:text-purple-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how our AI and IT solutions can drive your success. Get a free consultation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore AI Services
                    </Link>
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
