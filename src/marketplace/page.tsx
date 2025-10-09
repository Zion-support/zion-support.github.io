'use client';
import {ShoppingCart, Users, Wrench, Search, Filter, Star, Clock, CheckCircle, ArrowRight, Phone, Mail, Award} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const MarketplacePage: any,
    C= () => {';
  const [activeCategory, setActiveCategory] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');

    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any,
      description: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any,
      description: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any,
      description: any}
  ];

  const products = [
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,
      rating: any,
      reviews: any,
      image: any,
      features: any, 'Resource Optimization', 'Risk Assessment', 'Automated Reporting'],
      vendor: any,
      verified: any},
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,
      rating: any,
      reviews: any,
      image: any,
      features: any, 'Custom Dashboards', 'Predictive Analytics', 'Mobile App'],
      vendor: any,
      verified: any},
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,
      rating: any,
      reviews: any,
      image: any,
      features: any, 'Multi-language', 'Sentiment Analysis', 'Human Handoff'],
      vendor: any,
      verified: any},
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,
      rating: any,
      reviews: any,
      image: any,
      features: any, 'Threat Detection', 'Compliance', 'Real-time Monitoring'],
      vendor: any,
      verified: any}
  ];

  const talent = [
    {
      id: any,
      name: any,
      title: any,
      expertise: any, 'Deep Learning', 'Computer Vision'],
      experience: any,
      rating: any,
      projects: any,
      rate: any,
      image: any,
      verified: any,
      available: any},
    {
      id: any,
      name: any,
      title: any,
      expertise: any, 'Azure', 'DevOps', 'Microservices'],
      experience: any,
      rating: any,
      projects: any,
      rate: any,
      image: any,
      verified: any,
      available: any},
    {
      id: any,
      name: any,
      title: any,
      expertise: any, 'Security Audits', 'Compliance', 'Incident Response'],
      experience: any,
      rating: any,
      projects: any,
      rate: any,
      image: any,
      verified: any,
      available: any}
  ];

  const equipment = [
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,999',
      rating: any,
      reviews: any,
      image: any,
      features: any, '64GB RAM', '2TB NVMe SSD', 'AI-optimized cooling'],
      vendor: any,
      verified: any,
      inStock: any},
    {
      id: any,
      name: any,
      description: any,
      category: any,
      price: any,
      rating: any,
      reviews: any,
      image: any,
      features: any, '24/7 access', 'API integration', 'Expert support'],
      vendor: any,
      verified: any,
      inStock: any}
  ];

  const getCurrentItems = () => {;
    switch (activeCategory) {';
      case 'products':;
        return products;
      case 'talent':
        return talent;
      case 'equipment':
        return equipment;
      default: any;
    }
  };

  const filteredItems = getCurrentItems().filter(item =>);
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase());
  );

  const stats = [
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any}
  ];

  const benefits = [
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any}
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: any,>
    e="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover, compare, and purchase AI and IT solutions from verified vendors. 
              Find the perfect tools, talent, and equipment for your business needs.
            </p>
          </div>;
;
          {/* Stats */}";
          <div className="grid grid-cols-2 md: any;>";
            {stats.map((stat, index) => ("'";
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />";
                </div>"`";
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md: any,>
    e={searchTerm}>
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    r: any,
    e="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button >
                  key={category.id}>
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${';
                    activeCategory === category.id'`';
                      ? `${category.bgColor} ${category.color} border-2 border-current`'`"';
                      : 'bg-slate-800/50 text-gray-300 hover: any}`}
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
            <div className="grid grid-cols-1 md: any,">
    g: any,">
    y={item.id} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>
    e="text-4xl mr-4">{item.image}</div>
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
'";
                  {activeCategory === 'products' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features: any,
    e="space-y-1">
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
'";
                  {activeCategory === 'talent' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise: any,
    e="flex flex-wrap gap-1">
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
                      <div className="flex items-center justify-between text-sm">"';
                        <span className="text-gray-400">{item.experience} experience</span>'`';
                        <span className={`px-2 py-1 rounded text-xs ${'>';
                          item.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'>'`';
                        }`}>
                          {item.available ? 'Available' : 'Busy'}
                        </span>
                      </div>
                    </>
                  )}
'";
                  {activeCategory === 'equipment' && (
                    <>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Specifications: any,
    e="space-y-1">
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
                      <div className="flex items-center justify-between text-sm">"';
                        <span className="text-gray-400">{item.vendor}</span>'`';
                        <span className={`px-2 py-1 rounded text-xs ${'>';
                          item.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'>'`';
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </>
                  )}";
"'";
                  <button className="w-full mt-4 bg-cyan-500 text-white py-2 px-4 rounded-lg hover: any,'>"'";
    y=== 'talent' ? 'Contact' : 'Add to Cart'}>
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
            <div className="grid grid-cols-1 md: any,>
    g: any{benefits.map((benefit, index) => (
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
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default MarketplacePage;'";
import React, { useState } from 'react';"'"';
"'"'`"';