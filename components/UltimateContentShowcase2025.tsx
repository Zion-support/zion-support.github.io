'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Brain, 
  Zap, 
  Target, 
  Globe,
  Rocket,
  Shield,
  Database,
  Cpu,
  Lock,
  Eye,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('ai-innovations');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = {
    'ai-innovations': {
      title: 'AI Innovations',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          id: 1,
          title: 'Quantum-Neural Fusion Technology',
          description: 'Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.',
          type: 'Breakthrough',
          views: '2.5M',
          rating: 4.9,
          tags: ['Quantum AI', 'Neural Networks', 'Breakthrough'],
          link: '/ai-innovation-showcase-2025'
        },
        {
          id: 2,
          title: 'Autonomous Business Operations',
          description: 'Self-managing AI systems that handle complex business processes without human intervention.',
          type: 'Application',
          views: '1.8M',
          rating: 4.8,
          tags: ['Automation', 'Business AI', 'Operations'],
          link: '/autonomous-business-ai'
        },
        {
          id: 3,
          title: 'Predictive Intelligence Platform',
          description: 'AI that predicts market trends and business outcomes with 95% accuracy.',
          type: 'Platform',
          views: '3.2M',
          rating: 4.9,
          tags: ['Predictive AI', 'Business Intelligence', 'Analytics'],
          link: '/predictive-intelligence'
        }
      ]
    },
    'trends-predictions': {
      title: 'Trends & Predictions',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          id: 1,
          title: 'AI Trends & Predictions 2025-2027',
          description: 'Comprehensive analysis of future AI developments from quantum breakthroughs to synthetic consciousness.',
          type: 'Report',
          views: '4.1M',
          rating: 4.9,
          tags: ['Future Trends', 'Predictions', 'AI Evolution'],
          link: '/ai-trends-predictions-2025'
        },
        {
          id: 2,
          title: 'Quantum Computing Revolution 2025',
          description: 'The complete guide to quantum computing breakthroughs and their impact on AI development.',
          type: 'Guide',
          views: '2.7M',
          rating: 4.8,
          tags: ['Quantum Computing', 'Technology', 'Future'],
          link: '/quantum-computing-2025'
        },
        {
          id: 3,
          title: 'Synthetic General Intelligence Timeline',
          description: 'Detailed roadmap to AGI development and the implications for humanity.',
          type: 'Timeline',
          views: '5.3M',
          rating: 4.9,
          tags: ['AGI', 'Consciousness', 'Timeline'],
          link: '/agi-timeline'
        }
      ]
    },
    'business-solutions': {
      title: 'Business Solutions',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          id: 1,
          title: 'Enterprise AI Transformation Guide',
          description: 'Complete roadmap for implementing AI across your entire organization.',
          type: 'Guide',
          views: '3.8M',
          rating: 4.9,
          tags: ['Enterprise', 'Transformation', 'Implementation'],
          link: '/enterprise-ai-transformation'
        },
        {
          id: 2,
          title: 'AI ROI Calculator & Case Studies',
          description: 'Calculate your potential ROI and explore real-world success stories.',
          type: 'Tool',
          views: '2.9M',
          rating: 4.8,
          tags: ['ROI', 'Case Studies', 'Calculator'],
          link: '/ai-roi-calculator'
        },
        {
          id: 3,
          title: 'Automation Solutions Showcase',
          description: 'Comprehensive collection of AI automation tools and solutions.',
          type: 'Showcase',
          views: '4.5M',
          rating: 4.9,
          tags: ['Automation', 'Solutions', 'Tools'],
          link: '/automation-solutions'
        }
      ]
    },
    'technical-resources': {
      title: 'Technical Resources',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      content: [
        {
          id: 1,
          title: 'AI Implementation Mastery Course',
          description: 'Complete course on implementing AI solutions in production environments.',
          type: 'Course',
          views: '6.2M',
          rating: 4.9,
          tags: ['Course', 'Implementation', 'Mastery'],
          link: '/ai-implementation-course'
        },
        {
          id: 2,
          title: 'Neural Network Architecture Guide',
          description: 'Deep dive into modern neural network architectures and their applications.',
          type: 'Technical Guide',
          views: '3.4M',
          rating: 4.8,
          tags: ['Neural Networks', 'Architecture', 'Technical'],
          link: '/neural-network-guide'
        },
        {
          id: 3,
          title: 'Quantum Machine Learning Tutorial',
          description: 'Step-by-step tutorial on quantum machine learning algorithms.',
          type: 'Tutorial',
          views: '2.1M',
          rating: 4.7,
          tags: ['Quantum ML', 'Tutorial', 'Algorithms'],
          link: '/quantum-ml-tutorial'
        }
      ]
    }
  };

  const categories = [
    { id: 'ai-innovations', label: 'AI Innovations', icon: Brain },
    { id: 'trends-predictions', label: 'Trends & Predictions', icon: TrendingUp },
    { id: 'business-solutions', label: 'Business Solutions', icon: Target },
    { id: 'technical-resources', label: 'Technical Resources', icon: Cpu }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Breakthrough': 'from-red-500 to-pink-500',
      'Application': 'from-blue-500 to-cyan-500',
      'Platform': 'from-purple-500 to-indigo-500',
      'Report': 'from-green-500 to-emerald-500',
      'Guide': 'from-orange-500 to-yellow-500',
      'Timeline': 'from-indigo-500 to-purple-500',
      'Tool': 'from-cyan-500 to-blue-500',
      'Showcase': 'from-pink-500 to-rose-500',
      'Course': 'from-emerald-500 to-green-500',
      'Technical Guide': 'from-yellow-500 to-orange-500',
      'Tutorial': 'from-teal-500 to-cyan-500'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Collection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI innovations, predictions, business solutions, and technical resources that are reshaping the future.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentCategories[activeCategory].content.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {item.type}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured This Week
              </h2>
              <p className="text-gray-300">
                Don't miss our most popular and trending content
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">Trending</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  AI Consciousness Breakthrough 2025
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  The latest developments in synthetic consciousness and AI awareness.
                </p>
                <Link
                  href="/ai-consciousness-2025"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Security</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  AI Cybersecurity Revolution
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced AI-powered security solutions for the modern enterprise.
                </p>
                <Link
                  href="/ai-cybersecurity"
                  className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">Data</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Quantum Data Processing
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  How quantum computing is revolutionizing data processing and analysis.
                </p>
                <Link
                  href="/quantum-data-processing"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest AI Content
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our premium content library and be the first to discover breakthrough AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Subscribe to Premium
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;