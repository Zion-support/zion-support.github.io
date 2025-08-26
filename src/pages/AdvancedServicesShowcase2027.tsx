import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Globe, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2027 } from '../data/advancedMicroSaasServices2027';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027 } from '../data/specializedITInfrastructureServices2027';

export default function AdvancedServicesShowcase2027() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Combine all services
  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2027, ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'All' || 
        (selectedPriceRange === 'Under $100' && service.price < 100) ||
        (selectedPriceRange === '$100-$299' && service.price >= 100 && service.price <= 299) ||
        (selectedPriceRange === '$300-$599' && service.price >= 300 && service.price <= 599) ||
        (selectedPriceRange === '$600+' && service.price >= 600);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            2027 Advanced Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover cutting-edge AI solutions, innovative IT infrastructure, and revolutionary technology services 
            that will transform your business in 2027 and beyond.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get Started Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="All" className="bg-zion-slate-dark text-white">All Prices</option>
                <option value="Under $100" className="bg-zion-slate-dark text-white">Under $100</option>
                <option value="$100-$299" className="bg-zion-slate-dark text-white">$100-$299</option>
                <option value="$300-$599" className="bg-zion-slate-dark text-white">$300-$599</option>
                <option value="$600+" className="bg-zion-slate-dark text-white">$600+</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="featured" className="bg-zion-slate-dark text-white">Featured</option>
                <option value="price-low" className="bg-zion-slate-dark text-white">Price: Low to High</option>
                <option value="price-high" className="bg-zion-slate-dark text-white">Price: High to Low</option>
                <option value="rating" className="bg-zion-slate-dark text-white">Highest Rated</option>
                <option value="ai-score" className="bg-zion-slate-dark text-white">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Image */}
                <div className="relative mb-6">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {service.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Service Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Category and AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{service.aiScore}</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.rating} ({service.reviewCount} reviews)
                      </div>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <span
                          key={index}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technical Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        {service.technicalSpecs.apiEndpoints && (
                          <div>API Endpoints: {service.technicalSpecs.apiEndpoints}</div>
                        )}
                        {service.technicalSpecs.uptime && (
                          <div>Uptime: {service.technicalSpecs.uptime}</div>
                        )}
                        {service.technicalSpecs.scalability && (
                          <div>Scalability: {service.technicalSpecs.scalability}</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
                      className="bg-transparent border border-cyan-500 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Our Website</h3>
              <p className="text-gray-400 text-sm">Explore our full range of services</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                ziontechgroup.com →
              </a>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">Speak with our experts directly</p>
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                +1 302 464 0950 →
              </a>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">Get detailed information and quotes</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                kleber@ziontechgroup.com →
              </a>
            </div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Our Address</h3>
            <p className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}