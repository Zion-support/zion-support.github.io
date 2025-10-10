'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: '1',
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      price: '$29/month',
      features: ['AI-powered content creation', 'Multiple content formats', 'SEO optimization', 'Brand voice customization'],
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      popular: true
    },
    {
      id: '2',
      title: 'Analytics Dashboard Pro',
      description: 'Comprehensive analytics and reporting tool for small to medium businesses.',
      price: '$49/month',
      features: ['Real-time data visualization', 'Custom reports', 'Team collaboration', 'API integration'],
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      popular: false
    },
    {
      id: '3',
      title: 'Task Management AI',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      price: '$39/month',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      icon: <Users className="w-8 h-8 text-purple-500" />,
      popular: false
    },
    {
      id: '4',
      title: 'Email Marketing Suite',
      description: 'Complete email marketing solution with automation and personalization.',
      price: '$59/month',
      features: ['Email automation', 'A/B testing', 'Subscriber management', 'Performance analytics'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      popular: false
    },
    {
      id: '5',
      title: 'Cloud Storage Manager',
      description: 'Secure and efficient cloud storage management with advanced features.',
      price: '$19/month',
      features: ['Multi-cloud support', 'File synchronization', 'Security encryption', 'Team sharing'],
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      popular: false
    },
    {
      id: '6',
      title: 'Security Monitor',
      description: 'Real-time security monitoring and threat detection for your applications.',
      price: '$79/month',
      features: ['Threat detection', 'Security alerts', 'Compliance reporting', '24/7 monitoring'],
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business - our solutions scale seamlessly as your needs evolve.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Built-in collaboration features to keep your team connected and productive.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and maintain trust.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business challenges with AI and modern technology." />
        <meta name="keywords" content="micro SaaS, AI tools, business solutions, productivity tools, automation software" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, focused tools designed to solve specific business challenges with AI and modern technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Explore Solutions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are designed to be simple, powerful, and focused on solving specific business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed to enhance your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {product.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <div className="text-white">
                        {product.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.title}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600">
                        {product.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {product.popular ? 'Start Free Trial' : 'Learn More'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and experience the power of our micro SaaS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
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
