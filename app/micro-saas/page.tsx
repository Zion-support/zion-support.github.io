'use client';
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket } from 'lucide-react';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with predictive analytics and automated resource allocation',
          features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '300% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: '$199/month',
          trial: '7-day free trial',
          roi: '250% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with predictive insights and automated reporting',
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
          pricing: '$399/month',
          trial: '14-day free trial',
          roi: '400% ROI in 4 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-analytics-dashboard'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns with personalization and automated A/B testing',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: '$149/month',
          trial: '7-day free trial',
          roi: '200% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-email-marketing'
        }
      ]
    },
    {
      category: 'Customer Experience Solutions',
      icon: Users,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Customer Support Bot',
          description: '24/7 intelligent customer support with natural language processing and escalation management',
          features: ['24/7 Availability', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration'],
          pricing: '$249/month',
          trial: '14-day free trial',
          roi: '350% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-customer-support-bot'
        },
        {
          name: 'AI Lead Generation Engine',
          description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring',
          features: ['Lead Scoring', 'Automated Outreach', 'Qualification Logic', 'CRM Integration', 'Performance Tracking'],
          pricing: '$349/month',
          trial: '14-day free trial',
          roi: '450% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-lead-generation'
        },
        {
          name: 'AI Chatbot Builder',
          description: 'No-code chatbot creation platform with advanced conversation flows and integrations',
          features: ['Drag & Drop Builder', 'Multi-channel Deployment', 'Analytics Dashboard', 'Integration APIs', 'Custom Templates'],
          pricing: '$99/month',
          trial: '7-day free trial',
          roi: '150% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-chatbot-builder'
        }
      ]
    },
    {
      category: 'Content & Marketing Automation',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Studio',
          description: 'Complete content creation suite with AI writing, editing, and optimization tools',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: '$179/month',
          trial: '7-day free trial',
          roi: '200% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-studio'
        },
        {
          name: 'AI SEO Optimizer',
          description: 'Automated SEO analysis, keyword research, and content optimization recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: '$129/month',
          trial: '7-day free trial',
          roi: '180% ROI in 4 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-seo-optimizer'
        },
        {
          name: 'AI Social Media Analytics',
          description: 'Advanced social media performance tracking with sentiment analysis and trend prediction',
          features: ['Performance Tracking', 'Sentiment Analysis', 'Trend Prediction', 'Competitor Analysis', 'ROI Measurement'],
          pricing: '$159/month',
          trial: '7-day free trial',
          roi: '220% ROI in 3 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-social-media-analytics'
        }
      ]
    },
    {
      category: 'Financial & Business Intelligence',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'AI Invoice Generator',
          description: 'Automated invoice creation, tracking, and payment processing with smart reminders',
          features: ['Auto Invoice Generation', 'Payment Tracking', 'Smart Reminders', 'Multi-currency Support', 'Integration APIs'],
          pricing: '$79/month',
          trial: '7-day free trial',
          roi: '120% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-invoice-generator'
        },
        {
          name: 'AI Expense Tracker',
          description: 'Intelligent expense categorization, receipt scanning, and budget management',
          features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Mobile App'],
          pricing: '$59/month',
          trial: '7-day free trial',
          roi: '100% ROI in 1 month',
          popular: false,
          link: 'https://ziontechgroup.com/ai-expense-tracker'
        },
        {
          name: 'AI Financial Advisor',
          description: 'Personalized financial planning and investment recommendations based on AI analysis',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Goal Tracking', 'Tax Optimization'],
          pricing: '$199/month',
          trial: '14-day free trial',
          roi: '250% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-financial-advisor'
        }
      ]
    },
    {
      category: 'Productivity & Workflow Tools',
      icon: Settings,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Visual workflow builder with AI-powered optimization and error detection',
          features: ['Visual Builder', 'AI Optimization', 'Error Detection', 'Integration Hub', 'Performance Analytics'],
          pricing: '$149/month',
          trial: '14-day free trial',
          roi: '300% ROI in 4 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-workflow-automation'
        },
        {
          name: 'AI Meeting Assistant',
          description: 'Intelligent meeting transcription, summarization, and action item extraction',
          features: ['Live Transcription', 'Meeting Summaries', 'Action Items', 'Speaker Identification', 'Calendar Integration'],
          pricing: '$89/month',
          trial: '7-day free trial',
          roi: '150% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-meeting-assistant'
        },
        {
          name: 'AI Document Processor',
          description: 'Intelligent document analysis, extraction, and processing with OCR technology',
          features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: '$119/month',
          trial: '7-day free trial',
          roi: '180% ROI in 3 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-document-processor'
        }
      ]
    },
    {
      category: 'E-commerce & Sales Tools',
      icon: ShoppingCart,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {
          name: 'AI E-commerce Optimizer',
          description: 'Complete e-commerce optimization with product recommendations and pricing intelligence',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Tracking'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '400% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
        },
        {
          name: 'AI Sales Predictor',
          description: 'Advanced sales forecasting and pipeline optimization with predictive analytics',
          features: ['Sales Forecasting', 'Pipeline Analysis', 'Deal Probability', 'Performance Tracking', 'CRM Integration'],
          pricing: '$199/month',
          trial: '14-day free trial',
          roi: '300% ROI in 4 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-sales-predictor'
        },
        {
          name: 'AI Inventory Manager',
          description: 'Intelligent inventory management with demand forecasting and automated reordering',
          features: ['Demand Forecasting', 'Auto Reordering', 'Stock Optimization', 'Supplier Management', 'Cost Analysis'],
          pricing: '$179/month',
          trial: '7-day free trial',
          roi: '250% ROI in 3 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-inventory-manager'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our micro-SaaS tools deliver average ROI of 200-400% within 6 months',
      stat: '200-400%'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process',
      stat: '< 5 min'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption',
      stat: '100%'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our team of experts',
      stat: '24/7'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Leverage advanced AI to automate repetitive tasks and boost productivity'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights with comprehensive dashboards and reporting'
    },
    {
      icon: Globe,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our secure cloud infrastructure'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        '10GB storage',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        '24/7 phone support',
        'Custom integrations',
        'Unlimited storage',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, AI-driven micro-SaaS tools that solve specific business problems. 
              Get started in minutes and see results in days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud-Based</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Easy Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro-SaaS Tools?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven solutions that deliver immediate value and measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-SaaS Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized tools designed to solve specific business challenges
            </p>
          </div>
          <div className="space-y-16">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-green-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">ROI:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.roi}</span>
                        </div>
                      </div>
                      <a
                        href={service.link}
                        className="block w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all text-center"
                      >
                        Start Free Trial
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed with our micro-SaaS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include free trials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see the difference AI-powered micro-SaaS tools can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="https://ziontechgroup.com/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}