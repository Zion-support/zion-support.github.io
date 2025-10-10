'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Users, TrendingUp, Award } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const saasProducts = [
    {
      id: 1,
      title: 'AI Writing Assistant',
      description: 'Advanced AI-powered writing tool for content creation, editing, and optimization.',
      category: 'productivity',
      price: '$29/month',
      features: [
        'AI content generation',
        'Grammar and style checking',
        'SEO optimization',
        'Multi-language support',
        'Team collaboration'
      ],
      rating: 4.8,
      users: '10K+',
      icon: '✍️'
    },
    {
      id: 2,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI insights and automated reporting.',
      category: 'analytics',
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reports',
        'Data integration'
      ],
      rating: 4.9,
      users: '5K+',
      icon: '📊'
    },
    {
      id: 3,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot for customer support with natural language processing.',
      category: 'customer-service',
      price: '$39/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics and reporting'
      ],
      rating: 4.7,
      users: '8K+',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'Project Management AI',
      description: 'AI-powered project management with intelligent task allocation and tracking.',
      category: 'productivity',
      price: '$59/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Risk prediction',
        'Progress tracking',
        'Team collaboration'
      ],
      rating: 4.6,
      users: '12K+',
      icon: '📋'
    },
    {
      id: 5,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content scheduling and analytics.',
      category: 'marketing',
      price: '$35/month',
      features: [
        'Content scheduling',
        'AI content suggestions',
        'Performance analytics',
        'Multi-platform support',
        'Engagement optimization'
      ],
      rating: 4.5,
      users: '15K+',
      icon: '📱'
    },
    {
      id: 6,
      title: 'Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered customization and tracking.',
      category: 'finance',
      price: '$25/month',
      features: [
        'Automated invoice creation',
        'Payment tracking',
        'Custom templates',
        'Tax calculations',
        'Client management'
      ],
      rating: 4.8,
      users: '7K+',
      icon: '💰'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'customer-service', name: 'Customer Service' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? saasProducts 
    : saasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to boost productivity and efficiency for small to medium businesses." />
        <meta name="keywords" content="micro saas, AI tools, productivity software, business automation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SAAS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven tools designed to boost productivity and efficiency. 
            Choose from our collection of specialized micro SAAS applications.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{product.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Micro SAAS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Get up and running in minutes with our intuitive setup process and pre-configured templates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security with 99.9% uptime guarantee and regular security updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Growth</h3>
              <p className="text-gray-300">
                Scale your usage as your business grows with flexible pricing and feature upgrades.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Trusted by Thousands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                <div className="text-cyan-100">Active Users</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                <div className="text-cyan-100">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-cyan-100">User Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-cyan-100">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View All Products
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;