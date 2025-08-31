import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Database, 
  TrendingUp, 
  Rocket, 
  Globe,
  Zap,
  Cpu,
  Network,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  Lock,
  Sparkles,
  Atom,
  Satellite,
  Palette,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import ULTIMATE_INNOVATIVE_SERVICES_2028 from '../data/ultimateInnovativeServices2028';

const ComprehensivePricingGuide2028: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Business Automation', name: 'AI & Business Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity & Quantum Computing', name: 'Cybersecurity & Quantum', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'Healthcare & AI', name: 'Healthcare & AI', icon: Database, color: 'from-green-500 to-emerald-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Network, color: 'from-yellow-500 to-orange-500' },
    { id: 'Financial Services & AI', name: 'Financial Services & AI', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
    { id: 'Quantum Computing & Edge', name: 'Quantum & Edge', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'Supply Chain & AI', name: 'Supply Chain & AI', icon: Globe, color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology & AI', name: 'Space Technology', icon: Satellite, color: 'from-gray-500 to-slate-500' },
    { id: 'Content Creation & AI', name: 'Content Creation & AI', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { id: 'Micro-SaaS & Business', name: 'Micro-SaaS & Business', icon: Building2, color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2028.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      default:
        return 0;
    }
  });

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getInnovationIcon = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return <Star className="w-6 h-6 text-yellow-400" />;
      case 'Cutting-Edge':
        return <Award className="w-6 h-6 text-purple-400" />;
      case 'Advanced':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'from-yellow-500 to-orange-500';
      case 'Cutting-Edge':
        return 'from-purple-500 to-pink-500';
      case 'Advanced':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2028
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover transparent pricing for our cutting-edge AI, Quantum Computing, 
              Blockchain, and Space Technology solutions. Get detailed pricing, ROI analysis, 
              and market comparisons for every service.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="w-6 h-6 text-green-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 justify-center">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008</p>
                    <p className="text-white font-semibold">Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`tel:+13024640950`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Custom Quote
              </motion.a>
              <motion.a
                href={`mailto:kleber@ziontechgroup.com`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Pricing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="innovation">Sort by Innovation Level</option>
              <option value="price">Sort by Price (Low to High)</option>
              <option value="roi">Sort by ROI (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-white/5 border-b border-white/20 text-sm font-semibold text-gray-300 uppercase tracking-wide">
            <div className="col-span-4">Service</div>
            <div className="col-span-2 text-center">Innovation Level</div>
            <div className="col-span-2 text-center">Monthly Price</div>
            <div className="col-span-2 text-center">Market Price</div>
            <div className="col-span-2 text-center">ROI</div>
          </div>

          {/* Service Rows */}
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-white/10 hover:bg-white/5 transition-all duration-300 ${
                expandedService === service.id ? 'bg-white/10' : ''
              }`}
            >
              {/* Main Row */}
              <div 
                className="grid grid-cols-12 gap-4 p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                {/* Service Name and Description */}
                <div className="col-span-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      {getInnovationIcon(service.innovationLevel)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-md border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white`}>
                    <Sparkles className="w-3 h-3" />
                    {service.innovationLevel}
                  </div>
                </div>

                {/* Monthly Price */}
                <div className="col-span-2 text-center">
                  <div className="text-2xl font-bold text-white">
                    ${(service.price / 1000).toFixed(1)}K
                  </div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>

                {/* Market Price */}
                <div className="col-span-2 text-center">
                  <div className="text-lg font-semibold text-gray-300">
                    {service.marketPrice}
                  </div>
                  <div className="text-xs text-gray-400">industry average</div>
                </div>

                {/* ROI */}
                <div className="col-span-2 text-center">
                  <div className="text-lg font-bold text-green-400">
                    {service.roi}
                  </div>
                  <div className="text-xs text-gray-400">within timeframe</div>
                </div>
              </div>

              {/* Expandable Details */}
              {expandedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 bg-white/5 border-t border-white/10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          Benefits
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Technical Specifications */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-purple-400" />
                          Technical Specifications
                        </h4>
                        {service.technicalSpecs && (
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Technology Stack</p>
                              <div className="flex flex-wrap gap-2">
                                {service.technicalSpecs.technology.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-purple-500/20 text-xs text-purple-300 rounded border border-purple-500/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Uptime</p>
                              <p className="text-white font-semibold">{service.technicalSpecs.uptime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-1">API Endpoints</p>
                              <p className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pricing Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-yellow-400" />
                          Pricing Details
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Monthly Price:</span>
                            <span className="text-white font-semibold">${(service.price / 1000).toFixed(1)}K</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Market Price:</span>
                            <span className="text-white font-semibold">{service.marketPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Delivery:</span>
                            <span className="text-white font-semibold">{service.estimatedDelivery}</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact and Action */}
                      <div className="pt-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <motion.a
                            href={`tel:${service.contactInfo.phone}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Get Quote
                          </motion.a>
                          <motion.a
                            href={`mailto:${service.contactInfo.email}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 border-2 border-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            Learn More
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your specific requirements and get a 
              customized quote for any of our innovative services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">24/7 Support Available</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-green-400 font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-purple-400 font-semibold">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`tel:+13024640950`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </motion.a>
              
              <motion.a
                href={`mailto:kleber@ziontechgroup.com`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </motion.a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Visit our website for more information</p>
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2028;
