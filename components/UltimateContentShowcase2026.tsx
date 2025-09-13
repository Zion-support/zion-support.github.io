'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Shield,
  Target,
  Lightbulb,
  Globe,
  Cpu
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-tools');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentCategories = {
    'ai-tools': {
      title: 'AI Tools & Solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          id: 1,
          title: 'AI-Powered Business Automation Suite',
          description: 'Complete automation platform with 500+ pre-built workflows',
          category: 'Automation',
          readTime: '8 min read',
          views: '12.5K',
          rating: 4.9,
          featured: true,
          tags: ['AI', 'Automation', 'Business'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 2,
          title: 'Quantum Neural Processing Engine',
          description: 'Revolutionary quantum-classical hybrid AI processing',
          category: 'Quantum AI',
          readTime: '12 min read',
          views: '8.2K',
          rating: 4.8,
          featured: true,
          tags: ['Quantum', 'AI', 'Neural Networks'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 3,
          title: 'Advanced Predictive Analytics Platform',
          description: 'Machine learning models for business forecasting',
          category: 'Analytics',
          readTime: '6 min read',
          views: '15.3K',
          rating: 4.7,
          tags: ['ML', 'Analytics', 'Prediction'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 4,
          title: 'Autonomous Code Generation System',
          description: 'AI that writes, tests, and deploys production code',
          category: 'Development',
          readTime: '10 min read',
          views: '9.8K',
          rating: 4.9,
          featured: true,
          tags: ['Code', 'AI', 'Development'],
          image: '/api/placeholder/400/250'
        }
      ]
    },
    'case-studies': {
      title: 'Success Stories',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      items: [
        {
          id: 5,
          title: 'Fortune 500 Company: 300% ROI in 6 Months',
          description: 'How we transformed their operations with AI automation',
          category: 'Enterprise',
          readTime: '15 min read',
          views: '25.1K',
          rating: 4.9,
          featured: true,
          tags: ['ROI', 'Enterprise', 'Success'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 6,
          title: 'Startup to Unicorn: AI-Powered Growth',
          description: 'From $0 to $1B valuation using our AI solutions',
          category: 'Startup',
          readTime: '12 min read',
          views: '18.7K',
          rating: 4.8,
          tags: ['Startup', 'Growth', 'AI'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 7,
          title: 'Healthcare Revolution: AI Diagnosis System',
          description: '95% accuracy in medical diagnosis using AI',
          category: 'Healthcare',
          readTime: '18 min read',
          views: '22.3K',
          rating: 4.9,
          featured: true,
          tags: ['Healthcare', 'AI', 'Diagnosis'],
          image: '/api/placeholder/400/250'
        }
      ]
    },
    'tutorials': {
      title: 'Learning Hub',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          id: 8,
          title: 'Complete AI Implementation Guide 2026',
          description: 'Step-by-step guide to implementing AI in your business',
          category: 'Tutorial',
          readTime: '45 min read',
          views: '35.2K',
          rating: 4.8,
          featured: true,
          tags: ['Tutorial', 'AI', 'Implementation'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 9,
          title: 'Quantum Computing Fundamentals',
          description: 'Master quantum computing concepts and applications',
          category: 'Education',
          readTime: '30 min read',
          views: '28.9K',
          rating: 4.7,
          tags: ['Quantum', 'Education', 'Computing'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 10,
          title: 'Advanced Machine Learning Techniques',
          description: 'Deep dive into cutting-edge ML algorithms',
          category: 'Technical',
          readTime: '60 min read',
          views: '31.5K',
          rating: 4.9,
          featured: true,
          tags: ['ML', 'Technical', 'Advanced'],
          image: '/api/placeholder/400/250'
        }
      ]
    },
    'insights': {
      title: 'Industry Insights',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          id: 11,
          title: 'AI Trends 2026: What to Expect',
          description: 'Comprehensive analysis of upcoming AI trends',
          category: 'Trends',
          readTime: '20 min read',
          views: '42.1K',
          rating: 4.8,
          featured: true,
          tags: ['Trends', 'AI', '2026'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 12,
          title: 'The Future of Work: AI Integration',
          description: 'How AI will reshape the workplace in 2026',
          category: 'Future',
          readTime: '25 min read',
          views: '38.7K',
          rating: 4.7,
          tags: ['Future', 'Work', 'AI'],
          image: '/api/placeholder/400/250'
        },
        {
          id: 13,
          title: 'Quantum Computing Breakthroughs',
          description: 'Latest developments in quantum computing',
          category: 'Research',
          readTime: '22 min read',
          views: '29.4K',
          rating: 4.9,
          featured: true,
          tags: ['Quantum', 'Research', 'Breakthrough'],
          image: '/api/placeholder/400/250'
        }
      ]
    }
  };

  const currentContent = contentCategories[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Hub 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI tools, success stories, tutorials, and industry insights 
            that are transforming businesses worldwide.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
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
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentContent.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.views}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${currentContent.color} text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Explore Content</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                {hoveredItem === item.id && (
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;