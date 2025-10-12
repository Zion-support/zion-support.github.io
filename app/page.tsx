'use client'
<<<<<<< HEAD
import React from 'react'
import SEOHead from './components/SEOHead'
<<<<<<< HEAD
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
=======
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
import { Link } from 'react-router-dom'
=======
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
import React, { Suspense, lazy } from 'react'
import { ArrowRight, Shield, Globe, Database, Code, Cloud, Smartphone, Brain } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import OptimizedLoading from './components/OptimizedLoading'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const features = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $39/month', 'AI Email Assistant - $19/month'],
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.'
=======
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: <Code className="w-8 h-8 text-red-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/30'
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
=======
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-500/30'
    }
  ]

  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates',
      price: '$29/month',
      features: ['50+ Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
      icon: <Brain className="w-6 h-6" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization',
      price: '$49/month',
      features: ['Real-time Data', 'Custom Reports', 'API Integration', 'Mobile App'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Automated Customer Support',
      description: 'AI chatbot with 24/7 customer service capabilities',
      price: '$39/month',
      features: ['24/7 Support', 'Multi-channel', 'Sentiment Analysis', 'Custom Training'],
      icon: <Bot className="w-6 h-6" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      name: 'Cloud Security Monitor',
      description: 'Advanced threat detection and security monitoring',
      price: '$79/month',
      features: ['Threat Detection', 'Compliance Reports', 'Real-time Alerts', 'Incident Response'],
      icon: <Shield className="w-6 h-6" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      name: '5G Network Optimizer',
      description: 'Optimize your 5G network performance and coverage',
      price: '$99/month',
      features: ['Network Analysis', 'Coverage Mapping', 'Performance Metrics', 'Predictive Maintenance'],
      icon: <Network className="w-6 h-6" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      name: 'AI Code Assistant',
      description: 'Intelligent code generation and debugging assistance',
      price: '$59/month',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Multi-language Support'],
      icon: <Code className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
<<<<<<< HEAD
      rating: 5
=======
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
      rating: 5,
      avatar: 'SJ'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5,
      avatar: 'MC'
    },
    {
<<<<<<< HEAD
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
<<<<<<< HEAD
      rating: 5
=======
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
=======
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.'
=======
      rating: 5,
      avatar: 'ER'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    }
  ]

  const services = [
    {
      title: 'AI Services',
      description: 'Advanced AI solutions for content generation, chatbots, and automation',
      href: '/ai-services',
      icon: Brain
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure and development services',
      href: '/it-services',
      icon: Code
    },
    {
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      href: '/cloud-services',
      icon: Cloud
    },
    {
<<<<<<< HEAD
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions',
      href: '/micro-saas',
      icon: Smartphone
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services."
        keywords="AI solutions, IT services, cloud computing, software development, artificial intelligence, machine learning, Zion Tech Group"
        canonical="/"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced AI & IT
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology and comprehensive IT services. 
            We deliver innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a
                  href={service.href}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
<<<<<<< HEAD
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
=======
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                >
                  Our Services
                </Link>
              </div>
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Advanced AI</span>
              <br />
              and IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, enhance security, 
              and streamline operations for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
            </div>
          </div>
<<<<<<< HEAD
        </section>
=======
      <main className="relative z-10">

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-pulse">
              🚀 Next-Generation Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              {' '}Advanced AI
            </span>
            <br />
            and IT Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive growth, enhance security, 
            and streamline operations for businesses worldwide. Experience the future of technology today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="group border-2 border-purple-400 text-purple-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center"
            >
              Explore Micro SaaS
              <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to meet your business needs and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-lg rounded-2xl p-8 border ${feature.borderColor} hover:bg-white/20 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-2 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SaaS</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powerful, affordable micro SaaS tools designed to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/30 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses already using our solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
=======
        </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
      </main>
      
      <Footer />
    </div>
  )
}
=======
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
=======
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join hundreds of businesses already using our solutions to drive growth, efficiency, and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/micro-saas-services"
                  className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Explore Solutions
                  <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <Footer />
=======
      </main>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
    </div>
  )
}
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
