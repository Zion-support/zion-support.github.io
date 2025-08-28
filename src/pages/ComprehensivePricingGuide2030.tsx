import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Brain,
  Cloud,
  Lock,
  Rocket,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Download,
  Share2,
  Bookmark,
  Eye,
  Target,
  Gauge,
  Infinity,
  Crown,
  Sparkles,
  Flame,
  Leaf,
  Atom,
  Code,
  Heart,
  Scale,
  Eye,
  Factory,
  Car,
  Building,
  Home,
  City,
  Globe2,
  ShieldCheck,
  Zap,
  Target,
  Award,
  Heart,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensivePricingGuide2030() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [priceRange, setPriceRange] = useState([0, 50000]);

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Categories', icon: '🚀' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: '🤖' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: '💬' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: '🌿' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: '🛸' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: '⚙️' },
    { id: 'AI & Development', name: 'AI & Development', icon: '💻' },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: '🎮' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: '🔄' },
    { id: 'FinTech', name: 'FinTech', icon: '💰' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: '🌱' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' }
  ];

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getPriceTier = (price: number) => {
    if (price < 5000) return { tier: 'Starter', color: 'from-green-500 to-emerald-500' };
    if (price < 15000) return { tier: 'Professional', color: 'from-blue-500 to-cyan-500' };
    if (price < 30000) return { tier: 'Enterprise', color: 'from-purple-500 to-pink-500' };
    return { tier: 'Ultimate', color: 'from-indigo-500 to-purple-500' };
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for all our innovative micro SAAS, IT, and AI services. Transparent pricing with detailed features, ROI analysis, and competitive comparisons."
        keywords="pricing guide, service pricing, AI services pricing, micro SAAS pricing, IT services cost, ROI analysis, competitive pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive Pricing Guide
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  2030
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transparent pricing for all our cutting-edge micro SAAS, IT, and AI services. 
                Compare features, calculate ROI, and find the perfect solution for your business needs.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="price">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="aiScore">Highest AI Score</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              <AnimatePresence>
                {sortedServices.map((service) => {
                  const priceTier = getPriceTier(service.price);
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      layout
                      className={`${
                        viewMode === 'grid' 
                          ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6'
                          : 'bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6'
                      } hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group`}
                    >
                      {/* Price Tier Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-slate-400">{service.category}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${priceTier.color}`}>
                          {priceTier.tier}
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>

                      {/* Pricing Information */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Our Price:</span>
                          <span className="text-white font-semibold text-lg">${service.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Market Price:</span>
                          <span className="text-slate-300">${service.marketPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">ROI:</span>
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Setup Time:</span>
                          <span className="text-slate-300">{service.availability}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">AI Score:</span>
                          <span className="text-cyan-400 font-semibold">{service.aiScore}/100</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Rating:</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-slate-300">{service.rating}</span>
                            <span className="text-xs text-slate-500">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                        >
                          Get Started
                        </a>
                        <a
                          href={`tel:+13024640950`}
                          className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                        >
                          Call Now
                        </a>
                      </div>
                      
                      {/* Quick Contact Info */}
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>📧 kleber@ziontechgroup.com</span>
                          <span>📱 +1 302 464 0950</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl text-slate-400 mb-2">No services found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Pricing Tiers Explanation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Understanding Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing Tiers</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our pricing structure is designed to provide value at every level, from startups to enterprise organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  tier: 'Starter',
                  price: 'Under $5,000',
                  color: 'from-green-500 to-emerald-500',
                  description: 'Perfect for small businesses and startups looking to implement AI solutions',
                  features: ['Basic AI Integration', 'Standard Support', 'Core Features', 'Documentation']
                },
                {
                  tier: 'Professional',
                  price: '$5,000 - $15,000',
                  color: 'from-blue-500 to-cyan-500',
                  description: 'Ideal for growing businesses requiring advanced AI capabilities',
                  features: ['Advanced AI Features', 'Priority Support', 'Custom Integration', 'Training']
                },
                {
                  tier: 'Enterprise',
                  price: '$15,000 - $30,000',
                  color: 'from-purple-500 to-pink-500',
                  description: 'Comprehensive solutions for large organizations with complex requirements',
                  features: ['Full AI Suite', '24/7 Support', 'Custom Development', 'Dedicated Team']
                },
                {
                  tier: 'Ultimate',
                  price: '$30,000+',
                  color: 'from-indigo-500 to-purple-500',
                  description: 'Cutting-edge solutions for industry leaders and innovators',
                  features: ['Quantum Computing', 'Exclusive Features', 'White-label Options', 'Strategic Partnership']
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.tier}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">{tier.price}</p>
                  <p className="text-slate-300 mb-4">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact us today to discuss your specific needs and get a customized quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Call Now: +1 302 464 0950
                  <Phone className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry&body=Hi, I'm interested in your services. Please provide more information about pricing and options."
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                >
                  Email Us
                  <Mail className="w-5 h-5 ml-2" />
                </a>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}