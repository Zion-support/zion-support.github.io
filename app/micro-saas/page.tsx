import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Settings, ArrowRight, CheckCircle, Zap, Shield, Globe, BarChart3 } from 'lucide-react'

<<<<<<< HEAD
const MicroSaasPage: React.FC = () => {
  const serviceName = 'micro-saas'
  const title = 'Micro Saas'

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Core Feature 1',
      description: 'Essential functionality for your business needs'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Core Feature 2', 
      description: 'Reliable and secure solution for your operations'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Core Feature 3',
      description: 'Global reach and scalability for your business'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Core Feature 4',
      description: 'Analytics and insights to drive growth'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{title} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta name="description" content={`Powerful ${title.toLowerCase()} micro SaaS solution for modern businesses.`} />
        <link rel="canonical" href={`https://ziontechgroup.com/micro-saas/${serviceName}`} />
      </Helmet>
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            <span>{title}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Solution</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed with {title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our {title.toLowerCase()} solution today and transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MicroSaasPage
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, Cloud, MessageSquare, Share2, DollarSign, Calendar, Headphones, Package, FileText, Target, Clock, Shield, BarChart3, Mail, Search } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  benefits: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'ai-content-writer-pro',
      icon: FileText,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy.',
      features: ['GPT-4 Integration', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Content Templates', 'Plagiarism Check'],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Content Creation',
      link: '/micro-saas/ai-content-writer-pro',
      benefits: ['Save 10+ hours/week', 'Increase content output by 300%', 'Improve SEO rankings', 'Maintain consistent brand voice']
    },
    {
      id: 'analytics-dashboard-pro',
      icon: BarChart3,
      title: 'Analytics Dashboard Pro',
      description: 'Comprehensive business analytics platform with real-time insights and customizable dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Automated Reports', 'API Integration', 'Mobile App'],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: '/micro-saas/analytics-dashboard',
      benefits: ['Make data-driven decisions', 'Save 5+ hours on reporting', 'Identify growth opportunities', 'Track KPIs in real-time']
    },
    {
      id: 'email-marketing-automation',
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with advanced automation, segmentation, and personalization features.',
      features: ['Email Automation', 'A/B Testing', 'Advanced Segmentation', 'Personalization', 'Analytics', 'CRM Integration'],
      price: '$39/month',
      users: 'Up to 15,000 contacts',
      popular: false,
      category: 'Marketing',
      link: '/micro-saas/email-marketing',
      benefits: ['Increase open rates by 40%', 'Automate customer journeys', 'Personalize at scale', 'Track campaign performance']
    },
    {
      id: 'crm-lite',
      icon: Users,
      title: 'CRM Lite',
      description: 'Lightweight customer relationship management system perfect for small businesses and startups.',
      features: ['Contact Management', 'Lead Tracking', 'Deal Pipeline', 'Task Management', 'Email Integration', 'Mobile Access'],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'CRM',
      link: '/micro-saas/crm-lite',
      benefits: ['Organize customer data', 'Track sales pipeline', 'Improve customer relationships', 'Increase sales efficiency']
    },
    {
      id: 'social-media-manager',
      icon: Share2,
      title: 'Social Media Manager',
      description: 'All-in-one social media management tool for scheduling, monitoring, and analyzing social media performance.',
      features: ['Multi-platform Posting', 'Content Calendar', 'Hashtag Research', 'Engagement Analytics', 'Team Collaboration', 'Auto-scheduling'],
      price: '$25/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Social Media',
      link: '/micro-saas/social-manager',
      benefits: ['Save 8+ hours/week', 'Increase engagement by 50%', 'Maintain consistent posting', 'Track social ROI']
    },
    {
      id: 'expense-tracker-pro',
      icon: DollarSign,
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking and financial management tool with receipt scanning and categorization.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Expense Reports', 'Budget Tracking', 'Tax Preparation', 'Multi-currency'],
      price: '$15/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Finance',
      link: '/micro-saas/expense-tracker',
      benefits: ['Save 3+ hours on bookkeeping', 'Never lose receipts', 'Prepare taxes easily', 'Track spending patterns']
    },
    {
      id: 'project-manager-lite',
      icon: Target,
      title: 'Project Manager Lite',
      description: 'Simple yet powerful project management tool for teams to collaborate and track progress.',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'File Sharing', 'Time Tracking', 'Gantt Charts'],
      price: '$22/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Project Management',
      link: '/micro-saas/project-manager',
      benefits: ['Improve team productivity', 'Track project progress', 'Meet deadlines consistently', 'Enhance collaboration']
    },
    {
      id: 'customer-support-bot',
      icon: Headphones,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that provides 24/7 customer support with natural language processing.',
      features: ['AI Chatbot', 'Multi-language Support', 'Knowledge Base', 'Live Chat Handoff', 'Analytics', 'Customization'],
      price: '$35/month',
      users: 'Unlimited',
      popular: true,
      category: 'Customer Support',
      link: '/micro-saas/support-bot',
      benefits: ['Provide 24/7 support', 'Reduce support costs by 60%', 'Improve response time', 'Scale customer service']
    },
    {
      id: 'inventory-manager',
      icon: Package,
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management system with demand forecasting and automated reordering.',
      features: ['Inventory Tracking', 'Demand Forecasting', 'Auto-reordering', 'Barcode Scanning', 'Multi-location', 'Analytics'],
      price: '$45/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Inventory',
      link: '/micro-saas/inventory-management',
      benefits: ['Reduce stockouts by 70%', 'Optimize inventory levels', 'Save on storage costs', 'Improve cash flow']
    },
    {
      id: 'document-processor',
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Intelligent document processing tool that extracts data, classifies documents, and automates workflows.',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'API Integration', 'Batch Processing'],
      price: '$55/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Document Management',
      link: '/micro-saas/document-processor',
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', 'Reduce errors by 95%', 'Automate workflows']
    },
    {
      id: 'lead-scoring-engine',
      icon: Target,
      title: 'AI Lead Scoring Engine',
      description: 'Advanced lead scoring system that uses machine learning to identify and prioritize high-value prospects.',
      features: ['ML Lead Scoring', 'Behavioral Tracking', 'Lead Prioritization', 'CRM Integration', 'Custom Models', 'Real-time Updates'],
      price: '$40/month',
      users: 'Up to 7 users',
      popular: false,
      category: 'Lead Generation',
      link: '/micro-saas/lead-scoring',
      benefits: ['Increase conversion by 35%', 'Focus on high-value leads', 'Improve sales efficiency', 'Reduce lead response time']
    },
    {
      id: 'appointment-scheduler',
      icon: Calendar,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system that automates appointment booking and reduces no-shows.',
      features: ['Online Booking', 'Calendar Sync', 'Automated Reminders', 'Payment Integration', 'Multi-timezone', 'Analytics'],
      price: '$18/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Scheduling',
      link: '/micro-saas/appointment-scheduler',
      benefits: ['Reduce no-shows by 50%', 'Save 4+ hours/week', 'Improve customer experience', 'Automate reminders']
    },
    {
      id: 'seo-optimizer-pro',
      icon: Search,
      title: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO tool that analyzes websites and provides actionable optimization recommendations.',
      features: ['Site Analysis', 'Keyword Research', 'Competitor Analysis', 'Content Optimization', 'Rank Tracking', 'Reports'],
      price: '$32/month',
      users: 'Up to 3 websites',
      popular: false,
      category: 'Marketing',
      link: '/micro-saas/seo-optimizer',
      benefits: ['Improve search rankings', 'Increase organic traffic', 'Identify optimization opportunities', 'Track SEO progress']
    },
    {
      id: 'chat-analytics',
      icon: MessageSquare,
      title: 'Chat Analytics Pro',
      description: 'Advanced analytics platform for chat and messaging platforms with sentiment analysis and insights.',
      features: ['Sentiment Analysis', 'Conversation Analytics', 'Performance Metrics', 'Custom Dashboards', 'Real-time Monitoring', 'Export Reports'],
      price: '$28/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Analytics',
      link: '/micro-saas/chat-analytics',
      benefits: ['Understand customer sentiment', 'Improve response quality', 'Track team performance', 'Optimize chat strategies']
    },
    {
      id: 'content-generator',
      icon: FileText,
      title: 'AI Content Generator',
      description: 'Versatile content generation tool that creates various types of content for different platforms and purposes.',
      features: ['Multi-format Support', 'Template Library', 'Brand Voice Training', 'Content Planning', 'Collaboration Tools', 'Version Control'],
      price: '$24/month',
      users: 'Up to 4 users',
      popular: false,
      category: 'Content Creation',
      link: '/micro-saas/content-generator',
      benefits: ['Generate content 5x faster', 'Maintain brand consistency', 'Create diverse content types', 'Collaborate effectively']
    }
  ];

  const categories = ['All', 'Content Creation', 'Analytics', 'Marketing', 'CRM', 'Social Media', 'Finance', 'Project Management', 'Customer Support', 'Inventory', 'Document Management', 'Lead Generation', 'Scheduling'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and pre-built templates.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Enterprise-grade features at startup-friendly prices with flexible payment options.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee and regular backups.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support from our team of experts to help you succeed.'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed for small to medium businesses. Analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, CRM, security, backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  {product.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                    </div>
                  </div>

                  <Link 
                    to={product.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
