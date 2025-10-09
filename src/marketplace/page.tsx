import {ShoppingCart, Users, Wrench, Search, Filter, Star, Clock, CheckCircle, ArrowRight, Phone, Mail, Award} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React, { useState } from 'react';

'use client';

const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');

  const _categories = [
    {
      id: 'products',
      name: 'Products',
      icon: ShoppingCart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'AI-powered software products and solutions'
    },
    {
      id: 'talent',
      name: 'Talent',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Expert professionals and consultants'
    },
    {
      id: 'equipment',
      name: 'Equipment',
      icon: Wrench,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Hardware and infrastructure solutions'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      category: 'AI Tools',
      price: '$49/month',
      rating: 4.9,
      reviews: 127,
      image: '📊',
      features: ['AI Planning', 'Resource Optimization', 'Risk Assessment', 'Automated Reporting'],
      vendor: 'Zion Tech Group',
      verified: true
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with customizable dashboards and reports',
      category: 'Analytics',
      price: '$79/month',
      rating: 4.8,
      reviews: 89,
      image: '📈',
      features: ['Real-time Data', 'Custom Dashboards', 'Predictive Analytics', 'Mobile App'],
      vendor: 'DataFlow Solutions',
      verified: true
    },
    {
      id: 3,
      name: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing',
      category: 'Customer Service',
      price: '$29/month',
      rating: 4.7,
      reviews: 203,
      image: '🤖',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Human Handoff'],
      vendor: 'SupportAI Inc',
      verified: true
    },
    {
      id: 4,
      name: 'Quantum Security Suite',
      description: 'Next-generation cybersecurity powered by quantum computing principles',
      category: 'Security',
      price: '$199/month',
      rating: 4.9,
      reviews: 45,
      image: '🔒',
      features: ['Quantum Encryption', 'Threat Detection', 'Compliance', 'Real-time Monitoring'],
      vendor: 'QuantumSec',
      verified: true
    }
  ];

  const talent = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      experience: '8 years',
      rating: 4.9,
      projects: 45,
      rate: '$150/hour',
      image: '👩‍💼',
      verified: true,
      available: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Cloud Architecture Expert',
      expertise: ['AWS', 'Azure', 'DevOps', 'Microservices'],
      experience: '12 years',
      rating: 4.8,
      projects: 67,
      rate: '$120/hour',
      image: '👨‍💻',
      verified: true,
      available: true
    },
    {
      id: 3,
      name: 'Lisa Park',
      title: 'Cybersecurity Specialist',
      expertise: ['Penetration Testing', 'Security Audits', 'Compliance', 'Incident Response'],
      experience: '10 years',
      rating: 4.9,
      projects: 89,
      rate: '$180/hour',
      image: '👩‍🔬',
      verified: true,
      available: false
    }
  ];

  const equipment = [
    {
      id: 1,
      name: 'AI Workstation Pro',
      description: 'High-performance workstation optimized for AI development and training',
      category: 'Hardware',
      price: '$4,999',
      rating: 4.8,
      reviews: 23,
      image: '💻',
      features: ['RTX 4090 GPU', '64GB RAM', '2TB NVMe SSD', 'AI-optimized cooling'],
      vendor: 'TechWorkstations',
      verified: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Quantum Computing Access',
      description: 'Cloud access to quantum computing resources for research and development',
      category: 'Cloud Services',
      price: '$500/month',
      rating: 4.7,
      reviews: 15,
      image: '⚛️',
      features: ['100 qubits', '24/7 access', 'API integration', 'Expert support'],
      vendor: 'QuantumCloud',
      verified: true,
      inStock: true
    }
  ];

  const getCurrentItems = () => {
    switch (activeCategory) {
      case 'products':
        return products;
      case 'talent':
        return talent;
      case 'equipment':
        return equipment;
      default:
        return [];
    }
  };

  const filteredItems = getCurrentItems().filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      icon: ShoppingCart,
      value: '500+',
      label: 'Products Available',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Expert Professionals',
      color: 'text-green-400'
    },
    {
      icon: Wrench,
      value: '100+',
      label: 'Equipment Solutions',
      color: 'text-purple-400'
    },
    {
      icon: Star,
      value: '4.8',
      label: 'Average Rating',
      color: 'text-yellow-400'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Verified Vendors',
      description: 'All vendors are thoroughly vetted and verified'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security for all marketplace transactions'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all marketplace activities'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all purchases'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Zion Tech Marketplace
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover, compare, and purchase AI and IT solutions from verified vendors. 
              Find the perfect tools, talent, and equipment for your business needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <button className="px-6 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white hover:bg-slate-700 transition-colors flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} ({filteredItems.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{item.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        {item.verified && (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="mr-2">{item.category}</span>
                        {item.vendor && <span>• {item.vendor}</span>}
                      </div>
                    </div>
                  </div>

                  {activeCategory === 'products' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.reviews} reviews)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.price}</div>
                      </div>
                    </>
                  )}

                  {activeCategory === 'talent' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.expertise.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.projects} projects)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.rate}</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{item.experience} experience</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {item.available ? 'Available' : 'Busy'}
                        </span>
                      </div>
                    </>
                  )}

                  {activeCategory === 'equipment' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Specifications:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.reviews} reviews)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.price}</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{item.vendor}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </>
                  )}

                  <button className="w-full mt-4 bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                    {activeCategory === 'talent' ? 'Contact' : 'Add to Cart'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Marketplace?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Find Your Perfect Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Browse our marketplace to discover the tools, talent, and equipment you need 
              to transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Shopping
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketplacePage;
