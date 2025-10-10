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
      title: 'Zion CRM AI',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive analytics.',
      features: ['AI Lead Scoring', 'Automated Email Sequences', 'Sales Pipeline Management', 'Customer Segmentation', 'Predictive Analytics', 'Integration Hub'],
      price: '$79/month',
      marketPrice: '$120-300/month',
      benefits: ['Higher conversion rates', 'Automated workflows', 'Better customer insights', 'Reduced manual work'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with intelligent segmentation, A/B testing, and automated campaign optimization.',
      features: ['AI Content Generation', 'Smart Segmentation', 'A/B Testing Automation', 'Send Time Optimization', 'Advanced Analytics', 'Template Library'],
      price: '$59/month',
      marketPrice: '$100-250/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated optimization', 'Professional templates'],
      icon: Mail,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Project Manager AI',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and risk prediction.',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Risk Prediction', 'Team Collaboration', 'Time Tracking', 'Progress Analytics'],
      price: '$69/month',
      marketPrice: '$80-200/month',
      benefits: ['Better project outcomes', 'Reduced delays', 'Optimal resource use', 'Risk mitigation'],
      icon: Target,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion Inventory AI',
      description: 'Smart inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Supply Chain Analytics', 'Multi-location Support', 'Barcode Scanning', 'Cost Optimization'],
      price: '$99/month',
      marketPrice: '$150-400/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Better forecasting', 'Automated processes'],
      icon: Package,
      category: 'Inventory',
      popular: false
    },
    {
      title: 'Zion HR Assistant AI',
      description: 'AI-powered human resources management with automated screening, performance analytics, and employee engagement tools.',
      features: ['AI Resume Screening', 'Performance Analytics', 'Employee Engagement', 'Automated Scheduling', 'Compliance Tracking', 'Benefits Management'],
      price: '$89/month',
      marketPrice: '$120-350/month',
      benefits: ['Faster hiring', 'Better performance insights', 'Reduced HR workload', 'Improved engagement'],
      icon: Users,
      category: 'HR',
      popular: true
    }
  ];

  const categories = ['all', 'Analytics', 'CRM', 'Marketing', 'Productivity', 'Inventory', 'HR'];

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products.filter(product => 
        product.category === selectedCategory &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to streamline your business operations. Affordable, scalable, and ready-to-use tools." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, productivity software, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven business tools that are ready to use and scale with your business. 
              No complex setup, no lengthy implementations - just results.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative"
                >
                  {product.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <p className="text-sm text-gray-400">{product.category}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build a custom micro SAAS solution tailored to your specific business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us for Custom Development
            </button>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
