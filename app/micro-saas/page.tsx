'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Cloud, Brain, Code } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: '1',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time insights and automated reporting.',
      price: '$99/month',
      category: 'Analytics',
      icon: Brain,
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'API integration'],
      popular: true
    },
    {
      id: '2',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      price: '$79/month',
      category: 'Communication',
      icon: Code,
      features: ['24/7 support', 'Multi-language', 'Custom training', 'Analytics'],
      popular: false
    },
    {
      id: '3',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring and threat detection for small to medium businesses.',
      price: '$149/month',
      category: 'Security',
      icon: Shield,
      features: ['Threat monitoring', 'Automated updates', 'Security alerts', 'Compliance reports'],
      popular: true
    },
    {
      id: '4',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and recovery solution with enterprise-grade encryption.',
      price: '$59/month',
      category: 'Storage',
      icon: Cloud,
      features: ['Automated backups', 'Version control', 'Cross-platform', 'Unlimited storage'],
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Communication', name: 'Communication' },
    { id: 'Security', name: 'Security' },
    { id: 'Storage', name: 'Storage' }
  ];

  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'API access for custom integrations'
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations with AI and automation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready-to-use business tools powered by AI and automation. Get started in minutes, scale as you grow.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm text-cyan-400">{product.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{product.price}</div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8">
                We can create a custom micro SaaS solution tailored to your specific business needs.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;