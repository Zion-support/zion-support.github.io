import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cloud, 
  Lock, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Target,
  Users,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Layers
} from 'lucide-react';

// Import the comprehensive services data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'roi'>('price');

  // Get unique categories
  const categories = ['all', ...new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => service.category))];

  // Price ranges for filtering
  const priceRanges = [
    { label: 'All Prices', value: 'all', min: 0, max: Infinity },
    { label: 'Under $5,000', value: '0-5000', min: 0, max: 5000 },
    { label: '$5,000 - $10,000', value: '5000-10000', min: 5000, max: 10000 },
    { label: '$10,000 - $20,000', value: '10000-20000', min: 10000, max: 20000 },
    { label: '$20,000 - $35,000', value: '20000-35000', min: 20000, max: 35000 },
    { label: 'Over $35,000', value: '35000+', min: 35000, max: Infinity }
  ];

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPrice = selectedPriceRange === 'all' || 
        (service.price >= priceRanges.find(r => r.value === selectedPriceRange)?.min! && 
         service.price <= priceRanges.find(r => r.value === selectedPriceRange)?.max!);
      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'roi':
          // Extract ROI percentage for sorting
          const aRoi = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const bRoi = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bRoi - aRoi;
        default:
          return 0;
      }
    });

  // Calculate statistics
  const totalServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.length;
  const averagePrice = Math.round(INNOVATIVE_MICRO_SAAS_SERVICES_2025.reduce((sum, service) => sum + service.price, 0) / totalServices);
  const averageRating = Math.round(INNOVATIVE_MICRO_SAAS_SERVICES_2025.reduce((sum, service) => sum + service.rating, 0) / totalServices * 10) / 10;
  const averageAIScore = Math.round(INNOVATIVE_MICRO_SAAS_SERVICES_2025.reduce((sum, service) => sum + (service.aiScore || 0), 0) / totalServices);

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
      case 'AI Development': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Financial Technology': return DollarSign;
      case 'Healthcare Technology': return Users;
      case 'Manufacturing Technology': return Cpu;
      case 'Retail Technology': return ShoppingCart;
      case 'Logistics Technology': return Truck;
      case 'Energy Technology': return Zap;
      case 'Environmental Technology': return Globe;
      case 'Urban Technology': return Building;
      case 'Education Technology': return BookOpen;
      case 'Legal Technology': return Scale;
      case 'Blockchain Technology': return Network;
      case 'Space Technology': return Rocket;
      case 'Quantum Computing': return Atom;
      case 'Telecommunications': return Phone;
      case 'Autonomous Vehicles': return Car;
      case 'Robotics & Automation': return Cpu;
      case 'Digital Technology': return Layers;
      case 'Extended Reality': return Eye;
      case 'Voice Technology': return Mic;
      case 'Affective Computing': return Heart;
      default: return Zap;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide
              </span>
              <br />
              <span className="text-white">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete pricing information for all our innovative micro SAAS services. 
              Compare features, ROI, and market positioning to make informed decisions.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{totalServices}+</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">${averagePrice.toLocaleString()}</div>
                <div className="text-gray-300">Average Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{averageRating}</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{averageAIScore}%</div>
                <div className="text-gray-300">Avg AI Score</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Contact Us</p>
                <p className="font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p className="font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Address</p>
                <p className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="price" className="bg-gray-800 text-white">Price (Low to High)</option>
                  <option value="rating" className="bg-gray-800 text-white">Rating (High to Low)</option>
                  <option value="aiScore" className="bg-gray-800 text-white">AI Score (High to Low)</option>
                  <option value="roi" className="bg-gray-800 text-white">ROI (High to Low)</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">{filteredServices.length}</div>
                    <div className="text-sm text-gray-300">Services Found</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service) => {
              const CategoryIcon = getCategoryIcon(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <CategoryIcon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">One-time setup</div>
                    </div>
                  </div>

                  {/* Service Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-purple-400">{service.aiScore}%</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-yellow-400">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{service.reviewCount}</div>
                      <div className="text-xs text-gray-400">Reviews</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-blue-400">{service.availability}</div>
                      <div className="text-xs text-gray-400">Setup Time</div>
                    </div>
                  </div>

                  {/* Market Analysis */}
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-white font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-400 font-medium">{service.roi}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Competitors:</span>
                      <span className="text-white font-medium">{service.competitors.length}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Integrations Preview */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Key Integrations:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.integrations.slice(0, 3).map((integration, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                        >
                          {integration}
                        </span>
                      ))}
                      {service.integrations.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                          +{service.integrations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Get Quote</span>
                    </a>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-sm">Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing Analysis & Market Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand the value proposition and competitive positioning of our services 
              in the current market landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Distribution */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Price Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Under $5K</span>
                  <span className="text-cyan-400 font-medium">
                    {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price < 5000).length} services
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">$5K - $15K</span>
                  <span className="text-purple-400 font-medium">
                    {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price >= 5000 && s.price < 15000).length} services
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">$15K - $25K</span>
                  <span className="text-green-400 font-medium">
                    {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price >= 15000 && s.price < 25000).length} services
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Over $25K</span>
                  <span className="text-yellow-400 font-medium">
                    {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price >= 25000).length} services
                  </span>
                </div>
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">ROI Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average ROI</span>
                  <span className="text-green-400 font-medium">500%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ROI Range</span>
                  <span className="text-cyan-400 font-medium">300% - 1500%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Payback Period</span>
                  <span className="text-purple-400 font-medium">4-30 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-yellow-400 font-medium">95%+</span>
                </div>
              </div>
            </div>

            {/* Market Positioning */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Market Positioning</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Score Avg</span>
                  <span className="text-purple-400 font-medium">{averageAIScore}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rating Avg</span>
                  <span className="text-yellow-400 font-medium">{averageRating}/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Global Coverage</span>
                  <span className="text-cyan-400 font-medium">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Industries</span>
                  <span className="text-green-400 font-medium">25+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and get a customized quote 
              for any of our innovative micro SAAS services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry for Micro SAAS Services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative micro SAAS solutions with competitive pricing and proven ROI.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Phone: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Website</h3>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                Visit our website
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensivePricingGuide2025;