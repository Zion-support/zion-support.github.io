'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Users, Target, Clock, Award, TrendingUp, BarChart, Cpu, Database, Cloud, Code, Settings, Monitor, Lock, Workflow, MessageCircle, FileText, DollarSign, Star, CheckSquare, Calendar, Headphones, MessageSquare, Eye, Mic, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without coding using our intuitive drag-and-drop interface'
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations and understanding'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Chatbots that learn and improve from every interaction automatically'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for 50+ languages with automatic translation capabilities'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track performance and optimize conversations'
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 60%',
    '24/7 availability for customer inquiries',
    'Instant response times under 1 second',
    'Seamless integration with existing systems',
    'Scalable to handle millions of conversations',
    'Easy deployment across multiple channels',
    'Advanced sentiment analysis and mood detection',
    'Customizable personality and brand voice'
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common inquiries, provide product information, and escalate complex issues',
      icon: Headphones
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads, answer product questions, and guide customers through the sales process',
      icon: Target
    },
    {
      title: 'Lead Generation',
      description: 'Capture leads, qualify prospects, and schedule appointments automatically',
      icon: Users
    },
    {
      title: 'E-commerce Support',
      description: 'Help with orders, returns, product recommendations, and checkout assistance',
      icon: ShoppingCart
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP & sentiment analysis',
        'Priority support',
        'Advanced integrations',
        'Detailed analytics & reporting',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'AI-powered insights',
        'Dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder | Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. No-code AI chatbot builder with advanced NLP, multi-language support, and enterprise security." />
        <meta name="keywords" content="AI chatbot, chatbot builder, no-code chatbot, conversational AI, customer support, sales assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Chatbot
              </span>
              <br />
              <span className="text-white">Builder</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent, conversational AI chatbots without coding. 
              Our no-code platform makes it easy to build, deploy, and scale chatbots that understand and engage your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group">
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to build intelligent chatbots</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Chatbot Builder?</h2>
            <p className="text-xl text-gray-300">Proven benefits for businesses of all sizes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-xl text-gray-300">Perfect for various business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-6 mx-auto">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-cyan-500/10 scale-105' 
                  : 'border-white/20 hover:bg-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Start building intelligent conversations that engage your customers and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;