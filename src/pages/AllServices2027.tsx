import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '@/data/ultimateInnovativeServices2027';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Brain, 
  Rocket, 
  Cpu, 
  Shield, 
  Leaf, 
  Satellite,
  Globe,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

export default function AllServices2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'aiScore' | 'rating' | 'price' | 'name'>('aiScore');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.length },
    { id: 'AI & Automation', name: 'AI & Automation', icon: <Brain className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'AI & Automation').length },
    { id: 'Emerging Tech', name: 'Emerging Tech', icon: <Rocket className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'Emerging Tech').length },
    { id: 'IT Services', name: 'IT Services', icon: <Cpu className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'IT Services').length },
    { id: 'Security & Compliance', name: 'Security & Compliance', icon: <Shield className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'Security & Compliance').length },
    { id: 'Green Tech', name: 'Green Tech', icon: <Leaf className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'Green Tech').length },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="h-5 w-5" />, count: ULTIMATE_INNOVATIVE_SERVICES_2027.filter(s => s.category === 'Space Technology').length }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2027
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesPrice = service.price.starter >= priceRange[0] && service.price.enterprise <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price.starter - b.price.starter;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
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
        duration: 0.5
      }
    }
  };

  const stats = {
    totalServices: ULTIMATE_INNOVATIVE_SERVICES_2027.length,
    averageRating: (ULTIMATE_INNOVATIVE_SERVICES_2027.reduce((acc, service) => acc + service.rating, 0) / ULTIMATE_INNOVATIVE_SERVICES_2027.length).toFixed(1),
    averageAIScore: Math.round(ULTIMATE_INNOVATIVE_SERVICES_2027.reduce((acc, service) => acc + service.aiScore, 0) / ULTIMATE_INNOVATIVE_SERVICES_2027.length),
    totalReviews: ULTIMATE_INNOVATIVE_SERVICES_2027.reduce((acc, service) => acc + service.reviewCount, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="All Services 2027 - Zion Tech Group"
        description="Comprehensive overview of all our innovative AI, IT, and emerging technology services for 2027. Find the perfect solution for your business needs."
        keywords="all services, AI services, IT solutions, emerging technology, micro SAAS, 2027, comprehensive solutions"
        canonical="https://ziontechgroup.com/all-services-2027"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent mb-6">
              All Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete portfolio of cutting-edge technology solutions. 
              From AI automation to space technology, we have everything you need to transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-zion-blue/20 backdrop-blur-sm rounded-xl p-4 border border-zion-blue/30">
                <div className="text-3xl font-bold text-zion-cyan">{stats.totalServices}</div>
                <div className="text-zion-slate-light text-sm">Total Services</div>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-xl p-4 border border-zion-purple/30">
                <div className="text-3xl font-bold text-zion-purple-light">{stats.averageRating}</div>
                <div className="text-zion-slate-light text-sm">Avg Rating</div>
              </div>
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-xl p-4 border border-zion-cyan/30">
                <div className="text-3xl font-bold text-zion-cyan">{stats.averageAIScore}</div>
                <div className="text-zion-slate-light text-sm">Avg AI Score</div>
              </div>
              <div className="bg-zion-blue/20 backdrop-blur-sm rounded-xl p-4 border border-zion-blue/30">
                <div className="text-3xl font-bold text-zion-cyan">{stats.totalReviews}</div>
                <div className="text-zion-slate-light text-sm">Total Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-blue-dark/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 max-w-md">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
                
                <div className="flex bg-zion-blue-light/20 rounded-lg border border-zion-purple/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-l-lg transition-colors duration-300 ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-zion-slate-dark' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-r-lg transition-colors duration-300 ${
                      viewMode === 'list' ? 'bg-zion-cyan text-zion-slate-dark' : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-zion-slate-dark border-zion-cyan shadow-lg shadow-zion-cyan/25'
                      : 'bg-transparent text-white border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Price Range:</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <span className="text-zion-slate-light">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                  className="w-20 px-3 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {ULTIMATE_INNOVATIVE_SERVICES_2027.length} services
            </p>
          </div>

          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`group relative bg-gradient-to-br from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                    viewMode === 'list' ? 'p-6' : 'p-6'
                  }`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {service.status}
                    </span>
                  </div>

                  {/* AI Score */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-zion-cyan/20 backdrop-blur-sm rounded-full px-3 py-1 border border-zion-cyan/30">
                      <Brain className="h-4 w-4 text-zion-cyan" />
                      <span className="text-zion-cyan text-sm font-bold">{service.aiScore}</span>
                    </div>
                  </div>

                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      {/* Service Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.category === 'AI & Automation' && <Brain className="h-8 w-8 text-white" />}
                        {service.category === 'Emerging Tech' && <Rocket className="h-8 w-8 text-white" />}
                        {service.category === 'IT Services' && <Cpu className="h-8 w-8 text-white" />}
                        {service.category === 'Security & Compliance' && <Shield className="h-8 w-8 text-white" />}
                        {service.category === 'Green Tech' && <Leaf className="h-8 w-8 text-white" />}
                        {service.category === 'Space Technology' && <Satellite className="h-8 w-8 text-white" />}
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-zion-slate-light text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full border border-zion-purple/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Pricing */}
                        <div className="pt-4 border-t border-zion-purple/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-zion-slate-light text-sm">Starting from:</span>
                            <span className="text-zion-cyan font-bold text-lg">
                              ${service.price.starter.toLocaleString()}/month
                            </span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                          </div>
                          <span className="text-zion-cyan text-sm font-medium">
                            {service.rating}/5.0
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <a
                            href={service.website}
                            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-2 px-4 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="px-4 py-2 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {service.category === 'AI & Automation' && <Brain className="h-10 w-10 text-white" />}
                        {service.category === 'Emerging Tech' && <Rocket className="h-10 w-10 text-white" />}
                        {service.category === 'IT Services' && <Cpu className="h-10 w-10 text-white" />}
                        {service.category === 'Security & Compliance' && <Shield className="h-10 w-10 text-white" />}
                        {service.category === 'Green Tech' && <Leaf className="h-10 w-10 text-white" />}
                        {service.category === 'Space Technology' && <Satellite className="h-10 w-10 text-white" />}
                      </div>

                      {/* Service Content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-zion-slate-light leading-relaxed max-w-3xl">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-3xl font-bold text-zion-cyan mb-1">
                              ${service.price.starter.toLocaleString()}/month
                            </div>
                            <div className="text-zion-slate-light text-sm">Starting from</div>
                          </div>
                        </div>

                        {/* Tags and Category */}
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 5).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light text-sm rounded-full border border-zion-purple/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-zion-cyan font-medium">{service.category}</span>
                        </div>

                        {/* Key Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-zion-cyan" />
                              Key Benefits
                            </h4>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                                  <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-3 border border-zion-purple/30 text-center">
                              <div className="text-zion-cyan font-bold text-lg">{service.roi}</div>
                              <div className="text-zion-slate-light text-xs">ROI</div>
                            </div>
                            <div className="bg-zion-blue/20 backdrop-blur-sm rounded-lg p-3 border border-zion-blue/30 text-center">
                              <div className="text-zion-cyan font-bold text-lg">{service.estimatedDelivery}</div>
                              <div className="text-zion-slate-light text-xs">Delivery</div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <a
                            href={service.website}
                            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-6 rounded-lg font-bold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 flex items-center justify-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="h-5 w-5" />
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="border-2 border-zion-cyan/30 text-zion-cyan py-3 px-6 rounded-lg font-bold hover:bg-zion-cyan/10 transition-all duration-300 text-center"
                          >
                            Contact Sales
                          </a>
                          <a
                            href={`tel:${service.contactInfo.phone}`}
                            className="border-2 border-zion-purple/30 text-zion-purple-light py-3 px-6 rounded-lg font-bold hover:bg-zion-purple/10 transition-all duration-300 text-center"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-zion-purple-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Get in touch with our team to discuss your needs and find the perfect solution for your business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}