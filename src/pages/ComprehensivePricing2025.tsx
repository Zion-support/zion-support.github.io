import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { allServices, contactInfo } from '../data/services';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const categories: any = ['All', 'AI Services', 'IT Services', 'Enterprise AI', 'Quantum Technology', 'Blockchain Technology', 'Strategic Consulting', 'Compliance Consulting'];
  const industries: any = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education'];

  const filteredServices: any = useMemo(() => {
    return allServices.filter(service => {
      const categoryMatch: any = selectedCategory === 'All' || service.category === selectedCategory;
      return categoryMatch;
    });
  }, [selectedCategory, selectedIndustry]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: any = {
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
                <option key={category} value={category}>
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
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Header */}
              <div className="mb-4">
                <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mt-2 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-1">/{service.period}</span>
                </div>
                <div className="text-xs text-cyan-400">
                  Market: {service.marketPrice}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Top Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-green-400">
                      <Check className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  Get Started
                </button>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our innovative solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Call Now
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricing2025;
