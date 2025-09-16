<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { enhancedServices2025 } from '../data/enhanced-services-2025';
const EnhancedServicesShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const categories = [
        { id: 'all', name: 'All Services', icon: '🌟' },
        { id: 'micro-saas', name: 'Micro SAAS', icon: '💻' },
        { id: 'it-services', name: 'IT Services', icon: '🖥️' },
        { id: 'ai-services', name: 'AI Services', icon: '🤖' },
        { id: 'emerging-tech', name: 'Emerging Tech', icon: '🚀' }
    ];
    const filteredServices = enhancedServices2025.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Technology Solutions
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Discover our extensive portfolio of innovative micro SAAS services, enterprise IT solutions, 
            cutting-edge AI services, and emerging technology solutions designed to transform your business.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">📱 Contact</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">✉️ Email</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">🌐 Website</div>
                <div className="text-gray-300">ziontechgroup.com</div>
              </div>
            </div>
          </motion.div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedServicesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedServicesShowcase;