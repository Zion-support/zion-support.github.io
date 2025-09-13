import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComprehensiveContentDiscovery2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentCategories = {
    all: {
      label: 'All Content',
      icon: '🌟',
      color: 'from-purple-500 to-indigo-500'
    },
    ai: {
      label: 'AI Services',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-500'
    },
    case: {
      label: 'Case Studies',
      icon: '📊',
      color: 'from-green-500 to-emerald-500'
    },
    tech: {
      label: 'Technology',
      icon: '⚛️',
      color: 'from-orange-500 to-red-500'
    },
    quantum: {
      label: 'Quantum AI',
      icon: '🔮',
      color: 'from-pink-500 to-purple-500'
    }
  };

  const contentItems = [
    {
      id: 1,
      title: "Advanced AI Services 2026",
      description: "Revolutionary AI solutions including Quantum-Enhanced AI, Autonomous Agents, and Neural Interface Systems",
      category: "ai",
      link: "/advanced-ai-services-2026",
      image: "🤖",
      featured: true,
      metrics: "500+ Models Deployed"
    },
    {
      id: 2,
      title: "AI Success Stories & Case Studies",
      description: "Real business transformations from Fortune 500 companies with measurable ROI and results",
      category: "case",
      link: "/ai-success-stories-2026",
      image: "🏆",
      featured: true,
      metrics: "85% Average ROI"
    },
    {
      id: 3,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum-enhanced AI algorithms delivering 1000x faster processing",
      category: "quantum",
      link: "/quantum-computing-solutions",
      image: "⚛️",
      featured: true,
      metrics: "1000x Faster Processing"
    },
    {
      id: 4,
      title: "Enterprise AI Platform",
      description: "Complete AI infrastructure with enterprise-grade security and 99.9% uptime SLA",
      category: "ai",
      link: "/advanced-ai-services-2026",
      image: "🏢",
      featured: false,
      metrics: "99.9% Uptime SLA"
    },
    {
      id: 5,
      title: "Neural Interface Systems",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      category: "tech",
      link: "/advanced-ai-services-2026",
      image: "🧠",
      featured: false,
      metrics: "Enhanced Productivity"
    },
    {
      id: 6,
      title: "Autonomous AI Agents",
      description: "Self-learning AI agents that operate independently 24/7 to optimize business processes",
      category: "ai",
      link: "/advanced-ai-services-2026",
      image: "🤖",
      featured: false,
      metrics: "24/7 Operation"
    },
    {
      id: 7,
      title: "Predictive Analytics AI",
      description: "Advanced predictive models with 95%+ accuracy for forecasting trends and behaviors",
      category: "ai",
      link: "/advanced-ai-services-2026",
      image: "📊",
      featured: false,
      metrics: "95%+ Accuracy"
    },
    {
      id: 8,
      title: "Computer Vision AI",
      description: "Advanced visual recognition systems with human-level accuracy and beyond",
      category: "tech",
      link: "/advanced-ai-services-2026",
      image: "👁️",
      featured: false,
      metrics: "Human-Level Accuracy"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              🔍 COMPREHENSIVE CONTENT DISCOVERY
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Latest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                AI Innovations & Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge AI services, real success stories, and revolutionary technologies 
              that are transforming businesses worldwide.
            </p>
          </motion.div>
        </div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg mb-4">
                    <div className="text-sm font-semibold text-cyan-700">{item.metrics}</div>
                  </div>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold text-sm transition-colors duration-200"
                  >
                    Explore Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="group cursor-pointer"
                >
                  <Link to={item.link}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {item.image}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-2 rounded-lg">
                          <div className="text-xs font-semibold text-gray-700">{item.metrics}</div>
                        </div>
                      </div>
                      
                      <div className={`h-1 bg-gradient-to-r ${contentCategories[item.category].color}`}></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our advanced AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                🚀 Get Started Today
              </Link>
              <Link
                to="/ai-success-stories-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                📊 View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}