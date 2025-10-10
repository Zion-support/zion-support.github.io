'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  Brain,
  Cloud,
  BarChart3,
  Smartphone,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates, SEO optimization, and multi-language support',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Plagiarism Checker', 'Social Media Integration'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'AI & ML Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator',
      trial: '14-day free trial'
    },
    {
      icon: Brain,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required',
      features: ['Drag & Drop Builder', 'Multi-channel Support', 'Analytics Dashboard', 'Custom Integrations', 'Voice Recognition', '24/7 Availability'],
      price: '$79/month',
      users: 'Unlimited users',
      category: 'AI & ML Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      trial: '30-day free trial'
    },
    {
      icon: Brain,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email campaigns with personalization, A/B testing, and advanced analytics',
      features: ['Smart Segmentation', 'A/B Testing', 'Send Time Optimization', 'Subject Line AI', 'Open Rate Prediction', 'Unsubscribe Management'],
      price: '$99/month',
      users: 'Up to 10,000 contacts',
      category: 'AI & ML Tools',
      link: 'https://ziontechgroup.com/ai-email-marketing',
      trial: '14-day free trial'
    },
    {
      icon: Brain,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization', 'Mobile App', 'API Access'],
      price: '$149/month',
      users: 'Up to 25 users',
      category: 'AI & ML Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics',
      trial: '21-day free trial'
    },
    {
      icon: Brain,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization with AI insights',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO Audit', 'Local SEO Tools'],
      price: '$89/month',
      users: 'Up to 5 websites',
      category: 'AI & ML Tools',
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      trial: '14-day free trial'
    },
    {
      icon: Brain,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement, and analytics across all platforms',
      features: ['Multi-platform Posting', 'Content Calendar', 'Hashtag Optimization', 'Engagement Analytics', 'Influencer Discovery', 'Crisis Management'],
      price: '$119/month',
      users: 'Up to 10 accounts',
      category: 'AI & ML Tools',
      link: 'https://ziontechgroup.com/ai-social-manager',
      trial: '14-day free trial'
    },

    // Business Productivity Tools
    {
      icon: BarChart3,
      title: 'Smart CRM Pro',
      description: 'AI-powered customer relationship management with lead scoring and sales forecasting',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Email Integration', 'Mobile App', 'Custom Fields'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'Business Tools',
      popular: true,
      link: 'https://ziontechgroup.com/smart-crm',
      trial: '30-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Project Management AI',
      description: 'Intelligent project management with resource optimization and deadline prediction',
      features: ['Task Automation', 'Resource Allocation', 'Deadline Prediction', 'Team Collaboration', 'Progress Tracking', 'Risk Assessment'],
      price: '$129/month',
      users: 'Up to 100 users',
      category: 'Business Tools',
      link: 'https://ziontechgroup.com/project-management-ai',
      trial: '21-day free trial'
    },
    {
      icon: BarChart3,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency Support', 'Recurring Billing', 'Financial Reports'],
      price: '$59/month',
      users: 'Unlimited invoices',
      category: 'Business Tools',
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Expense Tracker AI',
      description: 'Smart expense management with receipt scanning and budget insights',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Multi-currency', 'Team Management'],
      price: '$39/month',
      users: 'Up to 20 users',
      category: 'Business Tools',
      link: 'https://ziontechgroup.com/expense-tracker-ai',
      trial: '14-day free trial'
    },
    {
      icon: BarChart3,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with productivity insights and automated reporting',
      features: ['Automatic Time Tracking', 'Productivity Analytics', 'Project Billing', 'Team Reports', 'Idle Detection', 'Calendar Integration'],
      price: '$49/month',
      users: 'Up to 50 users',
      category: 'Business Tools',
      link: 'https://ziontechgroup.com/ai-time-tracker',
      trial: '14-day free trial'
    },

    // Marketing & Sales Tools
    {
      icon: Globe,
      title: 'Landing Page Builder AI',
      description: 'Create high-converting landing pages with AI optimization and A/B testing',
      features: ['Drag & Drop Builder', 'AI Optimization', 'A/B Testing', 'Mobile Responsive', 'Analytics Integration', 'Lead Capture Forms'],
      price: '$79/month',
      users: 'Up to 20 pages',
      category: 'Marketing Tools',
      popular: true,
      link: 'https://ziontechgroup.com/landing-page-builder',
      trial: '14-day free trial'
    },
    {
      icon: Globe,
      title: 'AI Ad Campaign Manager',
      description: 'Automated ad campaign management across Google, Facebook, and LinkedIn',
      features: ['Multi-platform Management', 'Budget Optimization', 'Audience Targeting', 'Creative Testing', 'Performance Analytics', 'ROI Tracking'],
      price: '$199/month',
      users: 'Up to 10 campaigns',
      category: 'Marketing Tools',
      link: 'https://ziontechgroup.com/ai-ad-manager',
      trial: '21-day free trial'
    },
    {
      icon: Globe,
      title: 'Lead Generation AI',
      description: 'AI-powered lead generation with prospecting and automated follow-ups',
      features: ['Lead Scoring', 'Email Sequences', 'LinkedIn Automation', 'Data Enrichment', 'CRM Integration', 'Performance Tracking'],
      price: '$149/month',
      users: 'Up to 5,000 leads/month',
      category: 'Marketing Tools',
      link: 'https://ziontechgroup.com/lead-generation-ai',
      trial: '14-day free trial'
    },
    {
      icon: Globe,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI assistance',
      features: ['Logo Generator', 'Banner Creator', 'Social Media Graphics', 'Brand Kit', 'Template Library', 'Export Options'],
      price: '$69/month',
      users: 'Up to 3 users',
      category: 'Marketing Tools',
      link: 'https://ziontechgroup.com/ai-design-studio',
      trial: '14-day free trial'
    },

    // Developer Tools
    {
      icon: Database,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple languages',
      features: ['Code Completion', 'Bug Detection', 'Code Review', 'Documentation Generation', 'Refactoring Suggestions', 'Multi-language Support'],
      price: '$99/month',
      users: 'Up to 10 developers',
      category: 'Developer Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-assistant',
      trial: '30-day free trial'
    },
    {
      icon: Database,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance and automated documentation',
      features: ['Visual API Builder', 'Auto Documentation', 'Testing Tools', 'Rate Limiting', 'Authentication', 'Monitoring'],
      price: '$149/month',
      users: 'Up to 5 APIs',
      category: 'Developer Tools',
      link: 'https://ziontechgroup.com/api-builder-pro',
      trial: '21-day free trial'
    },
    {
      icon: Database,
      title: 'Database Optimizer AI',
      description: 'AI-powered database performance optimization and query analysis',
      features: ['Query Optimization', 'Performance Monitoring', 'Index Recommendations', 'Slow Query Detection', 'Capacity Planning', 'Automated Tuning'],
      price: '$199/month',
      users: 'Up to 10 databases',
      category: 'Developer Tools',
      link: 'https://ziontechgroup.com/database-optimizer',
      trial: '14-day free trial'
    },
    {
      icon: Database,
      title: 'Bug Tracker AI',
      description: 'Advanced bug tracking with AI-powered issue detection and resolution suggestions',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs', 'Custom Workflows'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Developer Tools',
      link: 'https://ziontechgroup.com/bug-tracker-ai',
      trial: '14-day free trial'
    },

    // Security & Compliance
    {
      icon: Shield,
      title: 'Security Scanner AI',
      description: 'Automated security scanning and vulnerability assessment for web applications',
      features: ['Vulnerability Scanning', 'OWASP Testing', 'Penetration Testing', 'Compliance Reports', 'Threat Intelligence', 'Remediation Guidance'],
      price: '$299/month',
      users: 'Up to 5 applications',
      category: 'Security Tools',
      popular: true,
      link: 'https://ziontechgroup.com/security-scanner-ai',
      trial: '14-day free trial'
    },
    {
      icon: Shield,
      title: 'GDPR Compliance Manager',
      description: 'Automated GDPR compliance monitoring and data protection management',
      features: ['Data Mapping', 'Consent Management', 'Privacy Impact Assessment', 'Breach Notification', 'Audit Trails', 'Compliance Reporting'],
      price: '$199/month',
      users: 'Up to 1,000 records',
      category: 'Security Tools',
      link: 'https://ziontechgroup.com/gdpr-compliance-manager',
      trial: '21-day free trial'
    },
    {
      icon: Shield,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with AI-powered security recommendations',
      features: ['Password Generation', 'Security Scoring', 'Breach Monitoring', 'Team Sharing', 'SSO Integration', 'Audit Logs'],
      price: '$49/month',
      users: 'Up to 50 users',
      category: 'Security Tools',
      link: 'https://ziontechgroup.com/password-manager-pro',
      trial: '30-day free trial'
    },

    // Cloud & Infrastructure
    {
      icon: Cloud,
      title: 'Cloud Cost Optimizer',
      description: 'AI-powered cloud resource optimization and cost management',
      features: ['Resource Optimization', 'Cost Forecasting', 'Right-sizing Recommendations', 'Reserved Instance Planning', 'Multi-cloud Support', 'Automated Scaling'],
      price: '$399/month',
      users: 'Unlimited resources',
      category: 'Cloud Tools',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      trial: '14-day free trial'
    },
    {
      icon: Cloud,
      title: 'Server Monitoring AI',
      description: 'Intelligent server monitoring with predictive maintenance and alerting',
      features: ['Real-time Monitoring', 'Predictive Alerts', 'Performance Analytics', 'Capacity Planning', 'Automated Scaling', 'Incident Management'],
      price: '$149/month',
      users: 'Up to 50 servers',
      category: 'Cloud Tools',
      link: 'https://ziontechgroup.com/server-monitoring-ai',
      trial: '21-day free trial'
    },
    {
      icon: Cloud,
      title: 'Backup Manager Pro',
      description: 'Automated backup management with AI-powered scheduling and recovery',
      features: ['Automated Backups', 'Incremental Backups', 'Disaster Recovery', 'Compliance Support', 'Multi-location Storage', 'Recovery Testing'],
      price: '$99/month',
      users: 'Up to 1TB storage',
      category: 'Cloud Tools',
      link: 'https://ziontechgroup.com/backup-manager-pro',
      trial: '14-day free trial'
    },

    // E-commerce Tools
    {
      icon: Smartphone,
      title: 'E-commerce AI Optimizer',
      description: 'AI-powered e-commerce optimization for conversion rate and sales growth',
      features: ['Conversion Optimization', 'Price Optimization', 'Inventory Management', 'Customer Segmentation', 'Recommendation Engine', 'Analytics Dashboard'],
      price: '$249/month',
      users: 'Up to 10,000 products',
      category: 'E-commerce Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ecommerce-ai-optimizer',
      trial: '21-day free trial'
    },
    {
      icon: Smartphone,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and automated reordering',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management', 'Multi-location Support', 'Analytics Reports'],
      price: '$179/month',
      users: 'Up to 5,000 SKUs',
      category: 'E-commerce Tools',
      link: 'https://ziontechgroup.com/ai-inventory-manager',
      trial: '14-day free trial'
    },
    {
      icon: Smartphone,
      title: 'Customer Service AI',
      description: 'AI-powered customer service with chatbots and ticket management',
      features: ['AI Chatbots', 'Ticket Management', 'Knowledge Base', 'Sentiment Analysis', 'Multi-channel Support', 'Performance Analytics'],
      price: '$129/month',
      users: 'Up to 1,000 tickets/month',
      category: 'E-commerce Tools',
      link: 'https://ziontechgroup.com/customer-service-ai',
      trial: '14-day free trial'
    },

    // Healthcare & Finance
    {
      icon: BarChart3,
      title: 'Healthcare AI Assistant',
      description: 'HIPAA-compliant AI solutions for medical data analysis and patient care',
      features: ['Medical Data Analysis', 'Patient Risk Assessment', 'Treatment Recommendations', 'HIPAA Compliance', 'Integration APIs', 'Audit Trails'],
      price: '$499/month',
      users: 'Up to 100 patients',
      category: 'Healthcare Tools',
      link: 'https://ziontechgroup.com/healthcare-ai-assistant',
      trial: '30-day free trial'
    },
    {
      icon: BarChart3,
      title: 'Financial AI Advisor',
      description: 'AI-powered financial analysis and investment recommendations',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Market Analysis', 'Compliance Reporting', 'Client Portal'],
      price: '$399/month',
      users: 'Up to 50 clients',
      category: 'Finance Tools',
      link: 'https://ziontechgroup.com/financial-ai-advisor',
      trial: '21-day free trial'
    },

    // Education & Training
    {
      icon: Brain,
      title: 'AI Learning Platform',
      description: 'Personalized learning platform with AI-powered content and progress tracking',
      features: ['Personalized Learning', 'Progress Tracking', 'Content Generation', 'Assessment Tools', 'Gamification', 'Analytics Dashboard'],
      price: '$89/month',
      users: 'Up to 100 students',
      category: 'Education Tools',
      link: 'https://ziontechgroup.com/ai-learning-platform',
      trial: '14-day free trial'
    },
    {
      icon: Brain,
      title: 'Virtual Training Assistant',
      description: 'AI-powered virtual training sessions with interactive simulations',
      features: ['Virtual Simulations', 'Interactive Training', 'Progress Monitoring', 'Certification Management', 'Multi-language Support', 'Mobile Access'],
      price: '$159/month',
      users: 'Up to 200 trainees',
      category: 'Education Tools',
      link: 'https://ziontechgroup.com/virtual-training-assistant',
      trial: '21-day free trial'
=======
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}
=======
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-a851

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
<<<<<<< HEAD
      id: '1',
      icon: '📊',
=======
      icon: BarChart3,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
<<<<<<< HEAD
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
=======
      popular: false
    },
    {
      icon: Users,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
<<<<<<< HEAD
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
=======
      popular: true
    },
    {
      icon: Shield,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
<<<<<<< HEAD
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
=======
      popular: false
    },
    {
      icon: Cloud,
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
<<<<<<< HEAD
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
=======
      popular: false
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
>>>>>>> origin/main
    }
  ];

  const categories = [
    'All',
    'AI & ML Tools',
    'Business Tools',
    'Marketing Tools',
    'Developer Tools',
    'Security Tools',
    'Cloud Tools',
    'E-commerce Tools',
    'Healthcare Tools',
    'Finance Tools',
    'Education Tools'
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

<<<<<<< HEAD
  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

=======
<<<<<<< HEAD
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
=======
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
    }
  ];
>>>>>>> origin/main

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 50+ innovative micro SAAS solutions powered by AI. From content generation to analytics, boost your business with our cutting-edge tools." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              50+ AI-Powered Business Tools
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our innovative micro SAAS solutions. From AI content generation to advanced analytics, 
              we have the tools you need to succeed in the digital age.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cyber-card">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white neon-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Micro SAAS Tools' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative cyber-card hologram-card energy-pulse">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium neon-glow">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2 neon-text">{product.price}</div>
                    <div className="text-sm text-gray-300 mb-1">{product.users}</div>
                    <div className="text-sm text-green-400 font-medium">{product.trial}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 neon-glow"
                    >
                      Try Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 cyber-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p className="text-white font-semibold">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col justify-center space-y-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 neon-glow"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </Link>
                  <Link
                    to="/pricing"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    View All Plans
                  </Link>
                  <Link
                    to="/demo"
                    className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 text-center"
                  >
                    Schedule Demo
                  </Link>
                </div>
=======
<<<<<<< HEAD
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
=======
        <title>Micro SaaS Solutions - Zion Tech Group | Focused AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. Quick deployment, scalable, and cost-effective." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
=======
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
=======
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
                        Most Popular
                      </div>
                    </div>
                  )}
<<<<<<< HEAD

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
=======
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
=======
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-a851

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;