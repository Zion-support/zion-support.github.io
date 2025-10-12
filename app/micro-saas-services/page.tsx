import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Powerful analytics dashboard with AI-driven insights and real-time data visualization.',
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data export'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website with no coding required.',
      features: ['Drag & drop builder', 'Multi-language support', 'Analytics tracking', 'Custom integrations'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas-services/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$12/month',
      popular: false,
      link: '/ai-password-manager',
'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, CheckCircle, Star, Zap, Brain, BarChart3, Bot, Shield, Network, Code, Clock, Users, DollarSign, Rocket, Globe, Lock, Cpu, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates and multi-language support',
      price: '$29',
      period: 'month',
      features: ['50+ Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Check', 'Content Calendar'],
      icon: <Brain className="w-8 h-8" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization with custom reports',
      price: '$49',
      period: 'month',
      features: ['Real-time Data', 'Custom Reports', 'API Integration', 'Mobile App', 'Data Export', 'Team Collaboration'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      popular: true,
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      name: 'Automated Customer Support',
      description: 'AI chatbot with 24/7 customer service capabilities and sentiment analysis',
      price: '$39',
      period: 'month',
      features: ['24/7 Support', 'Multi-channel', 'Sentiment Analysis', 'Custom Training', 'Live Chat Handoff', 'Performance Analytics'],
      icon: <Bot className="w-8 h-8" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false,
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart task prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration', 'Deadline management', 'Productivity insights'],
      price: '$19/month',
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Smartphone, Database, Shield, Zap, Brain, Code, Star, DollarSign, Users, Globe, Clock } from 'lucide-react'

export default function MicroSAASServicesPage() {
  const [activeTab, setActiveTab] = useState('features')

  const microSaasApps = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, smart scheduling, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart scheduling and reminders',
        'Productivity analytics',
        'Team collaboration tools',
        'Mobile and web access',
        'Integration with popular tools'
      ],
      pricing: '$29/month',
      users: 'Up to 10 users',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports', 'Multi-currency support'],
      price: '$15/month',
      link: '/ai-expense-tracker',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync', 'Breach monitoring', 'Two-factor authentication'],
      price: '$12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and payment tracking.',
      features: ['Auto-invoice generation', 'Payment tracking', 'Custom templates', 'Tax calculations', 'Client management', 'Recurring billing'],
      price: '$25/month',
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health metrics tracking', 'AI insights', 'Wellness recommendations', 'Goal setting', 'Progress monitoring', 'Health reports'],
      price: '$18/month',
      link: '/ai-health-tracker',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Conflict resolution', 'Availability sharing'],
      price: '$22/month',
      link: '/ai-smart-calendar'
      link: 'https://ziontechgroup.com/automated-support'
    },
    {
      name: 'Cloud Security Monitor',
      description: 'Advanced threat detection and security monitoring with compliance reports',
      price: '$79',
      period: 'month',
      features: ['Threat Detection', 'Compliance Reports', 'Real-time Alerts', 'Incident Response', 'Security Audit', 'Vulnerability Scanning'],
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/cloud-security'
    },
    {
      name: '5G Network Optimizer',
      description: 'Optimize your 5G network performance and coverage with predictive maintenance',
      price: '$99',
      period: 'month',
      features: ['Network Analysis', 'Coverage Mapping', 'Performance Metrics', 'Predictive Maintenance', 'Capacity Planning', 'Interference Detection'],
      icon: <Network className="w-8 h-8" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/5g-optimizer'
    },
    {
      name: 'AI Code Assistant',
      description: 'Intelligent code generation and debugging assistance with multi-language support',
      price: '$59',
      period: 'month',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Multi-language Support', 'Code Review', 'Documentation Generation'],
      icon: <Code className="w-8 h-8" />,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      name: 'Business Process Automation',
      description: 'Streamline workflows with intelligent automation and integration capabilities',
      price: '$69',
      period: 'month',
      features: ['Workflow Automation', 'API Integrations', 'Custom Triggers', 'Data Processing', 'Email Automation', 'Task Scheduling'],
      icon: <Zap className="w-8 h-8" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/process-automation'
    },
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with predictive analytics',
      price: '$89',
      period: 'month',
      features: ['Lead Scoring', 'Predictive Analytics', 'Email Campaigns', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      icon: <Users className="w-8 h-8" />,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/ai-crm'
    },
    {
      name: 'Edge Computing Manager',
      description: 'Manage edge computing resources and optimize distributed applications',
      price: '$119',
      period: 'month',
      features: ['Edge Deployment', 'Resource Optimization', 'Latency Monitoring', 'Load Balancing', 'Security Management', 'Performance Analytics'],
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      popular: false,
      link: 'https://ziontechgroup.com/edge-computing'
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Team Collaboration Hub',
      description: 'Enhance team productivity with integrated communication and project management.',
      features: ['Real-time chat', 'File sharing', 'Project tracking'],
      pricing: 'Starting at $25/month',
      link: '/team-collaboration',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      features: ['Multiple content types', 'SEO optimization', 'Brand voice training', 'Bulk generation'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas-services/ai-content-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead generation and qualification using advanced AI algorithms.',
      features: ['Lead scoring', 'Email automation', 'CRM integration', 'Performance tracking'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas-services/ai-lead-generation',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management and automation with AI-powered responses.',
      features: ['Smart replies', 'Email scheduling', 'Priority sorting', 'Template library'],
      pricing: 'Starting at $24/month',
      link: '/micro-saas-services/ai-email-assistant',
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
      title: 'Cost Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Scalable',
      description: 'Grow with your business needs and scale effortlessly'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'StartupCo',
      content: 'The AI analytics dashboard gave us insights we never had before. Our decision-making improved dramatically.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'E-commerce Plus',
      content: 'The chatbot builder was incredibly easy to use. We had a working chatbot in under an hour.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Marketing Pro',
      content: 'The AI content generator saves us hours every week. The quality is consistently excellent.',
      rating: 5
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$29/month',
      popular: true,
      link: '/micro-saas-services/ai-content-writer'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      pricing: '$49/month',
      popular: false,
      link: '/micro-saas-services/ai-analytics-dashboard'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library'],
      pricing: '$19/month',
      popular: false,
      link: '/micro-saas-services/ai-email-assistant'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment'],
      pricing: '$39/month',
      popular: true,
      link: '/micro-saas-services/ai-lead-generation'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics'],
      pricing: '$25/month',
      popular: false,
      link: '/micro-saas-services/ai-social-media-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and budget alerts.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports'],
      pricing: '$15/month',
      popular: false,
      link: '/micro-saas-services/ai-expense-tracker'
    }
  ];
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Effective',
      description: 'Affordable pricing with no hidden fees. Scale up or down as needed'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Access',
      description: 'Access your tools from anywhere in the world with 99.9% uptime guarantee'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with regular backups and data encryption'
    }
  ]

  const pricing = [
    {
      plan: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 AI tool', 'Basic support', 'Standard features', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['3 AI tools', 'Priority support', 'Advanced features', 'Phone & email support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['All AI tools', '24/7 support', 'Custom features', 'Dedicated account manager'],
      popular: false
    }
  ];
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, client management, and payment tracking.',
      features: [
        'AI template suggestions',
        'Client management',
        'Payment tracking',
        'Tax calculations',
        'Multi-language support',
        'PDF generation'
      ],
      pricing: '$18/month',
      popular: true,
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor visit scheduling',
        'Health data export'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking',
        'Meeting optimization',
        'Calendar analytics',
        'Integration with tools',
        'Smart notifications'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. AI-powered tools for content creation, analytics, email management, and more." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management" />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS tools including AI analytics, chatbot builder, content generator, and lead generation. Boost your business with our specialized solutions." />
        <meta name="keywords" content="micro SaaS, AI tools, analytics dashboard, chatbot builder, content generator, lead generation, business automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Tools
            </h1>
            </p>
          </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized micro SaaS solutions designed to solve specific business challenges with AI-powered efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our specialized micro SaaS tools designed to solve specific business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Micro SaaS Services - Zion Tech Group"
        description="Powerful, affordable micro SaaS tools designed to streamline your business operations. AI-powered solutions for content generation, analytics, automation, and more."
        keywords="micro saas, saas tools, business automation, ai tools, content generation, analytics dashboard, customer support, cloud security"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 animate-pulse">
                🚀 Micro SaaS Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Powerful <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Micro SaaS</span> Tools
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline your business operations with our collection of AI-powered micro SaaS tools. 
              Affordable, scalable, and designed for modern businesses.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support with AI-powered responses, ticket management, and analytics.',
      features: [
        'AI-powered responses',
        'Ticket management system',
        'Customer analytics',
        'Multi-channel support',
        'Knowledge base integration',
        'Performance metrics'
      ],
      pricing: '$39/month',
      users: 'Up to 25 users',
      link: '/ai-customer-support-bot',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      title: 'AI Website Builder',
      description: 'AI-powered website creation with smart templates, content generation, and SEO optimization.',
      features: [
        'AI-generated templates',
        'Content generation',
        'SEO optimization',
        'Mobile responsiveness',
        'Analytics integration',
        'E-commerce features'
      ],
      pricing: '$35/month',
      users: 'Up to 10 websites',
      link: '/ai-website-builder',
      popular: false
    }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive setup process and pre-configured templates.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and regular security audits.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: 'Mobile First',
      description: 'Access your tools anywhere with our responsive design and mobile apps.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Grow without limits with our cloud-based infrastructure that scales with your needs.'
    }
  ]

  const benefits = [
    'No long-term contracts',
    'Cancel anytime',
    '24/7 customer support',
    'Regular updates and new features',
    'API access for integrations',
    'White-label options available'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, SaaS applications, business tools, productivity software, AI tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused applications designed to solve specific business challenges. 
            Get the tools you need without the complexity of enterprise software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View AI Services
            </Link>
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS applications designed to solve specific business problems with AI-powered solutions." />
        <meta name="keywords" content="micro saas, ai applications, business tools, productivity software, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Specialized AI-powered applications designed to solve specific business problems with precision and efficiency.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each application is designed to solve a specific business challenge with AI-powered intelligence.
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
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions that deliver maximum value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                </Link>
              </div>
            ))}
        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span> Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of micro SaaS tools designed to enhance your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {service.price}
                        <span className="text-lg text-gray-400">/{service.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Try Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400 text-purple-400 py-3 px-6 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">All our tools leverage cutting-edge AI to provide intelligent automation and insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and data protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows in minutes.</p>
            </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Business with Micro SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses already using our micro SaaS tools to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our micro SaaS solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Choose from our micro SaaS tools or contact us for a custom solution tailored to your business needs
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Request Demo
                    <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using our micro SaaS applications today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>

      <Footer />
        </section>
      </main>
      
      <Footer />
    </div>
  );
export default MicroSaasServicesPage;
export default MicroSaasServicesPage;
export default MicroSAASServicesPage;
        </section>
      </main>
    </div>
  )
}
    </div>
  );
};

export default MicroSAASServicesPage;
