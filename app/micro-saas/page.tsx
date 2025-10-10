'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  icon: any;
  popular: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'AI Content Writer',
      description: 'Generate high-quality content with AI-powered writing assistance',
      category: 'Content',
      price: '$29/month',
      features: ['AI writing', 'Content templates', 'SEO optimization'],
      icon: FileText,
      popular: true
    },
    {
      id: '2',
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business',
      category: 'Analytics',
      price: '$49/month',
      features: ['Real-time data', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use AI-powered business tools. 50+ Micro SaaS solutions for analytics, automation, marketing, and more." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready-to-use AI-powered business tools. 50+ Micro SaaS solutions for analytics, automation, marketing, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-full sm:w-80"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <product.icon className="w-8 h-8 text-cyan-400" />
                  {product.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;