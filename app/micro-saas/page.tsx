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
      title: 'Business Intelligence Dashboard',
      description: 'Advanced analytics and reporting platform with real-time data visualization and AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'Custom report builder with drag-and-drop interface',
        'AI-powered predictive analytics and forecasting',
        'Multi-platform integration (Salesforce, HubSpot, Google Analytics)',
        'Automated email reports and alerts',
        'White-label customization options',
        'Advanced filtering and drill-down capabilities',
        'Mobile-responsive dashboard'
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
      description: 'Complete customer support solution with AI chatbot, live chat, and ticket management',
      features: [
        'Advanced AI chatbot with natural language processing',
        'Live chat with real-time translation (50+ languages)',
        'Intelligent ticket routing and prioritization',
        'Knowledge base with AI-powered search',
        'Customer satisfaction tracking and analytics',
        'Integration with CRM systems',
        'Multi-channel support (email, chat, social media)',
        'Customizable chat widgets and themes'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Enterprise Security Monitor',
      description: 'Comprehensive cybersecurity monitoring with threat detection and compliance management',
      features: [
        'Real-time threat detection and response',
        'Automated vulnerability scanning and patching',
        'SOC 2, GDPR, and HIPAA compliance reporting',
        'Advanced incident response automation',
        'Security awareness training modules',
        'Dark web monitoring and breach detection',
        'Custom security policies and rules',
        '24/7 security operations center support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Smart Cloud Backup Pro',
      description: 'Intelligent cloud backup with disaster recovery and business continuity features',
      features: [
        'Automated incremental and full backups',
        'Cross-platform sync with conflict resolution',
        'Version control with 90-day retention',
        'Disaster recovery with RTO < 4 hours',
        'End-to-end encryption (AES-256)',
        'Compliance with GDPR and HIPAA',
        'Bandwidth throttling and scheduling',
        'Real-time backup monitoring and alerts'
      ],
      price: '$79/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Application Performance Monitor',
      description: 'Advanced APM solution with real-time monitoring, error tracking, and performance optimization',
      features: [
        'Real-time performance monitoring and alerting',
        'Distributed tracing and error tracking',
        'Uptime monitoring with global checkpoints',
        'AI-powered performance insights and recommendations',
        'Custom dashboards and reporting',
        'Integration with popular development tools',
        'SLA monitoring and reporting',
        'Mobile app performance tracking'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with AI-powered decision making and custom workflows',
      features: [
        'Visual workflow builder with 200+ integrations',
        'AI-powered decision making and routing',
        'Document processing and data extraction',
        'Email and calendar automation',
        'Custom AI model training and deployment',
        'Advanced analytics and reporting',
        'Multi-tenant architecture',
        'API access and webhook support'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation',
      features: [
        'AI-powered email personalization and optimization',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and drip campaigns',
        'Landing page builder with conversion tracking',
        'Advanced analytics and ROI reporting',
        'GDPR and CAN-SPAM compliance tools',
        'Integration with 50+ platforms'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Financial Analytics Pro',
      description: 'Comprehensive financial management and analytics platform for businesses',
      features: [
        'Real-time financial dashboard and reporting',
        'Automated expense tracking and categorization',
        'Invoice generation and payment processing',
        'Tax preparation and compliance tools',
        'Cash flow forecasting and budgeting',
        'Multi-currency support and conversion',
        'Integration with accounting software',
        'Financial KPI tracking and alerts'
      ],
      price: '$149/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management platform with AI-powered content creation and scheduling',
      features: [
        'AI-powered content creation and optimization',
        'Multi-platform posting and scheduling',
        'Social media analytics and reporting',
        'Influencer identification and outreach',
        'Hashtag research and trending topics',
        'Social listening and sentiment analysis',
        'Team collaboration and approval workflows',
        'White-label client management'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '10',
      icon: '📋',
      title: 'Project Management Suite',
      description: 'Advanced project management with AI-powered resource allocation and progress tracking',
      features: [
        'AI-powered project planning and resource allocation',
        'Gantt charts and timeline visualization',
        'Team collaboration and communication tools',
        'Time tracking and productivity analytics',
        'Risk assessment and mitigation planning',
        'Custom workflows and automation',
        'Integration with 100+ tools',
        'Mobile app for on-the-go management'
      ],
      price: '$119/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '11',
      icon: '🎯',
      title: 'Lead Generation Engine',
      description: 'AI-powered lead generation and qualification platform with automated outreach',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated email and LinkedIn outreach',
        'Lead database with 50M+ contacts',
        'Intent data and behavioral tracking',
        'A/B testing for outreach campaigns',
        'CRM integration and lead routing',
        'Compliance with GDPR and CAN-SPAM',
        'Advanced analytics and ROI tracking'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '12',
      icon: '🔍',
      title: 'SEO Optimization Tool',
      description: 'Comprehensive SEO platform with AI-powered optimization and competitor analysis',
      features: [
        'AI-powered keyword research and optimization',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Content optimization suggestions',
        'Local SEO management and optimization',
        'Rank tracking and SERP monitoring',
        'Link building and outreach tools',
        'White-label reporting and dashboards'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Productivity', 'Sales'];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''} hover:scale-105`}>
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