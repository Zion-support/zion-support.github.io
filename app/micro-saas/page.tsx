'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Users, DollarSign, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using AI.',
      category: 'Content',
      icon: Zap,
      features: [
        'AI-powered content creation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Bulk generation'
      ],
      price: '$29/month',
      rating: 4.8,
      users: '2.5K+'
    },
    {
      id: 2,
      title: 'Social Media Scheduler',
      description: 'Schedule and manage your social media posts across all platforms from one dashboard.',
      category: 'Social',
      icon: Users,
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Analytics dashboard',
        'Team collaboration',
        'Auto-posting'
      ],
      price: '$19/month',
      rating: 4.6,
      users: '1.8K+'
    },
    {
      id: 3,
      title: 'Email Marketing Tool',
      description: 'Create, send, and track email campaigns with advanced automation features.',
      category: 'Marketing',
      icon: TrendingUp,
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'A/B testing',
        'Analytics and reporting',
        'List management'
      ],
      price: '$39/month',
      rating: 4.7,
      users: '3.2K+'
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Streamline your project workflow with task management and team collaboration tools.',
      category: 'Productivity',
      icon: CheckCircle,
      features: [
        'Task management',
        'Team collaboration',
        'Time tracking',
        'File sharing',
        'Progress reporting'
      ],
      price: '$24/month',
      rating: 4.5,
      users: '1.5K+'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Track and analyze your business metrics with customizable dashboards and reports.',
      category: 'Analytics',
      icon: DollarSign,
      features: [
        'Custom dashboards',
        'Real-time data',
        'Automated reports',
        'Data visualization',
        'API integration'
      ],
      price: '$49/month',
      rating: 4.9,
      users: '4.1K+'
    },
    {
      id: 6,
      title: 'Customer Support',
      description: 'Manage customer inquiries and support tickets with AI-powered assistance.',
      category: 'Support',
      icon: Star,
      features: [
        'Ticket management',
        'AI chatbot',
        'Knowledge base',
        'Multi-channel support',
        'Performance analytics'
      ],
      price: '$34/month',
      rating: 4.4,
      users: '2.1K+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Content', name: 'Content' },
    { id: 'Social', name: 'Social Media' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Productivity', name: 'Productivity' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Support', name: 'Support' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to streamline your business operations. From content creation to analytics, we have the tools you need." />
        <meta name="keywords" content="micro SaaS, business tools, productivity software, content creation, social media management, email marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused business tools designed to solve specific problems and streamline your operations.
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
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
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
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{product.users} users</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold text-lg">{product.price}</div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                      Try Free <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Trusted by Thousands</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Micro SaaS Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.8</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our micro SaaS products today and see how they can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;