'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting for your business',
      icon: BarChart3,
      features: ['Real-time data', 'Custom reports', 'Export options'],
      price: '$29/month'
    },
    {
      name: 'Email Marketing',
      description: 'Automated email campaigns and subscriber management',
      icon: MessageSquare,
      features: ['Email templates', 'Automation', 'Analytics'],
      price: '$19/month'
    },
    {
      name: 'Task Manager',
      description: 'Simple and effective task management solution',
      icon: CheckCircle,
      features: ['Team collaboration', 'Deadline tracking', 'Progress reports'],
      price: '$15/month'
    },
    {
      name: 'Customer Support',
      description: 'Help desk and customer support management',
      icon: Users,
      features: ['Ticket system', 'Live chat', 'Knowledge base'],
      price: '$39/month'
    }
  ];

  const benefits = [
    'Affordable pricing for small businesses',
    'Easy setup and configuration',
    'No long-term contracts required',
    'Regular updates and new features',
    '24/7 customer support',
    'Scalable as your business grows'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small businesses. Affordable, easy-to-use tools that help you grow and manage your business effectively." />
        <meta name="keywords" content="micro SaaS, small business tools, affordable software, business management, productivity tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable, powerful tools designed for small businesses. Get the functionality 
              you need without the complexity or high costs of enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Browse Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Micro SaaS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for small businesses that need powerful tools without the complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions and start growing your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Star className="w-5 h-5" />
                View All Products
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;