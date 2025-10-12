'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, Shield, Globe, DollarSign, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality, SEO-optimized content for blogs, websites, and marketing materials using advanced AI.',
      features: ['SEO Optimization', 'Multiple Languages', 'Content Templates', 'Brand Voice Matching'],
      pricing: '$99/month',
      link: '/ai-content-generator',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent, conversational chatbots for customer support, sales, and engagement.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Analytics Dashboard', 'Custom Training'],
      pricing: '$149/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'],
      pricing: '$199/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, responses, and optimization with intelligent AI assistance.',
      features: ['Smart Responses', 'Email Optimization', 'Spam Detection', 'Scheduling'],
      pricing: '$79/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants for mobile apps, websites, and IoT devices.',
      features: ['Voice Recognition', 'Natural Speech', 'Multi-language Support', 'Custom Commands'],
      pricing: '$129/month',
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow Automation', 'Task Scheduling', 'Integration APIs', 'Custom Scripts'],
      pricing: '$299/month',
      link: '/ai-automation',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster.',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
      pricing: '$89/month',
      link: '/ai-code-assistant',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: 'AI Document Processor',
      description: 'Intelligently process, extract, and analyze information from documents.',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Batch Processing'],
      pricing: '$119/month',
      link: '/ai-document-processor',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Financial Advisor',
      description: 'Personalized financial advice and investment recommendations powered by AI.',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Market Predictions', 'Personalized Advice'],
      pricing: '$159/month',
      link: '/ai-financial-advisor',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support',
      description: 'Advanced AI customer support system with sentiment analysis and escalation.',
      features: ['Sentiment Analysis', 'Auto Escalation', 'Knowledge Base', 'Multi-channel'],
      pricing: '$179/month',
      link: '/ai-customer-support',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock, providing consistent support and automation.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% with intelligent automation and AI assistance.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI services as your business grows without additional infrastructure.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Results',
      description: 'Our AI solutions have helped 500+ businesses improve efficiency and customer satisfaction.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbot, content generation, analytics, automation, machine learning" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered services. From content generation to intelligent automation, we provide cutting-edge solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using our AI services to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
