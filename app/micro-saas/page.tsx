'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: any;
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

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data visualization'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'analytics'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and insights.',
      features: ['Lead management', 'Sales automation', 'Customer insights', 'Pipeline tracking'],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'crm'
    },
    {
      id: '3',
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation without coding.',
      features: ['No-code builder', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: '$19/month',
      users: 'Unlimited',
      popular: true,
      category: 'automation'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Monitor and optimize your cloud resources with AI-powered recommendations.',
      features: ['Cost optimization', 'Performance monitoring', 'Security alerts', 'Auto-scaling'],
      price: '$39/month',
      users: 'Up to 5 accounts',
      popular: false,
      category: 'infrastructure'
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with personalized content and optimal send times.',
      features: ['AI content generation', 'Send time optimization', 'A/B testing', 'Performance analytics'],
      price: '$24/month',
      users: 'Up to 10,000 contacts',
      popular: false,
      category: 'marketing'
    },
    {
      id: '6',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive security monitoring with threat detection and incident response.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Incident response'],
      price: '$59/month',
      users: 'Up to 50 devices',
      popular: false,
      category: 'security'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'crm', name: 'CRM' },
    { id: 'automation', name: 'Automation' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'security', name: 'Security' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const stats = [
    { icon: Users, value: '50+', label: 'AI Tools' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: 'Enterprise', label: 'Security' },
    { icon: Zap, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS tools. Boost productivity with analytics, CRM, automation, and more." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, analytics, CRM, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover our collection of 50+ AI-powered micro SAAS tools designed to boost your productivity and streamline your business operations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 group ${
                  product.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-white/10'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 text-sm">{product.users}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Start Free Trial
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Tools?</h2>
            <p className="text-gray-300 text-lg">Built for modern businesses that need powerful, easy-to-use solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Every tool is enhanced with artificial intelligence for smarter automation and insights.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with encryption, compliance, and regular security audits.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud-Native</h3>
              <p className="text-gray-300">Built for the cloud with automatic scaling, updates, and global availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5" />
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;