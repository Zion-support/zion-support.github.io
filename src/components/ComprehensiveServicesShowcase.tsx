import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allServices, contactInfo } from '../data';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Star,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Search,
  Filter,
  X,
  ExternalLink
} from "lucide-react";

const categoryIcons = {
  'AI Business Intelligence': Brain,
  'Quantum Computing': Code,
  'Cybersecurity': Shield,
  'Cloud Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'Blockchain & Web3': Code,
  'Internet of Things': Globe,
  'FinTech & Banking': DollarSign,
  'Healthcare AI': Heart,
  'Autonomous Systems': Code
};

const categoryColors = {
  'AI Business Intelligence': 'from-purple-500 to-indigo-600',
  'Quantum Computing': 'from-blue-500 to-cyan-600',
  'Cybersecurity': 'from-red-500 to-pink-600',
  'Cloud Infrastructure': 'from-green-500 to-emerald-600',
  'Data Analytics': 'from-orange-500 to-red-600',
  'Blockchain & Web3': 'from-indigo-500 to-purple-600',
  'Internet of Things': 'from-teal-500 to-green-600',
  'FinTech & Banking': 'from-emerald-500 to-green-600',
  'Healthcare AI': 'from-pink-500 to-rose-600',
  'Autonomous Systems': 'from-gray-500 to-slate-600'
};

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Immediate Deployment",
    description: "All services are production-ready with no setup delays"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Proven ROI",
    description: "Average 500% ROI within 6 months of implementation"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Guaranteed",
    description: "30-day money-back guarantee with free migration support"
  }
];

export function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats;
  }, []);

  const filteredAndSortedServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.customers - a.customers;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative Services & Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real, production-ready micro SAAS, IT services, and AI solutions designed for the future. 
            All services are immediately deployable with proven ROI and enterprise-grade security.
          </motion.p>
          
          {/* Benefits Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-zion-cyan">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-slate text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  <option value="popularity" className="bg-zion-slate text-white">Sort by Popularity</option>
                  <option value="name" className="bg-zion-slate text-white">Sort by Name</option>
                  <option value="price" className="bg-zion-slate text-white">Sort by Price</option>
                  <option value="rating" className="bg-zion-slate text-white">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredAndSortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Service Card */}
                  <div className="relative h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 overflow-hidden group-hover:shadow-zion-glow">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                          ⭐ Most Popular
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Category */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-zion-cyan text-sm text-center mb-4 font-medium">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-zion-slate-light text-sm leading-relaxed mb-6 text-center">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Metrics */}
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-2">
                        {service.price}
                        <span className="text-sm text-zion-slate-light">{service.period}</span>
                      </div>
                      <div className="flex justify-center items-center gap-4 text-xs text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          {service.rating}
                        </span>
                        <span>{service.customers} customers</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 text-xs text-zion-slate-light">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-zion-cyan">Market:</span> {service.marketSize}
                        </div>
                        <div>
                          <span className="text-zion-cyan">Growth:</span> {service.growthRate}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20 text-zion-cyan border border-zion-cyan/30 rounded-xl text-sm font-medium hover:from-zion-cyan/30 hover:via-zion-blue/30 hover:to-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 group-hover:shadow-zion-glow hover:scale-105"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-blue/5 to-zion-purple/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredAndSortedServices.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or category filter.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Ready to Get Started?</h2>
          <p className="text-zion-slate-light text-center mb-8 max-w-2xl mx-auto">
            All our services are production-ready and can be deployed immediately. 
            Contact us to discuss your specific requirements and get a personalized solution.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div>
              <div className="text-zion-cyan mb-2">
                <Phone className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Phone</h3>
              <p className="text-white">{contactInfo.mobile}</p>
            </div>
            <div>
              <div className="text-zion-cyan mb-2">
                <Mail className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Email</h3>
              <p className="text-white">{contactInfo.email}</p>
            </div>
            <div>
              <div className="text-zion-cyan mb-2">
                <MapPin className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Address</h3>
              <p className="text-white">{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Globe className="h-5 w-5" />
              Visit Website
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
