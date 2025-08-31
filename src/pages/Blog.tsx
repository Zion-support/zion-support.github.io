import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24, icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6, icon: Shield },
    { id: 'cloud', name: 'Cloud Computing', count: 5, icon: Cloud },
    { id: 'data', name: 'Data & Analytics', count: 3, icon: Database },
    { id: 'innovation', name: 'Innovation', count: 2, icon: Zap }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 and Beyond',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics that drive business growth.',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      publishDate: '2024-12-15',
      readTime: '8 min read',
      category: 'ai-ml',
      featured: true,
      tags: ['AI', 'Enterprise', 'Future Tech', 'Digital Transformation'],
      image: '🤖'
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Building Unbreachable Digital Fortresses',
      excerpt: 'Explore the principles of zero-trust security and how organizations can implement this paradigm to protect against evolving cyber threats.',
      author: 'Michael Rodriguez',
      authorRole: 'Cybersecurity Expert',
      publishDate: '2024-12-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      featured: true,
      tags: ['Cybersecurity', 'Zero-Trust', 'Network Security', 'Compliance'],
      image: '🔒'
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Through Classical Limitations',
      excerpt: 'Dive into the world of quantum computing and understand how this revolutionary technology is solving previously intractable problems.',
      author: 'Dr. James Wilson',
      authorRole: 'Quantum Computing Lead',
      publishDate: '2024-12-10',
      readTime: '10 min read',
      category: 'innovation',
      featured: true,
      tags: ['Quantum Computing', 'Innovation', 'Technology', 'Research'],
      image: '⚛️'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Cloud-Native Architecture: Best Practices for Scalability',
      excerpt: 'Learn the essential principles of building scalable, resilient applications using cloud-native technologies and microservices.',
      author: 'Lisa Thompson',
      authorRole: 'Cloud Architect',
      publishDate: '2024-12-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'Microservices', 'Scalability', 'DevOps'],
      image: '☁️'
    },
    {
      id: 5,
      title: 'Data-Driven Decision Making: From Insights to Action',
      excerpt: 'Transform your business intelligence capabilities with advanced analytics and real-time data processing techniques.',
      author: 'David Kim',
      authorRole: 'Data Scientist',
      publishDate: '2024-12-05',
      readTime: '5 min read',
      category: 'data',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making', 'Analytics'],
      image: '📊'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'Explore how AI and machine learning are transforming healthcare delivery, from diagnosis to treatment planning.',
      author: 'Dr. Emily Johnson',
      authorRole: 'Healthcare AI Specialist',
      publishDate: '2024-12-03',
      readTime: '9 min read',
      category: 'ai-ml',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Medical Technology'],
      image: '🏥'
    },
    {
      id: 7,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Understand how edge computing is enabling real-time processing and reducing latency in IoT and mobile applications.',
      author: 'Alex Chen',
      authorRole: 'IoT Solutions Architect',
      publishDate: '2024-12-01',
      readTime: '6 min read',
      category: 'innovation',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Technology'],
      image: '🌐'
    },
    {
      id: 8,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Discover practical enterprise use cases for blockchain technology in supply chain, identity management, and more.',
      author: 'Rachel Green',
      authorRole: 'Blockchain Consultant',
      publishDate: '2024-11-28',
      readTime: '8 min read',
      category: 'innovation',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Innovation'],
      image: '⛓️'
    },
    {
      id: 9,
      title: 'DevOps Culture: Building High-Performance Engineering Teams',
      excerpt: 'Learn how to foster a DevOps culture that promotes collaboration, automation, and continuous improvement.',
      author: 'Tom Anderson',
      authorRole: 'DevOps Engineer',
      publishDate: '2024-11-25',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['DevOps', 'Culture', 'Automation', 'Engineering'],
      image: '🔄'
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, 
              and emerging technologies that are shaping the future of business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and insightful articles on cutting-edge technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full font-medium">
                      {getCategoryName(post.category)}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with our most recent insights and analysis.
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => !post.featured)
                .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-6">
                    <div className="text-3xl mb-4">{post.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full font-medium">
                        {getCategoryName(post.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, industry insights, and technology trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;