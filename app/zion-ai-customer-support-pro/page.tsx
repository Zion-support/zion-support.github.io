'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, TrendingUp, Target, Brain, Zap, BarChart3, CheckCircle, ArrowRight, Star, Users, Award, Calendar, PieChart, LineChart } from 'lucide-react';

const ZionAiCustomerSupportProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Intelligent chatbot that provides instant, accurate responses to customer inquiries 24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Handle support across email, chat, social media, and phone with unified AI assistance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Support Analytics',
      description: 'Track response times, satisfaction scores, and resolution rates with detailed analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Ticket Routing',
      description: 'Smart ticket routing ensures inquiries reach the right agent based on expertise and workload',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 tickets/month',
        'Basic AI chatbot',
        'Email support',
        'Standard analytics',
        '1 user account',
        'Email integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$329',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 tickets/month',
        'Advanced AI responses',
        'Priority support',
        'Custom analytics',
        'Up to 5 user accounts',
        'Multi-channel support',
        'Knowledge base',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited tickets',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'Advanced automation'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '80%', label: 'Response Time Reduction', icon: Zap },
    { number: '95%', label: 'Customer Satisfaction', icon: Star },
    { number: '60%', label: 'Cost Savings', icon: TrendingUp },
    { number: '300+', label: 'Happy Customers', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Support Pro - Reduce Response Time by 80% | Zion Tech Group</title>
        <meta name="description" content="AI-powered customer support platform. Reduce response time by 80% with intelligent chatbots, multi-channel support, and advanced analytics. Starting at $129/month." />
        <meta name="keywords" content="customer support, AI chatbot, support automation, helpdesk, customer service, support analytics" />
        <meta property="og:title" content="Zion AI Customer Support Pro - Reduce Response Time by 80%" />
        <meta property="og:description" content="AI-powered customer support platform with intelligent chatbots and multi-channel support. Reduce response time by 80% and boost satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-support-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Zion AI Customer Support Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your customer support with AI. Reduce response time by 80% and achieve 95% customer satisfaction with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI to provide exceptional customer support across all channels
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Scalable Support Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your support volume. All plans include our core AI support engine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-blue-400/60 ring-2 ring-blue-400/20' : 'border-slate-700/50'} hover:border-blue-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' 
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-blue-500/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Elevate Your Customer Support Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 300+ companies already using Zion AI Customer Support Pro to reduce response time by 80% and achieve 95% customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCustomerSupportProPage;