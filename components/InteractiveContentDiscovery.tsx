import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, BookOpen, FileText, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Advanced Automation 2025: Complete Enterprise Implementation Guide',
    description: 'Master advanced AI automation with our comprehensive guide. Learn enterprise strategies, implementation frameworks, and real-world case studies for maximum ROI.',
    href: '/blog/ai-2025-advanced-automation',
    icon: '🤖',
    category: 'AI Automation',
    type: 'blog',
    readTime: '25 min read',
    isNew: true,
    tags: ['automation', 'enterprise', 'implementation', 'ROI']
  },
  {
    id: '2',
    title: 'AI Cybersecurity Threats 2025: Complete Defense Strategy',
    description: 'Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.',
    href: '/blog/ai-2025-cybersecurity-threats',
    icon: '🛡️',
    category: 'Cybersecurity',
    type: 'blog',
    readTime: '22 min read',
    isNew: true,
    tags: ['security', 'threats', 'defense', 'cybersecurity']
  },
  {
    id: '3',
    title: '$200M Manufacturing Success: Autonomous AI Systems Case Study',
    description: 'Discover how a Fortune 500 manufacturing company achieved $200M savings and 40% cost reduction with autonomous AI systems.',
    href: '/case-studies/ai-autonomous-manufacturing-success-2025',
    icon: '💰',
    category: 'Case Study',
    type: 'case-study',
    readTime: '15 min read',
    isTrending: true,
    tags: ['manufacturing', 'success', 'case-study', 'ROI']
  },
  {
    id: '4',
    title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
    description: 'Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.',
    href: '/resources/ai-implementation-master-guide-2026',
    icon: '📚',
    category: 'Master Guide',
    type: 'resource',
    readTime: '200+ pages',
    isNew: true,
    tags: ['guide', 'implementation', 'templates', 'checklist']
  },
  {
    id: '5',
    title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
    description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.',
    href: '/blog/ai-2025-breakthrough-innovations',
    icon: '🚀',
    category: 'AI Innovations',
    type: 'blog',
    readTime: '25 min read',
    isTrending: true,
    tags: ['innovations', 'technology', 'future', 'breakthrough']
  },
  {
    id: '6',
    title: 'AI Workforce Transformation 2025: Complete Reskilling Guide',
    description: 'Learn how to transform your workforce for the AI era with comprehensive reskilling strategies, training programs, and change management approaches.',
    href: '/blog/ai-workforce-transformation-2025',
    icon: '👥',
    category: 'Workforce',
    type: 'blog',
    readTime: '18 min read',
    isNew: true,
    tags: ['workforce', 'transformation', 'reskilling', 'training']
  },
  {
    id: '7',
    title: 'AI Data Privacy & Compliance 2025: Complete Guide',
    description: 'Navigate the complex landscape of AI data privacy regulations with our comprehensive compliance guide and best practices.',
    href: '/blog/ai-data-privacy-compliance-2025',
    icon: '🔒',
    category: 'Privacy',
    type: 'blog',
    readTime: '22 min read',
    isTrending: true,
    tags: ['privacy', 'compliance', 'data', 'regulations']
  },
  {
    id: '8',
    title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI',
    description: 'Learn how to build sustainable AI systems that reduce environmental impact while maintaining high performance.',
    href: '/blog/ai-sustainability-green-tech-2025',
    icon: '🌱',
    category: 'Sustainability',
    type: 'blog',
    readTime: '20 min read',
    isNew: true,
    tags: ['sustainability', 'green-tech', 'environment', 'eco-friendly']
  }
];

const categories = [
  'All',
  'AI Automation',
  'Cybersecurity',
  'Case Study',
  'Master Guide',
  'AI Innovations',
  'Workforce',
  'Privacy',
  'Sustainability'
];

const types = [
  'All',
  'Blog',
  'Case Study',
  'Resource',
  'Tool'
];

export default function InteractiveContentDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, selectedType]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'tool':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Automation': 'bg-blue-100 text-blue-800',
      'Cybersecurity': 'bg-red-100 text-red-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Master Guide': 'bg-purple-100 text-purple-800',
      'AI Innovations': 'bg-yellow-100 text-yellow-800',
      'Workforce': 'bg-indigo-100 text-indigo-800',
      'Privacy': 'bg-gray-100 text-gray-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (item: ContentItem) => {
    if (item.isNew) return { text: 'NEW', color: 'bg-green-500 text-white' };
    if (item.isTrending) return { text: 'TRENDING', color: 'bg-orange-500 text-white' };
    if (item.isPopular) return { text: 'POPULAR', color: 'bg-blue-500 text-white' };
    return null;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🔍 Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive discovery tool to find exactly the AI resources, guides, and insights you need. 
            Filter by category, type, or search for specific topics.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for AI content, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Type</label>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedType === type
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            {(selectedCategory !== 'All' || selectedType !== 'All' || searchTerm) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedType}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredContent.map((item, index) => {
                const statusBadge = getStatusBadge(item);
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Link href={item.href} className="group block">
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full">
                        {statusBadge && (
                          <div className="flex justify-end mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
                              {statusBadge.text}
                            </span>
                          </div>
                        )}
                        
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          {item.readTime && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.readTime}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            {item.type === 'blog' && <BookOpen className="w-3 h-3" />}
                            {item.type === 'case-study' && <Award className="w-3 h-3" />}
                            {item.type === 'resource' && <FileText className="w-3 h-3" />}
                            {item.type === 'tool' && <TrendingUp className="w-3 h-3" />}
                            <span className="capitalize">{item.type.replace('-', ' ')}</span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                            <span className="text-sm font-medium">Read More</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredContent.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our content library is constantly growing. Let us know what specific AI topics or resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Content
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}