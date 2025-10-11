'use client'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import SEOHead from './components/SEOHead'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, CheckCircle } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
import { Link } from 'react-router-dom'
=======
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Shield, Database, Code, Cloud, Smartphone, Brain, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
<<<<<<< HEAD
  ]
=======
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['AI Content Generation - $500/month', 'Chatbot Development - $1,200', 'Process Automation - $2,000/month', 'AI Analytics - $800/month'],
=======
      benefits: ['AI Content Generation - $99/month', 'AI Chatbots - $199/month', 'AI Analytics - $299/month', 'AI Automation - $399/month'],
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      benefits: ['AI Content Generation - $500/month', 'AI Chatbots - $300/month', 'AI Automation - $800/month', 'AI Analytics - $400/month'],
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
      benefits: ['AI Content Generation', 'Smart Chatbots', 'Process Automation', 'Predictive Analytics'],
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
=======
=======
      benefits: ['AI Content Generation - $500/month', 'AI Chatbots - $300/month', 'Process Automation - $800/month', 'AI Analytics - $400/month'],
      link: '/ai-solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
    },
    {
<<<<<<< HEAD
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5
    },
    {
<<<<<<< HEAD
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
=======
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services'
    },
    {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Code className="w-8 h-8 text-yellow-500" />,
=======
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions for modern businesses.',
      benefits: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Maintenance & Support'],
      link: '/micro-saas-services'
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
<<<<<<< HEAD
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
=======
    { number: '50+', label: 'AI Solutions' },
    { number: '99%', label: 'Client Satisfaction' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
    { number: '24/7', label: 'Support Available' }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team' }
  ]

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud migration, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud migration, digital transformation, IT services, Zion Tech Group" />
      </Helmet>
=======
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
      />
=======
    <div className="px-4 py-20">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5G implementation" />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, software development, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      </Helmet>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
      
<<<<<<< HEAD
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
      <section className="py-12 sm:py-16 lg:py-20">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Stats Section */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
=======
      <Navigation />
      
      {/* Hero Section */}
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
=======
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
            {features.map((feature, index) => (
              <a key={index} href={feature.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
=======
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
                >
                  Get Free Consultation
                </a>
                <a
                  href="/services"
<<<<<<< HEAD
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
=======
=======
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
                >
                  Our Services
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud services, 5G implementation, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI & IT Solutions</span>
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
                >
                  Our Services
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </section>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90

<<<<<<< HEAD
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
        </div>
      </section>
=======
        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
=======
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      
      <Footer />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
    </div>
  )
<<<<<<< HEAD
}
=======
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
