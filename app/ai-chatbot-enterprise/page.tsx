'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, MessageSquare, Users, Zap, Shield, Globe, Brain, Bot, Headphones } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIChatbotEnterprisePage() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms with unified conversation management.',
      benefits: ['WhatsApp Integration', 'Facebook Messenger', 'Slack Integration', 'Web Chat Widget']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Advanced NLP & ML',
      description: 'State-of-the-art natural language processing with continuous learning capabilities.',
      benefits: ['Intent Recognition', 'Sentiment Analysis', 'Context Awareness', 'Multi-language Support']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      benefits: ['SOC 2 Compliance', 'GDPR Ready', 'Data Encryption', 'Access Controls']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues require personal attention.',
      benefits: ['Smart Escalation', 'Agent Dashboard', 'Customer History', 'Performance Analytics']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into customer interactions and chatbot performance.',
      benefits: ['Conversation Analytics', 'Customer Satisfaction', 'Response Time Metrics', 'ROI Tracking']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Deployment',
      description: 'Deploy across multiple regions with localized responses and cultural adaptation.',
      benefits: ['Multi-region Support', 'Localization', 'Cultural Adaptation', '24/7 Availability']
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-channel support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom deployment'
      ],
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Enterprise Chatbot Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered enterprise chatbot solutions with multi-channel support, advanced NLP, and enterprise-grade security. Transform customer service with intelligent automation." />
        <meta name="keywords" content="AI chatbot, enterprise chatbot, customer service automation, NLP, machine learning, multi-channel support" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <Bot className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Enterprise <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chatbot Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer service with intelligent AI chatbots that understand, learn, and deliver exceptional experiences across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features for Enterprise Success</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot platform is designed to handle complex enterprise requirements while delivering exceptional customer experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-white/20'} hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Customer Service?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of enterprises already using our AI chatbot solutions to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Headphones className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}