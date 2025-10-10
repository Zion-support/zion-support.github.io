'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, Users, Shield, Zap, Mail, Calendar, FileText, Search, Rocket, Star } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business',
      features: [
        'Real-time analytics',
        'Custom reports',
        'Data visualization',
        'Export capabilities',
        'API integration'
      ],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'CRM Lite',
      description: 'Simple customer relationship management solution',
      features: [
        'Contact management',
        'Lead tracking',
        'Sales pipeline',
        'Email integration',
        'Basic reporting'
      ],
      price: '$19/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Security Monitor',
      description: 'Basic security monitoring and threat detection',
      features: [
        'Threat detection',
        'Security alerts',
        'Vulnerability scanning',
        'Compliance reports',
        'Basic firewall'
      ],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      title: 'Email Marketing',
      description: 'Email marketing automation and campaign management',
      features: [
        'Email templates',
        'Automation workflows',
        'Subscriber management',
        'Analytics tracking',
        'A/B testing'
      ],
      price: '$24/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '5',
      icon: <Calendar className="w-8 h-8 text-cyan-400" />,
      title: 'Scheduler Pro',
      description: 'Appointment scheduling and calendar management',
      features: [
        'Online booking',
        'Calendar sync',
        'Reminder notifications',
        'Payment integration',
        'Multi-timezone support'
      ],
      price: '$17/month',
      users: 'Up to 6 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '6',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Performance Optimizer',
      description: 'Website and application performance optimization',
      features: [
        'Performance monitoring',
        'Speed optimization',
        'Resource optimization',
        'Performance reports',
        'Automated fixes'
      ],
      price: '$34/month',
      users: 'Up to 12 users',
      popular: false,
      category: 'Performance'
    }
  ];

  const categories = ['all', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. Affordable, powerful, and easy to use." />
        <meta name="keywords" content="micro SaaS, small business software, affordable solutions, business tools" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable software solutions designed for small to medium businesses. Get started with our micro SaaS products today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Popular Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular micro SaaS solutions for growing businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-white">{product.price}</div>
                      <div className="text-gray-400 text-sm">{product.users}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                All Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of micro SaaS solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-white">{product.price}</div>
                      <div className="text-gray-400 text-sm">{product.users}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We can build a custom micro SaaS solution tailored to your specific business needs.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MicroSaasPage;