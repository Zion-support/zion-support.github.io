import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap, count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb, count: 4 },
    { id: 'trends', name: 'Industry Trends', icon: TrendingUp, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 and Beyond",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what companies need to know to stay competitive in the rapidly evolving landscape.",
      author: "Kleber Santos",
      date: "2025-01-15",
      readTime: "8 min read",
      views: "2.4k",
      likes: 156,
      category: "ai",
      image: "/blog/ai-future-business.jpg",
      tags: ["AI", "Business", "Innovation", "2025"]
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Down the Hype vs. Reality",
      excerpt: "A comprehensive look at where quantum computing stands today, its practical applications, and what businesses can realistically expect in the near future.",
      author: "AI Research Team",
      date: "2025-01-12",
      readTime: "12 min read",
      views: "1.8k",
      likes: 98,
      category: "quantum",
      image: "/blog/quantum-computing-reality.jpg",
      tags: ["Quantum Computing", "Technology", "Research"]
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "As AI becomes more sophisticated, so do cyber threats. Learn about the latest security challenges and how AI-powered solutions are fighting back.",
      author: "Security Team",
      date: "2025-01-10",
      readTime: "10 min read",
      views: "3.1k",
      likes: 203,
      category: "cybersecurity",
      image: "/blog/ai-cybersecurity.jpg",
      tags: ["Cybersecurity", "AI", "Security", "Threats"]
    },
    {
      id: 4,
      title: "Micro SaaS: The New Frontier of Business Software",
      excerpt: "Explore how micro SaaS platforms are democratizing access to powerful business tools and creating new opportunities for entrepreneurs and small businesses.",
      author: "Product Team",
      date: "2025-01-08",
      readTime: "6 min read",
      views: "1.5k",
      likes: 87,
      category: "innovation",
      image: "/blog/micro-saas-frontier.jpg",
      tags: ["Micro SaaS", "Business", "Software", "Entrepreneurship"]
    },
    {
      id: 5,
      title: "Digital Transformation: Lessons from Successful Companies",
      excerpt: "Real-world case studies of companies that successfully navigated digital transformation and the key strategies that made them successful.",
      author: "Consulting Team",
      date: "2025-01-05",
      readTime: "15 min read",
      views: "2.7k",
      likes: 134,
      category: "trends",
      image: "/blog/digital-transformation-lessons.jpg",
      tags: ["Digital Transformation", "Case Studies", "Strategy"]
    },
    {
      id: 6,
      title: "The Rise of Autonomous AI Systems in Enterprise",
      excerpt: "How autonomous AI systems are revolutionizing enterprise operations, from customer service to supply chain management and beyond.",
      author: "AI Innovation Team",
      date: "2025-01-03",
      readTime: "11 min read",
      views: "1.9k",
      likes: 112,
      category: "ai",
      image: "/blog/autonomous-ai-enterprise.jpg",
      tags: ["Autonomous AI", "Enterprise", "Automation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zion Tech Group Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Insights, analysis, and thought leadership on AI, quantum computing, 
              cybersecurity, and the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Post Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Post Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Post Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Post Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors duration-300 group">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and updates from Zion Tech Group 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into specific topics and stay ahead of the latest technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <category.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">
                  {category.count} article{category.count !== 1 ? 's' : ''} available
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span>Browse Articles</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}