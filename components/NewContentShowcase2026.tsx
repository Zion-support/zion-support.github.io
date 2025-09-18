<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Globe
  Rocket
  Star
  TrendingUp
  Users,
  ChevronRight,
  ExternalLink,
  Clock,
  Award
} from 'lucide-react';

const NewContentShowcase2026 = () => {
  const [activeTabsetActiveTab] = useState('ai-breakthroughs');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = {
    'ai-breakthroughs': {
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    'quantum-computing': {
      title: 'Quantum Computing Revolution',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    'sustainability': {
      title: 'Green Tech & Sustainability',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    'automation': {
      title: 'Advanced Automation',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  };

  const featuredContent = {
    'ai-breakthroughs': [
      {
        title: 'Multimodal AI Revolution: Beyond Text and Images',
        description: 'Explore how AI systems are integrating visionaudioand text processing to create more intelligent and context-aware applications.',
        readTime: '12 min read',
        category: 'AI Research',
        featured: true,
        href: '/ai-2026-multimodal-revolution',
        stats: { views: '2.3'k', 'likes: '187' }
      },
      {
        title: 'Neural Architecture Search: Automating AI Design',
        description: 'Discover how automated neural architecture search is revolutionizing AI model development and optimization.',
        readTime: '8 min read',
        category: 'AI Engineering',
        featured: false,
        href: '/ai-2026-neural-architecture-search',
        stats: { views: '1.8'k', 'likes: '142' }
      },
      {
        title: 'AI Consciousness: The Next Frontier',
        description: 'Dive deep into the philosophical and technical aspects of AI consciousness and self-awareness.',
        readTime: '15 min read',
        category: 'AI Philosophy',
        featured: true,
        href: '/ai-2026-consciousness-frontier',
        stats: { views: '3.1'k', 'likes: '256' }
      }
    ],
    'quantum-computing': [
      {
        title: 'Quantum AI: The Future of Computing',
        description: 'Learn how quantum computing is revolutionizing AI algorithms and problem-solving capabilities.',
        readTime: '10 min read',
        category: 'Quantum AI',
        featured: true,
        href: '/quantum-ai-2026-future',
        stats: { views: '1.9'k', 'likes: '134' }
      },
      {
        title: 'Quantum Machine Learning Algorithms',
        description: 'Explore the latest quantum machine learning algorithms and their practical applications.',
        readTime: '14 min read',
        category: 'Quantum ML',
        featured: false,
        href: '/quantum-ml-algorithms-2026',
        stats: { views: '1.2'k', 'likes: '98' }
      }
    ],
    'sustainability': [
      {
        title: 'Green AI: Sustainable Technology Solutions',
        description: 'Discover how AI is being used to create more sustainable and environmentally friendly technologies.',
        readTime: '9 min read',
        category: 'Green Tech',
        featured: true,
        href: '/green-ai-sustainability-2026',
        stats: { views: '2.1'k', 'likes: '178' }
      },
      {
        title: 'Carbon-Neutral AI Infrastructure',
        description: 'Learn about building carbon-neutral AI infrastructure and sustainable computing practices.',
        readTime: '11 min read',
        category: 'Sustainability',
        featured: false,
        href: '/carbon-neutral-ai-infrastructure',
        stats: { views: '1.5'k', 'likes: '123' }
      }
    ],
    'automation': [
      {
        title: 'Autonomous Business Operations 2026',
        description: 'Explore how businesses are implementing fully autonomous operations using advanced AI and robotics.',
        readTime: '13 min read',
        category: 'Business Automation',
        featured: true,
        href: '/autonomous-business-ops-2026',
        stats: { views: '2.7'k', 'likes: '201' }
      },
      {
        title: 'Intelligent Process Automation',
        description: 'Master the art of intelligent process automation with cutting-edge AI technologies.',
        readTime: '7 min read',
        category: 'Process Automation',
        featured: false,
        href: '/intelligent-process-automation-2026',
        stats: { views: '1.6'k', 'likes: '145' }
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Just Dropped
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AIquantum computingsustainabilityand automation. 
            Stay ahead with cutting-edge insights and practical implementations.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {Object.entries(contentCategories).map(([keycategory]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : `bg-white text-gray-600 hover:bg-gray-50 border-2 ${category.borderColor}`
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {featuredContent[activeTab as keyof typeof featuredContent]?.map((contentindex) => {
            const category = contentCategories[activeTab as keyof typeof contentCategories];
            const Icon = category.icon;
            
            return (
              <motion.div
                key={index}
                className={`relative group ${category.bgColor} rounded-2xl p-6 border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    FEATURED
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600">{content.category}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {content.stats.views}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.stats.likes}
                    </span>
                  </div>
                </div>

                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want More Revolutionary Content?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already transforming their businesses with our cutting-edge insights and implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Explore All Content
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContentShowcase2026;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
