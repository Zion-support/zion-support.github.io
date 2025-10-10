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
      description: 'Comprehensive business analytics and reporting dashboard for data-driven decisions.',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-source data integration',
        'Automated alerts and notifications',
        'Export to multiple formats'
      ],
      price: '$99/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline booking and scheduling with automated reminders and calendar integration.',
      features: [
        'Online booking system',
        'Calendar synchronization',
        'Automated reminders',
        'Payment processing',
        'Multi-timezone support'
      ],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '3',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Advanced chat analytics and customer engagement insights for better communication.',
      features: [
        'Message sentiment analysis',
        'Response time tracking',
        'Customer satisfaction scoring',
        'Chat performance metrics',
        'Integration with popular platforms'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Communication'
    },
    {
      id: '4',
      icon: '📝',
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: [
        'AI content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar management'
      ],
      price: '$129/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '5',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automated document processing and management with OCR and data extraction.',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Automated workflows',
        'Cloud storage integration'
      ],
      price: '$89/month',
      users: 'Up to 12 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '6',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Complete email marketing solution with automation and analytics.',
      features: [
        'Drag-and-drop email builder',
        'Automated email sequences',
        'A/B testing capabilities',
        'Subscriber management',
        'Detailed analytics and reporting'
      ],
      price: '$59/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '7',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Smart expense tracking and financial management for businesses.',
      features: [
        'Receipt scanning and OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Budget tracking and alerts',
        'Financial reporting'
      ],
      price: '$69/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '8',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Comprehensive inventory tracking and management system.',
      features: [
        'Real-time inventory tracking',
        'Low stock alerts',
        'Barcode scanning support',
        'Supplier management',
        'Inventory analytics'
      ],
      price: '$109/month',
      users: 'Up to 30 users',
      popular: true,
      category: 'Operations'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Communication', 'Content', 'Productivity', 'Marketing', 'Finance', 'Operations'];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with cloud synchronization'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and ROI'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Small Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small businesses. Analytics, scheduling, content generation, and more." />
        <meta name="keywords" content="micro SaaS, small business tools, business software, productivity tools, analytics dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Powerful, focused tools designed for small businesses. 
                Get the functionality you need without the complexity you don't.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Browse Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for small businesses with simplicity and effectiveness in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Collection
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our carefully curated selection of business tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm p-6 border transition-all duration-300 hover:shadow-md ${
                    product.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.users}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      product.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with a free trial and see how our micro SaaS solutions 
              can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;