'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain, Globe, Users, BarChart, Settings, Calendar, FileText, DollarSign, Package, Monitor, Wifi, MessageSquare, Target, Eye, Mic, Workflow, Heart, TrendingUp, Award, Rocket, Layers, Code, Database, Smartphone, Lock, Cpu, Cloud, Mail, Phone, MapPin } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards.',
      price: '$99/month',
      category: 'Analytics',
      icon: BarChart,
      features: ['Real-time dashboards', 'AI-powered insights', 'Custom reports', 'Data visualization'],
      popular: true,
      rating: 4.9,
      users: '10K+'
    },
    {
      id: 2,
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support.',
      price: '$79/month',
      category: 'AI',
      icon: MessageSquare,
      features: ['24/7 support', 'Multi-language', 'CRM integration', 'Analytics'],
      popular: true,
      rating: 4.8,
      users: '5K+'
    },
    {
      id: 3,
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      price: '$149/month',
      category: 'Security',
      icon: Shield,
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Compliance reports'],
      popular: false,
      rating: 4.7,
      users: '2K+'
    },
    {
      id: 4,
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated scheduling and encryption.',
      price: '$59/month',
      category: 'Cloud',
      icon: Cloud,
      features: ['Automated backup', 'End-to-end encryption', 'Disaster recovery', 'Multi-cloud support'],
      popular: true,
      rating: 4.6,
      users: '8K+'
    },
    {
      id: 5,
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$89/month',
      category: 'Content',
      icon: FileText,
      features: ['AI writing', 'SEO optimization', 'Multi-platform publishing', 'Brand voice'],
      popular: false,
      rating: 4.5,
      users: '3K+'
    },
    {
      id: 6,
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      price: '$129/month',
      category: 'CRM',
      icon: Users,
      features: ['Lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Integration hub'],
      popular: true,
      rating: 4.8,
      users: '6K+'
    },
    {
      id: 7,
      name: 'Zion Data Sync',
      description: 'Seamless data integration platform connecting all your business applications and databases.',
      price: '$69/month',
      category: 'Integration',
      icon: Database,
      features: ['Real-time sync', '100+ integrations', 'Data transformation', 'Error handling'],
      popular: false,
      rating: 4.4,
      users: '4K+'
    },
    {
      id: 8,
      name: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email campaigns and landing pages.',
      price: '$79/month',
      category: 'Marketing',
      icon: Target,
      features: ['Landing pages', 'Email automation', 'Lead scoring', 'A/B testing'],
      popular: true,
      rating: 4.7,
      users: '7K+'
    }
  ];

  const categories = ['all', 'AI', 'Analytics', 'Security', 'Cloud', 'Content', 'CRM', 'Integration', 'Marketing'];

  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of ready-to-use Micro SaaS solutions. AI-powered tools for analytics, security, content, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, security, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use business tools powered by AI and automation. Get started in minutes, scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most loved Micro SaaS products trusted by thousands of businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{product.users}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-4">{product.price}</div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our complete collection of business tools and solutions.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{product.rating}</span>
                      <span>•</span>
                      <span>{product.users}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful tools without the complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive setup process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all your data</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">Leverage advanced AI to automate and optimize your workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Scale</h3>
              <p className="text-gray-300">Scale from startup to enterprise with our robust infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial today and experience the power of our Micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
