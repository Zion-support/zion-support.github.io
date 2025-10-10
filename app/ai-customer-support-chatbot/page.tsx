'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, MessageSquare, Sparkles, Phone, Calendar, Bot, ArrowRight, Settings, Globe, Cpu, Database, Cloud, Lock, Eye, Activity, Zap, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding customer intent and providing accurate responses',
      benefits: ['95% accuracy in understanding queries', 'Multi-language support', 'Context awareness', 'Sentiment analysis']
    },
    {
      icon: MessageSquare,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and escalation to human agents',
      benefits: ['Instant response time', 'No waiting queues', 'Consistent service quality', 'Reduced support costs']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms',
      benefits: ['Website chat widget', 'Mobile app integration', 'Social media support', 'WhatsApp integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with customer insights and performance metrics',
      benefits: ['Real-time analytics', 'Customer satisfaction tracking', 'Response time metrics', 'Conversion tracking']
    }
  ];

  const capabilities = [
    {
      title: 'Intent Recognition',
      description: 'AI-powered intent recognition for accurate query understanding',
      icon: Target,
      features: ['Query classification', 'Intent prediction', 'Context understanding', 'Multi-turn conversations']
    },
    {
      title: 'Knowledge Base',
      description: 'Intelligent knowledge base with self-learning capabilities',
      icon: Database,
      features: ['Auto-learning', 'Content optimization', 'Search enhancement', 'Update automation']
    },
    {
      title: 'Escalation Management',
      description: 'Smart escalation to human agents when needed',
      icon: Users,
      features: ['Smart routing', 'Priority classification', 'Agent handoff', 'Context preservation']
    },
    {
      title: 'Integration Hub',
      description: 'Seamless integration with existing business tools',
      icon: Settings,
      features: ['CRM integration', 'Ticketing systems', 'Analytics tools', 'Custom APIs']
    }
  ];

  const benefits = [
    '95% customer satisfaction rate',
    '80% reduction in response time',
    '60% cost savings on support',
    '24/7 availability',
    'Multilingual support',
    'Scalable operations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic chatbot',
        'Up to 1,000 conversations/month',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI features',
        'Unlimited conversations',
        'Priority support',
        'Advanced integrations',
        'Custom analytics',
        'Multilingual support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer support chatbot with 95% accuracy, 24/7 availability, and multilingual support. Transform your customer service today." />
        <meta name="keywords" content="AI chatbot, customer support, virtual assistant, customer service automation, multilingual support" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support
                <span className="block text-purple-400">Chatbot</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered customer support chatbot with 95% accuracy, 24/7 availability, 
                and multilingual support. Transform your customer service today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for exceptional customer support
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Chatbot Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive chatbot automation and optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform customer support
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for chatbot solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Deploy Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered customer support journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AICustomerSupportChatbotPage;