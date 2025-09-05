import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Star, TrendingUp, DollarSign, Clock, Users, 
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles, 
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List
} from 'lucide-react';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-v2';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';

export default function Revolutionary2026Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-low');

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2
  ];

  // Filter services based on category and price
  const filteredServices = useMemo(() => {
    let filtered = all2026Services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') {
          return service.category.includes('AI') || service.category.includes('Machine Learning');
        } else if (selectedCategory === 'quantum') {
          return service.category.includes('Quantum') || service.category.includes('Space');
        } else if (selectedCategory === 'emerging') {
          return service.category.includes('Emerging') || service.category.includes('Technology');
        } else if (selectedCategory === 'enterprise') {
          return service.category.includes('Enterprise') || service.category.includes('Business');
        }
        return true;
      });
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceA - priceB;
      }
      if (sortBy === 'price-high') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceB - priceA;
      }
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popularity') return b.customers - a.customers;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy, all2026Services]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Technologies', icon: '✨', count: all2026Services.filter(s => s.category.includes('Emerging') || s.category.includes('Technology')).length },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('Business')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'name', name: 'Name A-Z' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: all2026Services.length,
    averagePrice: all2026Services.reduce((acc, service) => {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, '')) || 0;
      return acc + price;
    }, 0) / all2026Services.length,
    lowestPrice: Math.min(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) || 0)),
    highestPrice: Math.max(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) || 0)),
    popularServices: all2026Services.filter(s => s.popular).length
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity=&quot;extreme&quot; 
      colorScheme=&quot;neural-network&quot;
      particleCount={500}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
      enableNeuralNetwork={true}
    >
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Revolutionary 2026 Pricing - Zion Tech Group | Competitive AI, Quantum & Emerging Tech Pricing</title>
          <meta name=&quot;description&quot; content=&quot;Discover competitive pricing for Zion Tech Group's revolutionary 2026 services: AI, quantum computing, emerging technologies, and enterprise solutions. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;2026 pricing, AI services pricing, quantum computing pricing, emerging technologies pricing, enterprise solutions pricing, Zion Tech Group&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Revolutionary 2026 Pricing - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Competitive pricing for cutting-edge AI, quantum computing, and emerging technology services&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2026-pricing&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2026-pricing&quot; />
        </Head>

        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />

        {/* Hero Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20&quot;></div>
          <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                  Revolutionary 2026 Pricing
                </span>
              </h1>
              <p className=&quot;text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8&quot;>
                Transparent, competitive pricing for our cutting-edge AI, quantum computing, and emerging technology solutions. 
                Get maximum ROI with our revolutionary services.
              </p>
              
              {/* Pricing Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;>
                <div className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4&quot;>
                  <div className=&quot;text-2xl font-bold text-purple-400&quot;>{pricingStats.totalServices}+</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Total Services</div>
                </div>
                <div className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4&quot;>
                  <div className=&quot;text-2xl font-bold text-green-400&quot;>${Math.round(pricingStats.averagePrice).toLocaleString()}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Average Price</div>
                </div>
                <div className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4&quot;>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>${pricingStats.lowestPrice}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Starting Price</div>
                </div>
                <div className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4&quot;>
                  <div className=&quot;text-2xl font-bold text-yellow-400&quot;>{pricingStats.popularServices}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Popular Services</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto&quot;
            >
              <h3 className=&quot;text-xl font-bold text-white mb-4 text-center&quot;>Need Custom Pricing?</h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-center&quot;>
                <div className=&quot;flex flex-col items-center space-y-2&quot;>
                  <Phone className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span className=&quot;text-sm text-gray-300&quot;>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex flex-col items-center space-y-2&quot;>
                  <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span className=&quot;text-sm text-gray-300&quot;>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex flex-col items-center space-y-2&quot;>
                  <MapPin className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span className=&quot;text-sm text-gray-300&quot;>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className=&quot;py-8 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6&quot;>
              <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
                {/* Category Filter */}
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {category.icon} {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Price Range Filter */}
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedPriceRange === range.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className=&quot;flex items-center space-x-4&quot;>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/60&quot;
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className=&quot;py-12 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>
                {filteredServices.length} Services Available
              </h2>
              <p className=&quot;text-gray-400&quot;>
                Compare pricing and features to find the perfect solution for your business
              </p>
            </div>

            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=&quot;text-center py-20&quot;
                >
                  <div className=&quot;text-gray-400 text-xl&quot;>
                    No services found matching your criteria.
                    <br />
                    Try adjusting your filters.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=&quot;grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3&quot;
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className=&quot;group relative&quot;
                    >
                      <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500&quot;></div>
                      <div className=&quot;relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300&quot;>
                        {/* Service Header */}
                        <div className=&quot;text-center mb-6&quot;>
                          <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4&quot;>
                            {service.icon}
                          </div>
                          <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors&quot;>
                            {service.name}
                          </h3>
                          <p className=&quot;text-purple-300 text-sm mb-4&quot;>{service.tagline}</p>
                          
                          {/* Pricing */}
                          <div className=&quot;mb-6&quot;>
                            <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                              {service.price}
                              <span className=&quot;text-lg text-gray-400&quot;>{service.period}</span>
                            </div>
                            <div className=&quot;text-gray-400 text-sm&quot;>
                              {service.trialDays > 0 ? `${service.trialDays}-day free trial` : 'No trial available'}
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className=&quot;mb-6&quot;>
                          <h4 className=&quot;text-white font-semibold mb-3 flex items-center&quot;>
                            <Sparkles className=&quot;w-4 h-4 mr-2 text-purple-400&quot; />
                            Key Features
                          </h4>
                          <ul className=&quot;space-y-2&quot;>
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <li key={idx} className=&quot;flex items-start space-x-2 text-sm text-gray-300&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-green-400 mt-0.5 flex-shrink-0&quot; />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Service Info */}
                        <div className=&quot;grid grid-cols-2 gap-4 text-sm mb-6&quot;>
                          <div>
                            <span className=&quot;text-gray-400&quot;>Category:</span>
                            <div className=&quot;text-white&quot;>{service.category}</div>
                          </div>
                          <div>
                            <span className=&quot;text-gray-400&quot;>Rating:</span>
                            <div className=&quot;flex items-center text-white&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-400 mr-1&quot; />
                              {service.rating}/5
                            </div>
                          </div>
                          <div>
                            <span className=&quot;text-gray-400&quot;>Customers:</span>
                            <div className=&quot;text-white&quot;>{service.customers.toLocaleString()}+</div>
                          </div>
                          <div>
                            <span className=&quot;text-gray-400&quot;>Setup:</span>
                            <div className=&quot;text-white&quot;>{service.setupTime}</div>
                          </div>
                        </div>

                        {/* ROI and Market Info */}
                        <div className=&quot;mb-6 p-3 bg-purple-900/20 rounded-lg&quot;>
                          <div className=&quot;text-sm text-purple-300 mb-2&quot;>
                            <strong>ROI:</strong> {service.roi}
                          </div>
                          <div className=&quot;text-xs text-gray-400&quot;>
                            <strong>Market:</strong> {service.marketSize} | <strong>Growth:</strong> {service.growthRate}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className=&quot;flex flex-col gap-3&quot;>
                          <Link
                            href={service.link}
                            className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:scale-105&quot;
                          >
                            Learn More
                            <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
                          </Link>
                          <a
                            href={`tel:${contactInfo.mobile}`}
                            className=&quot;bg-black/40 hover:bg-black/60 text-white font-semibold py-3 px-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center&quot;
                          >
                            <Phone className=&quot;w-4 h-4 mr-2&quot; />
                            Contact Sales
                          </Link>
                        </div>

                        {/* Badges */}
                        <div className=&quot;absolute top-4 right-4 flex flex-col gap-2&quot;>
                          {service.popular && (
                            <div className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full&quot;>
                              POPULAR
                            </div>
                          )}
                          {service.price.includes('Custom') && (
                            <div className=&quot;bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full&quot;>
                              CUSTOM
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Why Choose Zion Tech Group?
              </h2>
              <p className=&quot;text-gray-300 text-xl max-w-3xl mx-auto&quot;>
                Our revolutionary 2026 services offer unmatched value, cutting-edge technology, and proven ROI
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                  <DollarSign className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Unmatched Value</h3>
                <p className=&quot;text-gray-300&quot;>
                  Get enterprise-grade technology at competitive prices. Our services deliver 1000%+ ROI, 
                  making them the smartest investment for your business.
                </p>
              </motion.div>

              {/* Technology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                  <Rocket className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Cutting-Edge Technology</h3>
                <p className=&quot;text-gray-300&quot;>
                  Access the latest AI, quantum computing, and emerging technologies before they become mainstream. 
                  Stay ahead of the competition with our innovative solutions.
                </p>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                  <Users className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Expert Support</h3>
                <p className=&quot;text-gray-300&quot;>
                  Get dedicated support from our team of experts. We're here to ensure your success 
                  with implementation, training, and ongoing optimization.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-12&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-gray-300 text-xl mb-8 leading-relaxed&quot;>
                Get started with our revolutionary 2026 services today. Contact us for custom pricing 
                and discover how we can accelerate your business growth.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center&quot;
                >
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
                  Call {contactInfo.mobile}
                </Link>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className=&quot;bg-black/40 hover:bg-black/60 text-white font-semibold py-4 px-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center&quot;
                >
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  Get Custom Quote
                </Link>
              </div>
              <div className=&quot;mt-8 text-gray-400 text-sm&quot;>
                <p>Visit us at: <a href={contactInfo.website} className=&quot;text-purple-400 hover:text-purple-300&quot;>{contactInfo.website}</Link></p>
                <p className=&quot;mt-2&quot;>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}