'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Users, Star, Sparkles, Rocket, MessageCircle, Settings } from 'lucide-react'
import Layout from '../layout'

const AIChatbotBuilderPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('starter')

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations and understanding.'
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'Easy Customization',
      description: 'No coding required - build and customize your chatbot with our intuitive interface.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with GDPR compliance and data protection features.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Platform Integration',
      description: 'Deploy across websites, mobile apps, and messaging platforms seamlessly.'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Help customers with product inquiries, order tracking, and returns.',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information automatically.',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'FAQ Automation',
      description: 'Answer common questions 24/7 without human intervention.',
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Appointment Scheduling',
      description: 'Let customers book appointments directly through the chatbot.',
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses getting started with AI chatbots.',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      id: 'starter'
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses with advanced chatbot needs.',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP & machine learning',
        'Multi-platform integration',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom branding'
      ],
      popular: true,
      id: 'professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      id: 'enterprise'
    }
  ]

  return (
    <Layout 
      title="AI Chatbot Builder - Zion Tech Group"
      description="Build intelligent chatbots with our AI-powered platform. No coding required. Deploy across multiple channels and engage customers 24/7."
      keywords="AI chatbot, chatbot builder, customer service automation, conversational AI, virtual assistant"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Chatbot Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build intelligent chatbots that engage customers, answer questions, and drive conversions. 
            No coding required - launch in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              See Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build sophisticated chatbots with our comprehensive suite of AI-powered tools and features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer support to lead generation, our chatbots excel in every scenario.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your AI Chatbot?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start building your intelligent chatbot today and see how it can transform your customer engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Building Now
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIChatbotBuilderPage