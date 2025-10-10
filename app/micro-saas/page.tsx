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
      description: 'Comprehensive cybersecurity monitoring with AI-powered threat detection and automated response capabilities.',
      features: ['24/7 Threat Monitoring', 'AI-powered Threat Detection', 'Automated Incident Response', 'Compliance Tracking', 'Security Analytics', 'Real-time Alerts'],
      price: '$149/month',
      marketPrice: '$200-800/month',
      benefits: ['Enhanced security posture', 'Reduced response time', 'Compliance assurance', 'Automated protection'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Project Management AI',
      description: 'AI-enhanced project management with intelligent task allocation, progress tracking, and team collaboration.',
      features: ['Smart Task Management', 'AI Resource Allocation', 'Progress Analytics', 'Team Collaboration', 'Time Tracking', 'Gantt Charts'],
      price: '$79/month',
      marketPrice: '$100-300/month',
      benefits: ['Improved productivity', 'Better resource utilization', 'Enhanced collaboration', 'Accurate tracking'],
      icon: Target,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'AI Content Studio',
      description: 'Create high-quality content with AI-powered writing assistance, optimization, and multi-language support.',
      features: ['AI Writing Assistant', 'Content Optimization', 'SEO Suggestions', 'Multi-language Support', 'Brand Voice Training', 'Content Scheduling'],
      price: '$59/month',
      marketPrice: '$80-200/month',
      benefits: ['Faster content creation', 'Improved SEO', 'Consistent brand voice', 'Multi-language support'],
      icon: FileText,
      category: 'Content',
      popular: false
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud infrastructure management with automated scaling, monitoring, and cost optimization.',
      features: ['Automated Scaling', 'Cost Optimization', 'Performance Monitoring', 'Security Management', 'Multi-cloud Support', 'Backup & Recovery'],
      price: '$199/month',
      marketPrice: '$300-1000/month',
      benefits: ['Reduced costs', 'Improved performance', 'Enhanced security', 'Automated management'],
      icon: Cloud,
      category: 'Infrastructure',
      popular: true
    },
    {
      title: 'AI Customer Support',
      description: 'Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.',
      features: ['AI Chatbots', 'Omnichannel Support', 'Sentiment Analysis', 'Automated Ticketing', 'Knowledge Base', 'Performance Analytics'],
      price: '$129/month',
      marketPrice: '$200-500/month',
      benefits: ['24/7 support', 'Improved response time', 'Cost reduction', 'Better customer satisfaction'],
      icon: MessageCircle,
      category: 'Customer Service',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: products.filter(p => p.category === 'Infrastructure').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use AI-powered business tools. 50+ Micro SaaS solutions for analytics, automation, marketing, and more." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS Tools
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use AI-powered business tools that solve real problems. 
                No coding required, instant deployment, and enterprise-grade security.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(product => 
                  selectedCategory === 'all' || product.category === selectedCategory
                )
                .filter(product => 
                  product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  product.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      {product.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        {product.marketPrice && (
                          <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400">{product.category}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;