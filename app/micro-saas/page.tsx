'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and automated response capabilities.',
      features: ['24/7 Threat Monitoring', 'AI-powered Threat Detection', 'Automated Incident Response', 'Compliance Tracking', 'Security Analytics', 'Vulnerability Scanning'],
      price: '$149/month',
      marketPrice: '$200-800/month',
      benefits: ['Enhanced security posture', 'Reduced response time', 'Compliance assurance', 'Automated protection'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Content AI Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials with brand consistency.',
      features: ['AI Content Generation', 'Brand Voice Customization', 'Multi-language Support', 'SEO Optimization', 'Content Scheduling', 'Performance Analytics'],
      price: '$79/month',
      marketPrice: '$100-400/month',
      benefits: ['Consistent brand voice', 'Scalable content production', 'SEO optimization', 'Time savings'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Customer Support AI',
      description: 'Intelligent chatbot platform for customer support with natural language processing and escalation management.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Knowledge Base Integration', 'Escalation Management', 'Analytics Dashboard', 'Custom Training'],
      price: '$129/month',
      marketPrice: '$150-600/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Cost efficiency'],
      icon: MessageCircle,
      category: 'Support',
      popular: false
    },
    {
      title: 'Project Management AI',
      description: 'AI-enhanced project management with intelligent task prioritization, resource allocation, and risk assessment.',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Progress Tracking', 'Risk Assessment', 'Team Collaboration', 'Automated Reporting'],
      price: '$199/month',
      marketPrice: '$250-1000/month',
      benefits: ['Improved project efficiency', 'Better resource utilization', 'Risk mitigation', 'Team productivity'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Email Marketing AI',
      description: 'Advanced email marketing platform with AI-powered personalization, automation, and performance optimization.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Segmentation', 'Analytics Tracking', 'Template Library'],
      price: '$89/month',
      marketPrice: '$120-500/month',
      benefits: ['Higher engagement rates', 'Automated campaigns', 'Personalized content', 'Better ROI'],
      icon: Mail,
      category: 'Marketing',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Support', name: 'Support', count: products.filter(p => p.category === 'Support').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS tools designed to streamline your business operations with AI-powered solutions." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, productivity, automation" />
        <meta property="og:title" content="Micro SaaS Tools - Zion Tech Group" />
        <meta property="og:description" content="Discover our collection of micro SaaS tools designed to streamline your business operations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Tools - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our collection of micro SaaS tools designed to streamline your business operations." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SaaS tools designed to streamline your business operations with AI-powered solutions.
            </p>
          </section>

          {/* Filter Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="flex-1 max-w-md">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    {product.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 line-through ml-2">{product.marketPrice}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Get Started
                    </button>
                    <button className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Contact Sales
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our collection of micro SaaS tools and start streamlining your business operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  View All Products
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
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