import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Server, Wifi, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'AI Services' },
    { number: '10K+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $39/month', 'AI Voice Assistant - $59/month'],
      link: '/ai-services',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/30'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: 'Micro SAAS Applications',
      description: 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: <Wifi className="w-12 h-12 text-yellow-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-400/30'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-400" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation',
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-400/30'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Task Manager Pro',
      price: '$19/month',
      description: 'Intelligent task management with AI-powered prioritization and automation',
      features: ['Smart Scheduling', 'Team Collaboration', 'Progress Tracking', 'AI Insights'],
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'AI Expense Tracker',
      price: '$15/month',
      description: 'Automated expense tracking with receipt scanning and categorization',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Reports'],
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      name: 'AI Password Manager',
      price: '$12/month',
      description: 'Secure password management with AI-powered security recommendations',
      features: ['Secure Storage', 'Auto Generation', 'Breach Monitoring', 'Family Sharing'],
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      name: 'AI Invoice Generator',
      price: '$25/month',
      description: 'Automated invoice creation with smart templates and payment tracking',
      features: ['Auto Generation', 'Payment Tracking', 'Client Portal', 'Tax Integration'],
      icon: <Database className="w-8 h-8 text-orange-500" />
    },
    {
      name: 'AI Health Tracker',
      price: '$18/month',
      description: 'Personal health monitoring with AI insights and wellness recommendations',
      features: ['Health Metrics', 'AI Insights', 'Goal Setting', 'Progress Reports'],
      icon: <Users className="w-8 h-8 text-red-500" />
    },
    {
      name: 'AI Smart Calendar',
      price: '$22/month',
      description: 'Intelligent calendar management with AI scheduling and optimization',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Blocking', 'Integration'],
      icon: <Globe className="w-8 h-8 text-cyan-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | https://ziontechgroup.com</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, micro SAAS applications, and digital transformation for modern businesses. Contact: +1 302 464 0950, kleber@ziontechgroup.com" />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud services, 5G implementation, digital transformation, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
              <span className="text-cyan-400 font-semibold"> Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-lg hover:border-cyan-400/50"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-lg rounded-2xl p-8 border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 group hover:scale-105 hover:shadow-2xl`}>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Popular <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Affordable, powerful micro applications designed to solve specific business problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="text-2xl font-bold text-pink-400">{service.price}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">{service.name}</h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
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
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. 
                  <span className="block mt-2 text-cyan-200 font-semibold">
                    Contact us today: +1 302 464 0950 | kleber@ziontechgroup.com
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
