import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Clock,
  Eye,
} from 'lucide-react';

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Quantum Computing Revolution',
      excerpt:
        'Exploring how quantum computing is set to revolutionize artificial intelligence in enterprise environments.',
      category: 'AI & Machine Learning',
      author: 'Dr. Sarah Chen',
      date: '2024-03-15',
      readTime: '8 min read',
      views: '2.4k',
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Zero Trust Security: A Complete Implementation Guide',
      excerpt:
        'Learn how to implement zero trust architecture for maximum security in your organization.',
      category: 'Cybersecurity',
      author: 'Michael Rodriguez',
      date: '2024-03-12',
      readTime: '12 min read',
      views: '1.8k',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices for 2024',
      excerpt:
        'Essential strategies and considerations for successful cloud migration projects.',
      category: 'Cloud Computing',
      author: 'Emily Wang',
      date: '2024-03-10',
      readTime: '6 min read',
      views: '3.1k',
      image: '/api/placeholder/400/250',
    },
    {
      id: 4,
      title: 'Data Analytics Trends Shaping Business Intelligence',
      excerpt:
        "Discover the latest trends in data analytics and how they're transforming business decisions.",
      category: 'Data Analytics',
      author: 'Alex Johnson',
      date: '2024-03-08',
      readTime: '10 min read',
      views: '1.5k',
      image: '/api/placeholder/400/250',
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt:
        'Best practices for implementing DevOps automation to improve development efficiency.',
      category: 'DevOps',
      author: 'Lisa Chen',
      date: '2024-03-05',
      readTime: '7 min read',
      views: '2.2k',
      image: '/api/placeholder/400/250',
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Benefits and Challenges',
      excerpt:
        'Understanding edge computing and its impact on modern application architecture.',
      category: 'Cloud Computing',
      author: 'David Park',
      date: '2024-03-02',
      readTime: '9 min read',
      views: '1.9k',
      image: '/api/placeholder/400/250',
    },
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'DevOps',
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, quantum computing,
              cybersecurity, and emerging technologies from our team of experts.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">
              Featured Article
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No articles found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
