import React, { useState } from 'react.ts';
import { motion             } from 'framer-motion.ts';
<<<<<<< HEAD
import { Calendar, Clock, User, Tag, Search, Filter,
  ArrowRight, BookOpen, TrendingUp, Star, Eye
function Blog(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
=======
import { SEO             } from '../components/SEO';
import { Link             } from 'react-router-dom.ts';
import { Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  ShoppingCart,
  BookOpen,
  Rocket
            } from 'lucide-react.ts';

interface BlogPost {












  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;












}

interface Category {












  name: string;
  icon: ;
  count: number;
  color: string;












}

const categories: Category[] = [
  { name: 'AI & Machine Learning', icon: Brain, count: 24, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cloud & DevOps', icon: Cloud, count: 18, color: 'from-green-500 to-emerald-500' },
  { name: 'Cybersecurity', icon: Shield, count: 15, color: 'from-red-500 to-pink-500' },
  { name: 'Business Intelligence', icon: BarChart3, count: 12, color: 'from-purple-500 to-indigo-500' },
  { name: 'Micro SaaS', icon: ShoppingCart, count: 9, color: 'from-orange-500 to-yellow-500' },
  { name: 'Industry Insights', icon: TrendingUp, count: 21, color: 'from-teal-500 to-cyan-500' },
  { name: 'Case Studies', icon: BookOpen, count: 16, color: 'from-pink-500 to-rose-500' },
  { name: 'Technology Trends', icon: Rocket, count: 19, color: 'from-indigo-500 to-purple-500' }
];

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI Autonomous Research: The Future of Knowledge Discovery',
    excerpt: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
    content: 'Full article content here...',
    author: 'Dr. Emily Watson',
    authorAvatar: '/avatars/emily-watson.jpg',
    publishDate: '2025-01-20',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Research', 'Autonomous AI', 'Knowledge Discovery', 'Business Intelligence'],
    image: '/blog/ai-autonomous-research.jpg',
    featured: true,
    views: 18250,
    likes: 945
  },
  {
    id: '2',
    title: 'Revolutionizing Supply Chains with AI-Powered Optimization',
    excerpt: 'Learn how AI Supply Chain Optimization is helping businesses predict demand, optimize inventory, and reduce costs with unprecedented accuracy.',
    content: 'Full article content here...',
    author: 'Marcus Rodriguez',
    authorAvatar: '/avatars/marcus-rodriguez.jpg',
    publishDate: '2025-01-18',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Supply Chain', 'Inventory Optimization', 'Demand Forecasting', 'Cost Reduction'],
    image: '/blog/ai-supply-chain-optimization.jpg',
    featured: true,
    views: 16580,
    likes: 823
  },
  {
    id: '3',
    title: 'AI Content Marketing Suite: The Complete Guide to Automated Content Creation',
    excerpt: 'Explore how AI is revolutionizing content marketing with automated creation, optimization, and distribution for maximum engagement and ROI.',
    content: 'Full article content here...',
    author: 'Lisa Thompson',
    authorAvatar: '/avatars/lisa-thompson.jpg',
    publishDate: '2025-01-16',
    readTime: '11 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Content', 'Content Marketing', 'Automation', 'ROI Optimization'],
    image: '/blog/ai-content-marketing-suite.jpg',
    featured: true,
    views: 15230,
    likes: 756
  }
];

export default function Blog(...args: any[]): any {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 7 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: 1247,
      featured: true,
      tags: ['AI', 'Business', 'Trends', '2025'],
      image: '/images/blog/ai-business-trends.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s New in 2025',
      excerpt: 'Explore the latest developments in quantum computing and their implications for the tech industry.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      views: 892,
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Innovation'],
      image: '/images/blog/quantum-breakthroughs.jpg'
    },
    {
      id: 3,
      title: 'Building Secure Cloud Infrastructure: Best Practices',
      excerpt: 'Learn the essential security practices for building and maintaining robust cloud infrastructure.',
      category: 'cloud',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      views: 567,
      featured: false,
      tags: ['Cloud Security', 'Infrastructure', 'Best Practices'],
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: 4,
      title: 'AI-Powered Cybersecurity: The Next Generation of Protection',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity and threat detection.',
      category: 'cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-01-08',
      readTime: '10 min read',
      views: 734,
      featured: false,
      tags: ['AI', 'Cybersecurity', 'Threat Detection'],
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Micro SaaS Success Stories: Lessons from the Field',
      excerpt: 'Real-world examples of successful micro SaaS businesses and the strategies that made them thrive.',
      category: 'ai',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '7 min read',
      views: 445,
      featured: false,
      tags: ['Micro SaaS', 'Success Stories', 'Business Strategy'],
      image: '/images/blog/micro-saas-success.jpg'
    },
    {
      id: 6,
      title: 'The Impact of Edge Computing on IoT Applications',
      excerpt: 'Understanding how edge computing is transforming IoT deployments and improving performance.',
      category: 'cloud',
      author: 'Lisa Chen',
      date: '2025-01-03',
      readTime: '9 min read',
      views: 389,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Performance'],
      image: '/images/blog/edge-computing-iot.jpg'

  ];

=======
  // Filter posts based on search and category
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const formatDate = (dateString: anyanyanyanyanyanyanyanyanyanyanyanystring)             => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
=======
  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'views':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights in AI, technology, and digital transformation from Zion Tech Group's expert team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.6 }}

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, trends, and expert analysis on AI, quantum computing, cybersecurity,
              and the latest technology innovations shaping the future of business.
=======
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on AI, technology, and digital transformation
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}

                  {category.name} ({category.count})
                </button>
              ))}
=======
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="likes">Most Liked</option>
                <option value="title">Alphabetical</option>
              </select>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12 text-center"

              Featured Articles
            </motion.h2>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {filteredPosts
                .filter(post             => post.featured)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"

                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400 opacity-60" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded"

                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"

            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post             => !post.featured)
              .map((post, index) => (
=======
      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Explore Categories</h2>
            <p className="text-gray-300">Discover insights in your area of interest</p>
          </motion.div>

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-6">
            {categories.map((category, index)             => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} articles</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Stay ahead with our expert insights and analysis</p>
          </motion.div>

          {sortedPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index)             => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:-translate-y-2"

                  <div className="aspect-video bg-gradient-to-br from-slate-600/20 to-slate-700/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-slate-400 opacity-60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                    </div>

=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Post Image */}
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lightbulb className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
<<<<<<< HEAD
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded"

=======
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                          {tag}
                        </span>
                      ))}
                    </div>

<<<<<<< HEAD
                    <button className="w-full bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
=======
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>{post.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        <span>{post.likes.toLocaleString()} likes</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group-hover:translate-x-1"
                    >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"

=======
            transition={{ duration: 0.8 }}
          >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights and trends delivered to your inbox
            </p>
<<<<<<< HEAD

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
<<<<<<< HEAD

            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </motion.div>
        </div>
      </section>
    </div>
  );
}}}