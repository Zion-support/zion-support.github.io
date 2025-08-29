import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Cpu, 
  Globe, 
  Rocket,
  TrendingUp,
  Users,
  Lock,
  BarChart3,
  Network,
  Server,
  Code,
  ShieldCheck,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2030() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Users, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Shield, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: Globe, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Cpu, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Autonomous Systems', name: 'AI & Autonomous Systems', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: DollarSign, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: Code, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: Users, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Research', name: 'AI & Research', icon: Brain, color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: Globe, color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: ShieldCheck, color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Zap, color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Network, color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Globe, color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: Zap, color: 'from-green-500 to-teal-500' },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-slate-500 to-gray-500' },
    { id: 'IT Consulting', name: 'IT Consulting', icon: BarChart3, color: 'from-violet-500 to-purple-500' },
    { id: 'Data Analytics', name: 'Data Analytics', icon: Database, color: 'from-indigo-500 to-purple-500' },
    { id: 'Performance Monitoring', name: 'Performance Monitoring', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
    { id: 'Disaster Recovery', name: 'Disaster Recovery', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { id: 'API Management', name: 'API Management', icon: Code, color: 'from-orange-500 to-red-500' },
    { id: 'Network Management', name: 'Network Management', icon: Network, color: 'from-blue-500 to-indigo-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket, color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
    if (sortBy === 'roi') {
      const aRoi = parseInt(a.roi?.match(/\d+/)?.[0] || '0');
      const bRoi = parseInt(b.roi?.match(/\d+/)?.[0] || '0');
      return bRoi - aRoi;
    }
    return 0;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for all our innovative AI, IT, and micro SAAS services. Transparent pricing with detailed features, capabilities, and ROI analysis."
        keywords="pricing guide, AI services, IT services, micro SAAS, cloud computing, cybersecurity, data analytics, quantum computing, blockchain, IoT, pricing 2030"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Comprehensive Pricing Guide 2030
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover our complete portfolio of innovative AI, IT, and micro SAAS services. 
                Transparent pricing with detailed features, capabilities, and proven ROI analysis.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>100+ Services Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Proven ROI Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-slate-300">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-slate-300">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-slate-300">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Filter by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-slate-800 text-slate-300 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="flex items-center gap-4 bg-slate-800 rounded-lg p-2 border border-slate-600">
                <span className="text-slate-300 text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                  <option value="aiScore">AI Score (High to Low)</option>
                  <option value="roi">ROI (High to Low)</option>
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Features */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">
                        AI Score: {service.aiScore}
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      Market Price: {service.marketPrice}
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      ROI: {service.roi}
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      Setup Time: {service.setupTime}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <div key={tagIndex} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3 h-3 text-green-400" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        <div>Phone: {service.contactInfo.phone}</div>
                        <div>Email: {service.contactInfo.email}</div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you choose the perfect services and create a customized solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now: {contactInfo.phone}
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}