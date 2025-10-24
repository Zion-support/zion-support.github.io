'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart, Send, BarChart3, Shield, DollarSign, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

// Icon mapping for serialization
const iconMap = {
  Zap,
  Globe,
  BarChart,
  Brain,
  MessageCircle,
  Target,
  Settings,
  Workflow,
  Server,
  Clock,
  ShoppingCart,
  Send,
  BarChart3,
  Shield,
  DollarSign,
  Star,
  Activity,
  Lock,
  FileText,
  CreditCard,
  Database,
  Building2,
  Sparkles,
  PieChart,
  Users,
  CheckCircle,
  ArrowRight
};

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: 'Zap',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Language Support',
      description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
      icon: 'Globe',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
      icon: 'BarChart',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Leverage advanced NLP and machine learning for intelligent, context-aware conversations',
      icon: 'Brain',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Integration Ready',
      description: 'Connect with your existing systems, CRM, and third-party applications seamlessly',
      icon: 'MessageCircle',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Customizable Design',
      description: 'Match your brand with fully customizable chatbot appearance and behavior',
      icon: 'Target',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding user intent and context',
      icon: 'Brain',
      features: ['Intent Recognition', 'Entity Extraction', 'Sentiment Analysis', 'Context Awareness']
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across multiple platforms and channels',
      icon: 'Globe',
      features: ['Website Integration', 'Social Media', 'Mobile Apps', 'API Access']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes through conversational interfaces',
      icon: 'Workflow',
      features: ['Process Automation', 'Task Routing', 'Approval Workflows', 'Data Collection']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to optimize chatbot performance',
      icon: 'BarChart3',
      features: ['Conversation Analytics', 'User Behavior Tracking', 'Performance Metrics', 'A/B Testing']
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 70%',
    'Provide 24/7 customer assistance',
    'Improve response time to under 1 second',
    'Scale customer service without additional staff',
    'Collect valuable customer insights and data',
    'Integrate seamlessly with existing systems'
  ];

  const stats = [
    { number: '10K+', label: 'Chatbots Built', icon: 'MessageCircle' },
    { number: '50M+', label: 'Conversations', icon: 'Users' },
    { number: '99.9%', label: 'Uptime', icon: 'Server' },
    { number: '24/7', label: 'Support', icon: 'Clock' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create intelligent, conversational AI chatbots without coding. Build, deploy, and scale 
            sophisticated chatbots that engage your customers and automate your business processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create chatbots that truly understand and engage your users
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = iconMap[capability.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-10 h-10 text-purple-400 mr-4" />
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Chatbot Builder?
              </h2>
              <p className="text-gray-300 mb-8">
                Our platform combines ease of use with powerful AI capabilities, enabling you to create 
                sophisticated chatbots that deliver real business value.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started in 3 Steps</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Design Your Bot</h4>
                    <p className="text-gray-300 text-sm">Use our visual builder to create conversation flows and define responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Train & Test</h4>
                    <p className="text-gray-300 text-sm">Train your bot with sample conversations and test its responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Deploy & Monitor</h4>
                    <p className="text-gray-300 text-sm">Deploy your bot and monitor its performance with detailed analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start creating intelligent chatbots today and transform how you engage with your customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;