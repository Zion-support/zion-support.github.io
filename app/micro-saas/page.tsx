'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Rocket, Brain, Mail, Calendar, FileText, Search, Smartphone, Lock, Target, Globe, Database, Settings, Code, DollarSign, Clock, Award, Headphones } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  trialDays: number;
  setupTime: string;
  integrations: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: [
        'Real-time dashboards with 50+ chart types',
        'AI-powered predictive analytics',
        'Custom report builder',
        'Mobile app with offline sync',
        'API integration with 100+ tools',
        'Automated insights and alerts',
        'White-label customization'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify']
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: [
        'AI lead scoring and qualification',
        'Automated email sequences',
        'Sales forecasting with 95% accuracy',
        'Integration with 200+ tools',
        'Custom fields and workflows',
        'Advanced reporting suite',
        'Mobile-first design'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM',
      trialDays: 21,
      setupTime: '10 minutes',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zoom', 'Calendly']
    },
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Compliance reporting (SOC2, GDPR)',
        '24/7 security monitoring',
        'Automated incident response',
        'Security awareness training',
        'Dark web monitoring'
      ],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security',
      trialDays: 7,
      setupTime: '15 minutes',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Office 365', 'Slack']
    },
    {
      id: '4',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: [
        'Multi-cloud resource optimization',
        'Real-time cost tracking',
        'Auto-scaling policies',
        'Backup and disaster recovery',
        'Performance monitoring',
        'Cost forecasting',
        'Compliance management'
      ],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      trialDays: 14,
      setupTime: '20 minutes',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      id: '5',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: [
        'AI-powered email templates',
        'Advanced A/B testing',
        'Behavioral segmentation',
        'Detailed analytics and reporting',
        'Integration with 500+ tools',
        'Automated drip campaigns',
        'Deliverability optimization'
      ],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: true,
      category: 'Marketing',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: ['Shopify', 'WooCommerce', 'Mailchimp', 'Constant Contact', 'ActiveCampaign']
    },
    {
      id: '6',
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: 'Performance Optimizer',
      description: 'Website and application performance optimization with AI-powered recommendations',
      features: [
        'Real-time performance monitoring',
        'AI-powered optimization suggestions',
        'CDN management',
        'Image and asset optimization',
        'Core Web Vitals tracking',
        'Automated performance fixes',
        'Competitor analysis'
      ],
      price: '$49/month',
      users: 'Up to 12 websites',
      popular: false,
      category: 'Performance',
      trialDays: 7,
      setupTime: '2 minutes',
      integrations: ['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Webflow']
    },
    {
      id: '7',
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, design, and video generation',
      features: [
        'AI writing for 50+ content types',
        'Image generation and editing',
        'Video creation and editing',
        'Social media content calendar',
        'SEO optimization tools',
        'Brand voice training',
        'Multi-language support'
      ],
      price: '$89/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Content',
      trialDays: 14,
      setupTime: '3 minutes',
      integrations: ['WordPress', 'Canva', 'Hootsuite', 'Buffer', 'Later']
    },
    {
      id: '8',
      icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation',
      features: [
        'No-code chatbot builder',
        'Multi-language support',
        'Voice and text capabilities',
        'Integration with 100+ platforms',
        'Advanced analytics',
        'Human handoff capabilities',
        'Custom training data'
      ],
      price: '$59/month',
      users: 'Up to 5 chatbots',
      popular: false,
      category: 'Support',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: ['Facebook', 'WhatsApp', 'Slack', 'Discord', 'Telegram']
    },
    {
      id: '9',
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      title: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO toolkit with AI-powered optimization and competitor analysis',
      features: [
        'AI-powered keyword research',
        'On-page optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Rank tracking for 1,000+ keywords',
        'Content optimization',
        'Local SEO tools'
      ],
      price: '$69/month',
      users: 'Up to 10 websites',
      popular: false,
      category: 'SEO',
      trialDays: 7,
      setupTime: '5 minutes',
      integrations: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Moz']
    },
    {
      id: '10',
      icon: <Smartphone className="w-8 h-8 text-teal-400" />,
      title: 'Mobile App Builder',
      description: 'Create native mobile apps for iOS and Android without coding',
      features: [
        'Drag-and-drop app builder',
        'Native iOS and Android apps',
        'Push notifications',
        'Offline functionality',
        'App store publishing',
        'Analytics and crash reporting',
        'Custom branding'
      ],
      price: '$129/month',
      users: 'Up to 3 apps',
      popular: false,
      category: 'Mobile',
      trialDays: 14,
      setupTime: '30 minutes',
      integrations: ['Firebase', 'Stripe', 'PayPal', 'Google Maps', 'Facebook SDK']
    },
    {
      id: '11',
      icon: <Calendar className="w-8 h-8 text-rose-400" />,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling system with automated meeting optimization',
      features: [
        'AI-powered meeting scheduling',
        'Time zone optimization',
        'Calendar integration',
        'Automated follow-ups',
        'Meeting analytics',
        'Custom booking pages',
        'Team scheduling'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity',
      trialDays: 14,
      setupTime: '2 minutes',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Slack']
    },
    {
      id: '12',
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      title: 'Document AI Processor',
      description: 'AI-powered document processing, analysis, and automation',
      features: [
        'OCR and text extraction',
        'Document classification',
        'Automated data entry',
        'Contract analysis',
        'Invoice processing',
        'Compliance checking',
        'Multi-format support'
      ],
      price: '$79/month',
      users: 'Up to 1,000 documents/month',
      popular: false,
      category: 'Automation',
      trialDays: 7,
      setupTime: '5 minutes',
      integrations: ['Dropbox', 'Google Drive', 'OneDrive', 'Box', 'SharePoint']
    },
    {
      id: '13',
      icon: <Target className="w-8 h-8 text-violet-400" />,
      title: 'Lead Generation Engine',
      description: 'AI-powered lead generation and qualification system',
      features: [
        'Automated lead discovery',
        'Contact information enrichment',
        'Lead scoring and qualification',
        'Email sequence automation',
        'CRM integration',
        'Lead source tracking',
        'ROI analytics'
      ],
      price: '$149/month',
      users: 'Up to 5,000 leads/month',
      popular: true,
      category: 'Sales',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Monday.com']
    },
    {
      id: '14',
      icon: <DollarSign className="w-8 h-8 text-lime-400" />,
      title: 'Invoice Generator AI',
      description: 'Automated invoice generation and payment processing',
      features: [
        'AI-powered invoice creation',
        'Automated payment reminders',
        'Multi-currency support',
        'Tax calculation',
        'Payment gateway integration',
        'Expense tracking',
        'Financial reporting'
      ],
      price: '$29/month',
      users: 'Up to 100 invoices/month',
      popular: false,
      category: 'Finance',
      trialDays: 14,
      setupTime: '3 minutes',
      integrations: ['Stripe', 'PayPal', 'QuickBooks', 'Xero', 'FreshBooks']
    },
    {
      id: '15',
      icon: <Globe className="w-8 h-8 text-sky-400" />,
      title: 'Website Builder AI',
      description: 'AI-powered website builder with advanced customization',
      features: [
        'AI website generator',
        'Drag-and-drop editor',
        'Mobile-responsive design',
        'SEO optimization',
        'E-commerce capabilities',
        'Analytics integration',
        'Custom domain support'
      ],
      price: '$59/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'Web Design',
      trialDays: 14,
      setupTime: '15 minutes',
      integrations: ['Google Analytics', 'Google Tag Manager', 'Facebook Pixel', 'Hotjar', 'Intercom']
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Performance', 'Content', 'Support', 'SEO', 'Mobile', 'Productivity', 'Automation', 'Sales', 'Finance', 'Web Design'];

  const stats = [
    {
      icon: Users,
      value: '50,000+',
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
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  const benefits = [
    'Quick setup in minutes with pre-built templates',
    'Enterprise-grade security with 99.9% uptime',
    'Real-time collaboration and team management',
    'Advanced analytics and comprehensive reporting',
    'API integration with 500+ popular tools',
    'Mobile-first responsive design',
    'White-label customization options',
    'Dedicated customer success manager'
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of 50+ micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, marketing, and more. Start free trials today!" />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software, AI marketing, automation tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 neon-text">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful AI-powered solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Most Popular Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most loved micro SaaS products that are helping businesses grow every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative quantum-card p-8 border-2 border-purple-400 shadow-2xl shadow-purple-500/25 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white neon-text">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start {product.trialDays}-Day Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
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
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === selectedCategory
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white neon-glow'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">All Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of {microSaasProducts.length} specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card hologram-card p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white neon-text">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Free Trial:</span>
                      <span className="text-green-400 font-medium">{product.trialDays} days</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Setup Time:</span>
                      <span className="text-cyan-400 font-medium">{product.setupTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="cyber-card hologram-card p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Choose the perfect micro SaaS solution for your business needs and start seeing results today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MicroSaasPage;