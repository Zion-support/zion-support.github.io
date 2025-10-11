'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Code, Users, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions.',
      category: 'crm',
      icon: Users,
      features: ['Lead Management', 'Email Automation', 'Sales Forecasting', 'Integration APIs'],
      price: '$149/month',
      rating: 4.8,
      users: '2,500+'
    },
    {
      id: 2,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reporting', '24/7 Monitoring'],
      price: '$199/month',
      rating: 4.9,
      users: '1,800+'
    },
    {
      id: 3,
      title: 'Analytics Dashboard Pro',
      description: 'Advanced business intelligence and data visualization for data-driven decision making.',
      category: 'analytics',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Export', 'Team Collaboration'],
      price: '$99/month',
      rating: 4.7,
      users: '3,200+'
    },
    {
      id: 4,
      title: 'Content Management AI',
      description: 'Automated content creation and management system with AI-powered optimization.',
      category: 'content',
      icon: FileText,
      features: ['Auto Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Performance Analytics'],
      price: '$79/month',
      rating: 4.6,
      users: '4,100+'
    },
    {
      id: 5,
      title: 'Project Management Hub',
      description: 'Streamlined project management with AI-powered task optimization and team collaboration.',
      category: 'productivity',
      icon: Workflow,
      features: ['Task Automation', 'Team Collaboration', 'Progress Tracking', 'Resource Planning'],
      price: '$129/month',
      rating: 4.8,
      users: '2,900+'
    },
    {
      id: 6,
      title: 'E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization for increased sales and customer engagement.',
      category: 'ecommerce',
      icon: ShoppingCart,
      features: ['Price Optimization', 'Inventory Management', 'Customer Insights', 'Sales Forecasting'],
      price: '$179/month',
      rating: 4.7,
      users: '1,600+'
    },
    {
      id: 7,
      title: 'Social Media Manager',
      description: 'Automated social media management with AI-powered content scheduling and engagement.',
      category: 'social',
      icon: MessageSquare,
      features: ['Auto Posting', 'Engagement Analytics', 'Content Calendar', 'Multi-platform Support'],
      price: '$89/month',
      rating: 4.5,
      users: '3,500+'
    },
    {
      id: 8,
      title: 'Financial Tracker Pro',
      description: 'Comprehensive financial management and expense tracking with AI insights.',
      category: 'finance',
      icon: DollarSign,
      features: ['Expense Tracking', 'Budget Planning', 'Financial Reports', 'Tax Preparation'],
      price: '$119/month',
      rating: 4.8,
      users: '2,200+'
    },
    {
      id: 9,
      title: 'HR Management Suite',
      description: 'Complete human resources management with AI-powered recruitment and employee analytics.',
      category: 'hr',
      icon: Users,
      features: ['Employee Database', 'Recruitment Tools', 'Performance Tracking', 'Payroll Integration'],
      price: '$159/month',
      rating: 4.7,
      users: '1,900+'
    },
    {
      id: 10,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support automation with intelligent ticket routing and responses.',
      category: 'support',
      icon: MessageCircle,
      features: ['Auto Ticket Routing', 'Chatbot Integration', 'Knowledge Base', 'Performance Metrics'],
      price: '$139/month',
      rating: 4.9,
      users: '2,800+'
    },
    {
      id: 11,
      title: 'Inventory Manager AI',
      description: 'Smart inventory management with predictive analytics and automated reordering.',
      category: 'inventory',
      icon: Package,
      features: ['Predictive Analytics', 'Auto Reordering', 'Stock Optimization', 'Supplier Management'],
      price: '$169/month',
      rating: 4.6,
      users: '1,400+'
    },
    {
      id: 12,
      title: 'Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-powered campaign optimization.',
      category: 'marketing',
      icon: Target,
      features: ['Email Campaigns', 'Lead Nurturing', 'A/B Testing', 'ROI Tracking'],
      price: '$199/month',
      rating: 4.8,
      users: '2,100+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Star },
    { id: 'crm', name: 'CRM', icon: Users },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'productivity', name: 'Productivity', icon: Workflow },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'social', name: 'Social Media', icon: MessageSquare },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'hr', name: 'HR', icon: Users },
    { id: 'support', name: 'Support', icon: MessageCircle },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'marketing', name: 'Marketing', icon: Target }
  ];

  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Business Software</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to streamline business operations. AI-powered tools for CRM, analytics, security, and more." />
        <meta name="keywords" content="micro saas, business software, CRM, analytics, security, productivity tools, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SAAS solutions designed to streamline business operations. AI-powered tools that integrate seamlessly with your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Pricing
              </button>
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
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
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
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-cyan-400 font-semibold text-lg">{product.price}</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-300 text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">{product.users} active users</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <span>Try Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Micro SAAS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300">
                Our micro SAAS products are designed to solve specific business problems with minimal setup and maximum impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300">Leverage artificial intelligence for smarter automation and insights.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Easy Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;