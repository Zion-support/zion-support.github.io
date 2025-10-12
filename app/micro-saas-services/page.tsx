'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, CheckCircle, Star, Zap, Brain, BarChart3, Bot, Shield, Network, Code, Clock, Users, DollarSign, Rocket, Globe, Lock, Cpu, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates and multi-language support',
      price: '$29',
      period: 'month',
      features: ['50+ Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Check', 'Content Calendar'],
      icon: <Brain className="w-8 h-8" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization with custom reports',
      price: '$49',
      period: 'month',
      features: ['Real-time Data', 'Custom Reports', 'API Integration', 'Mobile App', 'Data Export', 'Team Collaboration'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      popular: true,
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      name: 'Automated Customer Support',
      description: 'AI chatbot with 24/7 customer service capabilities and sentiment analysis',
      price: '$39',
      period: 'month',
      features: ['24/7 Support', 'Multi-channel', 'Sentiment Analysis', 'Custom Training', 'Live Chat Handoff', 'Performance Analytics'],
      icon: <Bot className="w-8 h-8" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/automated-support'
    },
    {
      name: 'Cloud Security Monitor',
      description: 'Advanced threat detection and security monitoring with compliance reports',
      price: '$79',
      period: 'month',
      features: ['Threat Detection', 'Compliance Reports', 'Real-time Alerts', 'Incident Response', 'Security Audit', 'Vulnerability Scanning'],
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/cloud-security'
    },
    {
      name: '5G Network Optimizer',
      description: 'Optimize your 5G network performance and coverage with predictive maintenance',
      price: '$99',
      period: 'month',
      features: ['Network Analysis', 'Coverage Mapping', 'Performance Metrics', 'Predictive Maintenance', 'Capacity Planning', 'Interference Detection'],
      icon: <Network className="w-8 h-8" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/5g-optimizer'
    },
    {
      name: 'AI Code Assistant',
      description: 'Intelligent code generation and debugging assistance with multi-language support',
      price: '$59',
      period: 'month',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Multi-language Support', 'Code Review', 'Documentation Generation'],
      icon: <Code className="w-8 h-8" />,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      name: 'Business Process Automation',
      description: 'Streamline workflows with intelligent automation and integration capabilities',
      price: '$69',
      period: 'month',
      features: ['Workflow Automation', 'API Integrations', 'Custom Triggers', 'Data Processing', 'Email Automation', 'Task Scheduling'],
      icon: <Zap className="w-8 h-8" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/process-automation'
    },
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with predictive analytics',
      price: '$89',
      period: 'month',
      features: ['Lead Scoring', 'Predictive Analytics', 'Email Campaigns', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      icon: <Users className="w-8 h-8" />,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      name: 'Edge Computing Manager',
      description: 'Manage edge computing resources and optimize distributed applications',
      price: '$119',
      period: 'month',
      features: ['Edge Deployment', 'Resource Optimization', 'Latency Monitoring', 'Load Balancing', 'Security Management', 'Performance Analytics'],
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/edge-computing'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Effective',
      description: 'Affordable pricing with no hidden fees. Scale up or down as needed'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Access',
      description: 'Access your tools from anywhere in the world with 99.9% uptime guarantee'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with regular backups and data encryption'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Micro SaaS Services - Zion Tech Group"
        description="Powerful, affordable micro SaaS tools designed to streamline your business operations. AI-powered solutions for content generation, analytics, automation, and more."
        keywords="micro saas, saas tools, business automation, ai tools, content generation, analytics dashboard, customer support, cloud security"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 animate-pulse">
                🚀 Micro SaaS Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Powerful <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Micro SaaS</span> Tools
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline your business operations with our collection of AI-powered micro SaaS tools. 
              Affordable, scalable, and designed for modern businesses.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of micro SaaS tools designed to enhance your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {service.price}
                        <span className="text-lg text-gray-400">/{service.period}</span>
                      </div>
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
                  
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Try Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400 text-purple-400 py-3 px-6 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Choose from our micro SaaS tools or contact us for a custom solution tailored to your business needs
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Request Demo
                    <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}