'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  Play,
  Download,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const InteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [hoveredCard, setHoveredCard] = useState(null);

  const contentCategories = {
    'ai-solutions': {
      title: 'AI Solutions',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    'automation': {
      title: 'Automation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    'quantum': {
      title: 'Quantum Computing',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    'security': {
      title: 'Security',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  };

  const contentItems = {
    'ai-solutions': [
      {
        id: 1,
        title: 'Neural Language Processing 2025',
        description: 'Advanced AI that understands context, emotion, and intent with 99.7% accuracy.',
        image: '/api/placeholder/400/250',
        category: 'AI Solutions',
        rating: 4.9,
        users: '10,000+',
        price: 'Starting at $299/month',
        features: ['Real-time Processing', 'Multi-language Support', 'Emotion Detection'],
        href: '/ai-2025-neural-language-processing'
      },
      {
        id: 2,
        title: 'Predictive Analytics Engine',
        description: 'Forecast business trends with 95% accuracy using machine learning algorithms.',
        image: '/api/placeholder/400/250',
        category: 'AI Solutions',
        rating: 4.8,
        users: '5,000+',
        price: 'Starting at $199/month',
        features: ['Trend Analysis', 'Risk Assessment', 'ROI Prediction'],
        href: '/ai-2025-predictive-analytics'
      },
      {
        id: 3,
        title: 'Computer Vision Suite',
        description: 'Advanced image recognition and analysis for industrial applications.',
        image: '/api/placeholder/400/250',
        category: 'AI Solutions',
        rating: 4.9,
        users: '8,000+',
        price: 'Starting at $399/month',
        features: ['Object Detection', 'Quality Control', 'Real-time Analysis'],
        href: '/ai-2025-computer-vision'
      }
    ],
    'automation': [
      {
        id: 4,
        title: 'Workflow Automation Platform',
        description: 'Automate complex business processes with drag-and-drop interface.',
        image: '/api/placeholder/400/250',
        category: 'Automation',
        rating: 4.7,
        users: '15,000+',
        price: 'Starting at $149/month',
        features: ['Visual Workflow Builder', 'API Integration', 'Custom Triggers'],
        href: '/automation-workflow-platform'
      },
      {
        id: 5,
        title: 'Intelligent Document Processing',
        description: 'Extract and process data from documents automatically with 98% accuracy.',
        image: '/api/placeholder/400/250',
        category: 'Automation',
        rating: 4.8,
        users: '12,000+',
        price: 'Starting at $249/month',
        features: ['OCR Technology', 'Data Extraction', 'Format Conversion'],
        href: '/automation-document-processing'
      }
    ],
    'quantum': [
      {
        id: 6,
        title: 'Quantum Computing Cloud',
        description: 'Access quantum computing power through our secure cloud platform.',
        image: '/api/placeholder/400/250',
        category: 'Quantum Computing',
        rating: 4.9,
        users: '2,000+',
        price: 'Starting at $999/month',
        features: ['Quantum Algorithms', 'Secure Processing', 'Real-time Results'],
        href: '/quantum-computing-cloud'
      }
    ],
    'security': [
      {
        id: 7,
        title: 'Zero-Trust Security Framework',
        description: 'Comprehensive security solution with continuous verification.',
        image: '/api/placeholder/400/250',
        category: 'Security',
        rating: 4.9,
        users: '20,000+',
        price: 'Starting at $199/month',
        features: ['Continuous Monitoring', 'Threat Detection', 'Automated Response'],
        href: '/security-zero-trust'
      }
    ]
  };

  const currentItems = contentItems[activeTab] || [];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Interactive Content Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our cutting-edge solutions through interactive demonstrations, 
            real-time demos, and hands-on experiences.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : `bg-white text-gray-700 hover:bg-gray-100 ${category.borderColor} border-2`
              }`}
            >
              {category.icon}
              <span className="font-semibold">{category.title}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${
                activeTab === key ? 'rotate-90' : 'group-hover:translate-x-1'
              }`} />
            </button>
          ))}
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
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {contentCategories[activeTab]?.icon}
                    </div>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Download className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${contentCategories[activeTab]?.bgColor} ${contentCategories[activeTab]?.borderColor} border`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{item.users} users</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.price}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.href}
                    className={`group/btn inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${contentCategories[activeTab]?.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect */}
                {hoveredCard === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of companies already using our solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;