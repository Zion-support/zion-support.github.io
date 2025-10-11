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


  return ()
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map() {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon: React.ComponentType<any>
      icon: Brain,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics']
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization']
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react'
interface MicroSaasProduct {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  users: string
  popular: boolean
  category: string
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Multi-platform integration',
        'Advanced filtering'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3
    },
    {
      id: '2',
      name: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      price: '$149/month',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Compliance tracking',
        'Security analytics',
        'Real-time alerts',
        'Vulnerability scanning'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },
    {
      id: '3',
      name: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      price: '$79/month',
      features: [
        'Smart task management',
        'Team collaboration',
        'Progress analytics',
        'Resource optimization',
        'Time tracking',
        'Gantt charts'
      ],
      category: 'Productivity',
      popular: false,
      icon: Target
    },
    {
      id: '4',
      name: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance and optimization.',
      price: '$59/month',
      features: [
        'AI writing assistance',
        'Content optimization',
        'SEO suggestions',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling'
      ],
      category: 'Content',
      popular: true,
      icon: MessageSquare
    },
    {
      id: '5',
      name: 'Cloud Infrastructure Manager',
      description: 'Streamline cloud operations with automated scaling and cost optimization.',
      price: '$199/month',
      features: [
        'Automated scaling',
        'Cost optimization',
        'Performance monitoring',
        'Resource allocation',
        'Multi-cloud support',
        'Disaster recovery'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cloud
    },
    {
      id: '6',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with natural language processing.',
      price: '$129/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics'
      ],
      category: 'Customer Service',
      popular: false,
      icon: Users
    }
  ];

  const categories = ['all', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];
  const filteredProducts = microSaasProducts.filter();
  );

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    </any><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Micro SaaS - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to solve specific business problems. Analytics, security, productivity, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, content generator, security monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Micro </h1><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS</span> Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused AI tools that solve specific business problems. 
            Each tool is designed to deliver immediate value with minimal setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Tools
              </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
      {/* Featured Products */}
      {popularProducts.length > 0 && (
        <section className="py-16 px-4">
          </section><div className="
            </div><div className="text-center mb-12">
              </div><h2 className="text-4xl font-bold text-white mb-6">Featured Tools</h2>
              <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
            </div>


                </div>
              ))}
            </div>

      {/* All Products */}
      <section className="py-16 px-4 bg-white/5">
        </section><div className="
          </div><div className="flex flex-col md:flex-row gap-4 mb-12">
            </div><select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                </select><option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              </div><div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                </div><div className="flex items-center justify-between mb-4">
                  </div><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    </div><product.icon className="w-6 h-6 text-white" />
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{product.price}</div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    </ul><li key={index} className="flex items-center text-sm text-gray-300">
                      </li><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2" /></button>
                  Learn More
                  </button><ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              </div><p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        </section><div className="
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Tools?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each tool is designed to solve a specific problem with maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300" /></p>
                Get up and running in minutes with our intuitive setup process and comprehensive documentation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
              <p className="text-gray-300" /></p>
                See results from day one with tools designed to deliver immediate business value and efficiency gains.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300" /></p>
                Start small and scale up as your business grows with flexible pricing and feature options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Start with any of our micro SaaS tools and see immediate improvements in your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
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
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management with AI content generation and scheduling',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Support'
    }
  ]
return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Micro SaaS Solutions
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <$2 />
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}
                  <p className="text-gray-300 mb-6">{tool.description}
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  <$2 />
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
              ))}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support']
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}
                  <div className="text-gray-600">{stat.label}
              ))}
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <$2 />
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
              ))}
        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <$2 />
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                  )}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}
                    <p className="text-gray-600 mb-4">{product.description}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{product.price}
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}
                    ))}
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">Start Free Trial
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">Learn More
              ))}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.
            )}
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}
                ))}
        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <$2 />
                  to="/contact"
className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                <$2 />
                  to="/pricing"
className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  View All Plans
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">View All Plans
      <Footer />
  )
}
export default MicroSaasPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></button></button></button></p></p></p></p></p></p></p></p></p></p></p></p></p></h1></h1></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></ul></ul></li></li></section></section></section></section></section></section></section></section></section>
