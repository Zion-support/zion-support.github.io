'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Cloud, Shield, Code, BarChart, Zap, CheckCircle, ArrowRight, Users, Target, Globe, Database, Smartphone, Settings, Calendar, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, Eye, Mic } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions'],
      price: 'Starting at $500/month',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response'],
      price: 'Starting at $1,000/month',
      popular: false
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      price: 'Starting at $3,000',
      popular: true
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Reporting'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Solutions', 'Integration'],
      price: 'Starting at $349/month',
      popular: true
    }
  ]

  const microSaasServices = [
    {
      icon: MessageSquare,
      title: 'Zion AI Email Marketing',
      description: 'AI-powered email automation that increases open rates by 300%',
      price: '$97/month',
      popular: true
    },
    {
      icon: Users,
      title: 'Zion AI CRM Assistant',
      description: 'Intelligent CRM management that increases sales by 40%',
      price: '$147/month',
      popular: true
    },
    {
      icon: DollarSign,
      title: 'Zion AI Expense Tracker',
      description: 'Smart expense management with AI receipt scanning',
      price: '$9.99/month',
      popular: false
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization that increases traffic by 300%',
      price: '$97/month',
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Brain className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From AI-powered automation to enterprise IT solutions, we provide the technology 
              and expertise you need to transform your business and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Core <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional services designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="text-cyan-400 font-bold text-sm mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Micro <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">SAAS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions that solve specific business problems with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pink-500/50 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="text-pink-400 font-bold text-lg mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage