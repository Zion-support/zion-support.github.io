'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered business intelligence with predictive analytics and automated insights',
      features: [
        'Real-time AI analytics',
        'Predictive forecasting',
        'Custom AI models',
        'Automated reporting',
        'Multi-data source integration',
        'Advanced visualization'
      ],
      price: '$89/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete AI-powered customer service solution with advanced chatbot and human handoff',
      features: [
        'Advanced AI chatbot',
        'Sentiment analysis',
        'Multi-language support',
        'Human agent handoff',
        'Knowledge base integration',
        'Performance analytics'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'AI Security Monitor Pro',
      description: 'Next-generation AI-powered security monitoring with behavioral analysis and threat prediction',
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Compliance monitoring',
        'Security dashboard',
        'Threat intelligence'
      ],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Smart Cloud Backup AI',
      description: 'Intelligent cloud backup with AI-powered optimization and automated disaster recovery',
      features: [
        'AI-powered backup optimization',
        'Smart deduplication',
        'Automated disaster recovery',
        'Cross-platform sync',
        'Version control',
        'Encrypted storage'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'AI Performance Optimizer',
      description: 'AI-driven application performance monitoring with automated optimization recommendations',
      features: [
        'AI performance analysis',
        'Automated optimization',
        'Predictive scaling',
        'Error prediction',
        'Cost optimization',
        'Real-time alerts'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Advanced AI-powered workflow automation with machine learning and intelligent task management',
      features: [
        'AI workflow optimization',
        'Smart task scheduling',
        'Machine learning insights',
        'Custom AI models',
        'Integration capabilities',
        'Performance analytics'
      ],
      price: '$179/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📝',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI content creation tool with multi-format support and brand voice customization',
      features: [
        'Multi-format content generation',
        'Brand voice customization',
        'SEO optimization',
        'Plagiarism detection',
        'Content scheduling',
        'Performance tracking'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '8',
      icon: '📧',
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'Segmentation',
        'Performance analytics',
        'Deliverability optimization'
      ],
      price: '$119/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '9',
      icon: '💰',
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with AI-powered categorization and financial insights',
      features: [
        'AI expense categorization',
        'Receipt scanning',
        'Financial insights',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '10',
      icon: '📅',
      title: 'AI Calendar Assistant',
      description: 'Intelligent calendar management with AI-powered scheduling and meeting optimization',
      features: [
        'AI scheduling optimization',
        'Meeting conflict resolution',
        'Time zone management',
        'Meeting insights',
        'Integration capabilities',
        'Smart reminders'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '11',
      icon: '🎯',
      title: 'AI Lead Generation Engine',
      description: 'Advanced AI-powered lead generation and qualification with automated nurturing',
      features: [
        'AI lead scoring',
        'Automated nurturing',
        'Lead qualification',
        'CRM integration',
        'Performance tracking',
        'Custom AI models'
      ],
      price: '$159/month',
      users: 'Up to 35 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '12',
      icon: '📱',
      title: 'AI Social Media Manager',
      description: 'Comprehensive AI-powered social media management with content optimization and scheduling',
      features: [
        'AI content optimization',
        'Automated posting',
        'Engagement analysis',
        'Hashtag optimization',
        'Multi-platform support',
        'Performance analytics'
      ],
      price: '$139/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Social Media'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Content', 'Marketing', 'Finance', 'Productivity', 'Sales', 'Social Media'];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Our Micro SaaS?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;