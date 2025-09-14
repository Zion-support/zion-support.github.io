'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, TrendingUp, Users, Award, Zap, Globe, Shield } from 'lucide-react';
import NewContent2025UltimateShowcase from '../../components/NewContent2025UltimateShowcase';
import UltimateContentDiscoveryWidget2025 from '../../components/UltimateContentDiscoveryWidget2025';
import NewsletterSignup2025 from '../../components/NewsletterSignup2025';

const NewContentShowcase2025 = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough",
      description: "Revolutionary AI solutions that are transforming industries worldwide with unprecedented efficiency and accuracy.",
      category: "AI Solutions",
      rating: 5,
      readTime: "8 min read",
      trending: true,
      href: "/ai-2025-ultimate-breakthrough",
      image: "/api/placeholder/600/400",
      stats: "500% ROI Increase"
    },
    {
      id: 2,
      title: "Advanced Automation Solutions",
      description: "Next-generation automation tools designed for enterprise efficiency and scalability across all industries.",
      category: "Automation",
      rating: 4.9,
      readTime: "6 min read",
      trending: true,
      href: "/advanced-automation-solutions-2025",
      image: "/api/placeholder/600/400",
      stats: "300% Performance Boost"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution",
      description: "Exploring the future of quantum-powered solutions and their potential to revolutionize computing.",
      category: "Quantum Tech",
      rating: 4.8,
      readTime: "10 min read",
      trending: false,
      href: "/quantum-computing-2025",
      image: "/api/placeholder/600/400",
      stats: "Next-Gen Computing"
    },
    {
      id: 4,
      title: "Performance Analytics Dashboard",
      description: "Real-time insights and monitoring tools for optimal performance across all business operations.",
      category: "Analytics",
      rating: 4.7,
      readTime: "5 min read",
      trending: true,
      href: "/performance-analytics-2025",
      image: "/api/placeholder/600/400",
      stats: "Real-time Insights"
    },
    {
      id: 5,
      title: "Neural Interface Technology",
      description: "Cutting-edge neural interface solutions that bridge the gap between human cognition and AI systems.",
      category: "Neural Tech",
      rating: 4.9,
      readTime: "7 min read",
      trending: false,
      href: "/neural-interface-revolution-2026",
      image: "/api/placeholder/600/400",
      stats: "Mind-Machine Interface"
    },
    {
      id: 6,
      title: "Enterprise Security Solutions",
      description: "Advanced security frameworks and protocols designed to protect enterprise data and operations.",
      category: "Security",
      rating: 4.8,
      readTime: "6 min read",
      trending: true,
      href: "/enterprise-security-2025",
      image: "/api/placeholder/600/400",
      stats: "99.99% Uptime"
    }
  ];

  const categories = [
    { name: "All Content", count: 24, icon: <Zap className="w-5 h-5" /> },
    { name: "AI Solutions", count: 8, icon: <Users className="w-5 h-5" /> },
    { name: "Automation", count: 6, icon: <Award className="w-5 h-5" /> },
    { name: "Analytics", count: 4, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Quantum Tech", count: 3, icon: <Globe className="w-5 h-5" /> },
    { name: "Security", count: 3, icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              New Content Showcase
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the latest innovations, breakthrough technologies, and cutting-edge solutions 
              that are shaping the future of AI and automation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {category.icon}
              <span className="text-white font-medium">{category.name}</span>
              <span className="text-gray-400 text-sm">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Featured Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Trending Badge */}
              {item.trending && (
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-xs font-medium text-white">Trending</span>
                </div>
              )}

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {item.category === 'AI Solutions' && '🤖'}
                    {item.category === 'Automation' && '⚡'}
                    {item.category === 'Quantum Tech' && '🔬'}
                    {item.category === 'Analytics' && '📊'}
                    {item.category === 'Neural Tech' && '🧠'}
                    {item.category === 'Security' && '🛡️'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-400">{item.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{item.readTime}</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-400">{item.stats}</div>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content Discovery Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <UltimateContentDiscoveryWidget2025 />
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup2025 />
      </div>

      {/* Ultimate Showcase */}
      <div className="py-16">
        <NewContent2025UltimateShowcase />
      </div>
    </div>
  );
};

export default NewContentShowcase2025;