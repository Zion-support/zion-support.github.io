'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Users, TrendingUp, CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automated follow-ups.',
      category: 'Business',
      price: '$149/month',
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Integration Hub'],
      rating: 4.8,
      users: '2.5K+',
      icon: Users
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and custom dashboards.',
      category: 'Analytics',
      price: '$199/month',
      features: ['Real-time Analytics', 'Custom Dashboards', 'AI Insights', 'Data Export'],
      rating: 4.9,
      users: '1.8K+',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, and social media automation.',
      category: 'Marketing',
      price: '$299/month',
      features: ['AI Writing Assistant', 'Image Generation', 'Social Media Automation', 'Content Calendar'],
      rating: 4.7,
      users: '3.2K+',
      icon: Zap
    },
    {
      id: 4,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      category: 'Support',
      price: '$99/month',
      features: ['No-Code Builder', 'Multi-channel Support', 'Analytics Dashboard', 'Custom Integrations'],
      rating: 4.6,
      users: '4.1K+',
      icon: Globe
    },
    {
      id: 5,
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics.',
      category: 'Marketing',
      price: '$179/month',
      features: ['AI Optimization', 'Personalization', 'A/B Testing', 'Advanced Analytics'],
      rating: 4.8,
      users: '2.7K+',
      icon: Shield
    },
    {
      id: 6,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking.',
      category: 'Marketing',
      price: '$129/month',
      features: ['SEO Analysis', 'Keyword Research', 'Content Optimization', 'Ranking Tracking'],
      rating: 4.5,
      users: '1.9K+',
      icon: TrendingUp
    }
  ];

  const categories = ['All', 'Business', 'Analytics', 'Marketing', 'Support'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of powerful, AI-powered micro SAAS solutions designed to solve specific business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
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
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{product.rating}</span>
                      <span className="text-gray-400 text-sm">({product.users})</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">{product.price}</span>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;