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
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business metrics',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-platform integration',
        'Automated alerts',
        'Export capabilities',
        'Mobile responsive design'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline your scheduling with an intelligent booking system',
      features: [
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Multi-timezone support',
        'Custom booking forms',
        'SMS notifications'
      ],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '3',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Analyze customer conversations and improve support quality',
      features: [
        'Sentiment analysis',
        'Response time tracking',
        'Customer satisfaction scores',
        'Team performance metrics',
        'Integration with popular chat tools',
        'Custom dashboards'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '4',
      icon: '✍️',
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      features: [
        'AI writing assistant',
        'Multiple content formats',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar',
        'Plagiarism checker'
      ],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '5',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automate document processing and data extraction',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classification',
        'Batch processing',
        'API integration',
        'Secure storage'
      ],
      price: '$59/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Automation'
    },
    {
      id: '6',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Create and manage email campaigns with advanced automation',
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'A/B testing',
        'Subscriber management',
        'Analytics and reporting',
        'Template library'
      ],
      price: '$24/month',
      users: 'Up to 2 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '7',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Track and manage business expenses with smart categorization',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense approval workflow',
        'Budget tracking',
        'Tax reporting',
        'Mobile app'
      ],
      price: '$34/month',
      users: 'Up to 6 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '8',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Streamline inventory tracking and management',
      features: [
        'Real-time inventory tracking',
        'Low stock alerts',
        'Barcode scanning',
        'Supplier management',
        'Sales forecasting',
        'Multi-location support'
      ],
      price: '$44/month',
      users: 'Up to 7 users',
      popular: false,
      category: 'Inventory'
    },
    {
      id: '9',
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Intelligently score and prioritize leads for better conversion',
      features: [
        'AI-powered scoring',
        'Custom scoring rules',
        'Lead behavior tracking',
        'Integration with CRM',
        'Automated follow-ups',
        'Performance analytics'
      ],
      price: '$39/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '10',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Optimize your website for search engines with AI-powered insights',
      features: [
        'Keyword research',
        'On-page optimization',
        'Competitor analysis',
        'Rank tracking',
        'Content suggestions',
        'Technical SEO audit'
      ],
      price: '$29/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'SEO'
    },
    {
      id: '11',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Manage and schedule posts across multiple social media platforms',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Hashtag suggestions',
        'Analytics dashboard',
        'Team collaboration',
        'Auto-scheduling'
      ],
      price: '$34/month',
      users: 'Up to 4 users',
      popular: false,
      category: 'Social Media'
    },
    {
      id: '12',
      icon: '🤖',
      title: 'Support Bot',
      description: 'AI-powered customer support bot for instant responses',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with helpdesk',
        'Custom responses',
        'Analytics and insights',
        'Human handoff'
      ],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Content', 'Automation', 'Marketing', 'Finance', 'Inventory', 'Sales', 'SEO', 'Social Media', 'Support'];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with cloud infrastructure'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Analytics & Insights',
      description: 'Track performance and optimize with detailed analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations. From analytics to automation, find the perfect tool for your needs." />
        <meta name="keywords" content="micro SaaS, business tools, analytics dashboard, appointment scheduler, content generator, expense tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready-to-use business tools that solve specific problems and boost productivity
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Ready to Use
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Team Collaboration
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Scalable Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Micro SaaS Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Micro SaaS Products</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-colors duration-200 bg-white text-gray-700 hover:bg-blue-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border ${
                  product.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                }`}
              >
                {product.popular && (
                  <div className="absolute -mt-2 -mr-2 right-0">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{product.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-gray-500 text-sm">{product.users}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Makes Our Solutions Special?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing tools and workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with our dedicated support team</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Updates</h3>
              <p className="text-gray-600">Regular updates and new features to keep your tools current</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SaaS solutions and start improving your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Browse All Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;