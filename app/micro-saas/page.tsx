'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, TrendingUp, MessageSquare, Mail, Search, FileText, Settings, Globe, Smartphone, Calendar, CheckSquare } from 'lucide-react';

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
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Mobile app',
        'API integration'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: [
        'Lead management',
        'Email automation',
        'Sales forecasting',
        'Integration APIs',
        'Custom fields'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Compliance reporting',
        '24/7 monitoring',
        'Incident response'
      ],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: [
        'Resource optimization',
        'Cost tracking',
        'Auto-scaling',
        'Multi-cloud support',
        'Backup management'
      ],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: [
        'Email templates',
        'A/B testing',
        'Segmentation',
        'Analytics',
        'Integration tools'
      ],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      title: 'Performance Optimizer',
      description: 'Website and application performance optimization with AI-powered insights',
      features: [
        'Performance monitoring',
        'Speed optimization',
        'Resource optimization',
        'Performance reports',
        'Automated fixes'
      ],
      price: '$89/month',
      users: 'Up to 25 websites',
      popular: true,
      category: 'Performance'
    },
    {
      id: '7',
      icon: <Target className="w-8 h-8 text-pink-600" />,
      title: 'Lead Generation Pro',
      description: 'AI-powered lead generation and qualification system for sales teams',
      features: [
        'Automated lead scoring',
        'Behavioral tracking',
        'Lead prioritization',
        'Integration capabilities',
        'Custom scoring rules'
      ],
      price: '$129/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: '8',
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      title: 'Document Processor AI',
      description: 'Automated document processing and data extraction with machine learning',
      features: [
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Batch processing',
        'API integration'
      ],
      price: '$159/month',
      users: 'Up to 100 documents/day',
      popular: false,
      category: 'Automation'
    },
    {
      id: '9',
      icon: <Search className="w-8 h-8 text-yellow-600" />,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization for better search rankings',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking'
      ],
      price: '$69/month',
      users: 'Up to 10 websites',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '10',
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: 'Workflow Automation',
      description: 'No-code workflow automation platform for business processes',
      features: [
        'Drag-and-drop builder',
        'API integrations',
        'Conditional logic',
        'Task automation',
        'Team collaboration'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Automation'
    },
    {
      id: '11',
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      title: 'Website Builder AI',
      description: 'AI-powered website builder with intelligent design suggestions',
      features: [
        'AI design suggestions',
        'Responsive templates',
        'Content generation',
        'SEO optimization',
        'E-commerce integration'
      ],
      price: '$89/month',
      users: 'Unlimited websites',
      popular: true,
      category: 'Development'
    },
    {
      id: '12',
      icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
      title: 'Mobile App Builder',
      description: 'Create native mobile apps without coding using AI assistance',
      features: [
        'No-code development',
        'Native app generation',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      price: '$199/month',
      users: 'Up to 5 apps',
      popular: false,
      category: 'Development'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Performance', 'Sales', 'Automation', 'Development'];

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
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data encryption'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration and role-based access'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Advanced Analytics',
      description: 'Get insights into your business with comprehensive analytics and reporting'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
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
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {product.icon}
                    </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
