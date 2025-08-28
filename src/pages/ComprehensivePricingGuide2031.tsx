import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Shield,
  Zap,
  TrendingUp,
  Award,
  Users,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Code,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2031 } from '../data/comprehensivePricingGuide2031';

export default function ComprehensivePricingGuide2031() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'Enterprise AI', name: 'Enterprise AI', icon: '🏢' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' },
    { id: 'FinTech', name: 'FinTech', icon: '💰' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: '🌱' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: '🔄' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📈' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: '💬' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬' },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: '🎮' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: '⚙️' },
    { id: 'AI & Development', name: 'AI & Development', icon: '💻' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2031.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
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

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2031 - Zion Tech Group"
        description="Explore our comprehensive 2031 pricing guide for enterprise AI, quantum computing, cybersecurity, and emerging technology solutions. Competitive pricing with proven ROI."
        keywords="pricing guide 2031, enterprise AI pricing, quantum computing cost, cybersecurity pricing, cloud services pricing, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive Pricing Guide
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  2031
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Discover our complete pricing structure for enterprise AI, quantum computing, cybersecurity, and emerging technology solutions. 
                Transparent pricing with proven ROI and competitive market rates.
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
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Competitive Pricing</h3>
                  <p className="text-slate-300">Market-leading rates with transparent pricing structure</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                  <p className="text-slate-300">500-1000% return on investment within 12-24 months</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                  <p className="text-slate-300">Rapid deployment with minimal business disruption</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Controls */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Search Services</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by name, description, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="price">Price: Low to High</option>
                    <option value="rating">Rating: High to Low</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-300">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-cyan-400 font-semibold">{COMPREHENSIVE_PRICING_GUIDE_2031.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                      {service.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  </div>

                  {/* Pricing Information */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-slate-400 text-sm">({service.reviewCount})</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 mb-2">
                      Market Price: {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      ROI: {service.roi}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Setup Time:</span>
                        <div className="text-white">{service.setupTime}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">AI Score:</span>
                        <div className="text-white">{service.aiScore}/100</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Availability:</span>
                        <div className="text-white">{service.availability}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Location:</span>
                        <div className="text-white">{service.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="bg-slate-500/20 text-slate-400 text-xs px-2 py-1 rounded-full">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="text-center">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-slate-300 mb-6">
                  Try adjusting your search criteria or category selection
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact us today to discuss your specific needs and get a customized quote for your project.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Call Us</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-cyan-400">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Custom Quote Request"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}