import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Target,
  BarChart3,
  Leaf,
  Building,
  Car,
  Home,
  Factory,
  Building2,
  Gauge,
  GitFork,
  Atom,
  Eye,
  Code,
  Truck,
  PenTool,
  Scale,
  Building2,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Calculator,
  PieChart,
  BarChart,
  LineChart
} from 'lucide-react';
import innovativeMicroSAASServices2026 from '../data/innovativeMicroSAASServices2026';

export default function ComprehensivePricingGuide2026() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('category');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const allServices = innovativeMicroSAASServices2026.flatMap(category => 
    category.items.map(item => ({ ...item, categoryName: category.name }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
      switch (priceRange) {
        case 'under-500':
          matchesPrice = price < 500;
          break;
        case '500-1000':
          matchesPrice = price >= 500 && price < 1000;
          break;
        case '1000-2000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case '2000-5000':
          matchesPrice = price >= 2000 && price < 5000;
          break;
        case 'over-5000':
          matchesPrice = price >= 5000;
          break;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'roi':
        const aRoi = parseFloat(a.roiMetrics[0]?.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roiMetrics[0]?.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.category.localeCompare(b.category);
    }
  });

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: 'over-5000', label: 'Over $5,000' }
  ];

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'Micro SaaS': return Zap;
      case 'Cybersecurity': return Shield;
      case 'Healthcare Tech': return Heart;
      case 'BioTech & Health': return Heart;
      case 'FinTech & DeFi': return DollarSign;
      case 'Supply Chain': return Truck;
      case 'Education Tech': return BookOpen;
      case 'Legal Tech': return Scale;
      case 'Real Estate Tech': return Home;
      case 'Sustainability': return Leaf;
      case 'Smart Cities': return Building2;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'Micro SaaS': return 'from-blue-600 to-cyan-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Healthcare Tech': return 'from-red-600 to-pink-600';
      case 'BioTech & Health': return 'from-red-600 to-pink-600';
      case 'FinTech & DeFi': return 'from-green-600 to-emerald-600';
      case 'Supply Chain': return 'from-yellow-600 to-orange-600';
      case 'Education Tech': return 'from-indigo-600 to-purple-600';
      case 'Legal Tech': return 'from-gray-600 to-slate-600';
      case 'Real Estate Tech': return 'from-blue-600 to-indigo-600';
      case 'Sustainability': return 'from-green-600 to-teal-600';
      case 'Smart Cities': return 'from-cyan-600 to-blue-600';
      default: return 'from-purple-600 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2026 | Zion Tech Group"
        description="Complete pricing guide for all our AI-powered micro SaaS solutions, IT services, and innovative technology services. Get detailed pricing, ROI analysis, and feature comparisons."
        keywords="pricing guide, AI services pricing, micro SaaS pricing, IT services cost, technology pricing, ROI analysis, service comparison"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                2026 Edition
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative technology solutions. 
              Compare features, analyze ROI, and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-green-400">$299</p>
              <p className="text-gray-300 text-sm">per month</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
              <p className="text-3xl font-bold text-blue-400">350%</p>
              <p className="text-gray-300 text-sm">within 12 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Services</h3>
              <p className="text-3xl font-bold text-yellow-400">25+</p>
              <p className="text-gray-300 text-sm">AI-powered solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Industries</h3>
              <p className="text-3xl font-bold text-purple-400">15+</p>
              <p className="text-gray-300 text-sm">sectors served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-8 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-8 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  <option value="category" className="bg-gray-800 text-white">Category</option>
                  <option value="price" className="bg-gray-800 text-white">Price</option>
                  <option value="name" className="bg-gray-800 text-white">Name</option>
                  <option value="roi" className="bg-gray-800 text-white">ROI</option>
                </select>
                <ChevronDown className="absolute right-3 top-8 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="bg-purple-600/20 px-4 py-3 rounded-lg border border-purple-500/30">
                  <p className="text-white font-semibold">{filteredServices.length} Services</p>
                  <p className="text-purple-300 text-sm">Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {sortedServices.map((service) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30">
                          {service.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">/{service.billing}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI Metrics */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">ROI Metrics:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.roiMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Market Size:</span>
                        <p className="text-white font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Target Audience:</span>
                        <p className="text-white font-medium line-clamp-2">{service.targetAudience.split(',')[0]}...</p>
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologyStack.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Starting at</div>
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <Calculator className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our ROI calculator to estimate the potential returns on your technology investment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BarChart className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Average ROI</h3>
                <p className="text-2xl font-bold text-blue-400">350%</p>
                <p className="text-gray-300 text-sm">within 12 months</p>
              </div>
              <div className="text-center">
                <LineChart className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Payback Period</h3>
                <p className="text-2xl font-bold text-green-400">6-12 months</p>
                <p className="text-gray-300 text-sm">typical timeframe</p>
              </div>
              <div className="text-center">
                <PieChart className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Cost Savings</h3>
                <p className="text-2xl font-bold text-purple-400">25-60%</p>
                <p className="text-gray-300 text-sm">operational costs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Get ROI Analysis
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak to Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you choose the perfect solution and provide a custom quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 text-sm">
                Leading provider of innovative technology solutions with transparent pricing and proven ROI.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p><Phone className="w-4 h-4 inline mr-2" />{contactInfo.phone}</p>
                <p><Mail className="w-4 h-4 inline mr-2" />{contactInfo.email}</p>
                <p><MapPin className="w-4 h-4 inline mr-2" />{contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">All Services</Link>
                <Link to="/innovative-micro-saas-services-2026" className="block text-gray-300 hover:text-white transition-colors">Innovative Services</Link>
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="ml-2 hover:text-white transition-colors">Privacy Policy</Link> | 
              <Link to="/terms" className="ml-2 hover:text-white transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}