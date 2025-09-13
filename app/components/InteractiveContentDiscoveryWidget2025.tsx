import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, X } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedContent, setSelectedContent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'ai', name: 'AI Solutions', count: 45 },
    { id: 'quantum', name: 'Quantum Computing', count: 23 },
    { id: 'automation', name: 'Automation', count: 34 },
    { id: 'security', name: 'Cybersecurity', count: 28 },
    { id: 'analytics', name: 'Analytics', count: 26 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough 2025",
      category: "ai",
      description: "Revolutionary AI systems achieving true consciousness and autonomous decision-making capabilities",
      tags: ["AI", "Consciousness", "Autonomous"],
      rating: 4.9,
      views: 12500,
      readTime: "8 min",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Quantum Neural Network Architecture",
      category: "quantum",
      description: "Next-generation quantum computing integrated with neural networks for exponential processing power",
      tags: ["Quantum", "Neural Networks", "Computing"],
      rating: 4.8,
      views: 8900,
      readTime: "12 min",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Autonomous Security Systems",
      category: "security",
      description: "Self-healing cybersecurity systems with predictive threat detection and automated response",
      tags: ["Security", "Automation", "AI"],
      rating: 4.7,
      views: 7600,
      readTime: "6 min",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Business Process Automation Suite",
      category: "automation",
      description: "Complete automation solutions reducing operational costs by 60% and increasing productivity by 300%",
      tags: ["Automation", "Business", "Productivity"],
      rating: 4.9,
      views: 15200,
      readTime: "10 min",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Predictive Analytics Platform",
      category: "analytics",
      description: "AI-powered forecasting with 95% accuracy in market predictions and business insights",
      tags: ["Analytics", "AI", "Forecasting"],
      rating: 4.6,
      views: 6800,
      readTime: "7 min",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Quantum Supremacy in Business",
      category: "quantum",
      description: "Achieving quantum supremacy for complex business optimization and decision-making processes",
      tags: ["Quantum", "Business", "Optimization"],
      rating: 4.8,
      views: 9200,
      readTime: "15 min",
      featured: true,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, technology insights, and implementation guides
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedContent(item)}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {item.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8 text-gray-600"
        >
          Showing {filteredContent.length} of {contentItems.length} content items
        </motion.div>

        {/* Content Modal */}
        <AnimatePresence>
          {selectedContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedContent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {categories.find(c => c.id === selectedContent.category)?.name}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-2">
                        {selectedContent.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedContent(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedContent.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedContent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {selectedContent.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {selectedContent.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedContent.readTime}
                      </div>
                    </div>
                    <motion.a
                      href={`/content/${selectedContent.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;