<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentShowcase2025: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> origin/cursor/create-and-deploy-new-content-5cd4

  const contentItems = [
    {
      id: 1,
<<<<<<< HEAD
      title: "AI 2025 Ultimate Content Revolution",
      description: "Transform your business with revolutionary AI-powered content strategies",
      type: "blog",
      category: "ai-content",
      roi: "5000%",
      readTime: "8 min read",
      featured: true,
      link: "/blog/ai-2025-ultimate-content-revolution",
      image: "🤖",
      tags: ["AI", "Content", "Revolution", "2025"]
    },
    {
      id: 2,
      title: "AI Content Revolution: 5000% ROI Success",
      description: "Real Fortune 500 case study showing unprecedented results",
      type: "case-study",
      category: "success-stories",
      roi: "5000%",
      readTime: "5 min read",
      featured: true,
      link: "/case-studies/ai-2025-content-revolution-5000-roi-success",
      image: "📈",
      tags: ["ROI", "Success", "Fortune 500", "Case Study"]
    },
    {
      id: 3,
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Complete guide to enterprise AI automation implementation",
      type: "guide",
      category: "automation",
      roi: "10,000%",
      readTime: "12 min read",
      featured: false,
      link: "/blog/ai-2025-enterprise-automation-revolution",
      image: "⚡",
      tags: ["Automation", "Enterprise", "AI", "Guide"]
    },
    {
      id: 4,
      title: "Quantum AI 2026 Business Transformation",
      description: "Next-generation quantum AI solutions for business",
      type: "future-tech",
      category: "quantum",
      roi: "15,000%",
      readTime: "10 min read",
      featured: false,
      link: "/blog/quantum-ai-2026-business-transformation-ultimate-guide",
      image: "🔮",
      tags: ["Quantum", "AI", "Future", "2026"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2025",
      description: "Breakthrough neural interface technology for business applications",
      type: "innovation",
      category: "neural",
      roi: "8,000%",
      readTime: "7 min read",
      featured: false,
      link: "/case-studies/neural-interface-revolution-2025",
      image: "🧠",
      tags: ["Neural", "Interface", "Innovation", "2025"]
    },
    {
      id: 6,
      title: "Fortune 500 AI Transformation Success",
      description: "How Fortune 500 companies achieved 10,000% ROI with AI",
      type: "case-study",
      category: "success-stories",
      roi: "10,000%",
      readTime: "6 min read",
      featured: false,
      link: "/case-studies/fortune-500-ai-transformation",
      image: "🏆",
      tags: ["Fortune 500", "Success", "AI", "Transformation"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-content', name: 'AI Content', count: contentItems.filter(item => item.category === 'ai-content').length },
    { id: 'success-stories', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'quantum', name: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'neural', name: 'Neural Tech', count: contentItems.filter(item => item.category === 'neural').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  const getTypeColor = (type) => {
    const colors = {
      'blog': 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      'guide': 'bg-purple-100 text-purple-800',
      'future-tech': 'bg-pink-100 text-pink-800',
      'innovation': 'bg-orange-100 text-orange-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎯 INTERACTIVE CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI content, success stories, and innovative solutions that are transforming businesses worldwide.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-6xl">
                {item.image}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type and ROI Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                    {item.roi} ROI
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800 transition-colors">
                    {item.featured ? 'Featured' : 'Read More'} →
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredItem === item.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-10 pointer-events-none"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Join thousands of companies already experiencing unprecedented growth with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
      title: "AI Future Trends 2025",
      description: "Discover the revolutionary AI trends that will reshape industries and transform businesses in 2025 and beyond",
      icon: "🔮",
      color: "from-purple-500 to-pink-500",
      href: "/pages/AIFutureTrends2025",
      features: ["Synthetic Intelligence", "Edge AI Revolution", "Autonomous AI Agents", "Neural Interface AI"]
    },
    {
      id: 2,
      title: "Advanced Analytics Insights",
      description: "Transform your data into actionable insights with cutting-edge analytics solutions and AI-powered predictions",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      href: "/pages/AdvancedAnalyticsInsights2025",
      features: ["Predictive Analytics", "Real-time Intelligence", "AI-Powered Insights", "Advanced Visualization"]
    },
    {
      id: 3,
      title: "Innovation Showcase 2025",
      description: "Explore breakthrough technologies and innovations that are defining the future of business and society",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500",
      href: "/pages/InnovationShowcase2025",
      features: ["Consciousness AI", "Quantum Reality", "Neural Augmentation", "Synthetic Universes"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 INTERACTIVE CONTENT SHOWCASE • 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            🚀 Revolutionary Content Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience our groundbreaking content with interactive showcases, dynamic animations, 
            and immersive technology demonstrations
          </motion.p>
        </div>

        {/* Interactive Content Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                      className="text-8xl"
                    >
                      {contentItems[currentContent].icon}
                    </motion.div>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                        className="text-3xl font-bold"
                      >
                        {contentItems[currentContent].title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="flex space-x-2 mt-2"
                      >
                        {contentItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentContent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentContent ? 'bg-white' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg opacity-90 leading-relaxed"
                  >
                    {contentItems[currentContent].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {contentItems[currentContent].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm border border-white/20"
                      >
                        ✨ {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1 }}
                  >
                    <a
                      href={contentItems[currentContent].href}
                      className={`inline-block bg-gradient-to-r ${contentItems[currentContent].color} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 transform`}
                    >
                      🚀 Explore {contentItems[currentContent].title.split(' ')[0]} →
                    </a>
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                    className={`bg-gradient-to-br ${contentItems[currentContent].color} rounded-2xl p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">{contentItems[currentContent].icon}</div>
                      <h4 className="text-2xl font-bold mb-4">{contentItems[currentContent].title}</h4>
                      <p className="opacity-90 mb-6">
                        {contentItems[currentContent].description}
                      </p>
                      <div className="space-y-2">
                        {contentItems[currentContent].features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.3 + index * 0.1 }}
                            className="bg-white/20 rounded-lg p-2 text-sm"
                          >
                            ⭐ {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center space-x-4 mt-12"
        >
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentContent(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                index === currentContent
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {item.icon} {item.title.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
            🎯 Get Exclusive Access to All Revolutionary Content →
          </div>
        </motion.div>
      </div>
    </motion.div>
>>>>>>> origin/cursor/create-and-deploy-new-content-5cd4
  );
};

export default InteractiveContentShowcase2025;