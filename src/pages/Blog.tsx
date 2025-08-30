import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Star, 
  Eye,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  ShoppingCart,
  Rocket
} from 'lucide-react';

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
  icon: React.ComponentType<any>;
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
    title: 'The Rise of Micro SaaS: Building Scalable Solutions',
    excerpt: 'Explore how micro SaaS solutions are democratizing enterprise software and enabling businesses to access powerful tools without massive investments.',
    content: 'Full article content here...',
    author: 'Kleber Santos',
    authorAvatar: '/avatars/kleber-santos.jpg',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Micro SaaS',
    tags: ['Micro SaaS', 'Software as a Service', 'Enterprise Software', 'Digital Transformation'],
    image: '/blog/micro-saas-rise.jpg',
    featured: false,
    views: 12450,
    likes: 567
  }
];

const Blog: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Insights, updates, and thought leadership on AI, technology, and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Categories
              </button>
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover insights across different technology domains and business areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-zion-cyan text-center font-medium">{category.count} Articles</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights and trends in technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Post Image */}
                  <div className="relative h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-zion-cyan opacity-60" />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm text-zion-cyan font-medium">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;