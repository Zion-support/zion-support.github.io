'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, TrendingUp, Sparkles, Zap, Target } from 'lucide-react';

const InteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentCategories = {
    trending: {
      title: '🔥 Trending Now',
      description: 'Most popular content this week',
      color: 'from-red-500 to-orange-500'
    },
    breakthrough: {
      title: '🚀 Breakthrough Innovations',
      description: 'Revolutionary AI and tech advances',
      color: 'from-blue-500 to-purple-500'
    },
    tutorials: {
      title: '📚 Master Classes',
      description: 'Step-by-step implementation guides',
      color: 'from-green-500 to-teal-500'
    },
    caseStudies: {
      title: '🏆 Success Stories',
      description: 'Real-world transformation results',
      color: 'from-yellow-500 to-orange-500'
    }
  };

  const contentItems = {
    trending: [
      {
        id: 1,
        title: 'AI 2025: The Consciousness Revolution',
        description: 'How artificial general intelligence is reshaping human-AI collaboration',
        readTime: '12 min',
        views: '2.3k',
        rating: 4.9,
        category: 'AI Research',
        featured: true,
        icon: '🧠',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        id: 2,
        title: 'Quantum-Neural Fusion: The Next Frontier',
        description: 'Exploring the convergence of quantum computing and neural networks',
        readTime: '18 min',
        views: '1.8k',
        rating: 4.8,
        category: 'Quantum AI',
        featured: false,
        icon: '⚛️',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        id: 3,
        title: 'Enterprise AI Transformation Playbook',
        description: 'Complete guide to implementing AI at enterprise scale',
        readTime: '25 min',
        views: '3.1k',
        rating: 4.9,
        category: 'Implementation',
        featured: true,
        icon: '🏢',
        gradient: 'from-green-500 to-emerald-500'
      }
    ],
    breakthrough: [
      {
        id: 4,
        title: 'Neural Interface Breakthrough 2025',
        description: 'Direct brain-computer interfaces becoming reality',
        readTime: '15 min',
        views: '1.5k',
        rating: 4.7,
        category: 'Neural Tech',
        featured: true,
        icon: '🔗',
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        id: 5,
        title: 'Autonomous AI Agents Revolution',
        description: 'Self-managing AI systems transforming business operations',
        readTime: '20 min',
        views: '2.1k',
        rating: 4.8,
        category: 'Automation',
        featured: false,
        icon: '🤖',
        gradient: 'from-orange-500 to-red-500'
      }
    ],
    tutorials: [
      {
        id: 6,
        title: 'Build Your First AI Assistant',
        description: 'Complete tutorial from zero to production-ready AI',
        readTime: '45 min',
        views: '4.2k',
        rating: 4.9,
        category: 'Tutorial',
        featured: true,
        icon: '🛠️',
        gradient: 'from-teal-500 to-blue-500'
      },
      {
        id: 7,
        title: 'Advanced Prompt Engineering Mastery',
        description: 'Professional techniques for optimal AI interactions',
        readTime: '30 min',
        views: '3.7k',
        rating: 4.8,
        category: 'Skills',
        featured: false,
        icon: '⚡',
        gradient: 'from-yellow-500 to-orange-500'
      }
    ],
    caseStudies: [
      {
        id: 8,
        title: 'Fortune 500 AI Transformation',
        description: '$50M savings achieved through strategic AI implementation',
        readTime: '22 min',
        views: '2.8k',
        rating: 4.9,
        category: 'Case Study',
        featured: true,
        icon: '💼',
        gradient: 'from-emerald-500 to-green-500'
      },
      {
        id: 9,
        title: 'Startup to Unicorn: AI-Powered Growth',
        description: 'How AI automation scaled a startup to $1B valuation',
        readTime: '18 min',
        views: '1.9k',
        rating: 4.7,
        category: 'Success Story',
        featured: false,
        icon: '🚀',
        gradient: 'from-pink-500 to-rose-500'
      }
    ]
  };

  const currentContent = contentItems[activeTab as keyof typeof contentItems];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Interactive Content Hub</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of cutting-edge AI insights, breakthrough innovations, 
            and practical implementation guides that are transforming industries worldwide.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 ${
                  hoveredCard === item.id ? 'transform scale-105 shadow-2xl' : ''
                } ${item.featured ? 'ring-2 ring-purple-500/50' : ''}`}>
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* Category */}
                  <div className="text-purple-400 text-sm font-medium mb-2">{item.category}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.views}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {item.rating}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Link
                      href={`/content/${item.id}`}
                      className={`w-full bg-gradient-to-r ${item.gradient} text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Download Resources
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;