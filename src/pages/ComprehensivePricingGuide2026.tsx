import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  DollarSign,
  Clock,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_SERVICES_2026, SERVICE_STATISTICS_2026 } from '../data/innovativeServices2026';

export default function ComprehensivePricingGuide2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES_2026.map(s => s.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'micro', label: 'Micro SAAS ($1K-$5K)' },
    { value: 'mid', label: 'Mid-Range ($5K-$15K)' },
    { value: 'enterprise', label: 'Enterprise ($15K+)' }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'micro' && service.price < 5000) ||
      (priceRange === 'mid' && service.price >= 5000 && service.price < 15000) ||
      (priceRange === 'enterprise' && service.price >= 15000);
    return matchesCategory && matchesPrice;
  });

  const getPriceRange = (price: number) => {
    if (price < 5000) return 'micro';
    if (price < 15000) return 'mid';
    return 'enterprise';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'micro': return 'from-green-500 to-emerald-500';
      case 'mid': return 'from-blue-500 to-cyan-500';
      case 'enterprise': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2026 | Zion Tech Group"
        description="Complete pricing guide for our 2026 innovative services. Compare AI, IT, and micro SAAS solutions with market prices and ROI analysis."
        keywords="pricing guide 2026, AI services pricing, IT solutions cost, micro SAAS pricing, ROI analysis"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
              Compare costs, ROI, and market prices to make informed decisions.
            </p>
            
            {/* Pricing Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  ${SERVICE_STATISTICS_2026.averagePrice.toLocaleString()}
                </div>
                <div className="text-gray-300">Average Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {SERVICE_STATISTICS_2026.totalServices}
                </div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {SERVICE_STATISTICS_2026.aiServices}
                </div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {SERVICE_STATISTICS_2026.microSaasServices}
                </div>
                <div className="text-gray-300">Micro SAAS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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

      {/* Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              {service.rating}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.setupTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              AI Score: {service.aiScore}
                            </span>
                          </div>
                        </div>
                        
                        {/* Price Range Badge */}
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getPriceRangeColor(getPriceRange(service.price))} text-white`}>
                          {getPriceRange(service.price).toUpperCase()}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & ROI */}
                    <div className="lg:text-right">
                      <div className="text-4xl font-bold text-white mb-2">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-300 mb-2">
                        Market: {service.marketPrice}
                      </div>
                      <div className="text-sm text-green-400 font-semibold mb-4">
                        ROI: {service.roi}
                      </div>
                      
                      {/* Competitors */}
                      <div className="text-sm text-gray-300 mb-4">
                        <div className="font-medium mb-1">Competitors:</div>
                        <div className="flex flex-wrap gap-1">
                          {service.competitors.slice(0, 3).map((competitor, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing Tiers & Value Propositions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right tier for your business needs and budget requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SAAS Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Micro SAAS</h3>
                <p className="text-gray-300">Perfect for startups and small businesses</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $1K - $5K
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Quick setup (2-4 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Essential features</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>400-600% ROI</span>
                </li>
              </ul>
            </motion.div>

            {/* Mid-Range Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mid-Range</h3>
                <p className="text-gray-300">Ideal for growing businesses</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $5K - $15K
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Standard setup (4-8 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>600-800% ROI</span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-300">For large organizations</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                $15K+
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Custom setup (8-12 weeks)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Full feature set</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>800-1000% ROI</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for personalized quotes and enterprise solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-white">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Mail className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg border border-white/30"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}