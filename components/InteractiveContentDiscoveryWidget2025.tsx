import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon, SparklesIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'ai', name: 'AI & Machine Learning', count: 45 },
    { id: 'quantum', name: 'Quantum Computing', count: 23 },
    { id: 'neural', name: 'Neural Interfaces', count: 18 },
    { id: 'cloud', name: 'Cloud Computing', count: 32 },
    { id: 'automation', name: 'Automation', count: 28 },
    { id: 'blockchain', name: 'Blockchain', count: 10 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Transformation Guide",
      description: "Complete guide to implementing AI solutions in your business for maximum ROI and efficiency.",
      category: 'ai',
      type: 'Guide',
      readTime: '15 min',
      difficulty: 'Intermediate',
      featured: true,
      tags: ['AI', 'Business', 'Transformation', 'ROI']
    },
    {
      id: 2,
      title: "Quantum Computing Fundamentals",
      description: "Learn the basics of quantum computing and how it's revolutionizing data processing.",
      category: 'quantum',
      type: 'Tutorial',
      readTime: '20 min',
      difficulty: 'Advanced',
      featured: false,
      tags: ['Quantum', 'Computing', 'Fundamentals', 'Physics']
    },
    {
      id: 3,
      title: "Neural Interface Development",
      description: "Step-by-step guide to building brain-computer interfaces for medical and commercial applications.",
      category: 'neural',
      type: 'Course',
      readTime: '45 min',
      difficulty: 'Expert',
      featured: true,
      tags: ['Neural', 'Interface', 'BCI', 'Medical']
    },
    {
      id: 4,
      title: "Cloud Infrastructure Best Practices",
      description: "Essential strategies for building scalable, secure, and cost-effective cloud solutions.",
      category: 'cloud',
      type: 'Best Practices',
      readTime: '12 min',
      difficulty: 'Beginner',
      featured: false,
      tags: ['Cloud', 'Infrastructure', 'Security', 'Scalability']
    },
    {
      id: 5,
      title: "Automation Workflow Design",
      description: "Create efficient automation workflows that reduce manual work and increase productivity.",
      category: 'automation',
      type: 'Tutorial',
      readTime: '18 min',
      difficulty: 'Intermediate',
      featured: false,
      tags: ['Automation', 'Workflow', 'Productivity', 'Design']
    },
    {
      id: 6,
      title: "Blockchain Integration Strategies",
      description: "How to integrate blockchain technology into existing business systems and processes.",
      category: 'blockchain',
      type: 'Strategy',
      readTime: '25 min',
      difficulty: 'Advanced',
      featured: false,
      tags: ['Blockchain', 'Integration', 'Business', 'Strategy']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Discover Amazing Content</h2>
            <p className="text-blue-100">Find the perfect resources for your learning journey</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-blue-100">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm text-blue-100">AI Content</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, guides, tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-white/20 border border-white/30 rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300 flex items-center"
          >
            <FunnelIcon className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-gray-200 bg-gray-50"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Grid */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {filteredContent.length} Results Found
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <SparklesIcon className="w-4 h-4" />
            <span>AI-Powered Recommendations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl border-2 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                item.featured ? 'border-blue-200 bg-blue-50/50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {item.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                  <span className="text-xs text-gray-500">{item.type}</span>
                </div>
              )}

              <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-gray-500 text-xs">+{item.tags.length - 3} more</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <span>{item.readTime}</span>
                  <span className={`px-2 py-1 rounded ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Load More Content
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;