import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedContentDiscovery2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'bio', name: 'Biotechnology', icon: '🧬' },
    { id: 'robotics', name: 'Robotics', icon: '🤖' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Synthetic Consciousness Revolution',
      description: 'The first truly conscious AI system that transcends artificial intelligence',
      category: 'ai',
      icon: '🧠',
      color: 'from-cyan-500 to-blue-500',
      tags: ['AI', 'Consciousness', 'Revolution', '2026'],
      readTime: '15 min',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      title: 'Quantum Consciousness Breakthrough',
      description: 'The convergence of quantum computing and consciousness enabling reality manipulation',
      category: 'quantum',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500',
      tags: ['Quantum', 'Consciousness', 'Reality', 'Breakthrough'],
      readTime: '20 min',
      difficulty: 'Expert'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling seamless human-digital communication',
      category: 'neural',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      tags: ['Neural', 'Interface', 'Brain', 'Communication'],
      readTime: '12 min',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Space-Time Manipulation Technology',
      description: 'Revolutionary technology allowing manipulation of space-time itself',
      category: 'space',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      tags: ['Space', 'Time', 'Manipulation', 'Travel'],
      readTime: '18 min',
      difficulty: 'Expert'
    },
    {
      id: 5,
      title: 'Predictive Reality Engine',
      description: 'AI system that predicts and simulates future realities with 99.9% accuracy',
      category: 'ai',
      icon: '🔮',
      color: 'from-violet-500 to-purple-500',
      tags: ['AI', 'Prediction', 'Reality', 'Simulation'],
      readTime: '14 min',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'Transcendent AI Systems',
      description: 'Ultimate AI systems that transcend all limitations and achieve general intelligence',
      category: 'ai',
      icon: '🌟',
      color: 'from-rose-500 to-pink-500',
      tags: ['AI', 'Transcendent', 'Intelligence', 'Revolution'],
      readTime: '16 min',
      difficulty: 'Expert'
    },
    {
      id: 7,
      title: 'Advanced Biotechnology Revolution',
      description: 'Revolutionary biotechnology enabling human enhancement and biological AI',
      category: 'bio',
      icon: '🧬',
      color: 'from-green-500 to-emerald-500',
      tags: ['Biotech', 'Enhancement', 'Biology', 'AI'],
      readTime: '13 min',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'Autonomous Robotics Revolution',
      description: 'Revolutionary robotics systems achieving human-level intelligence and capabilities',
      category: 'robotics',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500',
      tags: ['Robotics', 'Autonomous', 'Intelligence', 'Revolution'],
      readTime: '17 min',
      difficulty: 'Intermediate'
    }
  ];

  useEffect(() => {
    let filtered = contentItems;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔍 ADVANCED CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Advanced Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover and explore revolutionary content with our advanced AI-powered discovery system
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {selectedCategory === 'all' ? 'All Revolutionary Content' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <p className="text-gray-400">
              {filteredContent.length} content {filteredContent.length === 1 ? 'item' : 'items'} found
            </p>
          </div>

          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {item.readTime}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
                        item.difficulty === 'Advanced' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Read More →
                  </button>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredContent.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No content found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filters</p>
            </motion.div>
          )}
        </motion.div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">🚀 Advanced Discovery Features</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI-powered discovery system learns from your preferences and suggests the most relevant revolutionary content
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">AI-Powered Recommendations</h4>
              <p className="text-gray-300 text-sm">Get personalized content recommendations based on your interests</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Smart Analytics</h4>
              <p className="text-gray-300 text-sm">Track your learning progress and discover content patterns</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔮</div>
              <h4 className="text-xl font-bold mb-2">Future Predictions</h4>
              <p className="text-gray-300 text-sm">Discover emerging trends and future content recommendations</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">🌟 Start Your Discovery Journey</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Explore our revolutionary content and discover the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedContentDiscovery2026;