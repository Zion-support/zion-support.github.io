import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Rocket, 
  Heart, 
  Scale, 
  Leaf, 
  Globe, 
  Lock, 
  Truck, 
  BookOpen, 
  Factory, 
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const allServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🤖' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: '💰' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: '🌱' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍' },
    { id: 'AI & Blockchain', name: 'AI & Blockchain', icon: '🔗' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', icon: '🌐' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: '🚀' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' },
    { id: 'AI & Logistics', name: 'AI & Logistics', icon: '📦' },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: '🏠' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', icon: '🏭' },
    { id: 'AI & Business Process', name: 'AI & Business Process', icon: '⚙️' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing 2025 - Zion Tech Group"
        description="Explore our comprehensive pricing for cutting-edge AI, quantum computing, and innovative technology solutions. Transparent pricing with enterprise-grade features."
      />

      {/* Hero Section */}
      <div className="container-responsive py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Pricing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transparent pricing for cutting-edge AI, quantum computing, and innovative technology solutions. 
            Choose the perfect plan for your business needs with enterprise-grade features and support.
          </p>
          
          {/* Contact CTA */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Need Custom Pricing?</h3>
            <p className="text-gray-300 mb-4">
              Contact us for enterprise solutions, custom integrations, and volume discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="container-responsive py-8">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-slate-600'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-white text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="price">Price (Low to High)</option>
                <option value="rating">Rating (High to Low)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-responsive py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-slate-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 font-semibold text-2xl">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-yellow-400">★</span>
                      <span>{service.rating}/5</span>
                      <span>•</span>
                      <span>{service.reviews} reviews</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-slate-600">
                  {service.category}
                </div>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <p className="text-white font-medium">{service.marketPrice}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <p className="text-green-400 font-medium">{service.roi}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Delivery:</span>
                      <p className="text-white font-medium">{service.estimatedDelivery}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Support:</span>
                      <p className="text-white font-medium capitalize">{service.supportLevel}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/services?category=${encodeURIComponent(service.category)}`}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                    className="w-full px-4 py-3 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Request Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already leveraging our AI-powered solutions to drive growth, 
            improve efficiency, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing2025;