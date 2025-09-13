import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  SparklesIcon,
  FireIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function InteractiveContentDiscoveryWidget() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟', count: 47 },
    { id: 'ai-breakthroughs', label: 'AI Breakthroughs', icon: '🚀', count: 12 },
    { id: 'implementation', label: 'Implementation', icon: '⚙️', count: 8 },
    { id: 'case-studies', label: 'Case Studies', icon: '📊', count: 15 },
    { id: 'startup-guides', label: 'Startup Guides', icon: '💼', count: 7 },
    { id: 'trends', label: 'Trends & Insights', icon: '📈', count: 5 }
  ];

  const allContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs: Transforming Industries",
      description: "Discover the groundbreaking AI innovations revolutionizing industries in 2025.",
      category: 'ai-breakthroughs',
      readTime: "25 min read",
      icon: "🚀",
      badge: "NEW",
      badgeColor: "bg-purple-600",
      metrics: "2,500% ROI",
      href: "/ai-2025-revolutionary-breakthroughs",
      rating: 5,
      trending: true
    },
    {
      id: 2,
      title: "AI Startup Funding Playbook 2025: From Seed to Series A",
      description: "Master AI startup funding with proven strategies to secure $47B+ in funding.",
      category: 'startup-guides',
      readTime: "22 min read",
      icon: "💰",
      badge: "HOT",
      badgeColor: "bg-green-600",
      metrics: "$47B+ Funding",
      href: "/ai-startup-funding-playbook-2025",
      rating: 5,
      trending: true
    },
    {
      id: 3,
      title: "Enterprise AI Transformation: $100M Revenue Impact",
      description: "How a Fortune 500 company achieved $100M revenue impact through AI transformation.",
      category: 'case-studies',
      readTime: "18 min read",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-blue-600",
      metrics: "$100M Impact",
      href: "/ai-enterprise-transformation-success",
      rating: 5,
      featured: true
    },
    {
      id: 4,
      title: "AI Implementation Master Guide 2025: Complete 150+ Page Resource",
      description: "Master AI implementation with comprehensive guide, templates, and strategies.",
      category: 'implementation',
      readTime: "45 min read",
      icon: "📚",
      badge: "FREE",
      badgeColor: "bg-purple-600",
      metrics: "150+ Pages",
      href: "/ai-implementation-master-guide-2025",
      rating: 5,
      popular: true
    },
    {
      id: 5,
      title: "Generative AI Revolution: Transforming Business in 2025",
      description: "Explore how generative AI is revolutionizing business operations and automation.",
      category: 'trends',
      readTime: "22 min read",
      icon: "🎨",
      badge: "TRENDING",
      badgeColor: "bg-orange-600",
      metrics: "10x Content Output",
      href: "/ai-2025-generative-ai-revolution",
      rating: 5,
      trending: true
    },
    {
      id: 6,
      title: "Ethical AI Governance: Building Trust in the Age of AI",
      description: "Navigate AI ethics and governance to implement responsible AI practices.",
      category: 'trends',
      readTime: "25 min read",
      icon: "⚖️",
      badge: "NEW",
      badgeColor: "bg-emerald-600",
      metrics: "95% Trust Score",
      href: "/ai-2025-ethical-ai-governance",
      rating: 5,
      new: true
    }
  ];

  useEffect(() => {
    let filtered = allContent;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-3 mb-6">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-bold">DISCOVER CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-4">
            Find Your Perfect AI Resource
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search through our comprehensive library of AI insights, guides, and case studies
          </p>
        </div>

        {/* Search and Filter Interface */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search AI content, guides, case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredContent.length} Result{filteredContent.length !== 1 ? 's' : ''} Found
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
              <ArrowRightIcon className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredContent.slice(0, isExpanded ? filteredContent.length : 6).map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1"
                >
                  <Link href={item.href} className="block">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{item.icon}</div>
                        <div className="flex items-center gap-2">
                          <span className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                            {item.badge}
                          </span>
                          {item.trending && (
                            <FireIcon className="h-4 w-4 text-red-500" />
                          )}
                          {item.featured && (
                            <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                          )}
                          {item.new && (
                            <SparklesIcon className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4" />
                          {item.readTime}
                        </div>
                        <div className="text-sm font-medium text-purple-600">
                          {item.metrics}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredContent.length > 6 && !isExpanded && (
            <div className="text-center mt-8">
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View {filteredContent.length - 6} More Results
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse different categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}