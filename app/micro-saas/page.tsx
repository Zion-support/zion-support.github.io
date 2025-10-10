'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Target, Rocket } from 'lucide-react';

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
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Customer Relationship Manager',
      description: 'Streamlined CRM with AI-powered lead scoring and automated follow-ups',
      features: ['Lead management', 'AI lead scoring', 'Email automation', 'Sales pipeline', 'Contact management'],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: 'AI Chat Support',
      description: 'Intelligent customer support chatbot with natural language processing',
      features: ['24/7 chatbot', 'Multi-language support', 'Ticket management', 'Knowledge base', 'Analytics'],
      price: '$149/month',
      users: 'Unlimited',
      popular: false,
      category: 'Support'
    },
    {
      id: '4',
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns with AI-driven personalization',
      features: ['Email campaigns', 'Social media automation', 'A/B testing', 'Customer segmentation', 'ROI tracking'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '5',
      icon: <Cloud className="h-8 w-8 text-cyan-600" />,
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered resource allocation',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning', 'Progress analytics'],
      price: '$129/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '6',
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Security Monitor',
      description: 'Real-time security monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response', 'Security reports'],
      price: '$179/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Security'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Support', 'Marketing', 'Productivity', 'Security'];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features'
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our range of micro SaaS solutions designed for small to medium businesses. Affordable, powerful, and easy-to-use tools to grow your business." />
        <meta name="keywords" content="micro saas, business tools, analytics, CRM, marketing automation, project management" />
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
                Powerful, affordable business tools designed for small to medium businesses. 
                Get enterprise-grade functionality without the enterprise complexity.
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

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-600">
                Built for modern businesses that need powerful tools without the complexity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-600">
                Choose from our range of specialized business tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-blue-600">Most Popular</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    {product.icon}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                      <span className="text-sm text-gray-500">{product.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{product.price}</div>
                    <div className="text-sm text-gray-500">{product.users}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Start Free Trial
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how our micro SaaS solutions can help your business grow.
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