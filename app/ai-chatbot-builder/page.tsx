'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, Play
} from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Language Support',
      description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
      icon: BarChart,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection built-in',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Omnichannel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms seamlessly',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Training',
      description: 'Train your chatbot with your own data and knowledge base for personalized responses',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot builder',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced chatbot builder',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction', icon: Star },
    { number: '80%', label: 'Reduction in Support Tickets', icon: TrendingUp },
    { number: '24/7', label: 'Availability', icon: Clock },
    { number: '50+', label: 'Languages Supported', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Chatbot Platform</title>
        <meta name="description" content="Build intelligent chatbots without coding. Our AI chatbot builder offers no-code solutions, multi-language support, and enterprise-grade security." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, chatbot platform, AI assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent, conversational chatbots without coding. 
              Deploy across multiple channels and scale your customer support with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Building <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-6 border ${
                plan.popular ? 'border-purple-500/40 ring-2 ring-purple-500/20' : 'border-purple-500/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start creating intelligent conversations that engage your customers and drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Building <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;