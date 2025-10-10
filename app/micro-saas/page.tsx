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
      title: 'Analytics Dashboard Pro',
      description: 'Advanced real-time analytics and business intelligence platform',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Email alerts and notifications',
        'Multi-platform integration',
        'Advanced filtering options',
        'Predictive analytics',
        'Custom dashboards',
        'API access'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support',
      description: 'Intelligent customer support with AI chatbot and live chat',
      features: [
        'AI chatbot with NLP',
        'Live chat support',
        'Ticket management system',
        'Multi-language support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Performance analytics',
        'Custom workflows'
      ],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring and threat detection',
      features: [
        'Real-time threat detection',
        'Automated security scans',
        'Compliance reporting',
        'Incident response tools',
        'Security dashboard',
        'Vulnerability assessment',
        'Penetration testing',
        'Security training'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Backup Enterprise',
      description: 'Advanced cloud backup and disaster recovery solution',
      features: [
        'Automated daily backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Encrypted storage',
        'Incremental backups',
        'Backup verification',
        'Compliance reporting'
      ],
      price: '$89/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Performance Tracker Pro',
      description: 'Comprehensive application performance monitoring and optimization',
      features: [
        'Performance monitoring',
        'Error tracking',
        'Uptime monitoring',
        'Performance insights',
        'Alert management',
        'Load testing',
        'Capacity planning',
        'Performance optimization'
      ],
      price: '$99/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Assistant',
      description: 'Advanced AI-powered automation and workflow optimization',
      features: [
        'Workflow automation',
        'AI-powered insights',
        'Task scheduling',
        'Integration capabilities',
        'Custom AI models',
        'Natural language processing',
        'Predictive analytics',
        'Machine learning'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation and campaign management',
      features: [
        'Email campaign builder',
        'Automation workflows',
        'A/B testing',
        'Segmentation tools',
        'Analytics and reporting',
        'Template library',
        'Deliverability optimization',
        'Compliance tools'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Comprehensive social media management and analytics platform',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Analytics dashboard',
        'Engagement tracking',
        'Hashtag research',
        'Competitor analysis',
        'Scheduling tools',
        'Team collaboration'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '9',
      icon: '💰',
      title: 'Expense Tracker Pro',
      description: 'Advanced financial tracking and expense management solution',
      features: [
        'Expense categorization',
        'Receipt scanning',
        'Budget tracking',
        'Financial reporting',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '10',
      icon: '📅',
      title: 'Appointment Scheduler Pro',
      description: 'Advanced scheduling and calendar management system',
      features: [
        'Online booking',
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Multi-timezone support',
        'Resource management',
        'Reporting and analytics',
        'Custom branding'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '11',
      icon: '📝',
      title: 'Content Generator AI',
      description: 'AI-powered content creation and management platform',
      features: [
        'AI content generation',
        'SEO optimization',
        'Content planning',
        'Multi-format support',
        'Brand voice training',
        'Plagiarism detection',
        'Content analytics',
        'Team collaboration'
      ],
      price: '$89/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '12',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization tool',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'Rank tracking',
        'Technical SEO',
        'Content optimization',
        'Link building tools',
        'Performance monitoring'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'SEO'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Scheduling', 'Content', 'SEO'];

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