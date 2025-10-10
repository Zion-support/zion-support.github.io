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
      id: 'analytics-dashboard',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business',
      features: [
        'Real-time data visualization',
        'Custom reports and insights',
        'Multi-platform integration',
        'Automated alerts',
        'Export capabilities'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'task-manager',
      icon: '✅',
      title: 'Task Manager Pro',
      description: 'Advanced task and project management solution',
      features: [
        'Kanban boards and Gantt charts',
        'Team collaboration tools',
        'Time tracking',
        'Priority management',
        'Progress reporting'
      ],
      price: '$19/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'email-marketing',
      icon: '📧',
      title: 'Email Marketing Suite',
      description: 'Powerful email marketing and automation platform',
      features: [
        'Drag-and-drop email builder',
        'Automation workflows',
        'A/B testing',
        'Subscriber management',
        'Analytics and reporting'
      ],
      price: '$39/month',
      users: 'Up to 1,000 contacts',
      popular: true,
      category: 'Marketing'
    },
    {
      id: 'inventory-management',
      icon: '📦',
      title: 'Inventory Manager',
      description: 'Complete inventory tracking and management system',
      features: [
        'Real-time stock tracking',
        'Low stock alerts',
        'Supplier management',
        'Purchase orders',
        'Inventory reports'
      ],
      price: '$24/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Operations'
    },
    {
      id: 'customer-support',
      icon: '🎧',
      title: 'Support Desk',
      description: 'Customer support and ticketing system',
      features: [
        'Multi-channel support',
        'Ticket management',
        'Knowledge base',
        'Customer satisfaction surveys',
        'Performance analytics'
      ],
      price: '$34/month',
      users: 'Up to 5 agents',
      popular: false,
      category: 'Support'
    },
    {
      id: 'social-media-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Schedule and manage your social media presence',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Hashtag research',
        'Engagement tracking',
        'Team collaboration'
      ],
      price: '$29/month',
      users: 'Up to 3 users',
      popular: true,
      category: 'Marketing'
    }
  ];

  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  const benefits = [
    'Quick setup and deployment',
    'Affordable pricing plans',
    'No long-term contracts',
    'Regular updates and improvements',
    '24/7 customer support',
    'Easy integration with existing tools'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems efficiently and affordably." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, productivity software, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, focused tools that solve specific business problems efficiently and affordably
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="#benefits"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-600">
              Choose from our collection of specialized business tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  product.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.users}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-center"
                  >
                    Learn More
                  </Link>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Micro SaaS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS solutions offer focused functionality at an affordable price point
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose a micro SaaS solution that fits your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;