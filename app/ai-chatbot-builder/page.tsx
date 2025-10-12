<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { ArrowRight, MessageCircle, Users, Zap, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageCircle, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react'
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
=======
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, MessageCircle, Users, Zap, Shield, Brain, Globe, Clock, Star, Target, DollarSign } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0

export default function AIChatbotBuilderPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
<<<<<<< HEAD
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Natural Conversations',
      description: 'Create chatbots that understand context and engage in natural, human-like conversations.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide intelligent responses and learn from interactions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quick Deployment',
      description: 'Build and deploy your chatbot in minutes with our intuitive drag-and-drop interface.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & Insights',
      description: 'Track performance, user satisfaction, and conversation analytics to optimize your bot.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance and data protection features.'
    }
  ]

  const useCases = [
    'Customer support automation',
    'Lead generation and qualification',
    'E-commerce assistance',
    'FAQ automation',
    'Appointment scheduling',
    'Order tracking',
    'Technical support',
    'Sales consultation'
=======
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Customer Support',
      description: 'Provide round-the-clock customer support with intelligent chatbots that never sleep.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads and route them to the right team member instantly.'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'FAQ Automation',
      description: 'Answer common questions instantly with automated responses and smart routing.'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Multi-language Support',
      description: 'Support customers in multiple languages with real-time translation capabilities.'
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-500" />,
      title: 'AI Learning',
      description: 'Chatbots learn from every interaction to provide better responses over time.'
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-500" />,
      title: 'Omnichannel Integration',
      description: 'Deploy across websites, social media, and messaging platforms seamlessly.'
=======
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
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Multi-Channel Bot',
      description: 'Deploy across multiple channels including website, social media, and messaging apps.',
      useCases: ['Website chat', 'Facebook Messenger', 'WhatsApp Business', 'Slack integration'],
      pricing: 'Starting at $800/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Bot',
      description: 'Advanced AI chatbot with custom training, analytics, and enterprise features.',
      useCases: ['Custom AI training', 'Advanced analytics', 'White-label options', 'API access'],
      pricing: 'Starting at $1,500/month'
>>>>>>> cursor/website-audit-and-update-with-deployment-a178
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard integrations',
        'Analytics dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with learning',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-language support',
        'Lead qualification'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Help customers with product questions, order tracking, and returns.',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically with smart conversation flows.',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Technical Support',
      description: 'Provide instant technical assistance and troubleshooting guidance.',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Appointment Booking',
      description: 'Automate appointment scheduling and calendar management.',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ]

  const benefits = [
    'Reduce support costs by up to 60%',
    'Increase customer satisfaction',
    'Qualify leads 24/7',
    'Scale support without scaling staff',
    'Gather valuable customer insights',
    'Integrate with existing tools'
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. Create engaging conversational experiences for your customers." />
        <meta name="keywords" content="AI chatbot builder, conversational AI, customer support automation, chatbot development" />
=======
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Customer Support</title>
        <meta name="description" content="Build intelligent chatbots for your business with our AI-powered chatbot builder. 24/7 customer support, lead qualification, and more." />
        <meta name="keywords" content="AI chatbot, chatbot builder, customer support, lead qualification, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Chatbot Builder
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent, conversational chatbots that engage your customers and automate support. 
              No coding required - just drag, drop, and deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Build Your Bot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Try Demo
              </Link>
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build intelligent chatbots that provide 24/7 customer support, qualify leads, 
              and automate your customer service operations.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'pricing'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'features'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Features
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and deploy intelligent chatbots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Chatbot Builder?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered chatbot builder makes it easy to create intelligent, conversational 
                  experiences that engage your customers and drive business results.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6">Use Cases</h3>
                <div className="space-y-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                          {useCase.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                        <p className="text-gray-300">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to build, deploy, and manage intelligent chatbots.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tab */}
      {activeTab === 'pricing' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group relative ${
                  plan.popular 
                    ? 'border-cyan-400/50 scale-105' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300">
                Our AI chatbot builder excels at various business applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start creating intelligent chatbots that engage your customers and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Building
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Your AI Chatbot?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Start building intelligent chatbots that will transform your customer service experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Building Today
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All AI Services
                </Link>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d9d0
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-a178
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  )
}
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-a178
