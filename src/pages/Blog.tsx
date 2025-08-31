import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Filter, Calendar, Clock, User, Tag,
  ArrowRight, BookOpen, TrendingUp, Lightbulb,
  Code, Brain, Shield, Cloud, Globe, Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogCategories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'cloud-computing', name: 'Cloud Computing', count: 8 },
    { id: 'industry-insights', name: 'Industry Insights', count: 7 }
  ];

  const popularTags = [
    { id: 'all', name: 'All Tags', count: 45 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', count: 22 },
    { id: 'machine-learning', name: 'Machine Learning', count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 15 },
    { id: 'cloud-native', name: 'Cloud Native', count: 12 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 10 },
    { id: 'data-science', name: 'Data Science', count: 8 },
    { id: 'blockchain', name: 'Blockchain', count: 6 },
    { id: 'iot', name: 'Internet of Things', count: 5 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI: Trends That Will Shape 2025 and Beyond',
      excerpt: 'Explore the cutting-edge AI technologies and trends that are set to revolutionize industries in 2025 and beyond. From quantum machine learning to AI-powered cybersecurity.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      authorAvatar: '👩‍💼',
      publishDate: '2024-12-01',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['artificial-intelligence', 'machine-learning', 'trends'],
      featured: true,
      views: 15420,
      likes: 892,
      image: '🚀'
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Why Traditional Security Models Are Obsolete',
      excerpt: 'Discover why zero-trust security is becoming the new standard and how organizations can implement this paradigm shift to protect against modern cyber threats.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Security',
      authorAvatar: '👨‍💻',
      publishDate: '2024-11-28',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['cybersecurity', 'zero-trust', 'security'],
      featured: true,
      views: 12850,
      likes: 756,
      image: '🛡️'
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'Building Scalable Cloud-Native Applications: Best Practices',
      excerpt: 'Learn the essential principles and best practices for building cloud-native applications that can scale seamlessly and handle modern workloads.',
      author: 'Jennifer Kim',
      authorRole: 'Cloud Architect',
      authorAvatar: '👩‍💻',
      publishDate: '2024-11-25',
      readTime: '7 min read',
      category: 'cloud-computing',
      tags: ['cloud-computing', 'cloud-native', 'scalability'],
      featured: false,
      views: 8950,
      likes: 423,
      image: '☁️'
    },
    {
      id: 4,
      title: 'The Impact of AI on Healthcare: Revolutionizing Patient Care',
      excerpt: 'Explore how artificial intelligence is transforming healthcare delivery, from diagnostic accuracy to personalized treatment plans and patient outcomes.',
      author: 'Dr. Robert Thompson',
      authorRole: 'Healthcare AI Specialist',
      authorAvatar: '👨‍⚕️',
      publishDate: '2024-11-22',
      readTime: '9 min read',
      category: 'ai-ml',
      tags: ['artificial-intelligence', 'healthcare', 'machine-learning'],
      featured: false,
      views: 11200,
      likes: 634,
      image: '🏥'
    },
    {
      id: 5,
      title: 'Data Privacy in the Age of AI: Balancing Innovation and Protection',
      excerpt: 'Navigate the complex landscape of data privacy regulations and AI development, ensuring compliance while driving technological innovation.',
      author: 'Lisa Wang',
      authorRole: 'Privacy & Compliance Lead',
      authorAvatar: '👩‍⚖️',
      publishDate: '2024-11-19',
      readTime: '5 min read',
      category: 'industry-insights',
      tags: ['data-privacy', 'compliance', 'artificial-intelligence'],
      featured: false,
      views: 7650,
      likes: 389,
      image: '🔒'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing AI Closer to Data Sources',
      excerpt: 'Discover how edge computing is enabling real-time AI processing and reducing latency in critical applications across industries.',
      author: 'David Park',
      authorRole: 'Edge Computing Engineer',
      authorAvatar: '👨‍🔬',
      publishDate: '2024-11-16',
      readTime: '6 min read',
      category: 'cloud-computing',
      tags: ['edge-computing', 'artificial-intelligence', 'iot'],
      featured: false,
      views: 6890,
      likes: 312,
      image: '🌐'
    },
    {
      id: 7,
      title: 'Machine Learning in Financial Services: Risk Assessment and Fraud Detection',
      excerpt: 'Learn how financial institutions are leveraging machine learning to improve risk assessment, detect fraud, and enhance customer experiences.',
      author: 'Amanda Foster',
      authorRole: 'FinTech Solutions Architect',
      authorAvatar: '👩‍💼',
      publishDate: '2024-11-13',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['machine-learning', 'fintech', 'risk-assessment'],
      featured: false,
      views: 9450,
      likes: 478,
      image: '💰'
    },
    {
      id: 8,
      title: 'The Rise of Quantum Computing: Implications for AI and Cryptography',
      excerpt: 'Explore the revolutionary potential of quantum computing and its impact on artificial intelligence, cryptography, and computational problem-solving.',
      author: 'Dr. James Wilson',
      authorRole: 'Quantum Computing Researcher',
      authorAvatar: '👨‍🔬',
      publishDate: '2024-11-10',
      readTime: '10 min read',
      category: 'ai-ml',
      tags: ['quantum-computing', 'artificial-intelligence', 'cryptography'],
      featured: false,
      views: 12300,
      likes: 567,
      image: '⚛️'
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return Brain;
      case 'cybersecurity': return Shield;
      case 'cloud-computing': return Cloud;
      case 'industry-insights': return TrendingUp;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'from-purple-500 to-pink-500';
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'cloud-computing': return 'from-blue-500 to-cyan-500';
      case 'industry-insights': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and industry trends. Read thought leadership articles from our experts."
        keywords="blog, AI insights, cybersecurity, cloud computing, industry trends, Zion Tech Group, thought leadership"
        canonicalUrl="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Thought Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and the latest industry trends. Discover how technology is shaping the future.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category and Tag Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Categories:</span>
                  <div className="flex flex-wrap gap-2">
                    {blogCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tag Filter */}
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.slice(0, 5).map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => setSelectedTag(tag.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          selectedTag === tag.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and insightful articles that are shaping the conversation around technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.authorRole}</div>
                    </div>
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {post.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {post.likes} likes
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay current with our latest insights, research, and industry analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                {/* Post Image */}
                <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
                  {post.image}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.authorRole}</div>
                    </div>
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {post.views.toLocaleString()} views
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <button className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTag('all');
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about new articles, industry insights, and exclusive content delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}