import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageCircle, Users, Zap, Shield, Brain, Globe, Clock, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding and responding to user queries naturally.',
      benefits: ['Intent Recognition - $200/month', 'Sentiment Analysis - $150/month', 'Multi-language Support - $300/month', 'Context Awareness - $250/month']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Multi-Channel Integration',
      description: 'Deploy your chatbot across multiple platforms including websites, social media, and messaging apps.',
      benefits: ['Website Integration - $100/setup', 'WhatsApp Business - $200/month', 'Facebook Messenger - $150/month', 'Slack Integration - $100/month']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'AI-Powered Responses',
      description: 'Intelligent responses powered by machine learning that improve over time.',
      benefits: ['Machine Learning - $400/month', 'Response Optimization - $200/month', 'A/B Testing - $150/month', 'Performance Analytics - $100/month']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR compliance and data protection.',
      benefits: ['Data Encryption - $150/month', 'GDPR Compliance - $200/setup', 'Audit Logs - $100/month', 'Access Control - $120/month']
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: 'Custom Training',
      description: 'Train your chatbot with your specific data and business knowledge.',
      benefits: ['Custom Training - $500/setup', 'Knowledge Base Integration - $300/month', 'Domain Expertise - $400/month', 'Continuous Learning - $250/month']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to understand user interactions and improve performance.',
      benefits: ['Usage Analytics - $150/month', 'Conversation Reports - $100/month', 'User Insights - $200/month', 'Performance Metrics - $120/month']
    }
  ]

  const chatbotTypes = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Customer Support Bot',
      description: 'Handle customer inquiries, provide product information, and resolve common issues.',
      useCases: ['FAQ automation', 'Order tracking', 'Technical support', 'Returns processing'],
      pricing: 'Starting at $300/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Sales Assistant Bot',
      description: 'Qualify leads, provide product recommendations, and guide customers through the sales process.',
      useCases: ['Lead qualification', 'Product recommendations', 'Price inquiries', 'Appointment booking'],
      pricing: 'Starting at $500/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'HR Assistant Bot',
      description: 'Streamline HR processes with automated responses to common employee questions.',
      useCases: ['Policy questions', 'Leave requests', 'Benefits information', 'Onboarding support'],
      pricing: 'Starting at $400/month'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Educational Bot',
      description: 'Create interactive learning experiences with AI-powered educational chatbots.',
      useCases: ['Course assistance', 'Quiz support', 'Study materials', 'Progress tracking'],
      pricing: 'Starting at $350/month'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Natural language processing, multi-channel integration, and custom training." />
        <meta name="keywords" content="AI chatbot, chatbot builder, natural language processing, customer support bot, sales assistant" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <MessageCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Intelligent Conversational AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Chatbot Builder</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Create intelligent chatbots that understand, learn, and engage with your customers naturally. 
              Build, deploy, and scale conversational AI solutions with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Build Your Chatbot
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to build and deploy intelligent chatbots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Chatbot <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose the perfect chatbot for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chatbotTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-4">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                    <p className="text-purple-400 font-medium">{type.pricing}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {type.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-2 text-center">
                      <span className="text-white text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Build Your Chatbot?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start building your intelligent chatbot today. Get a free consultation and see how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}