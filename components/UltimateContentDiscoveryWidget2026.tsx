'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, BookOpen, Video, FileText, Users, Zap } from 'lucide-react';

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Zap className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Users className="w-4 h-4" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-4 h-4" /> },
    { id: 'case-studies', name: 'Case Studies', icon: <FileText className="w-4 h-4" /> }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Transformation Guide 2026",
      category: 'ai',
      type: 'guide',
      rating: 4.9,
      duration: '15 min read',
      views: '12.5k',
      featured: true,
      description: "Complete guide to implementing AI solutions in your business for maximum ROI."
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Real-World Applications",
      category: 'quantum',
      type: 'case-study',
      rating: 4.8,
      duration: '8 min read',
      views: '8.2k',
      featured: false,
      description: "How leading companies are leveraging quantum computing for competitive advantage."
    },
    {
      id: 3,
      title: "Advanced Automation Workflows Tutorial",
      category: 'automation',
      type: 'tutorial',
      rating: 4.7,
      duration: '25 min video',
      views: '15.3k',
      featured: true,
      description: "Step-by-step tutorial on building sophisticated automation workflows."
    },
    {
      id: 4,
      title: "Enterprise AI Implementation Case Study",
      category: 'case-studies',
      type: 'case-study',
      rating: 4.9,
      duration: '12 min read',
      views: '6.8k',
      featured: false,
      description: "Real-world case study of successful AI implementation in Fortune 500 company."
    },
    {
      id: 5,
      title: "Neural Network Architecture Deep Dive",
      category: 'ai',
      type: 'guide',
      rating: 4.6,
      duration: '20 min read',
      views: '9.1k',
      featured: true,
      description: "Comprehensive guide to understanding and implementing neural networks."
    },
    {
      id: 6,
      title: "Quantum Security Protocols Explained",
      category: 'quantum',
      type: 'tutorial',
      rating: 4.8,
      duration: '18 min video',
      views: '7.4k',
      featured: false,
      description: "Understanding quantum encryption and security protocols for modern applications."
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by AI 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the most relevant content, tutorials, and resources tailored to your needs using our advanced AI-powered discovery engine.
          </p>
        </motion.div>

        {/* Search and Filter Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for content, tutorials, guides..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {isSearching && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                </div>
              )}
            </div>

            {/* Filter Button */}
            <button className="flex items-center px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white hover:bg-white/30 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <AnimatePresence>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                {item.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>{item.views}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105 transform">
                  View Content
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-300">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscoveryWidget2026;