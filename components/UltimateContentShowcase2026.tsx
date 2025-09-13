'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Brain,
  Database,
  Cloud,
  Lock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentCategories = {
    'ai-solutions': {
      title: 'AI Solutions 2026',
      description: 'Revolutionary AI technologies transforming industries',
      icon: Brain,
      color: 'from-purple-600 to-blue-600'
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problems',
      icon: Database,
      color: 'from-cyan-600 to-teal-600'
    },
    'automation': {
      title: 'Advanced Automation',
      description: 'Intelligent automation for business transformation',
      icon: Zap,
      color: 'from-orange-600 to-red-600'
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: Cloud,
      color: 'from-blue-600 to-indigo-600'
    }
  };

  const featuredContent = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Transform your data into actionable insights with our cutting-edge AI platform that learns and adapts to your business needs.',
      category: 'ai-solutions',
      image: '/api/placeholder/600/400',
      rating: 4.9,
      users: 12500,
      price: 'Starting at $299/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
      status: 'New',
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Neural Network Framework',
      description: 'Revolutionary quantum computing framework that combines quantum algorithms with neural networks for unprecedented processing power.',
      category: 'quantum-computing',
      image: '/api/placeholder/600/400',
      rating: 4.8,
      users: 8900,
      price: 'Enterprise Pricing',
      features: ['Quantum Algorithms', 'Neural Integration', 'Scalable Architecture', 'Advanced Security'],
      tags: ['Quantum Computing', 'Neural Networks', 'Advanced AI', 'Research'],
      status: 'Beta',
      trending: true
    },
    {
      id: 3,
      title: 'Autonomous Business Process Automation',
      description: 'Complete automation solution that learns from your workflows and optimizes processes without human intervention.',
      category: 'automation',
      image: '/api/placeholder/600/400',
      rating: 4.7,
      users: 15600,
      price: 'Starting at $199/month',
      features: ['Workflow Automation', 'AI Learning', 'Process Optimization', 'Integration Hub'],
      tags: ['Automation', 'Workflow', 'AI', 'Productivity'],
      status: 'Popular',
      trending: false
    },
    {
      id: 4,
      title: 'Multi-Cloud Infrastructure Management',
      description: 'Unified platform for managing and optimizing your multi-cloud infrastructure with intelligent resource allocation.',
      category: 'cloud-infrastructure',
      image: '/api/placeholder/600/400',
      rating: 4.6,
      users: 22100,
      price: 'Starting at $149/month',
      features: ['Multi-Cloud Support', 'Cost Optimization', 'Security Management', 'Auto-Scaling'],
      tags: ['Cloud', 'Infrastructure', 'DevOps', 'Security'],
      status: 'Stable',
      trending: false
    },
    {
      id: 5,
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced cybersecurity solution that uses AI to detect and prevent threats in real-time across your entire infrastructure.',
      category: 'ai-solutions',
      image: '/api/placeholder/600/400',
      rating: 4.9,
      users: 18700,
      price: 'Starting at $399/month',
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Response', 'Compliance Tools'],
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Compliance'],
      status: 'New',
      trending: true
    },
    {
      id: 6,
      title: 'Quantum-Safe Encryption Platform',
      description: 'Future-proof encryption solution designed to protect against quantum computing threats with post-quantum cryptography.',
      category: 'quantum-computing',
      image: '/api/placeholder/600/400',
      rating: 4.8,
      users: 5600,
      price: 'Enterprise Pricing',
      features: ['Post-Quantum Crypto', 'Key Management', 'Compliance Ready', 'Performance Optimized'],
      tags: ['Quantum Security', 'Encryption', 'Compliance', 'Future-Proof'],
      status: 'Beta',
      trending: true
    }
  ];

  const filteredContent = featuredContent.filter(item => item.category === activeTab);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Ultimate Content Showcase 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions for 2026
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover cutting-edge AI, quantum computing, and automation solutions that are transforming industries and reshaping the future of technology.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'New' ? 'bg-green-100 text-green-800' :
                    item.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                    item.status === 'Popular' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-600">{item.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.users.toLocaleString()} users
                    </div>
                    <div className="font-medium text-gray-900">
                      {item.price}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      <Play className="w-4 h-4 mr-2" />
                      Learn More
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredCard === item.id ? 1 : 0 
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                >
                  <div className="text-center text-white">
                    <h4 className="text-xl font-bold mb-2">Explore Details</h4>
                    <p className="text-sm mb-4">Get comprehensive information about this solution</p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore All Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;