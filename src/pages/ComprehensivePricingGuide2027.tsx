import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Award, Settings, Phone, Mail, MapPin, ArrowRight, CheckCircle, Clock, Target, BarChart3, Calculator, TrendingDown, Crown, Sparkles } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [innovationLevel, setInnovationLevel] = useState('All');

  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];
  const innovationLevels = ['All', 'Basic', 'Advanced', 'Revolutionary'];

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.tags?.some(t => t.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'All') {
      switch (priceRange) {
        case 'Under $1K':
          filtered = filtered.filter(s => s.price < 1000);
          break;
        case '$1K - $3K':
          filtered = filtered.filter(s => s.price >= 1000 && s.price < 3000);
          break;
        case '$3K - $5K':
          filtered = filtered.filter(s => s.price >= 3000 && s.price < 5000);
          break;
        case '$5K - $10K':
          filtered = filtered.filter(s => s.price >= 5000 && s.price < 10000);
          break;
        case 'Over $10K':
          filtered = filtered.filter(s => s.price >= 10000);
          break;
      }
    }

    // Filter by innovation level
    if (innovationLevel !== 'All') {
      filtered = filtered.filter(s => s.innovationLevel === innovationLevel);
    }

    return filtered;
  }, [services, searchQuery, selectedCategory, priceRange, innovationLevel]);

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,000 - $3,000',
      description: 'Essential services for small businesses',
      features: ['Basic AI integration', 'Standard support', 'Core functionality'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Professional',
      price: '$3,000 - $8,000',
      description: 'Advanced solutions for growing companies',
      features: ['Advanced AI capabilities', 'Priority support', 'Custom integrations'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise',
      price: '$8,000 - $25,000',
      description: 'Revolutionary solutions for large enterprises',
      features: ['Cutting-edge technology', '24/7 dedicated support', 'Full customization'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { label: 'Total Services', value: services.length, icon: Zap },
    { label: 'Average ROI', value: '350%', icon: TrendingUp },
    { label: 'Revolutionary Services', value: services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Crown },
    { label: 'Categories', value: categories.length - 1, icon: Globe },
  ];

  const getPriceRange = (price: number) => {
    if (price < 1000) return 'Under $1K';
    if (price < 3000) return '$1K - $3K';
    if (price < 5000) return '$3K - $5K';
    if (price < 10000) return '$5K - $10K';
    return 'Over $10K';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Complete pricing guide for our AI, IT, and Micro SaaS services. Transparent pricing with ROI projections and flexible plans."
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"
          >
            <DollarSign className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            Comprehensive Pricing Guide 2027
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto mb-8"
          >
            Transparent pricing for our complete portfolio of AI-powered solutions, IT services, and innovative Micro SaaS platforms. 
            Every service includes detailed ROI projections and flexible implementation options.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Tiers</h2>
            <p className="text-slate-300">Choose the right level of service for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  {index === 0 && <Sparkles className="w-8 h-8 text-white" />}
                  {index === 1 && <TrendingUp className="w-8 h-8 text-white" />}
                  {index === 2 && <Crown className="w-8 h-8 text-white" />}
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 text-center mb-4">{tier.price}</div>
                <p className="text-slate-300 text-center mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Custom Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      {/* Search and Filters */}
      <section className="py-12 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  <option value="All">All Prices</option>
                  <option value="Under $1K">Under $1K</option>
                  <option value="$1K - $3K">$1K - $3K</option>
                  <option value="$3K - $5K">$3K - $5K</option>
                  <option value="$5K - $10K">$5K - $10K</option>
                  <option value="Over $10K">Over $10K</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level}>{level} Innovation</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Pricing Details</h2>
            <p className="text-slate-300">Detailed pricing for {filteredServices.length} services with ROI projections</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-400/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        service.innovationLevel === 'Revolutionary' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                          : service.innovationLevel === 'Advanced'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {service.innovationLevel}
                      </span>
                      <span className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs font-medium rounded">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">per month</div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{service.roi}</div>
                    <div className="text-xs text-slate-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{service.estimatedDelivery}</div>
                    <div className="text-xs text-slate-400">Delivery</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm text-slate-400">
                    <strong>Market Price Range:</strong> {service.marketPrice}
                  </div>
                  <div className="text-sm text-slate-400">
                    <strong>Support Level:</strong> {service.supportLevel}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id.replace(/-/g, '-')}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/request-quote"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">ROI Calculator</h2>
            <p className="text-slate-300 mb-8">
              Calculate the potential return on investment for our services. Most clients see ROI within 6-12 months.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-2xl font-bold text-green-400 mb-2">350%</div>
                <div className="text-sm text-slate-300">Average ROI</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">6-12</div>
                <div className="text-sm text-slate-300">Months to ROI</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">$50K+</div>
                <div className="text-sm text-slate-300">Average Savings</div>
              </div>
            </div>

            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>

      {/* Contact and CTA */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">
              Our team of experts is ready to help you choose the right services and implement solutions that drive real business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
              <h3 className="font-semibold mb-2">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven ROI with 350% average return</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert implementation and support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Flexible pricing and payment options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Ongoing optimization and updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
