'use client';
import React, { useState, useEffect } from 'react';
import { allServices, microSaasServices, aiServices, itServices, emergingTechServices, Service } from '../data/services';
import { CheckCircle, Star, Zap, Shield, Brain, Cloud, Cpu, ArrowRight, Phone, Mail, MapPin, Sparkles, TrendingUp, Users, Globe, Lock, Target, BarChart, Settings, Code, Database, Smartphone, Monitor, Server, Link as LinkIcon, Heart, DollarSign, Package, MessageCircle, FileText, Calendar, CheckSquare, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Brain as BrainIcon, Cloud as CloudIcon, Cpu as CpuIcon, ExternalLink, Play, BookOpen, Download, Search } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: GlobeIcon, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: CpuIcon, count: microSaasServices.length },
    { id: 'ai', name: 'AI Services', icon: BrainIcon, count: aiServices.length },
    { id: 'it', name: 'IT Services', icon: CloudIcon, count: itServices.length },
    { id: 'emerging', name: 'Emerging Tech', icon: ZapIcon, count: emergingTechServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'micro-saas': return '⚡';
      case 'ai': return '🤖';
      case 'it': return '☁️';
      case 'emerging': return '🚀';
      default: return '💼';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'micro-saas': return 'from-purple-500 to-pink-500';
      case 'ai': return 'from-blue-500 to-cyan-500';
      case 'it': return 'from-green-500 to-emerald-500';
      case 'emerging': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getPricingTier = (price: number) => {
    if (price < 100) return 'Basic';
    if (price < 500) return 'Professional';
    return 'Enterprise';
  };

  const getPricingColor = (price: number) => {
    if (price < 100) return 'text-green-400';
    if (price < 500) return 'text-blue-400';
    return 'text-purple-400';
  };

  const stats = [
    { number: '50+', label: 'Services Available', icon: Settings },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      {/* Header */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Comprehensive Technology Solutions
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent holographic-text">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From AI-powered micro SAAS solutions to enterprise IT services and cutting-edge emerging technologies. 
              We provide comprehensive technology solutions to transform your business.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="cyber-card text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`cyber-card group hover:scale-105 transition-all duration-500 ${
                service.popular ? 'ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/25' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{getCategoryIcon(service.category)}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.shortDescription}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className={`text-2xl font-bold ${getPricingColor(service.pricing.pro)}`}>
                      ${service.pricing.pro}
                    </span>
                    <span className="text-gray-400">/month</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {getPricingTier(service.pricing.pro)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    From ${service.pricing.basic}/mo to ${service.pricing.enterprise}/mo
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full cyber-button text-center py-3 group-hover:scale-105 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {service.demoUrl && (
                      <a
                        href={service.demoUrl}
                        className="flex-1 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm flex items-center justify-center space-x-1"
                      >
                        <Play className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                    
                    {service.documentationUrl && (
                      <a
                        href={service.documentationUrl}
                        className="flex-1 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm flex items-center justify-center space-x-1"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Docs</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Setup: {service.setupTime}</span>
                    <span>Support: {service.supportLevel}</span>
                  </div>
                  {service.freeTrial && (
                    <div className="mt-2 text-center">
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                        Free Trial Available
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="cyber-button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="cyber-card text-center">
          <div className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive technology solutions can help you achieve 
              your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
            <p className="text-gray-300 mb-4">+1 302 464 0950</p>
            <p className="text-sm text-gray-400">24/7 Emergency Support</p>
          </div>
          
          <div className="cyber-card text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
            <p className="text-sm text-gray-400">Response within 2 hours</p>
          </div>
          
          <div className="cyber-card text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
            <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
            <p className="text-sm text-gray-400">Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;