'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiCustomerSupportChatbotPage: React.FC = () => {,
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      description: 'Comprehensive analytics dashboard with customer insights and performance metrics.',
      benefits: ['Real-time analytics', 'Customer satisfaction tracking', 'Response time metrics', 'Conversion tracking']
    },
    {
      icon: Bot,
      title: 'Smart Escalation',
      description: 'Intelligent routing to human agents when complex issues require human intervention.',
      benefits: ['Seamless handoff', 'Context preservation', 'Priority queuing', 'Agent workload balancing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance with industry standards.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy protection']
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns with AI assistance',
      icon: '🛒'
    },
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
    'Gain competitive advantage with advanced technology';
  ]
return(<>)
      <Helmet />

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */} <section className="py-20 px-4">
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, Clock, Headphones } from 'lucide-react'
import Layout from '../layout'

export default function AICustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Intelligent Routing',
      description: 'Automatically route complex queries to the right human agents when needed'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Analytics & Insights',
      description: 'Track customer satisfaction, response times, and identify improvement opportunities'
    }
  ]

  const chatbotFeatures = [
    {
      category: 'Conversation Management',
      items: ['Multi-language Support', 'Context Awareness', 'Sentiment Analysis', 'Conversation History', 'Quick Responses', 'Escalation Rules']
    },
    {
      category: 'Integration',
      items: ['Website Widget', 'Mobile Apps', 'Social Media', 'Email Integration', 'CRM Systems', 'Help Desk Tools']
    },
    {
      category: 'Customization',
      items: ['Brand Styling', 'Custom Responses', 'Knowledge Base', 'FAQ Management', 'Personality Settings', 'Response Templates']
    },
    {
      category: 'Analytics',
      items: ['Response Metrics', 'Customer Satisfaction', 'Resolution Rates', 'Popular Queries', 'Performance Reports', 'ROI Tracking']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Website integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced analytics',
        'Multi-channel support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Lisa Chen',
      company: 'E-commerce Store',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%.',
      rating: 5
    },
    {
      name: 'John Martinez',
      company: 'SaaS Company',
      content: 'The chatbot handles 80% of our support queries automatically. Our team can focus on complex issues.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Service Provider',
      content: '24/7 support without additional costs. Our customers love the instant responses and availability.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Customer Support Chatbot - 24/7 Automated Support | Zion Tech Group"
      description="Transform your customer support with AI-powered chatbots. Provide instant, intelligent responses 24/7. Reduce support costs and improve customer satisfaction. Start your free trial today."
      keywords="customer support chatbot, AI chatbot, automated support, customer service, 24/7 support, chatbot solution"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Customer Support Chatbot
            <p>Advanced AI-powered ai customer support chatbot solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Customer Support Chatbot combines cutting-edge technology with customer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />
        {/* Benefits Section */} <section className="py-20 px-4">
                    </ul>
                  </div>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
      </div>
}
