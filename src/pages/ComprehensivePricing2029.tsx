import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Star,
  DollarSign,
  Zap,
  Brain,
  Server,
  Code,
  Rocket,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Target,
  Lightbulb,
  BarChart3,
  Lock,
  Cloud,
  Database,
  Network,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';
import { innovativeServices2029, ServiceData } from '../data/2029-innovative-ai-saas-services';

const ComprehensivePricing2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'AI', 'IT', 'MicroSaaS', 'EmergingTech'];
  const industries = ['all', 'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 'Government', 'Energy', 'Retail', 'Transportation'];
  const priceRanges = ['all', 'under-5k', '5k-15k', '15k-50k', '50k-plus'];

  const filteredServices = innovativeServices2029.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesIndustry = selectedIndustry === 'all' || service.industries.includes(selectedIndustry);
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-5k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 5000) ||
      (priceRange === '5k-15k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 15000) ||
      (priceRange === '15k-50k' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 15000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 50000) ||
      (priceRange === '50k-plus' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 50000);

    return matchesSearch && matchesCategory && matchesIndustry && matchesPrice;
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <Brain className="w-5 h-5" />;
      case 'IT':
        return <Server className="w-5 h-5" />;
      case 'MicroSaaS':
        return <Code className="w-5 h-5" />;
      case 'EmergingTech':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'from-blue-500 to-cyan-500';
      case 'IT':
        return 'from-green-500 to-emerald-500';
      case 'MicroSaaS':
        return 'from-purple-500 to-pink-500';
      case 'EmergingTech':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getPriceColor = (price: string) => {
    const numPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (numPrice < 5000) return 'text-green-400';
    if (numPrice < 15000) return 'text-blue-400';
    if (numPrice < 50000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing 2029 - Zion Tech Group | AI, IT & SaaS Solutions Pricing</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive 2029 pricing for AI services, IT solutions, micro SaaS platforms, and emerging technology innovations. Transparent pricing for all business sizes." />
        <meta name="keywords" content="AI services pricing, IT solutions cost, micro SaaS pricing, emerging technology pricing, Zion Tech Group pricing 2029" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2029" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                Transparent Pricing 2029
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Pricing</span> 2029
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transparent, competitive pricing for all our innovative AI, IT, and Micro SaaS services. 
                Choose the plan that fits your business needs and budget.
              </p>

              {/* Pricing Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">$500</div>
                  <div className="text-gray-400">Starting Price</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <div className="text-gray-400">Pricing Tiers</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400">Services Available</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Included</div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <Link
                  to="/innovative-services-showcase-2029"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Industry Filter */}
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>
                      {range === 'all' ? 'All Prices' : 
                       range === 'under-5k' ? 'Under $5K' :
                       range === '5k-15k' ? '$5K - $15K' :
                       range === '15k-50k' ? '$15K - $50K' : '$50K+' }
                    </option>
                  ))}
                </select>

                {/* Results Count */}
                <div className="flex items-center justify-center px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg">
                  <span className="text-white text-sm">
                    {filteredServices.length} services found
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Pricing Overview
              </h2>
              <p className="text-gray-400 text-lg">
                Compare pricing across all our innovative services and choose the perfect fit for your business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">{service.category}</div>
                        <div className={`text-lg font-bold ${getPriceColor(service.pricing.starter)}`}>
                          {service.pricing.starter}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Pricing Tiers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Starter:</span>
                        <span className="text-green-400 font-semibold">{service.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Professional:</span>
                        <span className="text-blue-400 font-semibold">{service.pricing.professional}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Enterprise:</span>
                        <span className="text-purple-400 font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2 mb-4">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                    >
                      {expandedService === service.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          View Details
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700/50 bg-slate-900/50"
                    >
                      <div className="p-6 space-y-6">
                        {/* Full Pricing */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                            Complete Pricing
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                              <span className="text-gray-300">Starter</span>
                              <span className="text-green-400 font-bold">{service.pricing.starter}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                              <span className="text-gray-300">Professional</span>
                              <span className="text-blue-400 font-bold">{service.pricing.professional}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                              <span className="text-gray-300">Enterprise</span>
                              <span className="text-purple-400 font-bold">{service.pricing.enterprise}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                              <span className="text-gray-300">Custom</span>
                              <span className="text-orange-400 font-bold">{service.pricing.custom}</span>
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start text-sm text-gray-300">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-purple-400" />
                            Use Cases
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.useCases.slice(0, 3).map((useCase, useCaseIndex) => (
                              <div key={useCaseIndex} className="flex items-start text-sm text-gray-300">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-slate-700/50">
                          <Link
                            to="/contact"
                            className="w-full flex items-center justify-center py-3 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                          >
                            <ArrowRight className="w-5 h-5 mr-2" />
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedIndustry('all');
                    setPriceRange('all');
                  }}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Custom Pricing?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Our team is ready to create a custom pricing plan tailored to your specific business needs and requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-green-400 font-semibold">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Available Mon-Fri, 9AM-6PM EST</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 font-semibold">364 E Main St STE 1008</p>
                  <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricing2029;