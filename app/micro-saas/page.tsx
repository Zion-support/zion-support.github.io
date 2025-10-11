'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageCircle
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered Invoice Generation',
        'Automated Recurring Billing',
        'Multi-currency Support',
        'Payment Tracking',
        'Tax Calculation',
        'Client Portal'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      category: 'Finance',
      popular: false,
      icon: DollarSign
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration',
        'Advanced Analytics',
        'A/B Testing'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time Threat Monitoring',
        'Vulnerability Scanning',
        'Incident Response',
        'Security Analytics',
        'Compliance Reporting',
        'Employee Training'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated Backups',
        'Cross-platform Sync',
        'Version Control',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: microSaasProducts.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our suite of micro SaaS products designed to streamline your business operations with AI-powered solutions for analytics, customer service, finance, and more." />
        <meta name="keywords" content="micro saas, business software, AI solutions, analytics, customer service, finance, marketing, security" />
        <meta property="og:title" content="Micro SaaS Products - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SaaS solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Products
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              AI-Powered Business Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our suite of micro SaaS products designed to streamline your business operations 
              with cutting-edge AI technology and modern user experiences.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      {product.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{product.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our suite of micro SaaS products or let us create a custom solution 
                tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
