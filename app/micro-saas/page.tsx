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
        'Custom report generation and scheduling',
        'Email alerts and notifications',
        'Multi-platform integration (Salesforce, HubSpot, Google Analytics)',
        'Advanced filtering and drill-down capabilities',
        'White-label reporting',
        'API access for custom integrations',
        'Mobile-responsive dashboard'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbots, ticketing system, and knowledge base management',
      features: [
        'AI chatbot with natural language processing',
        'Live chat support with agent handoff',
        'Advanced ticketing system with SLA management',
        'Multi-language support (20+ languages)',
        'Knowledge base with search functionality',
        'Customer satisfaction surveys',
        'Analytics and performance reporting',
        'Integration with popular CRM systems'
      ],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Enterprise Security Monitor',
      description: 'Comprehensive cybersecurity monitoring with threat detection, compliance reporting, and incident response',
      features: [
        'Real-time threat detection and analysis',
        'Automated security vulnerability scans',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Incident response automation',
        'Security dashboard with threat intelligence',
        'Log analysis and correlation',
        'Penetration testing tools',
        '24/7 security monitoring alerts'
      ],
      price: '$599/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Backup & Recovery',
      description: 'Enterprise-grade cloud backup solution with disaster recovery and business continuity features',
      features: [
        'Automated daily backups with versioning',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Point-in-time recovery capabilities',
        'Disaster recovery planning and testing',
        'End-to-end encryption (AES-256)',
        'Compliance with data protection regulations',
        'Bandwidth throttling and scheduling',
        'Multi-cloud backup redundancy'
      ],
      price: '$149/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Application Performance Monitor',
      description: 'Advanced application performance monitoring with error tracking, uptime monitoring, and optimization insights',
      features: [
        'Real-time performance monitoring',
        'Error tracking and debugging tools',
        'Uptime monitoring with global checkpoints',
        'Performance insights and recommendations',
        'Alert management with escalation rules',
        'Custom metrics and dashboards',
        'API performance monitoring',
        'Mobile app performance tracking'
      ],
      price: '$249/month',
      users: 'Up to 40 users',
      popular: true,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and custom integrations',
      features: [
        'Visual workflow designer with drag-and-drop',
        'AI-powered process optimization suggestions',
        'Advanced task scheduling and automation',
        'Integration with 500+ business applications',
        'Custom AI model training and deployment',
        'Workflow analytics and performance metrics',
        'Approval workflows and notifications',
        'Multi-tenant architecture support'
      ],
      price: '$399/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with automation, personalization, and analytics',
      features: [
        'Drag-and-drop email builder',
        'Advanced automation workflows',
        'Personalization and dynamic content',
        'A/B testing and optimization',
        'List segmentation and targeting',
        'Email deliverability optimization',
        'Advanced analytics and reporting',
        'Integration with e-commerce platforms'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '📱',
      title: 'Mobile App Analytics',
      description: 'Comprehensive mobile app analytics with user behavior tracking, crash reporting, and performance monitoring',
      features: [
        'User behavior analytics and funnels',
        'Crash reporting and error tracking',
        'Performance monitoring and optimization',
        'User segmentation and cohort analysis',
        'Push notification analytics',
        'In-app purchase tracking',
        'Custom event tracking',
        'Real-time dashboard and alerts'
      ],
      price: '$129/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '9',
      icon: '💼',
      title: 'Project Management Suite',
      description: 'Complete project management solution with task tracking, team collaboration, and resource management',
      features: [
        'Kanban boards and Gantt charts',
        'Task assignment and tracking',
        'Team collaboration tools',
        'Resource planning and allocation',
        'Time tracking and reporting',
        'Budget management and forecasting',
        'Integration with development tools',
        'Custom workflows and automation'
      ],
      price: '$219/month',
      users: 'Up to 60 users',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '10',
      icon: '🎯',
      title: 'Lead Generation Platform',
      description: 'AI-powered lead generation and qualification platform with automated outreach and CRM integration',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated outreach campaigns',
        'Multi-channel lead capture forms',
        'CRM integration and synchronization',
        'Lead nurturing workflows',
        'Conversion tracking and analytics',
        'A/B testing for campaigns',
        'White-label lead generation pages'
      ],
      price: '$349/month',
      users: 'Up to 45 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: '11',
      icon: '📊',
      title: 'Social Media Management',
      description: 'Comprehensive social media management platform with scheduling, analytics, and engagement tools',
      features: [
        'Multi-platform social media scheduling',
        'Content calendar and planning',
        'Social media analytics and reporting',
        'Engagement monitoring and response',
        'Hashtag research and optimization',
        'Influencer collaboration tools',
        'Social listening and sentiment analysis',
        'Team collaboration and approval workflows'
      ],
      price: '$199/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '12',
      icon: '🔍',
      title: 'SEO Optimization Suite',
      description: 'Complete SEO optimization platform with keyword research, site auditing, and ranking tracking',
      features: [
        'Keyword research and analysis tools',
        'Website SEO auditing and recommendations',
        'Ranking tracking and monitoring',
        'Competitor analysis and benchmarking',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Local SEO optimization tools',
        'Custom reporting and white-label options'
      ],
      price: '$279/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'SEO'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Productivity', 'Sales', 'SEO'];

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