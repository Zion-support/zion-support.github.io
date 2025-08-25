import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Code,
  Database,
  Network,
  BarChart3,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '../data/additionalInnovativeServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

const ComprehensivePricing2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'popularity'>('price');

  // Combine all services
  const allServices = [...ADDITIONAL_INNOVATIVE_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'popularity':
          return b.price - a.price; // Higher price = more popular
        default:
          return 0;
      }
    });

  // Group services by price range
  const priceRanges = {
    'Budget': { min: 0, max: 2000, color: 'from-green-500 to-emerald-600' },
    'Professional': { min: 2000, max: 5000, color: 'from-blue-500 to-cyan-600' },
    'Enterprise': { min: 5000, max: 10000, color: 'from-purple-500 to-pink-600' },
    'Premium': { min: 10000, max: Infinity, color: 'from-orange-500 to-red-600' }
  };

  const getPriceRange = (price: number) => {
    for (const [range, { min, max }] of Object.entries(priceRanges)) {
      if (price >= min && price < max) return range;
    }
    return 'Premium';
  };

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
    <>
      <SEOHead
        title="Comprehensive Pricing 2025 | AI & IT Services | Zion Tech Group"
        description="Explore our competitive pricing for AI-powered solutions, specialized IT services, and innovative micro-SaaS platforms. Get transparent pricing with detailed service breakdowns."
        keywords="pricing, AI services pricing, IT solutions cost, micro-SaaS pricing, cybersecurity pricing, cloud development pricing"
        canonical="https://ziontechgroup.com/comprehensive-pricing-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Transparent Pricing 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Competitive Pricing for
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Premium AI & IT Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Get transparent, competitive pricing for our comprehensive portfolio of AI-powered solutions, specialized IT services, and innovative micro-SaaS platforms. No hidden fees, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span>Flexible Plans</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pricing Tiers</h2>
              <p className="text-gray-300">Choose the right plan for your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(priceRanges).map(([range, { min, max, color }]) => {
                const servicesInRange = allServices.filter(service => 
                  service.price >= min && service.price < max
                );
                const avgPrice = servicesInRange.length > 0 
                  ? Math.round(servicesInRange.reduce((sum, service) => sum + service.price, 0) / servicesInRange.length)
                  : 0;
                
                return (
                  <motion.div
                    key={range}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} p-4 mb-4 mx-auto`}>
                      {range === 'Budget' && <Zap className="w-full h-full text-white" />}
                      {range === 'Professional' && <Users className="w-full h-full text-white" />}
                      {range === 'Enterprise' && <Shield className="w-full h-full text-white" />}
                      {range === 'Premium' && <Award className="w-full h-full text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{range}</h3>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-blue-400">${avgPrice.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm">/month avg</span>
                    </div>
                    <div className="text-center text-gray-300 text-sm mb-4">
                      {servicesInRange.length} services available
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 text-sm">
                        {min === 0 ? 'Starting from $0' : `$${min.toLocaleString()} - $${max === Infinity ? '∞' : max.toLocaleString()}`}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'popularity')}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => {
                const priceRange = getPriceRange(service.price);
                const rangeColor = priceRanges[priceRange as keyof typeof priceRanges]?.color || 'from-gray-500 to-gray-600';
                
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    {/* Price Range Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${rangeColor} text-white`}>
                        {priceRange}
                      </span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-400">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-gray-500 text-sm">per month</div>
                      </div>
                    </div>

                    {/* Service Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      
                      {/* Category and Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                          {service.category}
                        </span>
                        {service.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Details */}
                    <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Delivery:</span>
                          <div className="text-white">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Support:</span>
                          <div className="text-white capitalize">{service.supportLevel}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">API Access:</span>
                          <div className="text-white">{service.apiAccess ? 'Yes' : 'No'}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Mobile App:</span>
                          <div className="text-white">{service.mobileApp ? 'Yes' : 'No'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Market Price Comparison */}
                    <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-400 text-sm">Market Price:</span>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-green-400 text-sm">Save up to</span>
                          <div className="text-green-400 font-bold">
                            {Math.round(((parseInt(service.marketPrice.split('-')[1].replace(/[^0-9]/g, '')) - service.price) / parseInt(service.marketPrice.split('-')[1].replace(/[^0-9]/g, ''))) * 100)}%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Get Custom Quote
                      </button>
                      <button className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or browse all services.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact and Consultation Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our team can create a tailored solution that fits your specific business requirements and budget. Get in touch for a personalized consultation and custom quote.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
                <div className="text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">Response within 2 hours</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008</p>
                  <p className="text-gray-300">Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="bg-gray-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricing2025;