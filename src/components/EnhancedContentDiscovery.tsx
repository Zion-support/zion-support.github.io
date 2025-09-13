import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Target, 
  FileText, 
  TrendingUp, 
  Star, 
  Clock,
  ArrowRight,
  X,
  Tag,
  Calendar
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured: boolean;
  tags: string[];
  link: string;
}

export const EnhancedContentDiscovery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: Enterprise Automation Revolutionary Breakthrough',
      type: 'blog',
      category: 'AI & Automation',
      excerpt: 'Discover how AI-powered enterprise automation is revolutionizing business operations in 2025, delivering unprecedented efficiency gains.',
      readTime: '12 min read',
      date: '2025-01-15',
      featured: true,
      tags: ['AI', 'Enterprise', 'Automation', 'Business Transformation', '2025'],
      link: '/blog/ai-2025-enterprise-automation-revolutionary-breakthrough'
    },
    {
      id: '2',
      title: 'Global Enterprise AI Transformation: Ultimate Success Story',
      type: 'case-study',
      category: 'Case Study',
      excerpt: 'How a Fortune 500 company achieved 500% ROI with comprehensive AI transformation across 40 countries.',
      readTime: '15 min read',
      date: '2025-01-15',
      featured: true,
      tags: ['AI Transformation', 'ROI', 'Enterprise', 'Success Story', 'Manufacturing'],
      link: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success'
    },
    {
      id: '3',
      title: 'AI 2025: Quick Start Implementation Guide',
      type: 'resource',
      category: 'Implementation Guide',
      excerpt: 'Get started with AI implementation in your organization with this comprehensive quick start guide.',
      readTime: '10 min read',
      date: '2025-01-15',
      featured: true,
      tags: ['AI Implementation', 'Quick Start', 'Guide', '2025', 'Strategy'],
      link: '/resources/ai-2025-implementation-quick-start-guide'
    }
  ];

  const categories = ['all', 'AI & Automation', 'Case Study', 'Implementation Guide'];
  const types = ['all', 'blog', 'case-study', 'resource'];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return BookOpen;
      case 'case-study':
        return Target;
      case 'resource':
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-purple-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-blue-500';
      case 'resource':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest AI breakthroughs, success stories, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.replace('-', ' ').toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => {
              const IconComponent = getTypeIcon(item.type);
              const gradient = getTypeColor(item.type);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link to={item.link}>
                    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                            {item.featured && (
                              <span className="text-xs font-medium text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs text-gray-300 bg-slate-700/50 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No content found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the AI revolution with our proven implementation strategies and expert guidance.
            </p>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContentDiscovery;