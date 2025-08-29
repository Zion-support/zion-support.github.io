import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Shield, Zap, Brain, Rocket, Heart, Globe, Lock, TrendingUp, Award, Phone, Mail, MapPin, ExternalLink, ArrowRight, DollarSign, Clock, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_SERVICES_2025, InnovativeService } from '@/data/innovativeServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2025.map(s => s.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: 'Over $10,000' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (max) {
          return service.price >= min && service.price <= max;
        } else {
          return service.price >= min;
        }
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity': return Shield;
      case 'Quantum AI': return Brain;
      case 'AI & Healthcare': return Heart;
      case 'Green IT': return Globe;
      case 'Space Technology': return Rocket;
      case 'AI & Finance': return TrendingUp;
      case 'IoT & Edge Computing': return Zap;
      case 'Blockchain': return Lock;
      case 'Digital Twin': return Rocket;
      case 'AI & Content': return Brain;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Cybersecurity': return 'from-red-600 to-pink-600';
      case 'Quantum AI': return 'from-purple-600 to-indigo-600';
      case 'AI & Healthcare': return 'from-green-600 to-emerald-600';
      case 'Green IT': return 'from-green-500 to-teal-500';
      case 'Space Technology': return 'from-blue-600 to-cyan-600';
      case 'AI & Finance': return 'from-yellow-600 to-orange-600';
      case 'IoT & Edge Computing': return 'from-blue-500 to-indigo-500';
      case 'Blockchain': return 'from-purple-500 to-pink-500';
      case 'Digital Twin': return 'from-cyan-500 to-blue-500';
      case 'AI & Content': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getPriceTier = (price: number) => {
    if (price < 2000) return { tier: 'Starter', color: 'from-green-500 to-emerald-500' };
    if (price < 5000) return { tier: 'Professional', color: 'from-blue-500 to-cyan-500' };
    if (price < 10000) return { tier: 'Enterprise', color: 'from-purple-500 to-pink-500' };
    return { tier: 'Premium', color: 'from-orange-500 to-red-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Complete pricing information for all our AI, IT, and Micro SaaS services. Transparent pricing with detailed features, benefits, and ROI analysis."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Transparent pricing for all our innovative services. Compare features, understand ROI, and choose the perfect solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>ROI Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Feature Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Market Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pricing Overview
            </h2>
            <p className="text-slate-400">
              {filteredServices.length} services available across different pricing tiers
            </p>
          </div>

          {/* Pricing Tiers Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { tier: 'Starter', range: 'Under $2,000', count: filteredServices.filter(s => s.price < 2000).length, color: 'from-green-500 to-emerald-500' },
              { tier: 'Professional', range: '$2,000 - $5,000', count: filteredServices.filter(s => s.price >= 2000 && s.price < 5000).length, color: 'from-blue-500 to-cyan-500' },
              { tier: 'Enterprise', range: '$5,000 - $10,000', count: filteredServices.filter(s => s.price >= 5000 && s.price < 10000).length, color: 'from-purple-500 to-pink-500' },
              { tier: 'Premium', range: 'Over $10,000', count: filteredServices.filter(s => s.price >= 10000).length, color: 'from-orange-500 to-red-500' }
            ].map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${tier.color} p-6 rounded-2xl text-center text-white`}
              >
                <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                <p className="text-sm opacity-90 mb-3">{tier.range}</p>
                <div className="text-3xl font-bold">{tier.count}</div>
                <p className="text-sm opacity-90">Services</p>
              </motion.div>
            ))}
          </div>

          {/* Services List */}
          <div className="space-y-6">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const priceTier = getPriceTier(service.price);
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-900/60 backdrop-blur border border-cyan-400/15 rounded-2xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                          <CategoryIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-1">
                            {service.category}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-300 max-w-3xl">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${priceTier.color} text-white mb-2`}>
                          {priceTier.tier}
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                          <span className="text-sm text-slate-400">/month</span>
                        </div>
                        <div className="text-sm text-green-400 font-semibold">
                          ROI: {service.roi}
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.features.length}</div>
                        <div className="text-xs text-slate-400">Features</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.estimatedDelivery}</div>
                        <div className="text-xs text-slate-400">Delivery</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.supportLevel}</div>
                        <div className="text-xs text-slate-400">Support</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.innovationLevel}</div>
                        <div className="text-xs text-slate-400">Innovation</div>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          <span>Show Less</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          <span>Show Details</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700 bg-slate-800/30"
                    >
                      <div className="p-6 space-y-6">
                        {/* Features and Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                            <div className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                            <div className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                  <TrendingUp className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Use Cases and Target Audience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                            <div className="space-y-2">
                              {service.useCases.map((useCase, idx) => (
                                <div key={idx} className="text-sm text-slate-300 bg-slate-700/50 px-3 py-2 rounded">
                                  {useCase}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                            <div className="space-y-2">
                              {service.targetAudience.map((audience, idx) => (
                                <div key={idx} className="text-sm text-slate-300 bg-slate-700/50 px-3 py-2 rounded">
                                  {audience}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Technical Specifications */}
                        {service.technicalSpecs && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technical Specifications</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-slate-700/50 p-4 rounded-lg">
                                <h5 className="font-semibold text-white mb-2">Technology</h5>
                                <div className="space-y-1">
                                  {service.technicalSpecs.technology.map((tech, idx) => (
                                    <span key={idx} className="inline-block bg-slate-600 px-2 py-1 rounded text-xs mr-2 mb-1">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="bg-slate-700/50 p-4 rounded-lg">
                                <h5 className="font-semibold text-white mb-2">Integrations</h5>
                                <div className="space-y-1">
                                  {service.technicalSpecs.integrations.map((integration, idx) => (
                                    <span key={idx} className="inline-block bg-slate-600 px-2 py-1 rounded text-xs mr-2 mb-1">
                                      {integration}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="bg-slate-700/50 p-4 rounded-lg">
                                <h5 className="font-semibold text-white mb-2">Performance</h5>
                                <div className="space-y-2 text-sm text-slate-300">
                                  <div>API Endpoints: {service.technicalSpecs.apiEndpoints}</div>
                                  <div>Uptime: {service.technicalSpecs.uptime}</div>
                                  <div>Security: {service.technicalSpecs.security.join(', ')}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Market Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Market Analysis</h4>
                            <div className="space-y-3">
                              {service.marketSize && (
                                <div className="bg-slate-700/50 p-3 rounded">
                                  <div className="text-sm text-slate-400">Market Size</div>
                                  <div className="text-white font-semibold">{service.marketSize}</div>
                                </div>
                              )}
                              {service.competitors && (
                                <div className="bg-slate-700/50 p-3 rounded">
                                  <div className="text-sm text-slate-400">Key Competitors</div>
                                  <div className="text-white font-semibold">{service.competitors.join(', ')}</div>
                                </div>
                              )}
                              {service.uniqueValue && (
                                <div className="bg-slate-700/50 p-3 rounded">
                                  <div className="text-sm text-slate-400">Unique Value</div>
                                  <div className="text-white font-semibold">{service.uniqueValue}</div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Contact and Action */}
                        <div className="border-t border-slate-700 pt-6">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-center md:text-left">
                              <div className="text-sm text-slate-400 mb-2">Ready to get started?</div>
                              <div className="flex items-center gap-4 text-sm">
                                <a href={`tel:${service.contactInfo.phone}`} className="text-cyan-300 hover:text-cyan-200">
                                  {service.contactInfo.phone}
                                </a>
                                <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-300 hover:text-cyan-200">
                                  {service.contactInfo.email}
                                </a>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <a
                                href={`tel:${service.contactInfo.phone}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                              >
                                <Phone className="h-4 w-4" />
                                Get Quote
                              </a>
                              <a
                                href={service.contactInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team of experts is here to help you find the perfect solution for your business needs. 
              Get personalized recommendations and pricing quotes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-300">
                <MapPin className="h-5 w-5" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
