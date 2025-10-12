'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Brain, BarChart, MessageCircle, Heart, Link as LinkIcon, Globe, Play } from 'lucide-react';

const ZionChatAiPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'Multi-Language Support',
      description: 'Support customers in 50+ languages with automatic translation and localization',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and respond appropriately with AI-powered sentiment detection',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Escalation Management',
      description: 'Seamlessly transfer complex queries to human agents with full context',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Performance Analytics',
      description: 'Track response times, satisfaction scores, and conversation outcomes',
      icon: BarChart,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Custom Training',
      description: 'Train the AI on your specific products, services, and company knowledge',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Integration APIs',
      description: 'Connect with your existing CRM, helpdesk, and business tools',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI training',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Up to 5 chatbots',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        '24/7 phone support',
        'Custom integrations',
        'Enterprise analytics',
        'Unlimited chatbots',
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <>
  return (
      <Helmet>
        <title>Zion Chat AI - Intelligent Customer Support Chatbot</title>
        <meta name="description" content="Transform your customer support with Zion Chat AI - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot platform, customer service automation, AI assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white text-sm font-semibold mb-6">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI-Powered Chatbot
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Zion Chat
                  <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    AI
                  </span>
                </h1>
                <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  The most intelligent customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-300">4.8/5 (89 reviews)</span>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">Live Chat</h3>
                        <div className="flex items-center text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Online
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                            <p className="text-white text-sm">Hi! How can I help you today?</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 justify-end">
                          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-3 max-w-xs">
                            <p className="text-white text-sm">I need help with my order</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                            <p className="text-white text-sm">I'd be happy to help! Can you provide your order number?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Customer Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support with AI-powered automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and see how Zion Chat AI can revolutionize your customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ZionChatAiPage;