'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { services, serviceCategories, getServicesByCategory, getPopularServices } from '../data/services';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.monthly - b.pricing.monthly;
      case 'price-high':
        return b.pricing.monthly - a.pricing.monthly;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.pricing.monthly - a.pricing.monthly;
    }
  });

  const formatPrice = (pricing: any) => {
    if (pricing.custom) return 'Custom Pricing';
    if (pricing.monthly === 0) return 'Contact for Pricing';
    return `$${pricing.monthly.toLocaleString()}/month`;
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = serviceCategories.find(cat => cat.name === category);
    return categoryData?.icon || '⚙️';
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Our Services">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-text">
              Comprehensive AI and IT solutions designed to transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceCategories.map((category) => (
                <div key={category.id} className="cyber-card hologram-card p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="text-white font-semibold">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} services</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services, features, or use cases..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      <option value="All" className="bg-slate-800">All Categories</option>
                      {serviceCategories.map((category) => (
                        <option key={category.id} value={category.name} className="bg-slate-800">
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white neon-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white neon-text">
                  {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
                </h2>
                <p className="text-gray-300 mt-2">
                  {sortedServices.length} service{sortedServices.length !== 1 ? 's' : ''} found
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex bg-slate-800/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
            
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedServices.map((service, index) => (
                <div key={service.id} className={`cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group relative ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                }`}>
                  {service.status === 'Popular' && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium neon-glow">
                      Popular
                    </div>
                  )}
                  
                  <div className={`flex items-start mb-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="bg-cyan-500/20 p-4 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <div className="text-3xl">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-gray-400 text-sm">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="cyber-card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-semibold text-white">ROI</span>
                        </div>
                        <p className="text-xs text-gray-300">{service.roi.timeToValue} to value</p>
                        <p className="text-xs text-green-400">{service.roi.averageSavings} savings</p>
                      </div>
                      <div className="cyber-card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-semibold text-white">Setup</span>
                        </div>
                        <p className="text-xs text-gray-300">{service.deployment.setupTime}</p>
                        <p className="text-xs text-blue-400">{service.deployment.cloud ? 'Cloud' : 'On-premise'}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                        {formatPrice(service.pricing)}
                      </div>
                      {service.pricing.yearly > 0 && (
                        <div className="text-sm text-gray-300">
                          Save ${((service.pricing.monthly * 12) - service.pricing.yearly).toLocaleString()} with annual billing
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 cyber-button text-center py-3 group-hover:scale-105 transition-all duration-300">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
                      </button>
                      <button className="flex-1 border border-cyan-500/30 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                    
                    {service.trial.available && (
                      <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">Free Trial Available</span>
                        </div>
                        <p className="text-xs text-gray-300 mt-1">{service.trial.duration} trial with {service.trial.features.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs. 
                Our experts are ready to help you achieve unprecedented growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="cyber-card p-6">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-4">Get detailed information</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">Instant support available</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                    Start Chat
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-center py-4 px-8 group-hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </button>
                <button className="border border-cyan-500/30 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Website</p>
                      <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                      <p className="text-gray-300 text-sm">$50M+ in client savings, 95% automation success rate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Expert Support</h4>
                      <p className="text-gray-300 text-sm">Round-the-clock assistance from our technical team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cutting-Edge Technology</h4>
                      <p className="text-gray-300 text-sm">Latest AI and IT solutions for maximum efficiency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Custom Solutions</h4>
                      <p className="text-gray-300 text-sm">Tailored to your specific business needs and goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
