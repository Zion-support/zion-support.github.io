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
      title: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting for your business metrics',
      features: ['Real-time data visualization', 'Custom reports', 'API integration', 'Team collaboration'],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline booking and scheduling for your business',
      features: ['Calendar integration', 'Automated reminders', 'Payment processing', 'Multi-timezone support'],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '3',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Analyze customer conversations and improve support',
      features: ['Sentiment analysis', 'Response time tracking', 'Customer insights', 'Performance metrics'],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Communication'
    },
    {
      id: '4',
      icon: '📝',
      title: 'Content Generator',
      description: 'AI-powered content creation for marketing and social media',
      features: ['AI writing assistant', 'Multiple content types', 'Brand voice training', 'SEO optimization'],
      price: '$49/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '5',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automate document processing and data extraction',
      features: ['OCR technology', 'Data extraction', 'Batch processing', 'API integration'],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Automation'
    },
    {
      id: '6',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Create and manage email campaigns with advanced automation',
      features: ['Drag-and-drop editor', 'Automation workflows', 'A/B testing', 'Analytics dashboard'],
      price: '$34/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Marketing'
    }
  ];

  const categories = [
    { name: 'All', count: products.length },
    { name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { name: 'Scheduling', count: products.filter(p => p.category === 'Scheduling').length },
    { name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { name: 'Automation', count: products.filter(p => p.category === 'Automation').length },
    { name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics',
      description: 'Track performance and optimize your workflows'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems with simple, affordable tools." />
        <meta name="keywords" content="micro SaaS, business tools, productivity software, analytics, automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover powerful, focused tools that solve specific business problems with simplicity and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Browse Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Focused solutions that do one thing exceptionally well, without the complexity of large enterprise software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed to solve specific business challenges.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline-block h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{product.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {product.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                          <div className="text-sm text-gray-600">{product.users}</div>
                        </div>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {product.category}
                        </span>
                      </div>
                      
                      <Link
                        to={`/micro-saas/${product.id}`}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Choose the perfect micro SaaS solution for your business needs and start improving your workflows today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Browse All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
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