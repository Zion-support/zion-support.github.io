import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Eye,
  MessageSquare,
  TrendingUp,
  Brain,
  Cpu,
  Rocket,
  Shield,
  Zap,
  Cloud
} from 'lucide-react';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Eye },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'innovation', name: 'Innovation', icon: Rocket },
    { id: 'saas', name: 'Micro SaaS', icon: Zap }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Revolutionary Breakthroughs in 2024',
      excerpt: 'Discover how artificial intelligence is transforming industries and creating unprecedented opportunities for businesses worldwide.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.4k',
      comments: 23,
      tags: ['AI', 'Machine Learning', 'Innovation', '2024'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Beyond Classical Limitations',
      excerpt: 'Explore the revolutionary potential of quantum computing and how it\'s reshaping the landscape of computational power.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      views: '1.8k',
      comments: 18,
      tags: ['Quantum Computing', 'Technology', 'Research'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Learn about the evolving cybersecurity landscape and how AI is both creating and solving security challenges.',
      category: 'cybersecurity',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '1.6k',
      comments: 15,
      tags: ['Cybersecurity', 'AI', 'Security', 'Threats'],
      featured: false
    },
    {
      id: 4,
      title: 'Micro SaaS Revolution: Building the Future of Software',
      excerpt: 'Discover how micro SaaS platforms are democratizing software development and empowering businesses of all sizes.',
      category: 'saas',
      author: 'Lisa Wang',
      date: '2024-01-08',
      readTime: '6 min read',
      views: '1.2k',
      comments: 12,
      tags: ['Micro SaaS', 'Software', 'Business', 'Innovation'],
      featured: false
    },
    {
      id: 5,
      title: 'Cloud-Native Architecture: The Foundation of Modern Applications',
      excerpt: 'Explore the principles of cloud-native development and how they\'re enabling scalable, resilient applications.',
      category: 'cloud',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      views: '1.0k',
      comments: 10,
      tags: ['Cloud', 'DevOps', 'Architecture', 'Scalability'],
      featured: false
    },
    {
      id: 6,
      title: 'Innovation Labs: Where Great Ideas Become Reality',
      excerpt: 'Take a behind-the-scenes look at how Zion Tech Group\'s innovation labs are pushing the boundaries of technology.',
      category: 'innovation',
      author: 'Dr. James Wilson',
      date: '2024-01-03',
      readTime: '7 min read',
      views: '950',
      comments: 8,
      tags: ['Innovation', 'Research', 'Technology', 'Labs'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Innovation News</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology innovation from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, quantum computing, cybersecurity, innovation news, tech trends" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Insights & News
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
              and the latest technology innovations from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-16">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-gray-300">Our most popular and insightful content</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    Featured
                  </span>
                </div>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30 mb-4">
                    <Tag className="w-4 h-4" />
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">{featuredPost.excerpt}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views} views
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {featuredPost.comments} comments
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 mx-auto">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Stay updated with our latest insights and analysis</p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-cyan-400 text-xs">+{post.tags.length - 3} more</span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No articles found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights, AI breakthroughs, and innovation news 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}