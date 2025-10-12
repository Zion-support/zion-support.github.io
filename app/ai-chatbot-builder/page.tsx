<<<<<<< HEAD
import React from 'react';
import { CheckCircle, ArrowRight, MessageCircle, Users, Zap, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Customer Support',
      description: 'Provide round-the-clock customer support with intelligent chatbots'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads and route them to the right team'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'FAQ Automation',
      description: 'Answer common questions instantly with automated responses'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Multi-language Support',
      description: 'Support customers in multiple languages with translation'
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Bot, CheckCircle, Star, MessageCircle, Zap, Shield, Globe, Smartphone, Database, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIChatbotBuilderPage() {
  const [activeTab, setActiveTab] = useState('features')

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and sentiment in conversations.',
      benefits: ['Context awareness', 'Intent recognition', 'Sentiment analysis', 'Multi-language support']
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Instant Responses',
      description: 'Provide immediate, accurate responses to customer queries 24/7 without human intervention.',
      benefits: ['24/7 availability', 'Instant responses', 'Scalable conversations', 'No waiting time']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance features for GDPR, HIPAA, and other regulations.',
      benefits: ['Data encryption', 'GDPR compliant', 'HIPAA ready', 'SOC 2 certified']
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with your existing CRM, helpdesk, and business systems.',
      benefits: ['Salesforce integration', 'HubSpot support', 'Zendesk connection', 'Custom APIs']
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
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
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$300',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Website integration',
        'Email support',
        'Basic analytics',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$800',
      period: '/month',
      description: 'Ideal for growing businesses with higher conversation volumes',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP capabilities',
        'Multi-channel deployment',
        'Priority support',
        'Advanced analytics',
        'CRM integration',
        'Up to 5 chatbots',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,500',
      period: '/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited conversations',
        'Premium NLP capabilities',
        'All channels supported',
        '24/7 dedicated support',
        'Custom AI training',
        'White-label options',
        'API access',
        'Unlimited chatbots',
        'Advanced security'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Zendesk', logo: 'ZD' },
    { name: 'Slack', logo: 'SL' },
    { name: 'WhatsApp', logo: 'WA' },
    { name: 'Facebook', logo: 'FB' },
    { name: 'WordPress', logo: 'WP' },
    { name: 'Shopify', logo: 'SP' }
  ]

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'E-commerce Store',
      content: 'Our AI chatbot has handled 80% of customer inquiries automatically, reducing response time from hours to seconds. Customer satisfaction has increased by 40%.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Lisa Thompson',
      company: 'SaaS Company',
      content: 'The chatbot integration with our CRM has streamlined our lead qualification process. We\'ve seen a 60% increase in qualified leads and 30% improvement in conversion rates.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      company: 'Healthcare Provider',
      content: 'The HIPAA-compliant chatbot has improved our patient communication while maintaining security standards. Patient satisfaction scores have increased significantly.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '80%', label: 'Inquiries Resolved', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Availability', icon: <Clock className="w-6 h-6" /> },
    { number: '40%', label: 'Cost Reduction', icon: <Zap className="w-6 h-6" /> },
    { number: '95%', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
<<<<<<< HEAD
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Create intelligent chatbots for customer support, lead generation, and automated assistance." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Chatbot Builder
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent chatbots for customer support, lead generation, and automated assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All AI Services
              </Link>
=======
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent AI chatbots for customer support, sales, and engagement. Natural language processing, multi-channel deployment, and CRM integration. Starting at $300/month." />
        <meta name="keywords" content="AI chatbot, conversational AI, customer support bot, sales bot, chatbot builder, NLP, multi-channel chatbot" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Build intelligent conversational AI chatbots that engage customers, provide instant support, 
              and drive business growth across multiple channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Build Your Bot
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Advanced AI capabilities that make your chatbot intelligent and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Types of Chatbots</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the perfect chatbot solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {chatbotTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-lg font-bold text-white">{type.pricing}</span>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to="/contact" className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Seamless Integrations</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Connect your chatbot with the tools and platforms you already use
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <h3 className="text-white font-semibold text-sm">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Pricing Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that best fits your chatbot needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              See how our AI chatbots have transformed customer experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Build Your AI Chatbot?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start building intelligent conversations that engage customers and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Build Your Bot
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </a>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Chatbot Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build intelligent chatbots with advanced AI capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Chatbot?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start creating intelligent chatbots that can transform your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
    </div>
  )
}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
