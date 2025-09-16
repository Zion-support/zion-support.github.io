import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Star, Eye } from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const LatestContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const featuredPosts = getFeaturedBlogPosts().slice(0, 6);
  const recentPosts = getRecentBlogPosts(6);
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);

  const tabs = [
    { id: 'blog', label: 'Latest Blog Posts', count: featuredPosts.length },
    { id: 'services', label: 'Featured Services', count: featuredServices.length },
    { id: 'trending', label: 'Trending Content', count: recentPosts.length }
  ];

  const getContentByTab = () => {
    switch (activeTab) {
      case 'blog':
        return featuredPosts;
      case 'services':
        return featuredServices;
      case 'trending':
        return recentPosts;
      default:
        return featuredPosts;
    }
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Healthcare AI': 'from-blue-500 to-cyan-500',
      'Green Technology': 'from-green-500 to-emerald-500',
      'Workplace Innovation': 'from-purple-500 to-violet-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Smart Cities': 'from-orange-500 to-yellow-500',
      'Financial Technology': 'from-indigo-500 to-blue-500',
      'Education Technology': 'from-teal-500 to-green-500',
      'Manufacturing AI': 'from-gray-500 to-slate-500',
      'Retail Technology': 'from-pink-500 to-rose-500',
      'Transportation Technology': 'from-cyan-500 to-blue-500',
      'Technology Trends': 'from-violet-500 to-purple-500',
      'Innovation': 'from-yellow-500 to-orange-500',
      'Case Studies': 'from-emerald-500 to-teal-500',
      'AI & Machine Learning': 'from-blue-600 to-indigo-600',
      'Quantum Technology': 'from-purple-600 to-violet-600',
      'Neural Technology': 'from-pink-600 to-rose-600',
      'Revolutionary AI': 'from-red-600 to-pink-600',
      'Ultimate Technology': 'from-yellow-600 to-orange-600',
      'AI Automation': 'from-green-600 to-emerald-600',
      'AI Content Generation': 'from-cyan-600 to-blue-600',
      'AI Analytics': 'from-indigo-600 to-purple-600',
      'AI Security': 'from-red-600 to-orange-600',
      'Consciousness AI': 'from-violet-600 to-purple-600',
      'Holographic Technology': 'from-pink-600 to-violet-600',
      'Space Technology': 'from-blue-600 to-cyan-600',
      'Biotech AI': 'from-green-600 to-teal-600',
      'Autonomous AI': 'from-gray-600 to-slate-600',
      'Metaverse Technology': 'from-purple-600 to-pink-600',
      'Edge Computing': 'from-cyan-600 to-teal-600',
      'Digital Twin Technology': 'from-indigo-600 to-blue-600',
      'Blockchain Technology': 'from-orange-600 to-red-600',
      'Augmented Reality': 'from-pink-600 to-rose-600',
      'Wireless Technology': 'from-blue-600 to-indigo-600',
      'Revolutionary Technology': 'from-red-600 to-pink-600',
      'Neural Technology': 'from-violet-600 to-purple-600',
      'Quantum Technology': 'from-purple-600 to-violet-600',
      'Consciousness AI': 'from-pink-600 to-rose-600',
      'Ultimate Technology': 'from-yellow-600 to-orange-600',
      'AI Automation': 'from-green-600 to-emerald-600',
      'AI Content Generation': 'from-cyan-600 to-blue-600',
      'AI Analytics': 'from-indigo-600 to-purple-600',
      'AI Security': 'from-red-600 to-orange-600',
      'Consciousness AI': 'from-violet-600 to-purple-600',
      'Holographic Technology': 'from-pink-600 to-violet-600',
      'Space Technology': 'from-blue-600 to-cyan-600',
      'Biotech AI': 'from-green-600 to-teal-600',
      'Autonomous AI': 'from-gray-600 to-slate-600',
      'Metaverse Technology': 'from-purple-600 to-pink-600',
      'Edge Computing': 'from-cyan-600 to-teal-600',
      'Digital Twin Technology': 'from-indigo-600 to-blue-600',
      'Blockchain Technology': 'from-orange-600 to-red-600',
      'Augmented Reality': 'from-pink-600 to-rose-600',
      'Wireless Technology': 'from-blue-600 to-indigo-600'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm mb-4"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            LATEST CONTENT 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Content & Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our latest blog posts, cutting-edge AI services, and trending content that's transforming industries worldwide.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getContentByTab().map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center text-white text-4xl`}>
                    {activeTab === 'services' ? <Star className="w-16 h-16" /> : <Eye className="w-16 h-16" />}
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt || item.description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  {activeTab === 'blog' ? (
                    <>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{item.reviews?.rating || 4.8}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{formatPrice(item.price)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.deliveryTime}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  {activeTab === 'blog' ? 'Read More' : 'Learn More'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All {activeTab === 'blog' ? 'Blog Posts' : activeTab === 'services' ? 'Services' : 'Content'}
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestContentShowcase2026;