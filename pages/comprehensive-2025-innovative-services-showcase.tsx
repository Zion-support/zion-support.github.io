import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Globe,
  Search, Grid, List, Star as StarIcon,
  Phone, Mail, MapPin
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion';
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services';

export default function Comprehensive2025InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'enterprise'>('all');

  // Combine all services
  const allServices = [...comprehensiveInnovativeServices, ...specializedEnterpriseServices];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Financial Technology', name: 'FinTech', count: allServices.filter(s => s.category.includes('Financial')).length },
    { id: 'Education Technology', name: 'EdTech', count: allServices.filter(s => s.category.includes('Education')).length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'Energy & Sustainability', name: 'Energy', count: allServices.filter(s => s.category.includes('Energy')).length },
    { id: 'Advanced AI & Consciousness', name: 'AI Consciousness', count: allServices.filter(s => s.category.includes('Consciousness')).length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Space Technology', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'Neural Technology & BCI', name: 'Neural Tech', count: allServices.filter(s => s.category.includes('Neural')).length },
    { id: 'Advanced IoT & Edge Computing', name: 'Advanced IoT', count: allServices.filter(s => s.category.includes('Advanced IoT')).length },
    { id: 'Advanced Analytics & AI', name: 'Advanced Analytics', count: allServices.filter(s => s.category.includes('Advanced Analytics')).length }
  ];

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice < 1000) return 'budget';
    if (numPrice < 5000) return 'mid';
    return 'enterprise';
  };

  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesPrice = priceRange === 'all' || getPriceRange(service.price) === priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Comprehensive 2025 Innovative Services Showcase — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-2025-services-showcase&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Comprehensive Services Showcase
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Discover our extensive collection of cutting-edge micro SAAS services, AI solutions, 
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            
            {/* Contact Information */}
            <div className=&quot;flex flex-wrap justify-center gap-6 mb-8 text-white/70&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Phone className=&quot;w-5 h-5&quot; />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Mail className=&quot;w-5 h-5&quot; />
                <span>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <MapPin className=&quot;w-5 h-5&quot; />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{allServices.length}+</div>
                <div className=&quot;text-white/60&quot;>Services Available</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400&quot;>{allServices.filter(s => s.popular).length}</div>
                <div className=&quot;text-white/60&quot;>Popular Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-green-400&quot;>{allServices.filter(s => s.realService).length}</div>
                <div className=&quot;text-white/60&quot;>Real Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-orange-400&quot;>{allServices.filter(s => s.rating >= 4.5).length}</div>
                <div className=&quot;text-white/60&quot;>Top Rated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className=&quot;px-6 pb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10&quot;
          >
            {/* Search Bar */}
            <div className=&quot;mb-6&quot;>
              <div className=&quot;relative max-w-2xl mx-auto&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services by name, description, or features...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300&quot;
                />
              </div>
            </div>

            {/* Filters */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4&quot;>
              {/* Category Filter */}
              <div>
                <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50&quot;
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value as any)}
                  className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50&quot;
                >
                  <option value=&quot;all&quot;>All Prices</option>
                  <option value=&quot;budget&quot;>Budget ($0 - $999)</option>
                  <option value=&quot;mid&quot;>Mid-Range ($1,000 - $4,999)</option>
                  <option value=&quot;enterprise&quot;>Enterprise ($5,000+)</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50&quot;
                >
                  <option value=&quot;popularity&quot;>Popularity</option>
                  <option value=&quot;price&quot;>Price (Low to High)</option>
                  <option value=&quot;rating&quot;>Rating</option>
                  <option value=&quot;newest&quot;>Newest</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>View Mode</label>
                <div className=&quot;flex gap-2&quot;>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <Grid className=&quot;w-4 h-4&quot; />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <List className=&quot;w-4 h-4&quot; />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className=&quot;mb-8&quot;
          >
            <div className=&quot;text-center mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>
                {filteredServices.length} Services Found
              </h2>
              <p className=&quot;text-white/60&quot;>
                Showing results for &quot;{searchTerm || 'all services'}&quot; in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className=&quot;text-center py-20&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-white/60 mb-6&quot;>Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className=&quot;px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300&quot;
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Card Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Header */}
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;flex items-center gap-3&quot;>
                          <div className={`text-3xl ${service.color.includes('from-') ? '' : service.color}`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className=&quot;font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300&quot;>
                              {service.name}
                            </h3>
                            <p className=&quot;text-sm text-white/60&quot;>{service.tagline}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full&quot;>
                            Popular
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className=&quot;text-white/80 text-sm mb-4 line-clamp-3&quot;>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className=&quot;mb-4&quot;>
                        <h4 className=&quot;text-sm font-semibold text-white/70 mb-2&quot;>Key Features:</h4>
                        <div className=&quot;grid grid-cols-1 gap-1&quot;>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-xs text-white/60&quot;>
                              <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className=&quot;text-xs text-white/40&quot;>
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price and Rating */}
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}
                          <span className=&quot;text-sm text-white/60&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <StarIcon className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                          <span className=&quot;text-sm text-white/70&quot;>{service.rating}</span>
                          <span className=&quot;text-xs text-white/50&quot;>({service.reviews})</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className=&quot;flex gap-2&quot;>
                        <a
                          href={service.link}
                          target=&quot;_blank&quot;
                          rel=&quot;noopener noreferrer&quot;
                          className=&quot;flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm font-medium text-center transition-all duration-300 transform hover:scale-105&quot;
                        >
                          Learn More
                        </Link>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className=&quot;px-4 py-2 border border-white/20 hover:border-cyan-400/50 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-white/10&quot;
                        >
                          Contact
                        </Link>
                      </div>

                      {/* Additional Info */}
                      <div className=&quot;mt-4 pt-4 border-t border-white/10&quot;>
                        <div className=&quot;grid grid-cols-2 gap-4 text-xs text-white/50&quot;>
                          <div>
                            <span className=&quot;block text-white/70&quot;>Setup Time:</span>
                            {service.setupTime}
                          </div>
                          <div>
                            <span className=&quot;block text-white/70&quot;>Trial:</span>
                            {service.trialDays} days
                          </div>
                          <div>
                            <span className=&quot;block text-white/70&quot;>Customers:</span>
                            {service.customers}+
                          </div>
                          <div>
                            <span className=&quot;block text-white/70&quot;>ROI:</span>
                            <span className=&quot;text-green-400&quot;>{service.roi.split(' ').slice(0, 3).join(' ')}...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/20&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/80 mb-8 max-w-2xl mx-auto&quot;>
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href={`mailto:${contactInfo.email}?subject=Business Consultation Request`}
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Schedule Consultation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className=&quot;px-8 py-4 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                Call Now
              </Link>
            </div>
            <div className=&quot;mt-8 text-white/60&quot;>
              <p>Contact us directly:</p>
              <div className=&quot;flex flex-wrap justify-center gap-6 mt-4&quot;>
                <span>{contactInfo.mobile}</span>
                <span>{contactInfo.email}</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}