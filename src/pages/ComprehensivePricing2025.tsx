import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { allServices, contactInfo } from '../data/services.js';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const categories = ['All', 'AI Services', 'IT Services', 'Enterprise AI', 'Quantum Technology', 'Blockchain Technology', 'Strategic Consulting', 'Compliance Consulting'];
  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education'];

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
      return categoryMatch;
    });
  }, [selectedCategory, selectedIndustry]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent pricing for all our cutting-edge technology solutions with proven ROI
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-slate-800">
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    ${service.price}
                  </span>
                  <span className="text-gray-300">/{service.period}</span>
                </div>
                <div className="text-xs text-cyan-400 mb-4">
                  Market Range: {service.marketPrice}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-green-400">
                      <Star className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <motion.a
                  href={service.url}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Interest in ${service.name}`}
                  className="w-full border border-cyan-400/50 text-cyan-400 py-2 px-4 rounded-lg text-sm hover:bg-cyan-400/10 transition-colors flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts can create tailored solutions for your specific business needs. 
              Contact us for a free consultation and personalized quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Custom Solution Inquiry`}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricing2025;