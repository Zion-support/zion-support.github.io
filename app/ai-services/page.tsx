'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Globe, Database, Code, Cloud, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      features: ['Blog Posts & Articles', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      pricing: 'Starting at $99/month',
      href: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.',
      features: ['24/7 Customer Support', 'Multi-language Support', 'Integration Ready', 'Analytics Dashboard'],
      pricing: 'Starting at $149/month',
      href: '/ai-chatbot-builder'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Automated Response', 'Compliance Reporting'],
      pricing: 'Starting at $299/month',
      href: '/ai-cybersecurity-suite'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with our intelligent analytics platform.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      pricing: 'Starting at $199/month',
      href: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'AI Code Assistant',
      description: 'Boost developer productivity with AI-powered code generation and optimization.',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation'],
      pricing: 'Starting at $79/month',
      href: '/ai-code-assistant'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management with automated scaling and optimization.',
      features: ['Auto-scaling', 'Cost Optimization', 'Performance Monitoring', 'Security Management'],
      pricing: 'Starting at $249/month',
      href: '/ai-cloud-infrastructure'
    }
  ]

  const microSaasServices = [
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI-powered prioritization and scheduling.',
      pricing: '$29/month',
      href: '/ai-task-manager'
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      pricing: '$19/month',
      href: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      pricing: '$15/month',
      href: '/ai-password-manager'
    },
    {
      icon: <Code className="w-6 h-6 text-rose-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      pricing: '$25/month',
      href: '/ai-invoice-generator'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, cybersecurity, and data analytics. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI solutions, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From content generation to cybersecurity, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main AI Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                </div>
                <a
                  href={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI-powered tools for everyday business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <span className="text-lg font-bold text-purple-400">{service.pricing}</span>
                </div>
                <a
                  href={service.href}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform text-sm"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}