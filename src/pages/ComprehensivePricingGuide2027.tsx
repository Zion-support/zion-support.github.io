import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, DollarSign, TrendingUp, Users, Clock, Shield, Zap, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/innovativeServices2025';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedTier !== 'all') {
      const [minPrice, maxPrice] = selectedTier.split('-').map(p => parseInt(p.replace('$', '').replace('+', '9999')));
      filtered = filtered.filter(service => service.price >= minPrice && service.price <= maxPrice);
    }

    return filtered;
  }, [selectedCategory, selectedTier]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return Zap;
      case 'IT Services':
        return Shield;
      case 'Micro SaaS':
        return TrendingUp;
      case 'Emerging Tech':
        return Star;
      default:
        return DollarSign;
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return `${currency}${price.toLocaleString()}`;
  };

  const getPricingTier = (price: number) => {
    if (price <= 199) return 'Starter';
    if (price <= 599) return 'Professional';
    return 'Enterprise';
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Starter':
        return 'bg-green-100 text-green-800';
      case 'Professional':
        return 'bg-blue-100 text-blue-800';
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT, and Micro SaaS services. Find the perfect solution for your business needs with transparent pricing and ROI guarantees."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Pricing Guide 2027
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transparent pricing for all our innovative AI, IT, Micro SaaS, and Emerging Technology services. 
            Find the perfect solution for your business needs and budget.
          </motion.p>
          
          {/* Contact Information Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Phone className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-5 h-5 mx-auto mb-2 text-green-400" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                <p className="text-white font-semibold">Middletown, DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Tiers Overview
            </h2>
            <p className="text-xl text-gray-300">
              Choose the pricing tier that best fits your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <span className="text-sm text-gray-400">
                    Services in this tier: {INNOVATIVE_SERVICES_2025.filter(s => getPricingTier(s.price) === tier.name).length}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Tier Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Filter by Price Tier</label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Price Tiers</option>
                  <option value="0-199">Starter ($49-199)</option>
                  <option value="200-599">Professional ($199-599)</option>
                  <option value="600-9999">Enterprise ($599+)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detailed Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive pricing for all our innovative services
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Tier</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">AI Score</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredServices.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                            {getCategoryIcon(service.category)({ className: 'w-5 h-5 text-white' })}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{service.title}</div>
                            <div className="text-sm text-gray-400">{service.subcategory}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {service.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          <div className="font-semibold">{formatPrice(service.price, service.currency)}</div>
                          <div className="text-gray-400 text-xs">per month</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${getTierColor(getPricingTier(service.price))}`}>
                          {getPricingTier(service.price)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-sm text-white">{service.aiScore}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-sm text-white">{service.rating}</span>
                          <span className="text-xs text-gray-400 ml-1">({service.reviewCount})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <a
                            href={service.website}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${service.contactEmail}`}
                            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/20 transition-colors"
                          >
                            Contact
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-gray-300">
              Calculate the return on investment for our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
              <p className="text-4xl font-bold text-green-400 mb-2">350%</p>
              <p className="text-gray-300">Within 12 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Time to Value</h3>
              <p className="text-4xl font-bold text-blue-400 mb-2">3-6</p>
              <p className="text-gray-300">Weeks average</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Success Rate</h3>
              <p className="text-4xl font-bold text-purple-400 mb-2">95%</p>
              <p className="text-gray-300">Customer satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
