import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Phone, Mail, Globe, MapPin, Star, TrendingUp, Shield, Zap, Cpu, Database, Lock, Cloud, Brain, Network, Server, Code, BarChart3 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructureServices2025';

const AdvancedServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const allServices = [...ADVANCED_INNOVATIVE_SERVICES_2025, ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025];
  
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const priceRanges = ['All', 'Under $5K', '$5K-$10K', '$10K-$20K', '$20K+'];

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'All' || 
        (selectedPriceRange === 'Under $5K' && service.price < 5000) ||
        (selectedPriceRange === '$5K-$10K' && service.price >= 5000 && service.price < 10000) ||
        (selectedPriceRange === '$10K-$20K' && service.price >= 10000 && service.price < 20000) ||
        (selectedPriceRange === '$20K+' && service.price >= 20000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPriceRange, allServices]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'AI & Customer Experience': return Brain;
      case 'AI & Legal Tech': return Brain;
      case 'AI & Healthcare': return Brain;
      case 'AI & Supply Chain': return Brain;
      case 'AI & FinTech': return Brain;
      case 'AI & Content Creation': return Brain;
      case 'AI & HR Tech': return Brain;
      case 'AI & Real Estate': return Brain;
      case 'AI & Energy': return Brain;
      case 'AI & Education': return Brain;
      case 'AI & Manufacturing': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Edge Computing': return Server;
      case 'Blockchain': return Database;
      case 'Network Management': return Network;
      case '5G & Networking': return Network;
      case 'Data Center': return Server;
      default: return Code;
    }
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 5000) return 'text-green-400';
    if (price < 10000) return 'text-yellow-400';
    if (price < 20000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Advanced Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of advanced AI services, IT infrastructure solutions, and innovative micro SAAS platforms. Cutting-edge technology solutions for modern businesses."
        keywords="AI services, IT infrastructure, cybersecurity, cloud solutions, blockchain, edge computing, quantum computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/advanced-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Advanced Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
          >
            Discover our cutting-edge portfolio of AI-powered solutions, enterprise IT infrastructure, 
            and innovative micro SAAS platforms designed to transform your business
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>50+ Advanced Services</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span>Industry-Leading ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <span>Enterprise-Grade Security</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-cyan-400" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-blue-500/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Price:</span>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="ml-auto text-sm text-slate-400">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <CategoryIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-blue-400/70 font-medium">
                          {service.category}
                        </div>
                        <div className="text-xs text-slate-400">{service.subcategory}</div>
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${getPriceRangeColor(service.price)}`}>
                      ${service.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Benefits & ROI */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="bg-green-500/20 p-2 rounded">
                      <div className="text-green-400 font-medium">ROI</div>
                      <div className="text-green-300">{service.roi}</div>
                    </div>
                    <div className="bg-purple-500/20 p-2 rounded">
                      <div className="text-purple-400 font-medium">Delivery</div>
                      <div className="text-purple-300">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-slate-800/50 text-slate-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Market Info */}
                  <div className="text-xs text-slate-400 mb-4">
                    <div>Market Price: {service.marketPrice}</div>
                    <div>Market Size: {service.marketSize}</div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <div className="text-xs text-slate-500">
                      {service.supportLevel} support
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions. 
            Get in touch today to discuss your specific needs and start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <Globe className="h-5 w-5" />
              Visit Website
            </a>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            <p>364 E Main St STE 1008 Middletown DE 19709</p>
            <p>Available for global projects and consultations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServicesShowcase2025;