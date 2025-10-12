'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Calendar,
  CreditCard,
  Lock,
  Zap,
  Globe,
  Smartphone,
  Database,
  Settings,
  Target,
  Award,
  Clock,
  Sparkles,
  Brain,
  Cloud,
  Wifi
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics',
      price: '$99/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Custom workflows', 'Real-time analytics'],
      icon: Users,
      path: '/micro-saas/ai-crm',
      popular: true,
      category: 'Business Management',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Business intelligence platform with AI-powered insights, automated reporting, and data visualization',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time alerts', 'API integration'],
      icon: TrendingUp,
      path: '/micro-saas/analytics-dashboard',
      popular: true,
      category: 'Analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI prioritization, automated scheduling, and team collaboration',
      price: '$79/month',
      features: ['AI prioritization', 'Automated scheduling', 'Team collaboration', 'Progress tracking', 'Deadline alerts', 'Productivity insights'],
      icon: Target,
      path: '/micro-saas/ai-task-manager',
      popular: false,
      category: 'Productivity',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications with comprehensive coverage and reporting',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting', 'CI/CD integration', 'Visual regression testing'],
      icon: Cpu,
      path: '/micro-saas/ai-automated-testing',
      popular: false,
      category: 'Development',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI Content Management',
      description: 'AI-enhanced CMS with intelligent content optimization, SEO tools, and automated publishing',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'Workflow automation', 'Content suggestions'],
      icon: FileText,
      path: '/micro-saas/content-generator',
      popular: true,
      category: 'Content',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and advanced analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'Segmentation tools', 'Template library'],
      icon: Mail,
      path: '/micro-saas/email-marketing',
      popular: false,
      category: 'Marketing',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Social Media Manager',
      description: 'AI-powered social media management with content scheduling, engagement analytics, and hashtag optimization',
      price: '$89/month',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Influencer tracking', 'Trend analysis'],
      icon: MessageSquare,
      path: '/micro-saas/social-manager',
      popular: false,
      category: 'Social Media',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Expense Tracker',
      description: 'Smart expense management with receipt scanning, categorization, and financial insights',
      price: '$59/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking', 'Tax preparation', 'Multi-currency support'],
      icon: CreditCard,
      path: '/micro-saas/expense-tracker',
      popular: false,
      category: 'Finance',
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring',
      price: '$49/month',
      features: ['Secure storage', 'Password generation', 'Security recommendations', 'Breach monitoring', 'Team sharing', '2FA integration'],
      icon: Lock,
      path: '/micro-saas/ai-password-manager',
      popular: false,
      category: 'Security',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Appointment Scheduler',
      description: 'Intelligent scheduling system with automated reminders, calendar integration, and conflict resolution',
      price: '$69/month',
      features: ['Automated scheduling', 'Calendar integration', 'Reminder system', 'Conflict resolution', 'Payment processing', 'Multi-timezone support'],
      icon: Calendar,
      path: '/micro-saas/appointment-scheduler',
      popular: false,
      category: 'Scheduling',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'AI Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing and escalation management',
      price: '$119/month',
      features: ['Natural language processing', 'Escalation management', 'Knowledge base integration', 'Multi-language support', 'Analytics dashboard', 'Custom training'],
      icon: MessageSquare,
      path: '/micro-saas/support-bot',
      popular: true,
      category: 'Customer Support',
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'SEO Optimizer Pro',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking',
      price: '$99/month',
      features: ['Keyword research', 'Content analysis', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit', 'Link building tools'],
      icon: Globe,
      path: '/micro-saas/seo-optimizer',
      popular: false,
      category: 'SEO',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const categories = [
    { name: 'All', count: microSaasServices.length, active: true },
    { name: 'Business Management', count: microSaasServices.filter(s => s.category === 'Business Management').length, active: false },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length, active: false },
    { name: 'Development', count: microSaasServices.filter(s => s.category === 'Development').length, active: false },
    { name: 'Content', count: microSaasServices.filter(s => s.category === 'Content').length, active: false },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length, active: false },
    { name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length, active: false },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, active: false },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Scheduling', count: microSaasServices.filter(s => s.category === 'Scheduling').length, active: false },
    { name: 'Customer Support', count: microSaasServices.filter(s => s.category === 'Customer Support').length, active: false },
    { name: 'SEO', count: microSaasServices.filter(s => s.category === 'SEO').length, active: false }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Settings className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS services designed to solve specific business challenges with AI-powered solutions. From CRM to analytics, we have the tools you need." />
        <meta name="keywords" content="micro saas, business solutions, AI tools, productivity software, business management, analytics, automation" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SAAS solutions for modern businesses. Transform your operations with our specialized tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta name="twitter:description" content="AI-powered micro SAAS solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
                <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Specialized Business Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Micro SAAS{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                  Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our comprehensive collection of specialized micro SAAS services designed to solve specific business challenges with AI-powered solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 bg-gradient-to-r ${service.color}/20 rounded-lg mr-4`}>
                        <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                        <span className="text-sm text-gray-400">{service.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 lg:p-12 border border-purple-500/30">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions and start transforming your business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}