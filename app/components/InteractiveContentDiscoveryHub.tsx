import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Clock, Zap, Brain, Atom, Cog, ArrowRight, Sparkles } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  featured: boolean;
  trending: boolean;
  new: boolean;
  tags: string[];
  link: string;
  icon: React.ReactNode;
  color: string;
}

const InteractiveContentDiscoveryHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-ultimate-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough',
      category: 'AI',
      description: 'Revolutionary AI advancements delivering 5,000% ROI increases and 10,000x faster processing.',
      featured: true,
      trending: true,
      new: true,
      tags: ['AI', 'Breakthrough', 'ROI', 'Neural Networks', 'Quantum AI'],
      link: '/ai-2025-ultimate-breakthrough',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'Quantum Computing Revolution 2025',
      category: 'Quantum',
      description: 'Breakthrough quantum systems with 1M+ logical qubits and infinite quantum supremacy.',
      featured: true,
      trending: true,
      new: true,
      tags: ['Quantum', 'Computing', 'Revolution', 'Qubits', 'Supremacy'],
      link: '/quantum-computing-revolution-2025',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'automation-solutions-2025',
      title: 'Advanced Automation Solutions 2025',
      category: 'Automation',
      description: 'Intelligent automation systems with 95% efficiency gains and 24/7 autonomous operation.',
      featured: true,
      trending: true,
      new: true,
      tags: ['Automation', 'Intelligence', 'Efficiency', 'Autonomous', 'AI'],
      link: '/automation-solutions-2025',
      icon: <Cog className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'ai-2025-neural-synthesis',
      title: 'AI 2025 Neural Synthesis',
      category: 'AI',
      description: 'Advanced neural synthesis techniques for creating superintelligent AI systems.',
      featured: false,
      trending: true,
      new: true,
      tags: ['AI', 'Neural', 'Synthesis', 'Intelligence', 'Advanced'],
      link: '/ai-2025-neural-synthesis',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning',
      category: 'Quantum',
      description: 'Revolutionary quantum ML algorithms processing exponentially larger datasets.',
      featured: false,
      trending: true,
      new: false,
      tags: ['Quantum', 'ML', 'Algorithms', 'Processing', 'Data'],
      link: '/quantum-machine-learning',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 'autonomous-operations',
      title: 'Autonomous Operations 2025',
      category: 'Automation',
      description: 'Fully autonomous business systems with self-healing capabilities and predictive maintenance.',
      featured: false,
      trending: false,
      new: true,
      tags: ['Autonomous', 'Operations', 'Self-healing', 'Predictive', 'Maintenance'],
      link: '/autonomous-operations-2025',
      icon: <Cog className="w-6 h-6" />,
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 'ai-2030-predictions',
      title: 'AI 2030 Future Predictions',
      category: 'AI',
      description: 'Comprehensive predictions for AI development and its impact on society by 2030.',
      featured: false,
      trending: true,
      new: false,
      tags: ['AI', 'Predictions', 'Future', '2030', 'Society'],
      link: '/ai-2030-predictions',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'quantum-internet',
      title: 'Quantum Internet Infrastructure',
      category: 'Quantum',
      description: 'Global quantum network enabling instant, secure communication across continents.',
      featured: false,
      trending: false,
      new: true,
      tags: ['Quantum', 'Internet', 'Network', 'Communication', 'Security'],
      link: '/quantum-internet',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-violet-400 to-purple-500'
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Automation'];
  const filters = ['all', 'featured', 'trending', 'new'];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    let matchesFilter = true;
    if (selectedFilter === 'featured') matchesFilter = item.featured;
    if (selectedFilter === 'trending') matchesFilter = item.trending;
    if (selectedFilter === 'new') matchesFilter = item.new;

    return matchesSearch && matchesCategory && matchesFilter;
  });

  const handleSearch = async (term: string) => {
    setIsSearching(true);
    setSearchTerm(term);
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsSearching(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mb-8"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Interactive Content Discovery Hub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Discover, explore, and access the most comprehensive collection of revolutionary 
            AI, quantum computing, and automation content ever assembled.
          </motion.p>
        </div>

        {/* Search and Filter Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
              {isSearching && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-400 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-400 transition-all duration-300"
                >
                  {filters.map(filter => (
                    <option key={filter} value={filter} className="bg-gray-800">
                      {filter === 'all' ? 'All Content' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Content Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl`}>
                    {item.icon}
                  </div>
                  <div className="flex gap-2">
                    {item.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                    {item.trending && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold border border-red-500/30">
                        Trending
                      </span>
                    )}
                    {item.new && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  to={item.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                >
                  Explore Content
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-8">
              Try adjusting your search terms or filters to discover more content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedFilter('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Quick Access Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Quick Access</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ai-2025-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              AI 2025 Breakthrough
            </Link>
            <Link
              to="/quantum-computing-revolution-2025"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Quantum Revolution
            </Link>
            <Link
              to="/automation-solutions-2025"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Automation Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveContentDiscoveryHub;