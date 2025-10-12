<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  BarChart3, 
  Clock, 
  Shield, 
  Target,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  GitBranch,
  AlertCircle,
  Sparkles,
  Workflow,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function AiProjectManagementProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['Smart task prioritization', 'Resource allocation', 'Risk prediction', 'Timeline optimization']
    },
    {
      icon: <Workflow className="w-8 h-8 text-green-400" />,
      title: 'Automated Workflows',
      description: 'Streamline your processes with AI-driven workflow automation',
      benefits: ['Custom automation rules', 'Smart notifications', 'Auto-assignment', 'Progress tracking']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive project insights with real-time performance metrics',
      benefits: ['Performance dashboards', 'Predictive analytics', 'Team productivity', 'ROI tracking']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication tools',
      benefits: ['Smart messaging', 'Meeting optimization', 'Knowledge sharing', 'Conflict resolution']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance management',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'GDPR compliance']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Integration',
      description: 'Seamless integration with 100+ popular business tools',
      benefits: ['API integrations', 'Data synchronization', 'Custom connectors', 'Third-party apps']
    }
  ];

  const capabilities = [
    {
      category: 'Project Planning',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      items: [
        'AI-powered project scoping',
        'Intelligent timeline estimation',
        'Resource requirement analysis',
        'Risk assessment and mitigation',
        'Milestone optimization'
      ]
    },
    {
      category: 'Task Management',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      items: [
        'Smart task prioritization',
        'Automated task assignment',
        'Progress tracking',
        'Dependency management',
        'Deadline optimization'
      ]
    },
    {
      category: 'Team Management',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      items: [
        'Workload balancing',
        'Skill-based assignments',
        'Performance monitoring',
        'Team communication',
        'Collaboration tools'
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: <PieChart className="w-6 h-6 text-orange-400" />,
      items: [
        'Real-time dashboards',
        'Performance metrics',
        'Predictive analytics',
        'Custom reports',
        'Data visualization'
      ]
    },
    {
      category: 'Integration & Automation',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      items: [
        '100+ tool integrations',
        'Workflow automation',
        'API access',
        'Custom webhooks',
        'Third-party connectors'
      ]
    },
    {
      category: 'Mobile & Accessibility',
      icon: <Smartphone className="w-6 h-6 text-pink-400" />,
      items: [
        'Mobile applications',
        'Offline capabilities',
        'Cross-platform sync',
        'Accessibility features',
        'Multi-language support'
      ]
    }
  ];
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FolderKanban, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, Calendar, Clock } from 'lucide-react'
import Layout from '../layout'

export default function AIProjectManagementPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Task Optimization',
      description: 'Intelligent task prioritization and resource allocation based on project goals and team capacity'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Smart Team Management',
      description: 'AI-powered team matching, workload balancing, and collaboration optimization'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast project outcomes, identify risks, and suggest corrective actions proactively'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      title: 'Automated Workflows',
      description: 'Streamline project processes with intelligent automation and smart notifications'
    }
  ]

  const managementFeatures = [
    {
      category: 'Project Planning',
      items: ['AI Timeline Generation', 'Resource Allocation', 'Risk Assessment', 'Milestone Tracking', 'Budget Forecasting', 'Dependency Mapping']
    },
    {
      category: 'Task Management',
      items: ['Smart Task Assignment', 'Priority Optimization', 'Progress Tracking', 'Deadline Alerts', 'Subtask Automation', 'Status Updates']
    },
    {
      category: 'Team Collaboration',
      items: ['Real-time Communication', 'File Sharing', 'Comment System', 'Meeting Scheduler', 'Knowledge Base', 'Team Performance']
    },
    {
      category: 'Reporting & Analytics',
      items: ['Project Dashboards', 'Performance Metrics', 'Time Tracking', 'Budget Analysis', 'ROI Reports', 'Custom Reports']
    }
  ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2

  const pricingPlans = [
    {
      name: 'Starter',
<<<<<<< HEAD
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI features',
        'Standard integrations',
        'Email support',
        '5GB storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI features',
        'Premium integrations',
        'Priority support',
        '100GB storage',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true,
      cta: 'Get Started'
=======
      price: '$59',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 team members',
        'Basic AI features',
        'Project templates',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Integrations'
      ],
      popular: true
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
<<<<<<< HEAD
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI training',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'API access',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      role: 'Project Director',
      content: 'AI Project Management Pro has revolutionized how we handle complex projects. The AI predictions are incredibly accurate, helping us avoid delays and optimize resources.',
      rating: 5,
      avatar: 'SM',
      results: '40% faster project delivery'
    },
    {
      name: 'David Chen',
      company: 'InnovateLabs',
      role: 'CTO',
      content: 'The automation features have saved us countless hours. Our team productivity increased by 60% since implementing this platform.',
      rating: 5,
      avatar: 'DC',
      results: '60% productivity increase'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Global Dynamics',
      role: 'Operations Manager',
      content: 'The analytics and reporting capabilities are outstanding. We can now make data-driven decisions and predict project outcomes with confidence.',
      rating: 5,
      avatar: 'MR',
      results: '95% project success rate'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Projects Managed', icon: <Target className="w-6 h-6" /> },
    { number: '50,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '40%', label: 'Faster Delivery', icon: <Zap className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'Slack', icon: <MessageSquare className="w-6 h-6" />, category: 'Communication' },
    { name: 'Microsoft Teams', icon: <Users className="w-6 h-6" />, category: 'Communication' },
    { name: 'GitHub', icon: <GitBranch className="w-6 h-6" />, category: 'Development' },
    { name: 'Jira', icon: <Workflow className="w-6 h-6" />, category: 'Project Management' },
    { name: 'Trello', icon: <Target className="w-6 h-6" />, category: 'Project Management' },
    { name: 'Asana', icon: <CheckCircle className="w-6 h-6" />, category: 'Project Management' },
    { name: 'Google Workspace', icon: <Globe className="w-6 h-6" />, category: 'Productivity' },
    { name: 'Microsoft 365', icon: <Monitor className="w-6 h-6" />, category: 'Productivity' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group | Advanced Project Management Platform</title>
        <meta name="description" content="Transform your project management with AI Project Management Pro. Intelligent planning, automated workflows, and advanced analytics for teams of all sizes. Start your free trial today." />
        <meta name="keywords" content="AI project management, project management software, team collaboration, project planning, workflow automation, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Project Management Pro - Advanced Project Management Platform" />
        <meta property="og:description" content="Transform your project management with AI-powered planning, automated workflows, and advanced analytics. Start your free trial today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-project-management.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Project Management Pro - Advanced Project Management Platform" />
        <meta name="twitter:description" content="Transform your project management with AI-powered planning, automated workflows, and advanced analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-project-management.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Project Management Pro",
            "description": "Advanced AI-powered project management platform with intelligent planning, automated workflows, and comprehensive analytics.",
            "url": "https://ziontechgroup.com/ai-project-management-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "29",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Project Management{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your project management with AI-powered planning, automated workflows, 
            and advanced analytics. Deliver projects 40% faster with intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
=======
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'White-label solution',
        'Advanced reporting',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Software Development Co.',
      content: 'AI Project Management Pro increased our project delivery speed by 40% and reduced overhead by 30%.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency',
      content: 'The AI task optimization is incredible. Our team productivity has never been higher.',
      rating: 5
    },
    {
      name: 'Michael Davis',
      company: 'Construction Firm',
      content: 'Managing complex projects across multiple teams is now effortless. The predictive analytics are spot-on.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Project Management Pro - Intelligent Project Management | Zion Tech Group"
      description="Transform your project management with AI-powered optimization, smart team management, and predictive analytics. Increase productivity and project success rates. Start your free trial today."
      keywords="project management, AI project optimization, team management, project analytics, task management, project planning"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <FolderKanban className="w-4 h-4 mr-2" />
                AI-Powered Project Management
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Project Management Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your project management with AI-powered optimization, smart team management, 
                and predictive analytics. Increase productivity and project success rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Intelligent Project Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered features that transform how you manage projects and teams
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI Project Management Pro comes packed with advanced features to streamline 
              your project workflows and boost team productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
=======
        {/* Management Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Project Management Suite
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to plan, execute, and deliver successful projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                        {item}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Capabilities</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage projects from start to finish, 
              powered by artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {capability.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{capability.category}</h3>
                </div>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with 100+ popular business tools and platforms to streamline your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
=======
              ))}
            </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
          </div>
        </section>

        {/* Pricing Section */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your team and project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of teams who have transformed their project management with AI.
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your team size and project needs
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">"{testimonial.content}"</p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    Result: {testimonial.results}
=======
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-indigo-400/40 scale-105 shadow-2xl shadow-indigo-500/20' 
                    : 'border-indigo-500/20 hover:border-indigo-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Project Managers Worldwide
              </h2>
              <p className="text-gray-300">
                See how our AI Project Management Pro transforms project delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven project management. 
              Join thousands of teams already delivering projects 40% faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <Activity className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 support • ✓ Cancel anytime</p>
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Transform Your Project Management Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of teams using AI Project Management Pro to deliver successful projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </div>
  );
=======
    </Layout>
  )
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
}