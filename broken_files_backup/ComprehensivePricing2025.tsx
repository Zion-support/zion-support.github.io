import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Play,
  Search,
  Filter,
  ArrowRight,
  Award,
  Globe,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Code
} from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2025 } from '../data/enhanced-2025-cutting-edge-services';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/specialized-industry-solutions-2025';
const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('price');
  const allServices = [...CUTTING_EDGE_SERVICES_2025, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025];
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const industries = ['all', ...Array.from(new Set(SPECIALIZED_INDUSTRY_SOLUTIONS_2025.map(service => service.industry)))];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' ||
      ('industry' in service ? service.industry === selectedIndustry : true);
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesIndustry && matchesSearch;
  });
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
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
        duration: 0.5
      }
    }
  };
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Cloud') || category.includes('Infrastructure')) return Cloud;
    if (category.includes('Security') || category.includes('Cybersecurity')) return Shield;
    if (category.includes('Quantum')) return Cpu;
    if (category.includes('Edge')) return Zap;
    if (category.includes('Blockchain')) return Globe;
    if (category.includes('DevOps')) return Code;
    return Star;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Pricing 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge AI, IT, and micro SAAS services.
              Choose the perfect solution for your business needs with competitive rates and proven ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Pricing Guide
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-green-800 to-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-green-300" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-green-300" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-green-300" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-white/60" />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-slate-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="price" className="bg-slate-800 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-800 text-white">Price: High to Low</option>
              <option value="roi" className="bg-slate-800 text-white">ROI: High to Low</option>
              <option value="delivery" className="bg-slate-800 text-white">Delivery: Fast to Slow</option>
            </select>
          </div>
        </div>
        {/* Pricing Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {allServices.length}
              </div>
              <div className="text-white font-semibold">Total Services</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                ${Math.min(...allServices.map(s => s.price)).toLocaleString()}
              </div>
              <div className="text-white font-semibold">Starting Price</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                ${Math.max(...allServices.map(s => s.price)).toLocaleString()}
              </div>
              <div className="text-white font-semibold">Premium Price</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                400%+
              </div>
              <div className="text-white font-semibold">Average ROI</div>
            </div>
          </motion.div>
        </div>
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sortedServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-green-600/30 text-green-200 text-xs rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-blue-200 text-sm">per month</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-100 text-sm mb-4">{service.description}</p>
                  {/* Industry Badge */}
                  {'industry' in service && (
                    <div className="inline-block px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full mb-3">
                      {service.industry}
                    </div>
                  )}
                </div>
                {/* Pricing Details */}
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-200">Market Price:</span>
                      <div className="text-white font-semibold">{service.marketPrice}</div>
                    </div>
                    <div>
                      <span className="text-blue-200">ROI:</span>
                      <div className="text-yellow-400 font-semibold">{service.roi}</div>
                    </div>
                    <div>
                      <span className="text-blue-200">Delivery:</span>
                      <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                    </div>
                    <div>
                      <span className="text-blue-200">Support:</span>
                      <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                    </div>
                  </div>
                </div>
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <span className="text-blue-300 text-sm">+{service.features.length - 4} more features</span>
                    )}
                  </div>
                </div>
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Technology & Compliance */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm">Technology</h4>
                    <h4 className="text-white font-semibold text-sm">Compliance</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-blue-200 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.compliance.slice(0, 2).map((comp, compIndex) => (
                        <span
                          key={compIndex}
                          className="px-2 py-1 bg-green-600/30 text-green-200 text-xs rounded"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-3 mb-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    Get Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 border border-green-400 text-green-400 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-green-400 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </motion.button>
                </div>
                {/* Contact Info */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Contact:</span>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-green-300" />
                      <span className="text-blue-100">{service.contactInfo.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-blue-200">Email:</span>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-green-300" />
                      <span className="text-blue-100">{service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* Call to Action */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our services.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedIndustry('all');
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact our team today to discuss your specific needs and get a customized quote
            for any of our cutting-edge services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call +1 302 464 0950
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Email Us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComprehensivePricing2025;