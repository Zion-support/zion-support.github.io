import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Zap, Brain, Shield, Cloud, Rocket, Globe, Heart, Crown, Sparkles, ArrowRight, Phone, Mail, MapPin, ExternalLink, Check, DollarSign, TrendingUp, Clock, Users, Target } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(services.map(s => s.category)))];
    return cats.sort();
  }, [services]);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange === 'low') matchesPrice = service.price <= 2000;
      else if (priceRange === 'medium') matchesPrice = service.price > 2000 && service.price <= 5000;
      else if (priceRange === 'high') matchesPrice = service.price > 5000;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => a.price - b.price);
  }, [services, searchQuery, selectedCategory, priceRange]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'AI & Sales': Brain,
      'Quantum & AI': Zap,
      'AI & Healthcare': Heart,
      'Blockchain & IoT': Shield,
      'AI & Cybersecurity': Shield,
      'IoT & Smart Cities': Globe,
      'AI & Legal Tech': Crown,
      'AI & Content': Sparkles,
      'AI & Edge Computing': Cloud
    };
    return iconMap[category] || Zap;
  };

  const getPriceRangeLabel = (price: number) => {
    if (price <= 2000) return { label: 'Starter', color: 'text-green-400 bg-green-400/10' };
    if (price <= 5000) return { label: 'Professional', color: 'text-blue-400 bg-blue-400/10' };
    return { label: 'Enterprise', color: 'text-purple-400 bg-purple-400/10' };
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 border-purple-400';
      case 'Advanced': return 'text-blue-400 border-blue-400';
      case 'Standard': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. Get transparent pricing and ROI information for all our services."
        canonical="/pricing"
        url="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Transparent pricing for our complete portfolio of innovative micro SAAS services, AI solutions, and revolutionary technology platforms. Find the perfect solution for your business needs and budget.
            </motion.p>
            
            {/* Pricing Tiers Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="bg-slate-800/50 p-6 rounded-xl border border-green-400/20">
                <div className="text-2xl font-bold text-green-400 mb-2">Starter</div>
                <div className="text-3xl font-bold mb-2">$1,299 - $2,000</div>
                <div className="text-sm text-slate-300">Perfect for small businesses and startups</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/20">
                <div className="text-2xl font-bold text-blue-400 mb-2">Professional</div>
                <div className="text-3xl font-bold mb-2">$2,001 - $5,000</div>
                <div className="text-sm text-slate-300">Ideal for growing businesses</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <div className="text-2xl font-bold text-purple-400 mb-2">Enterprise</div>
                <div className="text-3xl font-bold mb-2">$5,001+</div>
                <div className="text-sm text-slate-300">For large organizations and enterprises</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-slate-400" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-slate-800/70 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                <option value="all">All Prices</option>
                <option value="low">$1,299 - $2,000</option>
                <option value="medium">$2,001 - $5,000</option>
                <option value="high">$5,001+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const priceRange = getPriceRangeLabel(service.price);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-1"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wide text-cyan-300/70 font-medium mb-1">
                          {service.category}
                        </div>
                        {service.subcategory && (
                          <div className="text-xs text-slate-400">
                            {service.subcategory}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getInnovationColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${priceRange.color}`}>
                        {priceRange.label}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing & ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">Monthly Price</div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.pricingModel} billing
                      </div>
                    </div>
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">Expected ROI</div>
                      <div className="text-2xl font-bold text-green-400">
                        {service.roi}
                      </div>
                      <div className="text-xs text-slate-400">
                        Return on investment
                      </div>
                    </div>
                  </div>

                  {/* Market Comparison */}
                  <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-600/30">
                    <div className="text-sm text-slate-400 mb-2">Market Price Range</div>
                    <div className="text-lg font-semibold text-slate-200">{service.marketPrice}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Competitive pricing analysis
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="text-sm uppercase tracking-wide text-slate-400 mb-3">Key Features</div>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-xs text-slate-400 mt-2">
                          +{service.features.length - 5} more features included
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits & Use Cases */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Key Benefits</div>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Use Cases</div>
                      <div className="space-y-1">
                        {service.useCases.slice(0, 3).map((useCase, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-600/30">
                      <div className="text-sm uppercase tracking-wide text-slate-400 mb-3">Technical Specifications</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-slate-400 mb-1">Technology Stack</div>
                          <div className="text-slate-300">{service.technicalSpecs.technology.slice(0, 3).join(', ')}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">Uptime</div>
                          <div className="text-slate-300">{service.technicalSpecs.uptime}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">API Endpoints</div>
                          <div className="text-slate-300">{service.technicalSpecs.apiEndpoints}</div>
                        </div>
                        <div>
                          <div className="text-slate-400 mb-1">Security</div>
                          <div className="text-slate-300">{service.technicalSpecs.security.slice(0, 2).join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivery & Support */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                      <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-sm text-slate-400">Delivery</div>
                      <div className="text-sm font-medium text-slate-200">{service.estimatedDelivery}</div>
                    </div>
                    <div className="bg-slate-800/30 p-3 rounded-lg text-center">
                      <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-sm text-slate-400">Support</div>
                      <div className="text-sm font-medium text-slate-200 capitalize">{service.supportLevel}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400 border border-slate-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-3 h-3" />
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {service.contactInfo.email}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-white transition-all duration-200">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria, category filter, or price range.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team of experts is ready to help you choose the right solution and implement it successfully. Get a custom quote tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-400/20">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-slate-300 text-sm">+1 302 464 0950</p>
                <p className="text-xs text-slate-400 mt-1">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/20">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-slate-300 text-sm">kleber@ziontechgroup.com</p>
                <p className="text-xs text-slate-400 mt-1">Response within 2 hours</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-xs text-slate-400 mt-1">Schedule an in-person meeting</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-600/30">
              <h3 className="text-lg font-semibold mb-3">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Proven ROI and business impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Expert implementation and support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Custom solutions tailored to your needs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <p>Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">ziontechgroup.com</a></p>
              <p className="mt-2">All prices are in USD and subject to change. Contact us for volume discounts and enterprise pricing.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
